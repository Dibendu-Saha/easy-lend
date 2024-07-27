import React, { useState } from "react";
import { Form, Button, FormControl } from "react-bootstrap";
import PropTypes from "prop-types";
import "./UserForm.scss";

const UserForm = ({
    formTitle,
    formElements,
    confirmButton,
    action,
    handleTextChange
}) => {
    const INITIAL_STATE = {
        name: "",
        email: "",
        mobile: "",
        pan: "",
        aadhar: "",
        income: "",
        amount: "",
        tenure: ""
    };

    const [formValues, setFormValues] = useState(INITIAL_STATE);

    return (
        <div className="row">
            {/* {formTitle.length > 0 && (
                <div className="form-title">
                    <h2>{formTitle}</h2>
                </div>
            )} */}

            {formElements.map((x, index) => (
                <Form.Group className="col-md-6 mb-3" controlId="exampleForm.ControlTextarea1" key={index}>
                    <Form.Control
                        type={x.type}
                        size="lg"
                        name={x.name}
                        placeholder={x.prop}
                        className="form-control"
                        onBlur={e => setFormValues({ ...formValues, [e.target.name]: e.target.value })}
                        onChange={(event) => handleTextChange(x.value, event)}
                        style={{ padding: '1.5rem 1rem', textTransform: x.autoCapitalize ? 'uppercase' : 'none' }}
                        autoComplete="true"
                        required
                    />
                </Form.Group>
            ))}

            <div className="col-8" style={{ width: '54%' }}>
                <div className="form-group" style={{ marginTop: 20 }}>
                    <input type="checkbox" name="consentCheckbox" /> I am providing consent to use my information to contact me for further updates.
                </div>
            </div>
            <div className="form-group button-group" style={{ marginTop: 50 }}>
                <Button
                    variant="success"
                    className="button"
                    onClick={action}
                >
                    {confirmButton}
                </Button>
            </div>
        </div>
    )
}

export default UserForm;

UserForm.defaultProps = {
    formTitle: "",
    formElements: null,
    confirmButton: "Ok",
    cancelButton: "Cancel",
    className: ""
};

UserForm.propTypes = {
    formTitle: PropTypes.string,
    className: PropTypes.string
}