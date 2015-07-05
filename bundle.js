/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Just a global file for central configuration of the application. Loads global components, CSS,
	 * and the main function, and then calls the main function to start the application.
	 */
	
	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }
	
	var _babelPolyfill = __webpack_require__(1);
	
	var polyfill = _interopRequireWildcard(_babelPolyfill);
	
	var _srcMain = __webpack_require__(98);
	
	var _srcMain2 = _interopRequireDefault(_srcMain);
	
	var urlSplit = window.location.href.split('#');
	
	var cvars = {
	    debugMode: {
	        enabled: false,
	        stage: {
	            enabled: false,
	            number: -1
	        }
	    },
	    features: {
	        randomBlocks: true
	    }
	};
	
	if (urlSplit.length > 1) {
	    var params = urlSplit[1].split(',');
	
	    var _iteratorNormalCompletion = true;
	    var _didIteratorError = false;
	    var _iteratorError = undefined;
	
	    try {
	        for (var _iterator = params[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	            var parameter = _step.value;
	
	            if (parameter.indexOf('debug_stage') != -1) {
	                cvars.debugMode.enabled = true;
	                cvars.debugMode.stage.enabled = true;
	                cvars.debugMode.stage.number = Number(parameter.split('=')[1]);
	            }
	
	            if (parameter == 'random_blocks') {
	                cvars.features.randomBlocks = true;
	            }
	        }
	    } catch (err) {
	        _didIteratorError = true;
	        _iteratorError = err;
	    } finally {
	        try {
	            if (!_iteratorNormalCompletion && _iterator['return']) {
	                _iterator['return']();
	            }
	        } finally {
	            if (_didIteratorError) {
	                throw _iteratorError;
	            }
	        }
	    }
	}
	
	var _main = (0, _srcMain2['default'])(cvars);
	
	var debugStage = _main.debugStage;
	var playGame = _main.playGame;
	
	if (!cvars.debugMode.enabled) {
	    (function () {
	
	        var startGame = function startGame() {
	            var mainHandle = document.getElementById('main-handle');
	            while (mainHandle.children.length > 0) {
	                mainHandle.removeChild(mainHandle.children[0]);
	            }
	
	            setTimeout(function () {
	                playGame({ onRestart: startGame });
	            }, 1);
	        };
	
	        startGame();
	    })();
	} else {
	    if (cvars.debugMode.stage.enabled) {
	        debugStage(cvars.debugMode.stage.number);
	    }
	}

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(2);


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(3);


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module, global) {"use strict";
	
	var _toolsProtectJs2 = __webpack_require__(5);
	
	var _toolsProtectJs3 = _interopRequireDefault(_toolsProtectJs2);
	
	__webpack_require__(8);
	
	__webpack_require__(97);
	
	_toolsProtectJs3["default"](module);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	if (global._babelPolyfill) {
	  throw new Error("only one instance of babel/polyfill is allowed");
	}
	global._babelPolyfill = true;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module), (function() { return this; }())))

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__dirname) {"use strict";
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _path = __webpack_require__(6);
	
	var _path2 = _interopRequireDefault(_path);
	
	var root = _path2["default"].resolve(__dirname, "../../../");
	
	exports["default"] = function (module) {
	  if (module.parent && module.parent.filename.indexOf(root) !== 0) {
	    throw new Error("Don't hotlink internal Babel files.");
	  }
	};
	
	module.exports = exports["default"];
	/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.
	
	// resolves . and .. elements in a path array with directory names there
	// must be no slashes, empty elements, or device names (c:\) in the array
	// (so also no leading and trailing slashes - it does not distinguish
	// relative and absolute paths)
	function normalizeArray(parts, allowAboveRoot) {
	  // if the path tries to go above the root, `up` ends up > 0
	  var up = 0;
	  for (var i = parts.length - 1; i >= 0; i--) {
	    var last = parts[i];
	    if (last === '.') {
	      parts.splice(i, 1);
	    } else if (last === '..') {
	      parts.splice(i, 1);
	      up++;
	    } else if (up) {
	      parts.splice(i, 1);
	      up--;
	    }
	  }
	
	  // if the path is allowed to go above the root, restore leading ..s
	  if (allowAboveRoot) {
	    for (; up--; up) {
	      parts.unshift('..');
	    }
	  }
	
	  return parts;
	}
	
	// Split a filename into [root, dir, basename, ext], unix version
	// 'root' is just a slash, or nothing.
	var splitPathRe =
	    /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
	var splitPath = function(filename) {
	  return splitPathRe.exec(filename).slice(1);
	};
	
	// path.resolve([from ...], to)
	// posix version
	exports.resolve = function() {
	  var resolvedPath = '',
	      resolvedAbsolute = false;
	
	  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
	    var path = (i >= 0) ? arguments[i] : process.cwd();
	
	    // Skip empty and invalid entries
	    if (typeof path !== 'string') {
	      throw new TypeError('Arguments to path.resolve must be strings');
	    } else if (!path) {
	      continue;
	    }
	
	    resolvedPath = path + '/' + resolvedPath;
	    resolvedAbsolute = path.charAt(0) === '/';
	  }
	
	  // At this point the path should be resolved to a full absolute path, but
	  // handle relative paths to be safe (might happen when process.cwd() fails)
	
	  // Normalize the path
	  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
	    return !!p;
	  }), !resolvedAbsolute).join('/');
	
	  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
	};
	
	// path.normalize(path)
	// posix version
	exports.normalize = function(path) {
	  var isAbsolute = exports.isAbsolute(path),
	      trailingSlash = substr(path, -1) === '/';
	
	  // Normalize the path
	  path = normalizeArray(filter(path.split('/'), function(p) {
	    return !!p;
	  }), !isAbsolute).join('/');
	
	  if (!path && !isAbsolute) {
	    path = '.';
	  }
	  if (path && trailingSlash) {
	    path += '/';
	  }
	
	  return (isAbsolute ? '/' : '') + path;
	};
	
	// posix version
	exports.isAbsolute = function(path) {
	  return path.charAt(0) === '/';
	};
	
	// posix version
	exports.join = function() {
	  var paths = Array.prototype.slice.call(arguments, 0);
	  return exports.normalize(filter(paths, function(p, index) {
	    if (typeof p !== 'string') {
	      throw new TypeError('Arguments to path.join must be strings');
	    }
	    return p;
	  }).join('/'));
	};
	
	
	// path.relative(from, to)
	// posix version
	exports.relative = function(from, to) {
	  from = exports.resolve(from).substr(1);
	  to = exports.resolve(to).substr(1);
	
	  function trim(arr) {
	    var start = 0;
	    for (; start < arr.length; start++) {
	      if (arr[start] !== '') break;
	    }
	
	    var end = arr.length - 1;
	    for (; end >= 0; end--) {
	      if (arr[end] !== '') break;
	    }
	
	    if (start > end) return [];
	    return arr.slice(start, end - start + 1);
	  }
	
	  var fromParts = trim(from.split('/'));
	  var toParts = trim(to.split('/'));
	
	  var length = Math.min(fromParts.length, toParts.length);
	  var samePartsLength = length;
	  for (var i = 0; i < length; i++) {
	    if (fromParts[i] !== toParts[i]) {
	      samePartsLength = i;
	      break;
	    }
	  }
	
	  var outputParts = [];
	  for (var i = samePartsLength; i < fromParts.length; i++) {
	    outputParts.push('..');
	  }
	
	  outputParts = outputParts.concat(toParts.slice(samePartsLength));
	
	  return outputParts.join('/');
	};
	
	exports.sep = '/';
	exports.delimiter = ':';
	
	exports.dirname = function(path) {
	  var result = splitPath(path),
	      root = result[0],
	      dir = result[1];
	
	  if (!root && !dir) {
	    // No dirname whatsoever
	    return '.';
	  }
	
	  if (dir) {
	    // It has a dirname, strip trailing slash
	    dir = dir.substr(0, dir.length - 1);
	  }
	
	  return root + dir;
	};
	
	
	exports.basename = function(path, ext) {
	  var f = splitPath(path)[2];
	  // TODO: make this comparison case-insensitive on windows?
	  if (ext && f.substr(-1 * ext.length) === ext) {
	    f = f.substr(0, f.length - ext.length);
	  }
	  return f;
	};
	
	
	exports.extname = function(path) {
	  return splitPath(path)[3];
	};
	
	function filter (xs, f) {
	    if (xs.filter) return xs.filter(f);
	    var res = [];
	    for (var i = 0; i < xs.length; i++) {
	        if (f(xs[i], i, xs)) res.push(xs[i]);
	    }
	    return res;
	}
	
	// String.prototype.substr - negative index don't work in IE8
	var substr = 'ab'.substr(-1) === 'b'
	    ? function (str, start, len) { return str.substr(start, len) }
	    : function (str, start, len) {
	        if (start < 0) start = str.length + start;
	        return str.substr(start, len);
	    }
	;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ },
/* 7 */
/***/ function(module, exports) {

	// shim for using process in browser
	
	var process = module.exports = {};
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = setTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            currentQueue[queueIndex].run();
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    clearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        setTimeout(drainQueue, 0);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	// TODO(shtylman)
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(9);
	__webpack_require__(26);
	__webpack_require__(30);
	__webpack_require__(32);
	__webpack_require__(34);
	__webpack_require__(36);
	__webpack_require__(37);
	__webpack_require__(38);
	__webpack_require__(39);
	__webpack_require__(40);
	__webpack_require__(41);
	__webpack_require__(42);
	__webpack_require__(43);
	__webpack_require__(44);
	__webpack_require__(45);
	__webpack_require__(49);
	__webpack_require__(50);
	__webpack_require__(51);
	__webpack_require__(52);
	__webpack_require__(54);
	__webpack_require__(55);
	__webpack_require__(58);
	__webpack_require__(59);
	__webpack_require__(61);
	__webpack_require__(63);
	__webpack_require__(64);
	__webpack_require__(65);
	__webpack_require__(66);
	__webpack_require__(67);
	__webpack_require__(68);
	__webpack_require__(72);
	__webpack_require__(75);
	__webpack_require__(76);
	__webpack_require__(78);
	__webpack_require__(79);
	__webpack_require__(81);
	__webpack_require__(82);
	__webpack_require__(83);
	__webpack_require__(85);
	__webpack_require__(86);
	__webpack_require__(87);
	__webpack_require__(88);
	__webpack_require__(89);
	__webpack_require__(91);
	__webpack_require__(92);
	__webpack_require__(93);
	__webpack_require__(95);
	__webpack_require__(96);
	module.exports = __webpack_require__(10).core;


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var $                = __webpack_require__(10)
	  , cel              = __webpack_require__(12)
	  , cof              = __webpack_require__(13)
	  , $def             = __webpack_require__(17)
	  , invoke           = __webpack_require__(19)
	  , arrayMethod      = __webpack_require__(20)
	  , IE_PROTO         = __webpack_require__(16).safe('__proto__')
	  , assert           = __webpack_require__(22)
	  , assertObject     = assert.obj
	  , ObjectProto      = Object.prototype
	  , html             = $.html
	  , A                = []
	  , _slice           = A.slice
	  , _join            = A.join
	  , classof          = cof.classof
	  , has              = $.has
	  , defineProperty   = $.setDesc
	  , getOwnDescriptor = $.getDesc
	  , defineProperties = $.setDescs
	  , isFunction       = $.isFunction
	  , isObject         = $.isObject
	  , toObject         = $.toObject
	  , toLength         = $.toLength
	  , toIndex          = $.toIndex
	  , IE8_DOM_DEFINE   = false
	  , $indexOf         = __webpack_require__(23)(false)
	  , $forEach         = arrayMethod(0)
	  , $map             = arrayMethod(1)
	  , $filter          = arrayMethod(2)
	  , $some            = arrayMethod(3)
	  , $every           = arrayMethod(4);
	
	if(!$.DESC){
	  try {
	    IE8_DOM_DEFINE = defineProperty(cel('div'), 'x',
	      {get: function(){ return 8; }}
	    ).x == 8;
	  } catch(e){ /* empty */ }
	  $.setDesc = function(O, P, Attributes){
	    if(IE8_DOM_DEFINE)try {
	      return defineProperty(O, P, Attributes);
	    } catch(e){ /* empty */ }
	    if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	    if('value' in Attributes)assertObject(O)[P] = Attributes.value;
	    return O;
	  };
	  $.getDesc = function(O, P){
	    if(IE8_DOM_DEFINE)try {
	      return getOwnDescriptor(O, P);
	    } catch(e){ /* empty */ }
	    if(has(O, P))return $.desc(!ObjectProto.propertyIsEnumerable.call(O, P), O[P]);
	  };
	  $.setDescs = defineProperties = function(O, Properties){
	    assertObject(O);
	    var keys   = $.getKeys(Properties)
	      , length = keys.length
	      , i = 0
	      , P;
	    while(length > i)$.setDesc(O, P = keys[i++], Properties[P]);
	    return O;
	  };
	}
	$def($def.S + $def.F * !$.DESC, 'Object', {
	  // 19.1.2.6 / 15.2.3.3 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $.getDesc,
	  // 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	  defineProperty: $.setDesc,
	  // 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
	  defineProperties: defineProperties
	});
	
	  // IE 8- don't enum bug keys
	var keys1 = ('constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,' +
	            'toLocaleString,toString,valueOf').split(',')
	  // Additional keys for getOwnPropertyNames
	  , keys2 = keys1.concat('length', 'prototype')
	  , keysLen1 = keys1.length;
	
	// Create object with `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = cel('iframe')
	    , i      = keysLen1
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  html.appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write('<script>document.F=Object</script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while(i--)delete createDict.prototype[keys1[i]];
	  return createDict();
	};
	function createGetKeys(names, length){
	  return function(object){
	    var O      = toObject(object)
	      , i      = 0
	      , result = []
	      , key;
	    for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	    // Don't enum bug & hidden keys
	    while(length > i)if(has(O, key = names[i++])){
	      ~$indexOf(result, key) || result.push(key);
	    }
	    return result;
	  };
	}
	function Empty(){}
	$def($def.S, 'Object', {
	  // 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	  getPrototypeOf: $.getProto = $.getProto || function(O){
	    O = Object(assert.def(O));
	    if(has(O, IE_PROTO))return O[IE_PROTO];
	    if(isFunction(O.constructor) && O instanceof O.constructor){
	      return O.constructor.prototype;
	    } return O instanceof Object ? ObjectProto : null;
	  },
	  // 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $.getNames = $.getNames || createGetKeys(keys2, keys2.length, true),
	  // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	  create: $.create = $.create || function(O, /*?*/Properties){
	    var result;
	    if(O !== null){
	      Empty.prototype = assertObject(O);
	      result = new Empty();
	      Empty.prototype = null;
	      // add "__proto__" for Object.getPrototypeOf shim
	      result[IE_PROTO] = O;
	    } else result = createDict();
	    return Properties === undefined ? result : defineProperties(result, Properties);
	  },
	  // 19.1.2.14 / 15.2.3.14 Object.keys(O)
	  keys: $.getKeys = $.getKeys || createGetKeys(keys1, keysLen1, false),
	  // 19.1.2.17 / 15.2.3.8 Object.seal(O)
	  seal: function seal(it){
	    return it; // <- cap
	  },
	  // 19.1.2.5 / 15.2.3.9 Object.freeze(O)
	  freeze: function freeze(it){
	    return it; // <- cap
	  },
	  // 19.1.2.15 / 15.2.3.10 Object.preventExtensions(O)
	  preventExtensions: function preventExtensions(it){
	    return it; // <- cap
	  },
	  // 19.1.2.13 / 15.2.3.11 Object.isSealed(O)
	  isSealed: function isSealed(it){
	    return !isObject(it); // <- cap
	  },
	  // 19.1.2.12 / 15.2.3.12 Object.isFrozen(O)
	  isFrozen: function isFrozen(it){
	    return !isObject(it); // <- cap
	  },
	  // 19.1.2.11 / 15.2.3.13 Object.isExtensible(O)
	  isExtensible: function isExtensible(it){
	    return isObject(it); // <- cap
	  }
	});
	
	// 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)
	$def($def.P, 'Function', {
	  bind: function(that /*, args... */){
	    var fn       = assert.fn(this)
	      , partArgs = _slice.call(arguments, 1);
	    function bound(/* args... */){
	      var args   = partArgs.concat(_slice.call(arguments))
	        , constr = this instanceof bound
	        , ctx    = constr ? $.create(fn.prototype) : that
	        , result = invoke(fn, args, ctx);
	      return constr ? ctx : result;
	    }
	    if(fn.prototype)bound.prototype = fn.prototype;
	    return bound;
	  }
	});
	
	// Fix for not array-like ES3 string and DOM objects
	if(!(0 in Object('z') && 'z'[0] == 'z')){
	  $.ES5Object = function(it){
	    return cof(it) == 'String' ? it.split('') : Object(it);
	  };
	}
	
	var buggySlice = true;
	try {
	  if(html)_slice.call(html);
	  buggySlice = false;
	} catch(e){ /* empty */ }
	
	$def($def.P + $def.F * buggySlice, 'Array', {
	  slice: function slice(begin, end){
	    var len   = toLength(this.length)
	      , klass = cof(this);
	    end = end === undefined ? len : end;
	    if(klass == 'Array')return _slice.call(this, begin, end);
	    var start  = toIndex(begin, len)
	      , upTo   = toIndex(end, len)
	      , size   = toLength(upTo - start)
	      , cloned = Array(size)
	      , i      = 0;
	    for(; i < size; i++)cloned[i] = klass == 'String'
	      ? this.charAt(start + i)
	      : this[start + i];
	    return cloned;
	  }
	});
	
	$def($def.P + $def.F * ($.ES5Object != Object), 'Array', {
	  join: function join(){
	    return _join.apply($.ES5Object(this), arguments);
	  }
	});
	
	// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
	$def($def.S, 'Array', {
	  isArray: function(arg){
	    return cof(arg) == 'Array';
	  }
	});
	function createArrayReduce(isRight){
	  return function(callbackfn, memo){
	    assert.fn(callbackfn);
	    var O      = toObject(this)
	      , length = toLength(O.length)
	      , index  = isRight ? length - 1 : 0
	      , i      = isRight ? -1 : 1;
	    if(arguments.length < 2)for(;;){
	      if(index in O){
	        memo = O[index];
	        index += i;
	        break;
	      }
	      index += i;
	      assert(isRight ? index >= 0 : length > index, 'Reduce of empty array with no initial value');
	    }
	    for(;isRight ? index >= 0 : length > index; index += i)if(index in O){
	      memo = callbackfn(memo, O[index], index, this);
	    }
	    return memo;
	  };
	}
	$def($def.P, 'Array', {
	  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
	  forEach: $.each = $.each || function forEach(callbackfn/*, that = undefined */){
	    return $forEach(this, callbackfn, arguments[1]);
	  },
	  // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
	  map: function map(callbackfn/*, that = undefined */){
	    return $map(this, callbackfn, arguments[1]);
	  },
	  // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
	  filter: function filter(callbackfn/*, that = undefined */){
	    return $filter(this, callbackfn, arguments[1]);
	  },
	  // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
	  some: function some(callbackfn/*, that = undefined */){
	    return $some(this, callbackfn, arguments[1]);
	  },
	  // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
	  every: function every(callbackfn/*, that = undefined */){
	    return $every(this, callbackfn, arguments[1]);
	  },
	  // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
	  reduce: createArrayReduce(false),
	  // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
	  reduceRight: createArrayReduce(true),
	  // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
	  indexOf: function indexOf(el /*, fromIndex = 0 */){
	    return $indexOf(this, el, arguments[1]);
	  },
	  // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])
	  lastIndexOf: function(el, fromIndex /* = @[*-1] */){
	    var O      = toObject(this)
	      , length = toLength(O.length)
	      , index  = length - 1;
	    if(arguments.length > 1)index = Math.min(index, $.toInteger(fromIndex));
	    if(index < 0)index = toLength(length + index);
	    for(;index >= 0; index--)if(index in O)if(O[index] === el)return index;
	    return -1;
	  }
	});
	
	// 21.1.3.25 / 15.5.4.20 String.prototype.trim()
	$def($def.P, 'String', {trim: __webpack_require__(24)(/^\s*([\s\S]*\S)?\s*$/, '$1')});
	
	// 20.3.3.1 / 15.9.4.4 Date.now()
	$def($def.S, 'Date', {now: function(){
	  return +new Date;
	}});
	
	function lz(num){
	  return num > 9 ? num : '0' + num;
	}
	
	// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
	// PhantomJS and old webkit had a broken Date implementation.
	var date       = new Date(-5e13 - 1)
	  , brokenDate = !(date.toISOString && date.toISOString() == '0385-07-25T07:06:39.999Z'
	      && __webpack_require__(25)(function(){ new Date(NaN).toISOString(); }));
	$def($def.P + $def.F * brokenDate, 'Date', {toISOString: function(){
	  if(!isFinite(this))throw RangeError('Invalid time value');
	  var d = this
	    , y = d.getUTCFullYear()
	    , m = d.getUTCMilliseconds()
	    , s = y < 0 ? '-' : y > 9999 ? '+' : '';
	  return s + ('00000' + Math.abs(y)).slice(s ? -6 : -4) +
	    '-' + lz(d.getUTCMonth() + 1) + '-' + lz(d.getUTCDate()) +
	    'T' + lz(d.getUTCHours()) + ':' + lz(d.getUTCMinutes()) +
	    ':' + lz(d.getUTCSeconds()) + '.' + (m > 99 ? m : '0' + lz(m)) + 'Z';
	}});
	
	if(classof(function(){ return arguments; }()) == 'Object')cof.classof = function(it){
	  var tag = classof(it);
	  return tag == 'Object' && isFunction(it.callee) ? 'Arguments' : tag;
	};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global = typeof self != 'undefined' ? self : Function('return this')()
	  , core   = {}
	  , defineProperty = Object.defineProperty
	  , hasOwnProperty = {}.hasOwnProperty
	  , ceil  = Math.ceil
	  , floor = Math.floor
	  , max   = Math.max
	  , min   = Math.min;
	// The engine works fine with descriptors? Thank's IE8 for his funny defineProperty.
	var DESC = !!function(){
	  try {
	    return defineProperty({}, 'a', {get: function(){ return 2; }}).a == 2;
	  } catch(e){ /* empty */ }
	}();
	var hide = createDefiner(1);
	// 7.1.4 ToInteger
	function toInteger(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	}
	function desc(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	}
	function simpleSet(object, key, value){
	  object[key] = value;
	  return object;
	}
	function createDefiner(bitmap){
	  return DESC ? function(object, key, value){
	    return $.setDesc(object, key, desc(bitmap, value));
	  } : simpleSet;
	}
	
	function isObject(it){
	  return it !== null && (typeof it == 'object' || typeof it == 'function');
	}
	function isFunction(it){
	  return typeof it == 'function';
	}
	function assertDefined(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	}
	
	var $ = module.exports = __webpack_require__(11)({
	  g: global,
	  core: core,
	  html: global.document && document.documentElement,
	  // http://jsperf.com/core-js-isobject
	  isObject:   isObject,
	  isFunction: isFunction,
	  that: function(){
	    return this;
	  },
	  // 7.1.4 ToInteger
	  toInteger: toInteger,
	  // 7.1.15 ToLength
	  toLength: function(it){
	    return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	  },
	  toIndex: function(index, length){
	    index = toInteger(index);
	    return index < 0 ? max(index + length, 0) : min(index, length);
	  },
	  has: function(it, key){
	    return hasOwnProperty.call(it, key);
	  },
	  create:     Object.create,
	  getProto:   Object.getPrototypeOf,
	  DESC:       DESC,
	  desc:       desc,
	  getDesc:    Object.getOwnPropertyDescriptor,
	  setDesc:    defineProperty,
	  setDescs:   Object.defineProperties,
	  getKeys:    Object.keys,
	  getNames:   Object.getOwnPropertyNames,
	  getSymbols: Object.getOwnPropertySymbols,
	  assertDefined: assertDefined,
	  // Dummy, fix for not array-like ES3 string in es5 module
	  ES5Object: Object,
	  toObject: function(it){
	    return $.ES5Object(assertDefined(it));
	  },
	  hide: hide,
	  def: createDefiner(0),
	  set: global.Symbol ? simpleSet : hide,
	  each: [].forEach
	});
	/* eslint-disable no-undef */
	if(typeof __e != 'undefined')__e = core;
	if(typeof __g != 'undefined')__g = global;

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = function($){
	  $.FW   = true;
	  $.path = $.g;
	  return $;
	};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var $        = __webpack_require__(10)
	  , document = $.g.document
	  , isObject = $.isObject
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var $        = __webpack_require__(10)
	  , TAG      = __webpack_require__(14)('toStringTag')
	  , toString = {}.toString;
	function cof(it){
	  return toString.call(it).slice(8, -1);
	}
	cof.classof = function(it){
	  var O, T;
	  return it == undefined ? it === undefined ? 'Undefined' : 'Null'
	    : typeof (T = (O = Object(it))[TAG]) == 'string' ? T : cof(O);
	};
	cof.set = function(it, tag, stat){
	  if(it && !$.has(it = stat ? it : it.prototype, TAG))$.hide(it, TAG, tag);
	};
	module.exports = cof;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(10).g
	  , store  = __webpack_require__(15)('wks');
	module.exports = function(name){
	  return store[name] || (store[name] =
	    global.Symbol && global.Symbol[name] || __webpack_require__(16).safe('Symbol.' + name));
	};

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var $      = __webpack_require__(10)
	  , SHARED = '__core-js_shared__'
	  , store  = $.g[SHARED] || ($.g[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var sid = 0;
	function uid(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++sid + Math.random()).toString(36));
	}
	uid.safe = __webpack_require__(10).g.Symbol || uid;
	module.exports = uid;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var $          = __webpack_require__(10)
	  , global     = $.g
	  , core       = $.core
	  , isFunction = $.isFunction
	  , $redef     = __webpack_require__(18);
	function ctx(fn, that){
	  return function(){
	    return fn.apply(that, arguments);
	  };
	}
	global.core = core;
	// type bitmap
	$def.F = 1;  // forced
	$def.G = 2;  // global
	$def.S = 4;  // static
	$def.P = 8;  // proto
	$def.B = 16; // bind
	$def.W = 32; // wrap
	function $def(type, name, source){
	  var key, own, out, exp
	    , isGlobal = type & $def.G
	    , isProto  = type & $def.P
	    , target   = isGlobal ? global : type & $def.S
	        ? global[name] : (global[name] || {}).prototype
	    , exports  = isGlobal ? core : core[name] || (core[name] = {});
	  if(isGlobal)source = name;
	  for(key in source){
	    // contains in native
	    own = !(type & $def.F) && target && key in target;
	    // export native or passed
	    out = (own ? target : source)[key];
	    // bind timers to global for call from export context
	    if(type & $def.B && own)exp = ctx(out, global);
	    else exp = isProto && isFunction(out) ? ctx(Function.call, out) : out;
	    // extend global
	    if(target && !own)$redef(target, key, out);
	    // export
	    if(exports[key] != out)$.hide(exports, key, exp);
	    if(isProto)(exports.prototype || (exports.prototype = {}))[key] = out;
	  }
	}
	module.exports = $def;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var $   = __webpack_require__(10)
	  , tpl = String({}.hasOwnProperty)
	  , SRC = __webpack_require__(16).safe('src')
	  , _toString = Function.toString;
	
	function $redef(O, key, val, safe){
	  if($.isFunction(val)){
	    var base = O[key];
	    $.hide(val, SRC, base ? String(base) : tpl.replace(/hasOwnProperty/, String(key)));
	    if(!('name' in val))val.name = key;
	  }
	  if(O === $.g){
	    O[key] = val;
	  } else {
	    if(!safe)delete O[key];
	    $.hide(O, key, val);
	  }
	}
	
	// add fake Function#toString for correct work wrapped methods / constructors
	// with methods similar to LoDash isNative
	$redef(Function.prototype, 'toString', function toString(){
	  return $.has(this, SRC) ? this[SRC] : _toString.call(this);
	});
	
	$.core.inspectSource = function(it){
	  return _toString.call(it);
	};
	
	module.exports = $redef;

