import { UserDetails } from "./UserDetails";

export class CommentDetails {
    title : string | undefined;
    content : string | undefined;
    groupType : String | undefined;
    createdDate : string | undefined;
    user: UserDetails | undefined;
}