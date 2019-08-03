import { Component, OnInit } from '@angular/core';
import { ImageService } from '../../services/image.service';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {

  constructor(private imageService: ImageService) { }


  ngOnInit() {
    this.imageService.getAll().subscribe(x => {
      
    });
  }

}
