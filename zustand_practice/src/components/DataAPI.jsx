/* eslint-disable react-hooks/exhaustive-deps */
import { Fragment, useState } from "react";
import store from "../store";
import { shallow } from "zustand/shallow";

const DataAPI = () => {
  const { useFetchStore } = store;
  const [data, fetchData, logoutData] = useFetchStore(
    (state) => [state.data, state.fetchData, state.logoutData],
    shallow
  );
  const [username, setUsername] = useState("");

  console.log(data);

  return (
    <Fragment>
      <input
        type="text"
        placeholder="username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={() => fetchData(username)}>login</button>
      <div>
        {data.map((item, index) => {
          return (
            <Fragment key={index}>
              {username == item.login ? (
                <div>
                  <div>Name : {item.name}</div>
                  <div>Company : {item.company}</div>
                  <div>College : {item.bio}</div>
                </div>
              ) : (
                <div>Users Not Found</div>
              )}
            </Fragment>
          );
        })}
      </div>
      <button onClick={logoutData}>logout</button>
    </Fragment>
  );
};

export default DataAPI;
