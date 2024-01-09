import {Todo} from "../entity/todo";
import {HttpClient} from "@angular/common/http";
import {RestCrud} from "./rest.crud";
import {RestConfiguration} from "../configuration/rest.configuration.interface";
import {Inject, Injectable} from "@angular/core";
import {REST_CONFIGURATION_TOKEN} from "../configuration/tokens";

@Injectable()
export class TodoRestCrud extends RestCrud<Todo> {
  constructor(httpClient: HttpClient, @Inject(REST_CONFIGURATION_TOKEN) restConfiguration: RestConfiguration) {
    super(httpClient, `${restConfiguration.apiUrl}${restConfiguration.todoResourceUri}/`);
  }
}
