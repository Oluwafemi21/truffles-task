import Image from "next/image";
import Link from "next/link";
import Logo from "../public/Logo.svg";
import { HiBell } from "react-icons/hi";
import { FaUserCircle } from "react-icons/fa";

const UserLayout = ({ children }) => {
    return (
        <div className="min-h-screen flex bg-grey">
            <aside className="h-screen w-full md:w-60">
                <div className="grid place-content-center h-[83px] border-b border-b-gray-300 bg-white">
                    <Link href="/">
                        <Image src={Logo} alt="Truffles Logo" />
                    </Link>
                </div>
            </aside>
            <div className="flex flex-col flex-1">
                <header className="h-[83px] px-6 sticky top-0 flex items-center justify-end border-b bg-white border-b-gray-300">
                    <div className="flex items-center gap-4">
                        <Link
                            href="/user"
                            className="flex items-center gap-2 px-2 py-1.5 rounded hover:bg-gray-200 text-secondary"
                        >
                            <FaUserCircle />
                            <p>Evan White</p>
                        </Link>

                        <button className="p-2 relative rounded hover:bg-gray-200">
                            <HiBell className="fill-secondary text-xl" />
                            <span className="absolute top-0 right-0 bg-red-500 p-2 text-white h-4 w-4 text-sm grid place-content-center rounded-full">
                                4
                            </span>
                        </button>
                    </div>
                </header>
                <main className="flex-1 bg-white">{children}</main>
            </div>
        </div>
    );
};

export default UserLayout;
