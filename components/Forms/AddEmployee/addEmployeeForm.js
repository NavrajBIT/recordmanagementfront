import { useState } from "react";
import { addEmployeeFormData } from "../../../formdata";

const AddEmployeeForm = () => {
  const [formReceived, setFormReceived] = useState({});

  const handelchange = (key, value) => {
    formReceived[key] = value;
    setFormReceived({...formReceived, [key]: value});
  }

  const submitForm = async (e) => {
    const response = await fetch('/api/addemp', {
      method: 'POST',
      body: JSON.stringify({formReceived}),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    console.log(data);
    e.preventDefault();
  }

  return (
    <div className="formPage">
      <form action="#" method='post' className="myform">
        {/* lables */}
        {addEmployeeFormData.map((einput, index) => {
          return(
            <div key={index} className="formelement">
            <label htmlFor={einput.name}>
              {einput.label}
              {einput.required ? <span style={{color: "red"}}>*</span> : ""}
            </label>
            {einput.type === "dropdown" ? 
            einput.required ? 
            <select name={einput.name} id={einput.id} required onChange={(e) => handelchange(einput.name, e.target.value)}>
              {einput.placeholder.map((opt, index) => {
                return(
                  <option key={index} value={opt}>{opt}</option>
                );
              })}
            </select>
            :
            <select name={einput.name} id={einput.id} onChange={(e) => handelchange(einput.name, e.target.value)}>
              {einput.placeholder.map((opt, index) => {
                return(
                  <option key={index} value={opt}>{opt}</option>
                );
              })}
            </select>
            :
            einput.required ? 
            <input name={einput.name} type={einput.type} id={einput.id} placeholder={einput.placeholder} required onChange={(e) => handelchange(einput.name, e.target.value)}/>
            :
            <input name={einput.name} type={einput.type} id={einput.id} placeholder={einput.placeholder} onChange={(e) => handelchange(einput.name, e.target.value)}/>
            }
            </div>
          );
        })}
        <button 
        type="submit" 
        onClick={
          (e) => {
            submitForm(e);
          }}>Submit</button>
      </form>
    </div>
  );
};

export default AddEmployeeForm;
