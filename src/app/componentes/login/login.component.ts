import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class login implements OnInit {
  Login: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.Login = this.formBuilder.group({
      Correo: [
        '',
        [
          Validators.required,
          Validators.pattern(
            "^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$"
          ),
        ],
      ],
      Contrasena: [
        '',
        [Validators.required, Validators.maxLength(8), Validators.minLength(8)],
      ],
    });
  }

  ngOnInit(): void {}

  // private ValidarUsuario(): FormGroup {
  //   return this.formBuilder.group({});
  // }

  // public submitFormulario();
}
