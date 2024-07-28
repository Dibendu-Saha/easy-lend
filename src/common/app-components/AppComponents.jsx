import React from 'react';
import { Card, Modal, Button } from 'react-bootstrap';
import "./AppComponents.scss";

export const AppCard = ({
    cardClass = null,
    styleProp = {},
    onCardClick,
    children
}) => (
    <Card onClick={onCardClick} style={styleProp} className={`${cardClass ?? ""} app-card-main`}>
        <Card.Body>
            {children}
        </Card.Body>
    </Card>
);

export const AppModal = ({
    show = false,
    onClose,
    centered = false,
    title = "",
    confirmButton = "",
    cancelButton = "",
    children
}) => (
    <Modal show={show} onHide={onClose} centered={centered}>
        <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {children}
        </Modal.Body>
        <Modal.Footer>
            {confirmButton.length > 0 && (
                <Button variant="primary" onClick={onClose}>
                    {confirmButton}
                </Button>
            )}
            {cancelButton.length > 0 && (
                <Button variant="secondary" onClick={onClose}>
                    {cancelButton}
                </Button>
            )}
        </Modal.Footer>
    </Modal>
)


