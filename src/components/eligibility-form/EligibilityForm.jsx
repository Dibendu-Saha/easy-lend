import React from "react";
import UserForm from "../../common/form/UserForm";

const EligibilityForm = () => {
    const formObj = [
        { prop: "Full Name", type: "text", name: "full-name" },
        { prop: "Date of Birth", type: "date", name: "dob" },
        { prop: "Mobile", type: "tel", name: "mobile" },
        { prop: "Email", type: "email", name: "email" },
        { prop: "PAN", type: "text", name: "pan" },
        { prop: "Amount", type: "number", name: "amount" },
        { prop: "Tenure (months)", type: "number", name: "tenure" },
        { prop: "Occupation", type: "select", name: "occupation" },
    ];

    return (
        <div>
            <UserForm
                formElements={formObj}
                confirmButton="Check Elibility"          
            />
        </div>
    )
}

export default EligibilityForm;