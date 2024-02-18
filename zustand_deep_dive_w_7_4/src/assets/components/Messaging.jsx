import { Fragment } from "react"
import useAppStore from "../../store"

const Messaging = () => {
    const messagingCount = useAppStore((state)=>state.messagingCount)
    return <Fragment><button>Messaging ({messagingCount})</button></Fragment>
}
export default Messaging