import { Fragment } from "react"
import useAppStore from "../../store"

const Jobs = () => {
    const jobsCount = useAppStore((state)=>state.jobsCount)
    return <Fragment><button>Jobs ({jobsCount})</button></Fragment>
}
export default Jobs