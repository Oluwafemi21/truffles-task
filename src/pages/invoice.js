import Head from "next/head";
import Link from "next/link";
import { MdConstruction } from "react-icons/md";

const Invoice = () => {
    return (
        <>
            <Head>
                <title>Truffles | Invoice</title>
                <meta name="description" content="Invoice for the user" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <section className="h-full grid place-content-center gap-10">
                <div className="flex items-center gap-3">
                    <p className="text-lg">
                        The
                        <span className="text-primary font-bold mx-2">
                            Invoice
                        </span>
                        page is under construction
                    </p>
                    <MdConstruction className="h-5 w-5 animate-bounce" />
                </div>
                <Link
                    href="/"
                    className="w-48 mx-auto text-center font-semibold px-6 py-3 rounded bg-primary hover:bg-primary/75 cursor-pointer text-white"
                >
                    Back to Home Page
                </Link>
            </section>
        </>
    );
};

export default Invoice;
