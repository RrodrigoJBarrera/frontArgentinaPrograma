import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PresentationComponent } from './components/presentation/presentation.component';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { EducationComponent } from './components/education/education.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ExperienceComponent } from './components/experience/experience.component';

import { RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PresentationComponent,
    AboutmeComponent,
    EducationComponent,
    SkillsComponent,
    ExperienceComponent,
    LoginComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'porfolio', component: MainComponent},
      {path: 'login', component: LoginComponent},
      {path: '', redirectTo:'/porfolio', pathMatch: 'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
