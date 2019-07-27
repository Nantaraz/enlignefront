import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { registerUser } from '../actions/authentication';
import classnames from 'classnames';

class Register extends Component {

    constructor() {
        super();
        this.state = {
            nom: '',
            prenom: '',
            email: '',
            specialite: '',
            password: '',
            password_confirm: '',
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
            nom: this.state.nom,
            prenom: this.state.prenom,
            email: this.state.email,
            specialite: this.state.specialite,
            password: this.state.password,
            password_confirm: this.state.password_confirm
        }
        this.props.registerUser(user, this.props.history);
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.auth.isAuthenticated) {
            this.props.history.push('/')
        }
        if(nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }

    componentDidMount() {
        if(this.props.auth.isAuthenticated) {
            this.props.history.push('/');
        }
    }

    render() {
        const { errors } = this.state;
        return(
        <div className="container" style={{ marginTop: '50px', width: '700px'}}>
            <h1 style={{marginBottom: '40px',marginLeft:'70px'}}>Création du compte</h1>
            <form onSubmit={ this.handleSubmit }>
                <div className="form-group">
                    <input
                    id="inputregister"
                    type="text"
                    placeholder="Nom"
                    className={classnames('form-control form-control-lg', {
                        'is-invalid': errors.nom
                    })}
                    name="nom"
                    onChange={ this.handleInputChange }
                    value={ this.state.nom }
                    />
                    {errors.nom && (<div className="invalid-feedback">{errors.nom}</div>)}
                </div>
                <div className="form-group">
                    <input
                    id="inputregister"
                    type="text"
                    placeholder="Prenom"
                    className={classnames('form-control form-control-lg', {
                        'is-invalid': errors.prenom
                    })}
                    name="prenom"
                    onChange={ this.handleInputChange }
                    value={ this.state.prenom }
                    />
                    {errors.prenom && (<div className="invalid-feedback">{errors.prenom}</div>)}
                </div>
                <div className="form-group">
                    <input
                    id="inputregister"
                    type="email"
                    placeholder="Email"
                    className={classnames('form-control form-control-lg', {
                        'is-invalid': errors.email
                    })}
                    name="email"
                    onChange={ this.handleInputChange }
                    value={ this.state.email }
                    />
                    {errors.email && (<div className="invalid-feedback">{errors.email}</div>)}
                </div>
                <div className="form-group">
                    <input
                    id="inputregister"
                    type="text"
                    placeholder="Spécialité"
                    className={classnames('form-control form-control-lg', {
                        'is-invalid': errors.specialite
                    })}
                    name="specialite"
                    onChange={ this.handleInputChange }
                    value={ this.state.specialite }
                    />
                    {errors.specialite && (<div className="invalid-feedback">{errors.specialite}</div>)}
                </div>
                <div className="form-group">
                    <input
                    id="inputregister"
                    type="password"
                    placeholder="Password"
                    className={classnames('form-control form-control-lg', {
                        'is-invalid': errors.password
                    })}
                    name="password"
                    onChange={ this.handleInputChange }
                    value={ this.state.password }
                    />
                    {errors.password && (<div className="invalid-feedback">{errors.password}</div>)}
                </div>
                <div className="form-group">
                    <input
                    id="inputregister"
                    type="password"
                    placeholder="Confirm Password"
                    className={classnames('form-control form-control-lg', {
                        'is-invalid': errors.password_confirm
                    })}
                    name="password_confirm"
                    onChange={ this.handleInputChange }
                    value={ this.state.password_confirm }
                    />
                    {errors.password_confirm && (<div className="invalid-feedback">{errors.password_confirm}</div>)}
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary" id="butregister">
                        S'inscrire
                    </button>
                </div>
            </form>
        </div>

        
        )
    }
}

Register.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(mapStateToProps,{ registerUser })(withRouter(Register))