import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mes-ventes',
  templateUrl: './mes-ventes.page.html',
  styleUrls: ['./mes-ventes.page.scss'],
})
export class MesVentesPage implements OnInit {
  encheresList=[
    {
      enchereNom:'Maillot KCorp signé Rekkles',
      enchereDescription:'Maillot signé par le plus grand joueur de LoL EUW de tous les temps, Martin Rekkles Larsson.',
      encherePrix:'1 000 000€'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
