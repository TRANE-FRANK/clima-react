import React from "react"


export default function Alert({children} : {children: React.ReactNode}) {
  return (
    <div className="text-center text-white uppercase text-1xl">{children}</div>
  )
}
