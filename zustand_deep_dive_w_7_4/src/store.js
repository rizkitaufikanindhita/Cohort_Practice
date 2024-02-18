import { create } from "zustand";

const useAppStore = create((set)=>({
    //networkCount
    networkCount : 104,

    //jobsCount
    jobsCount : 0,

    //messagingCount
    messagingCount : 0,

    //notificationCount
    notificationCount : 12, 
}))

export default useAppStore