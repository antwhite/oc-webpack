import HelloService from '../shared/services/helloservice';

export function data(context, callback) {
  const helloService = new HelloService(context);

  return helloService.sayHello(context.params.name, function(err, result) {
    if (err) {
      return callback(new Error('Error Rendering Component'));
    }
    return callback(null, result);
  });
}

if (typeof __webpack_require__ === 'function') {
  require("file?name=./hello-world/[name].[ext]!./package.json");
  require("file?name=./hello-world/[name].[ext]!./template.jade");
}