import React from 'react';
import { AppCard } from '../../common/app-components/AppComponents';
import "./ApplicationHistoryCard.scss";

const ApplicationHistoryCard = ({
    arn,
    status,
    remarks
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
                <h5 className="app-card-title">{arn}</h5>
                <div style={{ background: currentColor }} className="status-indicator">
                    <span>{status}</span>
                </div>
            </header>

            <main className="app-card-body">
                <p>
                    {remarks}
                </p>
            </main>
        </AppCard>
    )
}

export default ApplicationHistoryCard;
