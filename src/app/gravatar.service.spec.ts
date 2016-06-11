import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { GravatarService } from './gravatar.service';

describe('Gravatar Service', () => {
  beforeEachProviders(() => [GravatarService]);

  it('should ...',
      inject([GravatarService], (service: GravatarService) => {
    expect(service).toBeTruthy();
  }));
});
