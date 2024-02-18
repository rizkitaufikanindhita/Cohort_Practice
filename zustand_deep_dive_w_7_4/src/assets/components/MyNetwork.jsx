import { Fragment } from "react"
import useAppStore from "../../store"

const MyNetwork = () => {
    const networkCount = useAppStore((state)=>state.networkCount)
    return <Fragment><button>My Network ({networkCount >= 100 ? "99+" : networkCount})</button></Fragment>
}
export default MyNetwork