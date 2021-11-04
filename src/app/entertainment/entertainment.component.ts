import { Component, OnInit } from '@angular/core';
import { flyInOut } from '../app-animations';
import { ApiServiceService } from '../services/api-service.service';
import { CheckImageService } from '../services/check-image.service';

@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.scss'],
  animations:[flyInOut()]
})
export class EntertainmentComponent implements OnInit {

  Entertainmentarticles:any;
  errMsg:any;
  constructor(private api:ApiServiceService,
        private checkImage:CheckImageService) { }

  ngOnInit(): void {
    this.getApi();
  }

  got(url:string){
    window.location.href = url;
  }

  getApi(){
    this.api.getDifferentApi('entertainment')
    .subscribe(news => {this.Entertainmentarticles = news['articles'];
      length = this.Entertainmentarticles.length;
      this.Entertainmentarticles = this.checkImage.checkImage(this.Entertainmentarticles,length)},
      errmsg => this.errMsg = <any>errmsg);
  }
}
