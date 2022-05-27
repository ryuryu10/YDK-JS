function foo() {
    var a = 2;
    function baz() {
        console.log(a);
    }
    Bar(baz);
}

function bar(fn) {
    fn();
}