import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap} from 'rxjs/operators';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {

  updating: boolean = false;
  user: User = new User();

  user$: Observable<User> = this.ar.params.pipe(
    switchMap( params => this.userService.get(params.id) )
  );

  constructor(
    private userService: UserService,
    private ar: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm, user: User): void {
    if (!user._id) {
      this.userService.create(user).subscribe(
        () => this.userService.getAll()
      );
    }
    else {
      this.userService.update(user).subscribe(
        () => this.userService.getAll()
      );
    }
    this.router.navigate(['/', 'users'])
  }

}
