import { Component, OnInit } from '@angular/core';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {

  constructor(private service: ImageService) { }

  noOfBillsUploaded = 0;
  totalBillCost = 0;
  ngOnInit() {
    this.getData();
  }
  getData() {
    this.service.getAll().subscribe((data) => {
      console.log(data);
      var tempCost = data.totalOrderPrice;
      this.totalBillCost = tempCost.toFixed(2);
      this.noOfBillsUploaded = data.noOfBills;
    });
  }


}
