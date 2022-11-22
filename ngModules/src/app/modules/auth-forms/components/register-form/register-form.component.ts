import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/modules/pages/services/auth.service';


@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  registerForm: FormGroup | undefined;

  constructor(private _formBuilder: FormBuilder, private _authService: AuthService) { }

  ngOnInit(): void {
    this.registerForm = this._formBuilder.group({
      email: '',
      password: '',
    });
  }

  submitForm = () => {
    this._authService();
  }

}
