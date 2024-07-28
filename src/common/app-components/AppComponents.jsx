import React from 'react';
import { Card } from 'react-bootstrap';
import "./AppComponents.scss";

export const AppCard = ({
    title,
    cardClass = null,
    titleClass = null,
    bodyClass = null,
    children
}) => (
    <Card className={`${cardClass ?? ""} app-card-main`}>
        <Card.Body>
            {children}
        </Card.Body>
    </Card>

    // <Card className={`${cardClass ?? ""} app-card`}>
    //     <Card.Body>
    //         <Card.Title className={`${titleClass ?? ""} card-title`}>{title}</Card.Title>
    //         <Card.Text className={`${bodyClass ?? ""} card-body`}>{children}</Card.Text>
    //     </Card.Body>
    // </Card>
)


