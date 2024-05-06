import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../screens/home"
import Signup from "../screens/signup"
import Login from "../screens/login"

const Routers = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='login' element={< Login />} />
                    <Route path='signup' element={<Signup />} />
                    <Route path='/' element={<Home />} />
                </Routes>

            </BrowserRouter>
        </>
    )
}
export default Routers