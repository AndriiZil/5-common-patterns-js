function Singleton(db) {
    if (!Singleton.instance) {
        Singleton.instance = this;
        this.db = db;
    }
    return Singleton.instance;
}

console.log(new Singleton('mongo')); // Singleton { db: 'mongo' }

console.log(new Singleton('postgres')); // Singleton { db: 'mongo' }
