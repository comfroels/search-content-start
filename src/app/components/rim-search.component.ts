import { Component } from '@angular/core';

import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/debounceTime';

import { RimSearchService } from './rim-search.service';

@Component({
  selector: 'rim-search',
  template: `
    <label for="rimSearch">Rim Search!</label>
    <input required (input)="term$.next($event.target.value)" name="rimSearch" />
    <div *ngIf="result">
        {{result | json}}
    </div>
  `,
  
})
export class RimSearchComponent {

  term$ = new Subject<string>();
  result: any;

  constructor(public rimSearch: RimSearchService){
    this.term$
      .debounceTime(1000)
      .subscribe(term => this.search(term));
  }

  search(searchTerm: string){
    this.rimSearch.search(searchTerm)
                  .subscribe((results: any) => this.result = results);
  }
}
