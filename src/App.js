import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer/Footer";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import "./css/nullstyle.css";
import "./css/App.css";
import ContentContainer from "./components/Content/ContentContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

function App(props) {

  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <Sidebar />
        <section className="content">
          <Routes>
            <Route
              path="/profile"
              element={<ContentContainer />}
            />
            <Route
              path="/dialogs/*"
              element={
                <DialogsContainer />
              }
            />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </section>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
