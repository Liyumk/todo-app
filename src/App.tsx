import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { BrowserRouter } from "react-router-dom";
import MainRoute from "./routes/MainRoute";

function App() {
    return (
        <BrowserRouter>
            <MainRoute />
        </BrowserRouter>
    );
}

export default App;
