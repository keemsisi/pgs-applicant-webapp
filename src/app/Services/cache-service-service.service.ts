import { Injectable } from '@angular/core';

@Injectable()
export class CacheServiceService {

  ipAddress : string = window.location.hostname+":8080";
  //ipAddress : string = "192.168.8.103:8080";


  formNameUploaded : string = "";

  formUploadedSubjectId : string ;

  loggedIn : boolean =  false;

  subjectIdMap = new Map();

  uname : string ;

  constructor() { }

}
