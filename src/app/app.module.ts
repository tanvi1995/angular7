import { ComponentFixture } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms"
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



import { AppComponent } from './app.component';
import { FatherComponent } from './family/father/father.component';
import { MotherComponent } from './family/mother/mother.component';
import { TaskManagerComponent } from './mini-app/task-manager/task-manager.component';
import { GrandparentComponent } from './family/grandparent/grandparent.component';
import { NotfoundComponentComponent } from './notfound/notfound-component/notfound-component.component';
import { UsersAPIComponentComponent } from './remote/users-apicomponent/users-apicomponent.component';
import { AutoSearchPipePipe } from './myPipes/auto-search-pipe.pipe';
import { UserDetailComponent } from './remote/user-detail/user-detail.component';
import { TemplateFormComponent } from './form/template-form/template-form.component';
import { ModelFormComponent } from './form/model-form/model-form.component';
import { AnimationComponent } from './animation/animation/animation.component';
import { AngularWebComponent } from './myWeb/angular-web/angular-web.component';
import { DevicePageComponent } from './devices/device-page/device-page.component';



@NgModule({
  declarations: [
    AppComponent,
    FatherComponent,
    MotherComponent,
    TaskManagerComponent,
    GrandparentComponent,
    NotfoundComponentComponent,
    UsersAPIComponentComponent,
    AutoSearchPipePipe,
    UserDetailComponent,
    TemplateFormComponent,
    ModelFormComponent,
    AnimationComponent,
    AngularWebComponent,
    DevicePageComponent,
     
     
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
                      {
                        path:'',
                        redirectTo:'task',
                        pathMatch:'full'
                      },
                      {
                        path: 'family',
                        component:GrandparentComponent,
                        children: [
                           {
                        path:'',
                        redirectTo:'father',
                        pathMatch:'full'
                          },
                          {
                            path:'father',
                            component:FatherComponent
                          },
                          {
                            path:'mother',
                            component:MotherComponent
                          }
                        ]
                      },
                      {
                        path:'task',
                        component:TaskManagerComponent
                      },
                      {
                        path:'remoteData',
                        component:UsersAPIComponentComponent
                      },
                       {
                        path:'remoteData/:userID',
                        component:UserDetailComponent
                      },
                      {
                        path:'templateForm',
                        component:TemplateFormComponent
                      },
                      {
                        path:'modelForm',
                        component:ModelFormComponent
                      },
                      {
                        path:'animate',
                        component:AnimationComponent
                      },
                      {
                        path:'webpage',
                        component:AngularWebComponent
                      },
                      {
                        path:'device',
                        component:DevicePageComponent
                      },
                      {
                        path:'**',
                        component:NotfoundComponentComponent
                      }

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
