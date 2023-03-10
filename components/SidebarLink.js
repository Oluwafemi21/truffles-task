// Next Imports
import Link from "next/link";
import { useRouter } from "next/router";
const SidebarLink = (props) => {
    const title = props.title;
    const href = props.href;
    const icon = props.icon;
    const router = useRouter();
    return (
        <Link
            href={href}
            className={`group/link flex items-center gap-2 py-2 px-4 rounded-lg cursor-pointer text-navy hover:bg-primary  hover:shadow-default focus:shadow-default  ${
                router.asPath === href && "bg-white "
            }`}
        >
            <div
                className={`text-lg bg-white rounded-md p-1.5 shadow-card_icon
                    ${
                        router.asPath === href &&
                        "bg-gradient-to-tr from-[#A76FFF] to-primary text-white  group-hover/link:text-white"
                    }`}
            >
                {icon()}
            </div>
            <span className=" group-hover/link:text-white">{title}</span>
        </Link>
    );
};

export default SidebarLink;
