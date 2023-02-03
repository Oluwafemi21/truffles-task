import Image from "next/image";
import Link from "next/link";
import Logo from "../public/Logo.svg";
import { HiMenu } from "react-icons/hi";

const UserLayout = ({ children }) => {
    return (
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
                        <Image src={Logo} alt="Truffles Logo" />
                    </Link>
                </div>
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
                <main className="flex-1 bg-white p-4">{children}</main>
            </div>
        </div>
    );
};

export default UserLayout;
