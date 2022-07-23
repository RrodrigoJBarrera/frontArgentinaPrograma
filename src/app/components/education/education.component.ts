import { Component, OnInit } from '@angular/core';
import { educacion } from 'src/app/model/educacion.model';
import { EducacionService } from 'src/app/service/educacion.service';
import { UsuarioService } from 'src/app/service/usuario.service';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent implements OnInit {
  educacionList: educacion[] = [];

  userLogin?: Number = 0;
  educacionForm: FormGroup;
  constructor(
    public educacionService: EducacionService,
    public usuarioService: UsuarioService,
    private formBuilder: FormBuilder
  ) {
    this.educacionForm = this.formBuilder.group({
      id: [''],
      institucion: ['', [Validators.required]],
      titulo: ['', [Validators.required]],
      anio_inicio: [''],
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
    this.educacionService.obtenerEducacion().subscribe((data) => {
      this.educacionList = Object.values(data);
    });
  }

  private clearForm() {
    this.educacionForm.setValue({
      id: '',
      institucion: '',
      titulo: '',
      anio_inicio: '',
      anio_finalizacion: '',
      persona: 1,
    });
  }

  private loadForm(edu: educacion) {
    this.educacionForm.setValue({
      id: edu.id,
      institucion: edu.institucion,
      titulo: edu.titulo,
      anio_inicio: edu.anio_inicio,
      anio_finalizacion: edu.anio_finalizacion,
      persona: edu.persona,
    });
  }

  onSubmit() {
    if (this.educacionForm.valid) {
      let edu: educacion = this.educacionForm.value;
      if (this.educacionForm.get('id')?.value == '') {
        this.educacionService
          .guardarEducacion(edu)
          .subscribe((newEducacion: educacion) => {
            this.educacionList.push(newEducacion);
          });
        window.location.reload();
      } else {
        this.educacionService.modificarEducacion(edu).subscribe(() => {
          this.loadData();
        });
        window.location.reload();
      }
    } else {
      console.log('Formulario Invalido' + this.educacionForm.errors);
    }
  }

  onNewEducacion() {
    this.clearForm();
  }

  onDeleteEducacion(index: number) {
    let edu: educacion = this.educacionList[index];
    if (confirm('¿Está seguro que desea borrar?')) {
      this.educacionService.eliminarEducacion(edu.id).subscribe(() => {
        this.loadData();
      });
      window.location.reload();
    }
  }

  onEditEducacion(index: number) {
    let edu: educacion = this.educacionList[index];
    this.loadForm(edu);
  }
}
