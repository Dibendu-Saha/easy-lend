import { Steps } from 'rsuite';

const StepIndicator = ({ currentStep }) => (
    <div style={{ width: '70%', alignItems: "center", display: 'inline-block', marginBottom: 40 }}>
        <Steps current={currentStep}>
            <Steps.Item title="Check Eligibility" />
            <Steps.Item title="Personal details" />
            <Steps.Item title="Documents" />
            <Steps.Item title="Review" />
        </Steps>
    </div>
);

export default StepIndicator;