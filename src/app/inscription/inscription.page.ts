import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

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
    private formBuilder: FormBuilder
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
}
