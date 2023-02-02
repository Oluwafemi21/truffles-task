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
import { HiBell } from "react-icons/hi";
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
            <aside className="h-screen w-60 sticky top-0">
                <div className="grid place-content-center h-[83px] border-b border-b-gray-300 ">
                    <Link href="/">
                        <Image src={Logo} alt="Truffles Logo" priority />
                    </Link>
                </div>
                <nav>
                    <ul className="px-4">
                        {menuItems.map((link) => (
                            <SidebarLink link={link} />
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
                <main className="flex-1 px-4">{children}</main>
            </div>
        </div>
    );
};

export default Layout;
