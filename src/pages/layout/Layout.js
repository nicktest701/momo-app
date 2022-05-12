import React from "react";
import Container from "../../components/Container";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
function Layout() {
  return (
    <Container>
      <Header />
      <Main />
      <Footer />
    </Container>
  );
}

export default Layout;
