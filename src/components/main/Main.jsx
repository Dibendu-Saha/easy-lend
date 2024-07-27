import React, { useState } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import EligibilityForm from "../eligibility-form/EligibilityForm";
import LoanApplyForm from "../loan-apply-form/LoanApplyForm";
import "./Main.scss";
import StepIndicator from "../../common/progressSteps/StepIndicator";



const Main = () => {

    const [currentStep, setCurrentStep] = useState(0);

    const setProgress = () => {
        let _step = currentStep + 1;
        setCurrentStep(_step);
    }

    return (
        <div>
            <Header />
            <StepIndicator currentStep={currentStep} />
            <EligibilityForm currentStep={setProgress} />
            {/* <Footer /> */}
            {/* <LoanApplyForm /> */}
        </div>
    )
}

export default Main;