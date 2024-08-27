import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; //browserRouter aşağıda Router olarak kullanıldı
import Header from "./components/Header";
import MainPage from "./pages/MainPage";
import DetailPage from "./pages/DetailPage";

const App = () => {
  return (
    <Router>
      <div className="p-5 md:p-10 lg:p-16 xl:p-20">
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/movie/:id" element ={<DetailPage/>}/>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
