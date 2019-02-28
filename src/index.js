function add(num1, num2) {
    if(!num1 || !num2) {
        throw new Error('Number required is missing');
    }
    return num1 + num2;
}

module.exports = {
    add
}