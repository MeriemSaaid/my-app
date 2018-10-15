import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
//import {FormsModule} fron "@angula";

import { AppComponent } from "./app.component";
import { LoginComponent } from "./components/user/login/login.component";
import { ProfileComponent } from "./components/user/profile/profile.component";
import { RegisterComponent } from "./components/user/register/register.component";
import { WebsiteNewComponent } from "./components/website/website-new/website-new.component";
import { WebsiteEditComponent } from "./components/website/website-edit/website-edit.component";
import { WebsiteListComponent } from "./components/website/website-list/website-list.component";
import { PageNewComponent } from "./components/page/page-new/page-new.component";
import { PageEditComponent } from "./components/page/page-edit/page-edit.component";
import { PageListComponent } from "./components/page/page-list/page-list.component";
import { WidgetEditComponent } from "./components/widget/widget-edit/widget-edit.component";
import { WidgetHeaderComponent } from "./components/widget/widget-header/widget-header.component";
import { WidgetImageComponent } from "./components/widget/widget-image/widget-image.component";
import { WidgetYoutubeComponent } from "./components/widget/widget-youtube/widget-youtube.component";
import { Routing } from "./app.routing";
import { WidgetChooserComponent } from "./components/widget/widget-chooser/widget-chooser.component";
import { WidgetListComponent } from "./components/widget/widget-list/widget-list.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent,
    WebsiteNewComponent,
    WebsiteEditComponent,
    WebsiteListComponent,
    PageNewComponent,
    PageEditComponent,
    PageListComponent,
    WidgetEditComponent,
    WidgetHeaderComponent,
    WidgetImageComponent,
    WidgetYoutubeComponent,
    WidgetChooserComponent,
    WidgetListComponent
  ],
  imports: [BrowserModule, Routing, HttpModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
