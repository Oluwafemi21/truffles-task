import Card from "components/Card";
import Head from "next/head";
import dynamic from "next/dynamic";
import { useState } from "react";
import { MdChevronRight, MdChevronLeft } from "react-icons/md";
import Chart from "components/Chart";
import Transactions from "components/Transactions";

// Plugins without
const Calendar = dynamic(() => import("react-calendar"), { ssr: false });

const cardLayoutItems = [
    {
        card_name: "flat balance",
        amount: "10,000",
        icon: "/wallet.svg",
    },
    {
        card_name: "crypto balance",
        amount: "10,000",
        icon: "/wallet.svg",
    },
    {
        card_name: "receivable",
        amount: "10,000",
        icon: "/arrow-down.svg",
    },
    {
        card_name: "payables",
        amount: "10,000",
        icon: "/arrow-up.svg",
    },
];

// Chart items
const chartData = {
    height: 350,
    width: "100%",
    type: "area",
    series: [
        {
            name: "Assets",
            data: [50, 10, 300, 200, 500, 270, 400, 230, 500],
        },
        {
            name: "Liability",
            data: [30, 100, 200, 40, 150, 100, 420, 80, 410],
        },
    ],
    options: {
        chart: {
            height: 350,
            type: "area",
            toolbar: {
                show: false,
            },
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: "smooth",
        },
        xaxis: {
            categories: [
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
            ],
        },
        yaxis: {
            categories: [0, 100, 200, 300, 400, 500],
        },
        colors: ["#82D616", "#FF8540"],
        grid: {
            xaxis: {
                lines: {
                    show: true,
                },
            },
            yaxis: {
                lines: {
                    show: true,
                },
            },
        },
        fill: {
            colors: ["#82D616", "#FF8540"],
            opacity: 0.1,
        },
    },
};

export default function Home() {
    const [value, onChange] = useState(new Date());
    return (
        <>
            <Head>
                <title>Truffles | Home</title>
                <meta
                    name="description"
                    content="Truffles is the best invoice app for freelancers and small businesses."
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <>
                <section className="bg-primary rounded-md mt-2 px-4 py-3 text-white flex items-center justify-between">
                    <div className="flex items-center gap-3 flex-wrap justify-center text-center md:text-left md:justify-start">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-exclamation-circle h-6 w-6 font-bold stroke-2"
                            viewBox="0 0 16 16"
                        >
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                            <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z" />
                        </svg>
                        <article className="md:text-[10px] text-sm">
                            <p className="font-medium">Please complete KYC</p>
                            <span>
                                Please follow the instructions in the email to
                                complete account verification. Make sure to
                                check your promotions/spam as well.
                            </span>
                        </article>
                    </div>
                    <svg
                        tabIndex="0"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-x-circle h-6 w-6 stroke-2 font-bold cursor-pointer hidden md:block"
                        viewBox="0 0 16 16"
                    >
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                    </svg>
                </section>
                <section className="mt-4 grid md:grid-cols-3 gap-4">
                    <div className="md:col-span-2">
                        <section>
                            <ul className="grid md:grid-cols-2 gap-4">
                                {cardLayoutItems.map((card) => (
                                    <Card card={card} key={card.card_name} />
                                ))}
                            </ul>
                        </section>
                        <div className="bg-white rounded-lg mt-5 md:p-5 py-2 shadow-default">
                            <p className="pl-3">Assets & Liabilities</p>
                            <Chart chartData={chartData} />
                        </div>
                    </div>
                    <aside className="flex flex-col gap-3 bg-white py-4 px-3 rounded-md shadow-default">
                        <Calendar
                            onChange={onChange}
                            value={value}
                            prev2Label={null}
                            next2Label={null}
                            prevAriaLabel="Go to prev month"
                            nextAriaLabel="Go to next month"
                            prevLabel={
                                <MdChevronLeft className="h-6 w-6 mx-auto" />
                            }
                            nextLabel={
                                <MdChevronRight className="h-6 w-6 mx-auto" />
                            }
                            next2AriaLabel={null}
                            prev2AriaLabel={null}
                        />
                        <Transactions />
                    </aside>
                </section>
            </>
        </>
    );
}
