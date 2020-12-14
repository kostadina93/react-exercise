import { useState } from 'react';

const ServicesValidationForm = (props) => {
  const [ phone, setPhone ] = useState("")
  const [ email, setEmail ] = useState("")
  const [ password, setPassword ] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();

    setPhone("")
    setEmail("")
    setPassword("")
    alert("Info validated!");
  };

  const phonePattern = "^([+]?[0-9]{2,3})?[2|6]{1}[0-9]{9}$";
  // const emailPattern = "^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$";
  const passwordPattern = "^(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=.*[0-9]).*$";

  return (
    <div className="ServicesValidationForm">
      <h3 className="ServicesValidationForm__title">Validate your info</h3>
      <span className="ServicesValidationForm__description">We create websites and campaigns that expose new opportunities</span>
      <form className="ServicesValidationForm__form" id="infoValidationForm" onSubmit={handleSubmit}>
        <div className="form__fields">
          <div className="form__field">
            <input placeholder="Your Phone" name="phone" pattern={phonePattern} type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />
          </div>
          <div className="form__field">
            <input placeholder="Your Email" name="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="form__field">
            <input placeholder="Password" name="password" type="password" pattern={passwordPattern} value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
        </div>
        <button className="form__submit-button">Submit</button>
      </form>
    </div>
  )
}

export default ServicesValidationForm;