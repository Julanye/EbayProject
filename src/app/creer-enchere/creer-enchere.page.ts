import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { EncheresService } from './../entites/encheres/encheres.service';

@Component({
  selector: 'app-creer-enchere',
  templateUrl: './creer-enchere.page.html',
  styleUrls: ['./creer-enchere.page.scss'],
})

export class CreerEncherePage implements OnInit {
  creerEnchereForm: FormGroup;

  constructor(
    private enchService: EncheresService,
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
      this.enchService.createEncheres(this.creerEnchereForm.value).then(res => {
        console.log(res);
        this.creerEnchereForm.reset();
        this.router.navigate(['/home']);
      })
        .catch(error => console.log(error));
      console.log(this.enchService.getEncheresList());
    }
  }
}
