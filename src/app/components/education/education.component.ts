import { Component, OnInit } from '@angular/core';
import { educacion } from 'src/app/model/educacion.model'
import { EducacionService } from 'src/app/service/educacion.service'

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  educacionList : educacion[] = []

  constructor(public educacionSerivce: EducacionService) { }

  ngOnInit(): void {
    this.educacionSerivce.getEducaction().subscribe(data => {
      this.educacionList = Object.values(data)
    })
  }

}
