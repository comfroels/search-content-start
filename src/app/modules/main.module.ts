import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RimSearchComponent } from '../components/rim-search.component';
import { RimSearchService } from '../components/rim-search.service';

@NgModule({
  bootstrap: [RimSearchComponent],
  declarations: [RimSearchComponent],
  imports: [BrowserModule],
  providers: [RimSearchService]
})
export class MainModule {}
