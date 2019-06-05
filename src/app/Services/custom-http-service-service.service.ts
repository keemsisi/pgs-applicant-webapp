import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { MessageService } from 'primeng/api';



@Injectable()
export class CustomHttpServiceServiceService {

  // staticURL: string = 'http://192.168.8.103:8080';
 private staticURL = 'http://' + window.location.hostname + ':8081';


  constructor(private http: HttpClient, private messageService: MessageService) {
  }


  /**
   *
   * @param path
   * @param data
   * @returns
   */
  postAdminLoginParameters(path: string, data: {}): Observable<any> {
    return this.http.post(`${this.staticURL}${path}`, data, {responseType: 'text'});

  }


  /**
   * 
   * @param username The usename of the user
   */
  getFilesUploaded(username): Observable<any> {
    return this.http.get(`${this.staticURL}` + '/upload/filemapping/'  + username, {responseType: 'json'});
  }


   /**
   * 
   * @param username The usename of the user
   */
  downloadFile(id, collectionName): void {
    const request = window.open(`${this.staticURL}` + '/upload/' + collectionName + '/byid/' + id, '_self');
    request.onerror = () => {
      this.messageService.add({
        severity : 'error' , detail : 'Error Message' , summary : 'File failed to download'});
    };
    request.onload  = () => {
      this.messageService.add({
          severity : 'success' , detail : 'Success Message' , summary : 'File downloaded successfully'});
  };
  }


  /**
   *
   * @param path
   * @param userToDelete
   * @returns 
   */
  deleteExam(path: string, userToDelete: string): Observable<any> {
    return this.http.get(`${this.staticURL}${path}/${userToDelete}`, {responseType: 'text'});
  }


  /**
   *
   * @param path
   * @param newUserData This is the new user to add
   * @returns  This returns nothing after the request is completed
   */
  createNewUser(path: string): Observable<any> {
    return this.http.post(`${this.staticURL}${path}/`, {responseType: 'text'});

  }


  // fetchOriginalFormLanding(path): Observable<OriginalFormLanding[]> {
  //   // return http.get(`${path}`, {})
  //   return this.http.get(`${this.staticURL}${path}`);
  // }


  // getKeysCardFromServer(path: string): Observable<KeysCardModel[]> {
  //   return this.http.get(`${this.staticURL}${path}`);
  // }


  // availableForms(path: string): Observable<OriginalFormTable[]> {
  //   return this.http.get(`${this.staticURL}${path}`);

  // }

  // fetchShuffledFormLanding(path: string): Observable<ShuffledFormLanding[]> {
  //   return this.http.get(`${this.staticURL}${path}`);
  // }


  // getFormQuestions(path: string): Observable<PreviewQuestion[]> {
  //   return this.http.get(`${this.staticURL}${path}`);
  // }

  shuffleOriginalForms(path: string): Observable<any> {
    return this.http.get(`${this.staticURL}${path}`, {responseType: 'text'});
  }




  // getShuffledPlan(path: string): Observable<ShufflePlanModel[]> {
  //   return this.http.get(`${this.staticURL}${path}`);
  // }


  /**
   *
   * @param username The usename of the user
   */
  deleteFileById(username , id , collectionName): Observable<any> {
    return this.http.delete(`${this.staticURL}` + '/upload/_keys_/'
    + collectionName + '/byId/' + username + '/' + id, {responseType: 'json'});
  }
}
