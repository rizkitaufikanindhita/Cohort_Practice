import { create } from "zustand";
import axios from "axios";

const useAppStore = create((set) => ({
  name: null,
  id: null,
  company: null,
  bio: null,
  fetchData: async () => {
    const response = await axios.get(
      `https://api.github.com/users/rizkitaufikanindhita`
    );
    const { name, id, company, bio } = response.data;
    set({
      name: name,
      id: id,
      company: company,
      bio: bio,
    });
  },
}));

export default useAppStore;
