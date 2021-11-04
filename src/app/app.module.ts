import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Modules needed for this app
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatToolbarModule} from '@angular/material/toolbar';
import {FlexLayoutModule} from '@angular/flex-layout';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import {MatSliderModule} from '@angular/material/slider'

//Services 
import { ApiServiceService } from './services/api-service.service';
import { CheckImageService } from './services/check-image.service';
import { ProcessHttpmsgService } from './services/process-httpmsg.service';

import 'hammerjs';

import { HomeComponent } from './home/home.component';
import { BusinessComponent } from './business/business.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { ScienceComponent } from './science/science.component';
import { TopHeadingComponent } from './top-heading/top-heading.component';
import { AboutComponent } from './about/about.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { ExpandDirective } from './expand.directive';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BusinessComponent,
    EntertainmentComponent,
    ScienceComponent,
    TopHeadingComponent,
    AboutComponent,
    MainNavComponent,
    ExpandDirective,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    LayoutModule,
    MatSidenavModule,
    MatIconModule,
    MatSliderModule
  ],
  providers: [ApiServiceService,CheckImageService,ProcessHttpmsgService],
  bootstrap: [AppComponent]
})
export class AppModule { }
