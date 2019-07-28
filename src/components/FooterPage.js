import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    <footer class="app-footer">
    <div>
      {/* <a href="https://coreui.io">CoreUI</a> */}
      <center><span>&copy; 2018 RAZAFINDRAMIANDRA Herinantenaina Miandrasoa</span></center>
    </div>
    <div class="ml-auto">
      {/* <span>Powered by</span>
      <a href="https://coreui.io">CoreUI</a> */}
    </div>
  </footer>

/* <MDBFooter  className="font-small pt-4 mt-4 " >
<MDBContainer fluid className="text-center text-md-left" >
  <MDBRow>
    <MDBCol md="6">
    <h5 className="title">Avez-vous aimé cette page ?</h5>
    </MDBCol>
    <MDBCol md="6">
     
    </MDBCol>
  </MDBRow>
</MDBContainer>
<div className="container-fluid footer-copyright text-center py-3">
  <MDBContainer fluid id='anarana'>
    &copy; {new Date().getFullYear()}  <a className="anarana"> RAZAFINDRAMIANDRA H.Nantenaina </a>
  </MDBContainer>
</div>
</MDBFooter> */

  );
}

export default FooterPage;