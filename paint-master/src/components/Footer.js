import React from "react";
import { Box, Container, Row, Column, FooterLink, Heading, } from "./FooterStyles";
  
function Footer () {
  return (
    <div className="main-footer">
    <div className="container">
    <Box>
      <h1 style={{ color: "#ffec3d", textAlign: "center", marginTop: "-50px" }}>
        The Painting Shed
      </h1>
      <Container>
        <Row>
          <Column>
            <Heading>About Us</Heading>
            <FooterLink href="#">Mission</FooterLink>
            <FooterLink href="#">Vision</FooterLink>
            <FooterLink href="#">Values</FooterLink>
            <FooterLink href="#">Our Story</FooterLink>
          </Column>
          <Column>
            <Heading>Products</Heading>
            <FooterLink href="#">Paint Brushes</FooterLink>
            <FooterLink href="#">Mixing Dishes</FooterLink>
            <FooterLink href="#">Acrylic Paint</FooterLink>
            <FooterLink href="#">Water Colour Paint</FooterLink>
          </Column>
          <Column>
            <Heading>Contact Us</Heading>
            <FooterLink href="#">Sydney</FooterLink>
            <FooterLink href="#">Melbourne</FooterLink>
            <FooterLink href="#">Queensland</FooterLink>
            <FooterLink href="#">Western Australia</FooterLink>
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="#">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>
                  Facebook
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>
                  Instagram
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>
                  Twitter
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-youtube">
                <span style={{ marginLeft: "10px" }}>
                  Youtube
                </span>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </Container>
      <br />
      <br />
      <br /> 
      <p style={{ color: "#ffec3d", textAlign: "left" }}>
        &copy;{new Date().getFullYear()} The Painting Shed | All rights reserved
      </p>
    </Box>
    </div>
    </div>
  );
}

export default Footer;