/***/ },
/* 19 */
/***/ function(module, exports) {

	// Fast apply
	// http://jsperf.lnkit.com/fast-apply/5
	module.exports = function(fn, args, that){
	  var un = that === undefined;
	  switch(args.length){
	    case 0: return un ? fn()
	                      : fn.call(that);
	    case 1: return un ? fn(args[0])
	                      : fn.call(that, args[0]);
	    case 2: return un ? fn(args[0], args[1])
	                      : fn.call(that, args[0], args[1]);
	    case 3: return un ? fn(args[0], args[1], args[2])
	                      : fn.call(that, args[0], args[1], args[2]);
	    case 4: return un ? fn(args[0], args[1], args[2], args[3])
	                      : fn.call(that, args[0], args[1], args[2], args[3]);
	    case 5: return un ? fn(args[0], args[1], args[2], args[3], args[4])
	                      : fn.call(that, args[0], args[1], args[2], args[3], args[4]);
	  } return              fn.apply(that, args);
	};

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	// 0 -> Array#forEach
	// 1 -> Array#map
	// 2 -> Array#filter
	// 3 -> Array#some
	// 4 -> Array#every
	// 5 -> Array#find
	// 6 -> Array#findIndex
	var $   = __webpack_require__(10)
	  , ctx = __webpack_require__(21);
	module.exports = function(TYPE){
	  var IS_MAP        = TYPE == 1
	    , IS_FILTER     = TYPE == 2
	    , IS_SOME       = TYPE == 3
	    , IS_EVERY      = TYPE == 4
	    , IS_FIND_INDEX = TYPE == 6
	    , NO_HOLES      = TYPE == 5 || IS_FIND_INDEX;
	  return function($this, callbackfn, that){
	    var O      = Object($.assertDefined($this))
	      , self   = $.ES5Object(O)
	      , f      = ctx(callbackfn, that, 3)
	      , length = $.toLength(self.length)
	      , index  = 0
	      , result = IS_MAP ? Array(length) : IS_FILTER ? [] : undefined
	      , val, res;
	    for(;length > index; index++)if(NO_HOLES || index in self){
	      val = self[index];
	      res = f(val, index, O);
	      if(TYPE){
	        if(IS_MAP)result[index] = res;            // map
	        else if(res)switch(TYPE){
	          case 3: return true;                    // some
	          case 5: return val;                     // find
	          case 6: return index;                   // findIndex
	          case 2: result.push(val);               // filter
	        } else if(IS_EVERY)return false;          // every
	      }
	    }
	    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
	  };
	};

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	// Optional / simple context binding
	var assertFunction = __webpack_require__(22).fn;
	module.exports = function(fn, that, length){
	  assertFunction(fn);
	  if(~length && that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  } return function(/* ...args */){
	      return fn.apply(that, arguments);
	    };
	};

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(10);
	function assert(condition, msg1, msg2){
	  if(!condition)throw TypeError(msg2 ? msg1 + msg2 : msg1);
	}
	assert.def = $.assertDefined;
	assert.fn = function(it){
	  if(!$.isFunction(it))throw TypeError(it + ' is not a function!');
	  return it;
	};
	assert.obj = function(it){
	  if(!$.isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};
	assert.inst = function(it, Constructor, name){
	  if(!(it instanceof Constructor))throw TypeError(name + ": use the 'new' operator!");
	  return it;
	};
	module.exports = assert;

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var $ = __webpack_require__(10);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = $.toObject($this)
	      , length = $.toLength(O.length)
	      , index  = $.toIndex(fromIndex, length)
	      , value;
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 24 */
/***/ function(module, exports) {

	'use strict';
	module.exports = function(regExp, replace, isStatic){
	  var replacer = replace === Object(replace) ? function(part){
	    return replace[part];
	  } : replace;
	  return function(it){
	    return String(isStatic ? it : this).replace(regExp, replacer);
	  };
	};

/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    exec();
	    return false;
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var $        = __webpack_require__(10)
	  , setTag   = __webpack_require__(13).set
	  , uid      = __webpack_require__(16)
	  , shared   = __webpack_require__(15)
	  , $def     = __webpack_require__(17)
	  , $redef   = __webpack_require__(18)
	  , keyOf    = __webpack_require__(27)
	  , enumKeys = __webpack_require__(28)
	  , assertObject = __webpack_require__(22).obj
	  , ObjectProto = Object.prototype
	  , DESC     = $.DESC
	  , has      = $.has
	  , $create  = $.create
	  , getDesc  = $.getDesc
	  , setDesc  = $.setDesc
	  , desc     = $.desc
	  , $names   = __webpack_require__(29)
	  , getNames = $names.get
	  , toObject = $.toObject
	  , $Symbol  = $.g.Symbol
	  , setter   = false
	  , TAG      = uid('tag')
	  , HIDDEN   = uid('hidden')
	  , _propertyIsEnumerable = {}.propertyIsEnumerable
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols = shared('symbols')
	  , useNative = $.isFunction($Symbol);
	
	var setSymbolDesc = DESC ? function(){ // fallback for old Android
	  try {
	    return $create(setDesc({}, HIDDEN, {
	      get: function(){
	        return setDesc(this, HIDDEN, {value: false})[HIDDEN];
	      }
	    }))[HIDDEN] || setDesc;
	  } catch(e){
	    return function(it, key, D){
	      var protoDesc = getDesc(ObjectProto, key);
	      if(protoDesc)delete ObjectProto[key];
	      setDesc(it, key, D);
	      if(protoDesc && it !== ObjectProto)setDesc(ObjectProto, key, protoDesc);
	    };
	  }
	}() : setDesc;
	
	function wrap(tag){
	  var sym = AllSymbols[tag] = $.set($create($Symbol.prototype), TAG, tag);
	  DESC && setter && setSymbolDesc(ObjectProto, tag, {
	    configurable: true,
	    set: function(value){
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, desc(1, value));
	    }
	  });
	  return sym;
	}
	
	function defineProperty(it, key, D){
	  if(D && has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))setDesc(it, HIDDEN, desc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = $create(D, {enumerable: desc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return setDesc(it, key, D);
	}
	function defineProperties(it, P){
	  assertObject(it);
	  var keys = enumKeys(P = toObject(P))
	    , i    = 0
	    , l = keys.length
	    , key;
	  while(l > i)defineProperty(it, key = keys[i++], P[key]);
	  return it;
	}
	function create(it, P){
	  return P === undefined ? $create(it) : defineProperties($create(it), P);
	}
	function propertyIsEnumerable(key){
	  var E = _propertyIsEnumerable.call(this, key);
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key]
	    ? E : true;
	}
	function getOwnPropertyDescriptor(it, key){
	  var D = getDesc(it = toObject(it), key);
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	}
	function getOwnPropertyNames(it){
	  var names  = getNames(toObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i)if(!has(AllSymbols, key = names[i++]) && key != HIDDEN)result.push(key);
	  return result;
	}
	function getOwnPropertySymbols(it){
	  var names  = getNames(toObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i)if(has(AllSymbols, key = names[i++]))result.push(AllSymbols[key]);
	  return result;
	}
	
	// 19.4.1.1 Symbol([description])
	if(!useNative){
	  $Symbol = function Symbol(){
	    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor');
	    return wrap(uid(arguments[0]));
	  };
	  $redef($Symbol.prototype, 'toString', function(){
	    return this[TAG];
	  });
	
	  $.create     = create;
	  $.setDesc    = defineProperty;
	  $.getDesc    = getOwnPropertyDescriptor;
	  $.setDescs   = defineProperties;
	  $.getNames   = $names.get = getOwnPropertyNames;
	  $.getSymbols = getOwnPropertySymbols;
	
	  if($.DESC && $.FW)$redef(ObjectProto, 'propertyIsEnumerable', propertyIsEnumerable, true);
	}
	
	var symbolStatics = {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    return keyOf(SymbolRegistry, key);
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	};
	// 19.4.2.2 Symbol.hasInstance
	// 19.4.2.3 Symbol.isConcatSpreadable
	// 19.4.2.4 Symbol.iterator
	// 19.4.2.6 Symbol.match
	// 19.4.2.8 Symbol.replace
	// 19.4.2.9 Symbol.search
	// 19.4.2.10 Symbol.species
	// 19.4.2.11 Symbol.split
	// 19.4.2.12 Symbol.toPrimitive
	// 19.4.2.13 Symbol.toStringTag
	// 19.4.2.14 Symbol.unscopables
	$.each.call((
	    'hasInstance,isConcatSpreadable,iterator,match,replace,search,' +
	    'species,split,toPrimitive,toStringTag,unscopables'
	  ).split(','), function(it){
	    var sym = __webpack_require__(14)(it);
	    symbolStatics[it] = useNative ? sym : wrap(sym);
	  }
	);
	
	setter = true;
	
	$def($def.G + $def.W, {Symbol: $Symbol});
	
	$def($def.S, 'Symbol', symbolStatics);
	
	$def($def.S + $def.F * !useNative, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: getOwnPropertySymbols
	});
	
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setTag($.g.JSON, 'JSON', true);

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(10);
	module.exports = function(object, el){
	  var O      = $.toObject(object)
	    , keys   = $.getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(10);
	module.exports = function(it){
	  var keys       = $.getKeys(it)
	    , getDesc    = $.getDesc
	    , getSymbols = $.getSymbols;
	  if(getSymbols)$.each.call(getSymbols(it), function(key){
	    if(getDesc(it, key).enumerable)keys.push(key);
	  });
	  return keys;
	};

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var $ = __webpack_require__(10)
	  , toString = {}.toString
	  , getNames = $.getNames;
	
	var windowNames = typeof window == 'object' && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];
	
	function getWindowNames(it){
	  try {
	    return getNames(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	}
	
	module.exports.get = function getOwnPropertyNames(it){
	  if(windowNames && toString.call(it) == '[object Window]')return getWindowNames(it);
	  return getNames($.toObject(it));
	};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $def = __webpack_require__(17);
	$def($def.S, 'Object', {assign: __webpack_require__(31)});

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var $        = __webpack_require__(10)
	  , enumKeys = __webpack_require__(28);
	// 19.1.2.1 Object.assign(target, source, ...)
	/* eslint-disable no-unused-vars */
	module.exports = Object.assign || function assign(target, source){
	/* eslint-enable no-unused-vars */
	  var T = Object($.assertDefined(target))
	    , l = arguments.length
	    , i = 1;
	  while(l > i){
	    var S      = $.ES5Object(arguments[i++])
	      , keys   = enumKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)T[key = keys[j++]] = S[key];
	  }
	  return T;
	};

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.10 Object.is(value1, value2)
	var $def = __webpack_require__(17);
	$def($def.S, 'Object', {
	  is: __webpack_require__(33)
	});

/***/ },
/* 33 */
/***/ function(module, exports) {

	module.exports = Object.is || function is(x, y){
	  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
	};

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $def = __webpack_require__(17);
	$def($def.S, 'Object', {setPrototypeOf: __webpack_require__(35).set});

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var $      = __webpack_require__(10)
	  , assert = __webpack_require__(22);
	function check(O, proto){
	  assert.obj(O);
	  assert(proto === null || $.isObject(proto), proto, ": can't set as prototype!");
	}
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} // eslint-disable-line
	    ? function(buggy, set){
	        try {
	          set = __webpack_require__(21)(Function.call, $.getDesc(Object.prototype, '__proto__').set, 2);
	          set({}, []);
	        } catch(e){ buggy = true; }
	        return function setPrototypeOf(O, proto){
	          check(O, proto);
	          if(buggy)O.__proto__ = proto;
	          else set(O, proto);
	          return O;
	        };
	      }()
	    : undefined),
	  check: check
	};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(13)
	  , tmp = {};
	tmp[__webpack_require__(14)('toStringTag')] = 'z';
	if(__webpack_require__(10).FW && cof(tmp) != 'z'){
	  __webpack_require__(18)(Object.prototype, 'toString', function toString(){
	    return '[object ' + cof.classof(this) + ']';
	  }, true);
	}

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	var $        = __webpack_require__(10)
	  , $def     = __webpack_require__(17)
	  , isObject = $.isObject
	  , toObject = $.toObject;
	$.each.call(('freeze,seal,preventExtensions,isFrozen,isSealed,isExtensible,' +
	  'getOwnPropertyDescriptor,getPrototypeOf,keys,getOwnPropertyNames').split(',')
	, function(KEY, ID){
	  var fn     = ($.core.Object || {})[KEY] || Object[KEY]
	    , forced = 0
	    , method = {};
	  method[KEY] = ID == 0 ? function freeze(it){
	    return isObject(it) ? fn(it) : it;
	  } : ID == 1 ? function seal(it){
	    return isObject(it) ? fn(it) : it;
	  } : ID == 2 ? function preventExtensions(it){
	    return isObject(it) ? fn(it) : it;
	  } : ID == 3 ? function isFrozen(it){
	    return isObject(it) ? fn(it) : true;
	  } : ID == 4 ? function isSealed(it){
	    return isObject(it) ? fn(it) : true;
	  } : ID == 5 ? function isExtensible(it){
	    return isObject(it) ? fn(it) : false;
	  } : ID == 6 ? function getOwnPropertyDescriptor(it, key){
	    return fn(toObject(it), key);
	  } : ID == 7 ? function getPrototypeOf(it){
	    return fn(Object($.assertDefined(it)));
	  } : ID == 8 ? function keys(it){
	    return fn(toObject(it));
	  } : __webpack_require__(29).get;
	  try {
	    fn('z');
	  } catch(e){
	    forced = 1;
	  }
	  $def($def.S + $def.F * forced, 'Object', method);
	});

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $    = __webpack_require__(10)
	  , NAME = 'name'
	  , setDesc = $.setDesc
	  , FunctionProto = Function.prototype;
	// 19.2.4.2 name
	NAME in FunctionProto || $.FW && $.DESC && setDesc(FunctionProto, NAME, {
	  configurable: true,
	  get: function(){
	    var match = String(this).match(/^\s*function ([^ (]*)/)
	      , name  = match ? match[1] : '';
	    $.has(this, NAME) || setDesc(this, NAME, $.desc(5, name));
	    return name;
	  },
	  set: function(value){
	    $.has(this, NAME) || setDesc(this, NAME, $.desc(0, value));
	  }
	});

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	var $             = __webpack_require__(10)
	  , HAS_INSTANCE  = __webpack_require__(14)('hasInstance')
	  , FunctionProto = Function.prototype;
	// 19.2.3.6 Function.prototype[@@hasInstance](V)
	if(!(HAS_INSTANCE in FunctionProto))$.setDesc(FunctionProto, HAS_INSTANCE, {value: function(O){
	  if(!$.isFunction(this) || !$.isObject(O))return false;
	  if(!$.isObject(this.prototype))return O instanceof this;
	  // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:
	  while(O = $.getProto(O))if(this.prototype === O)return true;
	  return false;
	}});

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $          = __webpack_require__(10)
	  , isObject   = $.isObject
	  , isFunction = $.isFunction
	  , NUMBER     = 'Number'
	  , $Number    = $.g[NUMBER]
	  , Base       = $Number
	  , proto      = $Number.prototype;
	function toPrimitive(it){
	  var fn, val;
	  if(isFunction(fn = it.valueOf) && !isObject(val = fn.call(it)))return val;
	  if(isFunction(fn = it.toString) && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to number");
	}
	function toNumber(it){
	  if(isObject(it))it = toPrimitive(it);
	  if(typeof it == 'string' && it.length > 2 && it.charCodeAt(0) == 48){
	    var binary = false;
	    switch(it.charCodeAt(1)){
	      case 66 : case 98  : binary = true;
	      case 79 : case 111 : return parseInt(it.slice(2), binary ? 2 : 8);
	    }
	  } return +it;
	}
	if($.FW && !($Number('0o1') && $Number('0b1'))){
	  $Number = function Number(it){
	    return this instanceof $Number ? new Base(toNumber(it)) : toNumber(it);
	  };
	  $.each.call($.DESC ? $.getNames(Base) : (
	      // ES3:
	      'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
	      // ES6 (in case, if modules with ES6 Number statics required before):
	      'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
	      'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
	    ).split(','), function(key){
	      if($.has(Base, key) && !$.has($Number, key)){
	        $.setDesc($Number, key, $.getDesc(Base, key));
	      }
	    }
	  );
	  $Number.prototype = proto;
	  proto.constructor = $Number;
	  __webpack_require__(18)($.g, NUMBER, $Number);
	}

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	var $     = __webpack_require__(10)
	  , $def  = __webpack_require__(17)
	  , abs   = Math.abs
	  , floor = Math.floor
	  , _isFinite = $.g.isFinite
	  , MAX_SAFE_INTEGER = 0x1fffffffffffff; // pow(2, 53) - 1 == 9007199254740991;
	function isInteger(it){
	  return !$.isObject(it) && _isFinite(it) && floor(it) === it;
	}
	$def($def.S, 'Number', {
	  // 20.1.2.1 Number.EPSILON
	  EPSILON: Math.pow(2, -52),
	  // 20.1.2.2 Number.isFinite(number)
	  isFinite: function isFinite(it){
	    return typeof it == 'number' && _isFinite(it);
	  },
	  // 20.1.2.3 Number.isInteger(number)
	  isInteger: isInteger,
	  // 20.1.2.4 Number.isNaN(number)
	  isNaN: function isNaN(number){
	    return number != number;
	  },
	  // 20.1.2.5 Number.isSafeInteger(number)
	  isSafeInteger: function isSafeInteger(number){
	    return isInteger(number) && abs(number) <= MAX_SAFE_INTEGER;
	  },
	  // 20.1.2.6 Number.MAX_SAFE_INTEGER
	  MAX_SAFE_INTEGER: MAX_SAFE_INTEGER,
	  // 20.1.2.10 Number.MIN_SAFE_INTEGER
	  MIN_SAFE_INTEGER: -MAX_SAFE_INTEGER,
	  // 20.1.2.12 Number.parseFloat(string)
	  parseFloat: parseFloat,
	  // 20.1.2.13 Number.parseInt(string, radix)
	  parseInt: parseInt
	});

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	var Infinity = 1 / 0
	  , $def  = __webpack_require__(17)
	  , E     = Math.E
	  , pow   = Math.pow
	  , abs   = Math.abs
	  , exp   = Math.exp
	  , log   = Math.log
	  , sqrt  = Math.sqrt
	  , ceil  = Math.ceil
	  , floor = Math.floor
	  , EPSILON   = pow(2, -52)
	  , EPSILON32 = pow(2, -23)
	  , MAX32     = pow(2, 127) * (2 - EPSILON32)
	  , MIN32     = pow(2, -126);
	function roundTiesToEven(n){
	  return n + 1 / EPSILON - 1 / EPSILON;
	}
	
	// 20.2.2.28 Math.sign(x)
	function sign(x){
	  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
	}
	// 20.2.2.5 Math.asinh(x)
	function asinh(x){
	  return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : log(x + sqrt(x * x + 1));
	}
	// 20.2.2.14 Math.expm1(x)
	function expm1(x){
	  return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : exp(x) - 1;
	}
	
	$def($def.S, 'Math', {
	  // 20.2.2.3 Math.acosh(x)
	  acosh: function acosh(x){
	    return (x = +x) < 1 ? NaN : isFinite(x) ? log(x / E + sqrt(x + 1) * sqrt(x - 1) / E) + 1 : x;
	  },
	  // 20.2.2.5 Math.asinh(x)
	  asinh: asinh,
	  // 20.2.2.7 Math.atanh(x)
	  atanh: function atanh(x){
	    return (x = +x) == 0 ? x : log((1 + x) / (1 - x)) / 2;
	  },
	  // 20.2.2.9 Math.cbrt(x)
	  cbrt: function cbrt(x){
	    return sign(x = +x) * pow(abs(x), 1 / 3);
	  },
	  // 20.2.2.11 Math.clz32(x)
	  clz32: function clz32(x){
	    return (x >>>= 0) ? 31 - floor(log(x + 0.5) * Math.LOG2E) : 32;
	  },
	  // 20.2.2.12 Math.cosh(x)
	  cosh: function cosh(x){
	    return (exp(x = +x) + exp(-x)) / 2;
	  },
	  // 20.2.2.14 Math.expm1(x)
	  expm1: expm1,
	  // 20.2.2.16 Math.fround(x)
	  fround: function fround(x){
	    var $abs  = abs(x)
	      , $sign = sign(x)
	      , a, result;
	    if($abs < MIN32)return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
	    a = (1 + EPSILON32 / EPSILON) * $abs;
	    result = a - (a - $abs);
	    if(result > MAX32 || result != result)return $sign * Infinity;
	    return $sign * result;
	  },
	  // 20.2.2.17 Math.hypot([value1[, value2[, … ]]])
	  hypot: function hypot(value1, value2){ // eslint-disable-line no-unused-vars
	    var sum  = 0
	      , i    = 0
	      , len  = arguments.length
	      , larg = 0
	      , arg, div;
	    while(i < len){
	      arg = abs(arguments[i++]);
	      if(larg < arg){
	        div  = larg / arg;
	        sum  = sum * div * div + 1;
	        larg = arg;
	      } else if(arg > 0){
	        div  = arg / larg;
	        sum += div * div;
	      } else sum += arg;
	    }
	    return larg === Infinity ? Infinity : larg * sqrt(sum);
	  },
	  // 20.2.2.18 Math.imul(x, y)
	  imul: function imul(x, y){
	    var UInt16 = 0xffff
	      , xn = +x
	      , yn = +y
	      , xl = UInt16 & xn
	      , yl = UInt16 & yn;
	    return 0 | xl * yl + ((UInt16 & xn >>> 16) * yl + xl * (UInt16 & yn >>> 16) << 16 >>> 0);
	  },
	  // 20.2.2.20 Math.log1p(x)
	  log1p: function log1p(x){
	    return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : log(1 + x);
	  },
	  // 20.2.2.21 Math.log10(x)
	  log10: function log10(x){
	    return log(x) / Math.LN10;
	  },
	  // 20.2.2.22 Math.log2(x)
	  log2: function log2(x){
	    return log(x) / Math.LN2;
	  },
	  // 20.2.2.28 Math.sign(x)
	  sign: sign,
	  // 20.2.2.30 Math.sinh(x)
	  sinh: function sinh(x){
	    return abs(x = +x) < 1 ? (expm1(x) - expm1(-x)) / 2 : (exp(x - 1) - exp(-x - 1)) * (E / 2);
	  },
	  // 20.2.2.33 Math.tanh(x)
	  tanh: function tanh(x){
	    var a = expm1(x = +x)
	      , b = expm1(-x);
	    return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));
	  },
	  // 20.2.2.34 Math.trunc(x)
	  trunc: function trunc(it){
	    return (it > 0 ? floor : ceil)(it);
	  }
	});

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	var $def    = __webpack_require__(17)
	  , toIndex = __webpack_require__(10).toIndex
	  , fromCharCode = String.fromCharCode
	  , $fromCodePoint = String.fromCodePoint;
	
	// length should be 1, old FF problem
	$def($def.S + $def.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {
	  // 21.1.2.2 String.fromCodePoint(...codePoints)
	  fromCodePoint: function fromCodePoint(x){ // eslint-disable-line no-unused-vars
	    var res = []
	      , len = arguments.length
	      , i   = 0
	      , code;
	    while(len > i){
	      code = +arguments[i++];
	      if(toIndex(code, 0x10ffff) !== code)throw RangeError(code + ' is not a valid code point');
	      res.push(code < 0x10000
	        ? fromCharCode(code)
	        : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00)
	      );
	    } return res.join('');
	  }
	});

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	var $    = __webpack_require__(10)
	  , $def = __webpack_require__(17);
	
	$def($def.S, 'String', {
	  // 21.1.2.4 String.raw(callSite, ...substitutions)
	  raw: function raw(callSite){
	    var tpl = $.toObject(callSite.raw)
	      , len = $.toLength(tpl.length)
	      , sln = arguments.length
	      , res = []
	      , i   = 0;
	    while(len > i){
	      res.push(String(tpl[i++]));
	      if(i < sln)res.push(String(arguments[i]));
	    } return res.join('');
	  }
	});

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	var set   = __webpack_require__(10).set
	  , $at   = __webpack_require__(46)(true)
	  , ITER  = __webpack_require__(16).safe('iter')
	  , $iter = __webpack_require__(47)
	  , step  = $iter.step;
	
	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(48)(String, 'String', function(iterated){
	  set(this, ITER, {o: String(iterated), i: 0});
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var iter  = this[ITER]
	    , O     = iter.o
	    , index = iter.i
	    , point;
	  if(index >= O.length)return step(1);
	  point = $at(O, index);
	  iter.i += point.length;
	  return step(0, point);
	});

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	// true  -> String#at
	// false -> String#codePointAt
	var $ = __webpack_require__(10);
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String($.assertDefined(that))
	      , i = $.toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l
	      || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	        ? TO_STRING ? s.charAt(i) : a
	        : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $                 = __webpack_require__(10)
	  , cof               = __webpack_require__(13)
	  , classof           = cof.classof
	  , assert            = __webpack_require__(22)
	  , assertObject      = assert.obj
	  , SYMBOL_ITERATOR   = __webpack_require__(14)('iterator')
	  , FF_ITERATOR       = '@@iterator'
	  , Iterators         = __webpack_require__(15)('iterators')
	  , IteratorPrototype = {};
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	setIterator(IteratorPrototype, $.that);
	function setIterator(O, value){
	  $.hide(O, SYMBOL_ITERATOR, value);
	  // Add iterator for FF iterator protocol
	  if(FF_ITERATOR in [])$.hide(O, FF_ITERATOR, value);
	}
	
	module.exports = {
	  // Safari has buggy iterators w/o `next`
	  BUGGY: 'keys' in [] && !('next' in [].keys()),
	  Iterators: Iterators,
	  step: function(done, value){
	    return {value: value, done: !!done};
	  },
	  is: function(it){
	    var O      = Object(it)
	      , Symbol = $.g.Symbol;
	    return (Symbol && Symbol.iterator || FF_ITERATOR) in O
	      || SYMBOL_ITERATOR in O
	      || $.has(Iterators, classof(O));
	  },
	  get: function(it){
	    var Symbol = $.g.Symbol
	      , getIter;
	    if(it != undefined){
	      getIter = it[Symbol && Symbol.iterator || FF_ITERATOR]
	        || it[SYMBOL_ITERATOR]
	        || Iterators[classof(it)];
	    }
	    assert($.isFunction(getIter), it, ' is not iterable!');
	    return assertObject(getIter.call(it));
	  },
	  set: setIterator,
	  create: function(Constructor, NAME, next, proto){
	    Constructor.prototype = $.create(proto || IteratorPrototype, {next: $.desc(1, next)});
	    cof.set(Constructor, NAME + ' Iterator');
	  }
	};

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	var $def            = __webpack_require__(17)
	  , $redef          = __webpack_require__(18)
	  , $               = __webpack_require__(10)
	  , cof             = __webpack_require__(13)
	  , $iter           = __webpack_require__(47)
	  , SYMBOL_ITERATOR = __webpack_require__(14)('iterator')
	  , FF_ITERATOR     = '@@iterator'
	  , KEYS            = 'keys'
	  , VALUES          = 'values'
	  , Iterators       = $iter.Iterators;
	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCE){
	  $iter.create(Constructor, NAME, next);
	  function createMethod(kind){
	    function $$(that){
	      return new Constructor(that, kind);
	    }
	    switch(kind){
	      case KEYS: return function keys(){ return $$(this); };
	      case VALUES: return function values(){ return $$(this); };
	    } return function entries(){ return $$(this); };
	  }
	  var TAG      = NAME + ' Iterator'
	    , proto    = Base.prototype
	    , _native  = proto[SYMBOL_ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , _default = _native || createMethod(DEFAULT)
	    , methods, key;
	  // Fix native
	  if(_native){
	    var IteratorPrototype = $.getProto(_default.call(new Base));
	    // Set @@toStringTag to native iterators
	    cof.set(IteratorPrototype, TAG, true);
	    // FF fix
	    if($.FW && $.has(proto, FF_ITERATOR))$iter.set(IteratorPrototype, $.that);
	  }
	  // Define iterator
	  if($.FW || FORCE)$iter.set(proto, _default);
	  // Plug for library
	  Iterators[NAME] = _default;
	  Iterators[TAG]  = $.that;
	  if(DEFAULT){
	    methods = {
	      keys:    IS_SET            ? _default : createMethod(KEYS),
	      values:  DEFAULT == VALUES ? _default : createMethod(VALUES),
	      entries: DEFAULT != VALUES ? _default : createMethod('entries')
	    };
	    if(FORCE)for(key in methods){
	      if(!(key in proto))$redef(proto, key, methods[key]);
	    } else $def($def.P + $def.F * $iter.BUGGY, NAME, methods);
	  }
	};

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $def = __webpack_require__(17)
	  , $at  = __webpack_require__(46)(false);
	$def($def.P, 'String', {
	  // 21.1.3.3 String.prototype.codePointAt(pos)
	  codePointAt: function codePointAt(pos){
	    return $at(this, pos);
	  }
	});

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $    = __webpack_require__(10)
	  , cof  = __webpack_require__(13)
	  , $def = __webpack_require__(17)
	  , toLength = $.toLength;
	
	// should throw error on regex
	$def($def.P + $def.F * !__webpack_require__(25)(function(){ 'q'.endsWith(/./); }), 'String', {
	  // 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])
	  endsWith: function endsWith(searchString /*, endPosition = @length */){
	    if(cof(searchString) == 'RegExp')throw TypeError();
	    var that = String($.assertDefined(this))
	      , endPosition = arguments[1]
	      , len = toLength(that.length)
	      , end = endPosition === undefined ? len : Math.min(toLength(endPosition), len);
	    searchString += '';
	    return that.slice(end - searchString.length, end) === searchString;
	  }
	});

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $    = __webpack_require__(10)
	  , cof  = __webpack_require__(13)
	  , $def = __webpack_require__(17);
	
	$def($def.P, 'String', {
	  // 21.1.3.7 String.prototype.includes(searchString, position = 0)
	  includes: function includes(searchString /*, position = 0 */){
	    if(cof(searchString) == 'RegExp')throw TypeError();
	    return !!~String($.assertDefined(this)).indexOf(searchString, arguments[1]);
	  }
	});

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	var $def = __webpack_require__(17);
	
	$def($def.P, 'String', {
	  // 21.1.3.13 String.prototype.repeat(count)
	  repeat: __webpack_require__(53)
	});

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $ = __webpack_require__(10);
	
	module.exports = function repeat(count){
	  var str = String($.assertDefined(this))
	    , res = ''
	    , n   = $.toInteger(count);
	  if(n < 0 || n == Infinity)throw RangeError("Count can't be negative");
	  for(;n > 0; (n >>>= 1) && (str += str))if(n & 1)res += str;
	  return res;
	};

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $    = __webpack_require__(10)
	  , cof  = __webpack_require__(13)
	  , $def = __webpack_require__(17);
	
	// should throw error on regex
	$def($def.P + $def.F * !__webpack_require__(25)(function(){ 'q'.startsWith(/./); }), 'String', {
	  // 21.1.3.18 String.prototype.startsWith(searchString [, position ])
	  startsWith: function startsWith(searchString /*, position = 0 */){
	    if(cof(searchString) == 'RegExp')throw TypeError();
	    var that  = String($.assertDefined(this))
	      , index = $.toLength(Math.min(arguments[1], that.length));
	    searchString += '';
	    return that.slice(index, index + searchString.length) === searchString;
	  }
	});

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	var $     = __webpack_require__(10)
	  , ctx   = __webpack_require__(21)
	  , $def  = __webpack_require__(17)
	  , $iter = __webpack_require__(47)
	  , call  = __webpack_require__(56);
	$def($def.S + $def.F * !__webpack_require__(57)(function(iter){ Array.from(iter); }), 'Array', {
	  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
	    var O       = Object($.assertDefined(arrayLike))
	      , mapfn   = arguments[1]
	      , mapping = mapfn !== undefined
	      , f       = mapping ? ctx(mapfn, arguments[2], 2) : undefined
	      , index   = 0
	      , length, result, step, iterator;
	    if($iter.is(O)){
	      iterator = $iter.get(O);
	      // strange IE quirks mode bug -> use typeof instead of isFunction
	      result   = new (typeof this == 'function' ? this : Array);
	      for(; !(step = iterator.next()).done; index++){
	        result[index] = mapping ? call(iterator, f, [step.value, index], true) : step.value;
	      }
	    } else {
	      // strange IE quirks mode bug -> use typeof instead of isFunction
	      result = new (typeof this == 'function' ? this : Array)(length = $.toLength(O.length));
	      for(; length > index; index++){
	        result[index] = mapping ? f(O[index], index) : O[index];
	      }
	    }
	    result.length = index;
	    return result;
	  }
	});

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	var assertObject = __webpack_require__(22).obj;
	function close(iterator){
	  var ret = iterator['return'];
	  if(ret !== undefined)assertObject(ret.call(iterator));
	}
	function call(iterator, fn, value, entries){
	  try {
	    return entries ? fn(assertObject(value)[0], value[1]) : fn(value);
	  } catch(e){
	    close(iterator);
	    throw e;
	  }
	}
	call.close = close;
	module.exports = call;

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	var SYMBOL_ITERATOR = __webpack_require__(14)('iterator')
	  , SAFE_CLOSING    = false;
	try {
	  var riter = [7][SYMBOL_ITERATOR]();
	  riter['return'] = function(){ SAFE_CLOSING = true; };
	  Array.from(riter, function(){ throw 2; });
	} catch(e){ /* empty */ }
	module.exports = function(exec){
	  if(!SAFE_CLOSING)return false;
	  var safe = false;
	  try {
	    var arr  = [7]
	      , iter = arr[SYMBOL_ITERATOR]();
	    iter.next = function(){ safe = true; };
	    arr[SYMBOL_ITERATOR] = function(){ return iter; };
	    exec(arr);
	  } catch(e){ /* empty */ }
	  return safe;
	};

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	var $def = __webpack_require__(17);
	$def($def.S, 'Array', {
	  // 22.1.2.3 Array.of( ...items)
	  of: function of(/* ...args */){
	    var index  = 0
	      , length = arguments.length
	      // strange IE quirks mode bug -> use typeof instead of isFunction
	      , result = new (typeof this == 'function' ? this : Array)(length);
	    while(length > index)result[index] = arguments[index++];
	    result.length = length;
	    return result;
	  }
	});

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	var $          = __webpack_require__(10)
	  , setUnscope = __webpack_require__(60)
	  , ITER       = __webpack_require__(16).safe('iter')
	  , $iter      = __webpack_require__(47)
	  , step       = $iter.step
	  , Iterators  = $iter.Iterators;
	
	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	__webpack_require__(48)(Array, 'Array', function(iterated, kind){
	  $.set(this, ITER, {o: $.toObject(iterated), i: 0, k: kind});
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var iter  = this[ITER]
	    , O     = iter.o
	    , kind  = iter.k
	    , index = iter.i++;
	  if(!O || index >= O.length){
	    iter.o = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');
	
	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;
	
	setUnscope('keys');
	setUnscope('values');
	setUnscope('entries');

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.31 Array.prototype[@@unscopables]
	var UNSCOPABLES = __webpack_require__(14)('unscopables');
	if(!(UNSCOPABLES in []))__webpack_require__(10).hide(Array.prototype, UNSCOPABLES, {});
	module.exports = function(key){
	  [][UNSCOPABLES][key] = true;
	};

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(62)(Array);

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	var $       = __webpack_require__(10)
	  , SPECIES = __webpack_require__(14)('species');
	module.exports = function(C){
	  if($.DESC && !(SPECIES in C))$.setDesc(C, SPECIES, {
	    configurable: true,
	    get: $.that
	  });
	};

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $       = __webpack_require__(10)
	  , $def    = __webpack_require__(17)
	  , toIndex = $.toIndex;
	$def($def.P, 'Array', {
	  // 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
	  copyWithin: function copyWithin(target/* = 0 */, start /* = 0, end = @length */){
	    var O     = Object($.assertDefined(this))
	      , len   = $.toLength(O.length)
	      , to    = toIndex(target, len)
	      , from  = toIndex(start, len)
	      , end   = arguments[2]
	      , fin   = end === undefined ? len : toIndex(end, len)
	      , count = Math.min(fin - from, len - to)
	      , inc   = 1;
	    if(from < to && to < from + count){
	      inc  = -1;
	      from = from + count - 1;
	      to   = to   + count - 1;
	    }
	    while(count-- > 0){
	      if(from in O)O[to] = O[from];
	      else delete O[to];
	      to   += inc;
	      from += inc;
	    } return O;
	  }
	});
	__webpack_require__(60)('copyWithin');

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $       = __webpack_require__(10)
	  , $def    = __webpack_require__(17)
	  , toIndex = $.toIndex;
	$def($def.P, 'Array', {
	  // 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
	  fill: function fill(value /*, start = 0, end = @length */){
	    var O      = Object($.assertDefined(this))
	      , length = $.toLength(O.length)
	      , index  = toIndex(arguments[1], length)
	      , end    = arguments[2]
	      , endPos = end === undefined ? length : toIndex(end, length);
	    while(endPos > index)O[index++] = value;
	    return O;
	  }
	});
	__webpack_require__(60)('fill');

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
	var KEY    = 'find'
	  , $def   = __webpack_require__(17)
	  , forced = true
	  , $find  = __webpack_require__(20)(5);
	// Shouldn't skip holes
	if(KEY in [])Array(1)[KEY](function(){ forced = false; });
	$def($def.P + $def.F * forced, 'Array', {
	  find: function find(callbackfn/*, that = undefined */){
	    return $find(this, callbackfn, arguments[1]);
	  }
	});
	__webpack_require__(60)(KEY);

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
	var KEY    = 'findIndex'
	  , $def   = __webpack_require__(17)
	  , forced = true
	  , $find  = __webpack_require__(20)(6);
	// Shouldn't skip holes
	if(KEY in [])Array(1)[KEY](function(){ forced = false; });
	$def($def.P + $def.F * forced, 'Array', {
	  findIndex: function findIndex(callbackfn/*, that = undefined */){
	    return $find(this, callbackfn, arguments[1]);
	  }
	});
	__webpack_require__(60)(KEY);

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	var $       = __webpack_require__(10)
	  , cof     = __webpack_require__(13)
	  , $RegExp = $.g.RegExp
	  , Base    = $RegExp
	  , proto   = $RegExp.prototype
	  , re      = /a/g
	  // "new" creates a new object
	  , CORRECT_NEW = new $RegExp(re) !== re
	  // RegExp allows a regex with flags as the pattern
	  , ALLOWS_RE_WITH_FLAGS = function(){
	    try {
	      return $RegExp(re, 'i') == '/a/i';
	    } catch(e){ /* empty */ }
	  }();
	if($.FW && $.DESC){
	  if(!CORRECT_NEW || !ALLOWS_RE_WITH_FLAGS){
	    $RegExp = function RegExp(pattern, flags){
	      var patternIsRegExp  = cof(pattern) == 'RegExp'
	        , flagsIsUndefined = flags === undefined;
	      if(!(this instanceof $RegExp) && patternIsRegExp && flagsIsUndefined)return pattern;
	      return CORRECT_NEW
	        ? new Base(patternIsRegExp && !flagsIsUndefined ? pattern.source : pattern, flags)
	        : new Base(patternIsRegExp ? pattern.source : pattern
	          , patternIsRegExp && flagsIsUndefined ? pattern.flags : flags);
	    };
	    $.each.call($.getNames(Base), function(key){
	      key in $RegExp || $.setDesc($RegExp, key, {
	        configurable: true,
	        get: function(){ return Base[key]; },
	        set: function(it){ Base[key] = it; }
	      });
	    });
	    proto.constructor = $RegExp;
	    $RegExp.prototype = proto;
	    __webpack_require__(18)($.g, 'RegExp', $RegExp);
	  }
	  // 21.2.5.3 get RegExp.prototype.flags()
	  if(/./g.flags != 'g')$.setDesc(proto, 'flags', {
	    configurable: true,
	    get: __webpack_require__(24)(/^.*\/(\w*)$/, '$1')
	  });
	}
	__webpack_require__(62)($RegExp);

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $        = __webpack_require__(10)
	  , ctx      = __webpack_require__(21)
	  , cof      = __webpack_require__(13)
	  , $def     = __webpack_require__(17)
	  , assert   = __webpack_require__(22)
	  , forOf    = __webpack_require__(69)
	  , setProto = __webpack_require__(35).set
	  , same     = __webpack_require__(33)
	  , species  = __webpack_require__(62)
	  , SPECIES  = __webpack_require__(14)('species')
	  , RECORD   = __webpack_require__(16).safe('record')
	  , PROMISE  = 'Promise'
	  , global   = $.g
	  , process  = global.process
	  , isNode   = cof(process) == 'process'
	  , asap     = process && process.nextTick || __webpack_require__(70).set
	  , P        = global[PROMISE]
	  , isFunction     = $.isFunction
	  , isObject       = $.isObject
	  , assertFunction = assert.fn
	  , assertObject   = assert.obj
	  , Wrapper;
	
	function testResolve(sub){
	  var test = new P(function(){});
	  if(sub)test.constructor = Object;
	  return P.resolve(test) === test;
	}
	
	var useNative = function(){
	  var works = false;
	  function P2(x){
	    var self = new P(x);
	    setProto(self, P2.prototype);
	    return self;
	  }
	  try {
	    works = isFunction(P) && isFunction(P.resolve) && testResolve();
	    setProto(P2, P);
	    P2.prototype = $.create(P.prototype, {constructor: {value: P2}});
	    // actual Firefox has broken subclass support, test that
	    if(!(P2.resolve(5).then(function(){}) instanceof P2)){
	      works = false;
	    }
	    // actual V8 bug, https://code.google.com/p/v8/issues/detail?id=4162
	    if(works && $.DESC){
	      var thenableThenGotten = false;
	      P.resolve($.setDesc({}, 'then', {
	        get: function(){ thenableThenGotten = true; }
	      }));
	      works = thenableThenGotten;
	    }
	  } catch(e){ works = false; }
	  return works;
	}();
	
	// helpers
	function isPromise(it){
	  return isObject(it) && (useNative ? cof.classof(it) == 'Promise' : RECORD in it);
	}
	function sameConstructor(a, b){
	  // library wrapper special case
	  if(!$.FW && a === P && b === Wrapper)return true;
	  return same(a, b);
	}
	function getConstructor(C){
	  var S = assertObject(C)[SPECIES];
	  return S != undefined ? S : C;
	}
	function isThenable(it){
	  var then;
	  if(isObject(it))then = it.then;
	  return isFunction(then) ? then : false;
	}
	function notify(record){
	  var chain = record.c;
	  // strange IE + webpack dev server bug - use .call(global)
	  if(chain.length)asap.call(global, function(){
	    var value = record.v
	      , ok    = record.s == 1
	      , i     = 0;
	    function run(react){
	      var cb = ok ? react.ok : react.fail
	        , ret, then;
	      try {
	        if(cb){
	          if(!ok)record.h = true;
	          ret = cb === true ? value : cb(value);
	          if(ret === react.P){
	            react.rej(TypeError('Promise-chain cycle'));
	          } else if(then = isThenable(ret)){
	            then.call(ret, react.res, react.rej);
	          } else react.res(ret);
	        } else react.rej(value);
	      } catch(err){
	        react.rej(err);
	      }
	    }
	    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
	    chain.length = 0;
	  });
	}
	function isUnhandled(promise){
	  var record = promise[RECORD]
	    , chain  = record.a || record.c
	    , i      = 0
	    , react;
	  if(record.h)return false;
	  while(chain.length > i){
	    react = chain[i++];
	    if(react.fail || !isUnhandled(react.P))return false;
	  } return true;
	}
	function $reject(value){
	  var record = this
	    , promise;
	  if(record.d)return;
	  record.d = true;
	  record = record.r || record; // unwrap
	  record.v = value;
	  record.s = 2;
	  record.a = record.c.slice();
	  setTimeout(function(){
	    // strange IE + webpack dev server bug - use .call(global)
	    asap.call(global, function(){
	      if(isUnhandled(promise = record.p)){
	        if(isNode){
	          process.emit('unhandledRejection', value, promise);
	        } else if(global.console && console.error){
	          console.error('Unhandled promise rejection', value);
	        }
	      }
	      record.a = undefined;
	    });
	  }, 1);
	  notify(record);
	}
	function $resolve(value){
	  var record = this
	    , then;
	  if(record.d)return;
	  record.d = true;
	  record = record.r || record; // unwrap
	  try {
	    if(then = isThenable(value)){
	      // strange IE + webpack dev server bug - use .call(global)
	      asap.call(global, function(){
	        var wrapper = {r: record, d: false}; // wrap
	        try {
	          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
	        } catch(e){
	          $reject.call(wrapper, e);
	        }
	      });
	    } else {
	      record.v = value;
	      record.s = 1;
	      notify(record);
	    }
	  } catch(e){
	    $reject.call({r: record, d: false}, e); // wrap
	  }
	}
	
	// constructor polyfill
	if(!useNative){
	  // 25.4.3.1 Promise(executor)
	  P = function Promise(executor){
	    assertFunction(executor);
	    var record = {
	      p: assert.inst(this, P, PROMISE),       // <- promise
	      c: [],                                  // <- awaiting reactions
	      a: undefined,                           // <- checked in isUnhandled reactions
	      s: 0,                                   // <- state
	      d: false,                               // <- done
	      v: undefined,                           // <- value
	      h: false                                // <- handled rejection
	    };
	    $.hide(this, RECORD, record);
	    try {
	      executor(ctx($resolve, record, 1), ctx($reject, record, 1));
	    } catch(err){
	      $reject.call(record, err);
	    }
	  };
	  __webpack_require__(71)(P.prototype, {
	    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
	    then: function then(onFulfilled, onRejected){
	      var S = assertObject(assertObject(this).constructor)[SPECIES];
	      var react = {
	        ok:   isFunction(onFulfilled) ? onFulfilled : true,
	        fail: isFunction(onRejected)  ? onRejected  : false
	      };
	      var promise = react.P = new (S != undefined ? S : P)(function(res, rej){
	        react.res = assertFunction(res);
	        react.rej = assertFunction(rej);
	      });
	      var record = this[RECORD];
	      record.c.push(react);
	      if(record.a)record.a.push(react);
	      if(record.s)notify(record);
	      return promise;
	    },
	    // 25.4.5.1 Promise.prototype.catch(onRejected)
	    'catch': function(onRejected){
	      return this.then(undefined, onRejected);
	    }
	  });
	}
	
	// export
	$def($def.G + $def.W + $def.F * !useNative, {Promise: P});
	cof.set(P, PROMISE);
	species(P);
	species(Wrapper = $.core[PROMISE]);
	
	// statics
	$def($def.S + $def.F * !useNative, PROMISE, {
	  // 25.4.4.5 Promise.reject(r)
	  reject: function reject(r){
	    return new (getConstructor(this))(function(res, rej){ rej(r); });
	  }
	});
	$def($def.S + $def.F * (!useNative || testResolve(true)), PROMISE, {
	  // 25.4.4.6 Promise.resolve(x)
	  resolve: function resolve(x){
	    return isPromise(x) && sameConstructor(x.constructor, this)
	      ? x : new this(function(res){ res(x); });
	  }
	});
	$def($def.S + $def.F * !(useNative && __webpack_require__(57)(function(iter){
	  P.all(iter)['catch'](function(){});
	})), PROMISE, {
	  // 25.4.4.1 Promise.all(iterable)
	  all: function all(iterable){
	    var C      = getConstructor(this)
	      , values = [];
	    return new C(function(res, rej){
	      forOf(iterable, false, values.push, values);
	      var remaining = values.length
	        , results   = Array(remaining);
	      if(remaining)$.each.call(values, function(promise, index){
	        C.resolve(promise).then(function(value){
	          results[index] = value;
	          --remaining || res(results);
	        }, rej);
	      });
	      else res(results);
	    });
	  },
	  // 25.4.4.4 Promise.race(iterable)
	  race: function race(iterable){
	    var C = getConstructor(this);
	    return new C(function(res, rej){
	      forOf(iterable, false, function(promise){
	        C.resolve(promise).then(res, rej);
	      });
	    });
	  }
	});

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	var ctx  = __webpack_require__(21)
	  , get  = __webpack_require__(47).get
	  , call = __webpack_require__(56);
	module.exports = function(iterable, entries, fn, that){
	  var iterator = get(iterable)
	    , f        = ctx(fn, that, entries ? 2 : 1)
	    , step;
	  while(!(step = iterator.next()).done){
	    if(call(iterator, f, step.value, entries) === false){
	      return call.close(iterator);
	    }
	  }
	};

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $      = __webpack_require__(10)
	  , ctx    = __webpack_require__(21)
	  , cof    = __webpack_require__(13)
	  , invoke = __webpack_require__(19)
	  , cel    = __webpack_require__(12)
	  , global             = $.g
	  , isFunction         = $.isFunction
	  , html               = $.html
	  , process            = global.process
	  , setTask            = global.setImmediate
	  , clearTask          = global.clearImmediate
	  , MessageChannel     = global.MessageChannel
	  , counter            = 0
	  , queue              = {}
	  , ONREADYSTATECHANGE = 'onreadystatechange'
	  , defer, channel, port;
	function run(){
	  var id = +this;
	  if($.has(queue, id)){
	    var fn = queue[id];
	    delete queue[id];
	    fn();
	  }
	}
	function listner(event){
	  run.call(event.data);
	}
	// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
	if(!isFunction(setTask) || !isFunction(clearTask)){
	  setTask = function(fn){
	    var args = [], i = 1;
	    while(arguments.length > i)args.push(arguments[i++]);
	    queue[++counter] = function(){
	      invoke(isFunction(fn) ? fn : Function(fn), args);
	    };
	    defer(counter);
	    return counter;
	  };
	  clearTask = function(id){
	    delete queue[id];
	  };
	  // Node.js 0.8-
	  if(cof(process) == 'process'){
	    defer = function(id){
	      process.nextTick(ctx(run, id, 1));
	    };
	  // Modern browsers, skip implementation for WebWorkers
	  // IE8 has postMessage, but it's sync & typeof its postMessage is object
	  } else if(global.addEventListener && isFunction(global.postMessage) && !global.importScripts){
	    defer = function(id){
	      global.postMessage(id, '*');
	    };
	    global.addEventListener('message', listner, false);
	  // WebWorkers
	  } else if(isFunction(MessageChannel)){
	    channel = new MessageChannel;
	    port    = channel.port2;
	    channel.port1.onmessage = listner;
	    defer = ctx(port.postMessage, port, 1);
	  // IE8-
	  } else if(ONREADYSTATECHANGE in cel('script')){
	    defer = function(id){
	      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
	        html.removeChild(this);
	        run.call(id);
	      };
	    };
	  // Rest old browsers
	  } else {
	    defer = function(id){
	      setTimeout(ctx(run, id, 1), 0);
	    };
	  }
	}
	module.exports = {
	  set:   setTask,
	  clear: clearTask
	};

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	var $redef = __webpack_require__(18);
	module.exports = function(target, src){
	  for(var key in src)$redef(target, key, src[key]);
	  return target;
	};

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var strong = __webpack_require__(73);
	
	// 23.1 Map Objects
	__webpack_require__(74)('Map', function(get){
	  return function Map(){ return get(this, arguments[0]); };
	}, {
	  // 23.1.3.6 Map.prototype.get(key)
	  get: function get(key){
	    var entry = strong.getEntry(this, key);
	    return entry && entry.v;
	  },
	  // 23.1.3.9 Map.prototype.set(key, value)
	  set: function set(key, value){
	    return strong.def(this, key === 0 ? 0 : key, value);
	  }
	}, strong, true);

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $        = __webpack_require__(10)
	  , ctx      = __webpack_require__(21)
	  , safe     = __webpack_require__(16).safe
	  , assert   = __webpack_require__(22)
	  , forOf    = __webpack_require__(69)
	  , step     = __webpack_require__(47).step
	  , $has     = $.has
	  , set      = $.set
	  , isObject = $.isObject
	  , hide     = $.hide
	  , isExtensible = Object.isExtensible || isObject
	  , ID       = safe('id')
	  , O1       = safe('O1')
	  , LAST     = safe('last')
	  , FIRST    = safe('first')
	  , ITER     = safe('iter')
	  , SIZE     = $.DESC ? safe('size') : 'size'
	  , id       = 0;
	
	function fastKey(it, create){
	  // return primitive with prefix
	  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if(!$has(it, ID)){
	    // can't set id to frozen object
	    if(!isExtensible(it))return 'F';
	    // not necessary to add id
	    if(!create)return 'E';
	    // add missing object id
	    hide(it, ID, ++id);
	  // return object id with prefix
	  } return 'O' + it[ID];
	}
	
	function getEntry(that, key){
	  // fast case
	  var index = fastKey(key), entry;
	  if(index !== 'F')return that[O1][index];
	  // frozen object case
	  for(entry = that[FIRST]; entry; entry = entry.n){
	    if(entry.k == key)return entry;
	  }
	}
	
	module.exports = {
	  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
	    var C = wrapper(function(that, iterable){
	      assert.inst(that, C, NAME);
	      set(that, O1, $.create(null));
	      set(that, SIZE, 0);
	      set(that, LAST, undefined);
	      set(that, FIRST, undefined);
	      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	    });
	    __webpack_require__(71)(C.prototype, {
	      // 23.1.3.1 Map.prototype.clear()
	      // 23.2.3.2 Set.prototype.clear()
	      clear: function clear(){
	        for(var that = this, data = that[O1], entry = that[FIRST]; entry; entry = entry.n){
	          entry.r = true;
	          if(entry.p)entry.p = entry.p.n = undefined;
	          delete data[entry.i];
	        }
	        that[FIRST] = that[LAST] = undefined;
	        that[SIZE] = 0;
	      },
	      // 23.1.3.3 Map.prototype.delete(key)
	      // 23.2.3.4 Set.prototype.delete(value)
	      'delete': function(key){
	        var that  = this
	          , entry = getEntry(that, key);
	        if(entry){
	          var next = entry.n
	            , prev = entry.p;
	          delete that[O1][entry.i];
	          entry.r = true;
	          if(prev)prev.n = next;
	          if(next)next.p = prev;
	          if(that[FIRST] == entry)that[FIRST] = next;
	          if(that[LAST] == entry)that[LAST] = prev;
	          that[SIZE]--;
	        } return !!entry;
	      },
	      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
	      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
	      forEach: function forEach(callbackfn /*, that = undefined */){
	        var f = ctx(callbackfn, arguments[1], 3)
	          , entry;
	        while(entry = entry ? entry.n : this[FIRST]){
	          f(entry.v, entry.k, this);
	          // revert to the last existing entry
	          while(entry && entry.r)entry = entry.p;
	        }
	      },
	      // 23.1.3.7 Map.prototype.has(key)
	      // 23.2.3.7 Set.prototype.has(value)
	      has: function has(key){
	        return !!getEntry(this, key);
	      }
	    });
	    if($.DESC)$.setDesc(C.prototype, 'size', {
	      get: function(){
	        return assert.def(this[SIZE]);
	      }
	    });
	    return C;
	  },
	  def: function(that, key, value){
	    var entry = getEntry(that, key)
	      , prev, index;
	    // change existing entry
	    if(entry){
	      entry.v = value;
	    // create new entry
	    } else {
	      that[LAST] = entry = {
	        i: index = fastKey(key, true), // <- index
	        k: key,                        // <- key
	        v: value,                      // <- value
	        p: prev = that[LAST],          // <- previous entry
	        n: undefined,                  // <- next entry
	        r: false                       // <- removed
	      };
	      if(!that[FIRST])that[FIRST] = entry;
	      if(prev)prev.n = entry;
	      that[SIZE]++;
	      // add to index
	      if(index !== 'F')that[O1][index] = entry;
	    } return that;
	  },
	  getEntry: getEntry,
	  // add .keys, .values, .entries, [@@iterator]
	  // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
	  setIter: function(C, NAME, IS_MAP){
	    __webpack_require__(48)(C, NAME, function(iterated, kind){
	      set(this, ITER, {o: iterated, k: kind});
	    }, function(){
	      var iter  = this[ITER]
	        , kind  = iter.k
	        , entry = iter.l;
	      // revert to the last existing entry
	      while(entry && entry.r)entry = entry.p;
	      // get next entry
	      if(!iter.o || !(iter.l = entry = entry ? entry.n : iter.o[FIRST])){
	        // or finish the iteration
	        iter.o = undefined;
	        return step(1);
	      }
	      // return step by kind
	      if(kind == 'keys'  )return step(0, entry.k);
	      if(kind == 'values')return step(0, entry.v);
	      return step(0, [entry.k, entry.v]);
	    }, IS_MAP ? 'entries' : 'values' , !IS_MAP, true);
	  }
	};

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $     = __webpack_require__(10)
	  , $def  = __webpack_require__(17)
	  , BUGGY = __webpack_require__(47).BUGGY
	  , forOf = __webpack_require__(69)
	  , species = __webpack_require__(62)
	  , assertInstance = __webpack_require__(22).inst;
	
	module.exports = function(NAME, wrapper, methods, common, IS_MAP, IS_WEAK){
	  var Base  = $.g[NAME]
	    , C     = Base
	    , ADDER = IS_MAP ? 'set' : 'add'
	    , proto = C && C.prototype
	    , O     = {};
	  function fixMethod(KEY){
	    var fn = proto[KEY];
	    __webpack_require__(18)(proto, KEY,
	      KEY == 'delete' ? function(a){ return fn.call(this, a === 0 ? 0 : a); }
	      : KEY == 'has' ? function has(a){ return fn.call(this, a === 0 ? 0 : a); }
	      : KEY == 'get' ? function get(a){ return fn.call(this, a === 0 ? 0 : a); }
	      : KEY == 'add' ? function add(a){ fn.call(this, a === 0 ? 0 : a); return this; }
	      : function set(a, b){ fn.call(this, a === 0 ? 0 : a, b); return this; }
	    );
	  }
	  if(!$.isFunction(C) || !(IS_WEAK || !BUGGY && proto.forEach && proto.entries)){
	    // create collection constructor
	    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
	    __webpack_require__(71)(C.prototype, methods);
	  } else {
	    var inst  = new C
	      , chain = inst[ADDER](IS_WEAK ? {} : -0, 1)
	      , buggyZero;
	    // wrap for init collections from iterable
	    if(!__webpack_require__(57)(function(iter){ new C(iter); })){ // eslint-disable-line no-new
	      C = wrapper(function(target, iterable){
	        assertInstance(target, C, NAME);
	        var that = new Base;
	        if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	        return that;
	      });
	      C.prototype = proto;
	      proto.constructor = C;
	    }
	    IS_WEAK || inst.forEach(function(val, key){
	      buggyZero = 1 / key === -Infinity;
	    });
	    // fix converting -0 key to +0
	    if(buggyZero){
	      fixMethod('delete');
	      fixMethod('has');
	      IS_MAP && fixMethod('get');
	    }
	    // + fix .add & .set for chaining
	    if(buggyZero || chain !== inst)fixMethod(ADDER);
	  }
	
	  __webpack_require__(13).set(C, NAME);
	
	  O[NAME] = C;
	  $def($def.G + $def.W + $def.F * (C != Base), O);
	  species(C);
	  species($.core[NAME]); // for wrapper
	
	  if(!IS_WEAK)common.setIter(C, NAME, IS_MAP);
	
	  return C;
	};

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var strong = __webpack_require__(73);
	
	// 23.2 Set Objects
	__webpack_require__(74)('Set', function(get){
	  return function Set(){ return get(this, arguments[0]); };
	}, {
	  // 23.2.3.1 Set.prototype.add(value)
	  add: function add(value){
	    return strong.def(this, value = value === 0 ? 0 : value, value);
	  }
	}, strong);

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $         = __webpack_require__(10)
	  , weak      = __webpack_require__(77)
	  , leakStore = weak.leakStore
	  , ID        = weak.ID
	  , WEAK      = weak.WEAK
	  , has       = $.has
	  , isObject  = $.isObject
	  , isExtensible = Object.isExtensible || isObject
	  , tmp       = {};
	
	// 23.3 WeakMap Objects
	var $WeakMap = __webpack_require__(74)('WeakMap', function(get){
	  return function WeakMap(){ return get(this, arguments[0]); };
	}, {
	  // 23.3.3.3 WeakMap.prototype.get(key)
	  get: function get(key){
	    if(isObject(key)){
	      if(!isExtensible(key))return leakStore(this).get(key);
	      if(has(key, WEAK))return key[WEAK][this[ID]];
	    }
	  },
	  // 23.3.3.5 WeakMap.prototype.set(key, value)
	  set: function set(key, value){
	    return weak.def(this, key, value);
	  }
	}, weak, true, true);
	
	// IE11 WeakMap frozen keys fix
	if(new $WeakMap().set((Object.freeze || Object)(tmp), 7).get(tmp) != 7){
	  $.each.call(['delete', 'has', 'get', 'set'], function(key){
	    var proto  = $WeakMap.prototype
	      , method = proto[key];
	    __webpack_require__(18)(proto, key, function(a, b){
	      // store frozen objects on leaky map
	      if(isObject(a) && !isExtensible(a)){
	        var result = leakStore(this)[key](a, b);
	        return key == 'set' ? this : result;
	      // store all the rest on native weakmap
	      } return method.call(this, a, b);
	    });
	  });
	}

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $         = __webpack_require__(10)
	  , safe      = __webpack_require__(16).safe
	  , assert    = __webpack_require__(22)
	  , forOf     = __webpack_require__(69)
	  , $has      = $.has
	  , isObject  = $.isObject
	  , hide      = $.hide
	  , isExtensible = Object.isExtensible || isObject
	  , id        = 0
	  , ID        = safe('id')
	  , WEAK      = safe('weak')
	  , LEAK      = safe('leak')
	  , method    = __webpack_require__(20)
	  , find      = method(5)
	  , findIndex = method(6);
	function findFrozen(store, key){
	  return find(store.array, function(it){
	    return it[0] === key;
	  });
	}
	// fallback for frozen keys
	function leakStore(that){
	  return that[LEAK] || hide(that, LEAK, {
	    array: [],
	    get: function(key){
	      var entry = findFrozen(this, key);
	      if(entry)return entry[1];
	    },
	    has: function(key){
	      return !!findFrozen(this, key);
	    },
	    set: function(key, value){
	      var entry = findFrozen(this, key);
	      if(entry)entry[1] = value;
	      else this.array.push([key, value]);
	    },
	    'delete': function(key){
	      var index = findIndex(this.array, function(it){
	        return it[0] === key;
	      });
	      if(~index)this.array.splice(index, 1);
	      return !!~index;
	    }
	  })[LEAK];
	}
	
	module.exports = {
	  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
	    var C = wrapper(function(that, iterable){
	      $.set(assert.inst(that, C, NAME), ID, id++);
	      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	    });
	    __webpack_require__(71)(C.prototype, {
	      // 23.3.3.2 WeakMap.prototype.delete(key)
	      // 23.4.3.3 WeakSet.prototype.delete(value)
	      'delete': function(key){
	        if(!isObject(key))return false;
	        if(!isExtensible(key))return leakStore(this)['delete'](key);
	        return $has(key, WEAK) && $has(key[WEAK], this[ID]) && delete key[WEAK][this[ID]];
	      },
	      // 23.3.3.4 WeakMap.prototype.has(key)
	      // 23.4.3.4 WeakSet.prototype.has(value)
	      has: function has(key){
	        if(!isObject(key))return false;
	        if(!isExtensible(key))return leakStore(this).has(key);
	        return $has(key, WEAK) && $has(key[WEAK], this[ID]);
	      }
	    });
	    return C;
	  },
	  def: function(that, key, value){
	    if(!isExtensible(assert.obj(key))){
	      leakStore(that).set(key, value);
	    } else {
	      $has(key, WEAK) || hide(key, WEAK, {});
	      key[WEAK][that[ID]] = value;
	    } return that;
	  },
	  leakStore: leakStore,
	  WEAK: WEAK,
	  ID: ID
	};

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var weak = __webpack_require__(77);
	
	// 23.4 WeakSet Objects
	__webpack_require__(74)('WeakSet', function(get){
	  return function WeakSet(){ return get(this, arguments[0]); };
	}, {
	  // 23.4.3.1 WeakSet.prototype.add(value)
	  add: function add(value){
	    return weak.def(this, value, true);
	  }
	}, weak, false, true);

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	var $         = __webpack_require__(10)
	  , $def      = __webpack_require__(17)
	  , setProto  = __webpack_require__(35)
	  , $iter     = __webpack_require__(47)
	  , ITERATOR  = __webpack_require__(14)('iterator')
	  , ITER      = __webpack_require__(16).safe('iter')
	  , step      = $iter.step
	  , assert    = __webpack_require__(22)
	  , isObject  = $.isObject
	  , getProto  = $.getProto
	  , $Reflect  = $.g.Reflect
	  , _apply    = Function.apply
	  , assertObject = assert.obj
	  , _isExtensible = Object.isExtensible || isObject
	  , _preventExtensions = Object.preventExtensions
	  // IE TP has broken Reflect.enumerate
	  , buggyEnumerate = !($Reflect && $Reflect.enumerate && ITERATOR in $Reflect.enumerate({}));
	
	function Enumerate(iterated){
	  $.set(this, ITER, {o: iterated, k: undefined, i: 0});
	}
	$iter.create(Enumerate, 'Object', function(){
	  var iter = this[ITER]
	    , keys = iter.k
	    , key;
	  if(keys == undefined){
	    iter.k = keys = [];
	    for(key in iter.o)keys.push(key);
	  }
	  do {
	    if(iter.i >= keys.length)return step(1);
	  } while(!((key = keys[iter.i++]) in iter.o));
	  return step(0, key);
	});
	
	var reflect = {
	  // 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
	  apply: function apply(target, thisArgument, argumentsList){
	    return _apply.call(target, thisArgument, argumentsList);
	  },
	  // 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
	  construct: function construct(target, argumentsList /*, newTarget*/){
	    var proto    = assert.fn(arguments.length < 3 ? target : arguments[2]).prototype
	      , instance = $.create(isObject(proto) ? proto : Object.prototype)
	      , result   = _apply.call(target, instance, argumentsList);
	    return isObject(result) ? result : instance;
	  },
	  // 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
	  defineProperty: function defineProperty(target, propertyKey, attributes){
	    assertObject(target);
	    try {
	      $.setDesc(target, propertyKey, attributes);
	      return true;
	    } catch(e){
	      return false;
	    }
	  },
	  // 26.1.4 Reflect.deleteProperty(target, propertyKey)
	  deleteProperty: function deleteProperty(target, propertyKey){
	    var desc = $.getDesc(assertObject(target), propertyKey);
	    return desc && !desc.configurable ? false : delete target[propertyKey];
	  },
	  // 26.1.6 Reflect.get(target, propertyKey [, receiver])
	  get: function get(target, propertyKey/*, receiver*/){
	    var receiver = arguments.length < 3 ? target : arguments[2]
	      , desc = $.getDesc(assertObject(target), propertyKey), proto;
	    if(desc)return $.has(desc, 'value')
	      ? desc.value
	      : desc.get === undefined
	        ? undefined
	        : desc.get.call(receiver);
	    return isObject(proto = getProto(target))
	      ? get(proto, propertyKey, receiver)
	      : undefined;
	  },
	  // 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
	  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey){
	    return $.getDesc(assertObject(target), propertyKey);
	  },
	  // 26.1.8 Reflect.getPrototypeOf(target)
	  getPrototypeOf: function getPrototypeOf(target){
	    return getProto(assertObject(target));
	  },
	  // 26.1.9 Reflect.has(target, propertyKey)
	  has: function has(target, propertyKey){
	    return propertyKey in target;
	  },
	  // 26.1.10 Reflect.isExtensible(target)
	  isExtensible: function isExtensible(target){
	    return _isExtensible(assertObject(target));
	  },
	  // 26.1.11 Reflect.ownKeys(target)
	  ownKeys: __webpack_require__(80),
	  // 26.1.12 Reflect.preventExtensions(target)
	  preventExtensions: function preventExtensions(target){
	    assertObject(target);
	    try {
	      if(_preventExtensions)_preventExtensions(target);
	      return true;
	    } catch(e){
	      return false;
	    }
	  },
	  // 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
	  set: function set(target, propertyKey, V/*, receiver*/){
	    var receiver = arguments.length < 4 ? target : arguments[3]
	      , ownDesc  = $.getDesc(assertObject(target), propertyKey)
	      , existingDescriptor, proto;
	    if(!ownDesc){
	      if(isObject(proto = getProto(target))){
	        return set(proto, propertyKey, V, receiver);
	      }
	      ownDesc = $.desc(0);
	    }
	    if($.has(ownDesc, 'value')){
	      if(ownDesc.writable === false || !isObject(receiver))return false;
	      existingDescriptor = $.getDesc(receiver, propertyKey) || $.desc(0);
	      existingDescriptor.value = V;
	      $.setDesc(receiver, propertyKey, existingDescriptor);
	      return true;
	    }
	    return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
	  }
	};
	// 26.1.14 Reflect.setPrototypeOf(target, proto)
	if(setProto)reflect.setPrototypeOf = function setPrototypeOf(target, proto){
	  setProto.check(target, proto);
	  try {
	    setProto.set(target, proto);
	    return true;
	  } catch(e){
	    return false;
	  }
	};
	
	$def($def.G, {Reflect: {}});
	
	$def($def.S + $def.F * buggyEnumerate, 'Reflect', {
	  // 26.1.5 Reflect.enumerate(target)
	  enumerate: function enumerate(target){
	    return new Enumerate(assertObject(target));
	  }
	});
	
	$def($def.S, 'Reflect', reflect);

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	var $            = __webpack_require__(10)
	  , assertObject = __webpack_require__(22).obj;
	module.exports = function ownKeys(it){
	  assertObject(it);
	  var keys       = $.getNames(it)
	    , getSymbols = $.getSymbols;
	  return getSymbols ? keys.concat(getSymbols(it)) : keys;
	};

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $def      = __webpack_require__(17)
	  , $includes = __webpack_require__(23)(true);
	$def($def.P, 'Array', {
	  // https://github.com/domenic/Array.prototype.includes
	  includes: function includes(el /*, fromIndex = 0 */){
	    return $includes(this, el, arguments[1]);
	  }
	});
	__webpack_require__(60)('includes');

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/mathiasbynens/String.prototype.at
	'use strict';
	var $def = __webpack_require__(17)
	  , $at  = __webpack_require__(46)(true);
	$def($def.P, 'String', {
	  at: function at(pos){
	    return $at(this, pos);
	  }
	});

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $def = __webpack_require__(17)
	  , $pad = __webpack_require__(84);
	$def($def.P, 'String', {
	  lpad: function lpad(n){
	    return $pad(this, n, arguments[1], true);
	  }
	});

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	// http://wiki.ecmascript.org/doku.php?id=strawman:string_padding
	var $      = __webpack_require__(10)
	  , repeat = __webpack_require__(53);
	
	module.exports = function(that, minLength, fillChar, left){
	  // 1. Let O be CheckObjectCoercible(this value).
	  // 2. Let S be ToString(O).
	  var S = String($.assertDefined(that));
	  // 4. If intMinLength is undefined, return S.
	  if(minLength === undefined)return S;
	  // 4. Let intMinLength be ToInteger(minLength).
	  var intMinLength = $.toInteger(minLength);
	  // 5. Let fillLen be the number of characters in S minus intMinLength.
	  var fillLen = intMinLength - S.length;
	  // 6. If fillLen < 0, then throw a RangeError exception.
	  // 7. If fillLen is +∞, then throw a RangeError exception.
	  if(fillLen < 0 || fillLen === Infinity){
	    throw new RangeError('Cannot satisfy string length ' + minLength + ' for string: ' + S);
	  }
	  // 8. Let sFillStr be the string represented by fillStr.
	  // 9. If sFillStr is undefined, let sFillStr be a space character.
	  var sFillStr = fillChar === undefined ? ' ' : String(fillChar);
	  // 10. Let sFillVal be a String made of sFillStr, repeated until fillLen is met.
	  var sFillVal = repeat.call(sFillStr, Math.ceil(fillLen / sFillStr.length));
	  // truncate if we overflowed
	  if(sFillVal.length > fillLen)sFillVal = left
	    ? sFillVal.slice(sFillVal.length - fillLen)
	    : sFillVal.slice(0, fillLen);
	  // 11. Return a string made from sFillVal, followed by S.
	  // 11. Return a String made from S, followed by sFillVal.
	  return left ? sFillVal.concat(S) : S.concat(sFillVal);
	};

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $def = __webpack_require__(17)
	  , $pad = __webpack_require__(84);
	$def($def.P, 'String', {
	  rpad: function rpad(n){
	    return $pad(this, n, arguments[1], false);
	  }
	});

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/benjamingr/RexExp.escape
	var $def = __webpack_require__(17);
	$def($def.S, 'RegExp', {
	  escape: __webpack_require__(24)(/[\\^$*+?.()|[\]{}]/g, '\\$&', true)
	});


