import Image from "next/image";

const Card = (props) => {
    const card = props.card;
    return (
        <li
            tabIndex="0"
            className="rounded-2xl flex items-center justify-between p-5 bg-white shadow-default transition duration-75 cursor-pointer hover:-translate-y-1 focus:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-primary "
        >
            <div>
                <span className="capitalize text-secondary mb-4">
                    {card.card_name}
                </span>
                <p className="font-semibold text-2xl">${card.amount}</p>
            </div>
            <div className="grid place-content-center shadow-card_icon rounded-lg bg-gradient-to-tr from-[#A76FFF] to-primary p-2.5">
                <Image
                    src={card.icon}
                    alt="Wallet Icon"
                    width={20}
                    height={20}
                />
            </div>
        </li>
    );
};

export default Card;
