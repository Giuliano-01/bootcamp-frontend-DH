const storage = {
    save: ({key, value}) =>{
        localStorage.setItem(key, value);
    },
    get: ({key}) =>{
        return localStorage.getItem(key);
    }
}

module.exports = storage;