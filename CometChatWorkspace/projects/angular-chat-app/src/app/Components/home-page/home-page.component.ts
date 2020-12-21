import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { CometChat } from "@cometchat-pro/chat";

@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.scss"],
})
export class HomePageComponent implements OnInit {
  constructor(private router: Router) {}

  defaultAvatar =
    "https://data-us.cometchat.io/assets/images/avatars/cyclops.png";

  ngOnInit() {}

  /**
   * Go to contact page
   *
   */
  navigateToContactPage() {
    this.router.navigate(["/contact-list"]);
  }

  /**
   * Go to Group list page
   *
   */
  navigateToGroupListPage() {
    this.router.navigate(["/group-list"]);
  }

  /**
   * Go to contact screen
   *
   */
  navigateToContactScreen() {
    this.router.navigate(["/contact-screen"]);
  }

  navigateToConversationList() {
    this.router.navigate(["/conversations-list"]);
  }

  navigateToConversationListScreen() {
    this.router.navigate(["/conversation-screen"]);
  }

  navigateToGroupListScreen() {
    this.router.navigate(["/group-screen"]);
  }

  /**
   * Logout the user that is currently logged in
   * @param
   */
  onLogout() {
    CometChat.logout().then(
      (user) => {
        //console.log("Logout successfull:");
        this.router.navigate(["/login"]);
      },
      (error) => {
        //console.log("Logout failed", { error });
      }
    );
  }
}