/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	// https://gist.github.com/WebReflection/9353781
	var $       = __webpack_require__(10)
	  , $def    = __webpack_require__(17)
	  , ownKeys = __webpack_require__(80);
	
	$def($def.S, 'Object', {
	  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object){
	    var O      = $.toObject(object)
	      , result = {};
	    $.each.call(ownKeys(O), function(key){
	      $.setDesc(result, key, $.desc(0, $.getDesc(O, key)));
	    });
	    return result;
	  }
	});

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	// http://goo.gl/XkBrjD
	var $    = __webpack_require__(10)
	  , $def = __webpack_require__(17);
	function createObjectToArray(isEntries){
	  return function(object){
	    var O      = $.toObject(object)
	      , keys   = $.getKeys(O)
	      , length = keys.length
	      , i      = 0
	      , result = Array(length)
	      , key;
	    if(isEntries)while(length > i)result[i] = [key = keys[i++], O[key]];
	    else while(length > i)result[i] = O[keys[i++]];
	    return result;
	  };
	}
	$def($def.S, 'Object', {
	  values:  createObjectToArray(false),
	  entries: createObjectToArray(true)
	});

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	__webpack_require__(90)('Map');

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var $def  = __webpack_require__(17)
	  , forOf = __webpack_require__(69);
	module.exports = function(NAME){
	  $def($def.P, NAME, {
	    toJSON: function toJSON(){
	      var arr = [];
	      forOf(this, false, arr.push, arr);
	      return arr;
	    }
	  });
	};

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	__webpack_require__(90)('Set');

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	// JavaScript 1.6 / Strawman array statics shim
	var $       = __webpack_require__(10)
	  , $def    = __webpack_require__(17)
	  , $Array  = $.core.Array || Array
	  , statics = {};
	function setStatics(keys, length){
	  $.each.call(keys.split(','), function(key){
	    if(length == undefined && key in $Array)statics[key] = $Array[key];
	    else if(key in [])statics[key] = __webpack_require__(21)(Function.call, [][key], length);
	  });
	}
	setStatics('pop,reverse,shift,keys,values,entries', 1);
	setStatics('indexOf,every,some,forEach,map,filter,find,findIndex,includes', 3);
	setStatics('join,slice,concat,push,splice,unshift,sort,lastIndexOf,' +
	           'reduce,reduceRight,copyWithin,fill,turn');
	$def($def.S, 'Array', statics);

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	// ie9- setTimeout & setInterval additional parameters fix
	var $         = __webpack_require__(10)
	  , $def      = __webpack_require__(17)
	  , invoke    = __webpack_require__(19)
	  , partial   = __webpack_require__(94)
	  , navigator = $.g.navigator
	  , MSIE      = !!navigator && /MSIE .\./.test(navigator.userAgent); // <- dirty ie9- check
	function wrap(set){
	  return MSIE ? function(fn, time /*, ...args */){
	    return set(invoke(
	      partial,
	      [].slice.call(arguments, 2),
	      $.isFunction(fn) ? fn : Function(fn)
	    ), time);
	  } : set;
	}
	$def($def.G + $def.B + $def.F * MSIE, {
	  setTimeout:  wrap($.g.setTimeout),
	  setInterval: wrap($.g.setInterval)
	});

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $      = __webpack_require__(10)
	  , invoke = __webpack_require__(19)
	  , assertFunction = __webpack_require__(22).fn;
	module.exports = function(/* ...pargs */){
	  var fn     = assertFunction(this)
	    , length = arguments.length
	    , pargs  = Array(length)
	    , i      = 0
	    , _      = $.path._
	    , holder = false;
	  while(length > i)if((pargs[i] = arguments[i++]) === _)holder = true;
	  return function(/* ...args */){
	    var that    = this
	      , _length = arguments.length
	      , j = 0, k = 0, args;
	    if(!holder && !_length)return invoke(fn, pargs, that);
	    args = pargs.slice();
	    if(holder)for(;length > j; j++)if(args[j] === _)args[j] = arguments[k++];
	    while(_length > k)args.push(arguments[k++]);
	    return invoke(fn, args, that);
	  };
	};

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	var $def  = __webpack_require__(17)
	  , $task = __webpack_require__(70);
	$def($def.G + $def.B, {
	  setImmediate:   $task.set,
	  clearImmediate: $task.clear
	});

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(59);
	var $           = __webpack_require__(10)
	  , Iterators   = __webpack_require__(47).Iterators
	  , ITERATOR    = __webpack_require__(14)('iterator')
	  , ArrayValues = Iterators.Array
	  , NL          = $.g.NodeList
	  , HTC         = $.g.HTMLCollection
	  , NLProto     = NL && NL.prototype
	  , HTCProto    = HTC && HTC.prototype;
	if($.FW){
	  if(NL && !(ITERATOR in NLProto))$.hide(NLProto, ITERATOR, ArrayValues);
	  if(HTC && !(ITERATOR in HTCProto))$.hide(HTCProto, ITERATOR, ArrayValues);
	}
	Iterators.NodeList = Iterators.HTMLCollection = ArrayValues;

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {/**
	 * Copyright (c) 2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
	 * additional grant of patent rights can be found in the PATENTS file in
	 * the same directory.
	 */
	
	!(function(global) {
	  "use strict";
	
	  var hasOwn = Object.prototype.hasOwnProperty;
	  var undefined; // More compressible than void 0.
	  var iteratorSymbol =
	    typeof Symbol === "function" && Symbol.iterator || "@@iterator";
	
	  var inModule = typeof module === "object";
	  var runtime = global.regeneratorRuntime;
	  if (runtime) {
	    if (inModule) {
	      // If regeneratorRuntime is defined globally and we're in a module,
	      // make the exports object identical to regeneratorRuntime.
	      module.exports = runtime;
	    }
	    // Don't bother evaluating the rest of this file if the runtime was
	    // already defined globally.
	    return;
	  }
	
	  // Define the runtime globally (as expected by generated code) as either
	  // module.exports (if we're in a module) or a new, empty object.
	  runtime = global.regeneratorRuntime = inModule ? module.exports : {};
	
	  function wrap(innerFn, outerFn, self, tryLocsList) {
	    // If outerFn provided, then outerFn.prototype instanceof Generator.
	    var generator = Object.create((outerFn || Generator).prototype);
	
	    generator._invoke = makeInvokeMethod(
	      innerFn, self || null,
	      new Context(tryLocsList || [])
	    );
	
	    return generator;
	  }
	  runtime.wrap = wrap;
	
	  // Try/catch helper to minimize deoptimizations. Returns a completion
	  // record like context.tryEntries[i].completion. This interface could
	  // have been (and was previously) designed to take a closure to be
	  // invoked without arguments, but in all the cases we care about we
	  // already have an existing method we want to call, so there's no need
	  // to create a new function object. We can even get away with assuming
	  // the method takes exactly one argument, since that happens to be true
	  // in every case, so we don't have to touch the arguments object. The
	  // only additional allocation required is the completion record, which
	  // has a stable shape and so hopefully should be cheap to allocate.
	  function tryCatch(fn, obj, arg) {
	    try {
	      return { type: "normal", arg: fn.call(obj, arg) };
	    } catch (err) {
	      return { type: "throw", arg: err };
	    }
	  }
	
	  var GenStateSuspendedStart = "suspendedStart";
	  var GenStateSuspendedYield = "suspendedYield";
	  var GenStateExecuting = "executing";
	  var GenStateCompleted = "completed";
	
	  // Returning this object from the innerFn has the same effect as
	  // breaking out of the dispatch switch statement.
	  var ContinueSentinel = {};
	
	  // Dummy constructor functions that we use as the .constructor and
	  // .constructor.prototype properties for functions that return Generator
	  // objects. For full spec compliance, you may wish to configure your
	  // minifier not to mangle the names of these two functions.
	  function Generator() {}
	  function GeneratorFunction() {}
	  function GeneratorFunctionPrototype() {}
	
	  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype;
	  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
	  GeneratorFunctionPrototype.constructor = GeneratorFunction;
	  GeneratorFunction.displayName = "GeneratorFunction";
	
	  // Helper for defining the .next, .throw, and .return methods of the
	  // Iterator interface in terms of a single ._invoke method.
	  function defineIteratorMethods(prototype) {
	    ["next", "throw", "return"].forEach(function(method) {
	      prototype[method] = function(arg) {
	        return this._invoke(method, arg);
	      };
	    });
	  }
	
	  runtime.isGeneratorFunction = function(genFun) {
	    var ctor = typeof genFun === "function" && genFun.constructor;
	    return ctor
	      ? ctor === GeneratorFunction ||
	        // For the native GeneratorFunction constructor, the best we can
	        // do is to check its .name property.
	        (ctor.displayName || ctor.name) === "GeneratorFunction"
	      : false;
	  };
	
	  runtime.mark = function(genFun) {
	    genFun.__proto__ = GeneratorFunctionPrototype;
	    genFun.prototype = Object.create(Gp);
	    return genFun;
	  };
	
	  // Within the body of any async function, `await x` is transformed to
	  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
	  // `value instanceof AwaitArgument` to determine if the yielded value is
	  // meant to be awaited. Some may consider the name of this method too
	  // cutesy, but they are curmudgeons.
	  runtime.awrap = function(arg) {
	    return new AwaitArgument(arg);
	  };
	
	  function AwaitArgument(arg) {
	    this.arg = arg;
	  }
	
	  function AsyncIterator(generator) {
	    // This invoke function is written in a style that assumes some
	    // calling function (or Promise) will handle exceptions.
	    function invoke(method, arg) {
	      var result = generator[method](arg);
	      var value = result.value;
	      return value instanceof AwaitArgument
	        ? Promise.resolve(value.arg).then(invokeNext, invokeThrow)
	        : Promise.resolve(value).then(function(unwrapped) {
	            result.value = unwrapped;
	            return result;
	          }, invokeThrow);
	    }
	
	    if (typeof process === "object" && process.domain) {
	      invoke = process.domain.bind(invoke);
	    }
	
	    var invokeNext = invoke.bind(generator, "next");
	    var invokeThrow = invoke.bind(generator, "throw");
	    var invokeReturn = invoke.bind(generator, "return");
	    var previousPromise;
	
	    function enqueue(method, arg) {
	      var enqueueResult =
	        // If enqueue has been called before, then we want to wait until
	        // all previous Promises have been resolved before calling invoke,
	        // so that results are always delivered in the correct order. If
	        // enqueue has not been called before, then it is important to
	        // call invoke immediately, without waiting on a callback to fire,
	        // so that the async generator function has the opportunity to do
	        // any necessary setup in a predictable way. This predictability
	        // is why the Promise constructor synchronously invokes its
	        // executor callback, and why async functions synchronously
	        // execute code before the first await. Since we implement simple
	        // async functions in terms of async generators, it is especially
	        // important to get this right, even though it requires care.
	        previousPromise ? previousPromise.then(function() {
	          return invoke(method, arg);
	        }) : new Promise(function(resolve) {
	          resolve(invoke(method, arg));
	        });
	
	      // Avoid propagating enqueueResult failures to Promises returned by
	      // later invocations of the iterator, and call generator.return() to
	      // allow the generator a chance to clean up.
	      previousPromise = enqueueResult["catch"](invokeReturn);
	
	      return enqueueResult;
	    }
	
	    // Define the unified helper method that is used to implement .next,
	    // .throw, and .return (see defineIteratorMethods).
	    this._invoke = enqueue;
	  }
	
	  defineIteratorMethods(AsyncIterator.prototype);
	
	  // Note that simple async functions are implemented on top of
	  // AsyncIterator objects; they just return a Promise for the value of
	  // the final result produced by the iterator.
	  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
	    var iter = new AsyncIterator(
	      wrap(innerFn, outerFn, self, tryLocsList)
	    );
	
	    return runtime.isGeneratorFunction(outerFn)
	      ? iter // If outerFn is a generator, return the full iterator.
	      : iter.next().then(function(result) {
	          return result.done ? result.value : iter.next();
	        });
	  };
	
	  function makeInvokeMethod(innerFn, self, context) {
	    var state = GenStateSuspendedStart;
	
	    return function invoke(method, arg) {
	      if (state === GenStateExecuting) {
	        throw new Error("Generator is already running");
	      }
	
	      if (state === GenStateCompleted) {
	        // Be forgiving, per 25.3.3.3.3 of the spec:
	        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
	        return doneResult();
	      }
	
	      while (true) {
	        var delegate = context.delegate;
	        if (delegate) {
	          if (method === "return" ||
	              (method === "throw" && delegate.iterator[method] === undefined)) {
	            // A return or throw (when the delegate iterator has no throw
	            // method) always terminates the yield* loop.
	            context.delegate = null;
	
	            // If the delegate iterator has a return method, give it a
	            // chance to clean up.
	            var returnMethod = delegate.iterator["return"];
	            if (returnMethod) {
	              var record = tryCatch(returnMethod, delegate.iterator, arg);
	              if (record.type === "throw") {
	                // If the return method threw an exception, let that
	                // exception prevail over the original return or throw.
	                method = "throw";
	                arg = record.arg;
	                continue;
	              }
	            }
	
	            if (method === "return") {
	              // Continue with the outer return, now that the delegate
	              // iterator has been terminated.
	              continue;
	            }
	          }
	
	          var record = tryCatch(
	            delegate.iterator[method],
	            delegate.iterator,
	            arg
	          );
	
	          if (record.type === "throw") {
	            context.delegate = null;
	
	            // Like returning generator.throw(uncaught), but without the
	            // overhead of an extra function call.
	            method = "throw";
	            arg = record.arg;
	            continue;
	          }
	
	          // Delegate generator ran and handled its own exceptions so
	          // regardless of what the method was, we continue as if it is
	          // "next" with an undefined arg.
	          method = "next";
	          arg = undefined;
	
	          var info = record.arg;
	          if (info.done) {
	            context[delegate.resultName] = info.value;
	            context.next = delegate.nextLoc;
	          } else {
	            state = GenStateSuspendedYield;
	            return info;
	          }
	
	          context.delegate = null;
	        }
	
	        if (method === "next") {
	          if (state === GenStateSuspendedYield) {
	            context.sent = arg;
	          } else {
	            delete context.sent;
	          }
	
	        } else if (method === "throw") {
	          if (state === GenStateSuspendedStart) {
	            state = GenStateCompleted;
	            throw arg;
	          }
	
	          if (context.dispatchException(arg)) {
	            // If the dispatched exception was caught by a catch block,
	            // then let that catch block handle the exception normally.
	            method = "next";
	            arg = undefined;
	          }
	
	        } else if (method === "return") {
	          context.abrupt("return", arg);
	        }
	
	        state = GenStateExecuting;
	
	        var record = tryCatch(innerFn, self, context);
	        if (record.type === "normal") {
	          // If an exception is thrown from innerFn, we leave state ===
	          // GenStateExecuting and loop back for another invocation.
	          state = context.done
	            ? GenStateCompleted
	            : GenStateSuspendedYield;
	
	          var info = {
	            value: record.arg,
	            done: context.done
	          };
	
	          if (record.arg === ContinueSentinel) {
	            if (context.delegate && method === "next") {
	              // Deliberately forget the last sent value so that we don't
	              // accidentally pass it on to the delegate.
	              arg = undefined;
	            }
	          } else {
	            return info;
	          }
	
	        } else if (record.type === "throw") {
	          state = GenStateCompleted;
	          // Dispatch the exception by looping back around to the
	          // context.dispatchException(arg) call above.
	          method = "throw";
	          arg = record.arg;
	        }
	      }
	    };
	  }
	
	  // Define Generator.prototype.{next,throw,return} in terms of the
	  // unified ._invoke helper method.
	  defineIteratorMethods(Gp);
	
	  Gp[iteratorSymbol] = function() {
	    return this;
	  };
	
	  Gp.toString = function() {
	    return "[object Generator]";
	  };
	
	  function pushTryEntry(locs) {
	    var entry = { tryLoc: locs[0] };
	
	    if (1 in locs) {
	      entry.catchLoc = locs[1];
	    }
	
	    if (2 in locs) {
	      entry.finallyLoc = locs[2];
	      entry.afterLoc = locs[3];
	    }
	
	    this.tryEntries.push(entry);
	  }
	
	  function resetTryEntry(entry) {
	    var record = entry.completion || {};
	    record.type = "normal";
	    delete record.arg;
	    entry.completion = record;
	  }
	
	  function Context(tryLocsList) {
	    // The root entry object (effectively a try statement without a catch
	    // or a finally block) gives us a place to store values thrown from
	    // locations where there is no enclosing try statement.
	    this.tryEntries = [{ tryLoc: "root" }];
	    tryLocsList.forEach(pushTryEntry, this);
	    this.reset();
	  }
	
	  runtime.keys = function(object) {
	    var keys = [];
	    for (var key in object) {
	      keys.push(key);
	    }
	    keys.reverse();
	
	    // Rather than returning an object with a next method, we keep
	    // things simple and return the next function itself.
	    return function next() {
	      while (keys.length) {
	        var key = keys.pop();
	        if (key in object) {
	          next.value = key;
	          next.done = false;
	          return next;
	        }
	      }
	
	      // To avoid creating an additional object, we just hang the .value
	      // and .done properties off the next function object itself. This
	      // also ensures that the minifier will not anonymize the function.
	      next.done = true;
	      return next;
	    };
	  };
	
	  function values(iterable) {
	    if (iterable) {
	      var iteratorMethod = iterable[iteratorSymbol];
	      if (iteratorMethod) {
	        return iteratorMethod.call(iterable);
	      }
	
	      if (typeof iterable.next === "function") {
	        return iterable;
	      }
	
	      if (!isNaN(iterable.length)) {
	        var i = -1, next = function next() {
	          while (++i < iterable.length) {
	            if (hasOwn.call(iterable, i)) {
	              next.value = iterable[i];
	              next.done = false;
	              return next;
	            }
	          }
	
	          next.value = undefined;
	          next.done = true;
	
	          return next;
	        };
	
	        return next.next = next;
	      }
	    }
	
	    // Return an iterator with no values.
	    return { next: doneResult };
	  }
	  runtime.values = values;
	
	  function doneResult() {
	    return { value: undefined, done: true };
	  }
	
	  Context.prototype = {
	    constructor: Context,
	
	    reset: function() {
	      this.prev = 0;
	      this.next = 0;
	      this.sent = undefined;
	      this.done = false;
	      this.delegate = null;
	
	      this.tryEntries.forEach(resetTryEntry);
	
	      // Pre-initialize at least 20 temporary variables to enable hidden
	      // class optimizations for simple generators.
	      for (var tempIndex = 0, tempName;
	           hasOwn.call(this, tempName = "t" + tempIndex) || tempIndex < 20;
	           ++tempIndex) {
	        this[tempName] = null;
	      }
	    },
	
	    stop: function() {
	      this.done = true;
	
	      var rootEntry = this.tryEntries[0];
	      var rootRecord = rootEntry.completion;
	      if (rootRecord.type === "throw") {
	        throw rootRecord.arg;
	      }
	
	      return this.rval;
	    },
	
	    dispatchException: function(exception) {
	      if (this.done) {
	        throw exception;
	      }
	
	      var context = this;
	      function handle(loc, caught) {
	        record.type = "throw";
	        record.arg = exception;
	        context.next = loc;
	        return !!caught;
	      }
	
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        var record = entry.completion;
	
	        if (entry.tryLoc === "root") {
	          // Exception thrown outside of any try block that could handle
	          // it, so set the completion value of the entire function to
	          // throw the exception.
	          return handle("end");
	        }
	
	        if (entry.tryLoc <= this.prev) {
	          var hasCatch = hasOwn.call(entry, "catchLoc");
	          var hasFinally = hasOwn.call(entry, "finallyLoc");
	
	          if (hasCatch && hasFinally) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            } else if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }
	
	          } else if (hasCatch) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            }
	
	          } else if (hasFinally) {
	            if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }
	
	          } else {
	            throw new Error("try statement without catch or finally");
	          }
	        }
	      }
	    },
	
	    abrupt: function(type, arg) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc <= this.prev &&
	            hasOwn.call(entry, "finallyLoc") &&
	            this.prev < entry.finallyLoc) {
	          var finallyEntry = entry;
	          break;
	        }
	      }
	
	      if (finallyEntry &&
	          (type === "break" ||
	           type === "continue") &&
	          finallyEntry.tryLoc <= arg &&
	          arg <= finallyEntry.finallyLoc) {
	        // Ignore the finally entry if control is not jumping to a
	        // location outside the try/catch block.
	        finallyEntry = null;
	      }
	
	      var record = finallyEntry ? finallyEntry.completion : {};
	      record.type = type;
	      record.arg = arg;
	
	      if (finallyEntry) {
	        this.next = finallyEntry.finallyLoc;
	      } else {
	        this.complete(record);
	      }
	
	      return ContinueSentinel;
	    },
	
	    complete: function(record, afterLoc) {
	      if (record.type === "throw") {
	        throw record.arg;
	      }
	
	      if (record.type === "break" ||
	          record.type === "continue") {
	        this.next = record.arg;
	      } else if (record.type === "return") {
	        this.rval = record.arg;
	        this.next = "end";
	      } else if (record.type === "normal" && afterLoc) {
	        this.next = afterLoc;
	      }
	    },
	
	    finish: function(finallyLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.finallyLoc === finallyLoc) {
	          this.complete(entry.completion, entry.afterLoc);
	          resetTryEntry(entry);
	          return ContinueSentinel;
	        }
	      }
	    },
	
	    "catch": function(tryLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc === tryLoc) {
	          var record = entry.completion;
	          if (record.type === "throw") {
	            var thrown = record.arg;
	            resetTryEntry(entry);
	          }
	          return thrown;
	        }
	      }
	
	      // The context.catch method must only be called with a location
	      // argument that corresponds to a known catch block.
	      throw new Error("illegal catch attempt");
	    },
	
	    delegateYield: function(iterable, resultName, nextLoc) {
	      this.delegate = {
	        iterator: values(iterable),
	        resultName: resultName,
	        nextLoc: nextLoc
	      };
	
	      return ContinueSentinel;
	    }
	  };
	})(
	  // Among the various tricks for obtaining a reference to the global
	  // object, this seems to be the most reliable technique that does not
	  // use indirect eval (which violates Content Security Policy).
	  typeof global === "object" ? global :
	  typeof window === "object" ? window :
	  typeof self === "object" ? self : this
	);
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(7)))

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	exports['default'] = factory;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var _globalCss = __webpack_require__(99);
	
	var __globalcss = _interopRequireWildcard(_globalCss);
	
	var _canvasCss = __webpack_require__(103);
	
	var __canvascss = _interopRequireWildcard(_canvasCss);
	
	var _gameCss = __webpack_require__(105);
	
	var __gamecss = _interopRequireWildcard(_gameCss);
	
	var _libVector2d = __webpack_require__(107);
	
	var _gamePlayer = __webpack_require__(108);
	
	var _gamePlayer2 = _interopRequireDefault(_gamePlayer);
	
	var _gameBackground = __webpack_require__(114);
	
	var _gameBackground2 = _interopRequireDefault(_gameBackground);
	
	var _gameWeirdBackground = __webpack_require__(115);
	
	var _gameWeirdBackground2 = _interopRequireDefault(_gameWeirdBackground);
	
	var _gameObstacle = __webpack_require__(116);
	
	var _gameCore = __webpack_require__(110);
	
	var _gameCamera = __webpack_require__(117);
	
	var _gameCamera2 = _interopRequireDefault(_gameCamera);
	
	var _gameKeyState = __webpack_require__(118);
	
	var _gameKeyState2 = _interopRequireDefault(_gameKeyState);
	
	var _Input = __webpack_require__(119);
	
	var _Input2 = _interopRequireDefault(_Input);
	
	var _dataLevel1 = __webpack_require__(120);
	
	var _dataLevel12 = _interopRequireDefault(_dataLevel1);
	
	var _dataLevel2 = __webpack_require__(121);
	
	var _dataLevel22 = _interopRequireDefault(_dataLevel2);
	
	var _dataLevel3 = __webpack_require__(122);
	
	var _dataLevel32 = _interopRequireDefault(_dataLevel3);
	
	var _dataLevel4 = __webpack_require__(123);
	
	var _dataLevel42 = _interopRequireDefault(_dataLevel4);
	
	var _dataLevel5 = __webpack_require__(124);
	
	var _dataLevel52 = _interopRequireDefault(_dataLevel5);
	
	function factory(cvars) {
	
	    var mainHandle = document.getElementById('main-handle');
	
	    var createMainCanvas = function createMainCanvas() {
	
	        var mainCanvas = document.createElement('canvas');
	        mainCanvas.classList.add('bordered-canvas');
	        mainCanvas.width = 640;
	        mainCanvas.height = 240;
	
	        var mainContext = mainCanvas.getContext('2d');
	        mainHandle.appendChild(mainCanvas);
	
	        var START_TO_OBSTACLES = 0;
	        var PLAYER_DISTANCE_FROM_CAMERA = mainContext.canvas.width / 4;
	
	        return {
	            mainCanvas: mainCanvas,
	            mainContext: mainContext,
	            START_TO_OBSTACLES: START_TO_OBSTACLES,
	            PLAYER_DISTANCE_FROM_CAMERA: PLAYER_DISTANCE_FROM_CAMERA
	        };
	    };
	
	    //Helper functions for adding or removing obstacle entities
	    //TODO(wg): clean this up, put in to a nicer set of functions
	    var obstacleHelpers = function obstacleHelpers(game) {
	        var marked2$0 = [getStage, getRandomStage].map(regeneratorRuntime.mark);
	
	        var stages = [_dataLevel12['default'], _dataLevel22['default'], _dataLevel32['default'], _dataLevel42['default'], _dataLevel52['default']];
	
	        function getStage() {
	            var i;
	            return regeneratorRuntime.wrap(function getStage$(context$3$0) {
	                while (1) switch (context$3$0.prev = context$3$0.next) {
	                    case 0:
	                        i = -1;
	
	                    case 1:
	                        if (++i == stages.length) {
	                            i = 0;
	                        }
	                        context$3$0.next = 4;
	                        return stages[i];
	
	                    case 4:
	                        context$3$0.next = 1;
	                        break;
	
	                    case 6:
	                    case 'end':
	                        return context$3$0.stop();
	                }
	            }, marked2$0[0], this);
	        }
	
	        function getRandomStage() {
	            var randomNumber;
	            return regeneratorRuntime.wrap(function getRandomStage$(context$3$0) {
	                while (1) switch (context$3$0.prev = context$3$0.next) {
	                    case 0:
	                        randomNumber = Math.random();
	
	                        randomNumber = randomNumber * (stages.length - 1);
	                        randomNumber = Math.round(randomNumber);
	
	                        context$3$0.next = 5;
	                        return stages[randomNumber];
	
	                    case 5:
	                        context$3$0.next = 0;
	                        break;
	
	                    case 7:
	                    case 'end':
	                        return context$3$0.stop();
	                }
	            }, marked2$0[1], this);
	        }
	
	        var currentObstacles = [];
	        var nextObstacles = [];
	
	        var stageIter = cvars.features.randomBlocks ? getRandomStage() : getStage();
	
	        /**
	         * Loads obstacles for one screen length, and places them one screen length away from the camera position
	         */
	        function loadObstacles(offset, optionalStageIndex) {
	            var stage = optionalStageIndex != null ? stages[optionalStageIndex] : stageIter.next().value;
	
	            var _iteratorNormalCompletion = true;
	            var _didIteratorError = false;
	            var _iteratorError = undefined;
	
	            try {
	                for (var _iterator = (0, _gameObstacle.loadObstaclesFromJson)(game.worldInfo, stage, offset)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                    var obstacle = _step.value;
	
	                    game.addEntity(obstacle);
	                    nextObstacles.push(obstacle);
	                }
	            } catch (err) {
	                _didIteratorError = true;
	                _iteratorError = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion && _iterator['return']) {
	                        _iterator['return']();
	                    }
	                } finally {
	                    if (_didIteratorError) {
	                        throw _iteratorError;
	                    }
	                }
	            }
	        }
	        /**
	         * Removes the obstacles that the camera has passed by, and swaps the current (now removed) obstacle list
	         * with the next (now visible obstacles)
	         */
	        function removeOldObstacles() {
	            var _iteratorNormalCompletion2 = true;
	            var _didIteratorError2 = false;
	            var _iteratorError2 = undefined;
	
	            try {
	                for (var _iterator2 = currentObstacles[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	                    var obstacle = _step2.value;
	
	                    game.removeEntity(obstacle);
	                }
	            } catch (err) {
	                _didIteratorError2 = true;
	                _iteratorError2 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion2 && _iterator2['return']) {
	                        _iterator2['return']();
	                    }
	                } finally {
	                    if (_didIteratorError2) {
	                        throw _iteratorError2;
	                    }
	                }
	            }
	
	            currentObstacles = nextObstacles;
	            nextObstacles = [];
	        }
	
	        return {
	            loadObstacles: loadObstacles,
	            removeOldObstacles: removeOldObstacles
	        };
	    };
	
	    function play(_ref) {
	        var onGameOver = _ref.onGameOver;
	
	        var _createMainCanvas = createMainCanvas();
	
	        var mainCanvas = _createMainCanvas.mainCanvas;
	        var mainContext = _createMainCanvas.mainContext;
	        var START_TO_OBSTACLES = _createMainCanvas.START_TO_OBSTACLES;
	        var PLAYER_DISTANCE_FROM_CAMERA = _createMainCanvas.PLAYER_DISTANCE_FROM_CAMERA;
	
	        //Holds the state of keypresses for the application (ends up being the browser window in this case)
	        var keyState = new _gameKeyState2['default']();
	
	        //Creates handlers for input on the browser window and binds key state to the keyState object
	        var inputHandler = new _Input2['default'](keyState);
	        inputHandler.listenTo(window);
	
	        var gameLogic = new _gameCore.GameLogic();
	        var player = new _gamePlayer2['default'](keyState);
	
	        var camera = (function () {
	            var GameCamera = (function (_Camera) {
	                function GameCamera() {
	                    _classCallCheck(this, GameCamera);
	
	                    _get(Object.getPrototypeOf(GameCamera.prototype), 'constructor', this).call(this);
	                    this.position = new _libVector2d.Vector2d({
	                        x: 0,
	                        y: 0
	                    });
	
	                    this.blockPosition = {
	                        left: START_TO_OBSTACLES,
	                        toLoadLeft: START_TO_OBSTACLES + mainCanvas.width,
	                        _lastBlockPosition: START_TO_OBSTACLES + 1
	                    };
	                }
	
	                _inherits(GameCamera, _Camera);
	
	                _createClass(GameCamera, [{
	                    key: 'update',
	                    value: function update(delta) {
	                        //Pegging the camera's position to the player, but only on the x-axis so we can see
	                        //the player jump properly
	                        this.position.x = -(player.position.x - PLAYER_DISTANCE_FROM_CAMERA);
	
	                        this.blockPosition.left = player.position.x - PLAYER_DISTANCE_FROM_CAMERA;
	                        this.blockPosition.toLoadLeft = this.blockPosition.left + mainCanvas.width;
	
	                        var blockRelativeXPosition = this.blockPosition.left % mainCanvas.width;
	
	                        if (blockRelativeXPosition < this._lastBlockPosition && this.blockPosition.left > START_TO_OBSTACLES + mainCanvas.width) {
	                            gameLogic.events.shouldLoadNextZone.publish();
	                        }
	
	                        this._lastBlockPosition = blockRelativeXPosition;
	                    }
	                }]);
	
	                return GameCamera;
	            })(_gameCamera2['default']);
	
	            return new GameCamera();
	        })();
	
	        var game = new _gameCore.GameCore(mainContext, camera, gameLogic);
	
	        var background = new _gameBackground2['default'](game.worldInfo);
	        var weirdBackground = new _gameWeirdBackground2['default'](game.worldInfo);
	
	        game.addEntity(player);
	        game.addEntity(background);
	        game.addEntity(weirdBackground);
	
	        var _obstacleHelpers = obstacleHelpers(game);
	
	        var loadObstacles = _obstacleHelpers.loadObstacles;
	        var removeOldObstacles = _obstacleHelpers.removeOldObstacles;
	
	        //Have to load the initial obstacles for the current screen, since the auto-loading
	        //functionality works on loading the next (off-camera) screen
	        loadObstacles(camera.blockPosition.toLoadLeft);
	
	        var loop = new _gameCore.GameLoop(game);
	
	        gameLogic.events.playerHitBlock.subscribe(function (data) {
	            loop.pauseLoop();
	            gameLogic.state.gameRunning = false;
	
	            var score = player.position.x.toFixed(0);
	
	            (onGameOver || function () {})(score);
	        });
	
	        gameLogic.events.shouldLoadNextZone.subscribe(function (data) {
	            removeOldObstacles();
	            loadObstacles(camera.blockPosition.toLoadLeft);
	        });
	
	        //Here we go! Start the game loop and start playing
	        gameLogic.state.gameRunning = true;
	        loop.startLoop();
	    }
	
	    function playGame(_ref2) {
	        var onRestart = _ref2.onRestart;
	
	        play({
	            onGameOver: function onGameOver(score) {
	                var gameOverScreen = document.createElement('div');
	                gameOverScreen.classList.add('game-game_over_screen');
	
	                var gameOverText = document.createElement('h2');
	                gameOverText.textContent = 'Game Over';
	
	                var scoreText = document.createElement('p');
	                scoreText.textContent = 'Score: ' + score;
	
	                var restartButton = document.createElement('button');
	                restartButton.textContent = 'Restart';
	                restartButton.classList.add('game-game_over_screen-button');
	                restartButton.addEventListener('click', onRestart);
	
	                gameOverScreen.appendChild(gameOverText);
	                gameOverScreen.appendChild(scoreText);
	                gameOverScreen.appendChild(restartButton);
	
	                [].slice.call(mainHandle.children).forEach(function (child) {
	                    child.classList.add('game-blurred');
	                });
	
	                mainHandle.appendChild(gameOverScreen);
	            }
	        });
	    }
	
	    function debugStage(stage) {
	        var _createMainCanvas2 = createMainCanvas();
	
	        var mainCanvas = _createMainCanvas2.mainCanvas;
	        var mainContext = _createMainCanvas2.mainContext;
	        var START_TO_OBSTACLES = _createMainCanvas2.START_TO_OBSTACLES;
	        var PLAYER_DISTANCE_FROM_CAMERA = _createMainCanvas2.PLAYER_DISTANCE_FROM_CAMERA;
	
	        var camera = new _gameCamera2['default']();
	
	        var gameLogic = new _gameCore.GameLogic();
	
	        var game = new _gameCore.GameCore(mainContext, camera, gameLogic);
	
	        var _obstacleHelpers2 = obstacleHelpers(game);
	
	        var loadObstacles = _obstacleHelpers2.loadObstacles;
	        var removeOldObstacles = _obstacleHelpers2.removeOldObstacles;
	
	        //Have to load the initial obstacles for the current screen, since the auto-loading
	        //functionality works on loading the next (off-camera) screen
	        loadObstacles(0, stage);
	
	        var loop = new _gameCore.GameLoop(game);
	
	        //We only want to run one tick of the loop, just enough to see the stage
	        gameLogic.state.gameRunning = true;
	        loop.tick();
	    }
	
	    return {
	        playGame: playGame,
	        debugStage: debugStage
	    };
	}
	
	module.exports = exports['default'];

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(100);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(102)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./global.css", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./global.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(101)();
	// imports
	
	
	// module
	exports.push([module.id, "/* apply a natural box layout model to all elements, but allowing components to change */\nhtml {\n  box-sizing: border-box;\n}\n*, *:before, *:after {\n  box-sizing: inherit;\n}\n\nbody {\n    background-color: hsl(0, 0%, 90%);\n    font-family: 'Lucida Console', Monaco, sans-serif;\n}\n\n#main {\n    text-align: center;\n}\n\n#main-handle {\n    display: inline-block;\n    position: relative;\n}", ""]);
	
	// exports


