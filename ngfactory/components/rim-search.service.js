import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
export var RimSearchService = (function () {
    function RimSearchService() {
    }
    RimSearchService.prototype.search = function (term) {
        return Observable.create({ term: term });
    };
    RimSearchService.decorators = [
        { type: Injectable },
    ];
    RimSearchService.ctorParameters = [];
    return RimSearchService;
}());
//# sourceMappingURL=rim-search.service.js.map