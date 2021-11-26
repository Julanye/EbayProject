import {Component, OnInit} from '@angular/core';
import {FirebaseService} from '../entites/firebase.service';

@Component({
  selector: 'app-encheres',
  templateUrl: './encheres.page.html',
  styleUrls: ['./encheres.page.scss'],
})
export class EncheresPage implements OnInit {
  public encheresList: Array<{ id: string; nomBien: string; description: string; prix: string }> = [];

  constructor(private firebaseService: FirebaseService) {
  }

  ngOnInit() {
    this.initEncheresList(this.encheresList);
  }

  initEncheresList(encheresList) {
    this.firebaseService.getEncheresList().then(encheres => { // Récupérer les lieux, regarder dans l'idUser.
      for (const key of Object.keys(encheres)) {
        const enchere = encheres[key];
        encheresList.push({
          id: key,
          nomBien: enchere.nomBien,
          description: enchere.description,
          prix: enchere.prix
        });
      }
    });
  }
}
