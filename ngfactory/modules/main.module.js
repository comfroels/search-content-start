import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RimSearchComponent } from '../components/rim-search.component';
import { RimSearchService } from '../components/rim-search.service';
export var MainModule = (function () {
    function MainModule() {
    }
    MainModule.decorators = [
        { type: NgModule, args: [{
                    bootstrap: [RimSearchComponent],
                    declarations: [RimSearchComponent],
                    imports: [BrowserModule],
                    providers: [RimSearchService]
                },] },
    ];
    MainModule.ctorParameters = [];
    return MainModule;
}());
//# sourceMappingURL=main.module.js.map