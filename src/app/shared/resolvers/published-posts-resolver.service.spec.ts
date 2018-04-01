import { TestBed, inject } from '@angular/core/testing';

import { PublishedPostsResolverService } from './published-posts-resolver.service';

describe('PublishedPostsResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PublishedPostsResolverService]
    });
  });

  it('should be created', inject([PublishedPostsResolverService], (service: PublishedPostsResolverService) => {
    expect(service).toBeTruthy();
  }));
});
