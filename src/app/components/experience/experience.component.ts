import { Component, OnInit } from '@angular/core';
import { experiencia } from 'src/app/model/experiencia.model';
import { ExperienciaService } from 'src/app/service/experiencia.service';
import { UsuarioService } from 'src/app/service/usuario.service';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent implements OnInit {
  experienciaList: experiencia[] = [];
  userLogin?: Number = 0;
  experienciaForm: FormGroup;
  constructor(
    public experienciaService: ExperienciaService,
    public usuarioService: UsuarioService,
    private formBuilder: FormBuilder
  ) {
    this.experienciaForm = this.formBuilder.group({
      id: [''],
      tipo_trabajo: ['', [Validators.required]],
      lugar: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
      puesto: ['', [Validators.required]],
      anio_inicio: ['', [Validators.required]],
      anio_finalizacion: ['', [Validators.required]],
      persona: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.usuarioService.obtenerUsuario().subscribe((data) => {
      this.userLogin = data.login;
    });

    this.loadData();
  }

  private loadData() {
    this.experienciaService.obtenerExperiencia().subscribe((data) => {
      this.experienciaList = Object.values(data);
    });
  }

  private clearForm() {
    this.experienciaForm.setValue({
      id: '',
      tipo_trabajo: '',
      lugar: '',
      descripcion: '',
      puesto: '',
      anio_inicio: '',
      anio_finalizacion: '',
      persona: 1,
    });
  }

  private loadForm(exp: experiencia) {
    this.experienciaForm.setValue({
      id: exp.id,
      tipo_trabajo: exp.tipo_trabajo,
      lugar: exp.lugar,
      descripcion: exp.descripcion,
      puesto: exp.puesto,
      anio_inicio: exp.anio_inicio,
      anio_finalizacion: exp.anio_finalizacion,
      persona: exp.persona,
    });
  }

  onSubmit() {
    if (this.experienciaForm.valid) {
      let exp: experiencia = this.experienciaForm.value;
      if (this.experienciaForm.get('id')?.value == '') {
        this.experienciaService
          .guardarExperiencia(exp)
          .subscribe((newExp: experiencia) => {
            this.experienciaList.push(newExp);
          });
        window.location.reload();
      } else {
        this.experienciaService.modificarExperiencia(exp).subscribe(() => {
          this.loadData();
        });
        window.location.reload();
      }
    } else {
      console.log('Formulario invalido');
    }
  }

  onNewExperiencia() {
    this.clearForm();
  }

  onDeleteExperiencia(index: number) {
    let exp: experiencia = this.experienciaList[index];
    if (confirm('¿Está seguro que desea borrar?')) {
      this.experienciaService.eliminarExperiencia(exp.id).subscribe(() => {
        this.loadData();
      });
      window.location.reload();
    }
  }

  onEditExperiencia(index: number) {
    let exp: experiencia = this.experienciaList[index];
    this.loadForm(exp);
  }
}
