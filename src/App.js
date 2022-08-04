import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import "./css/nullstyle.css";
import "./css/App.css";

function App(props) {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <Sidebar state={props.state.sidebar}/>
        <section className="content">
          <Routes>
            <Route
              path="/profile"
              element={<Content state={props.state.profilePage} dispatch={props.dispatch} />}
            />
            <Route
              path="/dialogs/*"
              element={
                <Dialogs
                  state={props.state.dialogsPage}
                  dispatch={props.dispatch}
                />
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
