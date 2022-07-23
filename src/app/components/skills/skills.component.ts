import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { habilidades } from 'src/app/model/habilidades.model';
import { HabilidadService } from 'src/app/service/habilidad.service';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  habilidadList: habilidades[] = [];
  habilidadesForm: FormGroup;
  userLogin?: Number = 0;
  constructor(
    public habilidadService: HabilidadService,
    public usuarioService: UsuarioService,
    private formBuilder: FormBuilder
  ) {
    this.habilidadesForm = this.formBuilder.group({
      id: [''],
      descripcion: ['', [Validators.required]],
      persona: [''],
    });
  }

  ngOnInit(): void {
    this.usuarioService.obtenerUsuario().subscribe((data) => {
      this.userLogin = data.login;
    });

    this.loadData();
  }

  private loadData() {
    this.habilidadService.obtenerHabilidad().subscribe((data) => {
      this.habilidadList = Object.values(data);
    });
  }

  private clearForm() {
    this.habilidadesForm.setValue({
      id: '',
      descripcion: '',
      persona: 1,
    });
  }

  private loadForm(habilidad: habilidades) {
    this.habilidadesForm.setValue({
      id: habilidad.id,
      descripcion: habilidad.descripcion,
      persona: habilidad.persona,
    });
  }

  onSubmit() {
    if (this.habilidadesForm.valid) {
      let habilidad: habilidades = this.habilidadesForm.value;
      if (this.habilidadesForm.get('id')?.value == '') {
        this.habilidadService
          .guardarHabilidad(habilidad)
          .subscribe((newHabilidad: habilidades) => {
            this.habilidadList.push(newHabilidad);
          });
        window.location.reload();
      } else {
        this.habilidadService.modificarHabilidad(habilidad).subscribe(() => {
          this.loadData();
        });
        window.location.reload();
      }
    } else {
      console.log('Formulario Invalido');
    }
  }

  onNewHabilidad() {
    this.clearForm();
  }

  onDeleteHabilidad(index: number) {
    let habilidad: habilidades = this.habilidadList[index];
    if (confirm('¿Está seguro que desea borrar?')) {
      this.habilidadService.eliminarHabilidad(habilidad.id).subscribe(() => {
        this.loadData();
      });

      window.location.reload();
    }
  }

  onEditHabilidad(index: number) {
    let habilidad: habilidades = this.habilidadList[index];
    this.loadForm(habilidad);
  }
}
