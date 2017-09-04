function List() {
    this.listSize = 0;
    this.pos = 0;
    this.dataStore = [];
    this.clear = clear;
    this.find = find;
    this.toString = toString;
    this.insert = insert;
    this.append = append;
    this.remove = remove;
    this.length = length;
    this.contains = contains;
}

function append(el) {
    this.dataStore[this.listSize++] = el;
}

function find(el) {
    return this.dateStore.indexOf(el);
}

function remove(el) {
    const elPos = this.find(el);
    if (elPos > -1) {
        this.dataStore.splice(elPos, 1);
        --this.listSize;
        return true;
    }
    return false;
}

function length() {
    return this.listSize;
}

function toString() {
    return this.dataStore;
}

function insert(el, pos) {
    this.dataStore.splice(el, 0, pos);
    ++this.listSize;
    return true;
}

function clear() {
    delete this.dataStore;
    this.dataStore = [];
    this.listSize = 0;
}

function contains(el) {
    return this.dataStore.includes(el);
}
