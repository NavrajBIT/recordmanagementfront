import { addEmployeeFormData } from "../../../formdata";
import React from "react";
import { useState } from "react";

const AddEmployeeForm = () => {
  const [status, setStatus] = useState("");
  const [myform, setMyForm] = useState([]);
  const [canPreview, setCanPreview] = useState(false);

  const submitForm = () => {
    let formComplete = true;
    let filledForm = [];
    setStatus("");
    addEmployeeFormData.forEach((formelement) => {
      let formElementValue = document.getElementById(formelement["id"]).value;
      if (formelement["required"] && formElementValue == "") {
        setStatus("'" + formelement["label"] + "' field is required.");
        document.getElementById(formelement["id"]).style.border =
          "1px solid rgb(248, 129, 129)";
        formComplete = true;
      } else {
        document.getElementById(formelement["id"]).style.border =
          "1px solid black";
        if (formelement["type"] === "file") {
          let filereader = new FileReader();
          filereader.readAsDataURL(formElementValue.files[0]);
          filereader.onloadend = function (event) {
            localStorage.setItem(formelement["label"], filereader.result);
          };
        }
        filledForm.push({
          label: formelement["label"],
          value: formElementValue,
          type: formelement["type"],
        });
      }
      if (formComplete) {
        setMyForm([...filledForm]);
        setCanPreview(true);
      }
    });
  };

  const FormPreview = () => {
    if (canPreview) {
      return (
        <>
          <div className="formpreview">
            {myform.map((formelement) => {
              return (
                <React.Fragment
                  key={formelement["label"] + formelement["value"] + "preview"}
                >
                  <div className="formelement">
                    <div>{formelement["label"]}:</div>
                    <div>
                      {formelement["type"] === "file" ? (
                        <>
                          <img
                            src={localStorage.getItem(formelement["label"])}
                            alt=""
                          />
                        </>
                      ) : (
                        formelement["value"]
                      )}
                    </div>
                  </div>
                </React.Fragment>
              );
            })}
            <button
              onClick={() => {
                setCanPreview(false);
              }}
            >
              Recheck
            </button>
            <button>Confirm</button>
          </div>
        </>
      );
    }
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
          <button
            onClick={() => {
              submitForm();
            }}
          >
            Submit
          </button>
        </div>
      </div>
      <FormPreview />
    </>
  );
};

export default AddEmployeeForm;