/***/ },
/* 101 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0;
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function createStyleElement() {
		var styleElement = document.createElement("style");
		var head = getHeadElement();
		styleElement.type = "text/css";
		head.appendChild(styleElement);
		return styleElement;
	}
	
	function createLinkElement() {
		var linkElement = document.createElement("link");
		var head = getHeadElement();
		linkElement.rel = "stylesheet";
		head.appendChild(linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement());
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement();
			update = updateLink.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement();
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(104);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(102)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./canvas.css", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./canvas.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(101)();
	// imports
	
	
	// module
	exports.push([module.id, ".bordered-canvas {\n    border: 1px solid hsl(0, 0%, 75%);\n}", ""]);
	
	// exports


/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(106);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(102)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./game.css", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./game.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(101)();
	// imports
	
	
	// module
	exports.push([module.id, ".game-game_over_screen {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n\n    background-color: hsla(0, 0%, 15%, 0.4);\n}\n\n.game-game_over_screen-button {\n    background-color: hsla(0, 0%, 15%, 0.4);\n    border: 1px solid black;\n    font-size: 1em;\n\n    padding: 0.5em 2em;\n    margin: 1.5em;\n}\n\n.game-blurred {\n    -webkit-filter: blur(2px);\n    filter: blur(2px);\n}\n\n[name=\"instructions\"] p {\n    display: inline-block;\n    max-width: 600px;\n    text-align: center;\n}", ""]);
	
	// exports


/***/ },
/* 107 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Vector2d = (function () {
	    function Vector2d(obj) {
	        _classCallCheck(this, Vector2d);
	
	        if (obj.x != null) {
	            this.x = obj.x;
	        }
	        if (obj.y != null) {
	            this.y = obj.y;
	        }
	
	        if (this.x == null || this.y == null) {
	            //TODO(wg): this is the most shameful error message I have come up with, but
	            //I just cannot bring myself to think of a better one right now, I'm so sorry
	            throw new TypeError("Wrong!");
	        }
	    }
	
	    _createClass(Vector2d, [{
	        key: "copy",
	
	        /**
	         * Returns a new instance of the current vector instance, which holds no references to the current one.
	         * @return {Vector2d} 
	         */
	        value: function copy() {
	            return new Vector2d({
	                x: this.x,
	                y: this.y
	            });
	        }
	    }, {
	        key: "add",
	
	        /**
	         * Returns a new instance representing the current vector instance added to another vector instance.
	         * @param {Vector2d} toAdd 
	         */
	        value: function add(toAdd) {
	            return new Vector2d({
	                x: this.x + toAdd.x,
	                y: this.y + toAdd.y
	            });
	        }
	    }]);
	
	    return Vector2d;
	})();
	
	exports.Vector2d = Vector2d;
	
	var Size2d = (function (_Vector2d) {
	    function Size2d(obj) {
	        _classCallCheck(this, Size2d);
	
	        _get(Object.getPrototypeOf(Size2d.prototype), "constructor", this).call(this, {
	            x: obj.width,
	            y: obj.height
	        });
	    }
	
	    _inherits(Size2d, _Vector2d);
	
	    _createClass(Size2d, [{
	        key: "height",
	        get: function get() {
	            return this.y;
	        }
	    }, {
	        key: "width",
	        get: function get() {
	            return this.x;
	        }
	    }]);
	
	    return Size2d;
	})(Vector2d);
	
	exports.Size2d = Size2d;

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var _EntityInterface = __webpack_require__(109);
	
	var _EntityInterface2 = _interopRequireDefault(_EntityInterface);
	
	var _core = __webpack_require__(110);
	
	var _libVector2d = __webpack_require__(107);
	
	var _libBoundingBox = __webpack_require__(113);
	
	var _libBoundingBox2 = _interopRequireDefault(_libBoundingBox);
	
	var _decoratorsEntityDescriptions = __webpack_require__(111);
	
	var Updatable = _decoratorsEntityDescriptions.Decorators.Updatable;
	
	/**
	 * Represents a player in the game world which the user controls.
	 */
	var Boundable = _decoratorsEntityDescriptions.Decorators.Boundable;
	var Renderable = _decoratorsEntityDescriptions.Decorators.Renderable;
	
	var Player = (function (_Entity) {
	    /**
	     * Player constructor
	     * @param  {KeyState} keyState  KeyState instance which the player intance will use for the current key-state
	     */
	
	    function Player(keyState) {
	        _classCallCheck(this, _Player);
	
	        _get(Object.getPrototypeOf(_Player.prototype), 'constructor', this).call(this);
	        this.size = new _libVector2d.Size2d({
	            width: 10,
	            height: 20
	        });
	
	        this.position = new _libVector2d.Vector2d({
	            x: 20,
	            y: 0
	        });
	
	        this.velocity = new _libVector2d.Vector2d({
	            x: 200,
	            y: 0
	        });
	
	        this.acceleration = new _libVector2d.Vector2d({
	            x: 0,
	            y: -750
	        });
	
	        this.keyState = keyState;
	
	        this.personalCanvas = document.createElement('canvas');
	        this.oldCameraPosition = 0;
	
	        this.zIndex = _decoratorsEntityDescriptions.ZLevels.IMMEDIATE_FOREGROUND;
	    }
	
	    _inherits(Player, _Entity);
	
	    var _Player = Player;
	
	    _createClass(_Player, [{
	        key: 'getBoundingBox',
	        value: function getBoundingBox() {
	            return new _libBoundingBox2['default'](new _libVector2d.Vector2d({
	                x: this.position.x,
	                y: this.position.y + this.size.height
	            }), new _libVector2d.Vector2d({
	                x: this.position.x + this.size.width,
	                y: this.position.y
	            }));
	        }
	    }, {
	        key: '_checkCollisions',
	
	        /**
	         * Checks the collisions for the player instance, and will signal on the GameLogic instance if the player has collided 
	         * with an obstacle. If the player has collided with an obstacle then this function returns true immediately after triggering an event on GameLogic.
	         */
	        value: function _checkCollisions(BoundingMap, gameLogic) {
	            var _iteratorNormalCompletion = true;
	            var _didIteratorError = false;
	            var _iteratorError = undefined;
	
	            try {
	                for (var _iterator = BoundingMap.get(_core.BoundingGroupNames.Blocks)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                    var entity = _step.value;
	
	                    if (_libBoundingBox2['default'].isCollision(this.getBoundingBox(), entity.getBoundingBox())) {
	                        gameLogic.events.playerHitBlock.publish();
	                        return true;
	                    }
	                }
	            } catch (err) {
	                _didIteratorError = true;
	                _iteratorError = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion && _iterator['return']) {
	                        _iterator['return']();
	                    }
	                } finally {
	                    if (_didIteratorError) {
	                        throw _iteratorError;
	                    }
	                }
	            }
	
	            return false;
	        }
	    }, {
	        key: 'update',
	        value: function update(delta, BoundingMap, gameLogic) {
	
	            if (!this._checkCollisions(BoundingMap, gameLogic)) {
	                if (this.position.y <= 0) {
	                    this.position.y = 0;
	                    this.velocity.y = 0;
	
	                    if (this.keyState.get('up_arrow')) {
	                        this.velocity.y = 400;
	                    }
	                } else {
	                    this.velocity.y += this.acceleration.y * (delta / 1000);
	                }
	
	                this.position.x += this.velocity.x * (delta / 1000);
	                this.position.y += this.velocity.y * (delta / 1000);
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render(context, globalTime, _ref, camera) {
	            var applyScreenTransform = _ref.applyScreenTransform;
	            var applyCameraTransform = _ref.applyCameraTransform;
	
	            var mixingCanvas = document.createElement('canvas');
	            mixingCanvas.width = context.canvas.width;
	            mixingCanvas.height = context.canvas.height;
	            var mixingContext = mixingCanvas.getContext('2d');
	
	            /**
	             * Displays nice trails:
	             * 
	             * this.personalCanvas holds the player rendering we did last last pass of the render loop.
	             *
	             * Since we want to have nice trails behind the player, we have to move the last rendering
	             * back to the last frame (by moving -(difference between current position and last frame's position))
	             * and then render the last frame rendering (this.personalCanvas) in to our current frame
	             * rendering (mixingContext).
	             */
	            mixingContext.save();
	
	            applyScreenTransform(mixingContext, new _libVector2d.Vector2d({ x: camera.position.x - this.oldCameraPosition.x, y: 0 }), new _libVector2d.Size2d({ width: mixingCanvas.width, height: mixingCanvas.height }));
	            mixingContext.globalAlpha = 0.93;
	            mixingContext.drawImage(this.personalCanvas, 0, 0);
	
	            mixingContext.restore();
	
	            /**
	             * Renders the actual player sprite for this frame.
	             */
	            mixingContext.save();
	
	            applyCameraTransform(mixingContext);
	            applyScreenTransform(mixingContext, this.position, this.size);
	
	            //Changing colour over time
	            var hue = (Math.sin(globalTime / 6000 * Math.PI) + 1) * 360;
	
	            mixingContext.fillStyle = 'hsl(' + hue + ', 30%, 70%)';
	
	            mixingContext.rotate(-(this.position.y * 0.0015));
	            mixingContext.fillRect(0, 0, this.size.width, this.size.height);
	
	            mixingContext.restore();
	
	            context.drawImage(mixingCanvas, 0, 0);
	
	            /**
	             * Since we have rendered this frame's sprite in to this frame's rendering and we
	             * have nothing else to render, we swap the last frame's rendering with this one,
	             * since the next time render is run this will have been the last frame's rendering.
	             */
	            this.personalCanvas = mixingCanvas;
	
	            this.oldCameraPosition = camera.position.copy();
	        }
	    }]);
	
	    Player = Updatable(Player) || Player;
	    Player = Renderable(Player) || Player;
	    Player = Boundable(_core.BoundingGroupNames.Player)(Player) || Player;
	    return Player;
	})(_EntityInterface2['default']);
	
	exports['default'] = Player;
	module.exports = exports['default'];

