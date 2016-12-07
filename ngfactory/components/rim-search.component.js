import { Component } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/debounceTime';
import { RimSearchService } from './rim-search.service';
export var RimSearchComponent = (function () {
    function RimSearchComponent(rimSearch) {
        var _this = this;
        this.rimSearch = rimSearch;
        this.term$ = new Subject();
        this.term$
            .debounceTime(1000)
            .subscribe(function (term) { return _this.search(term); });
    }
    RimSearchComponent.prototype.search = function (searchTerm) {
        var _this = this;
        this.rimSearch.search(searchTerm)
            .subscribe(function (results) { return _this.result = results; });
    };
    RimSearchComponent.decorators = [
        { type: Component, args: [{
                    selector: 'rim-search',
                    template: "\n    <label for=\"rimSearch\">Rim Search!</label>\n    <input required (input)=\"term$.next($event.target.value)\" name=\"rimSearch\" />\n    <div *ngIf=\"result\">\n        {{result | json}}\n    </div>\n  ",
                },] },
    ];
    RimSearchComponent.ctorParameters = [
        { type: RimSearchService, },
    ];
    return RimSearchComponent;
}());
//# sourceMappingURL=rim-search.component.js.map