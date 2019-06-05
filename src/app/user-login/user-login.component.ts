import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';
import {HttpErrorResponse} from '@angular/common/http';
import {Message, MessageService} from 'primeng/primeng';
import { CustomHttpServicesService } from '../servies/custom-http-services.service';
import { CacheService } from '../servies/cache.service';



@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  loginForm: FormGroup;

  errorResponse: string;
  postURL = '/formconverter/admin/login';
  succMsgs: Message[] = [];
  serverError = false ;
  error  = '';

  @Input() usernamme: string;
  @Input() username: string;


  constructor(private httpService: CustomHttpServicesService,
              private fb: FormBuilder,
              private router: Router,
              private cacheService: CacheService , private messageService: MessageService

  ) {

  }

  ngOnInit() {



    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    }) ;

    console.log(this.loginForm.invalid );


  }


  public login(): void {
    this.error = '' ;
    this.httpService.grantUserLogin(this.loginForm.get('username').value , (this.loginForm.get('password').value)).subscribe(
      data => {
        console.log(data);
        if (data.valid) {
        // this.cacheService.dashBoardData.uname = data.uname ;

        this.cacheService.loggedIn = true;
        this.router.navigate(['/dashboard/userdashboard']);
        // grant user login
        this.cacheService.loggedIn = true ;
        this.cacheService.username = this.loginForm.get('username').value;
        this.cacheService.password = this.loginForm.get('password').value;
        window.sessionStorage.setItem('dashBoardData', JSON.stringify( this.cacheService));
        } else {
          // this.router.navigate(['/userlogin']);
          // grant user login
          this.cacheService.loggedIn = false ;
          this.cacheService.username = null;
          this.cacheService.password = null;
          this.messageService.add({severity: 'error', summary: 'Invalid Login Credentials'});

          window.sessionStorage.setItem('userCredentials', JSON.stringify( this.cacheService));
        }
      }, (err: HttpErrorResponse) => {
        this.serverError = true ;

        if (err.status === 403  ) {
          this.error = JSON.parse(err.error).errorMessage;
          // console.log(err);
        } else {
          this.error = 'Server is Unreachable at the moment';
          // console.log(err);
        }
      });
  }
}
/** Multilent Software*/