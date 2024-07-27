import React from "react";

import "./UserForm.scss";
import { FormControl } from "react-bootstrap";

const UserForm = ({
    formElements,
    confirmButton,
    action,
    handleTextChange
}) => {

    return (
        <>
            {formElements.map((x, index) => (
                <div className="col-md-6 mb-2" key={index}>
                    <div className="form-group mt-3">
                        <FormControl type={x.type} className="form-control form-control-lg form-control-a"
                            style={{ padding: '1.5rem 1rem', textTransform: x.autoCapitalize ? 'uppercase' : 'none' }}
                            autoComplete="true" required={x.required} placeholder={x.prop} autoCapitalize={x.autoCapitalize}
                            name={x.prop} id={x.prop} onChange={(event) => handleTextChange(x.value, event)} />
                    </div>
                </div>
            ))}
            <div className="col-8" style={{ width: '54%' }}>
                <div className="form-group" style={{ marginTop: 20 }}>
                    <input type="checkbox" name="consentCheckbox" /> I am providing consent to use my information to contact me for further updates.
                </div>
            </div>
            <div className="form-group" style={{ marginTop: 50 }}>
                <button type="submit" onClick={action} className="btn btn-b customButton" style={{ fontSize: 'medium' }}>{confirmButton}</button>
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