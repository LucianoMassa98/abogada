function ConvertButton({ onClick }) {
  return (
    <button type="button" className="button button-primary converter-button" onClick={onClick}>
      Convertir
    </button>
  )
}

export default ConvertButton
