import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckImageService {

  IMAGEURL = "https://pbs.twimg.com/profile_images/1108430392267280389/ufmFwzIn_400x400.png";
  ImageChecker = 'http';
  constructor() { }

  checkImage(articles:any,length:number){
    for(let i = 0;i<length;i++){
      let checker = articles[i];
      if(checker.urlToImage===null){
        articles[i].urlToImage = this.IMAGEURL;
      }
      if(checker.urlToImage.slice(0,4)!==this.ImageChecker){
        articles[i].urlToImage = this.IMAGEURL;
      }
    }
    return articles;
  }
}
