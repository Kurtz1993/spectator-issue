import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { STATE } from './tokens';
import { AppComponent } from './app.component';
import { StateMock } from './mocks/a.mock';
import { AnotherStateService } from './mocks/b.mock';

describe('AppComponent', () => {
  let spectator: Spectator<AppComponent>;

  const createComponent = createComponentFactory({
    component: AppComponent,
    providers: [{ provide: STATE, useClass: AnotherStateService }],
  });

  beforeEach(() => {
    spectator = createComponent();
  });

  it('should get the correct instance of STATE', () => {
    const service = spectator.inject(STATE);

    console.log(service);

    expect(service instanceof AnotherStateService).toBeTrue();
  });

  it('should get the mocked instance of STATE injection token', () => {
    spectator = createComponent({ providers: [{ provide: STATE, useClass: StateMock }] });

    const service = spectator.inject(STATE);

    console.log(service);

    expect(service instanceof StateMock).toBeTrue();
  });
});
