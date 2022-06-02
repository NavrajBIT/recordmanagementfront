import React from 'react'
import pre from "../Preview/preview.module.css";

const Preview = () => {
  return (
    <>
        <div className={pre.background}>
            <div className={pre.box}>
                <div className={pre.heading}>
                    <h2>Preview Page</h2>
                    <button>X</button>
                </div>
                <div className={pre.inputFiels}>
                    <div className={pre.siteName}>
                        <label htmlFor="siteName">Site Name : </label>
                    </div>

                    <div className={pre.Depot}>
                        <label htmlFor="depot">Depot : </label>
                    </div>

                    <div className={pre.adharNumber}>
                        <label htmlFor="adharNo">Adhar Number : </label>
                    </div>

                    <div className={pre.fullName}>
                        <label htmlFor="fullName">Full Name :  </label>
                    </div>

                    <div className={pre.dob}>
                        <label htmlFor="dob"> Date of Birth : </label>
                    </div>

                    div.{pre}


                </div>
            </div>

        </div>

    </>
  )
}

export default Preview