// import { useEffect, useState, useRef } from "react";
// const Stepper = ({ steps, currentStep }) => {
//     const [newStep, setNewStep] = useState([]);
//     const stepRef = useRef();
//     const updateStep = (stepNumber, steps) => {
//         const newSteps = [...steps];
//         let count = 0;
//         while (count < newSteps.length) {
//             if (count == stepNumber) {
//                 newSteps[count] = {
//                     ...newSteps[count],
//                     highlighted: true,
//                     selected: true,
//                     completed: true,
//                 };
//                 count++;
//             } else if (count < stepNumber) {
//                 newSteps[count] = {
//                     ...newSteps[count],
//                     highlighted: false,
//                     selected: true,
//                     completed: true,
//                 };
//                 count++;
//             } else {
//                 newSteps[count] = {
//                     ...newSteps[count],
//                     highlighted: false,
//                     selected: false,
//                     completed: false,
//                 };
//             }
//         }
//         return newSteps;
//     };
//     useEffect(() => {
//         const stepsState = steps.map((step, index) =>
//             Object.assign(
//                 {},
//                 {
//                     description: step,
//                     completed: false,
//                     highlighted: index === 0 ? true : false,
//                     selected: index === 0 ? true : false,
//                 }
//             )
//         );

//         stepRef.current = stepsState;
//         const current = updateStep(currentStep - 1, stepRef.current);
//         setNewStep(current);
//     }, [steps, currentStep]);
//     const displaySteps = newStep.map((step, index) => {
//         return (
// <div key={index}>
//     <div className="relative  flex items-center gap-3 p-2">
//         <div className="relative z-20 grid place-content-center h-8 w-8 border-2 border-primary bg-white rounded-full">
//             <div className="h-3 w-3 bg-primary rounded-full "></div>
//         </div>
//         <p className="uppercase text-xs text-primary font-bold tracking-wider">
//             User Information
//         </p>
//         <div
//             className={
//                 index !== newStep.length - 1
//                     ? "flex-auto absolute rotate-90 -bottom-3 left-1 w-10 border-gray-200 border-t-2 transition duration-500 ease-in-out"
//                     : "hidden"
//             }
//         ></div>
//     </div>
// </div>
//         );
//     });
//     return (
//         <div className=" my-10 flex flex-col gap-6 justify-center px-8">
//             {displaySteps}
//         </div>
//     );
// };

// export default Stepper;
{
    /* <div
        key={index}
        className={
          index !== newStep.length - 1
            ? "w-full flex items-center"
            : "flex items-center"
        }
      >
        <div className="relative flex flex-col items-center text-teal-600">
          <div
            className={`rounded-full transition duration-500 ease-in-out border-2 border-gray-300 h-12 w-12 flex items-center justify-center py-3  ${
              step.selected
                ? "bg-green-600 text-white font-bold border border-green-600 "
                : ""
            }`}
          >
            {step.completed ? (
              <span className="text-white font-bold text-xl">&#10003;</span>
            ) : (
              index + 1
            )}
          </div>
          <div
            className={`absolute top-0  text-center mt-16 w-32 text-xs font-medium uppercase ${
              step.highlighted ? "text-gray-900" : "text-gray-400"
            }`}
          >
            {step.description}
          </div>
        </div>
        <div
          className={`flex-auto border-t-2 transition duration-500 ease-in-out  ${
            step.completed ? "border-green-600" : "border-gray-300 "
          }  `}
        ></div>
      </div> */
}

import React, { useState, useEffect, useRef } from "react";

const Stepper = ({ steps, currentStep }) => {
    const [newStep, setNewStep] = useState([]);
    const stepsRef = useRef();

    const updateStep = (stepNumber, steps) => {
        const newSteps = [...steps];
        console.log(newSteps);
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
