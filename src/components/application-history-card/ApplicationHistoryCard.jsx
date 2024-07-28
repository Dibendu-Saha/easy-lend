import React from 'react';
import { Button } from 'react-bootstrap';
import { AppCard } from '../../common/app-components/AppComponents';
import "./ApplicationHistoryCard.scss";

const ApplicationHistoryCard = ({
    arn = "",
    status = "",
    remarks = "",
    onCardClick,
    onButtonClick
}) => {
    const COLOR_MAP = {
        "approved": "green",
        "pending": "orange",
        "rejected": "red",
    };

    const currentColor = COLOR_MAP[status];

    return (
        <AppCard styleProp={{ borderTop: `10px solid ${currentColor}` }} cardClass="app-card-container">
            <header className="app-card-title-container">
                <h5 className="app-card-title">ARN: {arn}</h5>
                <div style={{ background: currentColor }} className="status-indicator">
                    <span>{status.toLocaleUpperCase()}</span>
                </div>
            </header>

            <main className="app-card-body">
                <p>
                    {remarks}
                </p>
            </main>

            <footer className="app-card-footer">
                <Button
                    key={arn}
                    variant=""
                    size="lg"
                    className="btn-view-details"
                    onClick={onButtonClick}
                >
                    View
                </Button>
            </footer>
        </AppCard>
    )
}

export default ApplicationHistoryCard;
