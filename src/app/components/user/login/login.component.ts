import { Component, OnInit } from "@angular/core";
import { UserService } from "../../../services/user.service.client";
import { empty } from "rxjs";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  userExist: boolean;
  erreur_flag: boolean;
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {}

  login(username, password) {
    let myUser = this.userService.findUserByCredentials(username, password);
    if (!myUser) {
      this.erreur_flag = true;
      //this.userExist = false;
    } else {
      this.erreur_flag = false;
      this.router.navigate(["/user/:uid"]);
      // this.userExist = true;
    }
  }
}
