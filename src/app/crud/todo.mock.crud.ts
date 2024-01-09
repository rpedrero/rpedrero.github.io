import {MockCrud} from "./mock.crud";
import {Todo} from "../entity/todo";
import {Injectable} from "@angular/core";

@Injectable()
export class TodoMockCrud extends MockCrud<Todo> {
  constructor() {
    super();

    this.create({
      id: 1,
      title: "Write a specifications document",
      description: "A specifications document is required so the developers understand what they're expected to do.",
      dateDone: new Date(),
      status: true
    });

    this.create({
      id: 2,
      title: "Develop features",
      description: "Developers have to develop what they're asked to develop",
      dateDone: null,
      status: false
    });

    this.create({
      id: 3,
      title: "Perform functional tests",
      description: "Testing is doubting!",
      dateDone: null,
      status: false
    });

    this.create({
      id: 4,
      title: "Deliver product",
      description: null,
      dateDone: new Date(),
      status: true
    });
  }
}
