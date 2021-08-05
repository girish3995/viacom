import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.scss']
})
export class ListItemsComponent implements OnInit {
  displayData:any
  constructor() { }
  
  ngOnInit(): void {
    if(localStorage.getItem('data')){
      this.displayData=JSON.parse(localStorage.getItem('data')|| '{}')
      console.log(this.displayData)
    }
  }

}
