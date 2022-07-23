import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/service/usuario.service';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/model/usuario.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  userLogin?: Number = 0;
  u: Usuario = new Usuario('', '', 0);
  textButton: String = '';
  constructor(public usuarioService: UsuarioService, private router: Router) {}

  ngOnInit(): void {
    this.usuarioService.obtenerUsuario().subscribe((data) => {
      this.userLogin = data.login;
    });

    this.loadData();
  }

  private loadData() {
    this.usuarioService.obtenerUsuario().subscribe((data) => {
      this.u = data;
    });
  }

  onSubmit() {
    let user: Usuario = this.u;
    if (user.login == 1) {
      user.login = 0;
      this.usuarioService.guardarUsuario(user).subscribe(() => {
        this.loadData();
      });
      window.location.reload();
    } else {
      this.router.navigate(['/login']);
    }
  }
}
