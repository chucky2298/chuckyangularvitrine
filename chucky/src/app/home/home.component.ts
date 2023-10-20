import { Component, OnInit } from '@angular/core';
import { Artwork } from '../model/artwork';
import { ARTWORKS } from '../model/db';
import { ArtworkService } from '../shared/artwork.service';
import { MatCarouselSlide, MatCarouselSlideComponent } from '@ngmodule/material-carousel';
import { AngularFirestore } from "@angular/fire/firestore";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  errMess: string;
  artworks: Artwork[] = ARTWORKS;
  bol=false;
  amigo: number;
	date: Date = new Date();
  baseURL = 'http://localhost:3000';
  topartworks: Artwork[] = ARTWORKS.sort((n1,n2)=> n2.rating-n1.rating).slice(0,4);
  latestartworks: Artwork[] = ARTWORKS.sort((a,b)=>
  (new Date(b.date)).getTime() - (new Date(a.date)).getTime()
  ).slice(0,4);
  tunflixartworks: Artwork[];
  searchart: Artwork[] = new Array();
  

  constructor(private artworkService: ArtworkService, private firestore: AngularFirestore) { }
  
  ngOnInit(): void {

    this.firestore.collection("views").add({
      view: this.date});

  }
  incrementLike(art: Artwork){
    art.likes= art.likes+1;
    
    this.artworkService.updateArtwork(art)
      .subscribe(artwork => console.log(art) , errmess => { this.errMess = <any>errmess; });
  }

}
