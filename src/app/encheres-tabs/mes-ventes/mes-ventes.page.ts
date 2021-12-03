import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../entites/firebase.service';

@Component({
  selector: 'app-mes-ventes',
  templateUrl: './mes-ventes.page.html',
  styleUrls: ['./mes-ventes.page.scss'],
})
export class MesVentesPage implements OnInit {
  public myencheresList: Array<{id: string; nomBien: string; description: string; prix: string}> = [];
  email: string;

  constructor(private firebaseService: FirebaseService) { }

  ngOnInit() {
    this.firebaseService.getMyEncheresList().then(encheres =>{
      for(const key of Object.keys(encheres)){
        const enchere = encheres[key];
        this.myencheresList.push({
          id: key,
          nomBien: enchere.nomBien,
          description: enchere.description,
          prix: enchere.prix
        });
      }
    });
  }

  gererLivraison(liv, idEnchere){
    this.firebaseService.getEncherisseur(idEnchere).then(function(infos) {
      this.email = infos.mail;
    });
    this.firebaseService.createLivraison(liv, idEnchere, this.email);
  }

}
