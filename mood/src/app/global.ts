import { Injectable } from "@angular/core";
import { UserDetails } from "./models/out/UserDetails";

@Injectable()
export class Globals {
    user : UserDetails | undefined;
}