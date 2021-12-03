import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../entites/firebase.service';

@Component({
  selector: 'app-mes-ventes',
  templateUrl: './mes-ventes.page.html',
  styleUrls: ['./mes-ventes.page.scss'],
})
export class MesVentesPage implements OnInit {
  email: string;

  constructor(private firebaseService: FirebaseService) { }

  ngOnInit() {
  }

  gererLivraison(liv, idEnchere){
    this.firebaseService.getEncherisseur(idEnchere).then(function(infos) {
      this.email = infos.mail;
    });
    this.firebaseService.createLivraison(liv, idEnchere, this.email);
  }

}
