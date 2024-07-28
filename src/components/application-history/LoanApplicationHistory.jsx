import React from "react";
import ApplicationHistoryCard from "../application-history-card/ApplicationHistoryCard";
import data from "../../service/mocks/application-history-mock.json";
import "./LoanApplicationHistory.scss";

const LoanApplicationHistory = () => {
    let _mock_response_ = data;

    return (
        <div className="history-page">
            <div className="history-page-title">
                <h3>Loan Application History</h3>
            </div>

            <div className="application-history-cards">
                {_mock_response_.length && (
                    _mock_response_.map(
                        response =>
                            <ApplicationHistoryCard
                                arn={response.data.arn}
                                status={response.data.status}
                                remarks={response.data.remarks}
                            />
                    )
                )}
            </div>
        </div>
    )
}

export default LoanApplicationHistory;