const API_BASE_URL = 'http://localhost:3001/api'

function buildFileName(file, extension) {
  return `${file.name.replace(/\.[^.]+$/, '')}.${extension}`
}

function sanitizeFileName(fileName) {
  const lastDot = fileName.lastIndexOf('.')
  const name = lastDot > -1 ? fileName.slice(0, lastDot) : fileName
  const extension = lastDot > -1 ? fileName.slice(lastDot).toLowerCase() : ''
  const cleanedName = name
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-zA-Z0-9._-]+/g, '_')
    .replace(/^_+|_+$/g, '')
    .slice(0, 80)

  return `${cleanedName || 'archivo'}${extension}`
}

function prepareFileForUpload(file) {
  return new File([file], sanitizeFileName(file.name), {
    type: file.type || 'application/octet-stream',
    lastModified: file.lastModified,
  })
}

async function requestConversion(file, endpoint) {
  if (!file) {
    throw new Error('No se recibió un archivo válido.')
  }

  const safeFile = prepareFileForUpload(file)
  const formData = new FormData()
  formData.append('file', safeFile)

  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    method: 'POST',
    body: formData,
  })

  if (!response.ok) {
    let errorMessage = 'Error al convertir el documento.'

    try {
      const errorData = await response.json()
      errorMessage = errorData.message || errorMessage
    } catch {
      errorMessage = `Error ${response.status}`
    }

    throw new Error(errorMessage)
  }

  const blob = await response.blob()
  const downloadUrl = URL.createObjectURL(blob)
  const disposition = response.headers.get('content-disposition') || ''
  const fileName = disposition.split('filename=')[1]?.replace(/"/g, '') || buildFileName(safeFile, endpoint.includes('pdf-to-word') ? 'docx' : 'pdf')

  return {
    message: endpoint.includes('pdf-to-word')
      ? 'Conversión completada correctamente.'
      : 'Conversión completada correctamente.',
    downloadUrl,
    fileName,
  }
}

export async function convertPdfToWord(file) {
  if (!file) {
    throw new Error('No se recibió un archivo válido.')
  }

  if (!file.name.toLowerCase().endsWith('.pdf')) {
    throw new Error('Este modo solo acepta archivos PDF.')
  }

  return requestConversion(file, '/convert/pdf-to-word')
}

export async function convertWordToPdf(file) {
  if (!file) {
    throw new Error('No se recibió un archivo válido.')
  }

  if (!/\.docx?$|\.rtf$/i.test(file.name)) {
    throw new Error('Este modo solo acepta archivos Word o RTF.')
  }

  return requestConversion(file, '/convert/word-to-pdf')
}
