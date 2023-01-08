import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Club } from '../model/club';
import {ClubService} from "../../service/club.service";

@Component({
  selector: 'app-club-form',
  templateUrl: './club-form.component.html',
  styleUrls: ['./club-form.component.css']
})
export class ClubFormComponent {

  club: Club;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private clubService: ClubService) {
    this.club = new Club();
  }

  onSubmit() {
    this.clubService.save(this.club).subscribe(result => this.gotoClubList());
  }

  gotoClubList() {
    this.router.navigate(['/clubs']);
  }
}
