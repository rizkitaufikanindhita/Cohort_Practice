/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { create } from "zustand";

const useAppStore = create((set, get) => ({
  //networkCount
  networkCount: 54,

  //jobsCount
  jobsCount: 0,

  //messagingCount
  messagingCount: 0,
  increaseMessageCount: () =>
    set((state) => ({ messagingCount: state.messagingCount + 1 })),

  //notificationCount
  notificationCount: 12,

  //me
  meCount: () => {
    const { networkCount, jobsCount, messagingCount, notificationCount } =
      get();
    return networkCount + jobsCount + messagingCount + notificationCount;
  },
}));

export default useAppStore;
