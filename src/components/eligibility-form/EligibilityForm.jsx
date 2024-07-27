import React, { useState } from "react";
import UserForm from "../../common/form/UserForm";
import "./EligibilityForm.scss";

const EligibilityForm = ({ setProgress }) => {
    // const formObj = [
    //     { prop: "Full Name", type: "text", name: "name" },
    //     { prop: "Email", type: "email", name: "email" },
    //     { prop: "Mobile", type: "tel", name: "mobile" },
    //     { prop: "PAN", type: "text", name: "pan" },
    //     { prop: "Aadhar", type: "text", name: "aadhar" },
    //     { prop: "Annual Income", type: "text", name: "income" },
    //     { prop: "Amount", type: "number", name: "amount" },
    //     { prop: "Tenure (months)", type: "number", name: "tenure" },
    // ];

    const formObj = [
        { prop: "Full Name", type: "text", name: "full-name", value: 'fullName', required: true, autoCapitalize: false },
        { prop: "Email", type: "email", name: "email", value: 'email', required: true, autoCapitalize: false },
        { prop: "Mobile Number", type: "tel", name: "mobile", value: 'mobile', required: true, autoCapitalize: false },
        { prop: "PAN", type: "text", name: "pan", value: 'pan', required: true, autoCapitalize: true },
        { prop: "Aadhar Number", type: "number", name: "aadhar", value: 'aadhar', required: true, autoCapitalize: false },
        { prop: "Annual Income", type: "number", name: "annual-income", value: 'annualIncome', required: true, autoCapitalize: false },
        { prop: "Loan Amount", type: "number", name: "amount", value: 'amount', required: true, autoCapitalize: false },
        { prop: "Tenure (months)", type: "number", name: "tenure", value: 'tenure', required: true, autoCapitalize: false },
    ];

    const INITIAL_STATE = {
        name: "",
        email: "",
        mobile: "",
        pan: "",
        aadhar: "",
        income: "",
        amount: "",
        tenure: ""
    };

    const [formValues, setFormValues] = useState(INITIAL_STATE);

    const checkEligibility = () => {
        //here we can find values
        setProgress();
    }

    const handleTextChange = (key, event) => {
        INITIAL_STATE[key] = event.nativeEvent.target.value;
    }

    return (
        <div className="form">
            <form className="form-a">
                <div className="row">
                    <UserForm
                        formTitle="Check your Eligibility"
                        formElements={formObj}
                        confirmButton="Check Eligibility"
                        action={checkEligibility}
                        handleTextChange={(key, event) => handleTextChange(key, event)}
                    />
                </div>
            </form>
        </div>

    )
}

export default EligibilityForm;