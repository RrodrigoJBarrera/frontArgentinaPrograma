import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { Usuario } from 'src/app/model/usuario.model';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PersonaService } from 'src/app/service/persona.service';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css'],
})
export class PresentationComponent implements OnInit {
  p: persona = new persona('', '', '', '', '', '', '', '', '', '');
  // u: Usuario = new Usuario('', '');
  userLogin?: Number = 0;
  personaForm: FormGroup;
  constructor(
    public personaService: PersonaService,
    public usuarioService: UsuarioService,
    private formBuilder: FormBuilder
  ) {
    this.personaForm = this.formBuilder.group({
      id: [''],
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      direccion: ['', [Validators.required]],
      email: ['', [Validators.required]],
      telefono: ['', [Validators.required]],
      profesion: ['', [Validators.required]],
      sobremi: ['', [Validators.required]],
      github: ['', [Validators.required]],
      linkedin: ['', [Validators.required]],
      edad: ['', [Validators.required]],
      linkcv: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.usuarioService.obtenerUsuario().subscribe((data) => {
      this.userLogin = data.login;
    });

    this.loadData();
  }

  private loadData() {
    this.personaService.obtenerPersona().subscribe((data) => {
      this.p = data;
    });
  }

  // private clearForm() {
  //   this.personaForm.setValue({
  //     id: 1,
  //     nombre: '',
  //     apellido: '',
  //     direccion: '',
  //     email: '',
  //     telefono: '',
  //     profesion: '',
  //     sobremi: '',
  //     github: '',
  //     linkedin: '',
  //     edad: '',
  //   });
  // }

  private loadForm(p: persona) {
    this.personaForm.setValue({
      id: p.id,
      nombre: p.nombre,
      apellido: p.apellido,
      direccion: p.direccion,
      email: p.email,
      telefono: p.telefono,
      profesion: p.profesion,
      sobremi: p.sobremi,
      github: p.github,
      linkedin: p.linkedin,
      edad: p.edad,
      linkcv: p.linkcv,
    });
  }
  onSubmit() {
    if (this.personaForm.valid) {
      let p: persona = this.personaForm.value;
      this.personaService.modificarPersona(p).subscribe(() => {
        this.loadData();
      });
      window.location.reload();
    } else {
      console.log('Formulario Invalido');
    }
  }
  onEditPersona() {
    let p: persona = this.p;
    this.loadForm(p);
  }
}
