export class User {
    avatar_url:string;
    name:string;
    login:string;
    following:number;
    followers:number;
    bio:string;
    url:string;
    
    constructor(avatar_url:string,name:string,login:string, following:number,followers:number,bio:string,url:string ){

        this.avatar_url=avatar_url;
        this.name=name;
        this.login=login;
        this.following = following;
        this.followers=followers;
        this.bio=bio;
        this.url=url;
        
    }
}
