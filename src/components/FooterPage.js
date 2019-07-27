import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
  
<div id="foot">
<MDBFooter  className="font-small pt-4 mt-4 " >
<MDBContainer fluid className="text-center text-md-left" >
  <MDBRow>
    <MDBCol md="2">
      <h5 className="title"></h5>
    </MDBCol>
    <MDBCol md="2">
      <h5 className="title">Avez-vous aimé cette page ?</h5>
    </MDBCol>
  </MDBRow>
</MDBContainer>
<div className="footer-copyright text-center py-3">
  <MDBContainer fluid id='anarana'>
    &copy; {new Date().getFullYear()}  <a className="anarana"> RAZAFINDRAMIANDRA Herinantenaina Miandrasoa </a>
  </MDBContainer>
</div>
</MDBFooter>
</div>
  );
}

export default FooterPage;