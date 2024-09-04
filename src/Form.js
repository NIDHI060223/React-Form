import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Form({addFormData}) {
  const initialState = {
    firstname: "",
    lastname: "",
    email: "",
    contact: "",
    gender: "",
    subject: "",
    resume: "",
    url: "",
    about: "",
  };

  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChanges = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
      const newErrors = {};

      if(!values.firstname.trim()) newErrors.firstname = 'First Name is Required.';
      if(!values.lastname.trim()) newErrors.lastname = 'Last Name is Required.';
      if(!values.email.trim()){
        newErrors.email = 'Email is Required.';
      } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        newErrors.email = 'Email is invalid.';
      }
      if(!values.contact.trim()) newErrors.contact = 'Contact is Required.';
      if(!values.gender) newErrors.gender = 'Gender is Required.';
      if(!values.subject) newErrors.subject = 'Subject is Required.';

      setErrors(newErrors);

      return Object.keys(newErrors).length === 0;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if(validateForm()){
      addFormData(values);
      setValues(initialState);
      navigate('/data');
    }
   
  };

  const handleReset = () => {
    setValues(initialState);
  };

  return (
    <div className="container">
      <h1>Form in React</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="firstname">First Name*</label>
        <input
          type="text"
          placeholder="Enter First Name"
          name="firstname"
          value={values.firstname}
          onChange={handleChanges}
        />
        {errors.firstname && <p style={{color:'red'}}>{errors.firstname}</p>}

        <label htmlFor="lastname">Last Name*</label>
        <input
          type="text"
          placeholder="Enter Last Name"
          name="lastname"
          value={values.lastname}
          onChange={handleChanges}
        />
        {errors.lastname && <p style={{color:'red'}}>{errors.lastname}</p>}

        <label htmlFor="email">Email*</label>
        <input
          type="email"
          placeholder="Enter Email"
          name="email"
          value={values.email}
          onChange={handleChanges}
        />
         {errors.email && <p style={{color:'red'}}>{errors.email}</p>}

        <label htmlFor="contact">Contact*</label>
        <input
          type="text"
          placeholder="Enter Phone #"
          name="contact"
          value={values.contact}
          onChange={handleChanges}
        />
         {errors.contact && <p style={{color:'red'}}>{errors.contact}</p>}

        <label htmlFor="gender">Gender</label>
        <input
          type="radio"
          name="gender"
          value="Male"
          checked={values.gender === "Male"}
          onChange={handleChanges}
        />{" "}
        Male
        <input
          type="radio"
          name="gender"
          value="Female"
          checked={values.gender === "Female"}
          onChange={handleChanges}
        />{" "}
        Female
        <input
          type="radio"
          name="gender"
          value="Other"
          checked={values.gender === "Other"}
          onChange={handleChanges}
        />{" "}
        Other
        {errors.gender && <p style={{color:'red'}}>{errors.gender}</p>}

        <label htmlFor="subject">Subject</label>
        <select
          name="subject"
          id="subject"
          value={values.subject}
          onChange={handleChanges}
        >
          <option value="Maths">Maths</option>
          <option value="Physic">Physic</option>
          <option value="Chemistry">Chemistry</option>
          <option value="English">English</option>
        </select>
        {errors.subject && <p style={{color:'red'}}>{errors.subject}</p>}

        <label htmlFor="resume">Resume</label>
        <input
          type="file"
          placeholder="Select Resume"
          name="resume"
          value={values.resume}
          onChange={handleChanges}
        />

        <label htmlFor="url">URL</label>
        <input
          type="text"
          placeholder="Enter Image URL"
          name="url"
          value={values.url}
          onChange={handleChanges}
        />

        <label htmlFor="about">About</label>
        <textarea
          id="about"
          name="about"
          value={values.about}
          cols="30"
          rows="10"
          onChange={handleChanges}
          placeholder="Enter Description"
        ></textarea>

        <button type="button" onClick={handleReset}>
          Reset
        </button>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
