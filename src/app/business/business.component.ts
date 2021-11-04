import { flyInOut} from '../app-animations';
import { Component, OnInit } from '@angular/core';
import { CheckImageService } from '../services/check-image.service';

import { ApiServiceService } from '../services/api-service.service';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.scss'],

  animations: [
    flyInOut(),
    
  ]
})
export class BusinessComponent implements OnInit {
 
  Businessarticles:any;
  errMsg:any;
  
  constructor(private api:ApiServiceService,
        private imageCheck:CheckImageService) { }

  ngOnInit(): void {
    this.getApi();
  }
  got(url:string){
    window.location.href = url;
  }
  getApi(){
    this.api.getDifferentApi('business')
    .subscribe(news=> {this.Businessarticles = news['articles'];
      length = this.Businessarticles.length;
      this.Businessarticles = this.imageCheck.checkImage(this.Businessarticles,length);
        console.log(this.Businessarticles)},
      errmsg => this.errMsg = <any>errmsg);
  }
}
