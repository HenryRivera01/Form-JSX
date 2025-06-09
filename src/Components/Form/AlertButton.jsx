export const AlertButton = () => {
  function showAlert() {
    alert("soy una alerta")
  }

  return <button onClick={showAlert}>alert</button>
}
