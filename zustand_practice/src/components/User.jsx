import store from "../store";
import { shallow } from "zustand/shallow";

const User = () => {
  const { useAppStore } = store;
  const [username, updateUsername] = useAppStore(
    (state) => [state.username, state.updateUsername],
    shallow
  );

  console.log("render username");
  return (
    <div>
      <div>{username}</div>
      <input
        type="text"
        onChange={(e) => updateUsername(e.target.value)}
        placeholder="new username"
      />
    </div>
  );
};

export default User;
