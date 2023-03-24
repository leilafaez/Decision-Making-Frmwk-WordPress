import React , { useState } from "react";
import App from "../../App";

export const stepProgressContext=React.createContext();

function ProgressBarContext(){
	const [currentStep, setCurrentStep] = useState(1);
	const [enteredData, setEnteredData] = useState([]);
	const [defineGoalText,setDefineGoalText] = useState("");//Step1
  	const [selectedOptionTypeOfInformation,setSelectedOptionTypeOfInformation] = useState( null );//Step6a
	const [selectedOptionAmountOfInformation,setSelectedOptionAmountOfInformation] = useState( null );//Step6b
	const labelArray = [
		"Step 1",
		"Step 2",
		"Step 3",
		"Step 4",
		"Step 5",
		"Step 6",
		"Step 7",
	];
	const [users, setUsers] = useState([]);
    const [selectedOption, setSelectedOption] = useState(null);
    const[selectedOptionCapacity, setSelectedOptionCapacity]=useState(null);
	const [selectedOptionDecision, setSelectedOptionDecision] = useState(null);
	function setStep(step) {
		setCurrentStep(step);
	}

	return (
		<>
			<stepProgressContext.Provider
				value={{
					defineGoalText,
					setDefineGoalText,
        			selectedOptionTypeOfInformation,
					setSelectedOptionTypeOfInformation,
					selectedOptionAmountOfInformation,
					setSelectedOptionAmountOfInformation,
					currentStep,
					setCurrentStep,
					enteredData,
					setEnteredData,
					labelArray,
					setStep,
					users,
					setUsers,
					selectedOption,
					setSelectedOption,
					selectedOptionCapacity,
					setSelectedOptionCapacity,
					selectedOptionDecision,
					setSelectedOptionDecision,
				}}
			>
				<App />
			</stepProgressContext.Provider>
		</>
	);
}


export default ProgressBarContext;