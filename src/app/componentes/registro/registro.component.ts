import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Usuarios } from 'src/app/models/Usuarios';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
})
export class registro implements OnInit {
  formRegistro: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private UsuariosService: UsuariosService,
    private toastr: ToastrService
  ) {
    this.formRegistro = this.formBuilder.group({
      ID_Usuario: 0,
      Nombres: [
        '',
        [
          Validators.required,
          Validators.pattern(
            "^([A-Za-zÑñÁáÉéÍíÓóÚú]+['-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+)(s+([A-Za-zÑñÁáÉéÍíÓóÚú]+['-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+))*$"
          ),
          Validators.minLength(3),
        ],
      ],
      Apellidos: [
        '',
        [
          Validators.required,
          Validators.pattern(
            "^([A-Za-zÑñÁáÉéÍíÓóÚú]+['-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+)(s+([A-Za-zÑñÁáÉéÍíÓóÚú]+['-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+))*$"
          ),
          Validators.minLength(3),
        ],
      ],
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
      ConfirmarContrasena: [
        '',
        [Validators.required, Validators.maxLength(8), Validators.minLength(8)],
      ],
    });
  }

  ngOnInit(): void {}

  registrarUsuario() {
    const Usuarios: Usuarios = {
      Nombres: this.formRegistro.get('Nombres')?.value,
      Apellidos: this.formRegistro.get('Apellidos')?.value,
      Correo: this.formRegistro.get('Correo')?.value,
      Contrasena: this.formRegistro.get('Contrasena')?.value,
    };
    this.UsuariosService.registrarUsuario(Usuarios).subscribe((data) => {
      this.toastr.success(
        '¡Bienvenido a la Familia Hopen!',
        'Haz sido registrado exitosamente'
      );
      this.formRegistro.reset();
    });
  }
}
