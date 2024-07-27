import React from "react";
import UserForm from "../../common/form/UserForm";
import "./EligibilityForm.scss";

const EligibilityForm = () => {
    const formObj = [
        { prop: "Full Name", type: "text", name: "name" },
        { prop: "Email", type: "email", name: "email" },
        { prop: "Mobile", type: "tel", name: "mobile" },
        { prop: "PAN", type: "text", name: "pan" },
        { prop: "Aadhar", type: "text", name: "aadhar" },
        { prop: "Annual Income", type: "text", name: "income" },
        { prop: "Amount", type: "number", name: "amount" },
        { prop: "Tenure (months)", type: "number", name: "tenure" },
    ];

    return (
        <UserForm
            formTitle="Check your Eligibility"
            formElements={formObj}
            confirmButton="Check Eligibility"
        />
    )
}

export default EligibilityForm;