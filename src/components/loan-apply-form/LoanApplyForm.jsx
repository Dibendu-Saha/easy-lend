import React from "react";
import UserForm from "../../common/form/UserForm";

const LoanApplyForm = () => {
    const formObj = [
        { prop: "Full Name", type: "text", name: "full-name" },
        { prop: "PAN", type: "text", name: "pan" },
        { prop: "Date of Birth", type: "date", name: "dob" },
        { prop: "Mobile", type: "tel", name: "mobile" },
        { prop: "Email", type: "email", name: "email" },
        { prop: "Pincode", type: "number", name: "pincode" },
        { prop: "Amount", type: "number", name: "amount" },
    ];

    return (
            <UserForm
                formTitle="Apply for Loan"
                formElements={formObj}
                confirmButton="Apply"          
            />
    )
}

export default LoanApplyForm;