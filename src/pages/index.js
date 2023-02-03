import Card from "components/Card";
import Head from "next/head";

// import wallet from "public/wallet.svg";
// import arrowUp from "public/arrow-up.svg";
// import arrowDown from "public/arrow-down.svg";

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

export default function Home() {
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
                    <div className="col-span-2">
                        <section>
                            <ul className="grid grid-cols-2 gap-4">
                                {cardLayoutItems.map((card) => (
                                    <Card card={card} key={card.card_name} />
                                ))}
                            </ul>
                        </section>
                    </div>
                    <div className="calendar bg-red-600"> hi</div>
                </section>
            </>
        </>
    );
}
