import React, { useState, useEffect } from "react";
import axios from "axios";
import ApplicationHistoryCard from "../application-history-card/ApplicationHistoryCard";
import mockData from "../../service/mocks/application-history-mock.json";
import { AppModal } from "../../common/app-components/AppComponents";
import "./LoanApplicationHistory.scss";

const LoanApplicationHistory = () => {
    const [arn, setArn] = useState(""),
        [status, setStatus] = useState(""),
        [remarks, setRemarks] = useState(""),
        [modalOpen, setModalOpen] = useState(false),
        [historyData, setHistoryData] = useState();


    useEffect(() => {
        getHistoryData();
    }, []);

    const getHistoryData = async () => {
        const response = await axios.get("https://bankapi4.bsite.net/api/v1/Loan/axjoni/history");

        const data = response.data.data.eligibilityChecks;
        if (data) {
            setHistoryData(data);
            // setArn(data.requestId);
            // setStatus(data.status);
            // setRemarks(data.remarks);
        }
    }

    const openModal = (e) => {
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
                {(historyData && historyData.length) && (
                    historyData.map(
                        response =>
                            <ApplicationHistoryCard
                                key={response.requestId}
                                arn={response.requestId}
                                status={response.status}
                                remarks={response.remarks}
                                onButtonClick={e => openModal(e)}
                            />
                    )
                )}
            </div>

            <AppModal
                title={`ARN: ${arn}`}
                cancelButton="Close"
                onClose={closeModal}
                show={modalOpen}
                centered={true}
            >
                {/* <p>Woohooooo!!! You are reading this text in a modal...</p> */}
                <div className="app-modal-body">
                    <span>Dibendu S.</span>
                </div>
            </AppModal>
        </div>
    )
}

export default LoanApplicationHistory;