import React from "react";

import "./UserForm.scss";

const UserForm = ({
    formElements,
    confirmButton,
    cancelButton,
    className
}) => {
    return (
        <form action="" className={className}>
            {formElements.map(x => (
                <>
                    <div className="form-group">
                        <label htmlFor={x.name}>{x.prop}</label>
                        <input type={x.type} name={x.name} />
                    </div>

                    <div className="form-break"></div>
                </>
            ))}

            <div className="form-group">
                <div></div>
                <button type="submit" className="btn-eligibility">{confirmButton}</button>
            </div>
        </form>

    )
}

export default UserForm;

UserForm.defaultProps = {
    formElements: null,
    confirmButton: "Ok",
    cancelButton: "Cancel"
};