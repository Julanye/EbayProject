import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../auth/authentification-service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.page.html',
  styleUrls: ['./connexion.page.scss'],
})
export class ConnexionPage implements OnInit {
  validationsForm: FormGroup;
  errorMessage: string;

  validationMessages = {
    mail: [
      {type: 'required', message: 'Adresse email requise'},
      {type: 'pattern', message: 'Merci de saisir un adresse mail valide.'}
    ],
    mdp: [
      {type: 'required', message: 'Mot de passe requis'},
      {type: 'minlength', message: 'Le mot de passe doit contenir au moins 5 caractères.'}
    ]
  };

  constructor(
    public authService: AuthenticationService,
    public router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.validationsForm = this.formBuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.minLength(5),
        Validators.required
      ]))
    });
  }

  logIn(email, password) {
    this.authService.signIn(email.value, password.value)
      .then((res) => {
        if(this.authService.isEmailVerified) {
          this.router.navigate(['encheres']);
        } else {
          window.alert('Email is not verified');
          return false;
        }
      }).catch((error) => {
      window.alert(error.message);
    });
  }

}
