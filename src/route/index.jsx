import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Questonario } from "../pages/Questonario";



export function RouteApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/questonario" element={<Questonario/>} />
      </Routes>
    </BrowserRouter>
  );
}