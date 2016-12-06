import { Component } from '@angular/core';
import { RimSearchService } from './rim-search.service';
export var RimSearchComponent = (function () {
    function RimSearchComponent(rimSearch) {
        this.rimSearch = rimSearch;
    }
    RimSearchComponent.prototype.search = function (searchTerm) {
        var _this = this;
        console.log('searchRef', searchTerm);
        this.rimSearch.search(searchTerm)
            .subscribe(function (results) { return _this.result = results; });
    };
    RimSearchComponent.decorators = [
        { type: Component, args: [{
                    selector: 'rim-search',
                    templateUrl: 'rim-search.template.html',
                    styleUrls: ['rim-search.style.css']
                },] },
    ];
    RimSearchComponent.ctorParameters = [
        { type: RimSearchService, },
    ];
    return RimSearchComponent;
}());
//# sourceMappingURL=rim-search.component.js.map