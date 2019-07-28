import React from 'react';
import {MDBIcon} from 'mdbreact';
import {confirmAlert} from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

class Home extends React.Component {

      constructor(props) {
        super(props);
    
        this.state = {
          Titre: '',
          Description:'',
          Date:'',
          HoraireDebut:'',
          Duree:'',
          NombrePlacesDispo:'',
          NombrePlacesRes:'',
          Prix:'',
          photo_profil:''
    
        };
        this.onChange = this.onChange.bind(this)
        this.handleUploadImage = this.handleUploadImage.bind(this);
      }
      onChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
      handleUploadImage(ev) {
        ev.preventDefault();
        const data = new FormData();
        data.append('photo_profil', this.uploadInput.files[0]);
        data.append('Titre',this.state.Titre);
        data.append('Description',this.state.Description);
        data.append('Date',this.state.Date)
        data.append('HoraireDebut',this.state.HoraireDebut);
        data.append('Duree',this.state.Duree);
        data.append('NombrePlacesDispo',this.state.NombrePlacesDispo);
        data.append('NombrePlacesRes',this.state.NombrePlacesRes)
        data.append('Prix',this.state.Prix);
        fetch('https://aese.herokuapp.com/cuisinier/'+localStorage.getItem('id'), {
          method: 'POST',
          body: data,
        }).then((response) => {
          response.json().then((body) => {
            this.setState({ photo_profil: `https://aese.herokuapp.com/cuisinier/${body.photo_profil}`});
            console.log('ity ilay body.fil',body.photo_profil);
            
          });
        }).catch(err=>{
          console.log(err);
          
        })
      }
    
      render() {
        return (<div>
         
          <form onSubmit={this.handleUploadImage}>
            <center>
              <h1 id="divatelier">Création des atéliers cuisiner</h1>
            <input type="text"
              id = "inputatelier"
              value={this.state.Titre}
              onChange={this.onChange}
              placeholder="Titre"
              name="Titre" /><br></br>
            <textarea type="text"
              id = "inputdes"
              value={this.state.Description}
              onChange={this.onChange}
              placeholder="Déscription"
              name="Description" /><br></br>
              <label>Date :</label>
            <input type="date"
              id = "inputtime"
              value={this.state.Date}
              onChange={this.onChange}
              placeholder="Date"
              name="Date" /><br></br> 
              <label>Début:</label> 
            <input type="time"
              id = "inputtime"
              value={this.state.HoraireDebut}
              onChange={this.onChange}
              placeholder="Horaire Début"
              name="HoraireDebut" /><br></br>
              <label>Durée</label>
            <input type="time"
              id = "inputtime"
              value={this.state.Duree}
              onChange={this.onChange}
              placeholder="Durée"
              name="Duree" /><br></br>
            <input type="Number"
              id = "inputatelier"
              value={this.state.NombrePlacesDispo}
              onChange={this.onChange}
              placeholder="Place Dispo"
              name="NombrePlacesDispo" /><br></br>
            <input type="Number"
              id = "inputatelier"
              value={this.state.NombrePlacesRes}
              onChange={this.onChange}
              placeholder="Place Res"
              name="NombrePlacesRes" /><br></br>       
            <input type="Number"
              id = "inputatelier"
              value={this.state.Prix}
              onChange={this.onChange}
              placeholder="Prix"
              name="Prix" /><br></br><br></br>    
              <input id="jtext" ref={(ref) => { this.uploadInput = ref; }} type="file" name="photo_profil"/><br></br> <br></br>  
              {/* <button type="submit" id="butatelier">Ajouter</button> */}
              <button className="btn btn-outline-orange" type="submit" onClick={() => {
                        confirmAlert({
                          customUI: () => {
                            return (
                              <div className='custom-ui'>
                                <h1>Mise à jour reussi! </h1>
                                <center></center><a href="/dashboard" id="okajout" className="btn btn-primary">OK</a>
                              </div>
                            );
                          }
                        });
                      }} type="submit" id="ajouter_boutton">
                        Valider <MDBIcon icon="paper-plane" className="ml-3" />
              </button>
            </center>
          </form>
</div>
          
        );
      }
    }

    
    

export default Home