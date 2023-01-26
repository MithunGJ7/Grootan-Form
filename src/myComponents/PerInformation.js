import React from "react";
import Json_Object from "./Json_Object.json";


export default function PerInformation() {
    function onSubmit () {
        alert("Thank You for Submitting");
    }
    return (
        <div className="container pt-2">
            <form className="form-outer" onsubmit={onSubmit()}>
                <h4 className="pb-4 fw-light fst-italic text-decoration-underline" align="left">Personal Information</h4>
                <div className="mt-5 mb-5">
                    {
                        Json_Object.map(Q => {
                            return(
                                <>
                                <div className="row mb-4 pb-1">
                                <label className="col-sm-2" >{Q.label}</label>
                                <div className="col-sm-8">
                                <input className="form-control" name={Q.name}  placeholder={Q.placehoder} autoComplete={Q.auto_complete} required={Q.required} datatype={Q.data_type} type={Q.html_element}></input>
                                </div>
                                </div>
                                </>
                            )
                        })
                    }
                </div>
                <button className="btn btn-secondary btn-sm active mb-5 text-left"  type="onSubmit">Submit</button>
            </form>
            
        </div>
    )
}
