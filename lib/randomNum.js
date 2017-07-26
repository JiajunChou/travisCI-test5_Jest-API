function randocall(fn) {
  return fn(Math.floor(Math.random() * 100 + 1));
}
module.exports = randocall;