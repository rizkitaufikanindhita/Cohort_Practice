import { Fragment } from "react"
import useAppStore from "../../store"

const Notifications = () => {
    const notificationCount = useAppStore((state)=>state.notificationCount)
    return <Fragment><button>Notifications ({notificationCount})</button></Fragment>
}
export default Notifications