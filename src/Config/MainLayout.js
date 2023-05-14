import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../Screen/Login";
import SignUp from "../Screen/SignUp";
import Home from "../Screen/Home";
import ViewSingleCar from "../Screen/ViewSingleCar";

export default function Mainlayout() {
    return <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/login" element={<Login />} />
                <Route path="/:id" element={<ViewSingleCar />} />
            </Routes>
        </BrowserRouter>
    </>

}