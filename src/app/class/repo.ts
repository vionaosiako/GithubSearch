export class Repo {
    html_url: String;
    name:string;
    description:string;
    homepage:string;


    constructor(html_url:string, name:string, description:string, homepage:string){

        this.html_url = html_url;
        this.name = name;
        this.description = description;
        this.homepage = homepage;
    }
}

    
