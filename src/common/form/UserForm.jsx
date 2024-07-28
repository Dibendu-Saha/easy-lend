import React, { useState } from "react";
import { Form, Button, FormControl } from "react-bootstrap";
import PropTypes from "prop-types";
import "./UserForm.scss";

const UserForm = ({
    formTitle,
    formElements,
    confirmButton,
    action,
    handleTextChange,
    enableActionButton,
    checkConsent
}) => {
    const [occupation, setOccupation] = useState("none");

    const selectOccupation = (event) => {
        setOccupation(event.target.value);
        handleTextChange('occupation', event);
    }

    return (
        <div className="row">
            {formElements.map((x, index) => (
                <Form.Group className="col-md-6 mb-3" controlId="exampleForm.ControlTextarea1" key={index}>
                    <Form.Control
                        type={x.type}
                        size="lg"
                        name={x.name}
                        placeholder={x.prop}
                        className="form-control"
                        onBlur={(event) => handleTextChange(x.value, event)}
                        style={{ padding: '1.5rem 1rem', textTransform: x.autoCapitalize ? 'uppercase' : 'none' }}
                        autoComplete="true"
                        required={x.required}
                    />
                </Form.Group>
            ))}
            <select className="form-select col-md-6 form-select-lg mb-3" aria-label="Select Occupation"
                onChange={(event) => selectOccupation(event)} defaultValue="none" value={occupation}
                style={{ marginLeft: 7, width: '49%', height: '12%' }}>
                <option value="none">Select Occupation</option>
                <option value="Salaried">Salaried</option>
                <option value="Self-employed">Self-employed</option>
            </select>
            <div className="form-group col-10" style={{ width: '60%', textAlign: 'justify' }}>
                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" onClick={checkConsent} />
                <label className="form-check-label" htmlFor="defaultCheck1" style={{ marginLeft: 10 }}>
                    I am providing consent to use my information to contact me for further updates.
                </label>
            </div>
            <div className="form-group button-group" style={{ marginTop: 50 }}>
                <Button
                    variant="success"
                    disabled={enableActionButton ? false : true}
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