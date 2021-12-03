import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../entites/firebase.service';

@Component({
  selector: 'app-mes-achats',
  templateUrl: './mes-achats.page.html',
  styleUrls: ['./mes-achats.page.scss'],
})
export class MesAchatsPage implements OnInit {
  public myAchatsList: Array<{id: string; nomBien: string; description: string; prix: string}> = [];

  constructor(private firebaseService: FirebaseService) { }

  ngOnInit() {
    this.myAchatsList = this.firebaseService.getMyAchatsList();
  }

}
