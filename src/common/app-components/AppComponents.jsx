import React from 'react';
import { Card } from 'react-bootstrap';
import "./AppComponents.scss";

export const AppCard = ({
    cardClass = null,
    styleProp = {},
    children
}) => (
    <Card style={styleProp} className={`${cardClass ?? ""} app-card-main`}>
        <Card.Body>
            {children}
        </Card.Body>
    </Card>
)


