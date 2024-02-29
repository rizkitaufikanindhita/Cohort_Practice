import { Fragment } from "react";
import useAppStore from "../../../store";
import { shallow } from "zustand/shallow";
import axios from "axios";
const url = import.meta.env.VITE_URL_ADD;

const Button = () => {
  const [site, account, passwordAccount] = useAppStore(
    (state) => [state.site, state.account, state.passwordAccount],
    shallow
  );

  const body = {
    site: site,
    account: account,
    passwordAccount: passwordAccount,
  };

  const addData = async () => {
    await axios.post(url, body);
  };

  return (
    <Fragment>
      <button
        className="w- h72-12 bg-slate-500 m-2 p-2 rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)] text-white text-xl"
        onClick={addData}
      >
        Save
      </button>
    </Fragment>
  );
};

export default Button;
