import { LocalisationDetails } from "./LocalisationDetails";
import { CommentDetails } from "./CommentDetails";

export class EstablishmentDetails {
    name : String | undefined;
    description : String | undefined;
    address : LocalisationDetails | undefined;
    images : Array<any> | undefined;
    note : Number | undefined;
    comments : Array<CommentDetails> | undefined;
    category : Number | undefined;
}