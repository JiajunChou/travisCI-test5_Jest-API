function randocall(fn) {
  return fn(Math.floor(Math.random() * 6 + 1));
}
module.exports = randocall;