import { formatProp } from "../../utils/formatProp"

export const Input = ({ label, type, required }) => {
  const name = formatProp(label)
  return (
    <div className="input-container">
      <label htmlFor={name}>
        {label}
        {required && <span style={{ color: "white" }}> *</span>}:
      </label>
      <input id={name} name={name} type={type} required={required} />
    </div>
  )
}
