 import { Component, EventEmitter, Output } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
 import { DUMMY_USERS } from './dummy-users';



@Component({
  selector: 'app-root',
  //standalone: false,
 // imports: [RouterOutlet, HeaderComponent, UserComponent, TasksComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  users = DUMMY_USERS;

  selectedUserId?: string;

  get selectedUser() {
    return DUMMY_USERS.find((user) => user.id === this.selectedUserId);
  }

  onSelectUser(id: string) {
    this.selectedUserId = id;
    console.log(this.selectedUser);
  }
}
