import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Slider from './Slider'

class Home extends React.Component {


    constructor(props) {
        super(props);
        this.state = { profil: [] };

    }
    componentDidMount() {
        axios.get('https://aese.herokuapp.com/profil')
            .then(response => {
               
                console.log('i am a response', response)
                this.setState({ profil: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })

    }

    liste() {
        return <div>
            <Slider />
             
            <div  class="row">

                {
                   (this.state.profil.length > 0) ? (this.state.profil.filter((params) => params.visibilite).map((obj) => {
                        return (
                            <div class="col-md-4 carde">
                                <div class="card" onClick={() => {localStorage.setItem('ti',obj._id)
                                 console.log(obj._id)}}>
                                    
                                    
                                    <div class="card-body">

                                        <center><h4 class="card-title" id="titre">{obj.Titre}</h4></center>
                                        <div className="container"><img width="98%" height="90%" src={'https://aese.herokuapp.com/user/' + obj.photo_profil} alt="pdp" /></div>
                                        
                                        <p class="card-text" id='milieu'>Déscription: {obj.Description}</p>
                                        <p class="card-text" id='milieu'>Date: {obj.Date}</p>
                                        <p class="card-text" id='milieu'>Horaire du Debut: {obj.HoraireDebut}</p>
                                        <p class="card-text" id='milieu'>Durée: {obj.Duree}</p>
                                        <p class="card-text" id='milieu'>Place dispo: {obj.NombrePlacesDispo}</p>
                                        <p class="card-text" id='milieu'>Place res: {obj.NombrePlacesRes}</p>
                                        <p class="card-text" id='milieu'>Prix: {obj.Prix} Ar</p>
                                        <Link to="inscrire"><center><button className="btn btn-success" id="butatelier">S'inscrire</button></center></Link>
                                    </div>
                                </div>
                            </div>)
                    })) : ('')
                }
            </div>
        </div>
    }
    render() {
        return (
            <div >
                {this.liste()}
            </div>
        );
    }
}

export default Home;