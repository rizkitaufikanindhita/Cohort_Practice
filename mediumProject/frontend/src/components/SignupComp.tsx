import { Fragment } from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import store from "@/store";
import { shallow } from "zustand/shallow";
import { Input } from "./ui/input";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { userSignupType } from "@rizkitaufik/common";
const url = import.meta.env.VITE_URL_SIGNUP

export const SignupComp = () => {
    const navigate = useNavigate();
    const { useSignUpStore } = store;
    const [email, setEmail, name, setName, password, setPassword] = useSignUpStore((state) => [state.email, state.setEmail, state.name, state.setName, state.password, state.setPassword], shallow);

    const body: userSignupType = {
        email: email,
        name: name,
        password: password
    };

    const signup = async () => {
        const response = await axios.post(url, body);
        const token = response.data.token
        if (response.data.msg == "sign up berhasil") {
            localStorage.setItem("token", token)
            localStorage.setItem('nama', email)
            navigate("/dashboard");
        } else {
            alert("user telah terdaftar");
        }
    };

    return <Fragment>
        <div className="flex justify-center items-center h-screen">
            <div>
                <div className="font-bold text-3xl px-8">
                    Create an account
                </div>
                <div className="font-light mt-2 px-5">
                    Already have an account? <Link to={"/signin"}>Login</Link>
                </div>
                <div className="items-start text-left mt-4">
                    <div className="font-bold text-lg">
                        Username
                    </div>
                    <Input className="mt-2" placeholder="Enter your username" onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="items-start text-left mt-4">
                    <div className="font-bold text-lg">
                        Email
                    </div>
                    <Input className="mt-2" placeholder="Johndoe@example.com" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="items-start text-left mt-4">
                    <div className="font-bold text-lg">
                        Password
                    </div>
                    <Input className="mt-2" type="password" placeholder="**********" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <Button className="w-full mt-4" onClick={signup}>Sign up</Button>
            </div>
        </div>
    </Fragment>;
};

export default SignupComp
