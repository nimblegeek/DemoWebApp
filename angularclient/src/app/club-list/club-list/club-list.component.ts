import { Component, OnInit } from '@angular/core';
import { Club } from '../model/club';
import { UserService } from '../service/club.service';

@Component({
  selector: 'app-club-list',
  templateUrl: './club-list.component.html',
  styleUrls: ['./club-list.component.css']
})
export class ClubListComponent implements OnInit {

  clubs: Club[];

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.clubService.findAll().subscribe(data => {
      this.clubs = data;
    });
  }
}
