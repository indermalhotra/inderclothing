import "./FormInput.scss"
function FormInput({label, ...otherInformation}) {
  return (
    <div className="group">
      <input className="form-input" {...otherInformation}/>
      {label && <label className={`${otherInformation.value ? 'shrink' : ''} form-input-label`}>{label}</label>}
    </div>
  );
}

export default FormInput;
