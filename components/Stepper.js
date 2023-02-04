import React, { useState, useEffect, useRef } from "react";

const Stepper = ({ steps, currentStep }) => {
    const [newStep, setNewStep] = useState([]);
    const stepsRef = useRef();

    const updateStep = (stepNumber, steps) => {
        const newSteps = [...steps];
        let count = 0;
        while (count < newSteps.length) {
            //current step
            if (count === stepNumber) {
                newSteps[count] = {
                    ...newSteps[count],
                    highlighted: true,
                    selected: true,
                    completed: true,
                };
                count++;
            }

            //step completed
            else if (count < stepNumber) {
                newSteps[count] = {
                    ...newSteps[count],
                    highlighted: false,
                    selected: true,
                    completed: true,
                };
                count++;
            }
            //step pending
            else {
                newSteps[count] = {
                    ...newSteps[count],
                    highlighted: false,
                    selected: false,
                    completed: false,
                };
                count++;
            }
        }

        return newSteps;
    };

    useEffect(() => {
        const stepsState = steps.map((step, index) =>
            Object.assign(
                {},
                {
                    description: step,
                    completed: false,
                    highlighted: index === 0 ? true : false,
                    selected: index === 0 ? true : false,
                }
            )
        );

        stepsRef.current = stepsState;
        const current = updateStep(currentStep - 1, stepsRef.current);
        setNewStep(current);
    }, [steps, currentStep]);

    const stepsDisplay = newStep.map((step, index) => {
        return (
            <div key={index}>
                <div className="relative  flex items-center gap-3 p-2">
                    <div
                        className={`relative z-20 grid place-content-center h-8 w-8 border-2 border-gray-200 rounded-full ${
                            step.selected
                                ? "bg-primary text-white font-bold border border-primary "
                                : "bg-white"
                        }`}
                    >
                        {step.completed ? (
                            <span className="text-navy font-bold text-xl">
                                &#10003;
                            </span>
                        ) : (
                            <div
                                className={`h-3 w-3 rounded-full ${
                                    step.selected ? "bg-primary" : ""
                                }`}
                            ></div>
                        )}
                    </div>
                    <p
                        className={`uppercase text-xs  tracking-wide ${
                            step.highlighted
                                ? "text-primary font-bold"
                                : "text-navy"
                        }`}
                    >
                        {step.description}
                    </p>
                    <div
                        className={
                            index !== newStep.length - 1
                                ? `flex-auto absolute rotate-90 -bottom-3 left-1 w-10 border-t-2 transition duration-500 ease-in-out ${
                                      step.completed
                                          ? "border-primary"
                                          : "border-gray-200"
                                  }`
                                : "hidden"
                        }
                    ></div>
                </div>
            </div>
        );
    });

    return (
        <div className=" my-10 flex flex-col gap-6 justify-center px-6">
            {stepsDisplay}
        </div>
    );
};
export default Stepper;
