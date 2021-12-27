import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NavComponent } from './components/nav/nav.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactComponent } from './components/contact/contact.component';
import { DevProcessComponent } from './components/dev-process/dev-process.component';
import { AboutComponent } from './components/about/about.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactService } from './services/contact.service';
import { IndexComponent } from './components/index/index.component';
import { CareerComponent } from './components/career/career.component';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';
import { TrainingPortalComponent } from './components/training-portal/training-portal.component';
import { CoursesComponent } from './components/training-portal/courses/courses.component';
import { HashLocationStrategy, LocationStrategy  } from '@angular/common'
// import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    DevProcessComponent,
    AboutComponent,
    BlogComponent,
    IndexComponent,
    CareerComponent,
    ProjectDetailsComponent,
    TrainingPortalComponent,
    CoursesComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    ReactiveFormsModule,
    // SocialLoginModule
  ],
  providers: [
    ContactService ,
    {provide : LocationStrategy , useClass: HashLocationStrategy}
    // {
    //   provide: 'SocialAuthServiceConfig',
    //   useValue: {
    //     autoLogin: false,
    //     providers: [
    //       {
    //         id: GoogleLoginProvider.PROVIDER_ID,
    //         provider: new GoogleLoginProvider(
    //           '238090839889-bji6sdtlgho5ik1pvl3c9b909br5tlmp.apps.googleusercontent.com'
    //         )
    //       }
    //     ]
    //   } as SocialAuthServiceConfig,
    // }
  ],
  bootstrap: [AppComponent]
}
)
export class AppModule { }
