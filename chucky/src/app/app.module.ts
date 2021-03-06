import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { GalerieComponent } from './galerie/galerie.component';
import { ContactComponent } from './contact/contact.component';
import { HttpClientModule } from '@angular/common/http';
import { baseURL } from './shared/baseurl';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ProcessHTTPMsgService } from './shared/process-httpmsg.service';
import { ArtworkService } from './shared/artwork.service';
import { CommentService } from './shared/comment.service';
import { ContactmsgService } from './shared/contactmsg.service';
import { ArtworkdetailComponent } from './artworkdetail/artworkdetail.component';
import { ArtworkComponent } from './artwork/artwork.component';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {MatSliderModule} from '@angular/material/slider';
import { FilterPipe } from './filter/filter.pipe';
import { ApphighlightDirective } from './directives/apphighlight.directive';
import { ImgpopupComponent } from './imgpopup/imgpopup.component';
import { LightboxModule } from 'ngx-lightbox';
import {CrystalLightboxModule} from '@crystalui/angular-lightbox';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

var firebaseConfig = {
  apiKey: 'AIzaSyCpHboQTzPjVFrkusRTyQ98S9JRvJeZ_mY',
  authDomain: 'chucky-e5548.firebaseapp.com',
  projectId: 'chucky-e5548',
  storageBucket: 'chucky-e5548.appspot.com',
  messagingSenderId: '359341642080',
  appId: '1:359341642080:web:58c10134cb1c67c2db8e05',
  measurementId: 'G-TH5GGHN2EC',
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    GalerieComponent,
    ContactComponent,
    ArtworkdetailComponent,
    ArtworkComponent,
    FilterPipe,
    ApphighlightDirective,
    ImgpopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule, 
    MatInputModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    IvyCarouselModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    CrystalLightboxModule,
    MatCarouselModule.forRoot(),
    LightboxModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [ArtworkService, CommentService, CommentService, ProcessHTTPMsgService, {provide: 'BaseURL', useValue: baseURL}],
  bootstrap: [AppComponent]
})
export class AppModule { }
