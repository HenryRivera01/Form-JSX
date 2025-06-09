export const Input = ({label, type, required}) => {
     const name = label.toLowerCase().replace(/\s+/g, "");
  return (
     <div className="input-container">
      <label htmlFor={name}>
        {label}{required && <span style={{ color: "white" }}> *</span>}:
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete="on"
      />
    </div>
  );
};
