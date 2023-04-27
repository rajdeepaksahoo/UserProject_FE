import { Component } from '@angular/core';
import { UserService } from '../service/user.service';
import { UserEntity } from '../user-entity';

@Component({
  selector: 'app-show-search-user',
  templateUrl: './show-search-user.component.html',
  styleUrls: ['./show-search-user.component.css']
})
export class ShowSearchUserComponent {


  constructor(private service : UserService) {}
  userId:String = this.service.userId;

  user:UserEntity;

  ngOnInit(){
    this.service.getOneUser(this.service.userId).subscribe(userData=>{
      this.user=userData;
      console.log(this.userId)
    })
  }
}
