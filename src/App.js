import "./App.css";
import Header from "./Components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Products from "./pages/Products";
import Bookmark from "./pages/Bookmark";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/products/list" element={<Products />}></Route>
        <Route path="/bookmark" element={<Bookmark />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
