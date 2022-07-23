import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/model/usuario.model';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  usuarioForm: FormGroup;
  u: Usuario = new Usuario('', '', 0);
  userLogin?: Number = 0;
  constructor(
    public usuarioService: UsuarioService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.usuarioForm = this.formBuilder.group({
      id: [''],
      usuario: [''],
      password: [''],
      login: [''],
    });
  }

  ngOnInit(): void {
    this.loadData();
  }

  private loadData() {
    this.usuarioService.obtenerUsuario().subscribe((data) => {
      this.u = data;
    });
  }

  onSubmit() {
    let user: Usuario = this.u;
    if (
      this.usuarioForm.get('usuario')?.value == this.u.usuario &&
      this.usuarioForm.get('password')?.value == this.u.password
    ) {
      console.log('Usuarios math');
      user.login = 1;
      this.usuarioService.guardarUsuario(user).subscribe(() => {
        this.loadData();
      });
      this.router.navigate(['/porfolio']);
    } else {
      console.log('Usuarios no math');
    }
  }
}
