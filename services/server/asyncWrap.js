// @flow

/* eslint-disable valid-jsdoc */

/**
 * Returns a route handler for Express that calls the passed in function
 * @param  {Function} fn The asynchronous the route needs to call
 * @return {Promise}
 */
module.exports = function(fn) {
  if (fn.length <= 3) {
    return function(req, res, next) {
      return fn(req, res, next).catch(next);
    };
  } else {
    return function(err, req, res, next) {
      return fn(err, req, res, next).catch(next);
    };
  }
};
