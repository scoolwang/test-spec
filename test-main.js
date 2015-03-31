(function(__karma__, seajs) {
    var tests = [],
        file;

    var  alias = {};
    for (file in __karma__.files) {
        if (__karma__.files.hasOwnProperty(file)) {

            var name = file.match(/([^.]+)\.js/)[1]; //获取src目录下的文件路径作为seajs模块的key
            alias[name] = name;
            tests.push(name)
        }
    }

    seajs.config({
        alias: alias
    })

    var __start = __karma__.start;
    __karma__.start = function() {
        seajs.use(['testfile/test'], function() {
            __start.call(); //要在seajs模块载入后调用,否则会加载不到任何测试用例
        });        
    };


})(window.__karma__, seajs);