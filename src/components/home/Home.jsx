import React, { useState } from "react";
import { Form } from "react-bootstrap";
import Header from "../header/Header";
import EligibilityForm from "../eligibility-form/EligibilityForm";
import LoanApplyForm from "../loan-apply-form/LoanApplyForm";
import "./Home.scss";
import StepIndicator from "../../common/stepIndicator/StepIndicator";
import UploadDocuments from "../uploadDocuments/UploadDocuments";
import axios from 'axios';

const Home = () => {

    const [currentStep, setCurrentStep] = useState(0);
    const [formData, setFormData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [responeData, setResponseData] = useState([]);

    const INITIAL_STATE = {
        fullName: "",
        email: "",
        mobile: "",
        pan: "",
        aadhaar: "",
        annualIncome: "",
        amount: "",
        tenureMonths: "",
        consent: true,
        occupation: "",
    };

    const handleTextChange = (key, event) => {
        INITIAL_STATE[key] = event.nativeEvent.target.value;
    }

    const setProgress = () => {
        let _step = currentStep + 1;
        setCurrentStep(_step);
    }

    const checkEligibility = () => {
        setLoading(true);
        //here we can find values
        axios.post('https://bankapi4.bsite.net/api/v1/Loan/products/H0001/eligibility', {
            ...INITIAL_STATE
        }).then(res => {
            setFormData(INITIAL_STATE);
            setResponseData(res.data.data);
            setProgress();
            setLoading(false);
        }).catch((err) => {
            setLoading(false);
        })
    }

    const showFormStep = () => {
        if (currentStep === 0)
            return <EligibilityForm
                setProgress={setProgress}
                handleTextChange={(key, event) => handleTextChange(key, event)}
                action={checkEligibility}
            />
        if (currentStep === 1)
            return <UploadDocuments initialValues={formData} responseData={responeData} />
    }

    const setStep = (step) => {
        setCurrentStep(step)
    }

    return (
        <div>
            <Header />
            <div style={{ marginTop: 100, display: 'flex', justifyContent: "center" }}>
                <StepIndicator currentStep={currentStep} setStep={setStep} />
            </div>
            {showFormStep()}
        </div >
    )
}

export default Home;