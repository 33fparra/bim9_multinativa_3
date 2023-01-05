export class user{
    _id = ''
    username = ''

    constructor(_id: string, username: string){
        this._id = _id
        this.username = username
    }
    
    public get getId() : string {
        return this._id
    }

    public set setId(id : string) {
        this._id = id;
    }
    

    public get getUsername() : string{
        return this.username
    }

    public set setUsername(uname : string) {
        this.username = uname;
    }
    

    public getInfo() : string{
        return 'User with id: ' + this.getId + ' has the following username: ' + this.getUsername
    }

    
}