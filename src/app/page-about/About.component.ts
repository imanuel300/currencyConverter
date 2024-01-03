import { Component } from '@angular/core';

@Component({
  selector: 'page-about',
  templateUrl: './About.component.html',
})
export class AboutComponent {
  //public Templates: any;

  constructor() {

  }
  public LastSearch
  ngOnInit(): void {
    this.LastSearch = localStorage.getItem("LastSearch");
  }
  splitDescription() {
    return this.LastSearch.split('\n');

  }
  ClearResults(){
    localStorage.setItem('LastSearch', "");
    this.LastSearch ='';
  }
}
