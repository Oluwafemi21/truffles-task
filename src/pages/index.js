import Head from "next/head";
import Image from "next/image";

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
            <main className="font-inter">
                <h1>
                    Welcome to{" "}
                    <a href="https://nextjs.org" className="text-xl">
                        Next.js!
                    </a>
                </h1>
                <p className="text-red-400">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Possimus commodi quasi laboriosam facere molestias
                    voluptatum vero ex ducimus voluptas iusto?
                </p>
            </main>
        </>
    );
}
