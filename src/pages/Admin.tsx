import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const AdminHome: React.FC = () => {
    const adminEmail = "admin@gmail.com";
    const adminPass = "admin321";
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const navigate = useNavigate();

    const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (password === adminPass && email === adminEmail) {
            console.log("login successful");
            navigate("admin_home");
        }
    };

    return (
        <div className="bg-[#0E0C28] h-[100vh] w-[100vw] flex justify-center items-center">
            <div className="bg-white w-[350px] rounded-md">
              
                <h1 className="text-center text-2xl font-semibold text-[#3D405C] border-b-2 py-3">
                    ADMIN SIGN IN
                </h1>

                <form onSubmit={handleLogin} className="mt-5">
                    <div className="form-control">
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            placeholder="Email"
                            className="input mx-auto rounded-none input-bordered input-primary w-full max-w-xs"
                            required
                        />
                    </div>
                    <div className="form-control mt-2">
                        <input
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            placeholder="Password"
                            className="input mx-auto rounded-none input-bordered input-primary w-full max-w-xs"
                            required
                        />
                    </div>
                    <input
                        className="w-11/12 ml-4 my-4 rounded-none btn bg-[#5969FF] text-white hover:bg-[#2633ac]"
                        type="submit"
                        value="Login"
                    />
                </form>
            </div>
        </div>
    );
};

export default AdminHome;
