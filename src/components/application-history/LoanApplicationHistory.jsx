import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import ApplicationHistoryCard from "../application-history-card/ApplicationHistoryCard";
import data from "../../service/mocks/application-history-mock.json";
import "./LoanApplicationHistory.scss";
import { AppModal } from "../../common/app-components/AppComponents";

const LoanApplicationHistory = () => {
    let _mock_response_ = data;

    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    }

    const closeModal = () => {
        setModalOpen(false);
    }

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
                                onCardClick={openModal}
                            />
                    )
                )}
            </div>

            <AppModal 
                title="Application Details"
                cancelButton="Close"
                onClose={closeModal}
                show={modalOpen}
                centered={true}
            >
                <h2>Woohooooo!!! You are reading this text in a modal...</h2>
            </AppModal>
        </div>
    )
}

export default LoanApplicationHistory;