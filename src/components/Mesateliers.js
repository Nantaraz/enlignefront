
import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'



export default class Mesateliers extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            profil: [],
         };

    }


    componentDidMount() {
        axios.get('https://aese.herokuapp.com'+this.props.location.pathname)
            .then(response => {
                this.setState({ profil: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })

    }

    liste() {
        return <div>

<div>
            <div class="row">

                {
                    (this.state.profil.length > 0) ? (this.state.profil.map((obj) => {
                        return (
                            <div class="col-md-4 carde">
                                <div class="card">
                                    <div class="card-body">

                                        <center><h4 class="card-title" id="titre">{obj.Titre}</h4></center>
                                        <img width="98%" height="90%" src={'https://aese.herokuapp.com/user/' + obj.photo_profil} alt="pdp" />
                                        <p class="card-text" id='milieu'><li>Déscription: {obj.Description}</li></p>
                                        <p class="card-text" id='milieu'><li>Date: {obj.Date}</li></p>
                                        <p class="card-text" id='milieu'><li>Horaire du Debut: {obj.HoraireDebut}</li></p>
                                        <p class="card-text" id='milieu'><li>Durée: {obj.Duree}</li></p>
                                        <p class="card-text" id='milieu'><li>Place dispo: {obj.NombrePlacesDispo}</li></p>
                                        <p class="card-text" id='milieu'><li>Place res: {obj.NombrePlacesRes}</li></p>
                                        <p class="card-text" id='milieu' onClick={()=>{
                                            console.log(obj._id);
                                            
                                        }}><li>Prix: {obj.Prix} Ar</li></p>
                                        <div className="row">
                                            <div className="col-md-6">
                                            <Link to={'/putAtelier/'+obj._id}><button className="btn bg-secondary" id="edit">Edit</button></Link>
                                            </div>
                                            <div className="col-md-6">
                                            <div>
                                            {obj.visibilite===true ?(<button className="btn bg-success" id="activer" onClick={(e)=>{
                                                e.preventDefault()
                                                axios.get(" https://aese.herokuapp.com/ateliermasquer/"+obj._id).then(res=>{
                                                    axios.get('https://aese.herokuapp.com/profil/'+localStorage.getItem('id')).then(res=>{
                                                console.log(res.data)
                                                this.setState({profil:res.data})
                                                })
                                                    console.log(res.data)})
                                            
                                                
                                                }}>Desactiver</button>):(<button className="btn bg-danger" id="desactiver" onClick={(e)=>{
                                                
                                                    console.log(obj._id)
                                                   axios.get("https://aese.herokuapp.com/atelierafficher/"+obj._id).then(res=>{
                                                        axios.get('https://aese.herokuapp.com/profil/'+ localStorage.getItem('id')).then(res=>{
                                                console.log(res.data)
                                                this.setState({profil:res.data})
                                                    })
                                                    console.log(res.data)})
                                                
                                                    }}>Activer</button>)}
                                                    </div>
                                            </div> 
                                        </div>
                                       
                                                  
                                                             
                                    </div>
                                </div>
                            </div>)
                    })) : ('')
                }
            </div>
        </div>
            

        </div>
    }
    render() {
        return (
            <div>
                {this.liste()}
            </div>
        );
    }
}