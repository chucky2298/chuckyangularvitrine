import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { Artwork } from '../model/artwork';
import { ArtworkService } from '../shared/artwork.service';
import { switchMap } from 'rxjs/operators';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ImgpopupComponent } from '../imgpopup/imgpopup.component';
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-artworkdetail',
  templateUrl: './artworkdetail.component.html',
  styleUrls: ['./artworkdetail.component.css']
})
export class ArtworkdetailComponent implements OnInit {


  errMess: string;
  artwork: Artwork;
  artworkIds: string[];
  baseURL = 'http://localhost:3000';
  prev: String;
  next: String;
  imagesBasic: string[];
  imageMaxHeight: string = "100%"
// Maximum image height.
 
imageMaxWidth: string = "100%"
// Maximum image width.
 
counter: boolean = false
// Image counter.
 
counterSeparator: string = "/"
// The text separator counter.
 
backgroundColor: "black" | "white" = "black"
// Background color. Inverts the black and white colors of the controls and the background.
 
backgroundOpacity: number = 0.85
// Lightbox background opacity.
 
animationDuration: number = 400
// Speed of opening and closing animation.
 
animationTimingFunction: string = "cubic-bezier(0.475, 0.105, 0.445, 0.945)"
// Smooth opening and closing animation function.
 
closeButtonText: string = "Close"
// The Close button text.
 
hideThumbnail: boolean = true
// Hide the thumbnail when opening the lightbox.
 
disable: boolean = false
// Disable the lightbox.
  
  constructor(private artworkservice: ArtworkService,
    private route: ActivatedRoute, public dialog: MatDialog) { }

  ngOnInit() {
    this.artworkservice.getArtworkIds().subscribe(artworkIds => this.artworkIds = artworkIds);
    this.route.params.pipe(switchMap((params: Params) => { return this.artworkservice.getArtwork(+params['id']); }))
    .subscribe(artwork => { this.artwork = artwork; },
      errmess => this.errMess = <any>errmess);
    this.imagesBasic = this.artwork.images;
  }

  openLoginForm(imeg: string) {
    this.dialog.open(ImgpopupComponent, {width: '516px', height: '600px', data: imeg });
  }

  setPrevNext(artworkId: string) {
    const index = this.artworkIds.indexOf(artworkId);
    this.prev = this.artworkIds[(this.artworkIds.length + index - 1) % this.artworkIds.length];
    this.next = this.artworkIds[(this.artworkIds.length + index + 1) % this.artworkIds.length];
  }

}
