import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../auth/authentification-service';


@Component({
  selector: 'app-verification-email',
  templateUrl: './verification-email.page.html',
  styleUrls: ['./verification-email.page.scss'],
})
export class VerificationEmailPage implements OnInit {

  constructor(
    public authService: AuthenticationService
  ) { }

  ngOnInit() {}

}
