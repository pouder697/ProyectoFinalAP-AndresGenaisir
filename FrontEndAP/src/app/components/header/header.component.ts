import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  public active : boolean = false;
  public selected : boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  setActive(): void {
    this.active = !this.active;
}

selectItem(): void {
  this.selected = !this.selected;
}

}
