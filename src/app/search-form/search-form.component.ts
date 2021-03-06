
import { Component, OnInit } from '@angular/core';
import { HeaderPageService } from '../service/header-page.service';
import { Search } from '../search';


@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  newSearch = new Search('', '', '', 0);
  submitUser(name) {
    this.LandingPageService.getLandingPageInfo(name.value);
    this.repositoryService.getLandingPageRepo(name.value);
  }

  constructor(private LandingPageService: HeaderPageService, private repositoryService: HeaderPageService) { }

  ngOnInit() {
  }

}
