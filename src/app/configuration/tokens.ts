import {InjectionToken} from "@angular/core";
import {Todo} from "../entity/todo";
import {CrudInterface} from "../crud/crud.interface";
import {TodoServiceInterface} from "../service/todo.service.interface";
import {RestConfiguration} from "./rest.configuration.interface";

export const TODO_CRUD_TOKEN: InjectionToken<CrudInterface<Todo>> = new InjectionToken<CrudInterface<Todo>>('TodoCrud');
export const TODO_SERVICE_TOKEN: InjectionToken<TodoServiceInterface> = new InjectionToken<TodoServiceInterface>('TodoService');
export const REST_CONFIGURATION_TOKEN: InjectionToken<RestConfiguration> = new InjectionToken<RestConfiguration>('RestConfiguration');
