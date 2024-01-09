import {Entity} from "../entity/entity.interface";
import {CrudInterface} from "./crud.interface";
import {Observable, of} from "rxjs";

export class MockCrud<T extends Entity> extends CrudInterface<T> {
  private static nextId = 1;

  private entries: Map<Number, T>;

  constructor() {
    super();

    this.entries = new Map<Number, T>();
  }

  public create(entity: T): Observable<T | undefined> {
    entity.id = MockCrud.nextId++;

    this.entries.set(entity.id, entity);

    return of(entity);
  }
  public get(id: Number): Observable<T | undefined> {
    return of(this.entries.get(id));
  }
  public getAll(): Observable<T[]> {
    return of(Array.from(this.entries.values()));
  }
  public update(entity: T): Observable<T> {
    let id = entity.id;
    if(!this.entries.has(id)) {
      throw new Error("Todo with specified ID does not exist.");
    }
    else {
      this.entries.set(id, entity);

      let entry = this.entries.get(id)!;

      return of(entry);
    }
  }
}
