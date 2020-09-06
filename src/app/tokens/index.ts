import { InjectionToken } from '@angular/core';
import { IStateService } from 'angular-ui-router';

export const STATE = new InjectionToken<IStateService>('AngularJS State');
