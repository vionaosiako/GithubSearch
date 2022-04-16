import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubSearchRepoComponent } from './github-search-repo.component';

describe('GithubSearchRepoComponent', () => {
  let component: GithubSearchRepoComponent;
  let fixture: ComponentFixture<GithubSearchRepoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GithubSearchRepoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubSearchRepoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
