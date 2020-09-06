import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { STATE } from './tokens';
import { AppComponent } from './app.component';
import { StateMock } from './mocks/a.mock';

describe('AppComponent', () => {
  let spectator: Spectator<AppComponent>;

  const createComponent = createComponentFactory({
    component: AppComponent,
    providers: [{ provide: STATE, useValue: { go() {} } }],
  });

  beforeEach(() => {
    spectator = createComponent();
  });

  it('should get the correct instance of STATE', () => {
    const service = spectator.inject(STATE);

    console.log(service);

    expect(service).toBeDefined();
  });

  it('should get the mocked instance of STATE', () => {
    spectator = createComponent({ providers: [{ provide: STATE, useClass: StateMock }] });

    const service = spectator.inject(STATE);

    console.log(service);

    expect(service instanceof StateMock).toBeTrue();
  });
});
