import Head from "next/head";
import UserLayout from "components/UserLayout";

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
            <h1 className="text-red-300">About</h1>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Possimus commodi quasi laboriosam facere molestias voluptatum
                vero ex ducimus voluptas iusto?
            </p>
        </>
    );
}

About.getLayout = function (page) {
    return <UserLayout>{page}</UserLayout>;
};
