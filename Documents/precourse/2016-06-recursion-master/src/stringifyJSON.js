// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  	var result= [];
  // your code goes here
  if(typeof obj === 'number' || typeof obj === 'boolean') {
  	//console.log("1st", json)
  	return "" + obj;
  } else if (typeof obj === 'string') {
  	return '"' + obj + '"';
  } else if (obj === null) {
  	return 'null';
  } else if (Array.isArray(obj)) {
  	console.log("arr", obj)
  	for(var i = 0; i < obj.length; i++) {
  		result.push(stringifyJSON(obj[i]));
  	}
  	return "[" + result.join(',') + "]";
  } else if (typeof obj === 'object') {
  	for(var key in obj) {
  		console.log(key)
  		if(!(typeof obj[key] === 'function') && obj[key] !== undefined)
  		result.push(stringifyJSON(key) + ":" + stringifyJSON(obj[key]));
  	}
  	return '{' + result.join(',') + '}';
  } 
  return result;
};
