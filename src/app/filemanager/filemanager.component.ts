import { Component, OnInit, ViewChild } from '@angular/core';
import { FileUpload, MessageService } from 'primeng/primeng';
import { CacheService } from '../servies/cache.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomHttpServiceServiceService } from '../Services/custom-http-service-service.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-filemanager',
  templateUrl: './filemanager.component.html',
  styleUrls: ['./filemanager.component.css']
})
export class FilemanagerComponent implements OnInit {
  totalFileAttached: number ;
  username: string ;
  stepper: number;
  files: Array<Object> = [] ;




  @ViewChild('prizes') prizesF: FileUpload;
  @ViewChild('commendation') commendationF: FileUpload;
  @ViewChild('nationalRecognition') nationalRecognitionF: FileUpload;
  @ViewChild('internationalRecognitions') internationalRecognitionsF: FileUpload;
  @ViewChild('academicAndProfessionalQaulification') academicAndProfessionalQaulificationF: FileUpload;
  @ViewChild('specialAssignements') specialAssignemtnsF: FileUpload;
  @ViewChild('publications') publicationsF: FileUpload;
  @ViewChild('extraCurriculaActivities') extraCurriculaActivitiesF: FileUpload;
  @ViewChild('educationalCertificates') educationalCertificatesF: FileUpload;
  @ViewChild('honours') honoursF: FileUpload;
  @ViewChild('awards') awardsF: FileUpload;

  constructor(private messageService: MessageService ,
    private cacheService: CacheService ,
    private activatedRoute: ActivatedRoute,
    private router: Router, private httpRequest: CustomHttpServiceServiceService
    ) {
     }


  ngOnInit() {
    this.username = this.cacheService.username;
    this.loadHandlers();
    // if (this.username === null) {
    //   this.router.navigate(['/home']);
    // }
    this.getFiles(this.username);
  }

  /**
   *
   * @param username
   */
  getFiles(username) {
    this.httpRequest.getFilesUploaded(username).subscribe(data => {
      this.files = data ;
    } , (error: HttpErrorResponse) => {
      this.messageService.add({
        severity : 'error' , detail : ' Failed to load user files' , summary : 'Error Message'});
    });
  }

  /**
   *
   * @param event
   */
  onBasicUpload(event) {
    this.addSuccessMessage('File uploaded successfully');
    this.getFiles(this.username);
  }


  /**
   *
   * @param event
   */
  onBasicError(event) {
    console.log(event);
    this.addErrorMessage('File(s) failed to attach');
    this.getFiles(this.username);
  }

  /**
   * 
   */
  addErrorMessage(details) {
    this.messageService.add({severity: 'error', summary: 'Your File WAS NOT uploaded successfully', detail: details});
  }

  /**
   *
   * @param details
   */
  addSuccessMessage(details) {
    this.messageService.add({severity: 'success', summary: 'Your Fileuploaded successfully', detail: details});
  }

  loadHandlers() {
    this.prizesF.url  = this.cacheService.serverURL + '/upload/prizes/' +
      this.username;
      this.commendationF.url  = this.cacheService.serverURL + '/upload/commendations/' +
      this.username;
      this.nationalRecognitionF.url  = this.cacheService.serverURL + '/upload/national-recognitions/' +
      this.username;
      this.internationalRecognitionsF.url  = this.cacheService.serverURL + '/upload/international-recognitions/' +
      this.username;
      this.academicAndProfessionalQaulificationF.url  = this.cacheService.serverURL + '/upload/national-and-professional-qaulifications/' +
      this.username;
      this.specialAssignemtnsF.url  = this.cacheService.serverURL + '/upload/special-assignments/' +
      this.username;
      this.publicationsF.url  = this.cacheService.serverURL + '/upload/publications/' +
      this.username;
      this.extraCurriculaActivitiesF.url  = this.cacheService.serverURL + '/upload/extra-curricula-activities/' +
      this.username;
      this.educationalCertificatesF.url  = this.cacheService.serverURL + '/upload/educational-certificates/' +
      this.username;
      this.honoursF.url  = this.cacheService.serverURL + '/upload/honours/' +
      this.username;
      this.awardsF.url  = this.cacheService.serverURL + '/upload/awards/' +
      this.username;
  }



  /**
   *
   * @param id
   * @param collectionName
   * @param filename
   */
  downloadFile(id , collectionName) {
    this.httpRequest.downloadFile(id , collectionName);
  }

  /**
   * 
   * @param id
   * @param collectionName
   */
  deleteFile(id , collectionName , filename) {
    this.httpRequest.deleteFileById(this.username , id , collectionName).subscribe(data => {
      this.getFiles(this.username);

      this.messageService.add({
        severity : 'success' , detail : 'Success Message' , summary : 'File with filename ' + filename + 'deleted successfully'});
      console.log(this.files);
    } , (error: HttpErrorResponse) => {
      this.messageService.add({
        severity : 'error' , detail : 'Error Message' , summary : 'Failed to delete file with filename ' + filename});
    });

  }

}
