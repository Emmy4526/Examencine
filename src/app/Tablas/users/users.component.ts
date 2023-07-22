import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from './user.interface';
import { UserService } from './user.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  dataSource: MatTableDataSource<User> = new MatTableDataSource<User>();
  displayedColumns: string[] = ['gender', 'name', 'email', 'login', 'picture'];
  pageSizeOptions = [5, 10, 25, 50];
  pageSize = 5;

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers().subscribe(
      (data: any) => {
        const users: User[] = data.results.map((user: any) => ({
          gender: user.gender,
          name: `${user.name.first} ${user.name.last}`,
          email: user.email,
          login: user.login.username,
          picture: user.picture.large
        }));

        this.dataSource.data = users;
        this.dataSource.paginator = this.paginator;
      },
      error => console.error('Error al obtener usuarios', error)
    );
  }
}
