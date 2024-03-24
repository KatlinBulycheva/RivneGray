// import logo from './logo.svg';
// import './App.css';
import { Outlet } from "react-router-dom";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Wrapper } from "./components/Wrapper/Wrapper";

function App() {
  return (
    <>
      <Header/>
      <Wrapper>
        <Outlet/>
      </Wrapper>
      <Footer/>
    </>
  );
}

export default App;
