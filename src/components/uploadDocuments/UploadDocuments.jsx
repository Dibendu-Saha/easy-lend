import React from 'react';
import FilePicker from "./file-picker";
import './uploadDocuments.scss';
import { Button } from 'react-bootstrap';

const UploadDocuments = () => {
    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row' }}>
                <div className='documentWrapper'>
                    <h5>Please upload below documents</h5>
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
                <FilePicker uploadURL={"http://dlptest.com/http-post/"} />
            </div>
            <div className="form-group button-group" style={{ marginTop: 50 }}>
                <Button
                    variant="success"
                    className="button"
                    onClick={() => alert('submit')}
                >
                    Next
                </Button>
            </div>
        </>
    )
}


export default UploadDocuments;