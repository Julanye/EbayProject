import {Component, OnInit} from '@angular/core';
import {FirebaseService} from '../entites/firebase.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-livraison',
  templateUrl: './livraison.page.html',
  styleUrls: ['./livraison.page.scss'],
})
export class LivraisonPage implements OnInit {
  id: string;
  nomBien: string;
  description: string;
  prixEnchere: number;
  lieu: string;
  mailAcheteur: string;
  date: Date;

  constructor(private firebaseService: FirebaseService,
              private activatedRoute: ActivatedRoute) {

  }

  ngOnInit() {
    const data = this.activatedRoute.snapshot.params.id;
    this.firebaseService.getEnchere(data).then(value => {
      this.id = data;
      this.nomBien = value.nomBien;
      this.description = value.description;
      this.prixEnchere = value.prix;
    });
  }

  gererLivraison(lieu, date: Date, id) {
    console.log(id);
    this.firebaseService.getEncherisseur(id).then(value => {
      this.mailAcheteur = value.mail;
    });
    this.firebaseService.createLivraison(lieu, date, id, this.mailAcheteur);
  }
}
