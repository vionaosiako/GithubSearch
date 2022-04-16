export class Repo {
    html_url: String;
    title:string;
    about:string;
    language:string;


    constructor(html_url:string, title:string, about:string, language:string){

        this.html_url = html_url;
        this.title = title;
        this.about = about;
        this.language = language;
    }
}

    
