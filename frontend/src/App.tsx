import { useContext, useEffect } from "react";
import {  Button, Container, Nav, Navbar } from "react-bootstrap";

// import Home from "./pages/Home";
import { Outlet } from "react-router-dom";
import { Store } from "./Store";

function App() {
  
  const {
     state:{mode} , dispatch 
    } = useContext(Store);

    useEffect(() => {
      document.body.setAttribute("data-bs-theme", mode);
    }, [mode]);

    const switchModeHandler = () => {
      dispatch({ type: "SWITCH_MODE" });
    };

  return (
    <div className="d-flex flex-column vh-full">
      <header className="App-header">
        <Navbar >
          <Container>
            <Navbar.Brand href="#home">E-Commerce</Navbar.Brand>
          </Container>
          <Nav>
            <Button variant={mode} onClick={switchModeHandler}>
              <i className={mode === "light" ? "fa fa-sun" : "fa fa-moon"}></i>
            </Button>
            <a href="#home" className="nav-link">
              Home
            </a>
            <a href="#products" className="nav-link">
              Products
            </a>
            <a href="#about" className="nav-link">
              About
            </a>
            <a href="#signin" className="nav-link">
              Signin
            </a>
          </Nav>
        </Navbar>
      </header>

      <main>
        <Container className="mt-3">
          {/* <Home /> */}
          <Outlet />
        </Container>
      </main>

      <footer>
        <div className="text-center">all right reserved @2024</div>
      </footer>
    </div>
  );
}

export default App;
