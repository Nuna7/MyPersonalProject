import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TopHeadingService {

  HeadingsNow:any;
  constructor() { }

  setHeadings(heading:string){
    this.HeadingsNow = heading;
  }
  getHeadings(){
    return this.HeadingsNow;
  }

}
