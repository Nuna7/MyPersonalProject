import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../services/api-service.service';
import { TopHeadingService } from '../services/top-heading.service';
import { flyInOut } from '../app-animations';
import { CheckImageService } from '../services/check-image.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  host: {
    '[@flyInOut]' : 'true',
    'style': 'display:block;'
  },
  animations: [
    flyInOut()
  ]
})
export class HomeComponent implements OnInit {
  
  date:number = Date.now();
  constructor(
    private heading:TopHeadingService,
    ) { }

  ngOnInit(): void {
  }
  
  passNow(now:string){
    this.heading.setHeadings(now);
  }
  
} 
