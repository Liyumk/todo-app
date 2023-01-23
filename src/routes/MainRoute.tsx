import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";

const MainRoute = () => {
    return (
        <Routes>
            <Route index element={<Home />} />
        </Routes>
    );
};

export default MainRoute;
