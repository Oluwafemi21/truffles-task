import { HiArrowUpRight, HiArrowDownRight } from "react-icons/hi2";

const Transactions = () => {
    return (
        <section className="flex flex-col gap-1 border-t border-gray-200">
            <div className="flex items-center gap-3 py-1">
                <HiArrowUpRight className="h-5 w-5 m-2 text-red-500 stroke-2" />
                <div className="flex-1 flex flex-col gap-1">
                    <p className="uppercase font-medium">quicksilver llc</p>
                    <span className="text-[9px]">TFID: 8045780</span>
                </div>
                <span className="font-medium">$145,000.00</span>
            </div>
            <div className="flex items-center gap-3 py-1">
                <HiArrowDownRight className="h-5 w-5 m-2 text-green-500 stroke-2" />
                <div className="flex-1 flex flex-col gap-1">
                    <p className="uppercase font-medium">quicksilver llc</p>
                    <span className="text-[9px]">TFID: 8045780</span>
                </div>
                <span className="font-medium">$145,000.00</span>
            </div>
            <div className="flex items-center gap-3 py-1 ">
                <HiArrowDownRight className="h-5 w-5 m-2 text-green-500 stroke-2" />
                <div className="flex-1 flex flex-col gap-1">
                    <p className="uppercase font-medium">quicksilver llc</p>
                    <span className="text-[9px]">TFID: 8045780</span>
                </div>
                <span className="font-medium">$145,000.00</span>
            </div>
            <div className="flex items-center gap-3 py-1">
                <HiArrowUpRight className="h-5 w-5 m-2 text-red-500 stroke-2" />
                <div className="flex-1 flex flex-col gap-1">
                    <p className="uppercase font-medium">quicksilver llc</p>
                    <span className="text-[9px]">TFID: 8045780</span>
                </div>
                <span className="font-medium">$145,000.00</span>
            </div>
            <div className="flex items-center gap-3 py-1">
                <HiArrowDownRight className="h-5 w-5 m-2 text-green-500 stroke-2" />
                <div className="flex-1 flex flex-col gap-1">
                    <p className="uppercase font-medium">quicksilver llc</p>
                    <span className="text-[9px]">TFID: 8045780</span>
                </div>
                <span className="font-medium">$145,000.00</span>
            </div>
            <div className="flex items-center gap-3 py-1">
                <HiArrowUpRight className="h-5 w-5 m-2 text-red-500 stroke-2" />
                <div className="flex-1 flex flex-col gap-1">
                    <p className="uppercase font-medium">quicksilver llc</p>
                    <span className="text-[9px]">TFID: 8045780</span>
                </div>
                <span className="font-medium">$145,000.00</span>
            </div>
        </section>
    );
};

export default Transactions;
