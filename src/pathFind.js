function pathFind (path, object) {
  if (path) return object[path]
  else return pathFind()
}







module.exports = { pathFind }
