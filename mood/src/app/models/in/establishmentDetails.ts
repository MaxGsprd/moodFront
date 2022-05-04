export interface establishmentDetails {
    id:number;
    name: string;
    description: string;
    // address: Address;
    // images: Array<Image>;
    note: any;
    comments: Array<Comment>;
    category: number;

    //Temporary
    imageTemp?: string;
}