import { Component, OnInit } from '@angular/core';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-store-data',
  templateUrl: './store-data.component.html',
  styleUrls: ['./store-data.component.css']
})
export class StoreDataComponent implements OnInit {

  constructor(private service: ImageService) { }
  allData = [];
  ngOnInit() {
    this.getAllData();
  }

  getAllData() {
    this.service.getAllData().subscribe((data) => {
      console.log(data);
      this.allData = data;
    });
  }
}
