import { addEmployeeFormData } from "../../../formdata";
import { ethers } from "ethers";
import React from "react";
import { useState } from "react";
import ContractCall from "../../API/contractCall";
import uploadFile from "../../API/ipfsUpload";

const AddEmployeeForm = () => {
  const [status, setStatus] = useState("");
  const [myform, setMyForm] = useState([]);
  const [canPreview, setCanPreview] = useState(false);

  const submitForm = () => {
    let formComplete = true;
    let filledForm = {};
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
        if (formelement["type"] === "file") {
          formElementValue = document
            .getElementById(formelement["id"] + "label")
            .innerHTML.toString();
        }
        if (formelement["type"] === "number") {
          formElementValue = parseInt(formElementValue);
        }
        if (formelement["type"] === "date") {
          let myDate = new Date(formElementValue);
          formElementValue = parseInt(myDate.getTime() / 1000);
        }
        filledForm[formelement["label"]] = formElementValue;
      }
    });
    if (formComplete) {
      setMyForm({ ...filledForm });
      setCanPreview(true);
    }
  };

  const confirmForm = async () => {
    let myContractCall = new ContractCall(myform);
    let response = await myContractCall.submitData();
    console.log(response);
  };
  const FormPreview = () => {
    return (
      <>
        <div className="myform">
          {addEmployeeFormData.map((formelement) => {
            return (
              <React.Fragment
                key={
                  formelement["label"] +
                  myform[formelement["label"]] +
                  "preview"
                }
              >
                <div className="formelement">
                  <div>{formelement["label"]}:</div>
                  {formelement["type"] === "file" ? (
                    <>
                      <div className="imgContainer">
                        <img
                          src={
                            "https://ipfs.io/ipfs/" +
                            myform[formelement["label"]]
                          }
                          alt=""
                        />
                      </div>
                    </>
                  ) : (
                    <div>{myform[formelement["label"]]}</div>
                  )}
                </div>
              </React.Fragment>
            );
          })}
          <button
            onClick={() => {
              setCanPreview(false);
            }}
          >
            {"<"} Back
          </button>
          <button onClick={() => confirmForm()}>Confirm {">"}</button>
        </div>
      </>
    );
  };
  return (
    <>
      <div className="formPage">
        {!canPreview ? (
          <>
            <div className="myform">
              {addEmployeeFormData.map((formelement) => {
                if (formelement["type"] === "dropdown") {
                  return (
                    <React.Fragment key={formelement["id"]}>
                      <div className="formelement">
                        <label htmlFor={formelement["id"]}>
                          {formelement["label"]}
                        </label>
                        <select
                          name={formelement["label"]}
                          id={formelement["id"]}
                        >
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
                if (formelement["type"] === "file") {
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

                        <div>
                          <label
                            htmlFor={formelement["id"]}
                            id={formelement["id"] + "label"}
                          >
                            Upload file
                          </label>
                          <input
                            type={formelement["type"]}
                            placeholder={formelement["placeholder"]}
                            id={formelement["id"]}
                            style={{ display: "none" }}
                            onChange={async (e) => {
                              document.getElementById(
                                formelement["id"] + "label"
                              ).innerHTML = "Uploading...";
                              let response = await uploadFile(
                                e.target.files[0]
                              );
                              if (response !== "Server error") {
                                document.getElementById(
                                  formelement["id"] + "label"
                                ).innerHTML = response.IpfsHash;
                              } else {
                                document.getElementById(
                                  formelement["id"] + "label"
                                ).innerHTML = "Error. Please try again.";
                              }
                            }}
                          />
                        </div>
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
          </>
        ) : (
          <FormPreview />
        )}
      </div>
    </>
  );
};

export default AddEmployeeForm;
