import { Steps } from 'rsuite';

const StepIndicator = ({ currentStep, setStep }) => (
    <div style={{ width: '70%', alignItems: "center", display: 'inline-block', marginBottom: 40 }}>
        <Steps current={currentStep}>
            <Steps.Item title="Personal Details" onClick={() => setStep(0)} style={{ cursor: 'pointer' }} />
            {/* <Steps.Item title="Personal details" /> */}
            <Steps.Item title="Upload Documents" onClick={() => setStep(1)} style={{ cursor: 'pointer' }} />
            {/* <Steps.Item title="Confirmation" /> */}
        </Steps>
    </div>
);

export default StepIndicator;