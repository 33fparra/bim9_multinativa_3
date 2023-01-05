export class User{
    constructor(
        public _id: string,
        public fullname: string,
        public email: string,
        public createdAt: any,
        public photo: string,
        public active: Boolean
    ){}
}