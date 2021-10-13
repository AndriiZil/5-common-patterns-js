class Singleton {
    constructor() {
        if (!Singleton.instance) {
            Singleton.instance = this;
        }
        return Singleton.instance;
    }

    static getInstance() {
        return this.instance;
    }
}

console.log(Singleton.getInstance());
