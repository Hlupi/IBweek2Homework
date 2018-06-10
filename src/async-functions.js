function giveItBackLater(value, callback) {
  function loadComplete() {
    callback(value)
  }
    setTimeout(loadComplete, 200)
}

function promiseToGiveItBackLater(value) {
  return new Promise((resolve,reject) => {
    function loadComplete() {
      resolve(value)
    }
      setTimeout(loadComplete)
  })
}

function addSomePromises(somePromise) {

}

module.exports = {giveItBackLater, promiseToGiveItBackLater, addSomePromises}
