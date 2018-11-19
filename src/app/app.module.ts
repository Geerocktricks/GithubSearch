import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HeaderPageService } from './service/header-page.service';




import { AppComponent } from './app.component';
import { LandingPageComponent } from './header-page/header-page.component';
// import { DateCountPipe } from './date-count.pipe';
import { ReposComponent } from './repos/repos.component';
import { SearchFormComponent } from './search-form/search-form.component';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    // DateCountPipe,
    ReposComponent,
    SearchFormComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,

  ],
  providers: [HeaderPageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
