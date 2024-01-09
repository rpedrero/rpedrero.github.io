import {Entity} from "./entity.interface";

export interface Todo extends Entity {
  title: string;
  description: string | null;
  status: boolean;
  dateDone: Date | null;
}
