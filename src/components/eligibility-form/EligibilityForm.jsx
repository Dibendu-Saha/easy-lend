import React, { useState } from "react";
import UserForm from "../../common/form/UserForm";

const EligibilityForm = ({ currentStep }) => {

    // const [values, setValues] = useState([]);

    const formObj = [
        { prop: "Full Name", type: "text", name: "full-name", value: 'fullName', required: true, autoCapitalize: false },
        { prop: "PAN", type: "text", name: "pan", value: 'pan', required: true, autoCapitalize: true },
        { prop: "Aadhar Number", type: "number", name: "aadhar", value: 'aadhar', required: true, autoCapitalize: false },
        { prop: "Mobile Number", type: "tel", name: "mobile", value: 'mobile', required: true, autoCapitalize: false },
        { prop: "Email", type: "email", name: "email", value: 'email', required: true, autoCapitalize: false },
        { prop: "Loan Amount", type: "number", name: "amount", value: 'amount', required: true, autoCapitalize: false },
        { prop: "Tenure (months)", type: "number", name: "tenure", value: 'tenure', required: true, autoCapitalize: false },
        { prop: "Annual Income", type: "number", name: "annual-income", value: 'annualIncome', required: true, autoCapitalize: false },
    ];

    var values = [];

    const checkEligibility = () => {
        //here we can find values
        currentStep();
    }

    const handleTextChange = (key, event) => {
        values[key] = event.nativeEvent.target.value;
    }

    return (
        <div className="form">
            <form className="form-a">
                <div className="row">
                    <UserForm
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