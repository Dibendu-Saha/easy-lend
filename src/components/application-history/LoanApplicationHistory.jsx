import React, { useState, useEffect } from "react";
import axios from "axios";
import ApplicationHistoryCard from "../application-history-card/ApplicationHistoryCard";
import mockData from "../../service/mocks/application-history-mock.json";
import { AppModal } from "../../common/app-components/AppComponents";
import "./LoanApplicationHistory.scss";

const LoanApplicationHistory = () => {
    const USER_ID = "ABCDEFGDFG", //axjoni, ABCDEFGDFG;
        COLOR_MAP = {
            "Eligible": "green",
            "SUBMITTED": "green",
            "DISBURSED": "green",
            "APPROVED": "green",
            "IN-REVIEW": "orange",
            "PARTIAL-APPROVED": "orange",
            "REJECTED": "red",
            "Not Eligible": "red",
        };

    const [arn, setArn] = useState(""),
        [status, setStatus] = useState(""),
        [statusColor, setStatusColor] = useState(""),
        [name, setName] = useState(""),
        [pan, setPan] = useState(""),
        [aadhar, setAadhar] = useState(""),
        [occupation, setOccupation] = useState(""),
        [annualIncome, setAnnualIncome] = useState(""),
        [loanAmount, setLoanAmount] = useState(""),
        [tenure, setTenure] = useState(""),
        [emi, setEmi] = useState(""),
        [remarks, setRemarks] = useState(""),
        [base64Data, setBase64Data] = useState(),
        [loanApplicationCardFlag, setLoanApplicationCardFlag] = useState(false),
        [modalOpen, setModalOpen] = useState(false),
        [eligibilityHistoryData, setEligibilityHistoryData] = useState(),
        [loanApplicationHistoryData, setLoanApplicationHistoryDataHistoryData] = useState();

    useEffect(() => {
        getHistoryData();
    }, []);

    const getHistoryData = async () => {
        const response = await axios.get(`https://bankapi4.bsite.net/api/v1/Loan/${USER_ID}/history`);
        const eligibilityData = response.data.data.eligibilityChecks;
        const loanApplicationData = response.data.data.loanApplications;

        if (eligibilityData)
            setEligibilityHistoryData(eligibilityData);

        if (loanApplicationData)
            setLoanApplicationHistoryDataHistoryData(loanApplicationData);
    }

    const openModal = (e) => {
        const id = e.target.parentElement.parentElement.getElementsByClassName('app-card-title')[0].innerText.split(':')[1].trim();
        if (id.length) {
            setLoanApplicationCardFlag(false);
            let userData = eligibilityHistoryData.find(x => x.requestId === id);

            if (!userData) {
                userData = loanApplicationHistoryData.find(x => x.arn === id);
                setLoanApplicationCardFlag(true);
            }

            setArn(id);
            setStatus(userData.status);
            setStatusColor(COLOR_MAP[userData.status]);
            setRemarks(userData.remarks);
            setName(userData.fullName);
            setPan(userData.pan);
            setAadhar(userData.aadhaar);
            setOccupation(userData.occupation);
            setAnnualIncome(userData.annualIncome);
            setLoanAmount(userData.amount);
            setTenure(userData.tenureMonths);
            setEmi(userData.emi);
            setBase64Data(userData.documentsBase64);
        }

        setModalOpen(true);
    }

    const closeModal = () => {
        setModalOpen(false);
    }

    const downloadFiles = (files = []) => {
        files.forEach(fileData => {
            const [filename, mimeType, base64String] = fileData.split('|');
            // Create a Blob from the base64 string
            const byteCharacters = atob(base64String);
            const byteNumbers = new Array(byteCharacters.length);
            for (let i = 0; i < byteCharacters.length; i++) {
                byteNumbers[i] = byteCharacters.charCodeAt(i);
            }
            const byteArray = new Uint8Array(byteNumbers);
            const blob = new Blob([byteArray], { type: mimeType });

            // Create a link element and trigger the download
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = filename;
            link.click();

            // Clean up the URL object
            URL.revokeObjectURL(link.href);
        });
    }


    return (
        <div className="history-page">
            <div className="eligibility-history-page-title">
                <h3>Loan Eligibility History</h3>
            </div>

            <div className="eligibility-history-cards history-cards">
                {(eligibilityHistoryData && eligibilityHistoryData.length > 0) && (
                    eligibilityHistoryData.map(
                        response =>
                            <ApplicationHistoryCard
                                key={response.requestId}
                                reqId={response.requestId}
                                status={response.status}
                                remarks={response.remarks}
                                onButtonClick={e => openModal(e)}
                            />
                    )
                )}
            </div>


            <div className="application-history-page-title">
                <h3>Loan Application History</h3>
            </div>

            <div className="application-history-cards history-cards">
                {(loanApplicationHistoryData && loanApplicationHistoryData.length > 0) && (
                    loanApplicationHistoryData.map(
                        response =>
                            <ApplicationHistoryCard
                                key={response.requestId}
                                arn={response.arn}
                                status={response.status}
                                remarks={response.remarks}
                                onButtonClick={e => openModal(e)}
                            />
                    )
                )}
            </div>




            <AppModal
                arn={arn}
                // title={`Request #: ${arn}`}
                title={arn}
                show={modalOpen}
                centered={true}
                confirmButton={loanApplicationCardFlag ? "View Documents" : ""}
                onClick={() => downloadFiles(base64Data)}
                cancelButton="Close"
                onClose={closeModal}
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
                                <div className="info-lbl">Aadhar</div>
                                <div className="info-data">{aadhar}</div>
                            </div>
                            <div className="info-box">
                                <div className="info-lbl">Occupation</div>
                                <div className="info-data">{occupation}</div>
                            </div>                            
                        </div>

                        <div className="data-grid-col-2">
                            <div className="info-box">
                                <div className="info-lbl">Annual Income</div>
                                <div className="info-data">{annualIncome.toLocaleString('en-IN')}</div>
                            </div>
                            <div className="info-box">
                                <div className="info-lbl">Loan Amount</div>
                                <div className="info-data">{loanAmount.toLocaleString('en-IN')}</div>
                            </div>
                            <div className="info-box">
                                <div className="info-lbl">Tenure (months)</div>
                                <div className="info-data">{tenure}</div>
                            </div>
                            <div className="info-box">
                                <div className="info-lbl">EMI</div>
                                <div className="info-data">{Number(emi).toLocaleString('en-IN')}</div>
                            </div>
                            <div className="info-box">
                                <div className="info-lbl">Status</div>
                                <div style={{ background: statusColor }} className="info-data status-indicator">
                                    <span>{status.toLocaleUpperCase()}</span>
                                </div>
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