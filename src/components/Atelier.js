import React from 'react';

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
          photo_profil:'',
          visibilite:false
    
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
        fetch('http://aese.herokuapp.com/cuisinier/'+localStorage.getItem('id'), {
          method: 'POST',
          body: data,
        }).then((response) => {
          response.json().then((body) => {
            this.setState({ photo_profil: `http://aese.herokuapp.com/cuisinier/${body.photo_profil}`});
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
            <input type="text"
              id = "inputatelier"
              value={this.state.Description}
              onChange={this.onChange}
              placeholder="Déscription"
              name="Description" /><br></br>
            <input type="Date"
              id = "inputatelier"
              value={this.state.Date}
              onChange={this.onChange}
              placeholder="Date"
              name="Date" /><br></br>  
            <input type="text"
              id = "inputatelier"
              value={this.state.HoraireDebut}
              onChange={this.onChange}
              placeholder="Horaire Début"
              name="HoraireDebut" /><br></br>
            <input type="text"
              id = "inputatelier"
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
              <button id="butatelier">Ajouter</button>
            </center>
          </form>
</div>
          
        );
      }
    }

    
    

export default Home