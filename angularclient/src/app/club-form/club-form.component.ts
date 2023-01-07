import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../service/club.service';
import { Club } from '../model/club';

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
    private userService: UserService) {
    this.club = new Club();
  }

  onSubmit() {
    this.clubService.save(this.club).subscribe(result => this.gotoClubList());
  }

  gotoClubList() {
    this.router.navigate(['/clubs']);
  }
}
