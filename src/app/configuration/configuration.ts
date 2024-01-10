import {InjectionToken} from "@angular/core";
import {environment} from "../../environments/environment";
import {TodoRestCrud} from "../crud/todo.rest.crud";
import {HttpClient} from "@angular/common/http";
import {TodoMockCrud} from "../crud/todo.mock.crud";

//REST configuration interface
export interface RestConfiguration {
  apiUrl: string;
  todoResourceUri: string;
}
//Injection token to inject REST configuration.
export const REST_CONFIGURATION_TOKEN: InjectionToken<RestConfiguration> = new InjectionToken<RestConfiguration>('RestConfiguration');

//Factory to inject Todos CRUD.
export const TodoCrudFactory = (httpClient: HttpClient, restConfiguration: RestConfiguration) => {
  return (environment.localStorage) ? new TodoMockCrud() : new TodoRestCrud(httpClient, restConfiguration);
}
