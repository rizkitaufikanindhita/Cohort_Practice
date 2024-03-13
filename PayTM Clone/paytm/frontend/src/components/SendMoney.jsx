/* eslint-disable react/no-unescaped-entities */
import { Fragment, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
const urlTransfer = import.meta.env.VITE_URL_TRANSFER;
import { useNavigate } from "react-router-dom";

const SendMoney = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const firstname = searchParams.get("firstname");

  const [amount, setAmount] = useState();

  // const axiosWithToken = axios.create({
  //   headers: {
  //     Authorization: localStorage.getItem("token"),
  //     "Content-Type": "application/json",
  //   },
  // });

  const body = {
    to: id,
    amount,
  };

  const transfer = async () => {
    await axios.post(urlTransfer, body, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
        "Content-Type": "application/json",
      },
    });
    alert("Transfer Berhasil");
    navigate("/dashboard");
  };

  return (
    <Fragment>
      <div className="w-screen h-screen bg-gray-600">
        <div className="flex items-center justify-center h-screen">
          <div className="bg-gray-200 w-96 h-2/5 rounded-xl flex justify-center items-center shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
            <div className="w-full h-full text-center px-7">
              <div className="mt-10 mb-3 text-4xl font-bold">Sent Money</div>
              <div className="flex justify-center">
                <div className="w-16 h-16 pt-3 mx-5 mt-5 text-3xl font-semibold text-center bg-yellow-300 rounded-full">
                  {firstname[0].toUpperCase()}
                </div>
                <div className="mt-10 text-3xl font-semibold text-left">
                  {firstname}
                </div>
              </div>
              <div className="mt-5 text-xl font-semibold text-left">
                Amount in $
              </div>
              <div className="text-left">
                <input
                  onChange={(e) => setAmount(e.target.value)}
                  type="text"
                  placeholder="Enter amount"
                  className="w-full p-2 mt-5 text-left bg-gray-200 border border-white rounded-md outline-none"
                />
              </div>
              <div className="p-2 mt-10 font-semibold text-white rounded-md bg-slate-700">
                <button onClick={transfer}>Initiate Transfer</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default SendMoney;
