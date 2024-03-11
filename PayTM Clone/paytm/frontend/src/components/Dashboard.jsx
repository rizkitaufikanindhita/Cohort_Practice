/* eslint-disable react-hooks/exhaustive-deps */
import { Fragment, useEffect, useState } from "react";
const urlBalance = import.meta.env.VITE_URL_BALANCE;
import axios from "axios";
import useAppStore from "../store";
import { shallow } from "zustand/shallow";

const Dashboard = () => {
  const [balance, setBalance] = useAppStore(
    (state) => [state.balance, state.setBalance],
    shallow
  );

  const username = localStorage.getItem("username");

  const axiosWithToken = axios.create({
    headers: {
      Authorization: localStorage.getItem("token"),
      "Content-Type": "application/json",
    },
  });

  const data = async () => {
    const response = await axiosWithToken.get(urlBalance);
    setBalance(response.data.data);
  };

  const [search, setSearch] = useState("");
  const [user, setUser] = useState([]);

  const userData = async () => {
    const response = await axiosWithToken.get(
      `http://localhost:3000/api/v1/user/bulk?filter=${search}`
    );
    console.log(response.data.data);
    setUser(response.data.data);
  };

  useEffect(() => {
    data();
  }, []);

  useEffect(() => {
    userData();
  }, [user]);

  return (
    <Fragment>
      <div>
        <div>Payment App</div>
        <div>Hello, {username}</div>
        <div>Your Balance ${balance}</div>
        <input type="text" onChange={(e) => setSearch(e.target.value)} />
        <div>
          {user.map((item, index) => {
            return (
              <div key={index}>
                {item.username != username ? (
                  <div>
                    <div>{item.username}</div>
                    <button>Send Money</button>
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </Fragment>
  );
};

export default Dashboard;
