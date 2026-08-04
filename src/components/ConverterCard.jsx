import { useMemo, useState } from 'react'
import { FaFilePdf, FaFileWord } from 'react-icons/fa'
import FileUploader from './FileUploader'
import ConvertButton from './ConvertButton'
import { convertPdfToWord, convertWordToPdf } from '../services/api'

function ConverterCard() {
  const [mode, setMode] = useState('pdf-to-word')
  const [file, setFile] = useState(null)
  const [status, setStatus] = useState('idle')
  const [message, setMessage] = useState('')
  const [downloadUrl, setDownloadUrl] = useState('')
  const [downloadName, setDownloadName] = useState('')

  const activeLabel = useMemo(() => (mode === 'pdf-to-word' ? 'PDF → Word' : 'Word → PDF'), [mode])

  const handleConvert = async () => {
    if (!file) {
      setStatus('error')
      setMessage('Seleccioná un archivo para continuar.')
      setDownloadUrl('')
      setDownloadName('')
      return
    }

    setStatus('loading')
    setMessage('Procesando documento localmente...')
    setDownloadUrl('')
    setDownloadName('')

    try {
      const result = mode === 'pdf-to-word'
        ? await convertPdfToWord(file)
        : await convertWordToPdf(file)

      setStatus('success')
      setMessage(result.message)
      setDownloadUrl(result.downloadUrl)
      setDownloadName(result.fileName)
    } catch (error) {
      setStatus('error')
      setMessage(error.message)
    }
  }

  return (
    <section className="section">
      <div className="container converter-card">
        <div className="converter-header">
          <div>
            <p className="eyebrow">Herramienta</p>
            <h1>Convertidor de documentos</h1>
          </div>
          <div className="toggle-group" role="tablist" aria-label="Tipo de conversión">
            <button
              type="button"
              className={mode === 'pdf-to-word' ? 'toggle active' : 'toggle'}
              onClick={() => setMode('pdf-to-word')}
            >
              <FaFilePdf />
              PDF → Word
            </button>
            <button
              type="button"
              className={mode === 'word-to-pdf' ? 'toggle active' : 'toggle'}
              onClick={() => setMode('word-to-pdf')}
            >
              <FaFileWord />
              Word → PDF
            </button>
          </div>
        </div>

        <div className="converter-body">
          <p className="converter-description">
            Esta herramienta realiza la conversión directamente en el navegador, sin depender de un backend externo.
          </p>
          <FileUploader file={file} setFile={setFile} mode={activeLabel} />
          <ConvertButton onClick={handleConvert} />

          {status !== 'idle' && (
            <div className={`status-card ${status}`}>
              <p>{message}</p>
            </div>
          )}

          {downloadUrl && (
            <a className="button button-secondary download-link" href={downloadUrl} download={downloadName}>
              Descargar resultado
            </a>
          )}
        </div>
      </div>
    </section>
  )
}

export default ConverterCard
