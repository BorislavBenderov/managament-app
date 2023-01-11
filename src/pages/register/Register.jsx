import { Link } from "react-router-dom";

export const Register = () => {
    return (
        <div className="w-80 my-12 mx-auto">
            <div className="bg-white px-10 pt-2 pb-24 mb-2 rounded-lg border-2 border-black border-solid">
                <h1 className="mb-7 text-center text-2xl font-bold">Mangament App</h1>
                <form className="flex flex-col">
                    <label htmlFor="email" />
                    <input
                        className="mb-2 py-1 px-2 rounded-lg border-2 border-black border-solid text-black"
                        type="text"
                        placeholder="Email"
                        id="email"
                        name="email" />
                    <label htmlFor="password" />
                    <input
                        className="mb-2 py-1 px-2 rounded-lg border-2 border-black border-solid text-black"
                        type="password"
                        placeholder="Password"
                        id="password"
                        name="password"
                    />
                    <label htmlFor="repeatPassword" />
                    <input
                        className="mb-2 py-1 px-2 rounded-lg border-2 border-black border-solid text-black"
                        type="password"
                        placeholder="Password"
                        id="repeatPassword"
                        name="repeatPassword"
                    />
                    <button
                        className="bg-amber-500 text-white font-semibold mt-5 rounded-lg border-2 border-black border-solid py-1 px-2"
                        type="submit">Register</button>
                    <p className=""></p>
                </form>
            </div>
            <div className="flex justify-evenly items-center bg-white text-center rounded-lg border-2 border-black border-solid py-1">
                <p>Have an account?</p>
                <Link className="text-amber-600" to="/">Sign in</Link>
            </div>
        </div>
    );
}