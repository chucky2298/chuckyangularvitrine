import { Component, OnInit } from '@angular/core';
import { Artwork } from '../model/artwork';
import { ARTWORKS } from '../model/db';
import { ArtworkService } from '../shared/artwork.service';
import { MatCarouselSlide, MatCarouselSlideComponent } from '@ngmodule/material-carousel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  errMess: string;
  artworks: Artwork[] = ARTWORKS;
  bol=false;
  baseURL = 'http://localhost:3000';

  constructor(private artworkService: ArtworkService) { }
  
  ngOnInit(): void {
  
  }

  incrementLike(art: Artwork){
    art.likes= art.likes+1;
    
    this.artworkService.updateArtwork(art)
      .subscribe(artwork => console.log(art) , errmess => { this.errMess = <any>errmess; });
  }

}
