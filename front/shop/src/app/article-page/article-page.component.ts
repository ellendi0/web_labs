import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.scss']
})


export class ArticlePageComponent implements OnInit {

  private readonly baseUrl = 'http://127.0.0.1:4200';
  httpHeaders = ()=>{ return {headers : new HttpHeaders({'Content-Type': 'application/json'})}}

  constructor(private http: HttpClient) { }

  public price = '160';
  public description = 'Cell is a 2006 apocalyptic horror novel by American author Stephen King. The story follows a New England artist struggling to reunite with his young son after a mysterious signal broadcast over the global cell phone network turns the majority of his fellow humans into mindless vicious animals.';

  ngOnInit(): void {

  }

}
