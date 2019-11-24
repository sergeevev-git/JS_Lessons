function SayName(name) {
    let message = "My name is" + name;
    return message;
}

let arr = [5,-3,6,-5,0,-7,8,9];
let result = arr.reduce(function(sum,elem) {
    return sum + elem;
})

let assert = require('chai').assert;

describe("SayName", function() { //SayName здесь это просто название теста на выводе
    
    it("Получаем фразу с новым именем", function() {
        assert.typeOf(SayName("Masha"), 'string');
    });
});


describe("arr", function() { //SayName здесь это просто название теста на выводе
    
    it("Получаем сумму массива", function() {
        assert.equal(result, 14);
    });
});