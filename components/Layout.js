// Next modules
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

// Components
import Logo from "../public/Logo.svg";
import SidebarLink from "./SidebarLink";

// Icons
import {
    MdDashboard,
    MdReceipt,
    MdSwapHorizontalCircle,
    MdOutlineContacts,
} from "react-icons/md";
import { FaFileInvoice, FaUserCircle } from "react-icons/fa";
import { HiBell, HiMenu } from "react-icons/hi";
import { ImMoveUp } from "react-icons/im";

const menuItems = [
    {
        href: "/",
        title: "Dashboard",
        icon: MdDashboard,
    },
    {
        href: "/invoice",
        title: "Invoice",
        icon: MdReceipt,
    },
    {
        href: "/proforma",
        title: "Proforma",
        icon: FaFileInvoice,
    },
    {
        href: "/swap",
        title: "Swap",
        icon: MdSwapHorizontalCircle,
    },
    {
        href: "/transfer",
        title: "Transfer",
        icon: ImMoveUp,
    },
    {
        href: "/contacts",
        title: "Contacts",
        icon: MdOutlineContacts,
    },
];

const Layout = ({ children }) => {
    const router = useRouter();
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
                <div className="grid place-content-center h-[83px] border-b border-b-gray-300 ">
                    <Link href="/">
                        <Image src={Logo} alt="Truffles Logo" priority />
                    </Link>
                </div>
                <nav className="px-4">
                    <ul>
                        {menuItems.map((link) => (
                            <li className="m-2" key={link.title}>
                                <SidebarLink
                                    title={link.title}
                                    href={link.href}
                                    icon={link.icon}
                                    key={link.title}
                                />
                            </li>
                        ))}
                    </ul>
                    <div className="border-y border-gray-300 lg:hidden">
                        <div className="m-2">
                            <SidebarLink
                                title={"Profile"}
                                href={"/user"}
                                icon={FaUserCircle}
                            />
                        </div>
                        <div className="m-2">
                            <SidebarLink
                                title={"Notifications"}
                                href={"/notifications"}
                                icon={HiBell}
                            />
                        </div>
                    </div>
                </nav>
            </aside>
            <div className="flex flex-col flex-1">
                <header className="h-[83px] px-6 sticky z-20 top-0 flex justify-between items-center border-b border-b-gray-300 bg-grey">
                    <p className="font-semibold capitalize text-2xl">
                        {router.pathname === "/"
                            ? "Dashboard"
                            : router.pathname.slice(1)}
                    </p>
                    <div className="lg:flex items-center gap-4 hidden">
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
                <main className="flex-1 p-4">{children}</main>
            </div>
        </div>
    );
};

export default Layout;