/***/ },
/* 109 */
/***/ function(module, exports) {

	
	/**
	 * Dummy class, more of an interface for what Entities should look like
	 */
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Entity = (function () {
	  function Entity() {
	    _classCallCheck(this, Entity);
	  }
	
	  _createClass(Entity, [{
	    key: "update",
	
	    /**
	     * Constructor is left entirely up to the implementing class to decide the signature. 
	     */
	
	    /**
	     * Called every pass through the update loop, usually at least once per frame. Don't presume
	     * any ordering of the update and render methods, this method should leave the object in a consistent state. 
	     * @param  {Number} delta Milliseconds since last call of #update
	     * @return {void}       
	     */
	    value: function update(delta) {}
	  }, {
	    key: "render",
	
	    /**
	     * Called every pass through the render loop, exactly once per frame (obviously). Don't presume
	     * any ordering of the update and render methods, this method should leave the object in a consistent
	     * state and should not contain any logic to change the object beyond rendering it.
	     * @param  {CanvasRenderingContext2D} context              The context to render the object to
	     * @param  {Number} globalTime           Elapsed time since the start of the game
	     * @param  {(CanvasRenderingContext2D, position, size) => void} applyScreenTransform Applies a screen transformation to the render context
	     * to move the context in to a state that game coordinates can be applied to. This should be called before
	     * rendering any points using game/world-coordinates
	     * @param  {(CanvasRenderingContext2D) => void} applyCameraTransform Applies a camera transformation to the render context
	     * to move the context in to a state that game coordinates can be applied to relative to the camera. This should be called before
	     * rendering any points using game/world-coordinates
	     * @return {void}                      
	     */
	    value: function render(context, globalTime, applyScreenTransform, applyCameraTransform) {}
	  }, {
	    key: "getBoundingBox",
	
	    /**
	     * Returns an axis-aligned bounding box for the object, up to the inheriting class to decide
	     * how that should be made. This can be called at any time after initialization, so beware.
	     * @return {BoundingBox} BoundingBox instance for the instance
	     */
	    value: function getBoundingBox() {
	      return new BoundingBox(new vec2({
	        x: this.position.x,
	        y: this.position.y + this.size.height
	      }), new vec2({
	        x: this.position.x + this.size.width,
	        y: this.position.y
	      }));
	    }
	  }]);
	
	  return Entity;
	})();
	
	exports["default"] = Entity;
	
	/**
	 * Note: A bigger number is better, the bigger number appears higher on the render list and will be rendered
	 * on top of everything else. This may run contrary to other engines or frameworks.
	 */
	Entity.prototype.zIndex = 0;
	module.exports = exports["default"];

	/**
	 * Make sure to call the #applyScreenTransform function to translate the render context
	 * to the screen coordinates or else any drawn points will not show up in the proper spot.
	 *
	 * To sum up => the canvas context uses a coordinate system starting from the top left with the 
	 * y-axis going top to bottom (from 0 to 100). Game coordinates are easier to think about with
	 * that y-axis flipped, so a transformation has to be applied to ensure that the game coordinates
	 * when rendered line up with the canvas coordinates. 
	 */

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _decoratorsEntityDescriptions = __webpack_require__(111);
	
	var _libChannel = __webpack_require__(112);
	
	var _libChannel2 = _interopRequireDefault(_libChannel);
	
	/**
	 * Returns the current time in milliseconds. Not a high performance timer.
	 * @return {number} The current time in milliseconds
	 */
	function now() {
	    var _nowDate = new Date();
	    return _nowDate.getTime();
	}
	
	var BoundingGroupNames = {
	    Player: Symbol('Player'),
	    Blocks: Symbol('Blocks'),
	    UNKNOWN: Symbol('UNKNOWN')
	};
	
	exports.BoundingGroupNames = BoundingGroupNames;
	/**
	 * Very stateful class for holding game logic. Put all your state in here please.
	 */
	
	var GameLogic = function GameLogic() {
	    _classCallCheck(this, GameLogic);
	
	    this.events = {
	        playerHitBlock: new _libChannel2['default'](),
	        shouldLoadNextZone: new _libChannel2['default']()
	    };
	
	    this.constants = {
	        //TODO(wg): Just gonna use 2 for now for testing, should be random at some point
	        seed: 2
	    };
	
	    this.state = {
	        gameRunning: false
	    };
	};
	
	exports.GameLogic = GameLogic;
	
	/**
	 * Core engine-ish class for the game. Handles the holding of entities, calling update and render
	 * on those entities, and describing/coralling the current game.
	 */
	
	var GameCore = (function () {
	    /**
	     * Constructor method for GameCore
	     * @param  {CanvasRenderingContext2D} context   The rendering context for the game
	     * @param  {Camera} camera    A camera instance for the game
	     * @param  {GameLogic} gameLogic Game logic instance for the game
	     */
	
	    function GameCore(context, camera, gameLogic) {
	        var _this = this;
	
	        _classCallCheck(this, GameCore);
	
	        this.context = context;
	        this.camera = camera;
	        this.gameLogic = gameLogic;
	
	        this._entities = new Set();
	        this._updatables = new Set();
	
	        this._renderList = [];
	        this._renderList.unsorted = false;
	        this._renderList.entityRemoved = false;
	
	        this._boundingGroups = new Map();
	
	        //Sets up Set objects for each bounding group defined in the BoundingGroupNames enum
	        var _iteratorNormalCompletion = true;
	        var _didIteratorError = false;
	        var _iteratorError = undefined;
	
	        try {
	            for (var _iterator = Object.keys(BoundingGroupNames)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                var _name = _step.value;
	
	                this._boundingGroups.set(BoundingGroupNames[_name], new Set());
	            }
	        } catch (err) {
	            _didIteratorError = true;
	            _iteratorError = err;
	        } finally {
	            try {
	                if (!_iteratorNormalCompletion && _iterator['return']) {
	                    _iterator['return']();
	                }
	            } finally {
	                if (_didIteratorError) {
	                    throw _iteratorError;
	                }
	            }
	        }
	
	        this._renderMatrices = {
	            /**
	             * Sets the function to transform points for rendering. This is passed to the game's
	             * render loop
	             * @param  {CanvasRenderingContext2D} context The context to transform
	             * @param  {Vector2d} position 
	             * @param  {Size2d} size     
	             */
	            applyScreenTransform: function applyScreenTransform(context, position, size) {
	                var renderCoordinates = {
	                    y: _this.worldInfo.height - size.height - position.y,
	                    x: position.x
	                };
	                context.translate(renderCoordinates.x, renderCoordinates.y);
	            },
	
	            /**
	             * Sets the function to transform a context to the camera's view for rendering. 
	             * This is passed to the game's render loop
	             * @param  {CanvasRenderingContext2D} context The context to transform
	             * @param  {Size2d} size     
	             */
	            applyCameraTransform: function applyCameraTransform(context) {
	                //Camera transform
	                context.translate(_this.camera.position.x, _this.camera.position.y);
	            }
	        };
	    }
	
	    _createClass(GameCore, [{
	        key: 'addEntity',
	        value: function addEntity(entity) {
	            if (!this._entities.has(entity)) {
	                this._entities.add(entity);
	                if (_decoratorsEntityDescriptions.Decorators.isUpdatable(entity)) {
	                    this._updatables.add(entity);
	                }
	                if (_decoratorsEntityDescriptions.Decorators.isRenderable(entity)) {
	                    this._renderList.push(entity);
	                    this._renderList.unsorted = true;
	                }
	                if (_decoratorsEntityDescriptions.Decorators.isBoundable(entity)) {
	                    if (this._boundingGroups.has(_decoratorsEntityDescriptions.Decorators.getBoundingGroup(entity))) {
	                        this._boundingGroups.get(_decoratorsEntityDescriptions.Decorators.getBoundingGroup(entity)).add(entity);
	                    } else {
	                        console.warn('Bounding group \'' + _decoratorsEntityDescriptions.Decorators.getBoundingGroup(entity) + '\' is not defined for this game');
	                    }
	                }
	                return this;
	            }
	        }
	    }, {
	        key: 'removeEntity',
	        value: function removeEntity(entity) {
	            var _this2 = this;
	
	            [this._entities, this._updatables].concat((function () {
	                var _concat = [];
	                var _iteratorNormalCompletion2 = true;
	                var _didIteratorError2 = false;
	                var _iteratorError2 = undefined;
	
	                try {
	                    for (var _iterator2 = _this2._boundingGroups.values()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	                        var group = _step2.value;
	
	                        _concat.push(group);
	                    }
	                } catch (err) {
	                    _didIteratorError2 = true;
	                    _iteratorError2 = err;
	                } finally {
	                    try {
	                        if (!_iteratorNormalCompletion2 && _iterator2['return']) {
	                            _iterator2['return']();
	                        }
	                    } finally {
	                        if (_didIteratorError2) {
	                            throw _iteratorError2;
	                        }
	                    }
	                }
	
	                return _concat;
	            })()).forEach(function (set) {
	                set['delete'](entity);
	            });
	
	            //Important: this does not actually mean the entity has been removed, only that
	            //the list should be filtered through later. Current implementation is to wait
	            //until the next update loop and clean out the list then.
	            this._renderList.entityRemoved = true;
	        }
	    }, {
	        key: 'update',
	
	        /**
	         * Updates the game and calls the update loop on added entities
	         * @param  {number} delta Time in milliseconds since the last call of update
	         */
	        value: function update(delta) {
	            var _this3 = this;
	
	            //Making sure that the renderList only has entities that have not been removed
	            //from the game
	            if (this._renderList.entityRemoved) {
	                this._renderList = this._renderList.filter(function (entity) {
	                    return _this3._entities.has(entity);
	                });
	            }
	
	            //Sort the renderList by the z-index for proper rendering order, but only if
	            //an entity has been added since the last sort
	            if (this._renderList.unsorted) {
	                this._renderList.sort(function (firstEntity, secondEntity) {
	                    return firstEntity.zIndex - secondEntity.zIndex;
	                });
	            }
	
	            this._updatables.forEach(function (updatable) {
	                if (_this3.gameLogic.state.gameRunning) {
	                    updatable.update(delta, _this3._boundingGroups, _this3.gameLogic);
	                }
	            });
	
	            this.camera.update(delta);
	        }
	    }, {
	        key: 'render',
	
	        /**
	         * Renders the game and calls the render loop on added entities
	         * @param  {number} globalTime Elapsed time since the start of the game
	         */
	        value: function render(globalTime) {
	            var _this4 = this;
	
	            this.context.save();
	
	            //Clearing the screen
	            this.context.fillStyle = 'hsl(0, 0%, 99%)';
	            this.context.fillRect(0, 0, this.context.canvas.width, this.context.canvas.height);
	
	            this._renderList.forEach(function (renderable) {
	                _this4.context.save();
	                renderable.render(_this4.context, globalTime, _this4._renderMatrices, _this4.camera);
	                _this4.context.restore();
	            });
	
	            this.context.restore();
	        }
	    }, {
	        key: 'worldInfo',
	        get: function get() {
	            return {
	                height: this.context.canvas.height,
	                width: this.context.canvas.width
	            };
	        }
	    }]);
	
	    return GameCore;
	})();
	
	exports.GameCore = GameCore;
	
	/**
	 * Class for handling the continuous loop of a game.
	 */
	
	var GameLoop = (function () {
	    function GameLoop(gameCore) {
	        _classCallCheck(this, GameLoop);
	
	        this.gameCore = gameCore;
	        this._lastUpdateTime = 0;
	
	        this.running = false;
	        this._interval = null;
	    }
	
	    _createClass(GameLoop, [{
	        key: 'update',
	        value: function update() {
	            if (this._lastUpdateTime == 0) {
	                this._lastUpdateTime = now();
	            }
	            var _now = now();
	            var delta = _now - this._lastUpdateTime;
	            this._lastUpdateTime = _now;
	
	            this.gameCore.update(delta);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            this.gameCore.render(this._lastUpdateTime);
	        }
	    }, {
	        key: 'tick',
	        value: function tick() {
	            this.update();
	            this.render();
	        }
	    }, {
	        key: 'startLoop',
	
	        /**
	         * Starts or resumes the game loop and continuously calls #update and #render on the attached
	         * GameCore until paused.
	         */
	        value: function startLoop() {
	            var _this5 = this;
	
	            this.running = true;
	            this._interval = setInterval(function () {
	                _this5.tick();
	            }, 1);
	        }
	    }, {
	        key: 'pauseLoop',
	
	        /**
	         * Pauses the game loop, can be resumed with #startLoop
	         */
	        value: function pauseLoop() {
	            this.running = false;
	            clearInterval(this._interval);
	        }
	    }]);
	
	    return GameLoop;
	})();
	
	exports.GameLoop = GameLoop;

/***/ },
/* 111 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	var Symbols = {
	    updatable: Symbol('updatable'),
	    renderable: Symbol('renderable'),
	    //That can't be a word...
	    boundable: Symbol('boundable')
	};
	
	exports.Symbols = Symbols;
	var ZLevels = {
	    BACKGROUND: -100,
	    DEFAULT: 0,
	    FOREGROUND: 50,
	    IMMEDIATE_FOREGROUND: 100
	};
	
	exports.ZLevels = ZLevels;
	var Decorators = {
	    /**
	     * Marks a class as being able to be updated in a GameCore instance
	     */
	    Updatable: function Updatable(target) {
	        target.prototype[Symbols.updatable] = true;
	    },
	    isUpdatable: function isUpdatable(target) {
	        return !!target[Symbols.updatable];
	    },
	
	    /**
	     * Marks a class as being able to be renderable in a GameCore instance
	     */
	    Renderable: function Renderable(target) {
	        target.prototype[Symbols.renderable] = true;
	    },
	    isRenderable: function isRenderable(target) {
	        return !!target[Symbols.renderable];
	    },
	
	    /**
	     * Marks a class as being able to be collided against in a GameCore instance.
	     * Needs to be called with a valid bounding group identifier, identifying which
	     * bounding group this class should belong to. 
	     */
	    Boundable: function Boundable(boundableGroup) {
	        return function (target) {
	            target.prototype[Symbols.boundable] = boundableGroup;
	        };
	    },
	    isBoundable: function isBoundable(target) {
	        return !!target[Symbols.boundable];
	    },
	    getBoundingGroup: function getBoundingGroup(target) {
	        return target[Symbols.boundable];
	    }
	};
	exports.Decorators = Decorators;

