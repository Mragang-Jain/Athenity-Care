import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { IndexComponent } from './components/index/index.component';
import { AboutComponent } from './components/about/about.component';
import { DevProcessComponent } from './components/dev-process/dev-process.component';
import { CareerComponent } from './components/career/career.component';
import { BlogComponent } from './components/blog/blog.component';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';
import { ContactComponent } from './components/contact/contact.component';
import { TrainingPortalComponent } from './components/training-portal/training-portal.component'
import { CoursesComponent } from './components/training-portal/courses/courses.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  { path:"", component: IndexComponent},
  { path:"about", component: AboutComponent},
  { path:"project-list", component: BlogComponent},
  // { path:"project/:id", component: BlogComponent},
  { path:"process", component: DevProcessComponent},
  { path:"training", component: TrainingPortalComponent},
  { path:"career", component: CareerComponent},
  { path:"contact", component: ContactComponent},
  { path:"training/courses", canActivate:[AuthGuard] , component:CoursesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
