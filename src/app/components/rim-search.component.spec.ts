import { async, TestBed } from '@angular/core/testing';

import { MainModule } from '../modules/main.module';

import { RimSearchComponent } from './rim-search.component';
import { RimSearchService } from './rim-search.service';

class TestService {
  search(term: string){
    return {term};
  }
}

describe(
  'RimSearchComponent',
  () => {
    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [
          TestComponent,
          RimSearchComponent
        ],
        imports: [
          MainModule
          // HttpModule, etc.
        ],
        providers: [
          { provide: RimSearchService, useClass: TestService }
        ]
      });
    });

    it('should do something', async(() => {
      // Overrides here, if you need them
    //   TestBed.overrideComponent(SomeComponent, {
    //     set: {
    //       template: '<div>Overridden template here</div>'
    //       // ...
    //     }
    //   });

      TestBed.compileComponents().then(() => {
        const fixture = TestBed.createComponent(TestComponent);

        // Access the dependency injected component instance
        const app = fixture.componentInstance;

        expect(app).toBeTruthy();
      });
    }));
  }
)



@Component({
  selector: 'test-cmp',
  template: '<rim-search></rim-search>'
})
class TestComponent { }