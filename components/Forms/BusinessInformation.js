const Business = () => {
    return (
        <>
            <p className="text-xl font-semibold">Business Information</p>
            <span className="text-sm">
                Use a permanent address where you can receive email
            </span>
            <form className="flex flex-col gap-5 my-7">
                <div className="flex flex-col gap-2">
                    <label htmlFor="acctid" className="text-sm">
                        Account Id
                    </label>
                    <input type="text" className="rounded" />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="companyName" className="text-sm">
                        Company name
                    </label>
                    <input type="text" className="rounded" />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="coi" className="text-sm">
                            Country of Incorporation
                        </label>
                        <select className="rounded cursor-pointer">
                            <option>United States</option>
                        </select>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="coc" className="text-sm">
                            Country of Corporation
                        </label>
                        <select className="rounded cursor-pointer">
                            <option>United States</option>
                        </select>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="business-type" className="text-sm">
                        Business Type
                    </label>
                    <select
                        name="business-type"
                        id="business-type"
                        className="rounded cursor-pointer"
                    >
                        <option>United States</option>
                    </select>
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="address" className="text-sm">
                        Company Address
                    </label>
                    <input type="text" className="rounded" />
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="zip" className="text-sm">
                            Zip / Postal
                        </label>
                        <select className="rounded cursor-pointer">
                            <option value="Mr">Mr</option>
                        </select>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="state" className="text-sm">
                            State / Province
                        </label>
                        <input type="text" className="rounded" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="city" className="text-sm">
                            City
                        </label>
                        <input type="text" className="rounded" />
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="regNum" className="text-sm">
                        Registration Number
                    </label>
                    <input type="text" className="rounded" />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="incorporationDate" className="text-sm">
                        Incorporation Date
                    </label>
                    <input type="date" className="rounded" />
                </div>
            </form>
        </>
    );
};

export default Business;
