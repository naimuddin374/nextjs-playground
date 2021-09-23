import { Router, Link } from "@reach/router"
import Navigator from "../components/navigator"
import Home from "../pages/home"
import About from '../pages/about'
import Contact from "../pages/contact"
import User from './../pages/user';



function AppRouter() {
    return (
        <div>
            <Navigator />
            <Router>
                <User path='/user' />
                <About path='/about' />
                <Contact path='/contact' />
                <Home path='/' default />
            </Router>
        </div>
    )
}
export default AppRouter