import { useRef, useState } from 'react'
import { FaCloudUploadAlt } from 'react-icons/fa'

function FileUploader({ file, setFile, mode }) {
  const inputRef = useRef(null)
  const [isDragging, setIsDragging] = useState(false)

  const handleChange = (event) => {
    const selectedFile = event.target.files?.[0] || null
    setFile(selectedFile)
  }

  const handleDrop = (event) => {
    event.preventDefault()
    setIsDragging(false)
    const selectedFile = event.dataTransfer.files?.[0] || null
    setFile(selectedFile)
  }

  return (
    <div
      className={isDragging ? 'uploader-card dragging' : 'uploader-card'}
      onDragOver={(event) => {
        event.preventDefault()
        setIsDragging(true)
      }}
      onDragLeave={() => setIsDragging(false)}
      onDrop={handleDrop}
    >
      <label htmlFor="document-file" className="uploader-label">
        <FaCloudUploadAlt />
        <span>{mode}</span>
      </label>
      <input id="document-file" ref={inputRef} type="file" onChange={handleChange} accept=".pdf,.doc,.docx,.rtf" />
      <p className="uploader-hint">Arrastrá o seleccioná un archivo para iniciar la conversión simulada.</p>
      {file && <p className="selected-file">Archivo seleccionado: {file.name}</p>}
    </div>
  )
}

export default FileUploader
