import React from "react"

const Authlayout = ({children}: {
  children: React.ReactNode
}) => {
  return (
  <div>
    <div className="border text-center">
      20% off for the next 3 days
    </div>
    {children}
  </div>
  )
}

export default Authlayout
