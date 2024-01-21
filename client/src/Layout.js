import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"

const Layout = () => {
  return (
    <>
    <main>
        <Header />
        <Outlet />
    </main>
        <Footer />
    </>
    
  )
}

export default Layout
