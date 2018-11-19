import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HeaderPageService} from '../service/header-page.service';
import { Repos } from '../repos';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css'],
  providers: [HeaderPageService]
})
export class ReposComponent implements OnInit {
  repos: Repos;
  constructor(private LandingPageService: HeaderPageService, public repositoryService: HeaderPageService) { }

  ngOnInit() {

  }

}
