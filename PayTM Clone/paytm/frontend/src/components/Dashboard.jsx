/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { Fragment, useEffect, useState } from "react";
const urlBalance = import.meta.env.VITE_URL_BALANCE;
import axios from "axios";
import useAppStore from "../store";
import { shallow } from "zustand/shallow";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const [balance, setBalance] = useAppStore(
    (state) => [state.balance, state.setBalance],
    shallow
  );

  const username = localStorage.getItem("username");

  // const axiosWithToken = axios.create({
  //   headers: {
  //     Authorization: localStorage.getItem("token"),
  //     "Content-Type": "application/json",
  //   },
  // });

  const data = async () => {
    const response = await axios.get(urlBalance, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
        "Content-Type": "application/json",
      },
    });
    setBalance(response.data.data);
  };

  const [search, setSearch] = useState("");
  const [user, setUser] = useState([]);

  const userData = async () => {
    const response = await axios.get(
      `http://localhost:3000/api/v1/user/bulk?filter=${search}`,
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
          "Content-Type": "application/json",
        },
      }
    );
    setUser(response.data.data);
  };

  useEffect(() => {
    data();
  }, []);

  useEffect(() => {
    userData();
  }, [search]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  // debounce
  let timeOutData;
  const debounceUserData = (e) => {
    clearTimeout(timeOutData);
    timeOutData = setTimeout(() => {
      handleSearch(e);
    }, 300);
  };

  // console.log(user);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    navigate("/signin");
  };

  return (
    <Fragment>
      <div className="w-screen h-screen bg-gray-200">
        <div className="flex justify-between border-b-2 border-slate-300">
          <div className="p-5 mx-5 text-4xl font-bold ">Payment App</div>
          <div className="p-5 mx-5 text-2xl font-semibold">
            Hello, {username}
          </div>
        </div>
        <div className="p-5 mx-5 text-3xl font-semibold">
          Your Balance ${balance}
        </div>
        <div>
          <div className="p-5 mx-5 text-3xl font-semibold">Users</div>
          <input
            type="text"
            onChange={(e) => debounceUserData(e)}
            className="w-11/12 p-2 mx-10 bg-gray-200 border-2 border-white rounded-md outline-none"
          />
        </div>
        <div className="p-5 mx-5 text-3xl font-semibold">
          {user.map((item, index) => {
            return (
              <div key={index}>
                {item.username != username ? (
                  <div className="flex justify-between">
                    <div className="my-5">{item.firstname}</div>
                    <button
                      className="p-2 my-5 text-xl text-white rounded-md bg-slate-700"
                      onClick={(e) =>
                        navigate(
                          `/send?id=${item.id}&firstname=${item.firstname}`
                        )
                      }
                    >
                      Send Money
                    </button>
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
        <div className="mx-10">
          <button
            className="p-2 my-5 text-xl text-white rounded-md bg-slate-700"
            onClick={logout}
          >
            Logout
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default Dashboard;
