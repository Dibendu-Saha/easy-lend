import React, { useState, useEffect } from "react";
import axios from "axios";
import ApplicationHistoryCard from "../application-history-card/ApplicationHistoryCard";
import mockData from "../../service/mocks/application-history-mock.json";
import { AppModal } from "../../common/app-components/AppComponents";
import "./LoanApplicationHistory.scss";

const LoanApplicationHistory = () => {
    const USER_ID = "ABCDEFGDFG"; //"axjoni";

    const COLOR_MAP = {
        "Eligible": "green",
        "Not Eligible": "red",
    };

    const [arn, setArn] = useState(""),
        [status, setStatus] = useState(""),
        [statusColor, setStatusColor] = useState(""),
        [name, setName] = useState(""),
        [pan, setPan] = useState(""),
        [occupation, setOccupation] = useState(""),
        [annualIncome, setAnnualIncome] = useState(""),
        [loanAmount, setLoanAmount] = useState(""),
        [tenure, setTenure] = useState(""),
        [remarks, setRemarks] = useState(""),
        [modalOpen, setModalOpen] = useState(false),
        [historyData, setHistoryData] = useState();

    useEffect(() => {
        getHistoryData();
    }, []);

    const getHistoryData = async () => {
        const response = await axios.get(`https://bankapi4.bsite.net/api/v1/Loan/${USER_ID}/history`);

        const data = response.data.data.eligibilityChecks;
        if (data)
            setHistoryData(data);
    }

    const openModal = (e) => {
        const arn = e.target.parentElement.parentElement.getElementsByClassName('app-card-title')[0].innerText.split(':')[1].trim();
        if (arn.length) {
            const applicationData = historyData.find(x => x.requestId === arn);
            setArn(arn);
            setStatus(applicationData.status);
            setStatusColor(COLOR_MAP[applicationData.status]);
            setRemarks(applicationData.remarks);
            setName(applicationData.fullName);
            setPan(applicationData.pan);
            setOccupation(applicationData.occupation);
            setAnnualIncome(applicationData.annualIncome);
            setLoanAmount(applicationData.amount);
            setTenure(applicationData.tenureMonths);
        }

        setModalOpen(true);
    }

    const closeModal = () => {
        setModalOpen(false);
    }

    return (
        <div className="history-page">
            <div className="history-page-title">
                <h3>Loan Eligibility History</h3>
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
                <div className="app-modal-body">
                    <div className="data-grid">
                        <div className="data-grid-col-1">
                            <div className="info-box">
                                <div className="info-lbl">Name</div>
                                <div className="info-data">{name}</div>
                            </div>
                            <div className="info-box">
                                <div className="info-lbl">PAN</div>
                                <div className="info-data">{pan}</div>
                            </div>
                            <div className="info-box">
                                <div className="info-lbl">Occupation</div>
                                <div className="info-data">{occupation}</div>
                            </div>
                            <div className="info-box">
                                <div className="info-lbl">Status</div>
                                <div style={{ background: statusColor }} className="info-data status-indicator">
                                    <span>{status.toLocaleUpperCase()}</span>
                                </div>
                            </div>
                        </div>

                        <div className="data-grid-col-2">
                            <div className="info-box">
                                <div className="info-lbl">Annual Income</div>
                                <div className="info-data">{annualIncome}</div>
                            </div>
                            <div className="info-box">
                                <div className="info-lbl">Loan Amount</div>
                                <div className="info-data">{loanAmount}</div>
                            </div>
                            <div className="info-box">
                                <div className="info-lbl">Tenure</div>
                                <div className="info-data">{tenure}</div>
                            </div>
                        </div>
                    </div>

                    <div className="info-box-remarks">
                        <div className="info-lbl">Remarks</div>
                        <div className="info-data">{remarks}</div>
                    </div>
                </div>
            </AppModal>
        </div>
    )
}

export default LoanApplicationHistory;