/***/ },
/* 112 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Channel = (function () {
	    function Channel() {
	        _classCallCheck(this, Channel);
	
	        this._listeners = [];
	    }
	
	    _createClass(Channel, [{
	        key: "subscribe",
	        value: function subscribe(cb) {
	            this._listeners.push(cb);
	        }
	    }, {
	        key: "publish",
	        value: function publish(data) {
	            var _iteratorNormalCompletion = true;
	            var _didIteratorError = false;
	            var _iteratorError = undefined;
	
	            try {
	                for (var _iterator = this._listeners[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                    var listener = _step.value;
	
	                    listener(data);
	                }
	            } catch (err) {
	                _didIteratorError = true;
	                _iteratorError = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion && _iterator["return"]) {
	                        _iterator["return"]();
	                    }
	                } finally {
	                    if (_didIteratorError) {
	                        throw _iteratorError;
	                    }
	                }
	            }
	        }
	    }]);
	
	    return Channel;
	})();
	
	exports["default"] = Channel;
	module.exports = exports["default"];

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _Vector2d = __webpack_require__(107);
	
	var _Vector2d2 = _interopRequireDefault(_Vector2d);
	
	/**
	 * Represents an axis-aligned bounding box
	 */
	
	var BoundingBox = (function () {
	    /**
	     * BoundingBox constructor
	     * @param  {Vector2d} topLeft     top left point of the bounding box
	     * @param  {Vector2d} bottomRight bottom right point of the bounding box
	     */
	
	    function BoundingBox(topLeft, bottomRight) {
	        _classCallCheck(this, BoundingBox);
	
	        this.topLeft = topLeft;
	        this.bottomRight = bottomRight;
	    }
	
	    _createClass(BoundingBox, [{
	        key: 'leftX',
	        get: function get() {
	            return this.topLeft.x;
	        }
	    }, {
	        key: 'rightX',
	        get: function get() {
	            return this.bottomRight.x;
	        }
	    }, {
	        key: 'topY',
	        get: function get() {
	            return this.topLeft.y;
	        }
	    }, {
	        key: 'bottomY',
	        get: function get() {
	            return this.bottomRight.y;
	        }
	    }], [{
	        key: 'isCollision',
	
	        /**
	         * Returns true if there is a collision between two boxes, false otherwise.
	         * @param  {BoundingBox}  box1 
	         * @param  {BoundingBox}  box2 
	         * @return {Boolean}      
	         */
	        value: function isCollision(box1, box2) {
	            var xCollision = false;
	            var yCollision = false;
	
	            if (box1.leftX < box2.leftX) {
	                if (box1.rightX > box2.leftX) {
	                    xCollision = true;
	                }
	            } else {
	                if (box2.rightX > box1.leftX) {
	                    xCollision = true;
	                }
	            }
	            if (box1.bottomY < box2.bottomY) {
	                if (box1.topY > box2.bottomY) {
	                    yCollision = true;
	                }
	            } else {
	                if (box2.topY > box1.bottomY) {
	                    yCollision = true;
	                }
	            }
	
	            return xCollision && yCollision;
	        }
	    }]);
	
	    return BoundingBox;
	})();
	
	exports['default'] = BoundingBox;
	module.exports = exports['default'];

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var _EntityInterface = __webpack_require__(109);
	
	var _EntityInterface2 = _interopRequireDefault(_EntityInterface);
	
	var _decoratorsEntityDescriptions = __webpack_require__(111);
	
	var Renderable = _decoratorsEntityDescriptions.Decorators.Renderable;
	
	function _gridTextureForMoving(worldInfo) {
	    var BLOCK_WIDTH = worldInfo.width / 15;
	    var textureCanvas = document.createElement('canvas');
	    textureCanvas.width = worldInfo.width * 1.0 + BLOCK_WIDTH;
	    textureCanvas.height = worldInfo.height * 1.0;
	    var textureContext = textureCanvas.getContext('2d');
	
	    var width = textureCanvas.width;
	    var height = textureCanvas.height;
	
	    textureContext.strokeStyle = 'hsl(0, 0%, 90%)';
	
	    for (var i = 0; i < width + BLOCK_WIDTH; i += BLOCK_WIDTH) {
	        var path = new Path2D();
	        path.moveTo(i, 0);
	        path.lineTo(i, height);
	        textureContext.stroke(path);
	    }
	    for (var i = 0; i < height + BLOCK_WIDTH; i += BLOCK_WIDTH) {
	        var path = new Path2D();
	        path.moveTo(0, i);
	        path.lineTo(width, i);
	        textureContext.stroke(path);
	    }
	
	    return {
	        gridCanvas: textureCanvas,
	        BLOCK_WIDTH: BLOCK_WIDTH
	    };
	}
	
	var Background = (function (_Entity) {
	    /**
	     * Player constructor
	     * @param  {KeyState} keyState  KeyState instance which the player intance will use for the current key-state
	     */
	
	    function Background(worldInfo) {
	        _classCallCheck(this, _Background);
	
	        _get(Object.getPrototypeOf(_Background.prototype), 'constructor', this).call(this);
	
	        this.zIndex = _decoratorsEntityDescriptions.ZLevels.BACKGROUND;
	
	        var _gridTextureForMoving2 = _gridTextureForMoving(worldInfo);
	
	        var gridCanvas = _gridTextureForMoving2.gridCanvas;
	        var BLOCK_WIDTH = _gridTextureForMoving2.BLOCK_WIDTH;
	
	        this.gridCanvas = gridCanvas;
	        this.BLOCK_WIDTH = BLOCK_WIDTH;
	    }
	
	    _inherits(Background, _Entity);
	
	    var _Background = Background;
	
	    _createClass(_Background, [{
	        key: 'render',
	        value: function render(context, globalTime, _ref, camera) {
	            var applyScreenTransform = _ref.applyScreenTransform;
	            var applyCameraTransform = _ref.applyCameraTransform;
	
	            context.save();
	
	            var moveBy = camera.position.x % this.BLOCK_WIDTH;
	
	            context.translate(moveBy, 0);
	
	            context.drawImage(this.gridCanvas, 0, 0);
	
	            context.restore();
	        }
	    }]);
	
	    Background = Renderable(Background) || Background;
	    return Background;
	})(_EntityInterface2['default']);
	
	exports['default'] = Background;
	module.exports = exports['default'];

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var _EntityInterface = __webpack_require__(109);
	
	var _EntityInterface2 = _interopRequireDefault(_EntityInterface);
	
	var _decoratorsEntityDescriptions = __webpack_require__(111);
	
	var Renderable = _decoratorsEntityDescriptions.Decorators.Renderable;
	
	function _gridTextureForMoving(worldInfo) {
	    var BLOCK_WIDTH = worldInfo.width / 15;
	    var textureCanvas = document.createElement('canvas');
	    textureCanvas.width = worldInfo.width * 1.5;
	    textureCanvas.height = worldInfo.width * 1.5;
	    var textureContext = textureCanvas.getContext('2d');
	
	    var width = textureCanvas.width;
	    var height = textureCanvas.height;
	
	    textureContext.strokeStyle = 'hsl(0, 0%, 90%)';
	
	    for (var i = 0; i < width + BLOCK_WIDTH; i += BLOCK_WIDTH) {
	        var path = new Path2D();
	        path.moveTo(i, 0);
	        path.lineTo(i, height);
	        textureContext.stroke(path);
	    }
	    for (var i = 0; i < height + BLOCK_WIDTH; i += BLOCK_WIDTH) {
	        var path = new Path2D();
	        path.moveTo(0, i);
	        path.lineTo(width, i);
	        textureContext.stroke(path);
	    }
	
	    return {
	        gridCanvas: textureCanvas,
	        BLOCK_WIDTH: BLOCK_WIDTH
	    };
	}
	
	var timeSpeed = 0.5;
	
	var WeirdBackground = (function (_Entity) {
	    /**
	     * Player constructor
	     * @param  {KeyState} keyState  KeyState instance which the player intance will use for the current key-state
	     */
	
	    function WeirdBackground(worldInfo) {
	        _classCallCheck(this, _WeirdBackground);
	
	        _get(Object.getPrototypeOf(_WeirdBackground.prototype), 'constructor', this).call(this);
	
	        this.parentCanvasSize = {
	            width: worldInfo.width,
	            height: worldInfo.height
	        };
	
	        this.zIndex = -50;
	
	        var _gridTextureForMoving2 = _gridTextureForMoving(worldInfo);
	
	        var gridCanvas = _gridTextureForMoving2.gridCanvas;
	        var BLOCK_WIDTH = _gridTextureForMoving2.BLOCK_WIDTH;
	
	        this.gridCanvas = gridCanvas;
	        this.BLOCK_WIDTH = BLOCK_WIDTH;
	    }
	
	    _inherits(WeirdBackground, _Entity);
	
	    var _WeirdBackground = WeirdBackground;
	
	    _createClass(_WeirdBackground, [{
	        key: 'render',
	        value: function render(context, globalTime, _ref, camera) {
	            var _this = this;
	
	            var applyScreenTransform = _ref.applyScreenTransform;
	            var applyCameraTransform = _ref.applyCameraTransform;
	
	            var width = this.parentCanvasSize.width;
	            var height = this.parentCanvasSize.height;
	
	            context.save();
	
	            var centerGridTransformation = function centerGridTransformation() {
	                var moveByX = _this.gridCanvas.width / 2;
	                var moveByY = _this.gridCanvas.height / 2;
	
	                context.translate(-moveByX, -moveByY);
	            };
	
	            var angle = Math.sin(timeSpeed * (globalTime / 1000)) + 1;
	
	            var scaleByX = Math.sin(timeSpeed * 0.5 * (globalTime / 1000)) + 1;
	            var scaleByY = angle;
	
	            context.translate(width / 2, height / 2);
	            context.rotate(angle);
	            context.scale(scaleByX + 1, scaleByY + 1);
	            centerGridTransformation();
	
	            context.globalAlpha = 0.25;
	
	            context.drawImage(this.gridCanvas, 0, 0);
	
	            context.restore();
	        }
	    }]);
	
	    WeirdBackground = Renderable(WeirdBackground) || WeirdBackground;
	    return WeirdBackground;
	})(_EntityInterface2['default']);
	
	exports['default'] = WeirdBackground;
	module.exports = exports['default'];

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	exports.loadObstaclesFromJson = loadObstaclesFromJson;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var marked0$0 = [loadObstaclesFromJson].map(regeneratorRuntime.mark);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var _EntityInterface = __webpack_require__(109);
	
	var _EntityInterface2 = _interopRequireDefault(_EntityInterface);
	
	var _libVector2d = __webpack_require__(107);
	
	var _core = __webpack_require__(110);
	
	var _libBoundingBox = __webpack_require__(113);
	
	var _libBoundingBox2 = _interopRequireDefault(_libBoundingBox);
	
	var _decoratorsEntityDescriptions = __webpack_require__(111);
	
	var Updatable = _decoratorsEntityDescriptions.Decorators.Updatable;
	
	/**
	 * Represents an obstacle in the game world which the player has to avoid or the game ends.
	 */
	var Boundable = _decoratorsEntityDescriptions.Decorators.Boundable;
	var Renderable = _decoratorsEntityDescriptions.Decorators.Renderable;
	
	var Obstacle = (function (_Entity) {
	    /**
	     * Obstacle constructor
	     * @param  {Size2d} size      Initial size for the obstacle
	     * @param  {Vector2d} position  Initial position for the obstacle
	     */
	
	    function Obstacle(size, position) {
	        _classCallCheck(this, _Obstacle);
	
	        _get(Object.getPrototypeOf(_Obstacle.prototype), 'constructor', this).call(this);
	        this.size = new _libVector2d.Size2d({
	            width: size.width,
	            height: size.height
	        });
	        this.position = new _libVector2d.Vector2d({
	            x: position.x,
	            y: position.y
	        });
	
	        this._colour = 'hsl(' + Math.random() * 360 + ', 30%, 50%)';
	    }
	
	    _inherits(Obstacle, _Entity);
	
	    var _Obstacle = Obstacle;
	
	    _createClass(_Obstacle, [{
	        key: 'getBoundingBox',
	        value: function getBoundingBox() {
	            return new _libBoundingBox2['default'](new _libVector2d.Vector2d({
	                x: this.position.x,
	                y: this.position.y + this.size.height
	            }), new _libVector2d.Vector2d({
	                x: this.position.x + this.size.width,
	                y: this.position.y
	            }));
	        }
	    }, {
	        key: 'render',
	        value: function render(context, globalTime, _ref) {
	            var applyScreenTransform = _ref.applyScreenTransform;
	            var applyCameraTransform = _ref.applyCameraTransform;
	
	            applyCameraTransform(context);
	
	            applyScreenTransform(context, this.position, this.size);
	
	            context.fillStyle = this._colour;
	            context.fillRect(0, 0, this.size.width, this.size.height);
	        }
	    }]);
	
	    Obstacle = Updatable(Obstacle) || Obstacle;
	    Obstacle = Renderable(Obstacle) || Obstacle;
	    Obstacle = Boundable(_core.BoundingGroupNames.Blocks)(Obstacle) || Obstacle;
	    return Obstacle;
	})(_EntityInterface2['default']);
	
	exports.Obstacle = Obstacle;
	
	/**
	 * Generator which loads a series of blocks from a JSON list and places it relative in
	 * the game world based on the given x-offset
	 * @param {WorldInfo} worldInfo     WorldInfo for the game world that the obstacles will be added to
	 * @param {Obstacle[]} JsonList      List of obstacle definitions that will be loaded
	 * @param {number} offsetX       x-offset for the camera position in the world
	 * @yield {Obstacle} initialized Obstacle instance
	 */
	
	function loadObstaclesFromJson(worldInfo, JsonList, offsetX) {
	    var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, obstacleDef;
	
	    return regeneratorRuntime.wrap(function loadObstaclesFromJson$(context$1$0) {
	        while (1) switch (context$1$0.prev = context$1$0.next) {
	            case 0:
	                _iteratorNormalCompletion = true;
	                _didIteratorError = false;
	                _iteratorError = undefined;
	                context$1$0.prev = 3;
	                _iterator = JsonList[Symbol.iterator]();
	
	            case 5:
	                if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
	                    context$1$0.next = 12;
	                    break;
	                }
	
	                obstacleDef = _step.value;
	                context$1$0.next = 9;
	                return new Obstacle(obstacleDef.size, new _libVector2d.Vector2d({
	                    x: obstacleDef.position.x + offsetX,
	                    y: obstacleDef.position.y
	                }));
	
	            case 9:
	                _iteratorNormalCompletion = true;
	                context$1$0.next = 5;
	                break;
	
	            case 12:
	                context$1$0.next = 18;
	                break;
	
	            case 14:
	                context$1$0.prev = 14;
	                context$1$0.t0 = context$1$0['catch'](3);
	                _didIteratorError = true;
	                _iteratorError = context$1$0.t0;
	
	            case 18:
	                context$1$0.prev = 18;
	                context$1$0.prev = 19;
	
	                if (!_iteratorNormalCompletion && _iterator['return']) {
	                    _iterator['return']();
	                }
	
	            case 21:
	                context$1$0.prev = 21;
	
	                if (!_didIteratorError) {
	                    context$1$0.next = 24;
	                    break;
	                }
	
	                throw _iteratorError;
	
	            case 24:
	                return context$1$0.finish(21);
	
	            case 25:
	                return context$1$0.finish(18);
	
	            case 26:
	            case 'end':
	                return context$1$0.stop();
	        }
	    }, marked0$0[0], this, [[3, 14, 18, 26], [19,, 21, 25]]);
	}

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _libVector2d = __webpack_require__(107);
	
	var Camera = (function () {
	    function Camera() {
	        _classCallCheck(this, Camera);
	
	        this.position = new _libVector2d.Vector2d({
	            x: 0,
	            y: 0
	        });
	    }
	
	    _createClass(Camera, [{
	        key: 'update',
	        value: function update(delta) {}
	    }]);
	
	    return Camera;
	})();
	
	exports['default'] = Camera;
	module.exports = exports['default'];

