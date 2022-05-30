import { addEmployeeFormData } from "../formdata";
import React from "react";
import { useState } from "react";

const AddEmployeeForm = () => {
  const [status, setStatus] = useState("");
  const [myform, setMyForm] = useState([...addEmployeeFormData]);
  const submitForm = () => {
    let formComplete = true;
    setStatus("");
    addEmployeeFormData.forEach((formelement) => {
      let formElementValue = document.getElementById(formelement["id"]).value;
      if (formelement["required"] && formElementValue == "") {
        setStatus("'" + formelement["label"] + "' field is required.");
        document.getElementById(formelement["id"]).style.border =
          "1px solid rgb(248, 129, 129)";
        formComplete = false;
      } else {
        document.getElementById(formelement["id"]).style.border =
          "1px solid black";
        setMyForm([...myform]);
      }
      if (formComplete) {
      }
    });
  };

  const FormPreview = () => {
    return (
      <>
        <div className="formpreview">
          {addEmployeeFormData.map((formelement) => {
            return (
              <React.Fragment key={formelement["id"] + "preview"}>
                <div className="formelement">
                  {formelement["label"]}:{formelement["value"]}
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </>
    );
  };
  return (
    <>
      <div className="formPage">
        <div className="myform">
          {addEmployeeFormData.map((formelement) => {
            if (formelement["type"] === "dropdown") {
              return (
                <React.Fragment key={formelement["id"]}>
                  <div className="formelement">
                    <label htmlFor={formelement["id"]}>
                      {formelement["label"]}
                    </label>
                    <select name={formelement["label"]} id={formelement["id"]}>
                      {formelement["placeholder"].map((option) => {
                        return (
                          <React.Fragment key={formelement["id"] + option}>
                            <option value={option}>{option}</option>
                          </React.Fragment>
                        );
                      })}
                    </select>
                  </div>
                </React.Fragment>
              );
            }
            return (
              <React.Fragment key={formelement["id"]}>
                <div className="formelement">
                  <label htmlFor={formelement["id"]}>
                    {formelement["label"]}
                    {formelement["required"] && (
                      <>
                        <span>*</span>
                      </>
                    )}
                  </label>
                  <input
                    type={formelement["type"]}
                    placeholder={formelement["placeholder"]}
                    id={formelement["id"]}
                  />
                </div>
              </React.Fragment>
            );
          })}
          <h2>{status}</h2>
          <button onClick={() => submitForm()}>Submit</button>
        </div>
      </div>
      {/* <FormPreview /> */}
    </>
  );
};

export default AddEmployeeForm;
