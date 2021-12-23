import {Component, OnInit} from '@angular/core';
import {FirebaseService} from '../entites/firebase.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AlertController} from '@ionic/angular';

@Component({
  selector: 'app-une-enchere',
  templateUrl: './une-enchere.page.html',
  styleUrls: ['./une-enchere.page.scss'],
})
export class UneEncherePage implements OnInit {
  id: string;
  nomBien: string;
  description: string;
  prixEnchere: number;
  price: number;

  constructor(private firebaseService: FirebaseService,
              private activatedRoute: ActivatedRoute,
              private alertCtrl: AlertController,
              private router: Router) {

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

  /**
   * Créer la pop-up d'alerte si le prix entré est trop bas ou égal au prix actuel d'une enchère
   */
  async showAlert(){
    await this.alertCtrl.create({
      header:'Erreur',
      subHeader:'Prix trop bas',
      message:'Entrez un prix plus élevé que le précédent',
      buttons:[{
        text:'Ok'
      }]
    }).then(res => res.present());
  }

  /**
   * Met à jour le prix d'une enchère et les infos de l'enchérisseur et retourne sur la page Autour de moi
   * Si le prix entré par le user est plus bas ou égal au prix de l'enchère
   * alors un message d'alerte est affiché
   */
  encherir() {
    if(this.price <= this.prixEnchere){
      this.showAlert();
    }
    else {
      this.firebaseService.updateEnchere(this.price, this.id);
      this.router.navigate(['/encheres']);
    }
  }
}
