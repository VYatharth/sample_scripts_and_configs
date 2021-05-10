import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { APIService } from './API.service';
import { Portfolio } from '../types/portfolio';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'amplify-angular-app';
  public createForm: FormGroup = <FormGroup>{};
  portfolios: Array<Portfolio>= new Array<Portfolio>();
  constructor(private api: APIService, private fb: FormBuilder) { }

  async ngOnInit() {
    this.createForm = this.fb.group({
      'name': ['', Validators.required],
      'description': ['', Validators.required]
    });

    this.api.ListPortfolios().then(event => {
      this.portfolios = <Array<Portfolio>>event.items;
    });

    this.api.OnCreatePortfolioListener.subscribe((event: any) => {
      const newPortfolio = event.value.data.onCreatePortfolio;
      this.portfolios = [newPortfolio, ...this.portfolios];
    });
  }

  public onCreate(portfolio: Portfolio) {
    this.api.CreatePortfolio(portfolio).then(event => {
      console.log('item created!');
      this.createForm.reset();
    })
      .catch(e => {
        console.log('error creating restaurant...', e);
      });
  }
}
