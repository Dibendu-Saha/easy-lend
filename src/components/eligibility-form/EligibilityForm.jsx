import React from "react";
import UserForm from "../../common/form/UserForm";
import "./EligibilityForm.scss";

const EligibilityForm = () => {
    const formObj = [
        { prop: "Full Name", type: "text", name: "full-name" },
        { prop: "PAN", type: "text", name: "pan" },
        { prop: "Date of Birth", type: "date", name: "dob" },
        { prop: "Mobile", type: "tel", name: "mobile" },
        { prop: "Email", type: "email", name: "email" },
        { prop: "Pincode", type: "number", name: "pincode" },
        { prop: "Tenure", type: "number", name: "tenure" },
    ];

    return (
        <div className="eligibility-form-wrapper">
            <UserForm
                formElements={formObj}
                confirmButton="Check Elibility"
                className="eligibility-form"
            />
        </div>
    )
}

export default EligibilityForm;