import { Component, OnInit } from '@angular/core';
import { ApodService } from '../../services/apod.service';
import { Apod } from '../../models/apod';
import { DomSanitizer  } from '@angular/platform-browser';

@Component({
  selector: 'app-apod',
  templateUrl: './apod.component.html',
  styleUrls: ['./apod.component.scss']
})
export class ApodComponent implements OnInit {

apod = new Apod();
safeURL: any;

  constructor(private apodService: ApodService, public sanitizer: DomSanitizer) {
   }

  ngOnInit() {
   this.getAPOD();
  }

    getAPOD() {
      this.apodService.getAPOD().subscribe( res => {
        this.apod = res;
        this.apod.url = this.apod.url ;
        console.log(this.apod.url);
      });
    }

}
