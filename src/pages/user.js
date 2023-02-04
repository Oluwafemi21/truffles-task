import { useState } from "react";
import { StepperContext } from "../contexts/StepperContext";
//  Next Modules
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

// Components
import UserLayout from "components/UserLayout";
import User from "components/Forms/UserInformation";
import Upload from "components/Forms/Upload";
import Business from "components/Forms/BusinessInformation";
import Admin from "components/Forms/Admin";
import StepperControl from "components/StepperControl";
import Stepper from "components/Stepper";

import Logo from "public/Logo.svg";
import { HiMenu } from "react-icons/hi";

export default function About() {
    const [currentStep, setCurrentStep] = useState(1);
    const steps = [
        "User Information",
        "Admin and Operations",
        "Business Information",
        "Upload Documents",
    ];

    const [userData, setUserData] = useState("");
    const [finalData, setFinalData] = useState([]);

    const displaySteps = (step) => {
        switch (step) {
            case 1:
                return <User />;
            case 2:
                return <Admin />;
            case 3:
                return <Business />;
            case 4:
                return <Upload />;
        }
    };
    const handleClick = (direction) => {
        let newStep = currentStep;

        direction === "next" ? newStep++ : newStep--;
        // check if steps are within bounds
        newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
    };
    return (
        <>
            <Head>
                <title>Truffles | User Information</title>
                <meta name="description" content="Information about the user" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="min-h-screen flex bg-grey">
                <button
                    className="fixed p-1.5 right-4 top-6 z-30 bg-transparent rounded text-gray-400 hover:bg-gray-200 focus:ring-2 focus:ring-primary focus:outline-none peer lg:hidden"
                    title="Open mobile menu button"
                    aria-hidden="true"
                >
                    <HiMenu className="h-6 w-6" />
                </button>
                <aside className="h-screen group fixed lg:sticky top-0 z-40 lg:w-[264px] w-72 transition-[left] duration-300 ease-in-out xl:shadow-none xl:left-0 bg-grey -left-72 peer-focus-within:left-0 peer-focus-within:shadow-3xl">
                    <div className="grid place-content-center h-[83px] border-b border-b-gray-300 bg-white">
                        <Link href="/">
                            <Image src={Logo} alt="Truffles Logo" priority />
                        </Link>
                    </div>
                    <Stepper steps={steps} currentStep={currentStep} />
                </aside>
                <div className="flex flex-col flex-1">
                    <header className="h-[83px] px-6 sticky top-0 flex items-center justify-end border-b bg-white border-b-gray-300 z-20">
                        <p className="hidden lg:block">
                            Having trouble?{" "}
                            <span className="font-semibold text-primary cursor-pointer hover:underline">
                                Get Help
                            </span>
                        </p>
                    </header>
                    <main className="flex-1 bg-white p-4">
                        <section className="min-h-screen container mx-auto lg:py-7 lg:px-14 py-5 px-3">
                            <div>
                                <StepperContext.Provider
                                    value={{
                                        userData,
                                        setUserData,
                                        finalData,
                                        setFinalData,
                                    }}
                                >
                                    {displaySteps(currentStep)}
                                </StepperContext.Provider>
                            </div>
                            <StepperControl
                                handleClick={handleClick}
                                currentStep={currentStep}
                                steps={steps}
                            />
                        </section>
                    </main>
                </div>
            </div>
        </>
    );
}

About.getLayout = function (page) {
    return <UserLayout>{page}</UserLayout>;
};
