import React from "react";
import { Form, Button } from "react-bootstrap";
import PropTypes from "prop-types";

import "./UserForm.scss";

const UserForm = ({
    formTitle,
    formElements,
    confirmButton,
    cancelButton,
    className
}) => {
    return (
        <div className="row">
            <>
                {/* {formElements.map(x => (
                    <div className="col-md-6 mb-2">
                        <div className="form-group mt-3">
                            <input type="text" className="form-control form-control-lg form-control-a" style={{ padding: '1.5rem 1rem' }}
                                placeholder={x.prop} />
                        </div>
                    </div>
                ))} */}
            </>

            {formTitle.length > 0 && (
                <div className="form-title">
                    <h2>{formTitle}</h2>
                </div>
            )}

            {formElements.map(x => (
                <Form.Group className="col-md-6 mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Control
                        type="text"
                        size="lg"
                        name={x.name}
                        placeholder={x.prop}
                        className="form-input"
                        onBlur={e => {
                            console.log(e.target.value)
                        }}
                    />
                </Form.Group>
            ))}
            <div className="form-group button-group" style={{ marginTop: 50 }}>
                <Button
                    variant="success"
                    className="button"
                    onClick={() => alert('submit')}
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