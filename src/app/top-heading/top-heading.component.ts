import { Component, OnInit } from '@angular/core';
import { TopHeadingService } from '../services/top-heading.service';
import { ApiServiceService } from '../services/api-service.service';
import { flyInOut } from '../app-animations';
import { CheckImageService } from '../services/check-image.service';

@Component({
  selector: 'app-top-heading',
  templateUrl: './top-heading.component.html',
  styleUrls: ['./top-heading.component.scss'],
  animations: [
    flyInOut()
  ]
})
export class TopHeadingComponent implements OnInit {

  Headings:any;
  articles:any;
  errMsg:any;

  constructor(private heading:TopHeadingService,
    private api:ApiServiceService,
    private checkImage:CheckImageService) { }

  ngOnInit(): void {
    this.Headings = this.heading.getHeadings();
    this.getApi()
  }
 
  got(url:string){
    window.location.href = url;
  }

  getApi(){
    this.api.getTopApi(this.Headings)
      .subscribe(news => {this.articles = news['articles'];
        length = this.articles.length;
        this.checkImage.checkImage(this.articles,length)
        console.log(this.articles)},
        errmsg => this.errMsg = errmsg);
  }
}
