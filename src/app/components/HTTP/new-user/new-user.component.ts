import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { User } from '../../Class/user';
import { UserService } from '../user.service';
import { Global } from '../global';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css'],
  providers: [UserService],
})
export class NewUserComponent implements OnInit {
  public user: User;
  public status: string;
  public header: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userServ: UserService
  ) {
    this.user = new User('', '', '', '', '', false);
    this.header = 'New user';
    this.status = '';
  }

  ngOnInit(): void {}

  afuConfig = {
    multiple: false,
    formatsAllowed: '.jpg,.png,.gif,.jpeg',
    maxSize: 100,
    uploadAPI: {
      url: Global.API + '/user/photo',
    },
    theme: 'attachPin',
    hideProgressBar: true,
    hideResetBtn: true,
    hideSelectBtn: false,
    fileNameIndex: false,
    attachPinText: 'Upload file',
  };

  onSubmit() {
    this.userServ.createUser(this.user).subscribe(
      (res) => {
        if (res.status == 'success') {
          this.status = 'success';
          this.user = res.newUser;
          console.log(this.user);
          this.router.navigate(['/home']);
        } else {
          this.status = 'error';
        }
      },
      (error) => {
        this.status = error;
      }
    );
  }

  uploadFile(data: any) {
    let file = data.body.tempFilename;
    this.user.photo = file;
  }
}
