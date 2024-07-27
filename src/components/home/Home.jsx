import React, { useState } from "react";
import { Form } from "react-bootstrap";
import Header from "../header/Header";
import EligibilityForm from "../eligibility-form/EligibilityForm";
import LoanApplyForm from "../loan-apply-form/LoanApplyForm";
import "./Home.scss";
import StepIndicator from "../../common/stepIndicator/StepIndicator";
import UploadDocuments from "../uploadDocuments/UploadDocuments";

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
            return <UploadDocuments />
        // return <LoanApplyForm />
    }

    return (
        <div>
            <Header />
            <StepIndicator currentStep={currentStep} />
            {showFormStep()}
        </div>
    )
}

export default Home;