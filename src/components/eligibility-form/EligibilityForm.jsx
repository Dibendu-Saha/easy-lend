import React from "react";
import UserForm from "../../common/form/UserForm";

const EligibilityForm = () => {
    const formObj = [
        { prop: "Full Name", type: "text", name: "full-name" },
        { prop: "PAN", type: "text", name: "pan" },
        { prop: "Aadhar Number", type: "text", name: "aadhar" },
        { prop: "Mobile Number", type: "tel", name: "mobile" },
        { prop: "Email", type: "email", name: "email" },
        { prop: "Amount", type: "number", name: "amount" },
        { prop: "Tenure (months)", type: "number", name: "tenure" },
        { prop: "Annual Income", type: "select", name: "annual-income" },
    ];

    return (
        <div>
            <div >
                <div class="title-box-d">
                    <h3 class="title-d">Check your Eligibility</h3>
                </div>
                <div class="form">
                    <form class="form-a">
                        <div class="row">
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