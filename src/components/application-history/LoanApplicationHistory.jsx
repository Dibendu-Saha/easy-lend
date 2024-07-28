import React from "react";
import { AppCard } from "../../common/app-components/AppComponents";
import "./LoanApplicationHistory.scss";

const LoanApplicationHistory = () => {


    return (
        <AppCard cardClass="app-card-container">
            {/* <div className="border-red"></div> */}
            <header className="app-card-title-container">
                <h5 className="app-card-title">ARN: 1000392938</h5>
                <div className="status-indicator">
                    <span>Partially Approved</span>
                </div>
            </header>

            <main className="app-card-body">
                <p>
                    Your latest loan application have been approved. Please make sure to
                    submit all further documents for successful processing of your loan.
                </p>
            </main>
        </AppCard>
    )
}

export default LoanApplicationHistory;