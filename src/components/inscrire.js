
import React, { Component } from 'react';
import axios from 'axios';

export default class Inscrire extends Component {
  constructor(props) {
    super(props);
    this.onChangenom = this.onChangenom.bind(this);
    this.onChangeprenom = this.onChangeprenom.bind(this);
    this.onChangeemail = this.onChangeemail.bind(this);
    this.onChangetelephone = this.onChangetelephone.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      Nom: '',
      Prenom: '',
      Email:'',
      Telephone:''
    }
  }
  onChangenom(e) {
    this.setState({
      Nom: e.target.value
    });
  }
  onChangeprenom(e) {
    this.setState({
      Prenom: e.target.value
    })  
  }
  onChangeemail(e) {
    this.setState({
      Email: e.target.value
    })
  }
  onChangetelephone(e) {
    this.setState({
      Telephone: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();
    const obj = {
      Nom: this.state.Nom,
      Prenom: this.state.Prenom,
      Telephone: this.state.Telephone,
      Email: this.state.Email,
      
    };
    axios.post('https://aese.herokuapp.com/particulier/'+localStorage.getItem('ti'), obj)
        .then(res => console.log(res.data));
    
    this.setState({
      Nom: '',
      Prenom: '',
      Email: '',
      Telephone:''
    })
  }
 
  render() {
    return (
        <div style={{ marginTop: 10 }}>
           
            <form onSubmit={this.onSubmit}>
            <h3>Inscription pour l'atélier</h3>
                <center><div className="form-group">
                    <input 
                      id="inputatelier"
                      type="text" 
                      className="form-control" 
                      placeholder="Nom"
                      value={this.state.Nom}
                      onChange={this.onChangenom}
                      required
                      />
                </div>
                <div className="form-group">
                    <input type="text"
                     id="inputatelier" 
                      className="form-control"
                      placeholder="Prenom"
                      value={this.state.Prenom}
                      onChange={this.onChangeprenom}
                      required
                      />
                </div>
                <div className="form-group">
                    <input type="text" 
                      id="inputatelier"
                      className="form-control"
                      placeholder="Telephone"
                      value={this.state.Telephone}
                      onChange={this.onChangetelephone}
                      required
                      />
                </div>
                <div className="form-group">
                    <input type="email" 
                      id="inputatelier"
                      className="form-control"
                      placeholder="Email"
                      value={this.state.Email}
                      onChange={this.onChangeemail}
                      required
                      />
                </div>
               
                <div className="form-group">
                    <input type="submit" id="butatelier" value="S'incrire" className="btn btn-primary"/>
                </div></center>
            </form>
        </div>
    )
  }
}