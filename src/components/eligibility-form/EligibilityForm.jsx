import React from "react";
import UserForm from "../../common/form/UserForm";
import "./EligibilityForm.scss";

const EligibilityForm = () => {
    const formObj = [
        { prop: "Full Name", type: "text", name: "full-name" },
        { prop: "PAN", type: "text", name: "pan" },
        { prop: "Aadhar Number", type: "text", name: "aadhar" },
        { prop: "Mobile Number", type: "tel", name: "mobile" },
        { prop: "Email", type: "email", name: "email" },
        { prop: "Amount", type: "number", name: "amount" },
        { prop: "Tenure (months)", type: "number", name: "tenure" },
        { prop: "Annual Income", type: "text", name: "annual-income" },
    ];

    return (
        <div>
            <div >
                <div className="eligibility-title">
                    <h2>Check your Eligibility</h2>
                </div>
                <div className="form">
                    <form className="form-a">
                        <div className="row">
                            <UserForm
                                formElements={formObj}
                                confirmButton="Check Eligibility"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EligibilityForm;