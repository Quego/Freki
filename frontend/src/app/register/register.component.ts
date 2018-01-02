import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AlertService, UserService } from '../_services/index';

/**
 * The register component has a single register() method that creates a new user with the
 * user service when the register from is submitted?
 */
@Component({
  selector: 'freki-register',
  // The register component template contains a simple registration form with fields for first
  //  name, last name, username and password. It displays validation messages for invalid
  // fields when the submit button is clicked. On submit the register() method is called if the
  // form is valid.
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  model: any = {};
  loading = false;

  constructor(
    private router: Router,
    private userService: UserService,
    private alertService: AlertService) { }

  register() {
    this.loading = true;
    this.userService.create(this.model)
      .subscribe(
      date => {
        this.alertService.success('Registration successful', true);
        this.router.navigate(['/login']);
      },
      error => {
        this.alertService.error(error);
        this.loading = false;
      });
  }

}
