import { Component } from '@angular/core';
import { ApiServiceService } from './services/api-service.service';
import { flyInOut } from './app-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations:[flyInOut()]
})
export class AppComponent {
  title="News-of-the-World"
  
}
