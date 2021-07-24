import { Plant } from "./plant";
import { User } from "./user";

export class Garden {
  _id: string = '';
  user: User = new User();
  garden : Plant[] = [];
  created: Date = new Date();
  note: string = '';
}
