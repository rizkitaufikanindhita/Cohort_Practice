import { Fragment } from "react";
import { Button } from "./ui/button";
import store from "@/store";
import { shallow } from "zustand/shallow";
import { Input } from "./ui/input";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { userSigninType } from "@rizkitaufik/common";
const url = import.meta.env.VITE_URL_SIGNIN

export const SigninComp = () => {
    const navigate = useNavigate();
    const { useSignInStore } = store;
    const [email, setEmail, password, setPassword] = useSignInStore((state) => [state.email, state.setEmail, state.password, state.setPassword], shallow);

    const body: userSigninType = {
        email: email,
        password: password
    };

    const signup = async () => {
        const response = await axios.post(url, body);
        const token = response.data.token
        if (response.data.msg == "sign in berhasil") {
            localStorage.setItem('token', token)
            localStorage.setItem('nama', email)
            navigate("/dashboard");
        } else {
            alert("Salah input, mohon dicek ulang");
        }
    };

    return <Fragment>
        <div className="flex justify-center items-center h-screen">
            <div className="w-full">
                <div className="font-bold text-3xl px-14">
                    Welcome
                </div>
                <div className="font-light mt-2 px-5">
                    Please login using your account
                </div>
                <div className="px-44">
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
                  <Button className="w-full mt-4" onClick={signup}>Login</Button>
                </div> 
            </div>
        </div>
    </Fragment>;
};

export default SigninComp
