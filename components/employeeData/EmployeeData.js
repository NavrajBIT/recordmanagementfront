// import { addEmployeeFormData } from "../../formdata";
import React from "react";
import { useState } from "react";

import emp from  "./employeeData.module.css";


const EmployeeData = () => {
  return (
    <>
      <div className="formPage">
        <div className="myform">
          <div className={emp.main_data}>
            <div className={emp.personal_data}>
              <img src="/dp.png" alt="" />
              <div className={emp.personal_text}>
                <div style={{ fontSize: "30px" }}>Mr. Harish Kumar</div>
                <div>Male</div>
                <div>D.O.B. : 26_5_1991</div>
                <div>MOB. : +91 956234125</div>
                <div>Address : H.No. 625, Punjabi Bagh, New Delhi, India</div>
              </div>
            </div>
            <div className={emp.job_details}>
              <div className={emp.formelement}>
                <div>Designation:</div>
                <div>Site Incharge</div>
              </div>
              <div className={emp.formelement}>
                <div>Site Name:</div>
                <div>Indore</div>
              </div>
              <div className={emp.formelement}>
                <div>Depot:</div>
                <div>Hardware</div>
              </div>
            </div>
          </div>
          <div className={emp.secondary_data_container}>
            <div className={emp.secondary_data}>
              <div className={emp.myheading}>Personal Data</div>
              <div className={emp.formelement}>
                <div>Father's name :</div>
                <div>Mr Satish Kumar</div>
              </div>
              <div className={emp.formelement}>
                <div>Aadhar Number :</div>
                <div>987456321654321</div>
              </div>
              <div className={emp.formelement}>
                <div>Category :</div>
                <div>General</div>
              </div>
            </div>
            <div className={emp.secondary_data}>
              <div className={emp.myheading}>Salary Data</div>
              <div className={emp.formelement}>
                <div>Date of joining :</div>
                <div>5 June, 2007</div>
              </div>
              <div className={emp.formelement}>
                <div>Offered Salary :</div>
                <div>Rs. 1500000.00</div>
              </div>
              <div className={emp.formelement}>
                <div>HRA :</div>
                <div>Rs. 200000.00</div>
              </div>
            </div>
          </div>
          <div className={emp.secondary_data_container}>
            <div className={emp.secondary_data}>
              <div className={emp.myheading}>Bank Data</div>
              <div className={emp.formelement}>
                <div>Account Number :</div>
                <div>1800652325685522</div>
              </div>
              <div className={emp.formelement}>
                <div>IPFS code :</div>
                <div>SBIN0000620</div>
              </div>
              <div className={emp.formelement}>
                <div>Passbook :</div>
                <div>
                  <img src="/passbook.png" width="300" height="300" alt="" />
                </div>
              </div>
            </div>
            <div className={emp.secondary_data}>
              <div className={emp.myheading}>Documents</div>
              <div className={emp.formelement}>
                <div>Aadhar Card</div>
                <div>Form 1 Under E5</div>
              </div>
              <div className={emp.formelement}>
                <div>Form 11</div>
                <div>Form nomination for unpaid wages</div>
              </div>
              <div className={emp.formelement}>
                <div>Form 2</div>
                <button>Download</button>
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
    </>
  );
}
export default EmployeeData