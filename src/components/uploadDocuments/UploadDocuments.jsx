import React, { useState } from 'react';
import FilePicker from "./file-picker";
import './uploadDocuments.scss';
import { Button } from 'react-bootstrap';
import PersonalDetails from '../personalDetails/PersonalDetails';
import axios from 'axios';

const UploadDocuments = ({ initialValues, responseData, moveToNextStep = () => { }, setLoanARN }) => {
    const [files, setFiles] = useState([]);


    const onSubmit = () => {
        const req = new FormData();

        req.append('EligibilityRequestId', responseData.requestId);
        req.append('FullName', initialValues.fullName);
        req.append('Mobile', initialValues.mobile);
        req.append('Email', initialValues.email);
        req.append('Pan', initialValues.pan);
        req.append('Aadhaar', initialValues.aadhaar);
        req.append('Amount', initialValues.amount.toString());
        req.append('TenureMonths', initialValues.tenureMonths.toString());
        req.append('Occupation', initialValues.occupation);
        req.append('AnnualIncome', initialValues.annualIncome.toString());
        req.append('Consent', initialValues.consent);
        const filesArray = Array.isArray(files) ? files : Array.from(files);
        if (filesArray && filesArray.length > 0) {
            filesArray.forEach((file) => {
                req.append('Documents', file, file.name);
            });
        }

        axios.post('https://bankapi4.bsite.net/api/v1/Loan/products/H0001/apply', req, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(res => {
            setLoanARN(res.data.data.arn);
            moveToNextStep();
        }).catch(err => {
            console.log(err)
        })

    }

    return (
        <>
            <PersonalDetails initialValues={initialValues} responseData={responseData} />
            <div style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row' }}>
                <FilePicker onFileChange={setFiles} />
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
                <Button variant="success" className="button" onClick={() => onSubmit()}>
                    Submit
                </Button>
            </div>
        </>
    )
}


export default UploadDocuments;