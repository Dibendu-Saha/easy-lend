import React from 'react';
import FilePicker from "./file-picker";
import './uploadDocuments.scss';
import { Button } from 'react-bootstrap';
import PersonalDetails from '../personalDetails/PersonalDetails';

const UploadDocuments = ({ initialValues, responseData }) => {
    return (
        <>
            <PersonalDetails initialValues={initialValues} responseData={responseData} />
            <div style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row' }}>
                <FilePicker uploadURL={"http://dlptest.com/http-post/"} />
                <div className='documentWrapper'>
                    <strong>Please upload below documents</strong>
                    <ul className='unorderedList'>
                        <li> Last 3 months salary slips</li>
                        <li> Last 2 years ITR</li>
                        <li> Last 6 months salary account statement</li>
                        <li> PAN card</li>
                        <li> Aadhar card front</li>
                        <li> Aadhar card back</li>
                        <li> Passport Size photo</li>
                        <li> 1 cancelled Cheque</li>
                    </ul>
                </div>
            </div>
            <div className="form-group button-group" style={{ marginTop: 50 }}>
                <Button
                    variant="success"
                    className="button"
                    onClick={() => alert('submit')}
                >
                    Submit
                </Button>
            </div>
        </>
    )
}


export default UploadDocuments;