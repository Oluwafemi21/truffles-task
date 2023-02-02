import Image from "next/image";
import Link from "next/link";
import Logo from "../public/Logo.png";

const UserLayout = ({ children }) => {
    return (
        <div className="min-h-screen flex bg-grey">
            <aside className="h-screen w-full md:w-60">
                <div className="grid place-content-center h-[83px] border-b border-b-gray-300">
                    <Link href="/">
                        <Image src={Logo} alt="Truffles Logo" />
                    </Link>
                </div>
                <ul className="">
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/">Home</a>
                    </li>
                </ul>
            </aside>
            <div className="flex flex-col flex-1">
                <header className="h-[83px] px-6 sticky top-0 flex justify-between items-center">
                    <p className="font-semibold capitalize text-2xl">
                        dashboard
                    </p>
                    <div className="flex items-center gap-4">
                        <Link
                            href="/user"
                            className="flex items-center gap-2 px-2 py-1.5 rounded hover:bg-gray-200 text-secondary"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-person-circle"
                                viewBox="0 0 16 16"
                            >
                                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                <path
                                    fill-rule="evenodd"
                                    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                                />
                            </svg>
                            <p>John Doe</p>
                        </Link>

                        <button className="p-2 relative rounded hover:bg-gray-200">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-bell-fill fill-secondary"
                                viewBox="0 0 16 16"
                            >
                                <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
                            </svg>
                            <span className="absolute top-0 right-0 bg-red-500 p-2 text-white h-4 w-4 text-sm grid place-content-center rounded-full">
                                4
                            </span>
                        </button>
                    </div>
                </header>
                <main className="flex-1">{children}</main>
            </div>
        </div>
    );
};

export default UserLayout;
