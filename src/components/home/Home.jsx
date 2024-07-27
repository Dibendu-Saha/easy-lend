import React, { useState } from "react";
import { Form } from "react-bootstrap";
import Header from "../header/Header";
import EligibilityForm from "../eligibility-form/EligibilityForm";
import LoanApplyForm from "../loan-apply-form/LoanApplyForm";
import "./Home.scss";
import StepIndicator from "../../common/stepIndicator/StepIndicator";

const Home = () => {

    const [currentStep, setCurrentStep] = useState(0);

    const setProgress = () => {
        let _step = currentStep + 1;
        setCurrentStep(_step);
    }

    const showFormStep = () => {
        if (currentStep === 0)
            return <EligibilityForm setProgress={setProgress} />
        if (currentStep === 1)
            return <LoanApplyForm />
    }

    return (
        <div className="main">
            <Header />
            <StepIndicator currentStep={currentStep} />
            {showFormStep()}
        </div>
    )
}

export default Home;