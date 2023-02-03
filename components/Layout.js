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
import { HiBell, HiMenu, HiOutlineX } from "react-icons/hi";
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
                className="absolute p-1.5 right-4 top-6 z-30 bg-transparent rounded text-gray-400 hover:bg-gray-200 focus:ring-2 focus:ring-primary focus:outline-none peer md:hidden"
                title="Open mobile menu button"
                aria-hidden="true"
            >
                <HiMenu className="h-6 w-6" />
            </button>
            <aside className="h-screen group fixed md:sticky top-0 z-40 w-60 transition-[left] duration-300 ease-in-out xl:shadow-none xl:left-0 bg-grey -left-60 peer-focus-within:left-0 peer-focus-within:shadow-3xl">
                <button className="absolute p-1 invisible -right-8 top-6 bg-transparent rounded-full text-white focus:ring-2 focus:ring-white focus:outline-none">
                    <HiOutlineX className="h-6 w-6" />
                </button>
                <div className="grid place-content-center h-[83px] border-b border-b-gray-300 ">
                    <Link href="/">
                        <Image src={Logo} alt="Truffles Logo" priority />
                    </Link>
                </div>
                <nav>
                    <ul className="px-4">
                        {menuItems.map((link) => (
                            <SidebarLink link={link} key={link.title} />
                        ))}
                    </ul>
                </nav>
            </aside>
            <div className="flex flex-col flex-1">
                <header className="h-[83px] px-6 sticky top-0 flex justify-between items-center border-b border-b-gray-300 bg-grey">
                    <p className="font-semibold capitalize text-2xl">
                        {router.pathname === "/"
                            ? "Dashboard"
                            : router.pathname.slice(1)}
                    </p>
                    <div className="md:flex items-center gap-4 hidden">
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
                <main className="flex-1 px-4">{children}</main>
            </div>
        </div>
    );
};

export default Layout;
