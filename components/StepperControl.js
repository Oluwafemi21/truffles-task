const StepperControl = ({ handleClick, currentStep, steps }) => {
    return (
        <div className="flex items-center justify-between sm:flex-row flex-col gap-4">
            <button
                onClick={() => handleClick("back")}
                className={`sm:w-28 w-full  text-center font-semibold px-6 py-2 rounded bg-transparent border border-black text-navy hover:bg-black hover:text-white focus:bg-black focus:text-white cursor-pointer ${
                    currentStep === 1 ? "opacity-50 cursor-not-allowed" : ""
                }`}
            >
                Back
            </button>
            <button
                onClick={() => handleClick("next")}
                className="sm:w-28 w-full text-center font-semibold px-6 py-2 rounded bg-primary hover:bg-primary/75 cursor-pointer text-white"
            >
                {currentStep === steps.length ? "Submit" : "Next"}
            </button>
        </div>
    );
};

export default StepperControl;
