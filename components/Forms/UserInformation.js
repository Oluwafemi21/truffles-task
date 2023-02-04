import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useState } from "react";
const User = () => {
    const [value, setValue] = useState("");
    return (
        <>
            <p className="text-xl font-semibold">User Information</p>
            <span className="text-sm">Please enter your details</span>
            <form className="flex flex-col gap-5 my-7">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="title" className="text-sm">
                            Title
                        </label>
                        <select className="rounded cursor-pointer">
                            <option value="Mr">Mr</option>
                        </select>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="lastName" className="text-sm">
                            First name
                        </label>
                        <input type="text" className="rounded" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="lastName" className="text-sm">
                            Last name
                        </label>
                        <input type="text" className="rounded" />
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="gender" className="text-sm">
                        Gender
                    </label>
                    <select
                        name="gender"
                        id="gender"
                        className="rounded cursor-pointer"
                    >
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="phone" className="text-sm">
                        Mobile Number
                    </label>
                    <PhoneInput
                        country={"us"}
                        value={value}
                        onChange={setValue}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="nationality" className="text-sm">
                        Nationality
                    </label>
                    <select
                        name="nationality"
                        id="nationality"
                        className="rounded cursor-pointer"
                    >
                        <option value="usa">United States</option>
                        <option value="ngn">Nigeria</option>
                    </select>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="address" className="text-sm">
                            Residential Address
                        </label>
                        <input type="text" className="rounded" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="postalCode" className="text-sm">
                            Postal Code
                        </label>
                        <input type="text" className="rounded" />
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="occupation" className="text-sm">
                        Occupation
                    </label>
                    <input type="text" className="rounded" />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="dob" className="text-sm">
                        Date of birth
                    </label>
                    <input type="date" className="rounded" />
                </div>
            </form>
        </>
    );
};

export default User;
