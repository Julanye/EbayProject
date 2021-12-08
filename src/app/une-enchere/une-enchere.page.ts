import {Component, OnInit} from '@angular/core';
import {FirebaseService} from '../entites/firebase.service';
import {ActivatedRoute} from '@angular/router';

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
}
