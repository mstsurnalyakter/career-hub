import NavBar from '../components/NavBar'
import { Outlet } from 'react-router'
import Footer from '../components/Footer'

const MainLayout = () => {
  return (
    <div>
        <div>
            <NavBar/>
        </div>
        <div>
            <Outlet/>
        </div>
        <Footer/>
    </div>
  )
}

export default MainLayout