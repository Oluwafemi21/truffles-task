import Head from "next/head";
import UserLayout from "components/UserLayout";
import User from "components/UserInformation";
import Business from "components/BusinessInformation";

export default function About() {
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
            <section className="min-h-screen container mx-auto lg:py-7 lg:px-14 py-5 px-3">
                <User />
                <Business />
                <div className="flex items-center justify-between sm:flex-row flex-col gap-4">
                    <button className="sm:w-28 w-full  text-center font-semibold px-6 py-2 rounded bg-transparent border border-black text-navy hover:bg-black hover:text-white cursor-pointer">
                        Back
                    </button>
                    <button className="sm:w-28 w-full text-center font-semibold px-6 py-2 rounded bg-primary hover:bg-primary/75 cursor-pointer text-white">
                        Next
                    </button>
                </div>
            </section>
        </>
    );
}

About.getLayout = function (page) {
    return <UserLayout>{page}</UserLayout>;
};
