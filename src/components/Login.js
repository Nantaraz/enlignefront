import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginUser } from '../actions/authentication';
import classnames from 'classnames';

class Login extends Component {

    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            errors: {}
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = {
            email: this.state.email,
            password: this.state.password,
        }
        this.props.loginUser(user);
    }

    componentDidMount() {
        if(this.props.auth.isAuthenticated) {
            this.props.history.push('/');
        }
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.auth.isAuthenticated) {
            this.props.history.push('/admin')
        }
        if(nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }

    render() {
        const {errors} = this.state;
        return(
            <form onSubmit={ this.handleSubmit }>
                <div class="container" >
    <div class="card card-login mx-auto text-center bg-dark">
         <div >
            <span> <img src="https://amar.vote/assets/img/amarVotebd.png" class="w-75" alt="Logo"/> </span><br/>
                      
        </div> 
        <div class="card-body">
            <form action="" method="post">
                <div class="input-group form-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text"><i class="fas fa-user"></i></span>
                    </div>
                    <input id="logininput" type="text" name="email" value={this.state.email} onChange={this.handleInputChange} className={classnames('form-control form-control-lg', {
                        'is-invalid': errors.email
                    })} placeholder="E-mail"/>{errors.email && (<div className="invalid-feedback">{errors.email}</div>)}
                </div>

                <div class="input-group form-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text"><i class="fas fa-key"></i></span>
                    </div>
                    <input type="password"  id="logininput" name="password" value={this.state.password} onChange={this.handleInputChange} className={classnames('form-control form-control-lg', {
                        'is-invalid': errors.password
                    })}  placeholder="Password"/> {errors.password && (<div className="invalid-feedback">{errors.password}</div>)}
                </div>

                <div class="form-group">
                    <input type="submit" id="butlogin" name="btn" value="S'identifier" class="btn btn-outline-primary float-right login_btn"/>
                </div>
                
            </form>
        </div>
    </div>
</div>

            </form>
            
       
        )
    }
}

Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors
})

export  default connect(mapStateToProps, { loginUser })(Login)