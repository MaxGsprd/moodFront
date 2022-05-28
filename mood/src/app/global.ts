import { Injectable, Input } from "@angular/core";
import { UserDetails } from "./models/out/UserDetails";

@Injectable()
export class Globals {
    
  @Input()  user: UserDetails | undefined;
}