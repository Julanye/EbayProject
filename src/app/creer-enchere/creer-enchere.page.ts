import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { FirebaseService } from './../entites/firebase.service';

@Component({
  selector: 'app-creer-enchere',
  templateUrl: './creer-enchere.page.html',
  styleUrls: ['./creer-enchere.page.scss'],
})

export class CreerEncherePage implements OnInit {
  creerEnchereForm: FormGroup;

  constructor(
    private fireService: FirebaseService,
    private router: Router,
    public fb: FormBuilder
  ) { }

  ngOnInit() {
    this.creerEnchereForm = this.fb.group({
      nomBien: [''],
      description: [''],
      prix: ['']
    });
  }
  formSubmit() {
    if (!this.creerEnchereForm.valid) {
      return false;
    } else {
      this.fireService.createEncheres(this.creerEnchereForm.value).then(res => {
        console.log(res);
        this.creerEnchereForm.reset();
        this.router.navigate(['/home']);
      })
        .catch(error => console.log(error));
      console.log(this.fireService.getEncheresList());
    }
  }
}
