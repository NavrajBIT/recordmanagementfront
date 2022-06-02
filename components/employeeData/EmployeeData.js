// import { addEmployeeFormData } from "../../formdata";
import React, { useReducer } from "react";
import { useState } from "react";

import emp from "./employeeData.module.css";

import { AiOutlineDownload } from "react-icons/ai";
import image from "../employeeData/image.jpg";

import { addEmployeeFormData } from "../../formdata";

import { dummyData } from "../../formdata";

const EmployeeData = () => {
  return (
    <>
      <div className={emp.box}>
      {dummyData.map((data, index) => {
        return (

          <div className="formPage">
            <div className="myform">
              <div className={emp.main_data}>
                <div className={emp.personal_data}>
                  <img src={data.image} alt="No image" />
                  <div className={emp.personal_text}>
                    <div style={{ fontSize: "30px" }}>{data.name}</div>
                    <div>{data.gender}</div>
                    <div>D.O.B. : {data.dob}</div>
                    <div>MOB. : +91 {data.mobileNumber}</div>
                    <div>
                      Address : {data.address}
                    </div>
                  </div>
                </div>
                <div className={emp.job_details}>
                  <div className={emp.formelement}>
                    <div>Designation:</div>
                    <div>{data.designation}</div>
                  </div>
                  <div className={emp.formelement}>
                    <div>Site Name:</div>
                    <div>{data.siteName}</div>
                  </div>
                  <div className={emp.formelement}>
                    <div>Depot:</div>
                    <div>{data.depot}</div>
                  </div>
                </div>
              </div>
              <div className={emp.secondary_data_container}>
                <div className={emp.secondary_data}>
                  <div className={emp.myheading}>Personal Data</div>
                  <div className={emp.formelement}>
                    <div>Father's name :</div>
                    <div>{data.fatherName}</div>
                  </div>
                  <div className={emp.formelement}>
                    <div>Aadhar Number :</div>
                    <div>{data.adharnumber}</div>
                  </div>
                  <div className={emp.formelement}>
                    <div>Category :</div>
                    <div>{data.category}</div>
                  </div>
                </div>
                <div className={emp.secondary_data}>
                  <div className={emp.myheading}>Salary Data</div>
                  <div className={emp.formelement}>
                    <div>Date of joining :</div>
                    <div>{data.doj}</div>
                  </div>
                  <div className={emp.formelement}>
                    <div>Offered Salary :</div>
                    <div>Rs. {data.offeredSalary}</div>
                  </div>
                  <div className={emp.formelement}>
                    <div>HRA :</div>
                    <div>Rs. {data.hra}</div>
                  </div>
                </div>
              </div>
              <div className={emp.secondary_data_container}>
                <div className={emp.secondary_data}>
                  <div className={emp.myheading}>Bank Data</div>
                  <div className={emp.formelement}>
                    <div>Account Number :</div>
                    <div>{data.accountNumber}</div>
                  </div>
                  <div className={emp.formelement}>
                    <div>IPFS code :</div>
                    <div>{data.ipfs}</div>
                  </div>
                  {/* <div className={emp.formelement}>
                <div>Passbook :</div>
                <div>
                  <img src="/passbook.png" width="300" height="300" alt="" />
                </div>
              </div> */}
                </div>
                <div className={emp.secondary_data}>
                  <div className={emp.myheading}>Documents</div>
                  <div className={emp.formelement}>
                    <div>Aadhar Card</div>
                    <div className={emp.download}>
                      <AiOutlineDownload />
                    </div>
                  </div>
                  <div className={emp.formelement}>
                    <div>Form 1 Under E5</div>
                    <div className={emp.download}>
                      <AiOutlineDownload />
                    </div>
                  </div>
                  <div className={emp.formelement}>
                    <div>Form 11</div>
                    <div className={emp.download}>
                      <AiOutlineDownload />
                    </div>
                  </div>
                  <div className={emp.formelement}>
                    <div>Form nomination for unpaid wages</div>
                    <div className={emp.download}>
                      <AiOutlineDownload />
                    </div>
                  </div>
                  <div className={emp.formelement}>
                    <div>Form 2</div>
                    <div className={emp.download}>
                      <AiOutlineDownload />
                    </div>
                  </div>
                  <div className={emp.formelement}>
                    <div>Passbook</div>
                    <div className={emp.download}>
                      <AiOutlineDownload />
                    </div>
                  </div>
                </div>
              </div>

              <button
                onClick={() => {
                  alert("No functionality yet");
                }}
              >
                Request Edit
              </button>
            </div>
          </div>

        );
      })}
        </div>
    </>
  );
};
export default EmployeeData;
