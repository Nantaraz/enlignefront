import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter id="footer" color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">Footer Content</h5>
            <center><p>
            Avez-vous aimé cette page ?
Cliquez s'inscrire pour la noter !


            </p></center>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <center><MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.MDBootstrap.com">  RAZAFINDRAMIANDRA Herinantenaina Miandrasoa </a>
        </MDBContainer></center>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;