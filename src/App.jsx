import { Route, Routes } from "react-router-dom";
import "./App.css";
import SiderLayout from "./components/Layout/SiderLayout";
import MainPage from "./components/MainPage/MainPage"
import AppLayout from "./components/Layout/AppLayout";


export default function App() {
  return (
  <div>
    <Routes>
    <Route path="/" element={<AppLayout />}>
    <Route index element={<MainPage />}/>
    <Route path="/player-form" element={<AppLayout />}/>
    </Route>
  </Routes>
  </div>
)
}