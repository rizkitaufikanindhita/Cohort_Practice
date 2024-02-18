/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const [card, setCard] = useState([]);

  const axiosWithHeaders = axios.create({
    headers: {
      username: localStorage.getItem("username"),
      "Content-Type": "application/json",
    },
  });

  const showCard = async () => {
    const response = await axiosWithHeaders.get("http://localhost:3000/cards/");
    setCard(response.data.msg);
  };

  useEffect(() => {
    showCard();
  }, [card]);

  const [name, setName] = useState("");
  const [skill, setSkill] = useState("");
  const [portofolio, setPortofolio] = useState("");

  const body = {
    name: name,
    skill: skill,
    portofolio: portofolio,
  };

  const addCard = async () => {
    const add = await axiosWithHeaders.post(
      "http://localhost:3000/cards/card",
      body
    );
    setName("");
    setSkill("");
    setPortofolio("");
  };

  const deleteCard = async (e) => {
    await axiosWithHeaders.delete(`http://localhost:3000/cards/card/${e}`);
  };

  const logout = () => {
    localStorage.removeItem("username");
    navigate("/login");
  };

  const [edit, setEdit] = useState();

  let conditionVal = false;
  const [condition, setCondition] = useState(conditionVal);

  const editHandle = async (e) => {
    setEdit(e);
    setCondition(!conditionVal);
    await axiosWithHeaders.put(`http://localhost:3000/cards/card/${e}`, body);
  };

  conditionVal = condition;

  return (
    <Fragment>
      <div>
        {card.map((item, index) => {
          return (
            <div
              key={item._id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              {edit == item._id && condition == true ? (
                <div
                  style={{
                    border: "2px solid white",
                    padding: "30px",
                    borderRadius: "10px",
                    margin: "20px",
                    backgroundColor: "grey",
                    boxShadow: "0 0 10px 0.1px #04d9ff",
                  }}
                >
                  <div>
                    <input
                      type="text"
                      placeholder="name"
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="skill"
                      onChange={(e) => setSkill(e.target.value)}
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="portofolio"
                      onChange={(e) => setPortofolio(e.target.value)}
                    />
                  </div>
                </div>
              ) : (
                <div
                  style={{
                    border: "2px solid white",
                    padding: "30px",
                    borderRadius: "10px",
                    margin: "20px",
                    backgroundColor: "grey",
                    boxShadow: "0 0 10px 0.1px #04d9ff",
                  }}
                >
                  <div>Name : {item.name}</div>
                  <div>Skill : {item.skill}</div>
                  <div>Portofolio : {item.portofolio}</div>
                </div>
              )}
              <div style={{ marginRight: "10px" }}>
                {localStorage.getItem("username") == "reysa" ? (
                  <button onClick={() => editHandle(item._id)}>
                    {edit == item._id && condition == true ? "OK" : "Edit"}
                  </button>
                ) : (
                  <div></div>
                )}
              </div>
              <div>
                {localStorage.getItem("username") == "reysa" ? (
                  <button onClick={() => deleteCard(item._id)}>Delete</button>
                ) : (
                  <div></div>
                )}
              </div>
            </div>
          );
        })}
      </div>
      <div>
        {localStorage.getItem("username") == "reysa" ? (
          <div>hello admin</div>
        ) : (
          <div></div>
        )}
      </div>
      <div>
        {localStorage.getItem("username") == "reysa" ? (
          <div>
            <div>
              <input
                type="text"
                placeholder="name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="skill"
                onChange={(e) => setSkill(e.target.value)}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="portofolio"
                onChange={(e) => setPortofolio(e.target.value)}
              />
            </div>
            <div>
              <button onClick={addCard}>Add Card</button>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
      <div style={{ margin: "20px" }}>
        <button onClick={logout}>Logout</button>
      </div>
    </Fragment>
  );
};

export default Dashboard;
