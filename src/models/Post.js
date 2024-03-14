export default class Post{
    id;
    title;
    body;

    constructor(id, title, body) {
        this.id = id;
        this.title = title;
        this.body = body;
    }

    get id() {
        return this.id;
    }

    set id(value) {
        this.id = value;
    }

    get title() {
        return this.title;
    }

    set title(value) {
        this.title = value;
    }

    get body() {
        return this.body;
    }

    set body(value) {
        this.body = value;
    }
}