"use client"

import store from "@repo/store/useBalance"

const BalanceComp = () => {
  const { useBalance } = store
  const balance = useBalance((state: any) => state.balance)
  return(
  <div>
      {balance}
  </div>
  )
}

export default BalanceComp
