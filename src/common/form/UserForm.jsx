import React from "react";

import "./UserForm.scss";

const UserForm = ({
    formElements,
    confirmButton,
    cancelButton,
    className
}) => {
    return (
        <div className="user-form-wrapper">
            <form action="" className={`${className ?? null} user-form`}>
                {formElements.map(x => (
                    <>
                        <div className="form-group">
                            {x.type !== "select" && (
                                <>
                                    <label htmlFor={x.name}>{x.prop}</label>
                                    <input type={x.type} name={x.name} />
                                </>
                            )}
                        </div>

                        <div className="form-break"></div>
                    </>
                ))}

                <div className="form-group">
                    <div></div>
                    <button type="submit" className="btn-eligibility">{confirmButton}</button>
                </div>
            </form>
        </div>
    )
}

export default UserForm;

UserForm.defaultProps = {
    formElements: null,
    confirmButton: "Ok",
    cancelButton: "Cancel",
    className: ""
};