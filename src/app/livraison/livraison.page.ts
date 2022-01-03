import {Component, OnInit} from '@angular/core';
import {FirebaseService} from '../entites/firebase.service';
import {ActivatedRoute, Router} from '@angular/router';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-livraison',
  templateUrl: './livraison.page.html',
  styleUrls: ['./livraison.page.scss'],
})
export class LivraisonPage implements OnInit {
  idEnchere: string;
  nomBien: string;
  description: string;
  prixEnchere: number;
  lieu: string;
  livraisonExiste: boolean;
  lieuLivraison: string;
  mailAcheteur: string;
  date: Date;
  dateLivraison: string;

  constructor(private firebaseService: FirebaseService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              public datepipe: DatePipe) {

  }

  ngOnInit() {
    const data = this.activatedRoute.snapshot.params.id;
    this.firebaseService.getEnchere(data).then(value => {
      this.idEnchere = data;
      this.nomBien = value.nomBien;
      this.description = value.description;
      this.prixEnchere = value.prix;
    });
    this.firebaseService.getLivraison(data).then(value => {
      //S'il y a déjà une livraison prévue pour cette enchère
      if (value !== null) {
        //Le vendeur ne pourra plus modifier la date et le lieu qui seront affichés
        this.livraisonExiste = true;
        this.dateLivraison = this.datepipe.transform(value.date, 'yyyy-MM-dd');
        this.lieuLivraison = value.lieu;
      } else {
        //Sinon le vendeur pourra choisir une date et un lieu de livraison
        this.livraisonExiste = false;
      }
    });
  }

  /**
   * Récupère le mail de l'acheteur et créer la livraison
   *
   * @param lieu lieu de la livraison entré par le vendeur
   * @param date date de la livraison entrée par le vendeur
   * @param id l'id de l'enchère
   */
  async gererLivraison(lieu, date: Date, id) {
    await this.firebaseService.getEncherisseur(id).then(value => {
      this.mailAcheteur = value.mailEnch;
    });
    this.firebaseService.updateLivraison(lieu, date, id, this.mailAcheteur);
    this.router.navigate(['/mes-encheres']);
  }
}
