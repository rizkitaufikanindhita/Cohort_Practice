/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { create } from "zustand";
import axios from "axios";

const useAppStore = create((set, get) => ({
  //networkCount
  networkCount: null,

  //jobsCount
  jobsCount: null,

  //messagingCount
  messagingCount: null,
  // increaseMessageCount: () =>
  //   set((state) => ({ messagingCount: state.messagingCount + 1 })),

  //notificationCount
  notificationCount: null,

  //me
  meCount: () => {
    const { networkCount, jobsCount, messagingCount, notificationCount } =
      get();
    return networkCount + jobsCount + messagingCount + notificationCount;
  },

  // fetch api
  fetchAPI: async () => {
    try {
      const response = await axios.get(
        "https://sum-server.100xdevs.com/notifications"
      );
      const { network, jobs, messaging, notifications } = response.data;
      set({
        networkCount: network,
        jobsCount: jobs,
        messagingCount: messaging,
        notificationCount: notifications,
      });
    } catch (e) {
      console.log(e);
    }
  },
}));

export default useAppStore;
