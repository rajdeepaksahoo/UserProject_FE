import { Component, ViewChild } from '@angular/core';
import { UserService } from './../service/user.service'
import { UserEntity } from '../user-entity';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { UpdateUserComponent } from '../update-user/update-user.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent {

  displayedColumns: string[] = ['firstName', 'lastName', 'userId', 'emailId','action'];
  dataSource: MatTableDataSource<UserEntity>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
 

  constructor(private service: UserService,private dialog:MatDialog) {
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers() {
    this.service.getAllUsers().subscribe(data => {
      console.log(data);
      this.dataSource.data = data;
      this.dataSource.paginator = this.paginator;
      this.dataSource.paginator.pageSize = 10;
    });
  }

  clicked = () => {
    alert('Delete Works 👍');
  }

//Filter By Name Only

  applyFilterByName(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();
    this.dataSource.filterPredicate = (data: UserEntity, filter: string) => {
      return data.firstName.trim().toLowerCase().indexOf(filter) !== -1;
    };
    
   console.log(this.dataSource)
    this.dataSource.filter = filterValue;
    console.log(filterValue)
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  

  applyFilterByLName(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();
    this.dataSource.filterPredicate = (data: UserEntity, filter: string) => {
      return data.lastName.trim().toLowerCase().indexOf(filter) !== -1;
    };
    this.dataSource.filter = filterValue;
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  

  applyFilterByEmailId(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();
    this.dataSource.filterPredicate = (data: UserEntity, filter: string) => {
      return data.emailId.trim().toLowerCase().indexOf(filter) !== -1;
    };
    this.dataSource.filter = filterValue;
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  applyFilterByUserId(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();
    this.dataSource.filterPredicate = (data: UserEntity, filter: string) => {
      return data.userId.trim().toLowerCase().indexOf(filter) !== -1;
    };
    this.dataSource.filter = filterValue;
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  
  
//Normal Filter From All Column

  // applyFilter(event: Event) {

  //   const filterValue = (event.target as HTMLInputElement).value;
  //   this.dataSource.filter = filterValue.trim().toLowerCase();
  //   console.log(this.dataSource.data);

  //   if (this.dataSource.paginator) {
  //     this.dataSource.paginator.firstPage();
  //   }
    
  // }

  deleteUser(userId:string){
    console.log(userId)
    this.service.deleteUser(userId).subscribe(data=>{
      
    })
    this.getAllUsers();
  }

  showOne(show:string){
    console.log(show)
    this.service.id=parseInt(show);
    console.log(show)
    this.dialog.open(UpdateUserComponent, {
      width:'70%',
      height:'50%'
      }
      
    )
  }
}
