import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HeaderPageService } from '../service/header-page.service';
import { User } from '../user';
import { Repos } from '../repos';

@Component({
  selector: 'app-header-page',
  templateUrl: './header-page.component.html',
  providers: [ HeaderPageService],
  styleUrls: ['./header-page.component.css']
})
export class LandingPageComponent implements OnInit {

public username = '';
repos: Repos;
user: User;

  constructor( private LandingService: HeaderPageService, public repositoryService: HeaderPageService)  { }

  ngOnInit() {
    this.LandingService.getLandingPageInfo(this.username);
    this.user = this.LandingService.user;

    this.repositoryService.getLandingPageRepo(this.username);
    this.repos = this.repositoryService.repos;
  }

}
