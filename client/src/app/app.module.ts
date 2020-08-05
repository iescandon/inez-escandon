import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { JumbotronComponent } from './components/jumbotron/jumbotron.component';
import { AboutComponent } from './components/about/about.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ResumeComponent } from './components/resume/resume.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutImgComponent } from './components/about-img/about-img.component';
import { AboutInfoComponent } from './components/about-info/about-info.component';
import { AboutExtraComponent } from './components/about-extra/about-extra.component';
import { PortfolioTitleComponent } from './components/portfolio-title/portfolio-title.component';
import { PortfolioItemsComponent } from './components/portfolio-items/portfolio-items.component';
import { ResumeTitleComponent } from './components/resume-title/resume-title.component';
import { ResumeInfoComponent } from './components/resume-info/resume-info.component';
import { NavbarLightComponent } from './components/navbar-light/navbar-light.component';
import { ContactInfoComponent } from './components/contact-info/contact-info.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { ContactTitleComponent } from './components/contact-title/contact-title.component';
import { ContactService } from './services/contact.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    JumbotronComponent,
    AboutComponent,
    PortfolioComponent,
    ResumeComponent,
    ContactComponent,
    AboutImgComponent,
    AboutInfoComponent,
    AboutExtraComponent,
    PortfolioTitleComponent,
    PortfolioItemsComponent,
    ResumeTitleComponent,
    ResumeInfoComponent,
    NavbarLightComponent,
    ContactInfoComponent,
    ContactFormComponent,
    ContactTitleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [ContactService],
  bootstrap: [AppComponent],
})
export class AppModule {}
