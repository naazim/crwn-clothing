import "./form-input.styles.scss";

const FormInput = ({ label, handleChange, ...otherProps }) => {
  return (
    <div className="group">
      <input
        type="text"
        className="form-input"
        onChange={handleChange}
        {...otherProps}
      />
      {label && (
        <label
          className={`${otherProps.value.length && "shrink"} form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
