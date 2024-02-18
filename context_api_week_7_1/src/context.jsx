import { createContext } from "react";

// teleporter
const CountContext = createContext({ count: 0, setCount: () => {} });

export default CountContext;
