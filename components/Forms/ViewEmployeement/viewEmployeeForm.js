import { viewEmployeeFormData } from "../../../viewformData";

const ViewEmployee = () => {
    return(
        <>
            <div className="formPage">
                <div className="myform">
                    {
                        viewEmployeeFormData.map((element, index) => {
                            return(
                                <div key={index} className="formelement">
                                    <label htmlFor="name">{element.label}</label>
                                    {element.type === "dropdown" ?
                                        <select>
                                            {element.placeholder.map((opt, index) => {
                                                return(
                                                    <option key={index} value={opt}>{opt}</option>
                                                )
                                            })}
                                        </select>
                                        :
                                        element.type === "radio" ? 
                                        <div className="radioSelection">
                                        {element.status.map((status, index) =>{
                                            return(
                                                <span key={index} className='radioInput'>
                                                <input type="radio" id={`${status}${index}`} value={status} />
                                                {status}
                                                </span>
                                            )
                                        })}
                                        </div>
                                        :
                                        <input type={element.type} placeholder={element.placeholder} />
                                    }
                                </div>
                            )
                        })
                    }
                    <button>Search</button>
                </div>
            </div>
        </>
    );
}
export default ViewEmployee;