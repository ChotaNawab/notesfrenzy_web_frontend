import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRoutingModule} from './app.routing.module';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { CourcesComponent } from './cources/cources.component';
import {FlashComponent} from './flash/flash.component';
import { HeaderComponent } from './header/header.component';
import { VideoComponent } from './video/video.component';
import { SchloarshipsComponent } from './schloarships/schloarships.component';
import { TutorComponent } from './tutor/tutor.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { CategoriesComponent } from './categories/categories.component';
import { VideolectureComponent } from './videolecture/videolecture.component';
import { PdflectureComponent } from './pdflecture/pdflecture.component';
import { CoursesComponent } from './courses/courses.component';
import { CoursesdetailsComponent } from './coursesdetails/coursesdetails.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    CourcesComponent,
    FlashComponent,
    HeaderComponent,
    VideoComponent,
    SchloarshipsComponent,
    TutorComponent,
    MainpageComponent,
    CategoriesComponent,
    VideolectureComponent,
    PdflectureComponent,
    CoursesComponent,
    CoursesdetailsComponent,
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {
        path: 'mainpage',
        component: MainpageComponent
      },
      {
        path: 'categories',
        component: CategoriesComponent
      },
      {
        path: 'courses',
        component: CoursesComponent
      },
      {
        path: 'coursesdetails',
        component: CoursesdetailsComponent
      }
    
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
