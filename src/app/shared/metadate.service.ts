import { Injectable } from "@angular/core";
import { stringify } from '@angular/compiler/src/util';

@Injectable({providedIn: 'root'})
export class MetadateService {
 public info: string = '';
 public active: boolean = true;
 public data: any = null;
 public compiled: number = 0; 
 async onGet() { 
  if (this.active) {
    this.active = !this.active;
 setTimeout(async() => {
   const response = await fetch(`https://rs-recruiter.github.io/data.json`, { }); 
     this.data = await response.json();
     this.info =  JSON.stringify(this.data);
     this.compiled += 1;
     this.active = !this.active;
 }, 1000);
  }
}
}
