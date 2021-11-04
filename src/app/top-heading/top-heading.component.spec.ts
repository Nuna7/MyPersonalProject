import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopHeadingComponent } from './top-heading.component';
import {HttpClient, HttpClientModule} from '@angular/common/http'
import { ApiServiceService } from '../services/api-service.service';
import { ProcessHttpmsgService } from '../services/process-httpmsg.service';
import { CheckImageService } from '../services/check-image.service';

import {Observable, of} from 'rxjs'
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';


describe('TopHeadingComponent', () => {
  let component: TopHeadingComponent;
  let fixture: ComponentFixture<TopHeadingComponent>;
  
  let Api: "https://newsapi.org/v2/top-headlines?country=in&apiKey=5145acfd220a46f09af102d267e7bb7e";

  beforeEach(async () => {

    class Service{
      getTopApi(key:any):Observable<any>{
        return HttpClient.prototype.get(Api)
      }

    }
    class Heading{

    }
    class ImageCheck{

    }
    const http = {
      http:HttpClient
    }

    await TestBed.configureTestingModule({
      imports:[
        HttpClientModule,
      ],
      declarations: [ 
        TopHeadingComponent, 
      ],
      providers:[
        {provide:ApiServiceService,useClass:Service},
        {provide:ProcessHttpmsgService,useClass:Heading},
        {provide:CheckImageService,useClass:ImageCheck},
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create top-heading component', ()=>{
    expect(component).toBeTruthy();
  });
  

});
