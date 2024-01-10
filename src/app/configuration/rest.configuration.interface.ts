import {InjectionToken} from "@angular/core";

export interface RestConfiguration {
  apiUrl: string;
  todoResourceUri: string;
}
export const REST_CONFIGURATION_TOKEN: InjectionToken<RestConfiguration> = new InjectionToken<RestConfiguration>('RestConfiguration');
