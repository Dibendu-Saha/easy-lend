import React from "react";
import { Form, Button } from "react-bootstrap";

import "./UserForm.scss";

const UserForm = ({
    formElements,
    confirmButton,
    cancelButton,
    className
}) => {
    return (
        <>
            {/* {formElements.map(x => (
                <div className="col-md-6 mb-2">
                    <div className="form-group mt-3">
                        <input type="text" className="form-control form-control-lg form-control-a" style={{ padding: '1.5rem 1rem' }}
                            placeholder={x.prop} />
                    </div>
                </div>
            ))} */}
            
            {formElements.map(x => (
                <Form.Group className="col-md-6 mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Control type="text" size="lg" placeholder={x.prop} className="form-input" />
                </Form.Group>
            ))}
            <div className="form-group button-group" style={{ marginTop: 50 }}>
                {/* <button type="submit" className="btn btn-b customButton" style={{ fontSize: 'medium' }}>{confirmButton}</button> */}
                <Button variant="success" className="button">{confirmButton}</Button>
            </div>
        </>
    )
}
export default UserForm;

UserForm.defaultProps = {
    formElements: null,
    confirmButton: "Ok",
    cancelButton: "Cancel",
    className: ""
};