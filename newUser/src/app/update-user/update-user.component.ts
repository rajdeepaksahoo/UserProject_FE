import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../service/user.service';
import { UserEntity } from '../user-entity';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent {
  userForm: FormGroup;
  userEntity:UserEntity=new UserEntity()
  constructor(private fb: FormBuilder,private service:UserService,private dialog:MatDialog,public dialogRef: MatDialogRef<UpdateUserComponent>){
  
  }
  ngOnInit(): void {
    this.userForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      emailId: ['', [Validators.required, Validators.email]],
      userId: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
    this.service.getOneUser(this.service.id+"").subscribe(data=>{
      this.userEntity=data;
      console.log("u E : "+this.userEntity)
    })
  }

  onSubmit() {
    const newUser: UserEntity = this.userForm.value;
    console.log(newUser.firstName)
    this.service.updateUser(newUser).subscribe(data=>{
      console.log(data)
    }
  );
  this.dialogRef.close(UpdateUserComponent)
  }
}
