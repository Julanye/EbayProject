import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-encheres',
  templateUrl: './encheres.page.html',
  styleUrls: ['./encheres.page.scss'],
})
export class EncheresPage implements OnInit {
  timeLeft = 300;
  interval;
  encheresList=[
    {
      enchereNom:'Ballon signé Ronaldo',
      enchereDescription:'Ballon signé par le plus grand joueur de foot de tous les temps, Cristiano Ronaldo',
      encherePrix:'5 000€'
    },
    {
      enchereNom:'Maillot KCorp signé Rekkles',
      enchereDescription:'Maillot signé par le plus grand joueur de LoL EUW de tous les temps, Martin Rekkles Larsson',
      encherePrix:'50 000€'
    },
    {
      enchereNom:'Maillot T1 signé Faker',
      enchereDescription:'Ballon signé par le plus grand joueur de LoL de tous les temps, Lee Faker Sang-Hyeok',
      encherePrix:'1 000 000€'
    }
  ];

  constructor() { }

  ngOnInit() {
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

}
