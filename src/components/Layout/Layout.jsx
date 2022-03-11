import React from "react";

const Layout = ({children}) => {
  return (
    <div className="py-10 px-40 bg-zinc-900 h-screen ">
      {children}
    </div>
  )
}

export default Layout;