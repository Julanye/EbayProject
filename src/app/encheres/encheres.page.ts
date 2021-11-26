import {Component, OnInit} from '@angular/core';
import {FirebaseService} from '../entites/firebase.service';

@Component({
  selector: 'app-encheres',
  templateUrl: './encheres.page.html',
  styleUrls: ['./encheres.page.scss'],
})
export class EncheresPage implements OnInit {
  public encheresList: Array<{ id: string; nomBien: string; description: string; prix: string }> = [];
  timeLeft = 300;
  interval;
  constructor(private firebaseService: FirebaseService) {
  }

  ngOnInit() {
    this.initEncheresList(this.encheresList);
  }

  startTimer() {
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.timeLeft = 300;
      }
    },1000);
  }

  pauseTimer() {
    clearInterval(this.interval);
  }

  transform(value: number): string {
    const minutes: number = Math.floor(value / 60);
    return minutes + ':' + (value - minutes * 60);
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
