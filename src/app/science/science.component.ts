import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../services/api-service.service';
import { flyInOut } from '../app-animations';
import { CheckImageService } from '../services/check-image.service';

@Component({
  selector: 'app-science',
  templateUrl: './science.component.html',
  styleUrls: ['./science.component.scss'],
  animations: [
    flyInOut()
  ]
})
export class ScienceComponent implements OnInit {

  Sciencearticles:any;
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
    this.api.getDifferentApi('science')
      .subscribe(news => {this.Sciencearticles = news['articles'],
          length = this.Sciencearticles.length;
          this.Sciencearticles = this.checkImage.checkImage(this.Sciencearticles,length)},
        errmsg => this.errMsg = <any>errmsg);
  }
}
