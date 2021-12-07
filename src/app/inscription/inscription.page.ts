import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthenticationService} from '../auth/authentification-service';
import {FirebaseService} from '../entites/firebase.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.page.html',
  styleUrls: ['./inscription.page.scss'],
})
export class InscriptionPage implements OnInit {


  validationsForm: FormGroup;
  validationMessages = {
    mail: [
      {type: 'required', message: 'Merci de renseigner une adresse mail.'},
      {type: 'pattern', message: 'Merci d\'entrer une adresse valide.'}
    ],
    password: [
      {type: 'required', message: 'Merci de renseigner un mot de passe.'},
      {type: 'minlength', message: 'Le mot de passe doit faire au moins 5 caractères.'}
    ]
  };

  constructor(
    private formBuilder: FormBuilder,
    public authService: AuthenticationService,
    public router: Router,
    public firebaseService: FirebaseService
  ) {

  }

  ngOnInit() {
    this.validationsForm = this.formBuilder.group({
      mail: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      mdp: new FormControl('', Validators.compose([
        Validators.minLength(5),
        Validators.required
      ])),
      nom: new FormControl('', Validators.compose([
        Validators.required
      ])),
      prenom: new FormControl('', Validators.compose([
        Validators.required
      ])),
      adresse: new FormControl('', Validators.compose([
        Validators.required
      ]))
    });
  }

  signUp(value) {
    this.authService.registerUser(value)
      .then(() => {
        this.authService.sendVerificationMail()
          .then(r => {
            this.validationsForm.reset();
            this.router.navigate(['/verification-email']);
          });
      }).catch((error) => {
      window.alert(error.message);
    });
  }
}
