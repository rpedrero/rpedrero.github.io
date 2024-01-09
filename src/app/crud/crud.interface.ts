import {Observable} from "rxjs";
import {Entity} from "../entity/entity.interface";

export abstract class CrudInterface<T extends Entity> {
  public abstract create(entity: T): Observable<T | undefined>;
  public abstract get(id: Number): Observable<T | undefined>;
  public abstract getAll(): Observable<T[]>;
  public abstract update(entity: T): Observable<T>;
}
