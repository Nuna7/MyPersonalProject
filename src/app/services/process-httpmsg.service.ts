import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProcessHttpmsgService {

  constructor() { }

  handleError(Response:HttpErrorResponse|any){
    let errMsg:string;
    if(Response.error instanceof ErrorEvent){
      errMsg = Response.error.message; 
    }
    else{
      errMsg = `${Response.status} - ${"Sorry For The Incovinient. The News Wouldn't Be Available For Today. Please Come Back Tomorrow"|| ""}`
    }
    return throwError(errMsg);
  }

}
