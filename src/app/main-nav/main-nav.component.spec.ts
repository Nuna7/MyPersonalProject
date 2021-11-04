import { LayoutModule } from '@angular/cdk/layout';
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

import { MainNavComponent } from './main-nav.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Component } from '@angular/core';
import { Location } from '@angular/common';

import { By } from '@angular/platform-browser';

@Component({})
class HomeComponent{}
class BusinessComponent{}

describe('MainNavComponent', () => {
  let component: MainNavComponent;
  let fixture: ComponentFixture<MainNavComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [MainNavComponent],
      imports: [
        NoopAnimationsModule,
        LayoutModule,
        MatButtonModule,
        MatIconModule,
        MatListModule,
        MatSidenavModule,
        MatToolbarModule,
        RouterTestingModule.withRoutes(
          [
            {path:'',component:HomeComponent},
            {path:'home',component:HomeComponent},
            {path:'business',component:BusinessComponent},
          ]
        )
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
  it("should navigate to / or default before clicking A in main-nav", ()=> {
    const location = TestBed.inject(Location);
    expect(location.path()).toBe('');
  });
  it("should navigate to home when a is click", () => {
    const location = TestBed.inject(Location);
    const Link = fixture.debugElement.queryAll(By.css('a'));
    const nativeElement :HTMLAnchorElement = Link[0].nativeElement;
    nativeElement.click();
    fixture.detectChanges();
    fixture.whenStable()
      .then(() => {
        expect(location.path()).toBe('/')
      })
  })

});
