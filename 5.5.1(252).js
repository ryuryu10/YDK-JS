var MyModules = (function Manager() {
    var modules = {};

    function define(name, deps, impl) {
        console.log('name : ' + name);
        console.log('deps : ' + deps);
        console.log('impl : ' + impl);
        
        for(var i=0; i<deps.length; i++) {
            deps[i] = modules[deps[i]];
        }
        modules[name] = impl.apply( impl, deps );
        console.log('-----------');
    }
    function get(name) {
        return modules[name];
    }

    return {
        define: define,
        get: get
    };
})();

MyModules.define( "bar", [], function(){
    function hello(who) {
        return 'Let me introde' + who;
    }

    return {
        hello : hello
    };
} );

MyModules.define( "foo", ["bar"], function(){
    var hungry = "hippo";
    function awesome(who) {
        console.log( bar.hello( hungry ).toUpperCase() );
    }

    return {
        awesome : awesome
    };
} );

var bar = MyModules.get( "bar" );
var foo = MyModules.get( "foo" );

console.log(
    bar.hello( "hippo" )
);

foo.awesome();