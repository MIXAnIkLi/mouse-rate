import { Route, Routes } from "react-router-dom";
import "./App.css";
import MainPage from "./components/MainPage/MainPage"
import AppLayout from "./components/Layout/AppLayout";
import ContentLayout from "./components/Layout/ContentLayout/ContentLayout";


export default function App() {
  return (
  <div>
    <Routes>
    <Route path="/" element={<AppLayout />}>
    <Route index element={<MainPage />}/>
    <Route path="/player-form" element={<ContentLayout />}/>
    </Route>
  </Routes>
  </div>
)
}