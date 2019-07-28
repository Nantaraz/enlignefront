import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/authentication';
import { withRouter } from 'react-router-dom';
import {MDBNavbar, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse,MDBDropdown} from "mdbreact";
import Logo from './logo.png'

class Navbar extends Component {
    onLogout(e) {
        e.preventDefault();
        this.props.logoutUser(this.props.history);
    }
    state = {
        isOpen: false
      };

      toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
      }

    render() {
        const {isAuthenticated} = this.props.auth;
        const authLinks = (
        
        <div>
<div id="eto" class="navbar navbar-inverse navbar-static-top">
    <div class="container-fluid">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
           
            <img id="image" src={Logo} height="60px" alt='aaa'/>
        </div>
        
        <div class="navbar-collapse collapse" id="admin">
            <ul class="nav navbar-nav navbar-right">
                <li class="dropdown">
                    <a class="dropdown-toggle" role="button" data-toggle="dropdown" href="a"><i class="fa fa-user-circle"></i> Admin </a>
                    <ul id="g-account-menu" class="dropdown-menu" role="menu">
                    <li><a href="a" to="/login" onClick={this.onLogout.bind(this)}><i class="fa fa-sign-out" ></i> Déconnecter</a></li>
                    </ul>
                </li>
              
            </ul>
        </div>
    </div>
    
</div>


<div class="col-lg-2 col-md-2 col-sm-3 col-xs-12" id ="aaa">

    <ul  >
    <h4> <li><a href="" id = "Atelier"><i class="fa fa-dashboard"></i>Dashboard</a></li></h4><br/><br/><br/><br/><br/>
        <li><Link to={"/profil/"+localStorage.getItem('id')}><a href="a" id = "Atelier"><i class="fa fa-tags"></i> Listes de mes ateliers</a></Link></li><br/><br/><br/>
        <li><Link to="/monAtelier"><a href="a" id = "Atelier"><i class="fa fa-history"></i> Ajouter un atelier</a></Link></li><br/><br/><br/>
        {/* <li><a href="a"><i class="fa fa-lock"></i> Change Password</a></li><br/><br/> */}

    </ul>
</div>
<div >
    

    <a href="a"><strong><span class="fa fa-dashboard" id = "Atelier"></span> </strong></a>
    <hr/>
</div>
</div>

        )
      const guestLinks = (

        
        
        <MDBNavbar  color="default-color" dark expand="md" id="eto">
            <img src={Logo} height="40px" alt='aaa'/>

   <MDBNavbarToggler onClick={this.toggleCollapse} />
   <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
     <MDBNavbarNav left>
     <MDBNavItem>
   <MDBNavLink to="/">Accueil</MDBNavLink>
 </MDBNavItem>
       <MDBNavItem>
         <MDBDropdown>
         </MDBDropdown>
       </MDBNavItem>
     </MDBNavbarNav>
     <MDBNavbarNav right>
     <MDBNavLink className="waves-effect waves-light" to="/login">
              Connecter
            </MDBNavLink>
     </MDBNavbarNav>
   </MDBCollapse>
 </MDBNavbar>




      )
        return(
                <div  id="navbarSupportedContent">
                    { isAuthenticated? authLinks : guestLinks}
                </div>
        )
    }
}
Navbar.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps, { logoutUser })(withRouter(Navbar));