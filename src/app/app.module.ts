import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {RouterModule, Routes} from '@angular/router';
import {CustomHttpServiceServiceService} from './Services/custom-http-service-service.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ToastModule} from 'primeng/toast';


import {CacheServiceService} from './Services/cache-service-service.service';
import {

  DataTableModule, FileUploadModule, DialogModule,
  ButtonModule, ConfirmDialogModule,  ToggleButtonModule,
  ConfirmationService , GrowlModule, CalendarModule, MessageService,

} from 'primeng/primeng';

import {LoginGaurdGuard} from './Gaurds/login-gaurd.guard';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserDashboardContainerComponent } from './user-dashboard-container/user-dashboard-container.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MessageComponent } from './message/message.component';
import { FilemanagerComponent } from './filemanager/filemanager.component';
import { AccountUpdateComponent } from './account-update/account-update.component';
import { UpdateLoginCredentialsComponent } from './update-login-credentials/update-login-credentials.component';
 


const appRoute: Routes = [
  {path: '', redirectTo: '/userlogin', pathMatch: 'full' },
  {path : 'userlogin', component: UserLoginComponent},
  {path : 'dashboard', component: UserDashboardContainerComponent, children : [
  {path: 'userdashboard', component: UserDashboardComponent, canActivate: [LoginGaurdGuard] },
  {path: 'filemanager', component: FilemanagerComponent, canActivate: [LoginGaurdGuard] },
  {path: 'account-update', component: AccountUpdateComponent, canActivate: [LoginGaurdGuard] },
  {path: 'update-login-credentials', component: UpdateLoginCredentialsComponent, canActivate: [LoginGaurdGuard] },
  ]},


  {path: '**', component: PageNotFoundComponent, canActivate: [LoginGaurdGuard] },
];

@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    UserDashboardContainerComponent
    , UserDashboardComponent, PageNotFoundComponent, 
    MessageComponent, FilemanagerComponent, AccountUpdateComponent, UpdateLoginCredentialsComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, ToggleButtonModule, FileUploadModule, BrowserAnimationsModule, FormsModule, ReactiveFormsModule,
    RouterModule.forRoot(appRoute), DataTableModule, GrowlModule, DialogModule,
     ButtonModule, ConfirmDialogModule, CalendarModule,ToastModule
  ],
  providers: [ConfirmationService, CustomHttpServiceServiceService,CacheServiceService, LoginGaurdGuard , MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
