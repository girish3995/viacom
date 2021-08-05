import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  description:any
  constructor(public service:AppService,
    private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://localhost:3000/description').subscribe((data:any) => {
      this.description=data
  });
  }
  home(){
    this.service.mode='home'
  }
  addItems(){
    this.service.mode='add'
  }
  listItems(){
    this.service.mode='list'
  }

}
