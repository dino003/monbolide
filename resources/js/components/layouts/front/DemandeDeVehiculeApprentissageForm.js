import '../../../bootstrap';


import React, { Component } from 'react'
import ReactDOM from 'react-dom';

import InputMask from 'react-input-mask';
import {ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const date = new Date();

 const today = date.getFullYear().toString() + '-' + (date.getMonth() + 1).toString().padStart(2, 0) + 
    '-' + date.getDate().toString().padStart(2, 0);


export default class DemandeDeVehiculeApprentissageForm extends Component {

        constructor(props) {
            super(props);
            this.state = {
                isFormSubmitted: false,
                showMessage: false
            }
            this.formRef = null;
        }

        setField = (event) => {
              const target = event.target;
              const value = target.type === 'checkbox' ? target.checked : target.value;
              const name = target.name;
          
              this.setState({
                [name]: value
              });
            }

            isValideTime(time){
                return time !== '' 
                && time.length == 5
                && time[0] <= 2
                 && time[3] <= 5 
                 
            }

            verificationFormulaire () {
                if(this.date_proposee.value == ''){
                    return "La date de début de réservation n'a pas été définie!"
                } if(this.date_fin_reservation.value == '' ){
                    return "La date de fin de réservation n'a pas été définie!"
                }else if(!this.isValideTime(this.heure_debut_reservation.value) ){
                    return "L'heure de début de réservation n'a pas été définie ! \n Veuillez entrer une heure valide \n Exemple 14:30"
                }else if(!this.isValideTime(this.heure_fin_reservation.value)){
                    return "L'heure de fin de réservation n'a pas été définie ! \n Veuillez entrer une heure valide \n Exemple 14:30"
                }else if(this.coord_numero_tel.value == ''){
                  return "Vous n'avez pas renseigné le numero de téléphone !"
                } else{
                    return null
                }
            }

        saveDemande = (e) => {
            e.preventDefault()
            const formData = {
                date_proposee: this.date_proposee.value,
                date_fin_reservation: this.date_fin_reservation.value,

                heure_debut_reservation: this.heure_debut_reservation.value,
                heure_fin_reservation: this.heure_fin_reservation.value,
                type_utilisation: this.type_utilisation.value,
                type_conduite_chauffeur: this.type_conduite_chauffeur.value,
                lieu_utilisation: this.lieu_utilisation.value,
                coord_numero_tel: this.coord_numero_tel.value
            }
            if(this.verificationFormulaire() == null){
                this.setState({isFormSubmitted: true})

                axios.post('/ajouter_demande_pour_apprentissage', formData)
                .then(response => {
                    if(response.status == 201){
                        this.setState({isFormSubmitted: false} )
                        toast.success('Votre demande à bien été enregistrée', {
                            position: toast.POSITION.BOTTOM_CENTER
                          });
                        this.formRef.reset()
                        
                    } 
                }).catch(error => console.log(error))

            }else{
                //console.log(this.verificationFormulaire())
                toast.error(this.verificationFormulaire(), {
                  position: toast.POSITION.BOTTOM_CENTER
                });
            }

            // console.log(this.heure_debut_reservation.value[2])

        }


        

    render() {
        return (
            <div className="book-a-car">
                <form onSubmit={this.saveDemande} ref={(ref) => this.formRef = ref}>


                    <div className="pickup-location book-item">
                        <h4>DATE DE RESERVATION:</h4>
                        <input type="date"
                        name="date_proposee"
                        defaultValue={today}
                        ref={date_proposee => this.date_proposee = date_proposee}
                        min={today}  />

                    </div>

                    <div className="pickup-location book-item">
                        <h4>HEURE DE DEBUT RESERVATION:</h4>
                        <InputMask mask="99:99" maskChar={null} 
                             inputRef={heure_debut_reservation => this.heure_debut_reservation = heure_debut_reservation}
                                 name="heure_debut_reservation"
                                />
                      

                    </div>

                    <div className="pickup-location book-item">
                        <h4>DATE DE FIN  DE RESERVATION:</h4>
                        <input type="date"
                        defaultValue={today}
                        name="date_fin_reservation"
                        ref={date_fin_reservation => this.date_fin_reservation = date_fin_reservation}
                        min={today}  />

                    </div>

                   

                    <div className="pickup-location book-item">
                        <h4>HEURE DE FIN RESERVATION:</h4>
                        <InputMask mask="99:99" maskChar={null} 
                             inputRef={heure_fin_reservation => this.heure_fin_reservation = heure_fin_reservation}
                                 name="heure_fin_reservation"
                                />

                    </div>


                    <div className="pickup-location book-item">
                        <h4>USAGE:</h4>
                        <select className="custom-select" 
                        name="type_utilisation"
                        ref={type_utilisation => this.type_utilisation = type_utilisation}

                        >
                          <option value="Faire des courses">Faire des courses</option>
                          <option value="Apprendre à rouler">Apprendre à rouler</option>
                        
                        </select>
                    </div>

                    <div className="pickup-location book-item">
                        <h4>LIEU D'USAGE:</h4>
                        <select className="custom-select"
                        name="lieu_utilisation"
                        ref={lieu_utilisation => this.lieu_utilisation = lieu_utilisation}

                        >
                          <option value="Cocody">Cocody</option>
                          <option value="Yopougon">Yopougon</option>
                          <option value="Bingerville">Bingerville</option>
                          <option value="Marcory">Marcory</option>
                          <option value="Treichville">Treichville</option>
                          <option value="Koumassi">Koumassi</option>
                          <option value="Adjamé">Adjamé</option>

                        </select>
                    </div>

                    

                    <div className="choose-car-type book-item">
                        <h4>TYPE DE CONDUITE:</h4>
                        <select className="custom-select"
                        name="type_conduite_chauffeur"
                        ref={type_conduite_chauffeur => this.type_conduite_chauffeur = type_conduite_chauffeur}
                        >
                          <option value="Avec chauffeur">Avec chauffeur</option>
                          <option value="Sans chauffeur">Sans chauffeur</option>
                        </select>
                    </div>

                    <div className="choose-car-type book-item">
                        <h4>CONTACT TELEPHONIQUE:</h4>
                        <InputMask 
                        name="coord_numero_tel"
                        inputRef={coord_numero_tel => this.coord_numero_tel = coord_numero_tel}
                          mask="+(225) 99 99 99 99" maskChar="_" />
                    </div>
                    

                    <div className="book-button text-center">
                        {!this.state.isFormSubmitted ? <button type="submit" className="book-now-btn">Envoyer</button> : <button type="submit" disabled className="btn btn-info">Merci de patienter...</button>}
                    </div>
                </form>
                <ToastContainer autoClose={5000} />

            </div>
        )
    }
}

ReactDOM.render(<DemandeDeVehiculeApprentissageForm />, document.getElementById('form_demande_vehicule_apprentissage'));

