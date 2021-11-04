import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import { ProcessHttpmsgService } from './process-httpmsg.service';

const API_KEY = (key:any) => { 
  return `https://newsapi.org/v2/top-headlines?country=${key}&apiKey=5145acfd220a46f09af102d267e7bb7e`
    }
const API_KEY2 =(key:any) => {
  return `https://newsapi.org/v2/top-headlines?category=${key}&apiKey=5145acfd220a46f09af102d267e7bb7e`
}

@Injectable({
  providedIn: 'root'
})

export class ApiServiceService {

  constructor(private http:HttpClient,
    private ErrMSG:ProcessHttpmsgService) { }

 getTopApi(key:any):Observable<any>{
   return this.http.get(API_KEY(key))
    .pipe(catchError(this.ErrMSG.handleError))
 }
 getHomeApi(key:any):Observable<any>{
   return this.http.get(API_KEY(key))
    .pipe(catchError(this.ErrMSG.handleError))
 }
 getDifferentApi(key:any):Observable<any>{
   return this.http.get(API_KEY2(key))
    .pipe(catchError(this.ErrMSG.handleError))
 }
}