/***/ },
/* 118 */
/***/ function(module, exports) {

	/**
	 * Holds the state of keys for the game for the current moment in time.
	 */
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var KeyState = (function () {
	    function KeyState() {
	        _classCallCheck(this, KeyState);
	
	        this.states = {
	            left_arrow: false,
	            right_arrow: false,
	            up_arrow: false,
	            down_arrow: false,
	            left_mouse_button: false,
	            right_mouse_button: false
	        };
	
	        this.dirty = false;
	    }
	
	    _createClass(KeyState, [{
	        key: "set",
	
	        /**
	         * Sets a given key to the given state
	         * @param {string} key   Key for the key of which the state if being changed
	         * @param {boolean} state true if the key is pressed, false otherwise
	         */
	        value: function set(key, state) {
	            this.states[key] = state;
	            this.dirty = true;
	        }
	    }, {
	        key: "get",
	
	        /**
	         * Returns the state of the given key. Throws an error if the key is not valid for
	         * this KeyState instance
	         * @param  {string} key Key for which to return the state of
	         * @return {boolean}     true if the key is pressed, false otherwise
	         */
	        value: function get(key) {
	            if (this.states[key] == undefined) {
	                throw new Error("Invalid key provided.");
	            }
	            return this.states[key];
	        }
	    }]);
	
	    return KeyState;
	})();
	
	exports["default"] = KeyState;
	module.exports = exports["default"];

/***/ },
/* 119 */
/***/ function(module, exports) {

	/**
	 * Helper function for creating an event handler for binding window input (keypresses) to keyState 
	 * @param  {KeyState} keyState a keyState object to set the key state of
	 * @param  {boolean} upOrDown whether this handler is for keyup (true) or keydown (false)
	 * @return {Function}          Event handler to bind to a keypress event
	 */
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function makeHandleKeyPresses(keyState, upOrDown) {
	    return function handleKeyPresses(e) {
	        var code = e.keyCode;
	        if (e.charCode && code == 0) {
	            code = e.charCode;
	        }
	
	        switch (code) {
	            case 37:
	                keyState.set('left_arrow', upOrDown);
	                break;
	            case 38:
	                keyState.set('up_arrow', upOrDown);
	                break;
	            case 39:
	                keyState.set('right_arrow', upOrDown);
	                break;
	            case 40:
	                keyState.set('down_arrow', upOrDown);
	                break;
	        }
	        if (keyState.changed) {
	            e.preventDefault();
	            keyState.changed = false;
	        }
	    };
	}
	
	/**
	 * Slim class which binds keydown and keyup events to a KeyState object for a given DOM handle
	 */
	
	var Input = (function () {
	    function Input(keyState) {
	        _classCallCheck(this, Input);
	
	        this.keyState = keyState;
	    }
	
	    _createClass(Input, [{
	        key: 'listenTo',
	
	        /**
	         * Adds event listeners on the given DOM handle
	         * @param  {HTMLElement} domHandle DOM element to add the event listeners to
	         */
	        value: function listenTo(domHandle) {
	            domHandle.addEventListener('keydown', makeHandleKeyPresses(this.keyState, true));
	            domHandle.addEventListener('keyup', makeHandleKeyPresses(this.keyState, false));
	        }
	    }]);
	
	    return Input;
	})();
	
	exports['default'] = Input;
	module.exports = exports['default'];

/***/ },
/* 120 */
/***/ function(module, exports) {

	/**
	 * Some notes on levels:
	 *
	 * They're not so much levels, they're more of block layouts one screen-width wide that are
	 * put together randomly to form one continuous level.
	 *
	 * Assumptions:
	 *     - screen width is 640
	 *     - screen height is 240
	 *
	 * Good practices:
	 *     - first block that the player can hit should be at least 160 units in to the level, 
	 *     just so that there's a nice break between each segment
	 */
	
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = [{
	    //Decoration blocks (for testing):
	    size: {
	        height: 30,
	        width: 30
	    },
	    position: {
	        x: 0,
	        y: 210
	    }
	}, {
	    size: {
	        height: 30,
	        width: 30
	    },
	    position: {
	        x: 160,
	        y: 210
	    }
	}, {
	    size: {
	        height: 30,
	        width: 30
	    },
	    position: {
	        x: 320,
	        y: 210
	    }
	},
	//Real blocks start here:
	{
	    size: {
	        height: 40,
	        width: 30
	    },
	    position: {
	        x: 160,
	        y: 0
	    }
	}, {
	    size: {
	        height: 50,
	        width: 30
	    },
	    position: {
	        x: 200,
	        y: 0
	    }
	}, {
	    size: {
	        height: 60,
	        width: 30
	    },
	    position: {
	        x: 400,
	        y: 0
	    }
	}, {
	    size: {
	        height: 60,
	        width: 30
	    },
	    position: {
	        x: 600,
	        y: 0
	    }
	}];
	module.exports = exports["default"];

/***/ },
/* 121 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = [{
	    //Decoration blocks (for testing):
	    size: {
	        height: 30,
	        width: 30
	    },
	    position: {
	        x: 0,
	        y: 210
	    }
	}, {
	    size: {
	        height: 30,
	        width: 30
	    },
	    position: {
	        x: 160,
	        y: 210
	    }
	}, {
	    size: {
	        height: 30,
	        width: 30
	    },
	    position: {
	        x: 320,
	        y: 210
	    }
	}, {
	    size: {
	        height: 30,
	        width: 30
	    },
	    position: {
	        x: 480,
	        y: 210
	    }
	},
	//Real blocks start here:
	{
	    size: {
	        height: 40,
	        width: 15
	    },
	    position: {
	        x: 160,
	        y: 0
	    }
	}, {
	    size: {
	        height: 50,
	        width: 15
	    },
	    position: {
	        x: 180,
	        y: 0
	    }
	}, {
	    size: {
	        height: 60,
	        width: 15
	    },
	    position: {
	        x: 200,
	        y: 0
	    }
	},
	//
	{
	    size: {
	        height: 60,
	        width: 15
	    },
	    position: {
	        x: 480,
	        y: 0
	    }
	}, {
	    size: {
	        height: 50,
	        width: 15
	    },
	    position: {
	        x: 500,
	        y: 0
	    }
	}, {
	    size: {
	        height: 40,
	        width: 15
	    },
	    position: {
	        x: 520,
	        y: 0
	    }
	}];
	module.exports = exports["default"];

/***/ },
/* 122 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = [{
	    size: {
	        height: 60,
	        width: 30
	    },
	    position: {
	        x: 0,
	        y: 180
	    }
	}, {
	    size: {
	        height: 80,
	        width: 30
	    },
	    position: {
	        x: 210,
	        y: 160
	    }
	}, {
	    size: {
	        height: 10,
	        width: 30
	    },
	    position: {
	        x: 320,
	        y: 230
	    }
	},
	//Ground blocks start here:
	{
	    size: {
	        height: 40,
	        width: 30
	    },
	    position: {
	        x: 160,
	        y: 0
	    }
	}, {
	    size: {
	        height: 60,
	        width: 30
	    },
	    position: {
	        x: 400,
	        y: 0
	    }
	}, {
	    size: {
	        height: 30,
	        width: 60
	    },
	    position: {
	        x: 570,
	        y: 0
	    }
	}];
	module.exports = exports["default"];

/***/ },
/* 123 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = [{
	    size: {
	        height: 60,
	        width: 400
	    },
	    position: {
	        x: 0,
	        y: 180
	    }
	}, {
	    size: {
	        height: 80,
	        width: 30
	    },
	    position: {
	        x: 210,
	        y: 160
	    }
	}, {
	    size: {
	        height: 70,
	        width: 30
	    },
	    position: {
	        x: 320,
	        y: 170
	    }
	},
	//Ground blocks start here:
	{
	    size: {
	        height: 40,
	        width: 30
	    },
	    position: {
	        x: 160,
	        y: 0
	    }
	}, {
	    size: {
	        height: 30,
	        width: 30
	    },
	    position: {
	        x: 240,
	        y: 0
	    }
	}, {
	    size: {
	        height: 60,
	        width: 60
	    },
	    position: {
	        x: 360,
	        y: 0
	    }
	}, {
	    size: {
	        height: 30,
	        width: 30
	    },
	    position: {
	        x: 560,
	        y: 0
	    }
	}];
	module.exports = exports["default"];

/***/ },
/* 124 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = [
	//Ground blocks start here:
	{
	    size: {
	        height: 30,
	        width: 60
	    },
	    position: {
	        x: 160,
	        y: 0
	    }
	}, {
	    size: {
	        height: 60,
	        width: 30
	    },
	    position: {
	        x: 240,
	        y: 0
	    }
	}, {
	    size: {
	        height: 30,
	        width: 60
	    },
	    position: {
	        x: 380,
	        y: 0
	    }
	}, {
	    size: {
	        height: 80,
	        width: 30
	    },
	    position: {
	        x: 560,
	        y: 0
	    }
	}];
	module.exports = exports["default"];

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map