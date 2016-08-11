class HelloService {
  constructor(context) {
  }

  sayHello(name, cb) {
    return cb(null, {name, date: new Date()});
  }
}
export default HelloService;