import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../auth/authentification-service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.page.html',
  styleUrls: ['./connexion.page.scss'],
})
export class ConnexionPage implements OnInit {

  constructor(public authService: AuthenticationService,
              public router: Router) { }

  ngOnInit() {
  }

  logIn(email, password) {
    this.authService.signIn(email.value, password.value)
      .then((res) => {
        if(this.authService.isEmailVerified) {
          this.router.navigate(['dashboard']);
        } else {
          window.alert('Email is not verified')
          return false;
        }
      }).catch((error) => {
      window.alert(error.message)
    })
  }

}
