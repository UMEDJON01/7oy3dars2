import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdShoppingCart } from "react-icons/md";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import { TiAdjustBrightness } from "react-icons/ti";
import { LuMoonStar } from "react-icons/lu";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.text};
  }
`;

const lightTheme = {
  body: "#f0f0f0",
  text: "#000",
  navbar: "#fff",
};

const darkTheme = {
  body: "#121212",
  text: "#fff",
  navbar: "#333",
};

const NavbarContainer = styled.div`
  background-color: ${(props) => props.theme.navbar};
  margin-bottom: 10px;
`;

const Button = styled(Link)`
  background-color: ${(props) => props.theme.buttonBg};
  &:hover {
    background-color: ${(props) => props.theme.buttonHoverBg};
  }
  color: ${(props) => props.theme.text};
  padding: 10px;
  border-radius: 5px;
  text-decoration: none;
`;

const CartIcon = styled(MdShoppingCart)`
  width: 1.75rem;
  height: 1.75rem;
  color: ${(props) => props.theme.cartIcon};
  transition: color 0.4s;
`;

const ThemeToggleIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.75rem;
  color: ${(props) => props.theme.text};
  transition: color 0.4s;
`;

const NavLinks = () => (
  <>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/about">About</Link>
    </li>
    <li>
      <Link to="/contact">Contact</Link>
    </li>
  </>
);

function Navbar() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyle />
      <NavbarContainer className="navbar">
        <div className="max-w-6xl mx-auto navbar">
          <div className="navbar-start">
            <Button to="/" className=" btn text-2xl btn btn-secondary">
              myShop
            </Button>
          </div>
          <div className="navbar-center">
            <ul className="menu menu-horizontal">
              <NavLinks />
            </ul>
          </div>
          <div className="navbar-end gap-9">
            <ThemeToggleIcon onClick={toggleTheme} className="ml-4">
              {theme === "light" ? <TiAdjustBrightness /> : <LuMoonStar />}
            </ThemeToggleIcon>
            <Link to="/cart">
              <div className="indicator cursor-pointer group">
                <span className="indicator-item badge badge-primary group-hover:badge-secondary">
                  9
                </span>
                <CartIcon className="group-hover:text-primary" />
              </div>
            </Link>
          </div>
        </div>
      </NavbarContainer>
    </ThemeProvider>
  );
}

export default Navbar;
