import React from "react";

import "./UserForm.scss";

const UserForm = ({
    formElements,
    confirmButton,
    cancelButton,
    className
}) => {
    return (
        <>
            {formElements.map(x => (
                <div class="col-md-6 mb-2">
                    <div class="form-group mt-3">
                        <input type="text" class="form-control form-control-lg form-control-a" style={{ padding: '1.5rem 1rem' }}
                            placeholder={x.prop} />
                    </div>
                </div>
            ))}
            <div className="form-group" style={{marginTop: 50}}>
                <button type="submit" class="btn btn-b customButton" style={{fontSize:'medium'}}>{confirmButton}</button>
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