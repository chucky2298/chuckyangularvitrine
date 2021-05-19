import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-imgpopup',
  templateUrl: './imgpopup.component.html',
  styleUrls: ['./imgpopup.component.css']
})
export class ImgpopupComponent implements OnInit {
  
  baseURL = 'http://localhost:3000';

  constructor( @Inject(MAT_DIALOG_DATA) public data: string ) { }

  ngOnInit(): void {
  }

}
