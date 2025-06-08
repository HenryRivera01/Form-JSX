export const Input = ({label, type, required}) => {
     const name = label.toLowerCase().replace(/\s+/g, "");
    const isRequired = required === true || required === "true"; // admite boolean o string
  return (
     <div className="input-container">
      <label htmlFor={name}>
        {label}{isRequired && <span style={{ color: "white" }}> *</span>}:
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={isRequired}
        autoComplete="on"
      />
    </div>
  );
};
