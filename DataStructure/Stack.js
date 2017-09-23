function Stack() {
    let items = [];

    this.push = function (element) {
        items.push(element)
    };

    this.pop = function () {
        return items.pop();
    };

    this.peek = function () {
        return items[items.length - 1];
    };

    this.isEmpty = function () {
        return items.length === 0;
    };

    this.size = function () {
        return items.length;
    };

    this.clear = function () {
        items = [];
    };

    this.print = function () {
        console.log(items.toString())
    }
}


//Covert decimal to binary using Stack
function divideBy2(dec) {
    let remStack = new Stack(),
        rem,
        binaryString = '';

    while (dec > 0) {
        rem = Math.floor(dec % 2);
        remStack.push(rem);
        dec = Math.floor(dec / 2);
    }

    while (!remStack.isEmpty()) {
        binaryString += remStack.pop();
    }

    return binaryString;
}


//test divideBy2()
console.log(divideBy2(233));


//baseConverter
function baseConverter(dec, base) {
    let remStack = new Stack(),
        rem,
        baseString = '',
        digits = '012345679ABCDEF';

    while (dec > 0) {
        rem = Math.floor(dec % base);
        remStack.push(rem);
        dec = Math.floor(dec / base);
    }

    while(!remStack.isEmpty()) {
        baseString += digits[remStack.pop()];
    }

    return baseString;
}

//test baseConverter()
console.log(baseConverter(17,16));
console.log(baseConverter(233,2));