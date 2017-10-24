/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp"];
/******/ 	window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, callbacks = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId])
/******/ 				callbacks.push.apply(callbacks, installedChunks[chunkId]);
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			modules[moduleId] = moreModules[moduleId];
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules);
/******/ 		while(callbacks.length)
/******/ 			callbacks.shift().call(null, __webpack_require__);
/******/ 		if(moreModules[0]) {
/******/ 			installedModules[0] = 0;
/******/ 			return __webpack_require__(0);
/******/ 		}
/******/ 	};

/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// object to store loaded and loading chunks
/******/ 	// "0" means "already loaded"
/******/ 	// Array means "loading", array contains callbacks
/******/ 	var installedChunks = {
/******/ 		1:0
/******/ 	};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}

/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId, callback) {
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] === 0)
/******/ 			return callback.call(null, __webpack_require__);

/******/ 		// an array means "currently loading".
/******/ 		if(installedChunks[chunkId] !== undefined) {
/******/ 			installedChunks[chunkId].push(callback);
/******/ 		} else {
/******/ 			// start chunk loading
/******/ 			installedChunks[chunkId] = [callback];
/******/ 			var head = document.getElementsByTagName('head')[0];
/******/ 			var script = document.createElement('script');
/******/ 			script.type = 'text/javascript';
/******/ 			script.charset = 'utf-8';
/******/ 			script.async = true;

/******/ 			script.src = __webpack_require__.p + "" + chunkId + "." + ({"0":"a"}[chunkId]||chunkId) + ".js";
/******/ 			head.appendChild(script);
/******/ 		}
/******/ 	};

/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(292);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _assign = __webpack_require__(2);

	var _assign2 = _interopRequireDefault(_assign);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _assign2.default || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];

	    for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }

	  return target;
	};

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(3), __esModule: true };

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(4);
	module.exports = __webpack_require__(7).Object.assign;


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(5);

	$export($export.S + $export.F, 'Object', { assign: __webpack_require__(20) });


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(6);
	var core = __webpack_require__(7);
	var ctx = __webpack_require__(8);
	var hide = __webpack_require__(10);
	var PROTOTYPE = 'prototype';

	var $export = function (type, name, source) {
	  var IS_FORCED = type & $export.F;
	  var IS_GLOBAL = type & $export.G;
	  var IS_STATIC = type & $export.S;
	  var IS_PROTO = type & $export.P;
	  var IS_BIND = type & $export.B;
	  var IS_WRAP = type & $export.W;
	  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
	  var expProto = exports[PROTOTYPE];
	  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
	  var key, own, out;
	  if (IS_GLOBAL) source = name;
	  for (key in source) {
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if (own && key in exports) continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function (C) {
	      var F = function (a, b, c) {
	        if (this instanceof C) {
	          switch (arguments.length) {
	            case 0: return new C();
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if (IS_PROTO) {
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library`
	module.exports = $export;


/***/ },
/* 6 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self
	  // eslint-disable-next-line no-new-func
	  : Function('return this')();
	if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ },
/* 7 */
/***/ function(module, exports) {

	var core = module.exports = { version: '2.5.1' };
	if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(9);
	module.exports = function (fn, that, length) {
	  aFunction(fn);
	  if (that === undefined) return fn;
	  switch (length) {
	    case 1: return function (a) {
	      return fn.call(that, a);
	    };
	    case 2: return function (a, b) {
	      return fn.call(that, a, b);
	    };
	    case 3: return function (a, b, c) {
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function (/* ...args */) {
	    return fn.apply(that, arguments);
	  };
	};


/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = function (it) {
	  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
	  return it;
	};


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var dP = __webpack_require__(11);
	var createDesc = __webpack_require__(19);
	module.exports = __webpack_require__(15) ? function (object, key, value) {
	  return dP.f(object, key, createDesc(1, value));
	} : function (object, key, value) {
	  object[key] = value;
	  return object;
	};


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var anObject = __webpack_require__(12);
	var IE8_DOM_DEFINE = __webpack_require__(14);
	var toPrimitive = __webpack_require__(18);
	var dP = Object.defineProperty;

	exports.f = __webpack_require__(15) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if (IE8_DOM_DEFINE) try {
	    return dP(O, P, Attributes);
	  } catch (e) { /* empty */ }
	  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
	  if ('value' in Attributes) O[P] = Attributes.value;
	  return O;
	};


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(13);
	module.exports = function (it) {
	  if (!isObject(it)) throw TypeError(it + ' is not an object!');
	  return it;
	};


/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = function (it) {
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(15) && !__webpack_require__(16)(function () {
	  return Object.defineProperty(__webpack_require__(17)('div'), 'a', { get: function () { return 7; } }).a != 7;
	});


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(16)(function () {
	  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
	});


/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = function (exec) {
	  try {
	    return !!exec();
	  } catch (e) {
	    return true;
	  }
	};


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(13);
	var document = __webpack_require__(6).document;
	// typeof document.createElement is 'object' in old IE
	var is = isObject(document) && isObject(document.createElement);
	module.exports = function (it) {
	  return is ? document.createElement(it) : {};
	};


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(13);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function (it, S) {
	  if (!isObject(it)) return it;
	  var fn, val;
	  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
	  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
	  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
	  throw TypeError("Can't convert object to primitive value");
	};


/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = function (bitmap, value) {
	  return {
	    enumerable: !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable: !(bitmap & 4),
	    value: value
	  };
	};


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	var getKeys = __webpack_require__(21);
	var gOPS = __webpack_require__(36);
	var pIE = __webpack_require__(37);
	var toObject = __webpack_require__(38);
	var IObject = __webpack_require__(25);
	var $assign = Object.assign;

	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(16)(function () {
	  var A = {};
	  var B = {};
	  // eslint-disable-next-line no-undef
	  var S = Symbol();
	  var K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function (k) { B[k] = k; });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
	  var T = toObject(target);
	  var aLen = arguments.length;
	  var index = 1;
	  var getSymbols = gOPS.f;
	  var isEnum = pIE.f;
	  while (aLen > index) {
	    var S = IObject(arguments[index++]);
	    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
	    var length = keys.length;
	    var j = 0;
	    var key;
	    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
	  } return T;
	} : $assign;


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys = __webpack_require__(22);
	var enumBugKeys = __webpack_require__(35);

	module.exports = Object.keys || function keys(O) {
	  return $keys(O, enumBugKeys);
	};


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var has = __webpack_require__(23);
	var toIObject = __webpack_require__(24);
	var arrayIndexOf = __webpack_require__(28)(false);
	var IE_PROTO = __webpack_require__(32)('IE_PROTO');

	module.exports = function (object, names) {
	  var O = toIObject(object);
	  var i = 0;
	  var result = [];
	  var key;
	  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while (names.length > i) if (has(O, key = names[i++])) {
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};


/***/ },
/* 23 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function (it, key) {
	  return hasOwnProperty.call(it, key);
	};


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(25);
	var defined = __webpack_require__(27);
	module.exports = function (it) {
	  return IObject(defined(it));
	};


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(26);
	// eslint-disable-next-line no-prototype-builtins
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};


/***/ },
/* 26 */
/***/ function(module, exports) {

	var toString = {}.toString;

	module.exports = function (it) {
	  return toString.call(it).slice(8, -1);
	};


/***/ },
/* 27 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function (it) {
	  if (it == undefined) throw TypeError("Can't call method on  " + it);
	  return it;
	};


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(24);
	var toLength = __webpack_require__(29);
	var toAbsoluteIndex = __webpack_require__(31);
	module.exports = function (IS_INCLUDES) {
	  return function ($this, el, fromIndex) {
	    var O = toIObject($this);
	    var length = toLength(O.length);
	    var index = toAbsoluteIndex(fromIndex, length);
	    var value;
	    // Array#includes uses SameValueZero equality algorithm
	    // eslint-disable-next-line no-self-compare
	    if (IS_INCLUDES && el != el) while (length > index) {
	      value = O[index++];
	      // eslint-disable-next-line no-self-compare
	      if (value != value) return true;
	    // Array#indexOf ignores holes, Array#includes - not
	    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
	      if (O[index] === el) return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};


/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(30);
	var min = Math.min;
	module.exports = function (it) {
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};


/***/ },
/* 30 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil = Math.ceil;
	var floor = Math.floor;
	module.exports = function (it) {
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(30);
	var max = Math.max;
	var min = Math.min;
	module.exports = function (index, length) {
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(33)('keys');
	var uid = __webpack_require__(34);
	module.exports = function (key) {
	  return shared[key] || (shared[key] = uid(key));
	};


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(6);
	var SHARED = '__core-js_shared__';
	var store = global[SHARED] || (global[SHARED] = {});
	module.exports = function (key) {
	  return store[key] || (store[key] = {});
	};


/***/ },
/* 34 */
/***/ function(module, exports) {

	var id = 0;
	var px = Math.random();
	module.exports = function (key) {
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};


/***/ },
/* 35 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');


/***/ },
/* 36 */
/***/ function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;


/***/ },
/* 37 */
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;


/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(27);
	module.exports = function (it) {
	  return Object(defined(it));
	};


/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(40), __esModule: true };

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	var core = __webpack_require__(7);
	var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
	module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
	  return $JSON.stringify.apply($JSON, arguments);
	};


/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	if (false) {
	  module.exports = require('./cjs/react.production.min.js');
	} else {
	  module.exports = __webpack_require__(42);
	}


/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	/** @license React v16.0.0
	 * react.development.js
	 *
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	'use strict';


	if (true) {
	(function() {

	'use strict';

	var objectAssign$1 = __webpack_require__(43);
	var require$$0 = __webpack_require__(44);
	var emptyObject = __webpack_require__(46);
	var invariant = __webpack_require__(47);
	var emptyFunction = __webpack_require__(45);
	var checkPropTypes = __webpack_require__(48);

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * @providesModule reactProdInvariant
	 * 
	 */

	{
	  var warning = require$$0;
	}

	function warnNoop(publicInstance, callerName) {
	  {
	    var constructor = publicInstance.constructor;
	    warning(false, '%s(...): Can only update a mounted or mounting component. ' + 'This usually means you called %s() on an unmounted component. ' + 'This is a no-op.\n\nPlease check the code for the %s component.', callerName, callerName, constructor && (constructor.displayName || constructor.name) || 'ReactClass');
	  }
	}

	/**
	 * This is the abstract API for an update queue.
	 */
	var ReactNoopUpdateQueue = {
	  /**
	   * Checks whether or not this composite component is mounted.
	   * @param {ReactClass} publicInstance The instance we want to test.
	   * @return {boolean} True if mounted, false otherwise.
	   * @protected
	   * @final
	   */
	  isMounted: function (publicInstance) {
	    return false;
	  },

	  /**
	   * Forces an update. This should only be invoked when it is known with
	   * certainty that we are **not** in a DOM transaction.
	   *
	   * You may want to call this when you know that some deeper aspect of the
	   * component's state has changed but `setState` was not called.
	   *
	   * This will not invoke `shouldComponentUpdate`, but it will invoke
	   * `componentWillUpdate` and `componentDidUpdate`.
	   *
	   * @param {ReactClass} publicInstance The instance that should rerender.
	   * @param {?function} callback Called after component is updated.
	   * @param {?string} callerName name of the calling function in the public API.
	   * @internal
	   */
	  enqueueForceUpdate: function (publicInstance, callback, callerName) {
	    warnNoop(publicInstance, 'forceUpdate');
	  },

	  /**
	   * Replaces all of the state. Always use this or `setState` to mutate state.
	   * You should treat `this.state` as immutable.
	   *
	   * There is no guarantee that `this.state` will be immediately updated, so
	   * accessing `this.state` after calling this method may return the old value.
	   *
	   * @param {ReactClass} publicInstance The instance that should rerender.
	   * @param {object} completeState Next state.
	   * @param {?function} callback Called after component is updated.
	   * @param {?string} callerName name of the calling function in the public API.
	   * @internal
	   */
	  enqueueReplaceState: function (publicInstance, completeState, callback, callerName) {
	    warnNoop(publicInstance, 'replaceState');
	  },

	  /**
	   * Sets a subset of the state. This only exists because _pendingState is
	   * internal. This provides a merging strategy that is not available to deep
	   * properties which is confusing. TODO: Expose pendingState or don't use it
	   * during the merge.
	   *
	   * @param {ReactClass} publicInstance The instance that should rerender.
	   * @param {object} partialState Next partial state to be merged with state.
	   * @param {?function} callback Called after component is updated.
	   * @param {?string} Name of the calling function in the public API.
	   * @internal
	   */
	  enqueueSetState: function (publicInstance, partialState, callback, callerName) {
	    warnNoop(publicInstance, 'setState');
	  }
	};

	var ReactNoopUpdateQueue_1 = ReactNoopUpdateQueue;

	/**
	 * Copyright (c) 2014-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * @providesModule lowPriorityWarning
	 */

	/**
	 * Forked from fbjs/warning:
	 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
	 *
	 * Only change is we use console.warn instead of console.error,
	 * and do nothing when 'console' is not supported.
	 * This really simplifies the code.
	 * ---
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */

	var lowPriorityWarning = function () {};

	{
	  var printWarning = function (format) {
	    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	      args[_key - 1] = arguments[_key];
	    }

	    var argIndex = 0;
	    var message = 'Warning: ' + format.replace(/%s/g, function () {
	      return args[argIndex++];
	    });
	    if (typeof console !== 'undefined') {
	      console.warn(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) {}
	  };

	  lowPriorityWarning = function (condition, format) {
	    if (format === undefined) {
	      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
	    }
	    if (!condition) {
	      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
	        args[_key2 - 2] = arguments[_key2];
	      }

	      printWarning.apply(undefined, [format].concat(args));
	    }
	  };
	}

	var lowPriorityWarning_1 = lowPriorityWarning;

	/**
	 * Base class helpers for the updating state of a component.
	 */
	function ReactComponent(props, context, updater) {
	  this.props = props;
	  this.context = context;
	  this.refs = emptyObject;
	  // We initialize the default updater but the real one gets injected by the
	  // renderer.
	  this.updater = updater || ReactNoopUpdateQueue_1;
	}

	ReactComponent.prototype.isReactComponent = {};

	/**
	 * Sets a subset of the state. Always use this to mutate
	 * state. You should treat `this.state` as immutable.
	 *
	 * There is no guarantee that `this.state` will be immediately updated, so
	 * accessing `this.state` after calling this method may return the old value.
	 *
	 * There is no guarantee that calls to `setState` will run synchronously,
	 * as they may eventually be batched together.  You can provide an optional
	 * callback that will be executed when the call to setState is actually
	 * completed.
	 *
	 * When a function is provided to setState, it will be called at some point in
	 * the future (not synchronously). It will be called with the up to date
	 * component arguments (state, props, context). These values can be different
	 * from this.* because your function may be called after receiveProps but before
	 * shouldComponentUpdate, and this new state, props, and context will not yet be
	 * assigned to this.
	 *
	 * @param {object|function} partialState Next partial state or function to
	 *        produce next partial state to be merged with current state.
	 * @param {?function} callback Called after state is updated.
	 * @final
	 * @protected
	 */
	ReactComponent.prototype.setState = function (partialState, callback) {
	  !(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null) ? invariant(false, 'setState(...): takes an object of state variables to update or a function which returns an object of state variables.') : void 0;
	  this.updater.enqueueSetState(this, partialState, callback, 'setState');
	};

	/**
	 * Forces an update. This should only be invoked when it is known with
	 * certainty that we are **not** in a DOM transaction.
	 *
	 * You may want to call this when you know that some deeper aspect of the
	 * component's state has changed but `setState` was not called.
	 *
	 * This will not invoke `shouldComponentUpdate`, but it will invoke
	 * `componentWillUpdate` and `componentDidUpdate`.
	 *
	 * @param {?function} callback Called after update is complete.
	 * @final
	 * @protected
	 */
	ReactComponent.prototype.forceUpdate = function (callback) {
	  this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
	};

	/**
	 * Deprecated APIs. These APIs used to exist on classic React classes but since
	 * we would like to deprecate them, we're not going to move them over to this
	 * modern base class. Instead, we define a getter that warns if it's accessed.
	 */
	{
	  var deprecatedAPIs = {
	    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
	    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
	  };
	  var defineDeprecationWarning = function (methodName, info) {
	    Object.defineProperty(ReactComponent.prototype, methodName, {
	      get: function () {
	        lowPriorityWarning_1(false, '%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);
	        return undefined;
	      }
	    });
	  };
	  for (var fnName in deprecatedAPIs) {
	    if (deprecatedAPIs.hasOwnProperty(fnName)) {
	      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
	    }
	  }
	}

	/**
	 * Base class helpers for the updating state of a component.
	 */
	function ReactPureComponent(props, context, updater) {
	  // Duplicated from ReactComponent.
	  this.props = props;
	  this.context = context;
	  this.refs = emptyObject;
	  // We initialize the default updater but the real one gets injected by the
	  // renderer.
	  this.updater = updater || ReactNoopUpdateQueue_1;
	}

	function ComponentDummy() {}
	ComponentDummy.prototype = ReactComponent.prototype;
	var pureComponentPrototype = ReactPureComponent.prototype = new ComponentDummy();
	pureComponentPrototype.constructor = ReactPureComponent;
	// Avoid an extra prototype jump for these methods.
	objectAssign$1(pureComponentPrototype, ReactComponent.prototype);
	pureComponentPrototype.isPureReactComponent = true;

	function ReactAsyncComponent(props, context, updater) {
	  // Duplicated from ReactComponent.
	  this.props = props;
	  this.context = context;
	  this.refs = emptyObject;
	  // We initialize the default updater but the real one gets injected by the
	  // renderer.
	  this.updater = updater || ReactNoopUpdateQueue_1;
	}

	var asyncComponentPrototype = ReactAsyncComponent.prototype = new ComponentDummy();
	asyncComponentPrototype.constructor = ReactAsyncComponent;
	// Avoid an extra prototype jump for these methods.
	objectAssign$1(asyncComponentPrototype, ReactComponent.prototype);
	asyncComponentPrototype.unstable_isAsyncReactComponent = true;
	asyncComponentPrototype.render = function () {
	  return this.props.children;
	};

	var ReactBaseClasses = {
	  Component: ReactComponent,
	  PureComponent: ReactPureComponent,
	  AsyncComponent: ReactAsyncComponent
	};

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * @providesModule ReactCurrentOwner
	 * 
	 */

	/**
	 * Keeps track of the current owner.
	 *
	 * The current owner is the component who should own any components that are
	 * currently being constructed.
	 */
	var ReactCurrentOwner = {
	  /**
	   * @internal
	   * @type {ReactComponent}
	   */
	  current: null
	};

	var ReactCurrentOwner_1 = ReactCurrentOwner;

	var hasOwnProperty = Object.prototype.hasOwnProperty;

	{
	  var warning$2 = require$$0;
	}

	// The Symbol used to tag the ReactElement type. If there is no native Symbol
	// nor polyfill, then a plain number is used for performance.
	var REACT_ELEMENT_TYPE$1 = typeof Symbol === 'function' && Symbol['for'] && Symbol['for']('react.element') || 0xeac7;

	var RESERVED_PROPS = {
	  key: true,
	  ref: true,
	  __self: true,
	  __source: true
	};

	var specialPropKeyWarningShown;
	var specialPropRefWarningShown;

	function hasValidRef(config) {
	  {
	    if (hasOwnProperty.call(config, 'ref')) {
	      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;
	      if (getter && getter.isReactWarning) {
	        return false;
	      }
	    }
	  }
	  return config.ref !== undefined;
	}

	function hasValidKey(config) {
	  {
	    if (hasOwnProperty.call(config, 'key')) {
	      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;
	      if (getter && getter.isReactWarning) {
	        return false;
	      }
	    }
	  }
	  return config.key !== undefined;
	}

	function defineKeyPropWarningGetter(props, displayName) {
	  var warnAboutAccessingKey = function () {
	    if (!specialPropKeyWarningShown) {
	      specialPropKeyWarningShown = true;
	      warning$2(false, '%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
	    }
	  };
	  warnAboutAccessingKey.isReactWarning = true;
	  Object.defineProperty(props, 'key', {
	    get: warnAboutAccessingKey,
	    configurable: true
	  });
	}

	function defineRefPropWarningGetter(props, displayName) {
	  var warnAboutAccessingRef = function () {
	    if (!specialPropRefWarningShown) {
	      specialPropRefWarningShown = true;
	      warning$2(false, '%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
	    }
	  };
	  warnAboutAccessingRef.isReactWarning = true;
	  Object.defineProperty(props, 'ref', {
	    get: warnAboutAccessingRef,
	    configurable: true
	  });
	}

	/**
	 * Factory method to create a new React element. This no longer adheres to
	 * the class pattern, so do not use new to call it. Also, no instanceof check
	 * will work. Instead test $$typeof field against Symbol.for('react.element') to check
	 * if something is a React Element.
	 *
	 * @param {*} type
	 * @param {*} key
	 * @param {string|object} ref
	 * @param {*} self A *temporary* helper to detect places where `this` is
	 * different from the `owner` when React.createElement is called, so that we
	 * can warn. We want to get rid of owner and replace string `ref`s with arrow
	 * functions, and as long as `this` and owner are the same, there will be no
	 * change in behavior.
	 * @param {*} source An annotation object (added by a transpiler or otherwise)
	 * indicating filename, line number, and/or other information.
	 * @param {*} owner
	 * @param {*} props
	 * @internal
	 */
	var ReactElement = function (type, key, ref, self, source, owner, props) {
	  var element = {
	    // This tag allow us to uniquely identify this as a React Element
	    $$typeof: REACT_ELEMENT_TYPE$1,

	    // Built-in properties that belong on the element
	    type: type,
	    key: key,
	    ref: ref,
	    props: props,

	    // Record the component responsible for creating this element.
	    _owner: owner
	  };

	  {
	    // The validation flag is currently mutative. We put it on
	    // an external backing store so that we can freeze the whole object.
	    // This can be replaced with a WeakMap once they are implemented in
	    // commonly used development environments.
	    element._store = {};

	    // To make comparing ReactElements easier for testing purposes, we make
	    // the validation flag non-enumerable (where possible, which should
	    // include every environment we run tests in), so the test framework
	    // ignores it.
	    Object.defineProperty(element._store, 'validated', {
	      configurable: false,
	      enumerable: false,
	      writable: true,
	      value: false
	    });
	    // self and source are DEV only properties.
	    Object.defineProperty(element, '_self', {
	      configurable: false,
	      enumerable: false,
	      writable: false,
	      value: self
	    });
	    // Two elements created in two different places should be considered
	    // equal for testing purposes and therefore we hide it from enumeration.
	    Object.defineProperty(element, '_source', {
	      configurable: false,
	      enumerable: false,
	      writable: false,
	      value: source
	    });
	    if (Object.freeze) {
	      Object.freeze(element.props);
	      Object.freeze(element);
	    }
	  }

	  return element;
	};

	/**
	 * Create and return a new ReactElement of the given type.
	 * See https://facebook.github.io/react/docs/react-api.html#createelement
	 */
	ReactElement.createElement = function (type, config, children) {
	  var propName;

	  // Reserved names are extracted
	  var props = {};

	  var key = null;
	  var ref = null;
	  var self = null;
	  var source = null;

	  if (config != null) {
	    if (hasValidRef(config)) {
	      ref = config.ref;
	    }
	    if (hasValidKey(config)) {
	      key = '' + config.key;
	    }

	    self = config.__self === undefined ? null : config.__self;
	    source = config.__source === undefined ? null : config.__source;
	    // Remaining properties are added to a new props object
	    for (propName in config) {
	      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
	        props[propName] = config[propName];
	      }
	    }
	  }

	  // Children can be more than one argument, and those are transferred onto
	  // the newly allocated props object.
	  var childrenLength = arguments.length - 2;
	  if (childrenLength === 1) {
	    props.children = children;
	  } else if (childrenLength > 1) {
	    var childArray = Array(childrenLength);
	    for (var i = 0; i < childrenLength; i++) {
	      childArray[i] = arguments[i + 2];
	    }
	    {
	      if (Object.freeze) {
	        Object.freeze(childArray);
	      }
	    }
	    props.children = childArray;
	  }

	  // Resolve default props
	  if (type && type.defaultProps) {
	    var defaultProps = type.defaultProps;
	    for (propName in defaultProps) {
	      if (props[propName] === undefined) {
	        props[propName] = defaultProps[propName];
	      }
	    }
	  }
	  {
	    if (key || ref) {
	      if (typeof props.$$typeof === 'undefined' || props.$$typeof !== REACT_ELEMENT_TYPE$1) {
	        var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;
	        if (key) {
	          defineKeyPropWarningGetter(props, displayName);
	        }
	        if (ref) {
	          defineRefPropWarningGetter(props, displayName);
	        }
	      }
	    }
	  }
	  return ReactElement(type, key, ref, self, source, ReactCurrentOwner_1.current, props);
	};

	/**
	 * Return a function that produces ReactElements of a given type.
	 * See https://facebook.github.io/react/docs/react-api.html#createfactory
	 */
	ReactElement.createFactory = function (type) {
	  var factory = ReactElement.createElement.bind(null, type);
	  // Expose the type on the factory and the prototype so that it can be
	  // easily accessed on elements. E.g. `<Foo />.type === Foo`.
	  // This should not be named `constructor` since this may not be the function
	  // that created the element, and it may not even be a constructor.
	  // Legacy hook TODO: Warn if this is accessed
	  factory.type = type;
	  return factory;
	};

	ReactElement.cloneAndReplaceKey = function (oldElement, newKey) {
	  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);

	  return newElement;
	};

	/**
	 * Clone and return a new ReactElement using element as the starting point.
	 * See https://facebook.github.io/react/docs/react-api.html#cloneelement
	 */
	ReactElement.cloneElement = function (element, config, children) {
	  var propName;

	  // Original props are copied
	  var props = objectAssign$1({}, element.props);

	  // Reserved names are extracted
	  var key = element.key;
	  var ref = element.ref;
	  // Self is preserved since the owner is preserved.
	  var self = element._self;
	  // Source is preserved since cloneElement is unlikely to be targeted by a
	  // transpiler, and the original source is probably a better indicator of the
	  // true owner.
	  var source = element._source;

	  // Owner will be preserved, unless ref is overridden
	  var owner = element._owner;

	  if (config != null) {
	    if (hasValidRef(config)) {
	      // Silently steal the ref from the parent.
	      ref = config.ref;
	      owner = ReactCurrentOwner_1.current;
	    }
	    if (hasValidKey(config)) {
	      key = '' + config.key;
	    }

	    // Remaining properties override existing props
	    var defaultProps;
	    if (element.type && element.type.defaultProps) {
	      defaultProps = element.type.defaultProps;
	    }
	    for (propName in config) {
	      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
	        if (config[propName] === undefined && defaultProps !== undefined) {
	          // Resolve default props
	          props[propName] = defaultProps[propName];
	        } else {
	          props[propName] = config[propName];
	        }
	      }
	    }
	  }

	  // Children can be more than one argument, and those are transferred onto
	  // the newly allocated props object.
	  var childrenLength = arguments.length - 2;
	  if (childrenLength === 1) {
	    props.children = children;
	  } else if (childrenLength > 1) {
	    var childArray = Array(childrenLength);
	    for (var i = 0; i < childrenLength; i++) {
	      childArray[i] = arguments[i + 2];
	    }
	    props.children = childArray;
	  }

	  return ReactElement(element.type, key, ref, self, source, owner, props);
	};

	/**
	 * Verifies the object is a ReactElement.
	 * See https://facebook.github.io/react/docs/react-api.html#isvalidelement
	 * @param {?object} object
	 * @return {boolean} True if `object` is a valid component.
	 * @final
	 */
	ReactElement.isValidElement = function (object) {
	  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE$1;
	};

	var ReactElement_1 = ReactElement;

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * @providesModule ReactDebugCurrentFrame
	 * 
	 */

	var ReactDebugCurrentFrame = {};

	{
	  // Component that is being worked on
	  ReactDebugCurrentFrame.getCurrentStack = null;

	  ReactDebugCurrentFrame.getStackAddendum = function () {
	    var impl = ReactDebugCurrentFrame.getCurrentStack;
	    if (impl) {
	      return impl();
	    }
	    return null;
	  };
	}

	var ReactDebugCurrentFrame_1 = ReactDebugCurrentFrame;

	{
	  var warning$1 = require$$0;

	  var _require = ReactDebugCurrentFrame_1,
	      getStackAddendum = _require.getStackAddendum;
	}

	var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
	var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.
	// The Symbol used to tag the ReactElement type. If there is no native Symbol
	// nor polyfill, then a plain number is used for performance.
	var REACT_ELEMENT_TYPE = typeof Symbol === 'function' && Symbol['for'] && Symbol['for']('react.element') || 0xeac7;

	var SEPARATOR = '.';
	var SUBSEPARATOR = ':';

	/**
	 * Escape and wrap key so it is safe to use as a reactid
	 *
	 * @param {string} key to be escaped.
	 * @return {string} the escaped key.
	 */
	function escape(key) {
	  var escapeRegex = /[=:]/g;
	  var escaperLookup = {
	    '=': '=0',
	    ':': '=2'
	  };
	  var escapedString = ('' + key).replace(escapeRegex, function (match) {
	    return escaperLookup[match];
	  });

	  return '$' + escapedString;
	}

	/**
	 * TODO: Test that a single child and an array with one item have the same key
	 * pattern.
	 */

	var didWarnAboutMaps = false;

	var userProvidedKeyEscapeRegex = /\/+/g;
	function escapeUserProvidedKey(text) {
	  return ('' + text).replace(userProvidedKeyEscapeRegex, '$&/');
	}

	var POOL_SIZE = 10;
	var traverseContextPool = [];
	function getPooledTraverseContext(mapResult, keyPrefix, mapFunction, mapContext) {
	  if (traverseContextPool.length) {
	    var traverseContext = traverseContextPool.pop();
	    traverseContext.result = mapResult;
	    traverseContext.keyPrefix = keyPrefix;
	    traverseContext.func = mapFunction;
	    traverseContext.context = mapContext;
	    traverseContext.count = 0;
	    return traverseContext;
	  } else {
	    return {
	      result: mapResult,
	      keyPrefix: keyPrefix,
	      func: mapFunction,
	      context: mapContext,
	      count: 0
	    };
	  }
	}

	function releaseTraverseContext(traverseContext) {
	  traverseContext.result = null;
	  traverseContext.keyPrefix = null;
	  traverseContext.func = null;
	  traverseContext.context = null;
	  traverseContext.count = 0;
	  if (traverseContextPool.length < POOL_SIZE) {
	    traverseContextPool.push(traverseContext);
	  }
	}

	/**
	 * @param {?*} children Children tree container.
	 * @param {!string} nameSoFar Name of the key path so far.
	 * @param {!function} callback Callback to invoke with each child found.
	 * @param {?*} traverseContext Used to pass information throughout the traversal
	 * process.
	 * @return {!number} The number of children in this subtree.
	 */
	function traverseAllChildrenImpl(children, nameSoFar, callback, traverseContext) {
	  var type = typeof children;

	  if (type === 'undefined' || type === 'boolean') {
	    // All of the above are perceived as null.
	    children = null;
	  }

	  if (children === null || type === 'string' || type === 'number' ||
	  // The following is inlined from ReactElement. This means we can optimize
	  // some checks. React Fiber also inlines this logic for similar purposes.
	  type === 'object' && children.$$typeof === REACT_ELEMENT_TYPE) {
	    callback(traverseContext, children,
	    // If it's the only child, treat the name as if it was wrapped in an array
	    // so that it's consistent if the number of children grows.
	    nameSoFar === '' ? SEPARATOR + getComponentKey(children, 0) : nameSoFar);
	    return 1;
	  }

	  var child;
	  var nextName;
	  var subtreeCount = 0; // Count of children found in the current subtree.
	  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

	  if (Array.isArray(children)) {
	    for (var i = 0; i < children.length; i++) {
	      child = children[i];
	      nextName = nextNamePrefix + getComponentKey(child, i);
	      subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
	    }
	  } else {
	    var iteratorFn = ITERATOR_SYMBOL && children[ITERATOR_SYMBOL] || children[FAUX_ITERATOR_SYMBOL];
	    if (typeof iteratorFn === 'function') {
	      {
	        // Warn about using Maps as children
	        if (iteratorFn === children.entries) {
	          warning$1(didWarnAboutMaps, 'Using Maps as children is unsupported and will likely yield ' + 'unexpected results. Convert it to a sequence/iterable of keyed ' + 'ReactElements instead.%s', getStackAddendum());
	          didWarnAboutMaps = true;
	        }
	      }

	      var iterator = iteratorFn.call(children);
	      var step;
	      var ii = 0;
	      while (!(step = iterator.next()).done) {
	        child = step.value;
	        nextName = nextNamePrefix + getComponentKey(child, ii++);
	        subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
	      }
	    } else if (type === 'object') {
	      var addendum = '';
	      {
	        addendum = ' If you meant to render a collection of children, use an array ' + 'instead.' + getStackAddendum();
	      }
	      var childrenString = '' + children;
	      invariant(false, 'Objects are not valid as a React child (found: %s).%s', childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString, addendum);
	    }
	  }

	  return subtreeCount;
	}

	/**
	 * Traverses children that are typically specified as `props.children`, but
	 * might also be specified through attributes:
	 *
	 * - `traverseAllChildren(this.props.children, ...)`
	 * - `traverseAllChildren(this.props.leftPanelChildren, ...)`
	 *
	 * The `traverseContext` is an optional argument that is passed through the
	 * entire traversal. It can be used to store accumulations or anything else that
	 * the callback might find relevant.
	 *
	 * @param {?*} children Children tree object.
	 * @param {!function} callback To invoke upon traversing each child.
	 * @param {?*} traverseContext Context for traversal.
	 * @return {!number} The number of children in this subtree.
	 */
	function traverseAllChildren(children, callback, traverseContext) {
	  if (children == null) {
	    return 0;
	  }

	  return traverseAllChildrenImpl(children, '', callback, traverseContext);
	}

	/**
	 * Generate a key string that identifies a component within a set.
	 *
	 * @param {*} component A component that could contain a manual key.
	 * @param {number} index Index that is used if a manual key is not provided.
	 * @return {string}
	 */
	function getComponentKey(component, index) {
	  // Do some typechecking here since we call this blindly. We want to ensure
	  // that we don't block potential future ES APIs.
	  if (typeof component === 'object' && component !== null && component.key != null) {
	    // Explicit key
	    return escape(component.key);
	  }
	  // Implicit key determined by the index in the set
	  return index.toString(36);
	}

	function forEachSingleChild(bookKeeping, child, name) {
	  var func = bookKeeping.func,
	      context = bookKeeping.context;

	  func.call(context, child, bookKeeping.count++);
	}

	/**
	 * Iterates through children that are typically specified as `props.children`.
	 *
	 * See https://facebook.github.io/react/docs/react-api.html#react.children.foreach
	 *
	 * The provided forEachFunc(child, index) will be called for each
	 * leaf child.
	 *
	 * @param {?*} children Children tree container.
	 * @param {function(*, int)} forEachFunc
	 * @param {*} forEachContext Context for forEachContext.
	 */
	function forEachChildren(children, forEachFunc, forEachContext) {
	  if (children == null) {
	    return children;
	  }
	  var traverseContext = getPooledTraverseContext(null, null, forEachFunc, forEachContext);
	  traverseAllChildren(children, forEachSingleChild, traverseContext);
	  releaseTraverseContext(traverseContext);
	}

	function mapSingleChildIntoContext(bookKeeping, child, childKey) {
	  var result = bookKeeping.result,
	      keyPrefix = bookKeeping.keyPrefix,
	      func = bookKeeping.func,
	      context = bookKeeping.context;


	  var mappedChild = func.call(context, child, bookKeeping.count++);
	  if (Array.isArray(mappedChild)) {
	    mapIntoWithKeyPrefixInternal(mappedChild, result, childKey, emptyFunction.thatReturnsArgument);
	  } else if (mappedChild != null) {
	    if (ReactElement_1.isValidElement(mappedChild)) {
	      mappedChild = ReactElement_1.cloneAndReplaceKey(mappedChild,
	      // Keep both the (mapped) and old keys if they differ, just as
	      // traverseAllChildren used to do for objects as children
	      keyPrefix + (mappedChild.key && (!child || child.key !== mappedChild.key) ? escapeUserProvidedKey(mappedChild.key) + '/' : '') + childKey);
	    }
	    result.push(mappedChild);
	  }
	}

	function mapIntoWithKeyPrefixInternal(children, array, prefix, func, context) {
	  var escapedPrefix = '';
	  if (prefix != null) {
	    escapedPrefix = escapeUserProvidedKey(prefix) + '/';
	  }
	  var traverseContext = getPooledTraverseContext(array, escapedPrefix, func, context);
	  traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);
	  releaseTraverseContext(traverseContext);
	}

	/**
	 * Maps children that are typically specified as `props.children`.
	 *
	 * See https://facebook.github.io/react/docs/react-api.html#react.children.map
	 *
	 * The provided mapFunction(child, key, index) will be called for each
	 * leaf child.
	 *
	 * @param {?*} children Children tree container.
	 * @param {function(*, int)} func The map function.
	 * @param {*} context Context for mapFunction.
	 * @return {object} Object containing the ordered map of results.
	 */
	function mapChildren(children, func, context) {
	  if (children == null) {
	    return children;
	  }
	  var result = [];
	  mapIntoWithKeyPrefixInternal(children, result, null, func, context);
	  return result;
	}

	/**
	 * Count the number of children that are typically specified as
	 * `props.children`.
	 *
	 * See https://facebook.github.io/react/docs/react-api.html#react.children.count
	 *
	 * @param {?*} children Children tree container.
	 * @return {number} The number of children.
	 */
	function countChildren(children, context) {
	  return traverseAllChildren(children, emptyFunction.thatReturnsNull, null);
	}

	/**
	 * Flatten a children object (typically specified as `props.children`) and
	 * return an array with appropriately re-keyed children.
	 *
	 * See https://facebook.github.io/react/docs/react-api.html#react.children.toarray
	 */
	function toArray(children) {
	  var result = [];
	  mapIntoWithKeyPrefixInternal(children, result, null, emptyFunction.thatReturnsArgument);
	  return result;
	}

	var ReactChildren = {
	  forEach: forEachChildren,
	  map: mapChildren,
	  count: countChildren,
	  toArray: toArray
	};

	var ReactChildren_1 = ReactChildren;

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * @providesModule ReactVersion
	 */

	var ReactVersion = '16.0.0';

	/**
	 * Returns the first child in a collection of children and verifies that there
	 * is only one child in the collection.
	 *
	 * See https://facebook.github.io/react/docs/react-api.html#react.children.only
	 *
	 * The current implementation of this function assumes that a single child gets
	 * passed without a wrapper, but the purpose of this helper function is to
	 * abstract away the particular structure of children.
	 *
	 * @param {?object} children Child collection structure.
	 * @return {ReactElement} The first and only `ReactElement` contained in the
	 * structure.
	 */
	function onlyChild(children) {
	  !ReactElement_1.isValidElement(children) ? invariant(false, 'React.Children.only expected to receive a single React element child.') : void 0;
	  return children;
	}

	var onlyChild_1 = onlyChild;

	/**
	 * Copyright (c) 2016-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 * @providesModule describeComponentFrame
	 */

	var describeComponentFrame$1 = function (name, source, ownerName) {
	  return '\n    in ' + (name || 'Unknown') + (source ? ' (at ' + source.fileName.replace(/^.*[\\\/]/, '') + ':' + source.lineNumber + ')' : ownerName ? ' (created by ' + ownerName + ')' : '');
	};

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * @providesModule getComponentName
	 * 
	 */

	function getComponentName$1(instanceOrFiber) {
	  if (typeof instanceOrFiber.getName === 'function') {
	    // Stack reconciler
	    var instance = instanceOrFiber;
	    return instance.getName();
	  }
	  if (typeof instanceOrFiber.tag === 'number') {
	    // Fiber reconciler
	    var fiber = instanceOrFiber;
	    var type = fiber.type;

	    if (typeof type === 'string') {
	      return type;
	    }
	    if (typeof type === 'function') {
	      return type.displayName || type.name;
	    }
	  }
	  return null;
	}

	var getComponentName_1 = getComponentName$1;

	{
	  var checkPropTypes$1 = checkPropTypes;
	  var lowPriorityWarning$1 = lowPriorityWarning_1;
	  var ReactDebugCurrentFrame$1 = ReactDebugCurrentFrame_1;
	  var warning$3 = require$$0;
	  var describeComponentFrame = describeComponentFrame$1;
	  var getComponentName = getComponentName_1;

	  var currentlyValidatingElement = null;

	  var getDisplayName = function (element) {
	    if (element == null) {
	      return '#empty';
	    } else if (typeof element === 'string' || typeof element === 'number') {
	      return '#text';
	    } else if (typeof element.type === 'string') {
	      return element.type;
	    } else {
	      return element.type.displayName || element.type.name || 'Unknown';
	    }
	  };

	  var getStackAddendum$1 = function () {
	    var stack = '';
	    if (currentlyValidatingElement) {
	      var name = getDisplayName(currentlyValidatingElement);
	      var owner = currentlyValidatingElement._owner;
	      stack += describeComponentFrame(name, currentlyValidatingElement._source, owner && getComponentName(owner));
	    }
	    stack += ReactDebugCurrentFrame$1.getStackAddendum() || '';
	    return stack;
	  };
	}

	var ITERATOR_SYMBOL$1 = typeof Symbol === 'function' && Symbol.iterator;
	var FAUX_ITERATOR_SYMBOL$1 = '@@iterator'; // Before Symbol spec.

	function getDeclarationErrorAddendum() {
	  if (ReactCurrentOwner_1.current) {
	    var name = getComponentName(ReactCurrentOwner_1.current);
	    if (name) {
	      return '\n\nCheck the render method of `' + name + '`.';
	    }
	  }
	  return '';
	}

	function getSourceInfoErrorAddendum(elementProps) {
	  if (elementProps !== null && elementProps !== undefined && elementProps.__source !== undefined) {
	    var source = elementProps.__source;
	    var fileName = source.fileName.replace(/^.*[\\\/]/, '');
	    var lineNumber = source.lineNumber;
	    return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
	  }
	  return '';
	}

	/**
	 * Warn if there's no key explicitly set on dynamic arrays of children or
	 * object keys are not valid. This allows us to keep track of children between
	 * updates.
	 */
	var ownerHasKeyUseWarning = {};

	function getCurrentComponentErrorInfo(parentType) {
	  var info = getDeclarationErrorAddendum();

	  if (!info) {
	    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;
	    if (parentName) {
	      info = '\n\nCheck the top-level render call using <' + parentName + '>.';
	    }
	  }
	  return info;
	}

	/**
	 * Warn if the element doesn't have an explicit key assigned to it.
	 * This element is in an array. The array could grow and shrink or be
	 * reordered. All children that haven't already been validated are required to
	 * have a "key" property assigned to it. Error statuses are cached so a warning
	 * will only be shown once.
	 *
	 * @internal
	 * @param {ReactElement} element Element that requires a key.
	 * @param {*} parentType element's parent's type.
	 */
	function validateExplicitKey(element, parentType) {
	  if (!element._store || element._store.validated || element.key != null) {
	    return;
	  }
	  element._store.validated = true;

	  var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
	  if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
	    return;
	  }
	  ownerHasKeyUseWarning[currentComponentErrorInfo] = true;

	  // Usually the current owner is the offender, but if it accepts children as a
	  // property, it may be the creator of the child that's responsible for
	  // assigning it a key.
	  var childOwner = '';
	  if (element && element._owner && element._owner !== ReactCurrentOwner_1.current) {
	    // Give the component that originally created this child.
	    childOwner = ' It was passed a child from ' + getComponentName(element._owner) + '.';
	  }

	  currentlyValidatingElement = element;
	  {
	    warning$3(false, 'Each child in an array or iterator should have a unique "key" prop.' + '%s%s See https://fb.me/react-warning-keys for more information.%s', currentComponentErrorInfo, childOwner, getStackAddendum$1());
	  }
	  currentlyValidatingElement = null;
	}

	/**
	 * Ensure that every element either is passed in a static location, in an
	 * array with an explicit keys property defined, or in an object literal
	 * with valid key property.
	 *
	 * @internal
	 * @param {ReactNode} node Statically passed child of any type.
	 * @param {*} parentType node's parent's type.
	 */
	function validateChildKeys(node, parentType) {
	  if (typeof node !== 'object') {
	    return;
	  }
	  if (Array.isArray(node)) {
	    for (var i = 0; i < node.length; i++) {
	      var child = node[i];
	      if (ReactElement_1.isValidElement(child)) {
	        validateExplicitKey(child, parentType);
	      }
	    }
	  } else if (ReactElement_1.isValidElement(node)) {
	    // This element was passed in a valid location.
	    if (node._store) {
	      node._store.validated = true;
	    }
	  } else if (node) {
	    var iteratorFn = ITERATOR_SYMBOL$1 && node[ITERATOR_SYMBOL$1] || node[FAUX_ITERATOR_SYMBOL$1];
	    if (typeof iteratorFn === 'function') {
	      // Entry iterators used to provide implicit keys,
	      // but now we print a separate warning for them later.
	      if (iteratorFn !== node.entries) {
	        var iterator = iteratorFn.call(node);
	        var step;
	        while (!(step = iterator.next()).done) {
	          if (ReactElement_1.isValidElement(step.value)) {
	            validateExplicitKey(step.value, parentType);
	          }
	        }
	      }
	    }
	  }
	}

	/**
	 * Given an element, validate that its props follow the propTypes definition,
	 * provided by the type.
	 *
	 * @param {ReactElement} element
	 */
	function validatePropTypes(element) {
	  var componentClass = element.type;
	  if (typeof componentClass !== 'function') {
	    return;
	  }
	  var name = componentClass.displayName || componentClass.name;
	  var propTypes = componentClass.propTypes;

	  if (propTypes) {
	    currentlyValidatingElement = element;
	    checkPropTypes$1(propTypes, element.props, 'prop', name, getStackAddendum$1);
	    currentlyValidatingElement = null;
	  }
	  if (typeof componentClass.getDefaultProps === 'function') {
	    warning$3(componentClass.getDefaultProps.isReactClassApproved, 'getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
	  }
	}

	var ReactElementValidator$1 = {
	  createElement: function (type, props, children) {
	    var validType = typeof type === 'string' || typeof type === 'function';
	    // We warn in this case but don't throw. We expect the element creation to
	    // succeed and there will likely be errors in render.
	    if (!validType) {
	      var info = '';
	      if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
	        info += ' You likely forgot to export your component from the file ' + "it's defined in.";
	      }

	      var sourceInfo = getSourceInfoErrorAddendum(props);
	      if (sourceInfo) {
	        info += sourceInfo;
	      } else {
	        info += getDeclarationErrorAddendum();
	      }

	      info += ReactDebugCurrentFrame$1.getStackAddendum() || '';

	      warning$3(false, 'React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', type == null ? type : typeof type, info);
	    }

	    var element = ReactElement_1.createElement.apply(this, arguments);

	    // The result can be nullish if a mock or a custom function is used.
	    // TODO: Drop this when these are no longer allowed as the type argument.
	    if (element == null) {
	      return element;
	    }

	    // Skip key warning if the type isn't valid since our key validation logic
	    // doesn't expect a non-string/function type and can throw confusing errors.
	    // We don't want exception behavior to differ between dev and prod.
	    // (Rendering will throw with a helpful message and as soon as the type is
	    // fixed, the key warnings will appear.)
	    if (validType) {
	      for (var i = 2; i < arguments.length; i++) {
	        validateChildKeys(arguments[i], type);
	      }
	    }

	    validatePropTypes(element);

	    return element;
	  },

	  createFactory: function (type) {
	    var validatedFactory = ReactElementValidator$1.createElement.bind(null, type);
	    // Legacy hook TODO: Warn if this is accessed
	    validatedFactory.type = type;

	    {
	      Object.defineProperty(validatedFactory, 'type', {
	        enumerable: false,
	        get: function () {
	          lowPriorityWarning$1(false, 'Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');
	          Object.defineProperty(this, 'type', {
	            value: type
	          });
	          return type;
	        }
	      });
	    }

	    return validatedFactory;
	  },

	  cloneElement: function (element, props, children) {
	    var newElement = ReactElement_1.cloneElement.apply(this, arguments);
	    for (var i = 2; i < arguments.length; i++) {
	      validateChildKeys(arguments[i], newElement.type);
	    }
	    validatePropTypes(newElement);
	    return newElement;
	  }
	};

	var ReactElementValidator_1 = ReactElementValidator$1;

	{
	  var warning$4 = require$$0;
	}

	function isNative(fn) {
	  // Based on isNative() from Lodash
	  var funcToString = Function.prototype.toString;
	  var reIsNative = RegExp('^' + funcToString
	  // Take an example native function source for comparison
	  .call(Object.prototype.hasOwnProperty)
	  // Strip regex characters so we can use it for regex
	  .replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
	  // Remove hasOwnProperty from the template to make it generic
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
	  try {
	    var source = funcToString.call(fn);
	    return reIsNative.test(source);
	  } catch (err) {
	    return false;
	  }
	}

	var canUseCollections =
	// Array.from
	typeof Array.from === 'function' &&
	// Map
	typeof Map === 'function' && isNative(Map) &&
	// Map.prototype.keys
	Map.prototype != null && typeof Map.prototype.keys === 'function' && isNative(Map.prototype.keys) &&
	// Set
	typeof Set === 'function' && isNative(Set) &&
	// Set.prototype.keys
	Set.prototype != null && typeof Set.prototype.keys === 'function' && isNative(Set.prototype.keys);

	var setItem;
	var getItem;
	var removeItem;
	var getItemIDs;
	var addRoot;
	var removeRoot;
	var getRootIDs;

	if (canUseCollections) {
	  var itemMap = new Map();
	  var rootIDSet = new Set();

	  setItem = function (id, item) {
	    itemMap.set(id, item);
	  };
	  getItem = function (id) {
	    return itemMap.get(id);
	  };
	  removeItem = function (id) {
	    itemMap['delete'](id);
	  };
	  getItemIDs = function () {
	    return Array.from(itemMap.keys());
	  };

	  addRoot = function (id) {
	    rootIDSet.add(id);
	  };
	  removeRoot = function (id) {
	    rootIDSet['delete'](id);
	  };
	  getRootIDs = function () {
	    return Array.from(rootIDSet.keys());
	  };
	} else {
	  var itemByKey = {};
	  var rootByKey = {};

	  // Use non-numeric keys to prevent V8 performance issues:
	  // https://github.com/facebook/react/pull/7232
	  var getKeyFromID = function (id) {
	    return '.' + id;
	  };
	  var getIDFromKey = function (key) {
	    return parseInt(key.substr(1), 10);
	  };

	  setItem = function (id, item) {
	    var key = getKeyFromID(id);
	    itemByKey[key] = item;
	  };
	  getItem = function (id) {
	    var key = getKeyFromID(id);
	    return itemByKey[key];
	  };
	  removeItem = function (id) {
	    var key = getKeyFromID(id);
	    delete itemByKey[key];
	  };
	  getItemIDs = function () {
	    return Object.keys(itemByKey).map(getIDFromKey);
	  };

	  addRoot = function (id) {
	    var key = getKeyFromID(id);
	    rootByKey[key] = true;
	  };
	  removeRoot = function (id) {
	    var key = getKeyFromID(id);
	    delete rootByKey[key];
	  };
	  getRootIDs = function () {
	    return Object.keys(rootByKey).map(getIDFromKey);
	  };
	}

	var unmountedIDs = [];

	function purgeDeep(id) {
	  var item = getItem(id);
	  if (item) {
	    var childIDs = item.childIDs;

	    removeItem(id);
	    childIDs.forEach(purgeDeep);
	  }
	}

	function getDisplayName$1(element) {
	  if (element == null) {
	    return '#empty';
	  } else if (typeof element === 'string' || typeof element === 'number') {
	    return '#text';
	  } else if (typeof element.type === 'string') {
	    return element.type;
	  } else {
	    return element.type.displayName || element.type.name || 'Unknown';
	  }
	}

	function describeID(id) {
	  var name = ReactComponentTreeHook.getDisplayName(id);
	  var element = ReactComponentTreeHook.getElement(id);
	  var ownerID = ReactComponentTreeHook.getOwnerID(id);
	  var ownerName = void 0;

	  if (ownerID) {
	    ownerName = ReactComponentTreeHook.getDisplayName(ownerID);
	  }
	  warning$4(element, 'ReactComponentTreeHook: Missing React element for debugID %s when ' + 'building stack', id);
	  return describeComponentFrame$1(name || '', element && element._source, ownerName || '');
	}

	var ReactComponentTreeHook = {
	  onSetChildren: function (id, nextChildIDs) {
	    var item = getItem(id);
	    !item ? invariant(false, 'Item must have been set') : void 0;
	    item.childIDs = nextChildIDs;

	    for (var i = 0; i < nextChildIDs.length; i++) {
	      var nextChildID = nextChildIDs[i];
	      var nextChild = getItem(nextChildID);
	      !nextChild ? invariant(false, 'Expected hook events to fire for the child before its parent includes it in onSetChildren().') : void 0;
	      !(nextChild.childIDs != null || typeof nextChild.element !== 'object' || nextChild.element == null) ? invariant(false, 'Expected onSetChildren() to fire for a container child before its parent includes it in onSetChildren().') : void 0;
	      !nextChild.isMounted ? invariant(false, 'Expected onMountComponent() to fire for the child before its parent includes it in onSetChildren().') : void 0;
	      if (nextChild.parentID == null) {
	        nextChild.parentID = id;
	        // TODO: This shouldn't be necessary but mounting a new root during in
	        // componentWillMount currently causes not-yet-mounted components to
	        // be purged from our tree data so their parent id is missing.
	      }
	      !(nextChild.parentID === id) ? invariant(false, 'Expected onBeforeMountComponent() parent and onSetChildren() to be consistent (%s has parents %s and %s).', nextChildID, nextChild.parentID, id) : void 0;
	    }
	  },
	  onBeforeMountComponent: function (id, element, parentID) {
	    var item = {
	      element: element,
	      parentID: parentID,
	      text: null,
	      childIDs: [],
	      isMounted: false,
	      updateCount: 0
	    };
	    setItem(id, item);
	  },
	  onBeforeUpdateComponent: function (id, element) {
	    var item = getItem(id);
	    if (!item || !item.isMounted) {
	      // We may end up here as a result of setState() in componentWillUnmount().
	      // In this case, ignore the element.
	      return;
	    }
	    item.element = element;
	  },
	  onMountComponent: function (id) {
	    var item = getItem(id);
	    !item ? invariant(false, 'Item must have been set') : void 0;
	    item.isMounted = true;
	    var isRoot = item.parentID === 0;
	    if (isRoot) {
	      addRoot(id);
	    }
	  },
	  onUpdateComponent: function (id) {
	    var item = getItem(id);
	    if (!item || !item.isMounted) {
	      // We may end up here as a result of setState() in componentWillUnmount().
	      // In this case, ignore the element.
	      return;
	    }
	    item.updateCount++;
	  },
	  onUnmountComponent: function (id) {
	    var item = getItem(id);
	    if (item) {
	      // We need to check if it exists.
	      // `item` might not exist if it is inside an error boundary, and a sibling
	      // error boundary child threw while mounting. Then this instance never
	      // got a chance to mount, but it still gets an unmounting event during
	      // the error boundary cleanup.
	      item.isMounted = false;
	      var isRoot = item.parentID === 0;
	      if (isRoot) {
	        removeRoot(id);
	      }
	    }
	    unmountedIDs.push(id);
	  },
	  purgeUnmountedComponents: function () {
	    if (ReactComponentTreeHook._preventPurging) {
	      // Should only be used for testing.
	      return;
	    }

	    for (var i = 0; i < unmountedIDs.length; i++) {
	      var id = unmountedIDs[i];
	      purgeDeep(id);
	    }
	    unmountedIDs.length = 0;
	  },
	  isMounted: function (id) {
	    var item = getItem(id);
	    return item ? item.isMounted : false;
	  },
	  getCurrentStackAddendum: function () {
	    var info = '';
	    var currentOwner = ReactCurrentOwner_1.current;
	    if (currentOwner) {
	      !(typeof currentOwner.tag !== 'number') ? invariant(false, 'Fiber owners should not show up in Stack stack traces.') : void 0;
	      if (typeof currentOwner._debugID === 'number') {
	        info += ReactComponentTreeHook.getStackAddendumByID(currentOwner._debugID);
	      }
	    }
	    return info;
	  },
	  getStackAddendumByID: function (id) {
	    var info = '';
	    while (id) {
	      info += describeID(id);
	      id = ReactComponentTreeHook.getParentID(id);
	    }
	    return info;
	  },
	  getChildIDs: function (id) {
	    var item = getItem(id);
	    return item ? item.childIDs : [];
	  },
	  getDisplayName: function (id) {
	    var element = ReactComponentTreeHook.getElement(id);
	    if (!element) {
	      return null;
	    }
	    return getDisplayName$1(element);
	  },
	  getElement: function (id) {
	    var item = getItem(id);
	    return item ? item.element : null;
	  },
	  getOwnerID: function (id) {
	    var element = ReactComponentTreeHook.getElement(id);
	    if (!element || !element._owner) {
	      return null;
	    }
	    return element._owner._debugID;
	  },
	  getParentID: function (id) {
	    var item = getItem(id);
	    return item ? item.parentID : null;
	  },
	  getSource: function (id) {
	    var item = getItem(id);
	    var element = item ? item.element : null;
	    var source = element != null ? element._source : null;
	    return source;
	  },
	  getText: function (id) {
	    var element = ReactComponentTreeHook.getElement(id);
	    if (typeof element === 'string') {
	      return element;
	    } else if (typeof element === 'number') {
	      return '' + element;
	    } else {
	      return null;
	    }
	  },
	  getUpdateCount: function (id) {
	    var item = getItem(id);
	    return item ? item.updateCount : 0;
	  },


	  getRootIDs: getRootIDs,
	  getRegisteredIDs: getItemIDs
	};

	var ReactComponentTreeHook_1 = ReactComponentTreeHook;

	var createElement = ReactElement_1.createElement;
	var createFactory = ReactElement_1.createFactory;
	var cloneElement = ReactElement_1.cloneElement;

	{
	  var ReactElementValidator = ReactElementValidator_1;
	  createElement = ReactElementValidator.createElement;
	  createFactory = ReactElementValidator.createFactory;
	  cloneElement = ReactElementValidator.cloneElement;
	}

	var React = {
	  Children: {
	    map: ReactChildren_1.map,
	    forEach: ReactChildren_1.forEach,
	    count: ReactChildren_1.count,
	    toArray: ReactChildren_1.toArray,
	    only: onlyChild_1
	  },

	  Component: ReactBaseClasses.Component,
	  PureComponent: ReactBaseClasses.PureComponent,
	  unstable_AsyncComponent: ReactBaseClasses.AsyncComponent,

	  createElement: createElement,
	  cloneElement: cloneElement,
	  isValidElement: ReactElement_1.isValidElement,

	  createFactory: createFactory,

	  version: ReactVersion,

	  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
	    ReactCurrentOwner: ReactCurrentOwner_1,
	    // Used by renderers to avoid bundling object-assign twice in UMD bundles:
	    assign: objectAssign$1
	  }
	};

	{
	  objectAssign$1(React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, {
	    // These should not be included in production.
	    ReactComponentTreeHook: ReactComponentTreeHook_1,
	    ReactDebugCurrentFrame: ReactDebugCurrentFrame_1
	  });
	}

	var ReactEntry = React;

	module.exports = ReactEntry;

	})();
	}


/***/ },
/* 43 */
/***/ function(module, exports) {

	/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/

	'use strict';
	/* eslint-disable no-unused-vars */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}

			// Detect buggy property enumeration order in older V8 versions.

			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}

			return true;
		} catch (err) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}

	module.exports = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;

		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);

			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}

			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}

		return to;
	};


/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2014-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */

	'use strict';

	var emptyFunction = __webpack_require__(45);

	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */

	var warning = emptyFunction;

	if (true) {
	  var printWarning = function printWarning(format) {
	    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	      args[_key - 1] = arguments[_key];
	    }

	    var argIndex = 0;
	    var message = 'Warning: ' + format.replace(/%s/g, function () {
	      return args[argIndex++];
	    });
	    if (typeof console !== 'undefined') {
	      console.error(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) {}
	  };

	  warning = function warning(condition, format) {
	    if (format === undefined) {
	      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
	    }

	    if (format.indexOf('Failed Composite propType: ') === 0) {
	      return; // Ignore CompositeComponent proptype check.
	    }

	    if (!condition) {
	      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
	        args[_key2 - 2] = arguments[_key2];
	      }

	      printWarning.apply(undefined, [format].concat(args));
	    }
	  };
	}

	module.exports = warning;

/***/ },
/* 45 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */

	function makeEmptyFunction(arg) {
	  return function () {
	    return arg;
	  };
	}

	/**
	 * This function accepts and discards inputs; it has no side effects. This is
	 * primarily useful idiomatically for overridable function endpoints which
	 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
	 */
	var emptyFunction = function emptyFunction() {};

	emptyFunction.thatReturns = makeEmptyFunction;
	emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
	emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
	emptyFunction.thatReturnsNull = makeEmptyFunction(null);
	emptyFunction.thatReturnsThis = function () {
	  return this;
	};
	emptyFunction.thatReturnsArgument = function (arg) {
	  return arg;
	};

	module.exports = emptyFunction;

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */

	'use strict';

	var emptyObject = {};

	if (true) {
	  Object.freeze(emptyObject);
	}

	module.exports = emptyObject;

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */

	'use strict';

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	var validateFormat = function validateFormat(format) {};

	if (true) {
	  validateFormat = function validateFormat(format) {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  };
	}

	function invariant(condition, format, a, b, c, d, e, f) {
	  validateFormat(format);

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(format.replace(/%s/g, function () {
	        return args[argIndex++];
	      }));
	      error.name = 'Invariant Violation';
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	}

	module.exports = invariant;

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';

	if (true) {
	  var invariant = __webpack_require__(47);
	  var warning = __webpack_require__(44);
	  var ReactPropTypesSecret = __webpack_require__(49);
	  var loggedTypeFailures = {};
	}

	/**
	 * Assert that the values match with the type specs.
	 * Error messages are memorized and will only be shown once.
	 *
	 * @param {object} typeSpecs Map of name to a ReactPropType
	 * @param {object} values Runtime values that need to be type-checked
	 * @param {string} location e.g. "prop", "context", "child context"
	 * @param {string} componentName Name of the component for error messages.
	 * @param {?Function} getStack Returns the component stack.
	 * @private
	 */
	function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
	  if (true) {
	    for (var typeSpecName in typeSpecs) {
	      if (typeSpecs.hasOwnProperty(typeSpecName)) {
	        var error;
	        // Prop type validation may throw. In case they do, we don't want to
	        // fail the render phase where it didn't fail before. So we log it.
	        // After these have been cleaned up, we'll let them throw.
	        try {
	          // This is intentionally an invariant that gets caught. It's the same
	          // behavior as without this statement except with a better message.
	          invariant(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'the `prop-types` package, but received `%s`.', componentName || 'React class', location, typeSpecName, typeof typeSpecs[typeSpecName]);
	          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
	        } catch (ex) {
	          error = ex;
	        }
	        warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);
	        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
	          // Only monitor this failure once because there tends to be a lot of the
	          // same error.
	          loggedTypeFailures[error.message] = true;

	          var stack = getStack ? getStack() : '';

	          warning(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
	        }
	      }
	    }
	  }
	}

	module.exports = checkPropTypes;


/***/ },
/* 49 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';

	var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

	module.exports = ReactPropTypesSecret;


/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function checkDCE() {
	  /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
	  if (
	    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' ||
	    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function'
	  ) {
	    return;
	  }
	  if (true) {
	    // This branch is unreachable because this function is only called
	    // in production, but the condition is true only in development.
	    // Therefore if the branch is still here, dead code elimination wasn't
	    // properly applied.
	    // Don't change the message. React DevTools relies on it. Also make sure
	    // this message doesn't occur elsewhere in this function, or it will cause
	    // a false positive.
	    throw new Error('^_^');
	  }
	  try {
	    // Verify that the code above has been dead code eliminated (DCE'd).
	    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
	  } catch (err) {
	    // DevTools shouldn't crash React, no matter what.
	    // We should still report in case we break this code.
	    console.error(err);
	  }
	}

	if (false) {
	  // DCE check should happen before ReactDOM bundle executes so that
	  // DevTools can report bad minification during injection.
	  checkDCE();
	  module.exports = require('./cjs/react-dom.production.min.js');
	} else {
	  module.exports = __webpack_require__(51);
	}


/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	/** @license React v16.0.0
	 * react-dom.development.js
	 *
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	'use strict';


	if (true) {
	(function() {

	'use strict';

	var react = __webpack_require__(41);
	var invariant = __webpack_require__(47);
	var ExecutionEnvironment = __webpack_require__(52);
	var _assign = __webpack_require__(43);
	var EventListener = __webpack_require__(53);
	var require$$0 = __webpack_require__(44);
	var hyphenateStyleName = __webpack_require__(54);
	var emptyFunction = __webpack_require__(45);
	var camelizeStyleName = __webpack_require__(56);
	var performanceNow = __webpack_require__(58);
	var propTypes = __webpack_require__(60);
	var emptyObject = __webpack_require__(46);
	var checkPropTypes = __webpack_require__(48);
	var shallowEqual = __webpack_require__(62);
	var containsNode = __webpack_require__(63);
	var focusNode = __webpack_require__(66);
	var getActiveElement = __webpack_require__(67);

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * @providesModule reactProdInvariant
	 * 
	 */

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * @providesModule checkReact
	 * 
	 */




	!react ? invariant(false, 'ReactDOM was loaded before React. Make sure you load the React package before loading ReactDOM.') : void 0;

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * @providesModule DOMNamespaces
	 */

	var HTML_NAMESPACE = 'http://www.w3.org/1999/xhtml';
	var MATH_NAMESPACE = 'http://www.w3.org/1998/Math/MathML';
	var SVG_NAMESPACE = 'http://www.w3.org/2000/svg';

	var Namespaces = {
	  html: HTML_NAMESPACE,
	  mathml: MATH_NAMESPACE,
	  svg: SVG_NAMESPACE
	};

	// Assumes there is no parent namespace.
	function getIntrinsicNamespace(type) {
	  switch (type) {
	    case 'svg':
	      return SVG_NAMESPACE;
	    case 'math':
	      return MATH_NAMESPACE;
	    default:
	      return HTML_NAMESPACE;
	  }
	}

	function getChildNamespace$1(parentNamespace, type) {
	  if (parentNamespace == null || parentNamespace === HTML_NAMESPACE) {
	    // No (or default) parent namespace: potential entry point.
	    return getIntrinsicNamespace(type);
	  }
	  if (parentNamespace === SVG_NAMESPACE && type === 'foreignObject') {
	    // We're leaving SVG.
	    return HTML_NAMESPACE;
	  }
	  // By default, pass namespace below.
	  return parentNamespace;
	}

	var Namespaces_1 = Namespaces;
	var getIntrinsicNamespace_1 = getIntrinsicNamespace;
	var getChildNamespace_1 = getChildNamespace$1;

	var DOMNamespaces = {
		Namespaces: Namespaces_1,
		getIntrinsicNamespace: getIntrinsicNamespace_1,
		getChildNamespace: getChildNamespace_1
	};

	/**
	 * Injectable ordering of event plugins.
	 */
	var eventPluginOrder = null;

	/**
	 * Injectable mapping from names to event plugin modules.
	 */
	var namesToPlugins = {};

	/**
	 * Recomputes the plugin list using the injected plugins and plugin ordering.
	 *
	 * @private
	 */
	function recomputePluginOrdering() {
	  if (!eventPluginOrder) {
	    // Wait until an `eventPluginOrder` is injected.
	    return;
	  }
	  for (var pluginName in namesToPlugins) {
	    var pluginModule = namesToPlugins[pluginName];
	    var pluginIndex = eventPluginOrder.indexOf(pluginName);
	    !(pluginIndex > -1) ? invariant(false, 'EventPluginRegistry: Cannot inject event plugins that do not exist in the plugin ordering, `%s`.', pluginName) : void 0;
	    if (EventPluginRegistry.plugins[pluginIndex]) {
	      continue;
	    }
	    !pluginModule.extractEvents ? invariant(false, 'EventPluginRegistry: Event plugins must implement an `extractEvents` method, but `%s` does not.', pluginName) : void 0;
	    EventPluginRegistry.plugins[pluginIndex] = pluginModule;
	    var publishedEvents = pluginModule.eventTypes;
	    for (var eventName in publishedEvents) {
	      !publishEventForPlugin(publishedEvents[eventName], pluginModule, eventName) ? invariant(false, 'EventPluginRegistry: Failed to publish event `%s` for plugin `%s`.', eventName, pluginName) : void 0;
	    }
	  }
	}

	/**
	 * Publishes an event so that it can be dispatched by the supplied plugin.
	 *
	 * @param {object} dispatchConfig Dispatch configuration for the event.
	 * @param {object} PluginModule Plugin publishing the event.
	 * @return {boolean} True if the event was successfully published.
	 * @private
	 */
	function publishEventForPlugin(dispatchConfig, pluginModule, eventName) {
	  !!EventPluginRegistry.eventNameDispatchConfigs.hasOwnProperty(eventName) ? invariant(false, 'EventPluginHub: More than one plugin attempted to publish the same event name, `%s`.', eventName) : void 0;
	  EventPluginRegistry.eventNameDispatchConfigs[eventName] = dispatchConfig;

	  var phasedRegistrationNames = dispatchConfig.phasedRegistrationNames;
	  if (phasedRegistrationNames) {
	    for (var phaseName in phasedRegistrationNames) {
	      if (phasedRegistrationNames.hasOwnProperty(phaseName)) {
	        var phasedRegistrationName = phasedRegistrationNames[phaseName];
	        publishRegistrationName(phasedRegistrationName, pluginModule, eventName);
	      }
	    }
	    return true;
	  } else if (dispatchConfig.registrationName) {
	    publishRegistrationName(dispatchConfig.registrationName, pluginModule, eventName);
	    return true;
	  }
	  return false;
	}

	/**
	 * Publishes a registration name that is used to identify dispatched events.
	 *
	 * @param {string} registrationName Registration name to add.
	 * @param {object} PluginModule Plugin publishing the event.
	 * @private
	 */
	function publishRegistrationName(registrationName, pluginModule, eventName) {
	  !!EventPluginRegistry.registrationNameModules[registrationName] ? invariant(false, 'EventPluginHub: More than one plugin attempted to publish the same registration name, `%s`.', registrationName) : void 0;
	  EventPluginRegistry.registrationNameModules[registrationName] = pluginModule;
	  EventPluginRegistry.registrationNameDependencies[registrationName] = pluginModule.eventTypes[eventName].dependencies;

	  {
	    var lowerCasedName = registrationName.toLowerCase();
	    EventPluginRegistry.possibleRegistrationNames[lowerCasedName] = registrationName;

	    if (registrationName === 'onDoubleClick') {
	      EventPluginRegistry.possibleRegistrationNames.ondblclick = registrationName;
	    }
	  }
	}

	/**
	 * Registers plugins so that they can extract and dispatch events.
	 *
	 * @see {EventPluginHub}
	 */
	var EventPluginRegistry = {
	  /**
	   * Ordered list of injected plugins.
	   */
	  plugins: [],

	  /**
	   * Mapping from event name to dispatch config
	   */
	  eventNameDispatchConfigs: {},

	  /**
	   * Mapping from registration name to plugin module
	   */
	  registrationNameModules: {},

	  /**
	   * Mapping from registration name to event name
	   */
	  registrationNameDependencies: {},

	  /**
	   * Mapping from lowercase registration names to the properly cased version,
	   * used to warn in the case of missing event handlers. Available
	   * only in true.
	   * @type {Object}
	   */
	  possibleRegistrationNames: {},
	  // Trust the developer to only use possibleRegistrationNames in true

	  /**
	   * Injects an ordering of plugins (by plugin name). This allows the ordering
	   * to be decoupled from injection of the actual plugins so that ordering is
	   * always deterministic regardless of packaging, on-the-fly injection, etc.
	   *
	   * @param {array} InjectedEventPluginOrder
	   * @internal
	   * @see {EventPluginHub.injection.injectEventPluginOrder}
	   */
	  injectEventPluginOrder: function (injectedEventPluginOrder) {
	    !!eventPluginOrder ? invariant(false, 'EventPluginRegistry: Cannot inject event plugin ordering more than once. You are likely trying to load more than one copy of React.') : void 0;
	    // Clone the ordering so it cannot be dynamically mutated.
	    eventPluginOrder = Array.prototype.slice.call(injectedEventPluginOrder);
	    recomputePluginOrdering();
	  },

	  /**
	   * Injects plugins to be used by `EventPluginHub`. The plugin names must be
	   * in the ordering injected by `injectEventPluginOrder`.
	   *
	   * Plugins can be injected as part of page initialization or on-the-fly.
	   *
	   * @param {object} injectedNamesToPlugins Map from names to plugin modules.
	   * @internal
	   * @see {EventPluginHub.injection.injectEventPluginsByName}
	   */
	  injectEventPluginsByName: function (injectedNamesToPlugins) {
	    var isOrderingDirty = false;
	    for (var pluginName in injectedNamesToPlugins) {
	      if (!injectedNamesToPlugins.hasOwnProperty(pluginName)) {
	        continue;
	      }
	      var pluginModule = injectedNamesToPlugins[pluginName];
	      if (!namesToPlugins.hasOwnProperty(pluginName) || namesToPlugins[pluginName] !== pluginModule) {
	        !!namesToPlugins[pluginName] ? invariant(false, 'EventPluginRegistry: Cannot inject two different event plugins using the same name, `%s`.', pluginName) : void 0;
	        namesToPlugins[pluginName] = pluginModule;
	        isOrderingDirty = true;
	      }
	    }
	    if (isOrderingDirty) {
	      recomputePluginOrdering();
	    }
	  }
	};

	var EventPluginRegistry_1 = EventPluginRegistry;

	// These attributes should be all lowercase to allow for
	// case insensitive checks
	var RESERVED_PROPS = {
	  children: true,
	  dangerouslySetInnerHTML: true,
	  autoFocus: true,
	  defaultValue: true,
	  defaultChecked: true,
	  innerHTML: true,
	  suppressContentEditableWarning: true,
	  style: true
	};

	function checkMask(value, bitmask) {
	  return (value & bitmask) === bitmask;
	}

	var DOMPropertyInjection = {
	  /**
	   * Mapping from normalized, camelcased property names to a configuration that
	   * specifies how the associated DOM property should be accessed or rendered.
	   */
	  MUST_USE_PROPERTY: 0x1,
	  HAS_BOOLEAN_VALUE: 0x4,
	  HAS_NUMERIC_VALUE: 0x8,
	  HAS_POSITIVE_NUMERIC_VALUE: 0x10 | 0x8,
	  HAS_OVERLOADED_BOOLEAN_VALUE: 0x20,
	  HAS_STRING_BOOLEAN_VALUE: 0x40,

	  /**
	   * Inject some specialized knowledge about the DOM. This takes a config object
	   * with the following properties:
	   *
	   * Properties: object mapping DOM property name to one of the
	   * DOMPropertyInjection constants or null. If your attribute isn't in here,
	   * it won't get written to the DOM.
	   *
	   * DOMAttributeNames: object mapping React attribute name to the DOM
	   * attribute name. Attribute names not specified use the **lowercase**
	   * normalized name.
	   *
	   * DOMAttributeNamespaces: object mapping React attribute name to the DOM
	   * attribute namespace URL. (Attribute names not specified use no namespace.)
	   *
	   * DOMPropertyNames: similar to DOMAttributeNames but for DOM properties.
	   * Property names not specified use the normalized name.
	   *
	   * DOMMutationMethods: Properties that require special mutation methods. If
	   * `value` is undefined, the mutation method should unset the property.
	   *
	   * @param {object} domPropertyConfig the config as described above.
	   */
	  injectDOMPropertyConfig: function (domPropertyConfig) {
	    var Injection = DOMPropertyInjection;
	    var Properties = domPropertyConfig.Properties || {};
	    var DOMAttributeNamespaces = domPropertyConfig.DOMAttributeNamespaces || {};
	    var DOMAttributeNames = domPropertyConfig.DOMAttributeNames || {};
	    var DOMMutationMethods = domPropertyConfig.DOMMutationMethods || {};

	    for (var propName in Properties) {
	      !!DOMProperty.properties.hasOwnProperty(propName) ? invariant(false, 'injectDOMPropertyConfig(...): You\'re trying to inject DOM property \'%s\' which has already been injected. You may be accidentally injecting the same DOM property config twice, or you may be injecting two configs that have conflicting property names.', propName) : void 0;

	      var lowerCased = propName.toLowerCase();
	      var propConfig = Properties[propName];

	      var propertyInfo = {
	        attributeName: lowerCased,
	        attributeNamespace: null,
	        propertyName: propName,
	        mutationMethod: null,

	        mustUseProperty: checkMask(propConfig, Injection.MUST_USE_PROPERTY),
	        hasBooleanValue: checkMask(propConfig, Injection.HAS_BOOLEAN_VALUE),
	        hasNumericValue: checkMask(propConfig, Injection.HAS_NUMERIC_VALUE),
	        hasPositiveNumericValue: checkMask(propConfig, Injection.HAS_POSITIVE_NUMERIC_VALUE),
	        hasOverloadedBooleanValue: checkMask(propConfig, Injection.HAS_OVERLOADED_BOOLEAN_VALUE),
	        hasStringBooleanValue: checkMask(propConfig, Injection.HAS_STRING_BOOLEAN_VALUE)
	      };
	      !(propertyInfo.hasBooleanValue + propertyInfo.hasNumericValue + propertyInfo.hasOverloadedBooleanValue <= 1) ? invariant(false, 'DOMProperty: Value can be one of boolean, overloaded boolean, or numeric value, but not a combination: %s', propName) : void 0;

	      if (DOMAttributeNames.hasOwnProperty(propName)) {
	        var attributeName = DOMAttributeNames[propName];

	        propertyInfo.attributeName = attributeName;
	      }

	      if (DOMAttributeNamespaces.hasOwnProperty(propName)) {
	        propertyInfo.attributeNamespace = DOMAttributeNamespaces[propName];
	      }

	      if (DOMMutationMethods.hasOwnProperty(propName)) {
	        propertyInfo.mutationMethod = DOMMutationMethods[propName];
	      }

	      // Downcase references to whitelist properties to check for membership
	      // without case-sensitivity. This allows the whitelist to pick up
	      // `allowfullscreen`, which should be written using the property configuration
	      // for `allowFullscreen`
	      DOMProperty.properties[propName] = propertyInfo;
	    }
	  }
	};

	/* eslint-disable max-len */
	var ATTRIBUTE_NAME_START_CHAR = ':A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD';
	/* eslint-enable max-len */

	/**
	 * DOMProperty exports lookup objects that can be used like functions:
	 *
	 *   > DOMProperty.isValid['id']
	 *   true
	 *   > DOMProperty.isValid['foobar']
	 *   undefined
	 *
	 * Although this may be confusing, it performs better in general.
	 *
	 * @see http://jsperf.com/key-exists
	 * @see http://jsperf.com/key-missing
	 */
	var DOMProperty = {
	  ID_ATTRIBUTE_NAME: 'data-reactid',
	  ROOT_ATTRIBUTE_NAME: 'data-reactroot',

	  ATTRIBUTE_NAME_START_CHAR: ATTRIBUTE_NAME_START_CHAR,
	  ATTRIBUTE_NAME_CHAR: ATTRIBUTE_NAME_START_CHAR + '\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040',

	  /**
	   * Map from property "standard name" to an object with info about how to set
	   * the property in the DOM. Each object contains:
	   *
	   * attributeName:
	   *   Used when rendering markup or with `*Attribute()`.
	   * attributeNamespace
	   * propertyName:
	   *   Used on DOM node instances. (This includes properties that mutate due to
	   *   external factors.)
	   * mutationMethod:
	   *   If non-null, used instead of the property or `setAttribute()` after
	   *   initial render.
	   * mustUseProperty:
	   *   Whether the property must be accessed and mutated as an object property.
	   * hasBooleanValue:
	   *   Whether the property should be removed when set to a falsey value.
	   * hasNumericValue:
	   *   Whether the property must be numeric or parse as a numeric and should be
	   *   removed when set to a falsey value.
	   * hasPositiveNumericValue:
	   *   Whether the property must be positive numeric or parse as a positive
	   *   numeric and should be removed when set to a falsey value.
	   * hasOverloadedBooleanValue:
	   *   Whether the property can be used as a flag as well as with a value.
	   *   Removed when strictly equal to false; present without a value when
	   *   strictly equal to true; present with a value otherwise.
	   */
	  properties: {},

	  /**
	   * Checks whether a property name is a writeable attribute.
	   * @method
	   */
	  shouldSetAttribute: function (name, value) {
	    if (DOMProperty.isReservedProp(name)) {
	      return false;
	    }
	    if ((name[0] === 'o' || name[0] === 'O') && (name[1] === 'n' || name[1] === 'N')) {
	      return false;
	    }
	    if (value === null) {
	      return true;
	    }
	    switch (typeof value) {
	      case 'boolean':
	        return DOMProperty.shouldAttributeAcceptBooleanValue(name);
	      case 'undefined':
	      case 'number':
	      case 'string':
	      case 'object':
	        return true;
	      default:
	        // function, symbol
	        return false;
	    }
	  },

	  getPropertyInfo: function (name) {
	    return DOMProperty.properties.hasOwnProperty(name) ? DOMProperty.properties[name] : null;
	  },
	  shouldAttributeAcceptBooleanValue: function (name) {
	    if (DOMProperty.isReservedProp(name)) {
	      return true;
	    }
	    var propertyInfo = DOMProperty.getPropertyInfo(name);
	    if (propertyInfo) {
	      return propertyInfo.hasBooleanValue || propertyInfo.hasStringBooleanValue || propertyInfo.hasOverloadedBooleanValue;
	    }
	    var prefix = name.toLowerCase().slice(0, 5);
	    return prefix === 'data-' || prefix === 'aria-';
	  },


	  /**
	   * Checks to see if a property name is within the list of properties
	   * reserved for internal React operations. These properties should
	   * not be set on an HTML element.
	   *
	   * @private
	   * @param {string} name
	   * @return {boolean} If the name is within reserved props
	   */
	  isReservedProp: function (name) {
	    return RESERVED_PROPS.hasOwnProperty(name);
	  },


	  injection: DOMPropertyInjection
	};

	var DOMProperty_1 = DOMProperty;

	/**
	 * Copyright (c) 2015-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * @providesModule ReactDOMComponentFlags
	 */

	var ReactDOMComponentFlags = {
	  hasCachedChildNodes: 1 << 0
	};

	var ReactDOMComponentFlags_1 = ReactDOMComponentFlags;

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * @providesModule ReactTypeOfWork
	 * 
	 */

	var ReactTypeOfWork = {
	  IndeterminateComponent: 0, // Before we know whether it is functional or class
	  FunctionalComponent: 1,
	  ClassComponent: 2,
	  HostRoot: 3, // Root of a host tree. Could be nested inside another node.
	  HostPortal: 4, // A subtree. Could be an entry point to a different renderer.
	  HostComponent: 5,
	  HostText: 6,
	  CoroutineComponent: 7,
	  CoroutineHandlerPhase: 8,
	  YieldComponent: 9,
	  Fragment: 10
	};

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * @providesModule HTMLNodeType
	 */

	/**
	 * HTML nodeType values that represent the type of the node
	 */

	var HTMLNodeType = {
	  ELEMENT_NODE: 1,
	  TEXT_NODE: 3,
	  COMMENT_NODE: 8,
	  DOCUMENT_NODE: 9,
	  DOCUMENT_FRAGMENT_NODE: 11
	};

	var HTMLNodeType_1 = HTMLNodeType;

	var HostComponent = ReactTypeOfWork.HostComponent;
	var HostText = ReactTypeOfWork.HostText;

	var ELEMENT_NODE$1 = HTMLNodeType_1.ELEMENT_NODE;
	var COMMENT_NODE$1 = HTMLNodeType_1.COMMENT_NODE;



	var ATTR_NAME = DOMProperty_1.ID_ATTRIBUTE_NAME;
	var Flags = ReactDOMComponentFlags_1;

	var randomKey = Math.random().toString(36).slice(2);

	var internalInstanceKey = '__reactInternalInstance$' + randomKey;

	var internalEventHandlersKey = '__reactEventHandlers$' + randomKey;

	/**
	 * Check if a given node should be cached.
	 */
	function shouldPrecacheNode(node, nodeID) {
	  return node.nodeType === ELEMENT_NODE$1 && node.getAttribute(ATTR_NAME) === '' + nodeID || node.nodeType === COMMENT_NODE$1 && node.nodeValue === ' react-text: ' + nodeID + ' ' || node.nodeType === COMMENT_NODE$1 && node.nodeValue === ' react-empty: ' + nodeID + ' ';
	}

	/**
	 * Drill down (through composites and empty components) until we get a host or
	 * host text component.
	 *
	 * This is pretty polymorphic but unavoidable with the current structure we have
	 * for `_renderedChildren`.
	 */
	function getRenderedHostOrTextFromComponent(component) {
	  var rendered;
	  while (rendered = component._renderedComponent) {
	    component = rendered;
	  }
	  return component;
	}

	/**
	 * Populate `_hostNode` on the rendered host/text component with the given
	 * DOM node. The passed `inst` can be a composite.
	 */
	function precacheNode(inst, node) {
	  var hostInst = getRenderedHostOrTextFromComponent(inst);
	  hostInst._hostNode = node;
	  node[internalInstanceKey] = hostInst;
	}

	function precacheFiberNode$1(hostInst, node) {
	  node[internalInstanceKey] = hostInst;
	}

	function uncacheNode(inst) {
	  var node = inst._hostNode;
	  if (node) {
	    delete node[internalInstanceKey];
	    inst._hostNode = null;
	  }
	}

	/**
	 * Populate `_hostNode` on each child of `inst`, assuming that the children
	 * match up with the DOM (element) children of `node`.
	 *
	 * We cache entire levels at once to avoid an n^2 problem where we access the
	 * children of a node sequentially and have to walk from the start to our target
	 * node every time.
	 *
	 * Since we update `_renderedChildren` and the actual DOM at (slightly)
	 * different times, we could race here and see a newer `_renderedChildren` than
	 * the DOM nodes we see. To avoid this, ReactMultiChild calls
	 * `prepareToManageChildren` before we change `_renderedChildren`, at which
	 * time the container's child nodes are always cached (until it unmounts).
	 */
	function precacheChildNodes(inst, node) {
	  if (inst._flags & Flags.hasCachedChildNodes) {
	    return;
	  }
	  var children = inst._renderedChildren;
	  var childNode = node.firstChild;
	  outer: for (var name in children) {
	    if (!children.hasOwnProperty(name)) {
	      continue;
	    }
	    var childInst = children[name];
	    var childID = getRenderedHostOrTextFromComponent(childInst)._domID;
	    if (childID === 0) {
	      // We're currently unmounting this child in ReactMultiChild; skip it.
	      continue;
	    }
	    // We assume the child nodes are in the same order as the child instances.
	    for (; childNode !== null; childNode = childNode.nextSibling) {
	      if (shouldPrecacheNode(childNode, childID)) {
	        precacheNode(childInst, childNode);
	        continue outer;
	      }
	    }
	    // We reached the end of the DOM children without finding an ID match.
	    invariant(false, 'Unable to find element with ID %s.', childID);
	  }
	  inst._flags |= Flags.hasCachedChildNodes;
	}

	/**
	 * Given a DOM node, return the closest ReactDOMComponent or
	 * ReactDOMTextComponent instance ancestor.
	 */
	function getClosestInstanceFromNode(node) {
	  if (node[internalInstanceKey]) {
	    return node[internalInstanceKey];
	  }

	  // Walk up the tree until we find an ancestor whose instance we have cached.
	  var parents = [];
	  while (!node[internalInstanceKey]) {
	    parents.push(node);
	    if (node.parentNode) {
	      node = node.parentNode;
	    } else {
	      // Top of the tree. This node must not be part of a React tree (or is
	      // unmounted, potentially).
	      return null;
	    }
	  }

	  var closest;
	  var inst = node[internalInstanceKey];
	  if (inst.tag === HostComponent || inst.tag === HostText) {
	    // In Fiber, this will always be the deepest root.
	    return inst;
	  }
	  for (; node && (inst = node[internalInstanceKey]); node = parents.pop()) {
	    closest = inst;
	    if (parents.length) {
	      precacheChildNodes(inst, node);
	    }
	  }

	  return closest;
	}

	/**
	 * Given a DOM node, return the ReactDOMComponent or ReactDOMTextComponent
	 * instance, or null if the node was not rendered by this React.
	 */
	function getInstanceFromNode(node) {
	  var inst = node[internalInstanceKey];
	  if (inst) {
	    if (inst.tag === HostComponent || inst.tag === HostText) {
	      return inst;
	    } else if (inst._hostNode === node) {
	      return inst;
	    } else {
	      return null;
	    }
	  }
	  inst = getClosestInstanceFromNode(node);
	  if (inst != null && inst._hostNode === node) {
	    return inst;
	  } else {
	    return null;
	  }
	}

	/**
	 * Given a ReactDOMComponent or ReactDOMTextComponent, return the corresponding
	 * DOM node.
	 */
	function getNodeFromInstance(inst) {
	  if (inst.tag === HostComponent || inst.tag === HostText) {
	    // In Fiber this, is just the state node right now. We assume it will be
	    // a host component or host text.
	    return inst.stateNode;
	  }

	  // Without this first invariant, passing a non-DOM-component triggers the next
	  // invariant for a missing parent, which is super confusing.
	  !(inst._hostNode !== undefined) ? invariant(false, 'getNodeFromInstance: Invalid argument.') : void 0;

	  if (inst._hostNode) {
	    return inst._hostNode;
	  }

	  // Walk up the tree until we find an ancestor whose DOM node we have cached.
	  var parents = [];
	  while (!inst._hostNode) {
	    parents.push(inst);
	    !inst._hostParent ? invariant(false, 'React DOM tree root should always have a node reference.') : void 0;
	    inst = inst._hostParent;
	  }

	  // Now parents contains each ancestor that does *not* have a cached native
	  // node, and `inst` is the deepest ancestor that does.
	  for (; parents.length; inst = parents.pop()) {
	    precacheChildNodes(inst, inst._hostNode);
	  }

	  return inst._hostNode;
	}

	function getFiberCurrentPropsFromNode(node) {
	  return node[internalEventHandlersKey] || null;
	}

	function updateFiberProps$1(node, props) {
	  node[internalEventHandlersKey] = props;
	}

	var ReactDOMComponentTree = {
	  getClosestInstanceFromNode: getClosestInstanceFromNode,
	  getInstanceFromNode: getInstanceFromNode,
	  getNodeFromInstance: getNodeFromInstance,
	  precacheChildNodes: precacheChildNodes,
	  precacheNode: precacheNode,
	  uncacheNode: uncacheNode,
	  precacheFiberNode: precacheFiberNode$1,
	  getFiberCurrentPropsFromNode: getFiberCurrentPropsFromNode,
	  updateFiberProps: updateFiberProps$1
	};

	var ReactDOMComponentTree_1 = ReactDOMComponentTree;

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * @providesModule ReactInstanceMap
	 */

	/**
	 * `ReactInstanceMap` maintains a mapping from a public facing stateful
	 * instance (key) and the internal representation (value). This allows public
	 * methods to accept the user facing instance as an argument and map them back
	 * to internal methods.
	 */

	// TODO: Replace this with ES6: var ReactInstanceMap = new Map();

	var ReactInstanceMap = {
	  /**
	   * This API should be called `delete` but we'd have to make sure to always
	   * transform these to strings for IE support. When this transform is fully
	   * supported we can rename it.
	   */
	  remove: function (key) {
	    key._reactInternalFiber = undefined;
	  },

	  get: function (key) {
	    return key._reactInternalFiber;
	  },

	  has: function (key) {
	    return key._reactInternalFiber !== undefined;
	  },

	  set: function (key, value) {
	    key._reactInternalFiber = value;
	  }
	};

	var ReactInstanceMap_1 = ReactInstanceMap;

	var ReactInternals = react.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

	var ReactGlobalSharedState = {
	  ReactCurrentOwner: ReactInternals.ReactCurrentOwner
	};

	{
	  _assign(ReactGlobalSharedState, {
	    ReactComponentTreeHook: ReactInternals.ReactComponentTreeHook,
	    ReactDebugCurrentFrame: ReactInternals.ReactDebugCurrentFrame
	  });
	}

	var ReactGlobalSharedState_1 = ReactGlobalSharedState;

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * @providesModule getComponentName
	 * 
	 */

	function getComponentName(instanceOrFiber) {
	  if (typeof instanceOrFiber.getName === 'function') {
	    // Stack reconciler
	    var instance = instanceOrFiber;
	    return instance.getName();
	  }
	  if (typeof instanceOrFiber.tag === 'number') {
	    // Fiber reconciler
	    var fiber = instanceOrFiber;
	    var type = fiber.type;

	    if (typeof type === 'string') {
	      return type;
	    }
	    if (typeof type === 'function') {
	      return type.displayName || type.name;
	    }
	  }
	  return null;
	}

	var getComponentName_1 = getComponentName;

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * @providesModule ReactTypeOfSideEffect
	 * 
	 */

	var ReactTypeOfSideEffect = {
	  // Don't change these two values:
	  NoEffect: 0, //           0b00000000
	  PerformedWork: 1, //      0b00000001
	  // You can change the rest (and add more).
	  Placement: 2, //          0b00000010
	  Update: 4, //             0b00000100
	  PlacementAndUpdate: 6, // 0b00000110
	  Deletion: 8, //           0b00001000
	  ContentReset: 16, //      0b00010000
	  Callback: 32, //          0b00100000
	  Err: 64, //               0b01000000
	  Ref: 128 };

	var ReactCurrentOwner = ReactGlobalSharedState_1.ReactCurrentOwner;




	{
	  var warning$1 = require$$0;
	}

	var ClassComponent = ReactTypeOfWork.ClassComponent;
	var HostComponent$1 = ReactTypeOfWork.HostComponent;
	var HostRoot$1 = ReactTypeOfWork.HostRoot;
	var HostPortal = ReactTypeOfWork.HostPortal;
	var HostText$1 = ReactTypeOfWork.HostText;

	var NoEffect = ReactTypeOfSideEffect.NoEffect;
	var Placement = ReactTypeOfSideEffect.Placement;

	var MOUNTING = 1;
	var MOUNTED = 2;
	var UNMOUNTED = 3;

	function isFiberMountedImpl(fiber) {
	  var node = fiber;
	  if (!fiber.alternate) {
	    // If there is no alternate, this might be a new tree that isn't inserted
	    // yet. If it is, then it will have a pending insertion effect on it.
	    if ((node.effectTag & Placement) !== NoEffect) {
	      return MOUNTING;
	    }
	    while (node['return']) {
	      node = node['return'];
	      if ((node.effectTag & Placement) !== NoEffect) {
	        return MOUNTING;
	      }
	    }
	  } else {
	    while (node['return']) {
	      node = node['return'];
	    }
	  }
	  if (node.tag === HostRoot$1) {
	    // TODO: Check if this was a nested HostRoot when used with
	    // renderContainerIntoSubtree.
	    return MOUNTED;
	  }
	  // If we didn't hit the root, that means that we're in an disconnected tree
	  // that has been unmounted.
	  return UNMOUNTED;
	}
	var isFiberMounted = function (fiber) {
	  return isFiberMountedImpl(fiber) === MOUNTED;
	};

	var isMounted = function (component) {
	  {
	    var owner = ReactCurrentOwner.current;
	    if (owner !== null && owner.tag === ClassComponent) {
	      var ownerFiber = owner;
	      var instance = ownerFiber.stateNode;
	      warning$1(instance._warnedAboutRefsInRender, '%s is accessing isMounted inside its render() function. ' + 'render() should be a pure function of props and state. It should ' + 'never access something that requires stale data from the previous ' + 'render, such as refs. Move this logic to componentDidMount and ' + 'componentDidUpdate instead.', getComponentName_1(ownerFiber) || 'A component');
	      instance._warnedAboutRefsInRender = true;
	    }
	  }

	  var fiber = ReactInstanceMap_1.get(component);
	  if (!fiber) {
	    return false;
	  }
	  return isFiberMountedImpl(fiber) === MOUNTED;
	};

	function assertIsMounted(fiber) {
	  !(isFiberMountedImpl(fiber) === MOUNTED) ? invariant(false, 'Unable to find node on an unmounted component.') : void 0;
	}

	function findCurrentFiberUsingSlowPath(fiber) {
	  var alternate = fiber.alternate;
	  if (!alternate) {
	    // If there is no alternate, then we only need to check if it is mounted.
	    var state = isFiberMountedImpl(fiber);
	    !(state !== UNMOUNTED) ? invariant(false, 'Unable to find node on an unmounted component.') : void 0;
	    if (state === MOUNTING) {
	      return null;
	    }
	    return fiber;
	  }
	  // If we have two possible branches, we'll walk backwards up to the root
	  // to see what path the root points to. On the way we may hit one of the
	  // special cases and we'll deal with them.
	  var a = fiber;
	  var b = alternate;
	  while (true) {
	    var parentA = a['return'];
	    var parentB = parentA ? parentA.alternate : null;
	    if (!parentA || !parentB) {
	      // We're at the root.
	      break;
	    }

	    // If both copies of the parent fiber point to the same child, we can
	    // assume that the child is current. This happens when we bailout on low
	    // priority: the bailed out fiber's child reuses the current child.
	    if (parentA.child === parentB.child) {
	      var child = parentA.child;
	      while (child) {
	        if (child === a) {
	          // We've determined that A is the current branch.
	          assertIsMounted(parentA);
	          return fiber;
	        }
	        if (child === b) {
	          // We've determined that B is the current branch.
	          assertIsMounted(parentA);
	          return alternate;
	        }
	        child = child.sibling;
	      }
	      // We should never have an alternate for any mounting node. So the only
	      // way this could possibly happen is if this was unmounted, if at all.
	      invariant(false, 'Unable to find node on an unmounted component.');
	    }

	    if (a['return'] !== b['return']) {
	      // The return pointer of A and the return pointer of B point to different
	      // fibers. We assume that return pointers never criss-cross, so A must
	      // belong to the child set of A.return, and B must belong to the child
	      // set of B.return.
	      a = parentA;
	      b = parentB;
	    } else {
	      // The return pointers point to the same fiber. We'll have to use the
	      // default, slow path: scan the child sets of each parent alternate to see
	      // which child belongs to which set.
	      //
	      // Search parent A's child set
	      var didFindChild = false;
	      var _child = parentA.child;
	      while (_child) {
	        if (_child === a) {
	          didFindChild = true;
	          a = parentA;
	          b = parentB;
	          break;
	        }
	        if (_child === b) {
	          didFindChild = true;
	          b = parentA;
	          a = parentB;
	          break;
	        }
	        _child = _child.sibling;
	      }
	      if (!didFindChild) {
	        // Search parent B's child set
	        _child = parentB.child;
	        while (_child) {
	          if (_child === a) {
	            didFindChild = true;
	            a = parentB;
	            b = parentA;
	            break;
	          }
	          if (_child === b) {
	            didFindChild = true;
	            b = parentB;
	            a = parentA;
	            break;
	          }
	          _child = _child.sibling;
	        }
	        !didFindChild ? invariant(false, 'Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.') : void 0;
	      }
	    }

	    !(a.alternate === b) ? invariant(false, 'Return fibers should always be each others\' alternates. This error is likely caused by a bug in React. Please file an issue.') : void 0;
	  }
	  // If the root is not a host container, we're in a disconnected tree. I.e.
	  // unmounted.
	  !(a.tag === HostRoot$1) ? invariant(false, 'Unable to find node on an unmounted component.') : void 0;
	  if (a.stateNode.current === a) {
	    // We've determined that A is the current branch.
	    return fiber;
	  }
	  // Otherwise B has to be current branch.
	  return alternate;
	}
	var findCurrentFiberUsingSlowPath_1 = findCurrentFiberUsingSlowPath;

	var findCurrentHostFiber = function (parent) {
	  var currentParent = findCurrentFiberUsingSlowPath(parent);
	  if (!currentParent) {
	    return null;
	  }

	  // Next we'll drill down this component to find the first HostComponent/Text.
	  var node = currentParent;
	  while (true) {
	    if (node.tag === HostComponent$1 || node.tag === HostText$1) {
	      return node;
	    } else if (node.child) {
	      node.child['return'] = node;
	      node = node.child;
	      continue;
	    }
	    if (node === currentParent) {
	      return null;
	    }
	    while (!node.sibling) {
	      if (!node['return'] || node['return'] === currentParent) {
	        return null;
	      }
	      node = node['return'];
	    }
	    node.sibling['return'] = node['return'];
	    node = node.sibling;
	  }
	  // Flow needs the return null here, but ESLint complains about it.
	  // eslint-disable-next-line no-unreachable
	  return null;
	};

	var findCurrentHostFiberWithNoPortals = function (parent) {
	  var currentParent = findCurrentFiberUsingSlowPath(parent);
	  if (!currentParent) {
	    return null;
	  }

	  // Next we'll drill down this component to find the first HostComponent/Text.
	  var node = currentParent;
	  while (true) {
	    if (node.tag === HostComponent$1 || node.tag === HostText$1) {
	      return node;
	    } else if (node.child && node.tag !== HostPortal) {
	      node.child['return'] = node;
	      node = node.child;
	      continue;
	    }
	    if (node === currentParent) {
	      return null;
	    }
	    while (!node.sibling) {
	      if (!node['return'] || node['return'] === currentParent) {
	        return null;
	      }
	      node = node['return'];
	    }
	    node.sibling['return'] = node['return'];
	    node = node.sibling;
	  }
	  // Flow needs the return null here, but ESLint complains about it.
	  // eslint-disable-next-line no-unreachable
	  return null;
	};

	var ReactFiberTreeReflection = {
		isFiberMounted: isFiberMounted,
		isMounted: isMounted,
		findCurrentFiberUsingSlowPath: findCurrentFiberUsingSlowPath_1,
		findCurrentHostFiber: findCurrentHostFiber,
		findCurrentHostFiberWithNoPortals: findCurrentHostFiberWithNoPortals
	};

	var ReactErrorUtils = {
	  // Used by Fiber to simulate a try-catch.
	  _caughtError: null,
	  _hasCaughtError: false,

	  // Used by event system to capture/rethrow the first error.
	  _rethrowError: null,
	  _hasRethrowError: false,

	  injection: {
	    injectErrorUtils: function (injectedErrorUtils) {
	      !(typeof injectedErrorUtils.invokeGuardedCallback === 'function') ? invariant(false, 'Injected invokeGuardedCallback() must be a function.') : void 0;
	      invokeGuardedCallback = injectedErrorUtils.invokeGuardedCallback;
	    }
	  },

	  /**
	   * Call a function while guarding against errors that happens within it.
	   * Returns an error if it throws, otherwise null.
	   *
	   * In production, this is implemented using a try-catch. The reason we don't
	   * use a try-catch directly is so that we can swap out a different
	   * implementation in DEV mode.
	   *
	   * @param {String} name of the guard to use for logging or debugging
	   * @param {Function} func The function to invoke
	   * @param {*} context The context to use when calling the function
	   * @param {...*} args Arguments for function
	   */
	  invokeGuardedCallback: function (name, func, context, a, b, c, d, e, f) {
	    invokeGuardedCallback.apply(ReactErrorUtils, arguments);
	  },

	  /**
	   * Same as invokeGuardedCallback, but instead of returning an error, it stores
	   * it in a global so it can be rethrown by `rethrowCaughtError` later.
	   * TODO: See if _caughtError and _rethrowError can be unified.
	   *
	   * @param {String} name of the guard to use for logging or debugging
	   * @param {Function} func The function to invoke
	   * @param {*} context The context to use when calling the function
	   * @param {...*} args Arguments for function
	   */
	  invokeGuardedCallbackAndCatchFirstError: function (name, func, context, a, b, c, d, e, f) {
	    ReactErrorUtils.invokeGuardedCallback.apply(this, arguments);
	    if (ReactErrorUtils.hasCaughtError()) {
	      var error = ReactErrorUtils.clearCaughtError();
	      if (!ReactErrorUtils._hasRethrowError) {
	        ReactErrorUtils._hasRethrowError = true;
	        ReactErrorUtils._rethrowError = error;
	      }
	    }
	  },

	  /**
	   * During execution of guarded functions we will capture the first error which
	   * we will rethrow to be handled by the top level error handler.
	   */
	  rethrowCaughtError: function () {
	    return rethrowCaughtError.apply(ReactErrorUtils, arguments);
	  },

	  hasCaughtError: function () {
	    return ReactErrorUtils._hasCaughtError;
	  },

	  clearCaughtError: function () {
	    if (ReactErrorUtils._hasCaughtError) {
	      var error = ReactErrorUtils._caughtError;
	      ReactErrorUtils._caughtError = null;
	      ReactErrorUtils._hasCaughtError = false;
	      return error;
	    } else {
	      invariant(false, 'clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.');
	    }
	  }
	};

	var invokeGuardedCallback = function (name, func, context, a, b, c, d, e, f) {
	  ReactErrorUtils._hasCaughtError = false;
	  ReactErrorUtils._caughtError = null;
	  var funcArgs = Array.prototype.slice.call(arguments, 3);
	  try {
	    func.apply(context, funcArgs);
	  } catch (error) {
	    ReactErrorUtils._caughtError = error;
	    ReactErrorUtils._hasCaughtError = true;
	  }
	};

	{
	  // In DEV mode, we swap out invokeGuardedCallback for a special version
	  // that plays more nicely with the browser's DevTools. The idea is to preserve
	  // "Pause on exceptions" behavior. Because React wraps all user-provided
	  // functions in invokeGuardedCallback, and the production version of
	  // invokeGuardedCallback uses a try-catch, all user exceptions are treated
	  // like caught exceptions, and the DevTools won't pause unless the developer
	  // takes the extra step of enabling pause on caught exceptions. This is
	  // untintuitive, though, because even though React has caught the error, from
	  // the developer's perspective, the error is uncaught.
	  //
	  // To preserve the expected "Pause on exceptions" behavior, we don't use a
	  // try-catch in DEV. Instead, we synchronously dispatch a fake event to a fake
	  // DOM node, and call the user-provided callback from inside an event handler
	  // for that fake event. If the callback throws, the error is "captured" using
	  // a global event handler. But because the error happens in a different
	  // event loop context, it does not interrupt the normal program flow.
	  // Effectively, this gives us try-catch behavior without actually using
	  // try-catch. Neat!

	  // Check that the browser supports the APIs we need to implement our special
	  // DEV version of invokeGuardedCallback
	  if (typeof window !== 'undefined' && typeof window.dispatchEvent === 'function' && typeof document !== 'undefined' && typeof document.createEvent === 'function') {
	    var fakeNode = document.createElement('react');

	    var invokeGuardedCallbackDev = function (name, func, context, a, b, c, d, e, f) {
	      // Keeps track of whether the user-provided callback threw an error. We
	      // set this to true at the beginning, then set it to false right after
	      // calling the function. If the function errors, `didError` will never be
	      // set to false. This strategy works even if the browser is flaky and
	      // fails to call our global error handler, because it doesn't rely on
	      // the error event at all.
	      var didError = true;

	      // Create an event handler for our fake event. We will synchronously
	      // dispatch our fake event using `dispatchEvent`. Inside the handler, we
	      // call the user-provided callback.
	      var funcArgs = Array.prototype.slice.call(arguments, 3);
	      function callCallback() {
	        // We immediately remove the callback from event listeners so that
	        // nested `invokeGuardedCallback` calls do not clash. Otherwise, a
	        // nested call would trigger the fake event handlers of any call higher
	        // in the stack.
	        fakeNode.removeEventListener(evtType, callCallback, false);
	        func.apply(context, funcArgs);
	        didError = false;
	      }

	      // Create a global error event handler. We use this to capture the value
	      // that was thrown. It's possible that this error handler will fire more
	      // than once; for example, if non-React code also calls `dispatchEvent`
	      // and a handler for that event throws. We should be resilient to most of
	      // those cases. Even if our error event handler fires more than once, the
	      // last error event is always used. If the callback actually does error,
	      // we know that the last error event is the correct one, because it's not
	      // possible for anything else to have happened in between our callback
	      // erroring and the code that follows the `dispatchEvent` call below. If
	      // the callback doesn't error, but the error event was fired, we know to
	      // ignore it because `didError` will be false, as described above.
	      var error = void 0;
	      // Use this to track whether the error event is ever called.
	      var didSetError = false;
	      var isCrossOriginError = false;

	      function onError(event) {
	        error = event.error;
	        didSetError = true;
	        if (error === null && event.colno === 0 && event.lineno === 0) {
	          isCrossOriginError = true;
	        }
	      }

	      // Create a fake event type.
	      var evtType = 'react-' + (name ? name : 'invokeguardedcallback');

	      // Attach our event handlers
	      window.addEventListener('error', onError);
	      fakeNode.addEventListener(evtType, callCallback, false);

	      // Synchronously dispatch our fake event. If the user-provided function
	      // errors, it will trigger our global error handler.
	      var evt = document.createEvent('Event');
	      evt.initEvent(evtType, false, false);
	      fakeNode.dispatchEvent(evt);

	      if (didError) {
	        if (!didSetError) {
	          // The callback errored, but the error event never fired.
	          error = new Error('An error was thrown inside one of your components, but React ' + "doesn't know what it was. This is likely due to browser " + 'flakiness. React does its best to preserve the "Pause on ' + 'exceptions" behavior of the DevTools, which requires some ' + "DEV-mode only tricks. It's possible that these don't work in " + 'your browser. Try triggering the error in production mode, ' + 'or switching to a modern browser. If you suspect that this is ' + 'actually an issue with React, please file an issue.');
	        } else if (isCrossOriginError) {
	          error = new Error("A cross-origin error was thrown. React doesn't have access to " + 'the actual error object in development. ' + 'See https://fb.me/react-crossorigin-error for more information.');
	        }
	        ReactErrorUtils._hasCaughtError = true;
	        ReactErrorUtils._caughtError = error;
	      } else {
	        ReactErrorUtils._hasCaughtError = false;
	        ReactErrorUtils._caughtError = null;
	      }

	      // Remove our event listeners
	      window.removeEventListener('error', onError);
	    };

	    invokeGuardedCallback = invokeGuardedCallbackDev;
	  }
	}

	var rethrowCaughtError = function () {
	  if (ReactErrorUtils._hasRethrowError) {
	    var error = ReactErrorUtils._rethrowError;
	    ReactErrorUtils._rethrowError = null;
	    ReactErrorUtils._hasRethrowError = false;
	    throw error;
	  }
	};

	var ReactErrorUtils_1 = ReactErrorUtils;

	{
	  var warning$2 = require$$0;
	}

	/**
	 * Injected dependencies:
	 */

	/**
	 * - `ComponentTree`: [required] Module that can convert between React instances
	 *   and actual node references.
	 */
	var ComponentTree;
	var injection = {
	  injectComponentTree: function (Injected) {
	    ComponentTree = Injected;
	    {
	      warning$2(Injected && Injected.getNodeFromInstance && Injected.getInstanceFromNode, 'EventPluginUtils.injection.injectComponentTree(...): Injected ' + 'module is missing getNodeFromInstance or getInstanceFromNode.');
	    }
	  }
	};

	function isEndish(topLevelType) {
	  return topLevelType === 'topMouseUp' || topLevelType === 'topTouchEnd' || topLevelType === 'topTouchCancel';
	}

	function isMoveish(topLevelType) {
	  return topLevelType === 'topMouseMove' || topLevelType === 'topTouchMove';
	}
	function isStartish(topLevelType) {
	  return topLevelType === 'topMouseDown' || topLevelType === 'topTouchStart';
	}

	var validateEventDispatches;
	{
	  validateEventDispatches = function (event) {
	    var dispatchListeners = event._dispatchListeners;
	    var dispatchInstances = event._dispatchInstances;

	    var listenersIsArr = Array.isArray(dispatchListeners);
	    var listenersLen = listenersIsArr ? dispatchListeners.length : dispatchListeners ? 1 : 0;

	    var instancesIsArr = Array.isArray(dispatchInstances);
	    var instancesLen = instancesIsArr ? dispatchInstances.length : dispatchInstances ? 1 : 0;

	    warning$2(instancesIsArr === listenersIsArr && instancesLen === listenersLen, 'EventPluginUtils: Invalid `event`.');
	  };
	}

	/**
	 * Dispatch the event to the listener.
	 * @param {SyntheticEvent} event SyntheticEvent to handle
	 * @param {boolean} simulated If the event is simulated (changes exn behavior)
	 * @param {function} listener Application-level callback
	 * @param {*} inst Internal component instance
	 */
	function executeDispatch(event, simulated, listener, inst) {
	  var type = event.type || 'unknown-event';
	  event.currentTarget = EventPluginUtils.getNodeFromInstance(inst);
	  ReactErrorUtils_1.invokeGuardedCallbackAndCatchFirstError(type, listener, undefined, event);
	  event.currentTarget = null;
	}

	/**
	 * Standard/simple iteration through an event's collected dispatches.
	 */
	function executeDispatchesInOrder(event, simulated) {
	  var dispatchListeners = event._dispatchListeners;
	  var dispatchInstances = event._dispatchInstances;
	  {
	    validateEventDispatches(event);
	  }
	  if (Array.isArray(dispatchListeners)) {
	    for (var i = 0; i < dispatchListeners.length; i++) {
	      if (event.isPropagationStopped()) {
	        break;
	      }
	      // Listeners and Instances are two parallel arrays that are always in sync.
	      executeDispatch(event, simulated, dispatchListeners[i], dispatchInstances[i]);
	    }
	  } else if (dispatchListeners) {
	    executeDispatch(event, simulated, dispatchListeners, dispatchInstances);
	  }
	  event._dispatchListeners = null;
	  event._dispatchInstances = null;
	}

	/**
	 * Standard/simple iteration through an event's collected dispatches, but stops
	 * at the first dispatch execution returning true, and returns that id.
	 *
	 * @return {?string} id of the first dispatch execution who's listener returns
	 * true, or null if no listener returned true.
	 */
	function executeDispatchesInOrderStopAtTrueImpl(event) {
	  var dispatchListeners = event._dispatchListeners;
	  var dispatchInstances = event._dispatchInstances;
	  {
	    validateEventDispatches(event);
	  }
	  if (Array.isArray(dispatchListeners)) {
	    for (var i = 0; i < dispatchListeners.length; i++) {
	      if (event.isPropagationStopped()) {
	        break;
	      }
	      // Listeners and Instances are two parallel arrays that are always in sync.
	      if (dispatchListeners[i](event, dispatchInstances[i])) {
	        return dispatchInstances[i];
	      }
	    }
	  } else if (dispatchListeners) {
	    if (dispatchListeners(event, dispatchInstances)) {
	      return dispatchInstances;
	    }
	  }
	  return null;
	}

	/**
	 * @see executeDispatchesInOrderStopAtTrueImpl
	 */
	function executeDispatchesInOrderStopAtTrue(event) {
	  var ret = executeDispatchesInOrderStopAtTrueImpl(event);
	  event._dispatchInstances = null;
	  event._dispatchListeners = null;
	  return ret;
	}

	/**
	 * Execution of a "direct" dispatch - there must be at most one dispatch
	 * accumulated on the event or it is considered an error. It doesn't really make
	 * sense for an event with multiple dispatches (bubbled) to keep track of the
	 * return values at each dispatch execution, but it does tend to make sense when
	 * dealing with "direct" dispatches.
	 *
	 * @return {*} The return value of executing the single dispatch.
	 */
	function executeDirectDispatch(event) {
	  {
	    validateEventDispatches(event);
	  }
	  var dispatchListener = event._dispatchListeners;
	  var dispatchInstance = event._dispatchInstances;
	  !!Array.isArray(dispatchListener) ? invariant(false, 'executeDirectDispatch(...): Invalid `event`.') : void 0;
	  event.currentTarget = dispatchListener ? EventPluginUtils.getNodeFromInstance(dispatchInstance) : null;
	  var res = dispatchListener ? dispatchListener(event) : null;
	  event.currentTarget = null;
	  event._dispatchListeners = null;
	  event._dispatchInstances = null;
	  return res;
	}

	/**
	 * @param {SyntheticEvent} event
	 * @return {boolean} True iff number of dispatches accumulated is greater than 0.
	 */
	function hasDispatches(event) {
	  return !!event._dispatchListeners;
	}

	/**
	 * General utilities that are useful in creating custom Event Plugins.
	 */
	var EventPluginUtils = {
	  isEndish: isEndish,
	  isMoveish: isMoveish,
	  isStartish: isStartish,

	  executeDirectDispatch: executeDirectDispatch,
	  executeDispatchesInOrder: executeDispatchesInOrder,
	  executeDispatchesInOrderStopAtTrue: executeDispatchesInOrderStopAtTrue,
	  hasDispatches: hasDispatches,

	  getFiberCurrentPropsFromNode: function (node) {
	    return ComponentTree.getFiberCurrentPropsFromNode(node);
	  },
	  getInstanceFromNode: function (node) {
	    return ComponentTree.getInstanceFromNode(node);
	  },
	  getNodeFromInstance: function (node) {
	    return ComponentTree.getNodeFromInstance(node);
	  },

	  injection: injection
	};

	var EventPluginUtils_1 = EventPluginUtils;

	// Use to restore controlled state after a change event has fired.

	var fiberHostComponent = null;

	var ReactControlledComponentInjection = {
	  injectFiberControlledHostComponent: function (hostComponentImpl) {
	    // The fiber implementation doesn't use dynamic dispatch so we need to
	    // inject the implementation.
	    fiberHostComponent = hostComponentImpl;
	  }
	};

	var restoreTarget = null;
	var restoreQueue = null;

	function restoreStateOfTarget(target) {
	  // We perform this translation at the end of the event loop so that we
	  // always receive the correct fiber here
	  var internalInstance = EventPluginUtils_1.getInstanceFromNode(target);
	  if (!internalInstance) {
	    // Unmounted
	    return;
	  }
	  if (typeof internalInstance.tag === 'number') {
	    !(fiberHostComponent && typeof fiberHostComponent.restoreControlledState === 'function') ? invariant(false, 'Fiber needs to be injected to handle a fiber target for controlled events. This error is likely caused by a bug in React. Please file an issue.') : void 0;
	    var props = EventPluginUtils_1.getFiberCurrentPropsFromNode(internalInstance.stateNode);
	    fiberHostComponent.restoreControlledState(internalInstance.stateNode, internalInstance.type, props);
	    return;
	  }
	  !(typeof internalInstance.restoreControlledState === 'function') ? invariant(false, 'The internal instance must be a React host component. This error is likely caused by a bug in React. Please file an issue.') : void 0;
	  // If it is not a Fiber, we can just use dynamic dispatch.
	  internalInstance.restoreControlledState();
	}

	var ReactControlledComponent = {
	  injection: ReactControlledComponentInjection,

	  enqueueStateRestore: function (target) {
	    if (restoreTarget) {
	      if (restoreQueue) {
	        restoreQueue.push(target);
	      } else {
	        restoreQueue = [target];
	      }
	    } else {
	      restoreTarget = target;
	    }
	  },
	  restoreStateIfNeeded: function () {
	    if (!restoreTarget) {
	      return;
	    }
	    var target = restoreTarget;
	    var queuedTargets = restoreQueue;
	    restoreTarget = null;
	    restoreQueue = null;

	    restoreStateOfTarget(target);
	    if (queuedTargets) {
	      for (var i = 0; i < queuedTargets.length; i++) {
	        restoreStateOfTarget(queuedTargets[i]);
	      }
	    }
	  }
	};

	var ReactControlledComponent_1 = ReactControlledComponent;

	// Used as a way to call batchedUpdates when we don't know if we're in a Fiber
	// or Stack context. Such as when we're dispatching events or if third party
	// libraries need to call batchedUpdates. Eventually, this API will go away when
	// everything is batched by default. We'll then have a similar API to opt-out of
	// scheduled work and instead do synchronous work.

	// Defaults
	var stackBatchedUpdates = function (fn, a, b, c, d, e) {
	  return fn(a, b, c, d, e);
	};
	var fiberBatchedUpdates = function (fn, bookkeeping) {
	  return fn(bookkeeping);
	};

	function performFiberBatchedUpdates(fn, bookkeeping) {
	  // If we have Fiber loaded, we need to wrap this in a batching call so that
	  // Fiber can apply its default priority for this call.
	  return fiberBatchedUpdates(fn, bookkeeping);
	}
	function batchedUpdates(fn, bookkeeping) {
	  // We first perform work with the stack batching strategy, by passing our
	  // indirection to it.
	  return stackBatchedUpdates(performFiberBatchedUpdates, fn, bookkeeping);
	}

	var isNestingBatched = false;
	function batchedUpdatesWithControlledComponents(fn, bookkeeping) {
	  if (isNestingBatched) {
	    // If we are currently inside another batch, we need to wait until it
	    // fully completes before restoring state. Therefore, we add the target to
	    // a queue of work.
	    return batchedUpdates(fn, bookkeeping);
	  }
	  isNestingBatched = true;
	  try {
	    return batchedUpdates(fn, bookkeeping);
	  } finally {
	    // Here we wait until all updates have propagated, which is important
	    // when using controlled components within layers:
	    // https://github.com/facebook/react/issues/1698
	    // Then we restore state of any controlled component.
	    isNestingBatched = false;
	    ReactControlledComponent_1.restoreStateIfNeeded();
	  }
	}

	var ReactGenericBatchingInjection = {
	  injectStackBatchedUpdates: function (_batchedUpdates) {
	    stackBatchedUpdates = _batchedUpdates;
	  },
	  injectFiberBatchedUpdates: function (_batchedUpdates) {
	    fiberBatchedUpdates = _batchedUpdates;
	  }
	};

	var ReactGenericBatching = {
	  batchedUpdates: batchedUpdatesWithControlledComponents,
	  injection: ReactGenericBatchingInjection
	};

	var ReactGenericBatching_1 = ReactGenericBatching;

	var TEXT_NODE$1 = HTMLNodeType_1.TEXT_NODE;

	/**
	 * Gets the target node from a native browser event by accounting for
	 * inconsistencies in browser DOM APIs.
	 *
	 * @param {object} nativeEvent Native browser event.
	 * @return {DOMEventTarget} Target node.
	 */


	function getEventTarget(nativeEvent) {
	  var target = nativeEvent.target || nativeEvent.srcElement || window;

	  // Normalize SVG <use> element events #4963
	  if (target.correspondingUseElement) {
	    target = target.correspondingUseElement;
	  }

	  // Safari may fire events on text nodes (Node.TEXT_NODE is 3).
	  // @see http://www.quirksmode.org/js/events_properties.html
	  return target.nodeType === TEXT_NODE$1 ? target.parentNode : target;
	}

	var getEventTarget_1 = getEventTarget;

	var HostRoot = ReactTypeOfWork.HostRoot;


	var CALLBACK_BOOKKEEPING_POOL_SIZE = 10;
	var callbackBookkeepingPool = [];

	/**
	 * Find the deepest React component completely containing the root of the
	 * passed-in instance (for use when entire React trees are nested within each
	 * other). If React trees are not nested, returns null.
	 */
	function findRootContainerNode(inst) {
	  // TODO: It may be a good idea to cache this to prevent unnecessary DOM
	  // traversal, but caching is difficult to do correctly without using a
	  // mutation observer to listen for all DOM changes.
	  if (typeof inst.tag === 'number') {
	    while (inst['return']) {
	      inst = inst['return'];
	    }
	    if (inst.tag !== HostRoot) {
	      // This can happen if we're in a detached tree.
	      return null;
	    }
	    return inst.stateNode.containerInfo;
	  } else {
	    while (inst._hostParent) {
	      inst = inst._hostParent;
	    }
	    var rootNode = ReactDOMComponentTree_1.getNodeFromInstance(inst);
	    return rootNode.parentNode;
	  }
	}

	// Used to store ancestor hierarchy in top level callback
	function getTopLevelCallbackBookKeeping(topLevelType, nativeEvent, targetInst) {
	  if (callbackBookkeepingPool.length) {
	    var instance = callbackBookkeepingPool.pop();
	    instance.topLevelType = topLevelType;
	    instance.nativeEvent = nativeEvent;
	    instance.targetInst = targetInst;
	    return instance;
	  }
	  return {
	    topLevelType: topLevelType,
	    nativeEvent: nativeEvent,
	    targetInst: targetInst,
	    ancestors: []
	  };
	}

	function releaseTopLevelCallbackBookKeeping(instance) {
	  instance.topLevelType = null;
	  instance.nativeEvent = null;
	  instance.targetInst = null;
	  instance.ancestors.length = 0;
	  if (callbackBookkeepingPool.length < CALLBACK_BOOKKEEPING_POOL_SIZE) {
	    callbackBookkeepingPool.push(instance);
	  }
	}

	function handleTopLevelImpl(bookKeeping) {
	  var targetInst = bookKeeping.targetInst;

	  // Loop through the hierarchy, in case there's any nested components.
	  // It's important that we build the array of ancestors before calling any
	  // event handlers, because event handlers can modify the DOM, leading to
	  // inconsistencies with ReactMount's node cache. See #1105.
	  var ancestor = targetInst;
	  do {
	    if (!ancestor) {
	      bookKeeping.ancestors.push(ancestor);
	      break;
	    }
	    var root = findRootContainerNode(ancestor);
	    if (!root) {
	      break;
	    }
	    bookKeeping.ancestors.push(ancestor);
	    ancestor = ReactDOMComponentTree_1.getClosestInstanceFromNode(root);
	  } while (ancestor);

	  for (var i = 0; i < bookKeeping.ancestors.length; i++) {
	    targetInst = bookKeeping.ancestors[i];
	    ReactDOMEventListener._handleTopLevel(bookKeeping.topLevelType, targetInst, bookKeeping.nativeEvent, getEventTarget_1(bookKeeping.nativeEvent));
	  }
	}

	var ReactDOMEventListener = {
	  _enabled: true,
	  _handleTopLevel: null,

	  setHandleTopLevel: function (handleTopLevel) {
	    ReactDOMEventListener._handleTopLevel = handleTopLevel;
	  },

	  setEnabled: function (enabled) {
	    ReactDOMEventListener._enabled = !!enabled;
	  },

	  isEnabled: function () {
	    return ReactDOMEventListener._enabled;
	  },

	  /**
	   * Traps top-level events by using event bubbling.
	   *
	   * @param {string} topLevelType Record from `BrowserEventConstants`.
	   * @param {string} handlerBaseName Event name (e.g. "click").
	   * @param {object} element Element on which to attach listener.
	   * @return {?object} An object with a remove function which will forcefully
	   *                  remove the listener.
	   * @internal
	   */
	  trapBubbledEvent: function (topLevelType, handlerBaseName, element) {
	    if (!element) {
	      return null;
	    }
	    return EventListener.listen(element, handlerBaseName, ReactDOMEventListener.dispatchEvent.bind(null, topLevelType));
	  },

	  /**
	   * Traps a top-level event by using event capturing.
	   *
	   * @param {string} topLevelType Record from `BrowserEventConstants`.
	   * @param {string} handlerBaseName Event name (e.g. "click").
	   * @param {object} element Element on which to attach listener.
	   * @return {?object} An object with a remove function which will forcefully
	   *                  remove the listener.
	   * @internal
	   */
	  trapCapturedEvent: function (topLevelType, handlerBaseName, element) {
	    if (!element) {
	      return null;
	    }
	    return EventListener.capture(element, handlerBaseName, ReactDOMEventListener.dispatchEvent.bind(null, topLevelType));
	  },

	  dispatchEvent: function (topLevelType, nativeEvent) {
	    if (!ReactDOMEventListener._enabled) {
	      return;
	    }

	    var nativeEventTarget = getEventTarget_1(nativeEvent);
	    var targetInst = ReactDOMComponentTree_1.getClosestInstanceFromNode(nativeEventTarget);
	    if (targetInst !== null && typeof targetInst.tag === 'number' && !ReactFiberTreeReflection.isFiberMounted(targetInst)) {
	      // If we get an event (ex: img onload) before committing that
	      // component's mount, ignore it for now (that is, treat it as if it was an
	      // event on a non-React tree). We might also consider queueing events and
	      // dispatching them after the mount.
	      targetInst = null;
	    }

	    var bookKeeping = getTopLevelCallbackBookKeeping(topLevelType, nativeEvent, targetInst);

	    try {
	      // Event queue being processed in the same cycle allows
	      // `preventDefault`.
	      ReactGenericBatching_1.batchedUpdates(handleTopLevelImpl, bookKeeping);
	    } finally {
	      releaseTopLevelCallbackBookKeeping(bookKeeping);
	    }
	  }
	};

	var ReactDOMEventListener_1 = ReactDOMEventListener;

	/**
	 * Accumulates items that must not be null or undefined into the first one. This
	 * is used to conserve memory by avoiding array allocations, and thus sacrifices
	 * API cleanness. Since `current` can be null before being passed in and not
	 * null after this function, make sure to assign it back to `current`:
	 *
	 * `a = accumulateInto(a, b);`
	 *
	 * This API should be sparingly used. Try `accumulate` for something cleaner.
	 *
	 * @return {*|array<*>} An accumulation of items.
	 */

	function accumulateInto(current, next) {
	  !(next != null) ? invariant(false, 'accumulateInto(...): Accumulated items must not be null or undefined.') : void 0;

	  if (current == null) {
	    return next;
	  }

	  // Both are not empty. Warning: Never call x.concat(y) when you are not
	  // certain that x is an Array (x could be a string with concat method).
	  if (Array.isArray(current)) {
	    if (Array.isArray(next)) {
	      current.push.apply(current, next);
	      return current;
	    }
	    current.push(next);
	    return current;
	  }

	  if (Array.isArray(next)) {
	    // A bit too dangerous to mutate `next`.
	    return [current].concat(next);
	  }

	  return [current, next];
	}

	var accumulateInto_1 = accumulateInto;

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * @providesModule forEachAccumulated
	 * 
	 */

	/**
	 * @param {array} arr an "accumulation" of items which is either an Array or
	 * a single item. Useful when paired with the `accumulate` module. This is a
	 * simple utility that allows us to reason about a collection of items, but
	 * handling the case when there is exactly one item (and we do not need to
	 * allocate an array).
	 * @param {function} cb Callback invoked with each element or a collection.
	 * @param {?} [scope] Scope used as `this` in a callback.
	 */

	function forEachAccumulated(arr, cb, scope) {
	  if (Array.isArray(arr)) {
	    arr.forEach(cb, scope);
	  } else if (arr) {
	    cb.call(scope, arr);
	  }
	}

	var forEachAccumulated_1 = forEachAccumulated;

	/**
	 * Internal queue of events that have accumulated their dispatches and are
	 * waiting to have their dispatches executed.
	 */
	var eventQueue = null;

	/**
	 * Dispatches an event and releases it back into the pool, unless persistent.
	 *
	 * @param {?object} event Synthetic event to be dispatched.
	 * @param {boolean} simulated If the event is simulated (changes exn behavior)
	 * @private
	 */
	var executeDispatchesAndRelease = function (event, simulated) {
	  if (event) {
	    EventPluginUtils_1.executeDispatchesInOrder(event, simulated);

	    if (!event.isPersistent()) {
	      event.constructor.release(event);
	    }
	  }
	};
	var executeDispatchesAndReleaseSimulated = function (e) {
	  return executeDispatchesAndRelease(e, true);
	};
	var executeDispatchesAndReleaseTopLevel = function (e) {
	  return executeDispatchesAndRelease(e, false);
	};

	function isInteractive(tag) {
	  return tag === 'button' || tag === 'input' || tag === 'select' || tag === 'textarea';
	}

	function shouldPreventMouseEvent(name, type, props) {
	  switch (name) {
	    case 'onClick':
	    case 'onClickCapture':
	    case 'onDoubleClick':
	    case 'onDoubleClickCapture':
	    case 'onMouseDown':
	    case 'onMouseDownCapture':
	    case 'onMouseMove':
	    case 'onMouseMoveCapture':
	    case 'onMouseUp':
	    case 'onMouseUpCapture':
	      return !!(props.disabled && isInteractive(type));
	    default:
	      return false;
	  }
	}

	/**
	 * This is a unified interface for event plugins to be installed and configured.
	 *
	 * Event plugins can implement the following properties:
	 *
	 *   `extractEvents` {function(string, DOMEventTarget, string, object): *}
	 *     Required. When a top-level event is fired, this method is expected to
	 *     extract synthetic events that will in turn be queued and dispatched.
	 *
	 *   `eventTypes` {object}
	 *     Optional, plugins that fire events must publish a mapping of registration
	 *     names that are used to register listeners. Values of this mapping must
	 *     be objects that contain `registrationName` or `phasedRegistrationNames`.
	 *
	 *   `executeDispatch` {function(object, function, string)}
	 *     Optional, allows plugins to override how an event gets dispatched. By
	 *     default, the listener is simply invoked.
	 *
	 * Each plugin that is injected into `EventsPluginHub` is immediately operable.
	 *
	 * @public
	 */
	var EventPluginHub = {
	  /**
	   * Methods for injecting dependencies.
	   */
	  injection: {
	    /**
	     * @param {array} InjectedEventPluginOrder
	     * @public
	     */
	    injectEventPluginOrder: EventPluginRegistry_1.injectEventPluginOrder,

	    /**
	     * @param {object} injectedNamesToPlugins Map from names to plugin modules.
	     */
	    injectEventPluginsByName: EventPluginRegistry_1.injectEventPluginsByName
	  },

	  /**
	   * @param {object} inst The instance, which is the source of events.
	   * @param {string} registrationName Name of listener (e.g. `onClick`).
	   * @return {?function} The stored callback.
	   */
	  getListener: function (inst, registrationName) {
	    var listener;

	    // TODO: shouldPreventMouseEvent is DOM-specific and definitely should not
	    // live here; needs to be moved to a better place soon
	    if (typeof inst.tag === 'number') {
	      var stateNode = inst.stateNode;
	      if (!stateNode) {
	        // Work in progress (ex: onload events in incremental mode).
	        return null;
	      }
	      var props = EventPluginUtils_1.getFiberCurrentPropsFromNode(stateNode);
	      if (!props) {
	        // Work in progress.
	        return null;
	      }
	      listener = props[registrationName];
	      if (shouldPreventMouseEvent(registrationName, inst.type, props)) {
	        return null;
	      }
	    } else {
	      var currentElement = inst._currentElement;
	      if (typeof currentElement === 'string' || typeof currentElement === 'number') {
	        // Text node, let it bubble through.
	        return null;
	      }
	      if (!inst._rootNodeID) {
	        // If the instance is already unmounted, we have no listeners.
	        return null;
	      }
	      var _props = currentElement.props;
	      listener = _props[registrationName];
	      if (shouldPreventMouseEvent(registrationName, currentElement.type, _props)) {
	        return null;
	      }
	    }

	    !(!listener || typeof listener === 'function') ? invariant(false, 'Expected `%s` listener to be a function, instead got a value of `%s` type.', registrationName, typeof listener) : void 0;
	    return listener;
	  },

	  /**
	   * Allows registered plugins an opportunity to extract events from top-level
	   * native browser events.
	   *
	   * @return {*} An accumulation of synthetic events.
	   * @internal
	   */
	  extractEvents: function (topLevelType, targetInst, nativeEvent, nativeEventTarget) {
	    var events;
	    var plugins = EventPluginRegistry_1.plugins;
	    for (var i = 0; i < plugins.length; i++) {
	      // Not every plugin in the ordering may be loaded at runtime.
	      var possiblePlugin = plugins[i];
	      if (possiblePlugin) {
	        var extractedEvents = possiblePlugin.extractEvents(topLevelType, targetInst, nativeEvent, nativeEventTarget);
	        if (extractedEvents) {
	          events = accumulateInto_1(events, extractedEvents);
	        }
	      }
	    }
	    return events;
	  },

	  /**
	   * Enqueues a synthetic event that should be dispatched when
	   * `processEventQueue` is invoked.
	   *
	   * @param {*} events An accumulation of synthetic events.
	   * @internal
	   */
	  enqueueEvents: function (events) {
	    if (events) {
	      eventQueue = accumulateInto_1(eventQueue, events);
	    }
	  },

	  /**
	   * Dispatches all synthetic events on the event queue.
	   *
	   * @internal
	   */
	  processEventQueue: function (simulated) {
	    // Set `eventQueue` to null before processing it so that we can tell if more
	    // events get enqueued while processing.
	    var processingEventQueue = eventQueue;
	    eventQueue = null;
	    if (simulated) {
	      forEachAccumulated_1(processingEventQueue, executeDispatchesAndReleaseSimulated);
	    } else {
	      forEachAccumulated_1(processingEventQueue, executeDispatchesAndReleaseTopLevel);
	    }
	    !!eventQueue ? invariant(false, 'processEventQueue(): Additional events were enqueued while processing an event queue. Support for this has not yet been implemented.') : void 0;
	    // This would be a good time to rethrow if any of the event handlers threw.
	    ReactErrorUtils_1.rethrowCaughtError();
	  }
	};

	var EventPluginHub_1 = EventPluginHub;

	function runEventQueueInBatch(events) {
	  EventPluginHub_1.enqueueEvents(events);
	  EventPluginHub_1.processEventQueue(false);
	}

	var ReactEventEmitterMixin = {
	  /**
	   * Streams a fired top-level event to `EventPluginHub` where plugins have the
	   * opportunity to create `ReactEvent`s to be dispatched.
	   */
	  handleTopLevel: function (topLevelType, targetInst, nativeEvent, nativeEventTarget) {
	    var events = EventPluginHub_1.extractEvents(topLevelType, targetInst, nativeEvent, nativeEventTarget);
	    runEventQueueInBatch(events);
	  }
	};

	var ReactEventEmitterMixin_1 = ReactEventEmitterMixin;

	var useHasFeature;
	if (ExecutionEnvironment.canUseDOM) {
	  useHasFeature = document.implementation && document.implementation.hasFeature &&
	  // always returns true in newer browsers as per the standard.
	  // @see http://dom.spec.whatwg.org/#dom-domimplementation-hasfeature
	  document.implementation.hasFeature('', '') !== true;
	}

	/**
	 * Checks if an event is supported in the current execution environment.
	 *
	 * NOTE: This will not work correctly for non-generic events such as `change`,
	 * `reset`, `load`, `error`, and `select`.
	 *
	 * Borrows from Modernizr.
	 *
	 * @param {string} eventNameSuffix Event name, e.g. "click".
	 * @param {?boolean} capture Check if the capture phase is supported.
	 * @return {boolean} True if the event is supported.
	 * @internal
	 * @license Modernizr 3.0.0pre (Custom Build) | MIT
	 */
	function isEventSupported(eventNameSuffix, capture) {
	  if (!ExecutionEnvironment.canUseDOM || capture && !('addEventListener' in document)) {
	    return false;
	  }

	  var eventName = 'on' + eventNameSuffix;
	  var isSupported = eventName in document;

	  if (!isSupported) {
	    var element = document.createElement('div');
	    element.setAttribute(eventName, 'return;');
	    isSupported = typeof element[eventName] === 'function';
	  }

	  if (!isSupported && useHasFeature && eventNameSuffix === 'wheel') {
	    // This is the only way to test support for the `wheel` event in IE9+.
	    isSupported = document.implementation.hasFeature('Events.wheel', '3.0');
	  }

	  return isSupported;
	}

	var isEventSupported_1 = isEventSupported;

	/**
	 * Generate a mapping of standard vendor prefixes using the defined style property and event name.
	 *
	 * @param {string} styleProp
	 * @param {string} eventName
	 * @returns {object}
	 */
	function makePrefixMap(styleProp, eventName) {
	  var prefixes = {};

	  prefixes[styleProp.toLowerCase()] = eventName.toLowerCase();
	  prefixes['Webkit' + styleProp] = 'webkit' + eventName;
	  prefixes['Moz' + styleProp] = 'moz' + eventName;
	  prefixes['ms' + styleProp] = 'MS' + eventName;
	  prefixes['O' + styleProp] = 'o' + eventName.toLowerCase();

	  return prefixes;
	}

	/**
	 * A list of event names to a configurable list of vendor prefixes.
	 */
	var vendorPrefixes = {
	  animationend: makePrefixMap('Animation', 'AnimationEnd'),
	  animationiteration: makePrefixMap('Animation', 'AnimationIteration'),
	  animationstart: makePrefixMap('Animation', 'AnimationStart'),
	  transitionend: makePrefixMap('Transition', 'TransitionEnd')
	};

	/**
	 * Event names that have already been detected and prefixed (if applicable).
	 */
	var prefixedEventNames = {};

	/**
	 * Element to check for prefixes on.
	 */
	var style = {};

	/**
	 * Bootstrap if a DOM exists.
	 */
	if (ExecutionEnvironment.canUseDOM) {
	  style = document.createElement('div').style;

	  // On some platforms, in particular some releases of Android 4.x,
	  // the un-prefixed "animation" and "transition" properties are defined on the
	  // style object but the events that fire will still be prefixed, so we need
	  // to check if the un-prefixed events are usable, and if not remove them from the map.
	  if (!('AnimationEvent' in window)) {
	    delete vendorPrefixes.animationend.animation;
	    delete vendorPrefixes.animationiteration.animation;
	    delete vendorPrefixes.animationstart.animation;
	  }

	  // Same as above
	  if (!('TransitionEvent' in window)) {
	    delete vendorPrefixes.transitionend.transition;
	  }
	}

	/**
	 * Attempts to determine the correct vendor prefixed event name.
	 *
	 * @param {string} eventName
	 * @returns {string}
	 */
	function getVendorPrefixedEventName(eventName) {
	  if (prefixedEventNames[eventName]) {
	    return prefixedEventNames[eventName];
	  } else if (!vendorPrefixes[eventName]) {
	    return eventName;
	  }

	  var prefixMap = vendorPrefixes[eventName];

	  for (var styleProp in prefixMap) {
	    if (prefixMap.hasOwnProperty(styleProp) && styleProp in style) {
	      return prefixedEventNames[eventName] = prefixMap[styleProp];
	    }
	  }

	  return '';
	}

	var getVendorPrefixedEventName_1 = getVendorPrefixedEventName;

	/**
	 * Types of raw signals from the browser caught at the top level.
	 *
	 * For events like 'submit' which don't consistently bubble (which we
	 * trap at a lower node than `document`), binding at `document` would
	 * cause duplicate events so we don't include them here.
	 */
	var topLevelTypes$1 = {
	  topAbort: 'abort',
	  topAnimationEnd: getVendorPrefixedEventName_1('animationend') || 'animationend',
	  topAnimationIteration: getVendorPrefixedEventName_1('animationiteration') || 'animationiteration',
	  topAnimationStart: getVendorPrefixedEventName_1('animationstart') || 'animationstart',
	  topBlur: 'blur',
	  topCancel: 'cancel',
	  topCanPlay: 'canplay',
	  topCanPlayThrough: 'canplaythrough',
	  topChange: 'change',
	  topClick: 'click',
	  topClose: 'close',
	  topCompositionEnd: 'compositionend',
	  topCompositionStart: 'compositionstart',
	  topCompositionUpdate: 'compositionupdate',
	  topContextMenu: 'contextmenu',
	  topCopy: 'copy',
	  topCut: 'cut',
	  topDoubleClick: 'dblclick',
	  topDrag: 'drag',
	  topDragEnd: 'dragend',
	  topDragEnter: 'dragenter',
	  topDragExit: 'dragexit',
	  topDragLeave: 'dragleave',
	  topDragOver: 'dragover',
	  topDragStart: 'dragstart',
	  topDrop: 'drop',
	  topDurationChange: 'durationchange',
	  topEmptied: 'emptied',
	  topEncrypted: 'encrypted',
	  topEnded: 'ended',
	  topError: 'error',
	  topFocus: 'focus',
	  topInput: 'input',
	  topKeyDown: 'keydown',
	  topKeyPress: 'keypress',
	  topKeyUp: 'keyup',
	  topLoadedData: 'loadeddata',
	  topLoad: 'load',
	  topLoadedMetadata: 'loadedmetadata',
	  topLoadStart: 'loadstart',
	  topMouseDown: 'mousedown',
	  topMouseMove: 'mousemove',
	  topMouseOut: 'mouseout',
	  topMouseOver: 'mouseover',
	  topMouseUp: 'mouseup',
	  topPaste: 'paste',
	  topPause: 'pause',
	  topPlay: 'play',
	  topPlaying: 'playing',
	  topProgress: 'progress',
	  topRateChange: 'ratechange',
	  topScroll: 'scroll',
	  topSeeked: 'seeked',
	  topSeeking: 'seeking',
	  topSelectionChange: 'selectionchange',
	  topStalled: 'stalled',
	  topSuspend: 'suspend',
	  topTextInput: 'textInput',
	  topTimeUpdate: 'timeupdate',
	  topToggle: 'toggle',
	  topTouchCancel: 'touchcancel',
	  topTouchEnd: 'touchend',
	  topTouchMove: 'touchmove',
	  topTouchStart: 'touchstart',
	  topTransitionEnd: getVendorPrefixedEventName_1('transitionend') || 'transitionend',
	  topVolumeChange: 'volumechange',
	  topWaiting: 'waiting',
	  topWheel: 'wheel'
	};

	var BrowserEventConstants = {
	  topLevelTypes: topLevelTypes$1
	};

	var BrowserEventConstants_1 = BrowserEventConstants;

	var topLevelTypes = BrowserEventConstants_1.topLevelTypes;

	/**
	 * Summary of `ReactBrowserEventEmitter` event handling:
	 *
	 *  - Top-level delegation is used to trap most native browser events. This
	 *    may only occur in the main thread and is the responsibility of
	 *    ReactDOMEventListener, which is injected and can therefore support
	 *    pluggable event sources. This is the only work that occurs in the main
	 *    thread.
	 *
	 *  - We normalize and de-duplicate events to account for browser quirks. This
	 *    may be done in the worker thread.
	 *
	 *  - Forward these native events (with the associated top-level type used to
	 *    trap it) to `EventPluginHub`, which in turn will ask plugins if they want
	 *    to extract any synthetic events.
	 *
	 *  - The `EventPluginHub` will then process each event by annotating them with
	 *    "dispatches", a sequence of listeners and IDs that care about that event.
	 *
	 *  - The `EventPluginHub` then dispatches the events.
	 *
	 * Overview of React and the event system:
	 *
	 * +------------+    .
	 * |    DOM     |    .
	 * +------------+    .
	 *       |           .
	 *       v           .
	 * +------------+    .
	 * | ReactEvent |    .
	 * |  Listener  |    .
	 * +------------+    .                         +-----------+
	 *       |           .               +--------+|SimpleEvent|
	 *       |           .               |         |Plugin     |
	 * +-----|------+    .               v         +-----------+
	 * |     |      |    .    +--------------+                    +------------+
	 * |     +-----------.--->|EventPluginHub|                    |    Event   |
	 * |            |    .    |              |     +-----------+  | Propagators|
	 * | ReactEvent |    .    |              |     |TapEvent   |  |------------|
	 * |  Emitter   |    .    |              |<---+|Plugin     |  |other plugin|
	 * |            |    .    |              |     +-----------+  |  utilities |
	 * |     +-----------.--->|              |                    +------------+
	 * |     |      |    .    +--------------+
	 * +-----|------+    .                ^        +-----------+
	 *       |           .                |        |Enter/Leave|
	 *       +           .                +-------+|Plugin     |
	 * +-------------+   .                         +-----------+
	 * | application |   .
	 * |-------------|   .
	 * |             |   .
	 * |             |   .
	 * +-------------+   .
	 *                   .
	 *    React Core     .  General Purpose Event Plugin System
	 */

	var alreadyListeningTo = {};
	var reactTopListenersCounter = 0;

	/**
	 * To ensure no conflicts with other potential React instances on the page
	 */
	var topListenersIDKey = '_reactListenersID' + ('' + Math.random()).slice(2);

	function getListeningForDocument(mountAt) {
	  // In IE8, `mountAt` is a host object and doesn't have `hasOwnProperty`
	  // directly.
	  if (!Object.prototype.hasOwnProperty.call(mountAt, topListenersIDKey)) {
	    mountAt[topListenersIDKey] = reactTopListenersCounter++;
	    alreadyListeningTo[mountAt[topListenersIDKey]] = {};
	  }
	  return alreadyListeningTo[mountAt[topListenersIDKey]];
	}

	var ReactBrowserEventEmitter = _assign({}, ReactEventEmitterMixin_1, {
	  /**
	   * Sets whether or not any created callbacks should be enabled.
	   *
	   * @param {boolean} enabled True if callbacks should be enabled.
	   */
	  setEnabled: function (enabled) {
	    if (ReactDOMEventListener_1) {
	      ReactDOMEventListener_1.setEnabled(enabled);
	    }
	  },

	  /**
	   * @return {boolean} True if callbacks are enabled.
	   */
	  isEnabled: function () {
	    return !!(ReactDOMEventListener_1 && ReactDOMEventListener_1.isEnabled());
	  },

	  /**
	   * We listen for bubbled touch events on the document object.
	   *
	   * Firefox v8.01 (and possibly others) exhibited strange behavior when
	   * mounting `onmousemove` events at some node that was not the document
	   * element. The symptoms were that if your mouse is not moving over something
	   * contained within that mount point (for example on the background) the
	   * top-level listeners for `onmousemove` won't be called. However, if you
	   * register the `mousemove` on the document object, then it will of course
	   * catch all `mousemove`s. This along with iOS quirks, justifies restricting
	   * top-level listeners to the document object only, at least for these
	   * movement types of events and possibly all events.
	   *
	   * @see http://www.quirksmode.org/blog/archives/2010/09/click_event_del.html
	   *
	   * Also, `keyup`/`keypress`/`keydown` do not bubble to the window on IE, but
	   * they bubble to document.
	   *
	   * @param {string} registrationName Name of listener (e.g. `onClick`).
	   * @param {object} contentDocumentHandle Document which owns the container
	   */
	  listenTo: function (registrationName, contentDocumentHandle) {
	    var mountAt = contentDocumentHandle;
	    var isListening = getListeningForDocument(mountAt);
	    var dependencies = EventPluginRegistry_1.registrationNameDependencies[registrationName];

	    for (var i = 0; i < dependencies.length; i++) {
	      var dependency = dependencies[i];
	      if (!(isListening.hasOwnProperty(dependency) && isListening[dependency])) {
	        if (dependency === 'topWheel') {
	          if (isEventSupported_1('wheel')) {
	            ReactDOMEventListener_1.trapBubbledEvent('topWheel', 'wheel', mountAt);
	          } else if (isEventSupported_1('mousewheel')) {
	            ReactDOMEventListener_1.trapBubbledEvent('topWheel', 'mousewheel', mountAt);
	          } else {
	            // Firefox needs to capture a different mouse scroll event.
	            // @see http://www.quirksmode.org/dom/events/tests/scroll.html
	            ReactDOMEventListener_1.trapBubbledEvent('topWheel', 'DOMMouseScroll', mountAt);
	          }
	        } else if (dependency === 'topScroll') {
	          ReactDOMEventListener_1.trapCapturedEvent('topScroll', 'scroll', mountAt);
	        } else if (dependency === 'topFocus' || dependency === 'topBlur') {
	          ReactDOMEventListener_1.trapCapturedEvent('topFocus', 'focus', mountAt);
	          ReactDOMEventListener_1.trapCapturedEvent('topBlur', 'blur', mountAt);

	          // to make sure blur and focus event listeners are only attached once
	          isListening.topBlur = true;
	          isListening.topFocus = true;
	        } else if (dependency === 'topCancel') {
	          if (isEventSupported_1('cancel', true)) {
	            ReactDOMEventListener_1.trapCapturedEvent('topCancel', 'cancel', mountAt);
	          }
	          isListening.topCancel = true;
	        } else if (dependency === 'topClose') {
	          if (isEventSupported_1('close', true)) {
	            ReactDOMEventListener_1.trapCapturedEvent('topClose', 'close', mountAt);
	          }
	          isListening.topClose = true;
	        } else if (topLevelTypes.hasOwnProperty(dependency)) {
	          ReactDOMEventListener_1.trapBubbledEvent(dependency, topLevelTypes[dependency], mountAt);
	        }

	        isListening[dependency] = true;
	      }
	    }
	  },

	  isListeningToAllDependencies: function (registrationName, mountAt) {
	    var isListening = getListeningForDocument(mountAt);
	    var dependencies = EventPluginRegistry_1.registrationNameDependencies[registrationName];
	    for (var i = 0; i < dependencies.length; i++) {
	      var dependency = dependencies[i];
	      if (!(isListening.hasOwnProperty(dependency) && isListening[dependency])) {
	        return false;
	      }
	    }
	    return true;
	  },

	  trapBubbledEvent: function (topLevelType, handlerBaseName, handle) {
	    return ReactDOMEventListener_1.trapBubbledEvent(topLevelType, handlerBaseName, handle);
	  },

	  trapCapturedEvent: function (topLevelType, handlerBaseName, handle) {
	    return ReactDOMEventListener_1.trapCapturedEvent(topLevelType, handlerBaseName, handle);
	  }
	});

	var ReactBrowserEventEmitter_1 = ReactBrowserEventEmitter;

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * @providesModule ReactDOMFeatureFlags
	 */

	var ReactDOMFeatureFlags = {
	  fiberAsyncScheduling: false,
	  useFiber: true
	};

	var ReactDOMFeatureFlags_1 = ReactDOMFeatureFlags;

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * @providesModule CSSProperty
	 */

	/**
	 * CSS properties which accept numbers but are not in units of "px".
	 */

	var isUnitlessNumber = {
	  animationIterationCount: true,
	  borderImageOutset: true,
	  borderImageSlice: true,
	  borderImageWidth: true,
	  boxFlex: true,
	  boxFlexGroup: true,
	  boxOrdinalGroup: true,
	  columnCount: true,
	  columns: true,
	  flex: true,
	  flexGrow: true,
	  flexPositive: true,
	  flexShrink: true,
	  flexNegative: true,
	  flexOrder: true,
	  gridRow: true,
	  gridRowEnd: true,
	  gridRowSpan: true,
	  gridRowStart: true,
	  gridColumn: true,
	  gridColumnEnd: true,
	  gridColumnSpan: true,
	  gridColumnStart: true,
	  fontWeight: true,
	  lineClamp: true,
	  lineHeight: true,
	  opacity: true,
	  order: true,
	  orphans: true,
	  tabSize: true,
	  widows: true,
	  zIndex: true,
	  zoom: true,

	  // SVG-related properties
	  fillOpacity: true,
	  floodOpacity: true,
	  stopOpacity: true,
	  strokeDasharray: true,
	  strokeDashoffset: true,
	  strokeMiterlimit: true,
	  strokeOpacity: true,
	  strokeWidth: true
	};

	/**
	 * @param {string} prefix vendor-specific prefix, eg: Webkit
	 * @param {string} key style name, eg: transitionDuration
	 * @return {string} style name prefixed with `prefix`, properly camelCased, eg:
	 * WebkitTransitionDuration
	 */
	function prefixKey(prefix, key) {
	  return prefix + key.charAt(0).toUpperCase() + key.substring(1);
	}

	/**
	 * Support style names that may come passed in prefixed by adding permutations
	 * of vendor prefixes.
	 */
	var prefixes = ['Webkit', 'ms', 'Moz', 'O'];

	// Using Object.keys here, or else the vanilla for-in loop makes IE8 go into an
	// infinite loop, because it iterates over the newly added props too.
	Object.keys(isUnitlessNumber).forEach(function (prop) {
	  prefixes.forEach(function (prefix) {
	    isUnitlessNumber[prefixKey(prefix, prop)] = isUnitlessNumber[prop];
	  });
	});

	/**
	 * Most style properties can be unset by doing .style[prop] = '' but IE8
	 * doesn't like doing that with shorthand properties so for the properties that
	 * IE8 breaks on, which are listed here, we instead unset each of the
	 * individual properties. See http://bugs.jquery.com/ticket/12385.
	 * The 4-value 'clock' properties like margin, padding, border-width seem to
	 * behave without any problems. Curiously, list-style works too without any
	 * special prodding.
	 */
	var shorthandPropertyExpansions = {
	  background: {
	    backgroundAttachment: true,
	    backgroundColor: true,
	    backgroundImage: true,
	    backgroundPositionX: true,
	    backgroundPositionY: true,
	    backgroundRepeat: true
	  },
	  backgroundPosition: {
	    backgroundPositionX: true,
	    backgroundPositionY: true
	  },
	  border: {
	    borderWidth: true,
	    borderStyle: true,
	    borderColor: true
	  },
	  borderBottom: {
	    borderBottomWidth: true,
	    borderBottomStyle: true,
	    borderBottomColor: true
	  },
	  borderLeft: {
	    borderLeftWidth: true,
	    borderLeftStyle: true,
	    borderLeftColor: true
	  },
	  borderRight: {
	    borderRightWidth: true,
	    borderRightStyle: true,
	    borderRightColor: true
	  },
	  borderTop: {
	    borderTopWidth: true,
	    borderTopStyle: true,
	    borderTopColor: true
	  },
	  font: {
	    fontStyle: true,
	    fontVariant: true,
	    fontWeight: true,
	    fontSize: true,
	    lineHeight: true,
	    fontFamily: true
	  },
	  outline: {
	    outlineWidth: true,
	    outlineStyle: true,
	    outlineColor: true
	  }
	};

	var CSSProperty = {
	  isUnitlessNumber: isUnitlessNumber,
	  shorthandPropertyExpansions: shorthandPropertyExpansions
	};

	var CSSProperty_1 = CSSProperty;

	var isUnitlessNumber$1 = CSSProperty_1.isUnitlessNumber;

	/**
	 * Convert a value into the proper css writable value. The style name `name`
	 * should be logical (no hyphens), as specified
	 * in `CSSProperty.isUnitlessNumber`.
	 *
	 * @param {string} name CSS property name such as `topMargin`.
	 * @param {*} value CSS property value such as `10px`.
	 * @return {string} Normalized style value with dimensions applied.
	 */
	function dangerousStyleValue(name, value, isCustomProperty) {
	  // Note that we've removed escapeTextForBrowser() calls here since the
	  // whole string will be escaped when the attribute is injected into
	  // the markup. If you provide unsafe user data here they can inject
	  // arbitrary CSS which may be problematic (I couldn't repro this):
	  // https://www.owasp.org/index.php/XSS_Filter_Evasion_Cheat_Sheet
	  // http://www.thespanner.co.uk/2007/11/26/ultimate-xss-css-injection/
	  // This is not an XSS hole but instead a potential CSS injection issue
	  // which has lead to a greater discussion about how we're going to
	  // trust URLs moving forward. See #2115901

	  var isEmpty = value == null || typeof value === 'boolean' || value === '';
	  if (isEmpty) {
	    return '';
	  }

	  if (!isCustomProperty && typeof value === 'number' && value !== 0 && !(isUnitlessNumber$1.hasOwnProperty(name) && isUnitlessNumber$1[name])) {
	    return value + 'px'; // Presumes implicit 'px' suffix for unitless numbers
	  }

	  return ('' + value).trim();
	}

	var dangerousStyleValue_1 = dangerousStyleValue;

	/**
	 * Copyright (c) 2016-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 * @providesModule describeComponentFrame
	 */

	var describeComponentFrame = function (name, source, ownerName) {
	  return '\n    in ' + (name || 'Unknown') + (source ? ' (at ' + source.fileName.replace(/^.*[\\\/]/, '') + ':' + source.lineNumber + ')' : ownerName ? ' (created by ' + ownerName + ')' : '');
	};

	var IndeterminateComponent = ReactTypeOfWork.IndeterminateComponent;
	var FunctionalComponent = ReactTypeOfWork.FunctionalComponent;
	var ClassComponent$1 = ReactTypeOfWork.ClassComponent;
	var HostComponent$2 = ReactTypeOfWork.HostComponent;




	function describeFiber(fiber) {
	  switch (fiber.tag) {
	    case IndeterminateComponent:
	    case FunctionalComponent:
	    case ClassComponent$1:
	    case HostComponent$2:
	      var owner = fiber._debugOwner;
	      var source = fiber._debugSource;
	      var name = getComponentName_1(fiber);
	      var ownerName = null;
	      if (owner) {
	        ownerName = getComponentName_1(owner);
	      }
	      return describeComponentFrame(name, source, ownerName);
	    default:
	      return '';
	  }
	}

	// This function can only be called with a work-in-progress fiber and
	// only during begin or complete phase. Do not call it under any other
	// circumstances.
	function getStackAddendumByWorkInProgressFiber$1(workInProgress) {
	  var info = '';
	  var node = workInProgress;
	  do {
	    info += describeFiber(node);
	    // Otherwise this return pointer might point to the wrong tree:
	    node = node['return'];
	  } while (node);
	  return info;
	}

	var ReactFiberComponentTreeHook = {
	  getStackAddendumByWorkInProgressFiber: getStackAddendumByWorkInProgressFiber$1
	};

	var ReactDebugCurrentFrame = ReactGlobalSharedState_1.ReactDebugCurrentFrame;

	{
	  var getComponentName$3 = getComponentName_1;

	  var _require2$2 = ReactFiberComponentTreeHook,
	      getStackAddendumByWorkInProgressFiber = _require2$2.getStackAddendumByWorkInProgressFiber;
	}

	function getCurrentFiberOwnerName$2() {
	  {
	    var fiber = ReactDebugCurrentFiber.current;
	    if (fiber === null) {
	      return null;
	    }
	    if (fiber._debugOwner != null) {
	      return getComponentName$3(fiber._debugOwner);
	    }
	  }
	  return null;
	}

	function getCurrentFiberStackAddendum$1() {
	  {
	    var fiber = ReactDebugCurrentFiber.current;
	    if (fiber === null) {
	      return null;
	    }
	    // Safe because if current fiber exists, we are reconciling,
	    // and it is guaranteed to be the work-in-progress version.
	    return getStackAddendumByWorkInProgressFiber(fiber);
	  }
	  return null;
	}

	function resetCurrentFiber() {
	  ReactDebugCurrentFrame.getCurrentStack = null;
	  ReactDebugCurrentFiber.current = null;
	  ReactDebugCurrentFiber.phase = null;
	}

	function setCurrentFiber(fiber, phase) {
	  ReactDebugCurrentFrame.getCurrentStack = getCurrentFiberStackAddendum$1;
	  ReactDebugCurrentFiber.current = fiber;
	  ReactDebugCurrentFiber.phase = phase;
	}

	var ReactDebugCurrentFiber = {
	  current: null,
	  phase: null,
	  resetCurrentFiber: resetCurrentFiber,
	  setCurrentFiber: setCurrentFiber,
	  getCurrentFiberOwnerName: getCurrentFiberOwnerName$2,
	  getCurrentFiberStackAddendum: getCurrentFiberStackAddendum$1
	};

	var ReactDebugCurrentFiber_1 = ReactDebugCurrentFiber;

	var warnValidStyle$1 = emptyFunction;

	{
	  var camelizeStyleName$1 = camelizeStyleName;
	  var getComponentName$2 = getComponentName_1;
	  var warning$4 = require$$0;

	  var _require$3 = ReactDebugCurrentFiber_1,
	      getCurrentFiberOwnerName$1 = _require$3.getCurrentFiberOwnerName;

	  // 'msTransform' is correct, but the other prefixes should be capitalized


	  var badVendoredStyleNamePattern = /^(?:webkit|moz|o)[A-Z]/;

	  // style values shouldn't contain a semicolon
	  var badStyleValueWithSemicolonPattern = /;\s*$/;

	  var warnedStyleNames = {};
	  var warnedStyleValues = {};
	  var warnedForNaNValue = false;
	  var warnedForInfinityValue = false;

	  var warnHyphenatedStyleName = function (name, owner) {
	    if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
	      return;
	    }

	    warnedStyleNames[name] = true;
	    warning$4(false, 'Unsupported style property %s. Did you mean %s?%s', name, camelizeStyleName$1(name), checkRenderMessage(owner));
	  };

	  var warnBadVendoredStyleName = function (name, owner) {
	    if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
	      return;
	    }

	    warnedStyleNames[name] = true;
	    warning$4(false, 'Unsupported vendor-prefixed style property %s. Did you mean %s?%s', name, name.charAt(0).toUpperCase() + name.slice(1), checkRenderMessage(owner));
	  };

	  var warnStyleValueWithSemicolon = function (name, value, owner) {
	    if (warnedStyleValues.hasOwnProperty(value) && warnedStyleValues[value]) {
	      return;
	    }

	    warnedStyleValues[value] = true;
	    warning$4(false, "Style property values shouldn't contain a semicolon.%s " + 'Try "%s: %s" instead.', checkRenderMessage(owner), name, value.replace(badStyleValueWithSemicolonPattern, ''));
	  };

	  var warnStyleValueIsNaN = function (name, value, owner) {
	    if (warnedForNaNValue) {
	      return;
	    }

	    warnedForNaNValue = true;
	    warning$4(false, '`NaN` is an invalid value for the `%s` css style property.%s', name, checkRenderMessage(owner));
	  };

	  var warnStyleValueIsInfinity = function (name, value, owner) {
	    if (warnedForInfinityValue) {
	      return;
	    }

	    warnedForInfinityValue = true;
	    warning$4(false, '`Infinity` is an invalid value for the `%s` css style property.%s', name, checkRenderMessage(owner));
	  };

	  var checkRenderMessage = function (owner) {
	    var ownerName;
	    if (owner != null) {
	      // Stack passes the owner manually all the way to CSSPropertyOperations.
	      ownerName = getComponentName$2(owner);
	    } else {
	      // Fiber doesn't pass it but uses ReactDebugCurrentFiber to track it.
	      // It is only enabled in development and tracks host components too.
	      ownerName = getCurrentFiberOwnerName$1();
	      // TODO: also report the stack.
	    }
	    if (ownerName) {
	      return '\n\nCheck the render method of `' + ownerName + '`.';
	    }
	    return '';
	  };

	  warnValidStyle$1 = function (name, value, component) {
	    var owner;
	    if (component) {
	      // TODO: this only works with Stack. Seems like we need to add unit tests?
	      owner = component._currentElement._owner;
	    }
	    if (name.indexOf('-') > -1) {
	      warnHyphenatedStyleName(name, owner);
	    } else if (badVendoredStyleNamePattern.test(name)) {
	      warnBadVendoredStyleName(name, owner);
	    } else if (badStyleValueWithSemicolonPattern.test(value)) {
	      warnStyleValueWithSemicolon(name, value, owner);
	    }

	    if (typeof value === 'number') {
	      if (isNaN(value)) {
	        warnStyleValueIsNaN(name, value, owner);
	      } else if (!isFinite(value)) {
	        warnStyleValueIsInfinity(name, value, owner);
	      }
	    }
	  };
	}

	var warnValidStyle_1 = warnValidStyle$1;

	{
	  var hyphenateStyleName$1 = hyphenateStyleName;
	  var warnValidStyle = warnValidStyle_1;
	}

	var hasShorthandPropertyBug = false;
	if (ExecutionEnvironment.canUseDOM) {
	  var tempStyle = document.createElement('div').style;
	  try {
	    // IE8 throws "Invalid argument." if resetting shorthand style properties.
	    tempStyle.font = '';
	  } catch (e) {
	    hasShorthandPropertyBug = true;
	  }
	}

	/**
	 * Operations for dealing with CSS properties.
	 */
	var CSSPropertyOperations = {
	  /**
	   * This creates a string that is expected to be equivalent to the style
	   * attribute generated by server-side rendering. It by-passes warnings and
	   * security checks so it's not safe to use this value for anything other than
	   * comparison. It is only used in DEV for SSR validation.
	   */
	  createDangerousStringForStyles: function (styles) {
	    {
	      var serialized = '';
	      var delimiter = '';
	      for (var styleName in styles) {
	        if (!styles.hasOwnProperty(styleName)) {
	          continue;
	        }
	        var styleValue = styles[styleName];
	        if (styleValue != null) {
	          var isCustomProperty = styleName.indexOf('--') === 0;
	          serialized += delimiter + hyphenateStyleName$1(styleName) + ':';
	          serialized += dangerousStyleValue_1(styleName, styleValue, isCustomProperty);

	          delimiter = ';';
	        }
	      }
	      return serialized || null;
	    }
	  },

	  /**
	   * Sets the value for multiple styles on a node.  If a value is specified as
	   * '' (empty string), the corresponding style property will be unset.
	   *
	   * @param {DOMElement} node
	   * @param {object} styles
	   * @param {ReactDOMComponent} component
	   */
	  setValueForStyles: function (node, styles, component) {
	    var style = node.style;
	    for (var styleName in styles) {
	      if (!styles.hasOwnProperty(styleName)) {
	        continue;
	      }
	      var isCustomProperty = styleName.indexOf('--') === 0;
	      {
	        if (!isCustomProperty) {
	          warnValidStyle(styleName, styles[styleName], component);
	        }
	      }
	      var styleValue = dangerousStyleValue_1(styleName, styles[styleName], isCustomProperty);
	      if (styleName === 'float') {
	        styleName = 'cssFloat';
	      }
	      if (isCustomProperty) {
	        style.setProperty(styleName, styleValue);
	      } else if (styleValue) {
	        style[styleName] = styleValue;
	      } else {
	        var expansion = hasShorthandPropertyBug && CSSProperty_1.shorthandPropertyExpansions[styleName];
	        if (expansion) {
	          // Shorthand property that IE8 won't like unsetting, so unset each
	          // component to placate it
	          for (var individualStyleName in expansion) {
	            style[individualStyleName] = '';
	          }
	        } else {
	          style[styleName] = '';
	        }
	      }
	    }
	  }
	};

	var CSSPropertyOperations_1 = CSSPropertyOperations;

	var ReactInvalidSetStateWarningHook = {};

	{
	  var warning$7 = require$$0;
	  var processingChildContext = false;

	  var warnInvalidSetState = function () {
	    warning$7(!processingChildContext, 'setState(...): Cannot call setState() inside getChildContext()');
	  };

	  ReactInvalidSetStateWarningHook = {
	    onBeginProcessingChildContext: function () {
	      processingChildContext = true;
	    },
	    onEndProcessingChildContext: function () {
	      processingChildContext = false;
	    },
	    onSetState: function () {
	      warnInvalidSetState();
	    }
	  };
	}

	var ReactInvalidSetStateWarningHook_1 = ReactInvalidSetStateWarningHook;

	/**
	 * Copyright (c) 2016-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * @providesModule ReactHostOperationHistoryHook
	 * 
	 */

	// Trust the developer to only use this with a true check
	var ReactHostOperationHistoryHook = null;

	{
	  var history = [];

	  ReactHostOperationHistoryHook = {
	    onHostOperation: function (operation) {
	      history.push(operation);
	    },
	    clearHistory: function () {
	      if (ReactHostOperationHistoryHook._preventClearing) {
	        // Should only be used for tests.
	        return;
	      }

	      history = [];
	    },
	    getHistory: function () {
	      return history;
	    }
	  };
	}

	var ReactHostOperationHistoryHook_1 = ReactHostOperationHistoryHook;

	var ReactComponentTreeHook = ReactGlobalSharedState_1.ReactComponentTreeHook;



	{
	  var warning$6 = require$$0;
	}

	// Trust the developer to only use this with a true check
	var ReactDebugTool$1 = null;

	{
	  var hooks = [];
	  var didHookThrowForEvent = {};

	  var callHook = function (event, fn, context, arg1, arg2, arg3, arg4, arg5) {
	    try {
	      fn.call(context, arg1, arg2, arg3, arg4, arg5);
	    } catch (e) {
	      warning$6(didHookThrowForEvent[event], 'Exception thrown by hook while handling %s: %s', event, e + '\n' + e.stack);
	      didHookThrowForEvent[event] = true;
	    }
	  };

	  var emitEvent = function (event, arg1, arg2, arg3, arg4, arg5) {
	    for (var i = 0; i < hooks.length; i++) {
	      var hook = hooks[i];
	      var fn = hook[event];
	      if (fn) {
	        callHook(event, fn, hook, arg1, arg2, arg3, arg4, arg5);
	      }
	    }
	  };

	  var isProfiling = false;
	  var flushHistory = [];
	  var lifeCycleTimerStack = [];
	  var currentFlushNesting = 0;
	  var currentFlushMeasurements = [];
	  var currentFlushStartTime = 0;
	  var currentTimerDebugID = null;
	  var currentTimerStartTime = 0;
	  var currentTimerNestedFlushDuration = 0;
	  var currentTimerType = null;

	  var lifeCycleTimerHasWarned = false;

	  var clearHistory = function () {
	    ReactComponentTreeHook.purgeUnmountedComponents();
	    ReactHostOperationHistoryHook_1.clearHistory();
	  };

	  var getTreeSnapshot = function (registeredIDs) {
	    return registeredIDs.reduce(function (tree, id) {
	      var ownerID = ReactComponentTreeHook.getOwnerID(id);
	      var parentID = ReactComponentTreeHook.getParentID(id);
	      tree[id] = {
	        displayName: ReactComponentTreeHook.getDisplayName(id),
	        text: ReactComponentTreeHook.getText(id),
	        updateCount: ReactComponentTreeHook.getUpdateCount(id),
	        childIDs: ReactComponentTreeHook.getChildIDs(id),
	        // Text nodes don't have owners but this is close enough.
	        ownerID: ownerID || parentID && ReactComponentTreeHook.getOwnerID(parentID) || 0,
	        parentID: parentID
	      };
	      return tree;
	    }, {});
	  };

	  var resetMeasurements = function () {
	    var previousStartTime = currentFlushStartTime;
	    var previousMeasurements = currentFlushMeasurements;
	    var previousOperations = ReactHostOperationHistoryHook_1.getHistory();

	    if (currentFlushNesting === 0) {
	      currentFlushStartTime = 0;
	      currentFlushMeasurements = [];
	      clearHistory();
	      return;
	    }

	    if (previousMeasurements.length || previousOperations.length) {
	      var registeredIDs = ReactComponentTreeHook.getRegisteredIDs();
	      flushHistory.push({
	        duration: performanceNow() - previousStartTime,
	        measurements: previousMeasurements || [],
	        operations: previousOperations || [],
	        treeSnapshot: getTreeSnapshot(registeredIDs)
	      });
	    }

	    clearHistory();
	    currentFlushStartTime = performanceNow();
	    currentFlushMeasurements = [];
	  };

	  var checkDebugID = function (debugID) {
	    var allowRoot = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

	    if (allowRoot && debugID === 0) {
	      return;
	    }
	    if (!debugID) {
	      warning$6(false, 'ReactDebugTool: debugID may not be empty.');
	    }
	  };

	  var beginLifeCycleTimer = function (debugID, timerType) {
	    if (currentFlushNesting === 0) {
	      return;
	    }
	    if (currentTimerType && !lifeCycleTimerHasWarned) {
	      warning$6(false, 'There is an internal error in the React performance measurement code.' + '\n\nDid not expect %s timer to start while %s timer is still in ' + 'progress for %s instance.', timerType, currentTimerType || 'no', debugID === currentTimerDebugID ? 'the same' : 'another');
	      lifeCycleTimerHasWarned = true;
	    }
	    currentTimerStartTime = performanceNow();
	    currentTimerNestedFlushDuration = 0;
	    currentTimerDebugID = debugID;
	    currentTimerType = timerType;
	  };

	  var endLifeCycleTimer = function (debugID, timerType) {
	    if (currentFlushNesting === 0) {
	      return;
	    }
	    if (currentTimerType !== timerType && !lifeCycleTimerHasWarned) {
	      warning$6(false, 'There is an internal error in the React performance measurement code. ' + 'We did not expect %s timer to stop while %s timer is still in ' + 'progress for %s instance. Please report this as a bug in React.', timerType, currentTimerType || 'no', debugID === currentTimerDebugID ? 'the same' : 'another');
	      lifeCycleTimerHasWarned = true;
	    }
	    if (isProfiling) {
	      currentFlushMeasurements.push({
	        timerType: timerType,
	        instanceID: debugID,
	        duration: performanceNow() - currentTimerStartTime - currentTimerNestedFlushDuration
	      });
	    }
	    currentTimerStartTime = 0;
	    currentTimerNestedFlushDuration = 0;
	    currentTimerDebugID = null;
	    currentTimerType = null;
	  };

	  var pauseCurrentLifeCycleTimer = function () {
	    var currentTimer = {
	      startTime: currentTimerStartTime,
	      nestedFlushStartTime: performanceNow(),
	      debugID: currentTimerDebugID,
	      timerType: currentTimerType
	    };
	    lifeCycleTimerStack.push(currentTimer);
	    currentTimerStartTime = 0;
	    currentTimerNestedFlushDuration = 0;
	    currentTimerDebugID = null;
	    currentTimerType = null;
	  };

	  var resumeCurrentLifeCycleTimer = function () {
	    var _lifeCycleTimerStack$ = lifeCycleTimerStack.pop(),
	        startTime = _lifeCycleTimerStack$.startTime,
	        nestedFlushStartTime = _lifeCycleTimerStack$.nestedFlushStartTime,
	        debugID = _lifeCycleTimerStack$.debugID,
	        timerType = _lifeCycleTimerStack$.timerType;

	    var nestedFlushDuration = performanceNow() - nestedFlushStartTime;
	    currentTimerStartTime = startTime;
	    currentTimerNestedFlushDuration += nestedFlushDuration;
	    currentTimerDebugID = debugID;
	    currentTimerType = timerType;
	  };

	  var lastMarkTimeStamp = 0;
	  var canUsePerformanceMeasure = typeof performance !== 'undefined' && typeof performance.mark === 'function' && typeof performance.clearMarks === 'function' && typeof performance.measure === 'function' && typeof performance.clearMeasures === 'function';

	  var shouldMark = function (debugID) {
	    if (!isProfiling || !canUsePerformanceMeasure) {
	      return false;
	    }
	    var element = ReactComponentTreeHook.getElement(debugID);
	    if (element == null || typeof element !== 'object') {
	      return false;
	    }
	    var isHostElement = typeof element.type === 'string';
	    if (isHostElement) {
	      return false;
	    }
	    return true;
	  };

	  var markBegin = function (debugID, markType) {
	    if (!shouldMark(debugID)) {
	      return;
	    }

	    var markName = debugID + '::' + markType;
	    lastMarkTimeStamp = performanceNow();
	    performance.mark(markName);
	  };

	  var markEnd = function (debugID, markType) {
	    if (!shouldMark(debugID)) {
	      return;
	    }

	    var markName = debugID + '::' + markType;
	    var displayName = ReactComponentTreeHook.getDisplayName(debugID) || 'Unknown';

	    // Chrome has an issue of dropping markers recorded too fast:
	    // https://bugs.chromium.org/p/chromium/issues/detail?id=640652
	    // To work around this, we will not report very small measurements.
	    // I determined the magic number by tweaking it back and forth.
	    // 0.05ms was enough to prevent the issue, but I set it to 0.1ms to be safe.
	    // When the bug is fixed, we can `measure()` unconditionally if we want to.
	    var timeStamp = performanceNow();
	    if (timeStamp - lastMarkTimeStamp > 0.1) {
	      var measurementName = displayName + ' [' + markType + ']';
	      performance.measure(measurementName, markName);
	    }

	    performance.clearMarks(markName);
	    if (measurementName) {
	      performance.clearMeasures(measurementName);
	    }
	  };

	  ReactDebugTool$1 = {
	    addHook: function (hook) {
	      hooks.push(hook);
	    },
	    removeHook: function (hook) {
	      for (var i = 0; i < hooks.length; i++) {
	        if (hooks[i] === hook) {
	          hooks.splice(i, 1);
	          i--;
	        }
	      }
	    },
	    isProfiling: function () {
	      return isProfiling;
	    },
	    beginProfiling: function () {
	      if (isProfiling) {
	        return;
	      }

	      isProfiling = true;
	      flushHistory.length = 0;
	      resetMeasurements();
	      ReactDebugTool$1.addHook(ReactHostOperationHistoryHook_1);
	    },
	    endProfiling: function () {
	      if (!isProfiling) {
	        return;
	      }

	      isProfiling = false;
	      resetMeasurements();
	      ReactDebugTool$1.removeHook(ReactHostOperationHistoryHook_1);
	    },
	    getFlushHistory: function () {
	      return flushHistory;
	    },
	    onBeginFlush: function () {
	      currentFlushNesting++;
	      resetMeasurements();
	      pauseCurrentLifeCycleTimer();
	      emitEvent('onBeginFlush');
	    },
	    onEndFlush: function () {
	      resetMeasurements();
	      currentFlushNesting--;
	      resumeCurrentLifeCycleTimer();
	      emitEvent('onEndFlush');
	    },
	    onBeginLifeCycleTimer: function (debugID, timerType) {
	      checkDebugID(debugID);
	      emitEvent('onBeginLifeCycleTimer', debugID, timerType);
	      markBegin(debugID, timerType);
	      beginLifeCycleTimer(debugID, timerType);
	    },
	    onEndLifeCycleTimer: function (debugID, timerType) {
	      checkDebugID(debugID);
	      endLifeCycleTimer(debugID, timerType);
	      markEnd(debugID, timerType);
	      emitEvent('onEndLifeCycleTimer', debugID, timerType);
	    },
	    onBeginProcessingChildContext: function () {
	      emitEvent('onBeginProcessingChildContext');
	    },
	    onEndProcessingChildContext: function () {
	      emitEvent('onEndProcessingChildContext');
	    },
	    onHostOperation: function (operation) {
	      checkDebugID(operation.instanceID);
	      emitEvent('onHostOperation', operation);
	    },
	    onSetState: function () {
	      emitEvent('onSetState');
	    },
	    onSetChildren: function (debugID, childDebugIDs) {
	      checkDebugID(debugID);
	      childDebugIDs.forEach(checkDebugID);
	      emitEvent('onSetChildren', debugID, childDebugIDs);
	    },
	    onBeforeMountComponent: function (debugID, element, parentDebugID) {
	      checkDebugID(debugID);
	      checkDebugID(parentDebugID, true);
	      emitEvent('onBeforeMountComponent', debugID, element, parentDebugID);
	      markBegin(debugID, 'mount');
	    },
	    onMountComponent: function (debugID) {
	      checkDebugID(debugID);
	      markEnd(debugID, 'mount');
	      emitEvent('onMountComponent', debugID);
	    },
	    onBeforeUpdateComponent: function (debugID, element) {
	      checkDebugID(debugID);
	      emitEvent('onBeforeUpdateComponent', debugID, element);
	      markBegin(debugID, 'update');
	    },
	    onUpdateComponent: function (debugID) {
	      checkDebugID(debugID);
	      markEnd(debugID, 'update');
	      emitEvent('onUpdateComponent', debugID);
	    },
	    onBeforeUnmountComponent: function (debugID) {
	      checkDebugID(debugID);
	      emitEvent('onBeforeUnmountComponent', debugID);
	      markBegin(debugID, 'unmount');
	    },
	    onUnmountComponent: function (debugID) {
	      checkDebugID(debugID);
	      markEnd(debugID, 'unmount');
	      emitEvent('onUnmountComponent', debugID);
	    },
	    onTestEvent: function () {
	      emitEvent('onTestEvent');
	    }
	  };

	  ReactDebugTool$1.addHook(ReactInvalidSetStateWarningHook_1);
	  ReactDebugTool$1.addHook(ReactComponentTreeHook);
	  var url = ExecutionEnvironment.canUseDOM && window.location.href || '';
	  if (/[?&]react_perf\b/.test(url)) {
	    ReactDebugTool$1.beginProfiling();
	  }
	}

	var ReactDebugTool_1 = ReactDebugTool$1;

	// Trust the developer to only use ReactInstrumentation with a true check

	var debugTool = null;

	{
	  var ReactDebugTool = ReactDebugTool_1;
	  debugTool = ReactDebugTool;
	}

	var ReactInstrumentation = { debugTool: debugTool };

	{
	  var warning$5 = require$$0;
	}

	// isAttributeNameSafe() is currently duplicated in DOMMarkupOperations.
	// TODO: Find a better place for this.
	var VALID_ATTRIBUTE_NAME_REGEX = new RegExp('^[' + DOMProperty_1.ATTRIBUTE_NAME_START_CHAR + '][' + DOMProperty_1.ATTRIBUTE_NAME_CHAR + ']*$');
	var illegalAttributeNameCache = {};
	var validatedAttributeNameCache = {};
	function isAttributeNameSafe(attributeName) {
	  if (validatedAttributeNameCache.hasOwnProperty(attributeName)) {
	    return true;
	  }
	  if (illegalAttributeNameCache.hasOwnProperty(attributeName)) {
	    return false;
	  }
	  if (VALID_ATTRIBUTE_NAME_REGEX.test(attributeName)) {
	    validatedAttributeNameCache[attributeName] = true;
	    return true;
	  }
	  illegalAttributeNameCache[attributeName] = true;
	  {
	    warning$5(false, 'Invalid attribute name: `%s`', attributeName);
	  }
	  return false;
	}

	// shouldIgnoreValue() is currently duplicated in DOMMarkupOperations.
	// TODO: Find a better place for this.
	function shouldIgnoreValue(propertyInfo, value) {
	  return value == null || propertyInfo.hasBooleanValue && !value || propertyInfo.hasNumericValue && isNaN(value) || propertyInfo.hasPositiveNumericValue && value < 1 || propertyInfo.hasOverloadedBooleanValue && value === false;
	}

	/**
	 * Operations for dealing with DOM properties.
	 */
	var DOMPropertyOperations = {
	  setAttributeForID: function (node, id) {
	    node.setAttribute(DOMProperty_1.ID_ATTRIBUTE_NAME, id);
	  },

	  setAttributeForRoot: function (node) {
	    node.setAttribute(DOMProperty_1.ROOT_ATTRIBUTE_NAME, '');
	  },

	  /**
	   * Get the value for a property on a node. Only used in DEV for SSR validation.
	   * The "expected" argument is used as a hint of what the expected value is.
	   * Some properties have multiple equivalent values.
	   */
	  getValueForProperty: function (node, name, expected) {
	    {
	      var propertyInfo = DOMProperty_1.getPropertyInfo(name);
	      if (propertyInfo) {
	        var mutationMethod = propertyInfo.mutationMethod;
	        if (mutationMethod || propertyInfo.mustUseProperty) {
	          return node[propertyInfo.propertyName];
	        } else {
	          var attributeName = propertyInfo.attributeName;

	          var stringValue = null;

	          if (propertyInfo.hasOverloadedBooleanValue) {
	            if (node.hasAttribute(attributeName)) {
	              var value = node.getAttribute(attributeName);
	              if (value === '') {
	                return true;
	              }
	              if (shouldIgnoreValue(propertyInfo, expected)) {
	                return value;
	              }
	              if (value === '' + expected) {
	                return expected;
	              }
	              return value;
	            }
	          } else if (node.hasAttribute(attributeName)) {
	            if (shouldIgnoreValue(propertyInfo, expected)) {
	              // We had an attribute but shouldn't have had one, so read it
	              // for the error message.
	              return node.getAttribute(attributeName);
	            }
	            if (propertyInfo.hasBooleanValue) {
	              // If this was a boolean, it doesn't matter what the value is
	              // the fact that we have it is the same as the expected.
	              return expected;
	            }
	            // Even if this property uses a namespace we use getAttribute
	            // because we assume its namespaced name is the same as our config.
	            // To use getAttributeNS we need the local name which we don't have
	            // in our config atm.
	            stringValue = node.getAttribute(attributeName);
	          }

	          if (shouldIgnoreValue(propertyInfo, expected)) {
	            return stringValue === null ? expected : stringValue;
	          } else if (stringValue === '' + expected) {
	            return expected;
	          } else {
	            return stringValue;
	          }
	        }
	      }
	    }
	  },

	  /**
	   * Get the value for a attribute on a node. Only used in DEV for SSR validation.
	   * The third argument is used as a hint of what the expected value is. Some
	   * attributes have multiple equivalent values.
	   */
	  getValueForAttribute: function (node, name, expected) {
	    {
	      if (!isAttributeNameSafe(name)) {
	        return;
	      }
	      if (!node.hasAttribute(name)) {
	        return expected === undefined ? undefined : null;
	      }
	      var value = node.getAttribute(name);
	      if (value === '' + expected) {
	        return expected;
	      }
	      return value;
	    }
	  },

	  /**
	   * Sets the value for a property on a node.
	   *
	   * @param {DOMElement} node
	   * @param {string} name
	   * @param {*} value
	   */
	  setValueForProperty: function (node, name, value) {
	    var propertyInfo = DOMProperty_1.getPropertyInfo(name);

	    if (propertyInfo && DOMProperty_1.shouldSetAttribute(name, value)) {
	      var mutationMethod = propertyInfo.mutationMethod;
	      if (mutationMethod) {
	        mutationMethod(node, value);
	      } else if (shouldIgnoreValue(propertyInfo, value)) {
	        DOMPropertyOperations.deleteValueForProperty(node, name);
	        return;
	      } else if (propertyInfo.mustUseProperty) {
	        // Contrary to `setAttribute`, object properties are properly
	        // `toString`ed by IE8/9.
	        node[propertyInfo.propertyName] = value;
	      } else {
	        var attributeName = propertyInfo.attributeName;
	        var namespace = propertyInfo.attributeNamespace;
	        // `setAttribute` with objects becomes only `[object]` in IE8/9,
	        // ('' + value) makes it output the correct toString()-value.
	        if (namespace) {
	          node.setAttributeNS(namespace, attributeName, '' + value);
	        } else if (propertyInfo.hasBooleanValue || propertyInfo.hasOverloadedBooleanValue && value === true) {
	          node.setAttribute(attributeName, '');
	        } else {
	          node.setAttribute(attributeName, '' + value);
	        }
	      }
	    } else {
	      DOMPropertyOperations.setValueForAttribute(node, name, DOMProperty_1.shouldSetAttribute(name, value) ? value : null);
	      return;
	    }

	    {
	      var payload = {};
	      payload[name] = value;
	      ReactInstrumentation.debugTool.onHostOperation({
	        instanceID: ReactDOMComponentTree_1.getInstanceFromNode(node)._debugID,
	        type: 'update attribute',
	        payload: payload
	      });
	    }
	  },

	  setValueForAttribute: function (node, name, value) {
	    if (!isAttributeNameSafe(name)) {
	      return;
	    }
	    if (value == null) {
	      node.removeAttribute(name);
	    } else {
	      node.setAttribute(name, '' + value);
	    }

	    {
	      var payload = {};
	      payload[name] = value;
	      ReactInstrumentation.debugTool.onHostOperation({
	        instanceID: ReactDOMComponentTree_1.getInstanceFromNode(node)._debugID,
	        type: 'update attribute',
	        payload: payload
	      });
	    }
	  },

	  /**
	   * Deletes an attributes from a node.
	   *
	   * @param {DOMElement} node
	   * @param {string} name
	   */
	  deleteValueForAttribute: function (node, name) {
	    node.removeAttribute(name);
	    {
	      ReactInstrumentation.debugTool.onHostOperation({
	        instanceID: ReactDOMComponentTree_1.getInstanceFromNode(node)._debugID,
	        type: 'remove attribute',
	        payload: name
	      });
	    }
	  },

	  /**
	   * Deletes the value for a property on a node.
	   *
	   * @param {DOMElement} node
	   * @param {string} name
	   */
	  deleteValueForProperty: function (node, name) {
	    var propertyInfo = DOMProperty_1.getPropertyInfo(name);
	    if (propertyInfo) {
	      var mutationMethod = propertyInfo.mutationMethod;
	      if (mutationMethod) {
	        mutationMethod(node, undefined);
	      } else if (propertyInfo.mustUseProperty) {
	        var propName = propertyInfo.propertyName;
	        if (propertyInfo.hasBooleanValue) {
	          node[propName] = false;
	        } else {
	          node[propName] = '';
	        }
	      } else {
	        node.removeAttribute(propertyInfo.attributeName);
	      }
	    } else {
	      node.removeAttribute(name);
	    }

	    {
	      ReactInstrumentation.debugTool.onHostOperation({
	        instanceID: ReactDOMComponentTree_1.getInstanceFromNode(node)._debugID,
	        type: 'remove attribute',
	        payload: name
	      });
	    }
	  }
	};

	var DOMPropertyOperations_1 = DOMPropertyOperations;

	var ReactControlledValuePropTypes = {
	  checkPropTypes: null
	};

	{
	  var warning$9 = require$$0;
	  var emptyFunction$2 = emptyFunction;
	  var PropTypes = propTypes;
	  var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

	  ReactControlledValuePropTypes.checkPropTypes = emptyFunction$2;
	  var hasReadOnlyValue = {
	    button: true,
	    checkbox: true,
	    image: true,
	    hidden: true,
	    radio: true,
	    reset: true,
	    submit: true
	  };

	  var propTypes$1 = {
	    value: function (props, propName, componentName) {
	      if (!props[propName] || hasReadOnlyValue[props.type] || props.onChange || props.readOnly || props.disabled) {
	        return null;
	      }
	      return new Error('You provided a `value` prop to a form field without an ' + '`onChange` handler. This will render a read-only field. If ' + 'the field should be mutable use `defaultValue`. Otherwise, ' + 'set either `onChange` or `readOnly`.');
	    },
	    checked: function (props, propName, componentName) {
	      if (!props[propName] || props.onChange || props.readOnly || props.disabled) {
	        return null;
	      }
	      return new Error('You provided a `checked` prop to a form field without an ' + '`onChange` handler. This will render a read-only field. If ' + 'the field should be mutable use `defaultChecked`. Otherwise, ' + 'set either `onChange` or `readOnly`.');
	    },
	    onChange: PropTypes.func
	  };

	  var loggedTypeFailures = {};

	  /**
	   * Provide a linked `value` attribute for controlled forms. You should not use
	   * this outside of the ReactDOM controlled form components.
	   */
	  ReactControlledValuePropTypes.checkPropTypes = function (tagName, props, getStack) {
	    for (var propName in propTypes$1) {
	      if (propTypes$1.hasOwnProperty(propName)) {
	        var error = propTypes$1[propName](props, propName, tagName, 'prop', null, ReactPropTypesSecret);
	      }
	      if (error instanceof Error && !(error.message in loggedTypeFailures)) {
	        // Only monitor this failure once because there tends to be a lot of the
	        // same error.
	        loggedTypeFailures[error.message] = true;

	        warning$9(false, 'Failed form propType: %s%s', error.message, getStack());
	      }
	    }
	  };
	}

	var ReactControlledValuePropTypes_1 = ReactControlledValuePropTypes;

	var getCurrentFiberOwnerName$3 = ReactDebugCurrentFiber_1.getCurrentFiberOwnerName;

	{
	  var _require2$3 = ReactDebugCurrentFiber_1,
	      getCurrentFiberStackAddendum$2 = _require2$3.getCurrentFiberStackAddendum;

	  var warning$8 = require$$0;
	}



	var didWarnValueDefaultValue = false;
	var didWarnCheckedDefaultChecked = false;
	var didWarnControlledToUncontrolled = false;
	var didWarnUncontrolledToControlled = false;

	function isControlled(props) {
	  var usesChecked = props.type === 'checkbox' || props.type === 'radio';
	  return usesChecked ? props.checked != null : props.value != null;
	}

	/**
	 * Implements an <input> host component that allows setting these optional
	 * props: `checked`, `value`, `defaultChecked`, and `defaultValue`.
	 *
	 * If `checked` or `value` are not supplied (or null/undefined), user actions
	 * that affect the checked state or value will trigger updates to the element.
	 *
	 * If they are supplied (and not null/undefined), the rendered element will not
	 * trigger updates to the element. Instead, the props must change in order for
	 * the rendered element to be updated.
	 *
	 * The rendered element will be initialized as unchecked (or `defaultChecked`)
	 * with an empty value (or `defaultValue`).
	 *
	 * See http://www.w3.org/TR/2012/WD-html5-20121025/the-input-element.html
	 */
	var ReactDOMInput = {
	  getHostProps: function (element, props) {
	    var node = element;
	    var value = props.value;
	    var checked = props.checked;

	    var hostProps = _assign({
	      // Make sure we set .type before any other properties (setting .value
	      // before .type means .value is lost in IE11 and below)
	      type: undefined,
	      // Make sure we set .step before .value (setting .value before .step
	      // means .value is rounded on mount, based upon step precision)
	      step: undefined,
	      // Make sure we set .min & .max before .value (to ensure proper order
	      // in corner cases such as min or max deriving from value, e.g. Issue #7170)
	      min: undefined,
	      max: undefined
	    }, props, {
	      defaultChecked: undefined,
	      defaultValue: undefined,
	      value: value != null ? value : node._wrapperState.initialValue,
	      checked: checked != null ? checked : node._wrapperState.initialChecked
	    });

	    return hostProps;
	  },

	  initWrapperState: function (element, props) {
	    {
	      ReactControlledValuePropTypes_1.checkPropTypes('input', props, getCurrentFiberStackAddendum$2);

	      if (props.checked !== undefined && props.defaultChecked !== undefined && !didWarnCheckedDefaultChecked) {
	        warning$8(false, '%s contains an input of type %s with both checked and defaultChecked props. ' + 'Input elements must be either controlled or uncontrolled ' + '(specify either the checked prop, or the defaultChecked prop, but not ' + 'both). Decide between using a controlled or uncontrolled input ' + 'element and remove one of these props. More info: ' + 'https://fb.me/react-controlled-components', getCurrentFiberOwnerName$3() || 'A component', props.type);
	        didWarnCheckedDefaultChecked = true;
	      }
	      if (props.value !== undefined && props.defaultValue !== undefined && !didWarnValueDefaultValue) {
	        warning$8(false, '%s contains an input of type %s with both value and defaultValue props. ' + 'Input elements must be either controlled or uncontrolled ' + '(specify either the value prop, or the defaultValue prop, but not ' + 'both). Decide between using a controlled or uncontrolled input ' + 'element and remove one of these props. More info: ' + 'https://fb.me/react-controlled-components', getCurrentFiberOwnerName$3() || 'A component', props.type);
	        didWarnValueDefaultValue = true;
	      }
	    }

	    var defaultValue = props.defaultValue;
	    var node = element;
	    node._wrapperState = {
	      initialChecked: props.checked != null ? props.checked : props.defaultChecked,
	      initialValue: props.value != null ? props.value : defaultValue,
	      controlled: isControlled(props)
	    };
	  },

	  updateWrapper: function (element, props) {
	    var node = element;
	    {
	      var controlled = isControlled(props);

	      if (!node._wrapperState.controlled && controlled && !didWarnUncontrolledToControlled) {
	        warning$8(false, 'A component is changing an uncontrolled input of type %s to be controlled. ' + 'Input elements should not switch from uncontrolled to controlled (or vice versa). ' + 'Decide between using a controlled or uncontrolled input ' + 'element for the lifetime of the component. More info: https://fb.me/react-controlled-components%s', props.type, getCurrentFiberStackAddendum$2());
	        didWarnUncontrolledToControlled = true;
	      }
	      if (node._wrapperState.controlled && !controlled && !didWarnControlledToUncontrolled) {
	        warning$8(false, 'A component is changing a controlled input of type %s to be uncontrolled. ' + 'Input elements should not switch from controlled to uncontrolled (or vice versa). ' + 'Decide between using a controlled or uncontrolled input ' + 'element for the lifetime of the component. More info: https://fb.me/react-controlled-components%s', props.type, getCurrentFiberStackAddendum$2());
	        didWarnControlledToUncontrolled = true;
	      }
	    }

	    var checked = props.checked;
	    if (checked != null) {
	      DOMPropertyOperations_1.setValueForProperty(node, 'checked', checked || false);
	    }

	    var value = props.value;
	    if (value != null) {
	      if (value === 0 && node.value === '') {
	        node.value = '0';
	        // Note: IE9 reports a number inputs as 'text', so check props instead.
	      } else if (props.type === 'number') {
	        // Simulate `input.valueAsNumber`. IE9 does not support it
	        var valueAsNumber = parseFloat(node.value) || 0;

	        if (
	        // eslint-disable-next-line
	        value != valueAsNumber ||
	        // eslint-disable-next-line
	        value == valueAsNumber && node.value != value) {
	          // Cast `value` to a string to ensure the value is set correctly. While
	          // browsers typically do this as necessary, jsdom doesn't.
	          node.value = '' + value;
	        }
	      } else if (node.value !== '' + value) {
	        // Cast `value` to a string to ensure the value is set correctly. While
	        // browsers typically do this as necessary, jsdom doesn't.
	        node.value = '' + value;
	      }
	    } else {
	      if (props.value == null && props.defaultValue != null) {
	        // In Chrome, assigning defaultValue to certain input types triggers input validation.
	        // For number inputs, the display value loses trailing decimal points. For email inputs,
	        // Chrome raises "The specified value <x> is not a valid email address".
	        //
	        // Here we check to see if the defaultValue has actually changed, avoiding these problems
	        // when the user is inputting text
	        //
	        // https://github.com/facebook/react/issues/7253
	        if (node.defaultValue !== '' + props.defaultValue) {
	          node.defaultValue = '' + props.defaultValue;
	        }
	      }
	      if (props.checked == null && props.defaultChecked != null) {
	        node.defaultChecked = !!props.defaultChecked;
	      }
	    }
	  },

	  postMountWrapper: function (element, props) {
	    var node = element;

	    // Detach value from defaultValue. We won't do anything if we're working on
	    // submit or reset inputs as those values & defaultValues are linked. They
	    // are not resetable nodes so this operation doesn't matter and actually
	    // removes browser-default values (eg "Submit Query") when no value is
	    // provided.

	    switch (props.type) {
	      case 'submit':
	      case 'reset':
	        break;
	      case 'color':
	      case 'date':
	      case 'datetime':
	      case 'datetime-local':
	      case 'month':
	      case 'time':
	      case 'week':
	        // This fixes the no-show issue on iOS Safari and Android Chrome:
	        // https://github.com/facebook/react/issues/7233
	        node.value = '';
	        node.value = node.defaultValue;
	        break;
	      default:
	        node.value = node.value;
	        break;
	    }

	    // Normally, we'd just do `node.checked = node.checked` upon initial mount, less this bug
	    // this is needed to work around a chrome bug where setting defaultChecked
	    // will sometimes influence the value of checked (even after detachment).
	    // Reference: https://bugs.chromium.org/p/chromium/issues/detail?id=608416
	    // We need to temporarily unset name to avoid disrupting radio button groups.
	    var name = node.name;
	    if (name !== '') {
	      node.name = '';
	    }
	    node.defaultChecked = !node.defaultChecked;
	    node.defaultChecked = !node.defaultChecked;
	    if (name !== '') {
	      node.name = name;
	    }
	  },

	  restoreControlledState: function (element, props) {
	    var node = element;
	    ReactDOMInput.updateWrapper(node, props);
	    updateNamedCousins(node, props);
	  }
	};

	function updateNamedCousins(rootNode, props) {
	  var name = props.name;
	  if (props.type === 'radio' && name != null) {
	    var queryRoot = rootNode;

	    while (queryRoot.parentNode) {
	      queryRoot = queryRoot.parentNode;
	    }

	    // If `rootNode.form` was non-null, then we could try `form.elements`,
	    // but that sometimes behaves strangely in IE8. We could also try using
	    // `form.getElementsByName`, but that will only return direct children
	    // and won't include inputs that use the HTML5 `form=` attribute. Since
	    // the input might not even be in a form. It might not even be in the
	    // document. Let's just use the local `querySelectorAll` to ensure we don't
	    // miss anything.
	    var group = queryRoot.querySelectorAll('input[name=' + JSON.stringify('' + name) + '][type="radio"]');

	    for (var i = 0; i < group.length; i++) {
	      var otherNode = group[i];
	      if (otherNode === rootNode || otherNode.form !== rootNode.form) {
	        continue;
	      }
	      // This will throw if radio buttons rendered by different copies of React
	      // and the same name are rendered into the same form (same as #1939).
	      // That's probably okay; we don't support it just as we don't support
	      // mixing React radio buttons with non-React ones.
	      var otherProps = ReactDOMComponentTree_1.getFiberCurrentPropsFromNode(otherNode);
	      !otherProps ? invariant(false, 'ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.') : void 0;
	      // If this is a controlled radio button group, forcing the input that
	      // was previously checked to update will cause it to be come re-checked
	      // as appropriate.
	      ReactDOMInput.updateWrapper(otherNode, otherProps);
	    }
	  }
	}

	var ReactDOMFiberInput = ReactDOMInput;

	{
	  var warning$10 = require$$0;
	}

	function flattenChildren(children) {
	  var content = '';

	  // Flatten children and warn if they aren't strings or numbers;
	  // invalid types are ignored.
	  // We can silently skip them because invalid DOM nesting warning
	  // catches these cases in Fiber.
	  react.Children.forEach(children, function (child) {
	    if (child == null) {
	      return;
	    }
	    if (typeof child === 'string' || typeof child === 'number') {
	      content += child;
	    }
	  });

	  return content;
	}

	/**
	 * Implements an <option> host component that warns when `selected` is set.
	 */
	var ReactDOMOption = {
	  validateProps: function (element, props) {
	    // TODO (yungsters): Remove support for `selected` in <option>.
	    {
	      warning$10(props.selected == null, 'Use the `defaultValue` or `value` props on <select> instead of ' + 'setting `selected` on <option>.');
	    }
	  },

	  postMountWrapper: function (element, props) {
	    // value="" should make a value attribute (#6219)
	    if (props.value != null) {
	      element.setAttribute('value', props.value);
	    }
	  },

	  getHostProps: function (element, props) {
	    var hostProps = _assign({ children: undefined }, props);

	    var content = flattenChildren(props.children);

	    if (content) {
	      hostProps.children = content;
	    }

	    return hostProps;
	  }
	};

	var ReactDOMFiberOption = ReactDOMOption;

	var getCurrentFiberOwnerName$4 = ReactDebugCurrentFiber_1.getCurrentFiberOwnerName;

	{
	  var didWarnValueDefaultValue$1 = false;
	  var warning$11 = require$$0;

	  var _require2$4 = ReactDebugCurrentFiber_1,
	      getCurrentFiberStackAddendum$3 = _require2$4.getCurrentFiberStackAddendum;
	}

	function getDeclarationErrorAddendum() {
	  var ownerName = getCurrentFiberOwnerName$4();
	  if (ownerName) {
	    return '\n\nCheck the render method of `' + ownerName + '`.';
	  }
	  return '';
	}

	var valuePropNames = ['value', 'defaultValue'];

	/**
	 * Validation function for `value` and `defaultValue`.
	 */
	function checkSelectPropTypes(props) {
	  ReactControlledValuePropTypes_1.checkPropTypes('select', props, getCurrentFiberStackAddendum$3);

	  for (var i = 0; i < valuePropNames.length; i++) {
	    var propName = valuePropNames[i];
	    if (props[propName] == null) {
	      continue;
	    }
	    var isArray = Array.isArray(props[propName]);
	    if (props.multiple && !isArray) {
	      warning$11(false, 'The `%s` prop supplied to <select> must be an array if ' + '`multiple` is true.%s', propName, getDeclarationErrorAddendum());
	    } else if (!props.multiple && isArray) {
	      warning$11(false, 'The `%s` prop supplied to <select> must be a scalar ' + 'value if `multiple` is false.%s', propName, getDeclarationErrorAddendum());
	    }
	  }
	}

	function updateOptions(node, multiple, propValue) {
	  var options = node.options;

	  if (multiple) {
	    var selectedValues = propValue;
	    var selectedValue = {};
	    for (var i = 0; i < selectedValues.length; i++) {
	      // Prefix to avoid chaos with special keys.
	      selectedValue['$' + selectedValues[i]] = true;
	    }
	    for (var _i = 0; _i < options.length; _i++) {
	      var selected = selectedValue.hasOwnProperty('$' + options[_i].value);
	      if (options[_i].selected !== selected) {
	        options[_i].selected = selected;
	      }
	    }
	  } else {
	    // Do not set `select.value` as exact behavior isn't consistent across all
	    // browsers for all cases.
	    var _selectedValue = '' + propValue;
	    var defaultSelected = null;
	    for (var _i2 = 0; _i2 < options.length; _i2++) {
	      if (options[_i2].value === _selectedValue) {
	        options[_i2].selected = true;
	        return;
	      }
	      if (defaultSelected === null && !options[_i2].disabled) {
	        defaultSelected = options[_i2];
	      }
	    }
	    if (defaultSelected !== null) {
	      defaultSelected.selected = true;
	    }
	  }
	}

	/**
	 * Implements a <select> host component that allows optionally setting the
	 * props `value` and `defaultValue`. If `multiple` is false, the prop must be a
	 * stringable. If `multiple` is true, the prop must be an array of stringables.
	 *
	 * If `value` is not supplied (or null/undefined), user actions that change the
	 * selected option will trigger updates to the rendered options.
	 *
	 * If it is supplied (and not null/undefined), the rendered options will not
	 * update in response to user actions. Instead, the `value` prop must change in
	 * order for the rendered options to update.
	 *
	 * If `defaultValue` is provided, any options with the supplied values will be
	 * selected.
	 */
	var ReactDOMSelect = {
	  getHostProps: function (element, props) {
	    return _assign({}, props, {
	      value: undefined
	    });
	  },

	  initWrapperState: function (element, props) {
	    var node = element;
	    {
	      checkSelectPropTypes(props);
	    }

	    var value = props.value;
	    node._wrapperState = {
	      initialValue: value != null ? value : props.defaultValue,
	      wasMultiple: !!props.multiple
	    };

	    {
	      if (props.value !== undefined && props.defaultValue !== undefined && !didWarnValueDefaultValue$1) {
	        warning$11(false, 'Select elements must be either controlled or uncontrolled ' + '(specify either the value prop, or the defaultValue prop, but not ' + 'both). Decide between using a controlled or uncontrolled select ' + 'element and remove one of these props. More info: ' + 'https://fb.me/react-controlled-components');
	        didWarnValueDefaultValue$1 = true;
	      }
	    }
	  },

	  postMountWrapper: function (element, props) {
	    var node = element;
	    node.multiple = !!props.multiple;
	    var value = props.value;
	    if (value != null) {
	      updateOptions(node, !!props.multiple, value);
	    } else if (props.defaultValue != null) {
	      updateOptions(node, !!props.multiple, props.defaultValue);
	    }
	  },

	  postUpdateWrapper: function (element, props) {
	    var node = element;
	    // After the initial mount, we control selected-ness manually so don't pass
	    // this value down
	    node._wrapperState.initialValue = undefined;

	    var wasMultiple = node._wrapperState.wasMultiple;
	    node._wrapperState.wasMultiple = !!props.multiple;

	    var value = props.value;
	    if (value != null) {
	      updateOptions(node, !!props.multiple, value);
	    } else if (wasMultiple !== !!props.multiple) {
	      // For simplicity, reapply `defaultValue` if `multiple` is toggled.
	      if (props.defaultValue != null) {
	        updateOptions(node, !!props.multiple, props.defaultValue);
	      } else {
	        // Revert the select back to its default unselected state.
	        updateOptions(node, !!props.multiple, props.multiple ? [] : '');
	      }
	    }
	  },

	  restoreControlledState: function (element, props) {
	    var node = element;
	    var value = props.value;

	    if (value != null) {
	      updateOptions(node, !!props.multiple, value);
	    }
	  }
	};

	var ReactDOMFiberSelect = ReactDOMSelect;

	{
	  var warning$12 = require$$0;

	  var _require$4 = ReactDebugCurrentFiber_1,
	      getCurrentFiberStackAddendum$4 = _require$4.getCurrentFiberStackAddendum;
	}

	var didWarnValDefaultVal = false;

	/**
	 * Implements a <textarea> host component that allows setting `value`, and
	 * `defaultValue`. This differs from the traditional DOM API because value is
	 * usually set as PCDATA children.
	 *
	 * If `value` is not supplied (or null/undefined), user actions that affect the
	 * value will trigger updates to the element.
	 *
	 * If `value` is supplied (and not null/undefined), the rendered element will
	 * not trigger updates to the element. Instead, the `value` prop must change in
	 * order for the rendered element to be updated.
	 *
	 * The rendered element will be initialized with an empty value, the prop
	 * `defaultValue` if specified, or the children content (deprecated).
	 */
	var ReactDOMTextarea = {
	  getHostProps: function (element, props) {
	    var node = element;
	    !(props.dangerouslySetInnerHTML == null) ? invariant(false, '`dangerouslySetInnerHTML` does not make sense on <textarea>.') : void 0;

	    // Always set children to the same thing. In IE9, the selection range will
	    // get reset if `textContent` is mutated.  We could add a check in setTextContent
	    // to only set the value if/when the value differs from the node value (which would
	    // completely solve this IE9 bug), but Sebastian+Sophie seemed to like this
	    // solution. The value can be a boolean or object so that's why it's forced
	    // to be a string.
	    var hostProps = _assign({}, props, {
	      value: undefined,
	      defaultValue: undefined,
	      children: '' + node._wrapperState.initialValue
	    });

	    return hostProps;
	  },

	  initWrapperState: function (element, props) {
	    var node = element;
	    {
	      ReactControlledValuePropTypes_1.checkPropTypes('textarea', props, getCurrentFiberStackAddendum$4);
	      if (props.value !== undefined && props.defaultValue !== undefined && !didWarnValDefaultVal) {
	        warning$12(false, 'Textarea elements must be either controlled or uncontrolled ' + '(specify either the value prop, or the defaultValue prop, but not ' + 'both). Decide between using a controlled or uncontrolled textarea ' + 'and remove one of these props. More info: ' + 'https://fb.me/react-controlled-components');
	        didWarnValDefaultVal = true;
	      }
	    }

	    var value = props.value;
	    var initialValue = value;

	    // Only bother fetching default value if we're going to use it
	    if (value == null) {
	      var defaultValue = props.defaultValue;
	      // TODO (yungsters): Remove support for children content in <textarea>.
	      var children = props.children;
	      if (children != null) {
	        {
	          warning$12(false, 'Use the `defaultValue` or `value` props instead of setting ' + 'children on <textarea>.');
	        }
	        !(defaultValue == null) ? invariant(false, 'If you supply `defaultValue` on a <textarea>, do not pass children.') : void 0;
	        if (Array.isArray(children)) {
	          !(children.length <= 1) ? invariant(false, '<textarea> can only have at most one child.') : void 0;
	          children = children[0];
	        }

	        defaultValue = '' + children;
	      }
	      if (defaultValue == null) {
	        defaultValue = '';
	      }
	      initialValue = defaultValue;
	    }

	    node._wrapperState = {
	      initialValue: '' + initialValue
	    };
	  },

	  updateWrapper: function (element, props) {
	    var node = element;
	    var value = props.value;
	    if (value != null) {
	      // Cast `value` to a string to ensure the value is set correctly. While
	      // browsers typically do this as necessary, jsdom doesn't.
	      var newValue = '' + value;

	      // To avoid side effects (such as losing text selection), only set value if changed
	      if (newValue !== node.value) {
	        node.value = newValue;
	      }
	      if (props.defaultValue == null) {
	        node.defaultValue = newValue;
	      }
	    }
	    if (props.defaultValue != null) {
	      node.defaultValue = props.defaultValue;
	    }
	  },

	  postMountWrapper: function (element, props) {
	    var node = element;
	    // This is in postMount because we need access to the DOM node, which is not
	    // available until after the component has mounted.
	    var textContent = node.textContent;

	    // Only set node.value if textContent is equal to the expected
	    // initial value. In IE10/IE11 there is a bug where the placeholder attribute
	    // will populate textContent as well.
	    // https://developer.microsoft.com/microsoft-edge/platform/issues/101525/
	    if (textContent === node._wrapperState.initialValue) {
	      node.value = textContent;
	    }
	  },

	  restoreControlledState: function (element, props) {
	    // DOM component is still mounted; update
	    ReactDOMTextarea.updateWrapper(element, props);
	  }
	};

	var ReactDOMFiberTextarea = ReactDOMTextarea;

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * @providesModule omittedCloseTags
	 */

	// For HTML, certain tags should omit their close tag. We keep a whitelist for
	// those special-case tags.

	var omittedCloseTags = {
	  area: true,
	  base: true,
	  br: true,
	  col: true,
	  embed: true,
	  hr: true,
	  img: true,
	  input: true,
	  keygen: true,
	  link: true,
	  meta: true,
	  param: true,
	  source: true,
	  track: true,
	  wbr: true
	};

	var omittedCloseTags_1 = omittedCloseTags;

	// For HTML, certain tags cannot have children. This has the same purpose as
	// `omittedCloseTags` except that `menuitem` should still have its closing tag.

	var voidElementTags = _assign({
	  menuitem: true
	}, omittedCloseTags_1);

	var voidElementTags_1 = voidElementTags;

	{
	  var warning$13 = require$$0;
	}

	var HTML$1 = '__html';

	function getDeclarationErrorAddendum$1(getCurrentOwnerName) {
	  {
	    var ownerName = getCurrentOwnerName();
	    if (ownerName) {
	      // TODO: also report the stack.
	      return '\n\nThis DOM node was rendered by `' + ownerName + '`.';
	    }
	  }
	  return '';
	}

	function assertValidProps(tag, props, getCurrentOwnerName) {
	  if (!props) {
	    return;
	  }
	  // Note the use of `==` which checks for null or undefined.
	  if (voidElementTags_1[tag]) {
	    !(props.children == null && props.dangerouslySetInnerHTML == null) ? invariant(false, '%s is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.%s', tag, getDeclarationErrorAddendum$1(getCurrentOwnerName)) : void 0;
	  }
	  if (props.dangerouslySetInnerHTML != null) {
	    !(props.children == null) ? invariant(false, 'Can only set one of `children` or `props.dangerouslySetInnerHTML`.') : void 0;
	    !(typeof props.dangerouslySetInnerHTML === 'object' && HTML$1 in props.dangerouslySetInnerHTML) ? invariant(false, '`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://fb.me/react-invariant-dangerously-set-inner-html for more information.') : void 0;
	  }
	  {
	    warning$13(props.suppressContentEditableWarning || !props.contentEditable || props.children == null, 'A component is `contentEditable` and contains `children` managed by ' + 'React. It is now your responsibility to guarantee that none of ' + 'those nodes are unexpectedly modified or duplicated. This is ' + 'probably not intentional.');
	  }
	  !(props.style == null || typeof props.style === 'object') ? invariant(false, 'The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + \'em\'}} when using JSX.%s', getDeclarationErrorAddendum$1(getCurrentOwnerName)) : void 0;
	}

	var assertValidProps_1 = assertValidProps;

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * @providesModule inputValueTracking
	 * 
	 */

	function isCheckable(elem) {
	  var type = elem.type;
	  var nodeName = elem.nodeName;
	  return nodeName && nodeName.toLowerCase() === 'input' && (type === 'checkbox' || type === 'radio');
	}

	function getTracker(node) {
	  return node._valueTracker;
	}

	function detachTracker(node) {
	  node._valueTracker = null;
	}

	function getValueFromNode(node) {
	  var value = '';
	  if (!node) {
	    return value;
	  }

	  if (isCheckable(node)) {
	    value = node.checked ? 'true' : 'false';
	  } else {
	    value = node.value;
	  }

	  return value;
	}

	function trackValueOnNode(node) {
	  var valueField = isCheckable(node) ? 'checked' : 'value';
	  var descriptor = Object.getOwnPropertyDescriptor(node.constructor.prototype, valueField);

	  var currentValue = '' + node[valueField];

	  // if someone has already defined a value or Safari, then bail
	  // and don't track value will cause over reporting of changes,
	  // but it's better then a hard failure
	  // (needed for certain tests that spyOn input values and Safari)
	  if (node.hasOwnProperty(valueField) || typeof descriptor.get !== 'function' || typeof descriptor.set !== 'function') {
	    return;
	  }

	  Object.defineProperty(node, valueField, {
	    enumerable: descriptor.enumerable,
	    configurable: true,
	    get: function () {
	      return descriptor.get.call(this);
	    },
	    set: function (value) {
	      currentValue = '' + value;
	      descriptor.set.call(this, value);
	    }
	  });

	  var tracker = {
	    getValue: function () {
	      return currentValue;
	    },
	    setValue: function (value) {
	      currentValue = '' + value;
	    },
	    stopTracking: function () {
	      detachTracker(node);
	      delete node[valueField];
	    }
	  };
	  return tracker;
	}

	var inputValueTracking = {
	  // exposed for testing
	  _getTrackerFromNode: getTracker,

	  track: function (node) {
	    if (getTracker(node)) {
	      return;
	    }

	    // TODO: Once it's just Fiber we can move this to node._wrapperState
	    node._valueTracker = trackValueOnNode(node);
	  },
	  updateValueIfChanged: function (node) {
	    if (!node) {
	      return false;
	    }

	    var tracker = getTracker(node);
	    // if there is no tracker at this point it's unlikely
	    // that trying again will succeed
	    if (!tracker) {
	      return true;
	    }

	    var lastValue = tracker.getValue();
	    var nextValue = getValueFromNode(node);
	    if (nextValue !== lastValue) {
	      tracker.setValue(nextValue);
	      return true;
	    }
	    return false;
	  },
	  stopTracking: function (node) {
	    var tracker = getTracker(node);
	    if (tracker) {
	      tracker.stopTracking();
	    }
	  }
	};

	var inputValueTracking_1 = inputValueTracking;

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * @providesModule isCustomComponent
	 * 
	 */

	function isCustomComponent(tagName, props) {
	  if (tagName.indexOf('-') === -1) {
	    return typeof props.is === 'string';
	  }
	  switch (tagName) {
	    // These are reserved SVG and MathML elements.
	    // We don't mind this whitelist too much because we expect it to never grow.
	    // The alternative is to track the namespace in a few places which is convoluted.
	    // https://w3c.github.io/webcomponents/spec/custom/#custom-elements-core-concepts
	    case 'annotation-xml':
	    case 'color-profile':
	    case 'font-face':
	    case 'font-face-src':
	    case 'font-face-uri':
	    case 'font-face-format':
	    case 'font-face-name':
	    case 'missing-glyph':
	      return false;
	    default:
	      return true;
	  }
	}

	var isCustomComponent_1 = isCustomComponent;

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * @providesModule createMicrosoftUnsafeLocalFunction
	 */

	/* globals MSApp */

	/**
	 * Create a function which has 'unsafe' privileges (required by windows8 apps)
	 */

	var createMicrosoftUnsafeLocalFunction = function (func) {
	  if (typeof MSApp !== 'undefined' && MSApp.execUnsafeLocalFunction) {
	    return function (arg0, arg1, arg2, arg3) {
	      MSApp.execUnsafeLocalFunction(function () {
	        return func(arg0, arg1, arg2, arg3);
	      });
	    };
	  } else {
	    return func;
	  }
	};

	var createMicrosoftUnsafeLocalFunction_1 = createMicrosoftUnsafeLocalFunction;

	var Namespaces$1 = DOMNamespaces.Namespaces;


	// SVG temp container for IE lacking innerHTML
	var reusableSVGContainer;

	/**
	 * Set the innerHTML property of a node
	 *
	 * @param {DOMElement} node
	 * @param {string} html
	 * @internal
	 */
	var setInnerHTML = createMicrosoftUnsafeLocalFunction_1(function (node, html) {
	  // IE does not have innerHTML for SVG nodes, so instead we inject the
	  // new markup in a temp node and then move the child nodes across into
	  // the target node
	  if (node.namespaceURI === Namespaces$1.svg && !('innerHTML' in node)) {
	    reusableSVGContainer = reusableSVGContainer || document.createElement('div');
	    reusableSVGContainer.innerHTML = '<svg>' + html + '</svg>';
	    var svgNode = reusableSVGContainer.firstChild;
	    while (svgNode.firstChild) {
	      node.appendChild(svgNode.firstChild);
	    }
	  } else {
	    node.innerHTML = html;
	  }
	});

	var setInnerHTML_1 = setInnerHTML;

	/**
	 * Copyright (c) 2016-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * Based on the escape-html library, which is used under the MIT License below:
	 *
	 * Copyright (c) 2012-2013 TJ Holowaychuk
	 * Copyright (c) 2015 Andreas Lubbe
	 * Copyright (c) 2015 Tiancheng "Timothy" Gu
	 *
	 * Permission is hereby granted, free of charge, to any person obtaining
	 * a copy of this software and associated documentation files (the
	 * 'Software'), to deal in the Software without restriction, including
	 * without limitation the rights to use, copy, modify, merge, publish,
	 * distribute, sublicense, and/or sell copies of the Software, and to
	 * permit persons to whom the Software is furnished to do so, subject to
	 * the following conditions:
	 *
	 * The above copyright notice and this permission notice shall be
	 * included in all copies or substantial portions of the Software.
	 *
	 * THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
	 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
	 * IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
	 * CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
	 * TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
	 * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
	 *
	 * @providesModule escapeTextContentForBrowser
	 */

	// code copied and modified from escape-html
	/**
	 * Module variables.
	 * @private
	 */

	var matchHtmlRegExp = /["'&<>]/;

	/**
	 * Escape special characters in the given string of html.
	 *
	 * @param  {string} string The string to escape for inserting into HTML
	 * @return {string}
	 * @public
	 */

	function escapeHtml(string) {
	  var str = '' + string;
	  var match = matchHtmlRegExp.exec(str);

	  if (!match) {
	    return str;
	  }

	  var escape;
	  var html = '';
	  var index = 0;
	  var lastIndex = 0;

	  for (index = match.index; index < str.length; index++) {
	    switch (str.charCodeAt(index)) {
	      case 34:
	        // "
	        escape = '&quot;';
	        break;
	      case 38:
	        // &
	        escape = '&amp;';
	        break;
	      case 39:
	        // '
	        escape = '&#x27;'; // modified from escape-html; used to be '&#39'
	        break;
	      case 60:
	        // <
	        escape = '&lt;';
	        break;
	      case 62:
	        // >
	        escape = '&gt;';
	        break;
	      default:
	        continue;
	    }

	    if (lastIndex !== index) {
	      html += str.substring(lastIndex, index);
	    }

	    lastIndex = index + 1;
	    html += escape;
	  }

	  return lastIndex !== index ? html + str.substring(lastIndex, index) : html;
	}
	// end code copied and modified from escape-html

	/**
	 * Escapes text to prevent scripting attacks.
	 *
	 * @param {*} text Text value to escape.
	 * @return {string} An escaped string.
	 */
	function escapeTextContentForBrowser(text) {
	  if (typeof text === 'boolean' || typeof text === 'number') {
	    // this shortcircuit helps perf for types that we know will never have
	    // special characters, especially given that this function is used often
	    // for numeric dom ids.
	    return '' + text;
	  }
	  return escapeHtml(text);
	}

	var escapeTextContentForBrowser_1 = escapeTextContentForBrowser;

	var TEXT_NODE$2 = HTMLNodeType_1.TEXT_NODE;

	/**
	 * Set the textContent property of a node, ensuring that whitespace is preserved
	 * even in IE8. innerText is a poor substitute for textContent and, among many
	 * issues, inserts <br> instead of the literal newline chars. innerHTML behaves
	 * as it should.
	 *
	 * @param {DOMElement} node
	 * @param {string} text
	 * @internal
	 */


	var setTextContent = function (node, text) {
	  if (text) {
	    var firstChild = node.firstChild;

	    if (firstChild && firstChild === node.lastChild && firstChild.nodeType === TEXT_NODE$2) {
	      firstChild.nodeValue = text;
	      return;
	    }
	  }
	  node.textContent = text;
	};

	if (ExecutionEnvironment.canUseDOM) {
	  if (!('textContent' in document.documentElement)) {
	    setTextContent = function (node, text) {
	      if (node.nodeType === TEXT_NODE$2) {
	        node.nodeValue = text;
	        return;
	      }
	      setInnerHTML_1(node, escapeTextContentForBrowser_1(text));
	    };
	  }
	}

	var setTextContent_1 = setTextContent;

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * @providesModule validAriaProperties
	 */

	var ariaProperties = {
	  'aria-current': 0, // state
	  'aria-details': 0,
	  'aria-disabled': 0, // state
	  'aria-hidden': 0, // state
	  'aria-invalid': 0, // state
	  'aria-keyshortcuts': 0,
	  'aria-label': 0,
	  'aria-roledescription': 0,
	  // Widget Attributes
	  'aria-autocomplete': 0,
	  'aria-checked': 0,
	  'aria-expanded': 0,
	  'aria-haspopup': 0,
	  'aria-level': 0,
	  'aria-modal': 0,
	  'aria-multiline': 0,
	  'aria-multiselectable': 0,
	  'aria-orientation': 0,
	  'aria-placeholder': 0,
	  'aria-pressed': 0,
	  'aria-readonly': 0,
	  'aria-required': 0,
	  'aria-selected': 0,
	  'aria-sort': 0,
	  'aria-valuemax': 0,
	  'aria-valuemin': 0,
	  'aria-valuenow': 0,
	  'aria-valuetext': 0,
	  // Live Region Attributes
	  'aria-atomic': 0,
	  'aria-busy': 0,
	  'aria-live': 0,
	  'aria-relevant': 0,
	  // Drag-and-Drop Attributes
	  'aria-dropeffect': 0,
	  'aria-grabbed': 0,
	  // Relationship Attributes
	  'aria-activedescendant': 0,
	  'aria-colcount': 0,
	  'aria-colindex': 0,
	  'aria-colspan': 0,
	  'aria-controls': 0,
	  'aria-describedby': 0,
	  'aria-errormessage': 0,
	  'aria-flowto': 0,
	  'aria-labelledby': 0,
	  'aria-owns': 0,
	  'aria-posinset': 0,
	  'aria-rowcount': 0,
	  'aria-rowindex': 0,
	  'aria-rowspan': 0,
	  'aria-setsize': 0
	};

	var validAriaProperties$1 = ariaProperties;

	var warnedProperties = {};
	var rARIA = new RegExp('^(aria)-[' + DOMProperty_1.ATTRIBUTE_NAME_CHAR + ']*$');
	var rARIACamel = new RegExp('^(aria)[A-Z][' + DOMProperty_1.ATTRIBUTE_NAME_CHAR + ']*$');

	var hasOwnProperty = Object.prototype.hasOwnProperty;

	{
	  var warning$14 = require$$0;

	  var _require$5 = ReactGlobalSharedState_1,
	      ReactComponentTreeHook$1 = _require$5.ReactComponentTreeHook,
	      ReactDebugCurrentFrame$1 = _require$5.ReactDebugCurrentFrame;

	  var getStackAddendumByID = ReactComponentTreeHook$1.getStackAddendumByID;


	  var validAriaProperties = validAriaProperties$1;
	}

	function getStackAddendum(debugID) {
	  if (debugID != null) {
	    // This can only happen on Stack
	    return getStackAddendumByID(debugID);
	  } else {
	    // This can only happen on Fiber / Server
	    var stack = ReactDebugCurrentFrame$1.getStackAddendum();
	    return stack != null ? stack : '';
	  }
	}

	function validateProperty(tagName, name, debugID) {
	  if (hasOwnProperty.call(warnedProperties, name) && warnedProperties[name]) {
	    return true;
	  }

	  if (rARIACamel.test(name)) {
	    var ariaName = 'aria-' + name.slice(4).toLowerCase();
	    var correctName = validAriaProperties.hasOwnProperty(ariaName) ? ariaName : null;

	    // If this is an aria-* attribute, but is not listed in the known DOM
	    // DOM properties, then it is an invalid aria-* attribute.
	    if (correctName == null) {
	      warning$14(false, 'Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.%s', name, getStackAddendum(debugID));
	      warnedProperties[name] = true;
	      return true;
	    }
	    // aria-* attributes should be lowercase; suggest the lowercase version.
	    if (name !== correctName) {
	      warning$14(false, 'Invalid ARIA attribute `%s`. Did you mean `%s`?%s', name, correctName, getStackAddendum(debugID));
	      warnedProperties[name] = true;
	      return true;
	    }
	  }

	  if (rARIA.test(name)) {
	    var lowerCasedName = name.toLowerCase();
	    var standardName = validAriaProperties.hasOwnProperty(lowerCasedName) ? lowerCasedName : null;

	    // If this is an aria-* attribute, but is not listed in the known DOM
	    // DOM properties, then it is an invalid aria-* attribute.
	    if (standardName == null) {
	      warnedProperties[name] = true;
	      return false;
	    }
	    // aria-* attributes should be lowercase; suggest the lowercase version.
	    if (name !== standardName) {
	      warning$14(false, 'Unknown ARIA attribute `%s`. Did you mean `%s`?%s', name, standardName, getStackAddendum(debugID));
	      warnedProperties[name] = true;
	      return true;
	    }
	  }

	  return true;
	}

	function warnInvalidARIAProps(type, props, debugID) {
	  var invalidProps = [];

	  for (var key in props) {
	    var isValid = validateProperty(type, key, debugID);
	    if (!isValid) {
	      invalidProps.push(key);
	    }
	  }

	  var unknownPropString = invalidProps.map(function (prop) {
	    return '`' + prop + '`';
	  }).join(', ');

	  if (invalidProps.length === 1) {
	    warning$14(false, 'Invalid aria prop %s on <%s> tag. ' + 'For details, see https://fb.me/invalid-aria-prop%s', unknownPropString, type, getStackAddendum(debugID));
	  } else if (invalidProps.length > 1) {
	    warning$14(false, 'Invalid aria props %s on <%s> tag. ' + 'For details, see https://fb.me/invalid-aria-prop%s', unknownPropString, type, getStackAddendum(debugID));
	  }
	}

	function validateProperties(type, props, debugID /* Stack only */) {
	  if (isCustomComponent_1(type, props)) {
	    return;
	  }
	  warnInvalidARIAProps(type, props, debugID);
	}

	var ReactDOMInvalidARIAHook$1 = {
	  // Fiber
	  validateProperties: validateProperties,
	  // Stack
	  onBeforeMountComponent: function (debugID, element) {
	    if (true && element != null && typeof element.type === 'string') {
	      validateProperties(element.type, element.props, debugID);
	    }
	  },
	  onBeforeUpdateComponent: function (debugID, element) {
	    if (true && element != null && typeof element.type === 'string') {
	      validateProperties(element.type, element.props, debugID);
	    }
	  }
	};

	var ReactDOMInvalidARIAHook_1 = ReactDOMInvalidARIAHook$1;

	{
	  var warning$15 = require$$0;

	  var _require$6 = ReactGlobalSharedState_1,
	      ReactComponentTreeHook$2 = _require$6.ReactComponentTreeHook,
	      ReactDebugCurrentFrame$2 = _require$6.ReactDebugCurrentFrame;

	  var getStackAddendumByID$1 = ReactComponentTreeHook$2.getStackAddendumByID;
	}

	var didWarnValueNull = false;

	function getStackAddendum$1(debugID) {
	  if (debugID != null) {
	    // This can only happen on Stack
	    return getStackAddendumByID$1(debugID);
	  } else {
	    // This can only happen on Fiber / Server
	    var stack = ReactDebugCurrentFrame$2.getStackAddendum();
	    return stack != null ? stack : '';
	  }
	}

	function validateProperties$1(type, props, debugID /* Stack only */) {
	  if (type !== 'input' && type !== 'textarea' && type !== 'select') {
	    return;
	  }
	  if (props != null && props.value === null && !didWarnValueNull) {
	    warning$15(false, '`value` prop on `%s` should not be null. ' + 'Consider using the empty string to clear the component or `undefined` ' + 'for uncontrolled components.%s', type, getStackAddendum$1(debugID));

	    didWarnValueNull = true;
	  }
	}

	var ReactDOMNullInputValuePropHook$1 = {
	  // Fiber
	  validateProperties: validateProperties$1,
	  // Stack
	  onBeforeMountComponent: function (debugID, element) {
	    if (true && element != null && typeof element.type === 'string') {
	      validateProperties$1(element.type, element.props, debugID);
	    }
	  },
	  onBeforeUpdateComponent: function (debugID, element) {
	    if (true && element != null && typeof element.type === 'string') {
	      validateProperties$1(element.type, element.props, debugID);
	    }
	  }
	};

	var ReactDOMNullInputValuePropHook_1 = ReactDOMNullInputValuePropHook$1;

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * @providesModule possibleStandardNames
	 */

	// When adding attributes to the HTML or SVG whitelist, be sure to
	// also add them to this module to ensure casing and incorrect name
	// warnings.
	var possibleStandardNames$1 = {
	  // HTML
	  accept: 'accept',
	  acceptcharset: 'acceptCharset',
	  'accept-charset': 'acceptCharset',
	  accesskey: 'accessKey',
	  action: 'action',
	  allowfullscreen: 'allowFullScreen',
	  allowtransparency: 'allowTransparency',
	  alt: 'alt',
	  as: 'as',
	  async: 'async',
	  autocapitalize: 'autoCapitalize',
	  autocomplete: 'autoComplete',
	  autocorrect: 'autoCorrect',
	  autofocus: 'autoFocus',
	  autoplay: 'autoPlay',
	  autosave: 'autoSave',
	  capture: 'capture',
	  cellpadding: 'cellPadding',
	  cellspacing: 'cellSpacing',
	  challenge: 'challenge',
	  charset: 'charSet',
	  checked: 'checked',
	  children: 'children',
	  cite: 'cite',
	  'class': 'className',
	  classid: 'classID',
	  classname: 'className',
	  cols: 'cols',
	  colspan: 'colSpan',
	  content: 'content',
	  contenteditable: 'contentEditable',
	  contextmenu: 'contextMenu',
	  controls: 'controls',
	  controlslist: 'controlsList',
	  coords: 'coords',
	  crossorigin: 'crossOrigin',
	  dangerouslysetinnerhtml: 'dangerouslySetInnerHTML',
	  data: 'data',
	  datetime: 'dateTime',
	  'default': 'default',
	  defaultchecked: 'defaultChecked',
	  defaultvalue: 'defaultValue',
	  defer: 'defer',
	  dir: 'dir',
	  disabled: 'disabled',
	  download: 'download',
	  draggable: 'draggable',
	  enctype: 'encType',
	  'for': 'htmlFor',
	  form: 'form',
	  formmethod: 'formMethod',
	  formaction: 'formAction',
	  formenctype: 'formEncType',
	  formnovalidate: 'formNoValidate',
	  formtarget: 'formTarget',
	  frameborder: 'frameBorder',
	  headers: 'headers',
	  height: 'height',
	  hidden: 'hidden',
	  high: 'high',
	  href: 'href',
	  hreflang: 'hrefLang',
	  htmlfor: 'htmlFor',
	  httpequiv: 'httpEquiv',
	  'http-equiv': 'httpEquiv',
	  icon: 'icon',
	  id: 'id',
	  innerhtml: 'innerHTML',
	  inputmode: 'inputMode',
	  integrity: 'integrity',
	  is: 'is',
	  itemid: 'itemID',
	  itemprop: 'itemProp',
	  itemref: 'itemRef',
	  itemscope: 'itemScope',
	  itemtype: 'itemType',
	  keyparams: 'keyParams',
	  keytype: 'keyType',
	  kind: 'kind',
	  label: 'label',
	  lang: 'lang',
	  list: 'list',
	  loop: 'loop',
	  low: 'low',
	  manifest: 'manifest',
	  marginwidth: 'marginWidth',
	  marginheight: 'marginHeight',
	  max: 'max',
	  maxlength: 'maxLength',
	  media: 'media',
	  mediagroup: 'mediaGroup',
	  method: 'method',
	  min: 'min',
	  minlength: 'minLength',
	  multiple: 'multiple',
	  muted: 'muted',
	  name: 'name',
	  nonce: 'nonce',
	  novalidate: 'noValidate',
	  open: 'open',
	  optimum: 'optimum',
	  pattern: 'pattern',
	  placeholder: 'placeholder',
	  playsinline: 'playsInline',
	  poster: 'poster',
	  preload: 'preload',
	  profile: 'profile',
	  radiogroup: 'radioGroup',
	  readonly: 'readOnly',
	  referrerpolicy: 'referrerPolicy',
	  rel: 'rel',
	  required: 'required',
	  reversed: 'reversed',
	  role: 'role',
	  rows: 'rows',
	  rowspan: 'rowSpan',
	  sandbox: 'sandbox',
	  scope: 'scope',
	  scoped: 'scoped',
	  scrolling: 'scrolling',
	  seamless: 'seamless',
	  selected: 'selected',
	  shape: 'shape',
	  size: 'size',
	  sizes: 'sizes',
	  span: 'span',
	  spellcheck: 'spellCheck',
	  src: 'src',
	  srcdoc: 'srcDoc',
	  srclang: 'srcLang',
	  srcset: 'srcSet',
	  start: 'start',
	  step: 'step',
	  style: 'style',
	  summary: 'summary',
	  tabindex: 'tabIndex',
	  target: 'target',
	  title: 'title',
	  type: 'type',
	  usemap: 'useMap',
	  value: 'value',
	  width: 'width',
	  wmode: 'wmode',
	  wrap: 'wrap',

	  // SVG
	  about: 'about',
	  accentheight: 'accentHeight',
	  'accent-height': 'accentHeight',
	  accumulate: 'accumulate',
	  additive: 'additive',
	  alignmentbaseline: 'alignmentBaseline',
	  'alignment-baseline': 'alignmentBaseline',
	  allowreorder: 'allowReorder',
	  alphabetic: 'alphabetic',
	  amplitude: 'amplitude',
	  arabicform: 'arabicForm',
	  'arabic-form': 'arabicForm',
	  ascent: 'ascent',
	  attributename: 'attributeName',
	  attributetype: 'attributeType',
	  autoreverse: 'autoReverse',
	  azimuth: 'azimuth',
	  basefrequency: 'baseFrequency',
	  baselineshift: 'baselineShift',
	  'baseline-shift': 'baselineShift',
	  baseprofile: 'baseProfile',
	  bbox: 'bbox',
	  begin: 'begin',
	  bias: 'bias',
	  by: 'by',
	  calcmode: 'calcMode',
	  capheight: 'capHeight',
	  'cap-height': 'capHeight',
	  clip: 'clip',
	  clippath: 'clipPath',
	  'clip-path': 'clipPath',
	  clippathunits: 'clipPathUnits',
	  cliprule: 'clipRule',
	  'clip-rule': 'clipRule',
	  color: 'color',
	  colorinterpolation: 'colorInterpolation',
	  'color-interpolation': 'colorInterpolation',
	  colorinterpolationfilters: 'colorInterpolationFilters',
	  'color-interpolation-filters': 'colorInterpolationFilters',
	  colorprofile: 'colorProfile',
	  'color-profile': 'colorProfile',
	  colorrendering: 'colorRendering',
	  'color-rendering': 'colorRendering',
	  contentscripttype: 'contentScriptType',
	  contentstyletype: 'contentStyleType',
	  cursor: 'cursor',
	  cx: 'cx',
	  cy: 'cy',
	  d: 'd',
	  datatype: 'datatype',
	  decelerate: 'decelerate',
	  descent: 'descent',
	  diffuseconstant: 'diffuseConstant',
	  direction: 'direction',
	  display: 'display',
	  divisor: 'divisor',
	  dominantbaseline: 'dominantBaseline',
	  'dominant-baseline': 'dominantBaseline',
	  dur: 'dur',
	  dx: 'dx',
	  dy: 'dy',
	  edgemode: 'edgeMode',
	  elevation: 'elevation',
	  enablebackground: 'enableBackground',
	  'enable-background': 'enableBackground',
	  end: 'end',
	  exponent: 'exponent',
	  externalresourcesrequired: 'externalResourcesRequired',
	  fill: 'fill',
	  fillopacity: 'fillOpacity',
	  'fill-opacity': 'fillOpacity',
	  fillrule: 'fillRule',
	  'fill-rule': 'fillRule',
	  filter: 'filter',
	  filterres: 'filterRes',
	  filterunits: 'filterUnits',
	  floodopacity: 'floodOpacity',
	  'flood-opacity': 'floodOpacity',
	  floodcolor: 'floodColor',
	  'flood-color': 'floodColor',
	  focusable: 'focusable',
	  fontfamily: 'fontFamily',
	  'font-family': 'fontFamily',
	  fontsize: 'fontSize',
	  'font-size': 'fontSize',
	  fontsizeadjust: 'fontSizeAdjust',
	  'font-size-adjust': 'fontSizeAdjust',
	  fontstretch: 'fontStretch',
	  'font-stretch': 'fontStretch',
	  fontstyle: 'fontStyle',
	  'font-style': 'fontStyle',
	  fontvariant: 'fontVariant',
	  'font-variant': 'fontVariant',
	  fontweight: 'fontWeight',
	  'font-weight': 'fontWeight',
	  format: 'format',
	  from: 'from',
	  fx: 'fx',
	  fy: 'fy',
	  g1: 'g1',
	  g2: 'g2',
	  glyphname: 'glyphName',
	  'glyph-name': 'glyphName',
	  glyphorientationhorizontal: 'glyphOrientationHorizontal',
	  'glyph-orientation-horizontal': 'glyphOrientationHorizontal',
	  glyphorientationvertical: 'glyphOrientationVertical',
	  'glyph-orientation-vertical': 'glyphOrientationVertical',
	  glyphref: 'glyphRef',
	  gradienttransform: 'gradientTransform',
	  gradientunits: 'gradientUnits',
	  hanging: 'hanging',
	  horizadvx: 'horizAdvX',
	  'horiz-adv-x': 'horizAdvX',
	  horizoriginx: 'horizOriginX',
	  'horiz-origin-x': 'horizOriginX',
	  ideographic: 'ideographic',
	  imagerendering: 'imageRendering',
	  'image-rendering': 'imageRendering',
	  in2: 'in2',
	  'in': 'in',
	  inlist: 'inlist',
	  intercept: 'intercept',
	  k1: 'k1',
	  k2: 'k2',
	  k3: 'k3',
	  k4: 'k4',
	  k: 'k',
	  kernelmatrix: 'kernelMatrix',
	  kernelunitlength: 'kernelUnitLength',
	  kerning: 'kerning',
	  keypoints: 'keyPoints',
	  keysplines: 'keySplines',
	  keytimes: 'keyTimes',
	  lengthadjust: 'lengthAdjust',
	  letterspacing: 'letterSpacing',
	  'letter-spacing': 'letterSpacing',
	  lightingcolor: 'lightingColor',
	  'lighting-color': 'lightingColor',
	  limitingconeangle: 'limitingConeAngle',
	  local: 'local',
	  markerend: 'markerEnd',
	  'marker-end': 'markerEnd',
	  markerheight: 'markerHeight',
	  markermid: 'markerMid',
	  'marker-mid': 'markerMid',
	  markerstart: 'markerStart',
	  'marker-start': 'markerStart',
	  markerunits: 'markerUnits',
	  markerwidth: 'markerWidth',
	  mask: 'mask',
	  maskcontentunits: 'maskContentUnits',
	  maskunits: 'maskUnits',
	  mathematical: 'mathematical',
	  mode: 'mode',
	  numoctaves: 'numOctaves',
	  offset: 'offset',
	  opacity: 'opacity',
	  operator: 'operator',
	  order: 'order',
	  orient: 'orient',
	  orientation: 'orientation',
	  origin: 'origin',
	  overflow: 'overflow',
	  overlineposition: 'overlinePosition',
	  'overline-position': 'overlinePosition',
	  overlinethickness: 'overlineThickness',
	  'overline-thickness': 'overlineThickness',
	  paintorder: 'paintOrder',
	  'paint-order': 'paintOrder',
	  panose1: 'panose1',
	  'panose-1': 'panose1',
	  pathlength: 'pathLength',
	  patterncontentunits: 'patternContentUnits',
	  patterntransform: 'patternTransform',
	  patternunits: 'patternUnits',
	  pointerevents: 'pointerEvents',
	  'pointer-events': 'pointerEvents',
	  points: 'points',
	  pointsatx: 'pointsAtX',
	  pointsaty: 'pointsAtY',
	  pointsatz: 'pointsAtZ',
	  prefix: 'prefix',
	  preservealpha: 'preserveAlpha',
	  preserveaspectratio: 'preserveAspectRatio',
	  primitiveunits: 'primitiveUnits',
	  property: 'property',
	  r: 'r',
	  radius: 'radius',
	  refx: 'refX',
	  refy: 'refY',
	  renderingintent: 'renderingIntent',
	  'rendering-intent': 'renderingIntent',
	  repeatcount: 'repeatCount',
	  repeatdur: 'repeatDur',
	  requiredextensions: 'requiredExtensions',
	  requiredfeatures: 'requiredFeatures',
	  resource: 'resource',
	  restart: 'restart',
	  result: 'result',
	  results: 'results',
	  rotate: 'rotate',
	  rx: 'rx',
	  ry: 'ry',
	  scale: 'scale',
	  security: 'security',
	  seed: 'seed',
	  shaperendering: 'shapeRendering',
	  'shape-rendering': 'shapeRendering',
	  slope: 'slope',
	  spacing: 'spacing',
	  specularconstant: 'specularConstant',
	  specularexponent: 'specularExponent',
	  speed: 'speed',
	  spreadmethod: 'spreadMethod',
	  startoffset: 'startOffset',
	  stddeviation: 'stdDeviation',
	  stemh: 'stemh',
	  stemv: 'stemv',
	  stitchtiles: 'stitchTiles',
	  stopcolor: 'stopColor',
	  'stop-color': 'stopColor',
	  stopopacity: 'stopOpacity',
	  'stop-opacity': 'stopOpacity',
	  strikethroughposition: 'strikethroughPosition',
	  'strikethrough-position': 'strikethroughPosition',
	  strikethroughthickness: 'strikethroughThickness',
	  'strikethrough-thickness': 'strikethroughThickness',
	  string: 'string',
	  stroke: 'stroke',
	  strokedasharray: 'strokeDasharray',
	  'stroke-dasharray': 'strokeDasharray',
	  strokedashoffset: 'strokeDashoffset',
	  'stroke-dashoffset': 'strokeDashoffset',
	  strokelinecap: 'strokeLinecap',
	  'stroke-linecap': 'strokeLinecap',
	  strokelinejoin: 'strokeLinejoin',
	  'stroke-linejoin': 'strokeLinejoin',
	  strokemiterlimit: 'strokeMiterlimit',
	  'stroke-miterlimit': 'strokeMiterlimit',
	  strokewidth: 'strokeWidth',
	  'stroke-width': 'strokeWidth',
	  strokeopacity: 'strokeOpacity',
	  'stroke-opacity': 'strokeOpacity',
	  suppresscontenteditablewarning: 'suppressContentEditableWarning',
	  surfacescale: 'surfaceScale',
	  systemlanguage: 'systemLanguage',
	  tablevalues: 'tableValues',
	  targetx: 'targetX',
	  targety: 'targetY',
	  textanchor: 'textAnchor',
	  'text-anchor': 'textAnchor',
	  textdecoration: 'textDecoration',
	  'text-decoration': 'textDecoration',
	  textlength: 'textLength',
	  textrendering: 'textRendering',
	  'text-rendering': 'textRendering',
	  to: 'to',
	  transform: 'transform',
	  'typeof': 'typeof',
	  u1: 'u1',
	  u2: 'u2',
	  underlineposition: 'underlinePosition',
	  'underline-position': 'underlinePosition',
	  underlinethickness: 'underlineThickness',
	  'underline-thickness': 'underlineThickness',
	  unicode: 'unicode',
	  unicodebidi: 'unicodeBidi',
	  'unicode-bidi': 'unicodeBidi',
	  unicoderange: 'unicodeRange',
	  'unicode-range': 'unicodeRange',
	  unitsperem: 'unitsPerEm',
	  'units-per-em': 'unitsPerEm',
	  unselectable: 'unselectable',
	  valphabetic: 'vAlphabetic',
	  'v-alphabetic': 'vAlphabetic',
	  values: 'values',
	  vectoreffect: 'vectorEffect',
	  'vector-effect': 'vectorEffect',
	  version: 'version',
	  vertadvy: 'vertAdvY',
	  'vert-adv-y': 'vertAdvY',
	  vertoriginx: 'vertOriginX',
	  'vert-origin-x': 'vertOriginX',
	  vertoriginy: 'vertOriginY',
	  'vert-origin-y': 'vertOriginY',
	  vhanging: 'vHanging',
	  'v-hanging': 'vHanging',
	  videographic: 'vIdeographic',
	  'v-ideographic': 'vIdeographic',
	  viewbox: 'viewBox',
	  viewtarget: 'viewTarget',
	  visibility: 'visibility',
	  vmathematical: 'vMathematical',
	  'v-mathematical': 'vMathematical',
	  vocab: 'vocab',
	  widths: 'widths',
	  wordspacing: 'wordSpacing',
	  'word-spacing': 'wordSpacing',
	  writingmode: 'writingMode',
	  'writing-mode': 'writingMode',
	  x1: 'x1',
	  x2: 'x2',
	  x: 'x',
	  xchannelselector: 'xChannelSelector',
	  xheight: 'xHeight',
	  'x-height': 'xHeight',
	  xlinkactuate: 'xlinkActuate',
	  'xlink:actuate': 'xlinkActuate',
	  xlinkarcrole: 'xlinkArcrole',
	  'xlink:arcrole': 'xlinkArcrole',
	  xlinkhref: 'xlinkHref',
	  'xlink:href': 'xlinkHref',
	  xlinkrole: 'xlinkRole',
	  'xlink:role': 'xlinkRole',
	  xlinkshow: 'xlinkShow',
	  'xlink:show': 'xlinkShow',
	  xlinktitle: 'xlinkTitle',
	  'xlink:title': 'xlinkTitle',
	  xlinktype: 'xlinkType',
	  'xlink:type': 'xlinkType',
	  xmlbase: 'xmlBase',
	  'xml:base': 'xmlBase',
	  xmllang: 'xmlLang',
	  'xml:lang': 'xmlLang',
	  xmlns: 'xmlns',
	  'xml:space': 'xmlSpace',
	  xmlnsxlink: 'xmlnsXlink',
	  'xmlns:xlink': 'xmlnsXlink',
	  xmlspace: 'xmlSpace',
	  y1: 'y1',
	  y2: 'y2',
	  y: 'y',
	  ychannelselector: 'yChannelSelector',
	  z: 'z',
	  zoomandpan: 'zoomAndPan'
	};

	var possibleStandardNames_1 = possibleStandardNames$1;

	{
	  var warning$16 = require$$0;

	  var _require$7 = ReactGlobalSharedState_1,
	      ReactComponentTreeHook$3 = _require$7.ReactComponentTreeHook,
	      ReactDebugCurrentFrame$3 = _require$7.ReactDebugCurrentFrame;

	  var getStackAddendumByID$2 = ReactComponentTreeHook$3.getStackAddendumByID;
	}

	function getStackAddendum$2(debugID) {
	  if (debugID != null) {
	    // This can only happen on Stack
	    return getStackAddendumByID$2(debugID);
	  } else {
	    // This can only happen on Fiber / Server
	    var stack = ReactDebugCurrentFrame$3.getStackAddendum();
	    return stack != null ? stack : '';
	  }
	}

	{
	  var warnedProperties$1 = {};
	  var hasOwnProperty$1 = Object.prototype.hasOwnProperty;
	  var EVENT_NAME_REGEX = /^on[A-Z]/;
	  var rARIA$1 = new RegExp('^(aria)-[' + DOMProperty_1.ATTRIBUTE_NAME_CHAR + ']*$');
	  var rARIACamel$1 = new RegExp('^(aria)[A-Z][' + DOMProperty_1.ATTRIBUTE_NAME_CHAR + ']*$');
	  var possibleStandardNames = possibleStandardNames_1;

	  var validateProperty$1 = function (tagName, name, value, debugID) {
	    if (hasOwnProperty$1.call(warnedProperties$1, name) && warnedProperties$1[name]) {
	      return true;
	    }

	    if (EventPluginRegistry_1.registrationNameModules.hasOwnProperty(name)) {
	      return true;
	    }

	    if (EventPluginRegistry_1.plugins.length === 0 && EVENT_NAME_REGEX.test(name)) {
	      // If no event plugins have been injected, we might be in a server environment.
	      // Don't check events in this case.
	      return true;
	    }

	    var lowerCasedName = name.toLowerCase();
	    var registrationName = EventPluginRegistry_1.possibleRegistrationNames.hasOwnProperty(lowerCasedName) ? EventPluginRegistry_1.possibleRegistrationNames[lowerCasedName] : null;

	    if (registrationName != null) {
	      warning$16(false, 'Invalid event handler property `%s`. Did you mean `%s`?%s', name, registrationName, getStackAddendum$2(debugID));
	      warnedProperties$1[name] = true;
	      return true;
	    }

	    if (lowerCasedName.indexOf('on') === 0) {
	      warning$16(false, 'Unknown event handler property `%s`. It will be ignored.%s', name, getStackAddendum$2(debugID));
	      warnedProperties$1[name] = true;
	      return true;
	    }

	    // Let the ARIA attribute hook validate ARIA attributes
	    if (rARIA$1.test(name) || rARIACamel$1.test(name)) {
	      return true;
	    }

	    if (lowerCasedName === 'onfocusin' || lowerCasedName === 'onfocusout') {
	      warning$16(false, 'React uses onFocus and onBlur instead of onFocusIn and onFocusOut. ' + 'All React events are normalized to bubble, so onFocusIn and onFocusOut ' + 'are not needed/supported by React.');
	      warnedProperties$1[name] = true;
	      return true;
	    }

	    if (lowerCasedName === 'innerhtml') {
	      warning$16(false, 'Directly setting property `innerHTML` is not permitted. ' + 'For more information, lookup documentation on `dangerouslySetInnerHTML`.');
	      warnedProperties$1[name] = true;
	      return true;
	    }

	    if (lowerCasedName === 'aria') {
	      warning$16(false, 'The `aria` attribute is reserved for future use in React. ' + 'Pass individual `aria-` attributes instead.');
	      warnedProperties$1[name] = true;
	      return true;
	    }

	    if (lowerCasedName === 'is' && value !== null && value !== undefined && typeof value !== 'string') {
	      warning$16(false, 'Received a `%s` for string attribute `is`. If this is expected, cast ' + 'the value to a string.%s', typeof value, getStackAddendum$2(debugID));
	      warnedProperties$1[name] = true;
	      return true;
	    }

	    if (typeof value === 'number' && isNaN(value)) {
	      warning$16(false, 'Received NaN for numeric attribute `%s`. If this is expected, cast ' + 'the value to a string.%s', name, getStackAddendum$2(debugID));
	      warnedProperties$1[name] = true;
	      return true;
	    }

	    var isReserved = DOMProperty_1.isReservedProp(name);

	    // Known attributes should match the casing specified in the property config.
	    if (possibleStandardNames.hasOwnProperty(lowerCasedName)) {
	      var standardName = possibleStandardNames[lowerCasedName];
	      if (standardName !== name) {
	        warning$16(false, 'Invalid DOM property `%s`. Did you mean `%s`?%s', name, standardName, getStackAddendum$2(debugID));
	        warnedProperties$1[name] = true;
	        return true;
	      }
	    } else if (!isReserved && name !== lowerCasedName) {
	      // Unknown attributes should have lowercase casing since that's how they
	      // will be cased anyway with server rendering.
	      warning$16(false, 'React does not recognize the `%s` prop on a DOM element. If you ' + 'intentionally want it to appear in the DOM as a custom ' + 'attribute, spell it as lowercase `%s` instead. ' + 'If you accidentally passed it from a parent component, remove ' + 'it from the DOM element.%s', name, lowerCasedName, getStackAddendum$2(debugID));
	      warnedProperties$1[name] = true;
	      return true;
	    }

	    if (typeof value === 'boolean') {
	      warning$16(DOMProperty_1.shouldAttributeAcceptBooleanValue(name), 'Received `%s` for non-boolean attribute `%s`. If this is expected, cast ' + 'the value to a string.%s', value, name, getStackAddendum$2(debugID));
	      warnedProperties$1[name] = true;
	      return true;
	    }

	    // Now that we've validated casing, do not validate
	    // data types for reserved props
	    if (isReserved) {
	      return true;
	    }

	    // Warn when a known attribute is a bad type
	    if (!DOMProperty_1.shouldSetAttribute(name, value)) {
	      warnedProperties$1[name] = true;
	      return false;
	    }

	    return true;
	  };
	}

	var warnUnknownProperties = function (type, props, debugID) {
	  var unknownProps = [];
	  for (var key in props) {
	    var isValid = validateProperty$1(type, key, props[key], debugID);
	    if (!isValid) {
	      unknownProps.push(key);
	    }
	  }

	  var unknownPropString = unknownProps.map(function (prop) {
	    return '`' + prop + '`';
	  }).join(', ');
	  if (unknownProps.length === 1) {
	    warning$16(false, 'Invalid value for prop %s on <%s> tag. Either remove it from the element, ' + 'or pass a string or number value to keep it in the DOM. ' + 'For details, see https://fb.me/react-attribute-behavior%s', unknownPropString, type, getStackAddendum$2(debugID));
	  } else if (unknownProps.length > 1) {
	    warning$16(false, 'Invalid values for props %s on <%s> tag. Either remove them from the element, ' + 'or pass a string or number value to keep them in the DOM. ' + 'For details, see https://fb.me/react-attribute-behavior%s', unknownPropString, type, getStackAddendum$2(debugID));
	  }
	};

	function validateProperties$2(type, props, debugID /* Stack only */) {
	  if (isCustomComponent_1(type, props)) {
	    return;
	  }
	  warnUnknownProperties(type, props, debugID);
	}

	var ReactDOMUnknownPropertyHook$1 = {
	  // Fiber
	  validateProperties: validateProperties$2,
	  // Stack
	  onBeforeMountComponent: function (debugID, element) {
	    if (true && element != null && typeof element.type === 'string') {
	      validateProperties$2(element.type, element.props, debugID);
	    }
	  },
	  onBeforeUpdateComponent: function (debugID, element) {
	    if (true && element != null && typeof element.type === 'string') {
	      validateProperties$2(element.type, element.props, debugID);
	    }
	  }
	};

	var ReactDOMUnknownPropertyHook_1 = ReactDOMUnknownPropertyHook$1;

	var getCurrentFiberOwnerName = ReactDebugCurrentFiber_1.getCurrentFiberOwnerName;

	var DOCUMENT_NODE$1 = HTMLNodeType_1.DOCUMENT_NODE;
	var DOCUMENT_FRAGMENT_NODE$1 = HTMLNodeType_1.DOCUMENT_FRAGMENT_NODE;








	{
	  var warning$3 = require$$0;

	  var _require3$1 = ReactDebugCurrentFiber_1,
	      getCurrentFiberStackAddendum = _require3$1.getCurrentFiberStackAddendum;

	  var ReactDOMInvalidARIAHook = ReactDOMInvalidARIAHook_1;
	  var ReactDOMNullInputValuePropHook = ReactDOMNullInputValuePropHook_1;
	  var ReactDOMUnknownPropertyHook = ReactDOMUnknownPropertyHook_1;
	  var validateARIAProperties = ReactDOMInvalidARIAHook.validateProperties;
	  var validateInputProperties = ReactDOMNullInputValuePropHook.validateProperties;
	  var validateUnknownProperties = ReactDOMUnknownPropertyHook.validateProperties;
	}

	var didWarnInvalidHydration = false;
	var didWarnShadyDOM = false;

	var listenTo = ReactBrowserEventEmitter_1.listenTo;
	var registrationNameModules = EventPluginRegistry_1.registrationNameModules;

	var DANGEROUSLY_SET_INNER_HTML = 'dangerouslySetInnerHTML';
	var SUPPRESS_CONTENT_EDITABLE_WARNING = 'suppressContentEditableWarning';
	var CHILDREN = 'children';
	var STYLE = 'style';
	var HTML = '__html';

	var HTML_NAMESPACE$1 = DOMNamespaces.Namespaces.html;
	var getIntrinsicNamespace$1 = DOMNamespaces.getIntrinsicNamespace;


	{
	  var warnedUnknownTags = {
	    // Chrome is the only major browser not shipping <time>. But as of July
	    // 2017 it intends to ship it due to widespread usage. We intentionally
	    // *don't* warn for <time> even if it's unrecognized by Chrome because
	    // it soon will be, and many apps have been using it anyway.
	    time: true
	  };

	  var validatePropertiesInDevelopment = function (type, props) {
	    validateARIAProperties(type, props);
	    validateInputProperties(type, props);
	    validateUnknownProperties(type, props);
	  };

	  var warnForTextDifference = function (serverText, clientText) {
	    if (didWarnInvalidHydration) {
	      return;
	    }
	    didWarnInvalidHydration = true;
	    warning$3(false, 'Text content did not match. Server: "%s" Client: "%s"', serverText, clientText);
	  };

	  var warnForPropDifference = function (propName, serverValue, clientValue) {
	    if (didWarnInvalidHydration) {
	      return;
	    }
	    didWarnInvalidHydration = true;
	    warning$3(false, 'Prop `%s` did not match. Server: %s Client: %s', propName, JSON.stringify(serverValue), JSON.stringify(clientValue));
	  };

	  var warnForExtraAttributes = function (attributeNames) {
	    if (didWarnInvalidHydration) {
	      return;
	    }
	    didWarnInvalidHydration = true;
	    var names = [];
	    attributeNames.forEach(function (name) {
	      names.push(name);
	    });
	    warning$3(false, 'Extra attributes from the server: %s', names);
	  };

	  var warnForInvalidEventListener = function (registrationName, listener) {
	    warning$3(false, 'Expected `%s` listener to be a function, instead got a value of `%s` type.%s', registrationName, typeof listener, getCurrentFiberStackAddendum());
	  };

	  var testDocument;
	  // Parse the HTML and read it back to normalize the HTML string so that it
	  // can be used for comparison.
	  var normalizeHTML = function (parent, html) {
	    if (!testDocument) {
	      testDocument = document.implementation.createHTMLDocument();
	    }
	    var testElement = parent.namespaceURI === HTML_NAMESPACE$1 ? testDocument.createElement(parent.tagName) : testDocument.createElementNS(parent.namespaceURI, parent.tagName);
	    testElement.innerHTML = html;
	    return testElement.innerHTML;
	  };
	}

	function ensureListeningTo(rootContainerElement, registrationName) {
	  var isDocumentOrFragment = rootContainerElement.nodeType === DOCUMENT_NODE$1 || rootContainerElement.nodeType === DOCUMENT_FRAGMENT_NODE$1;
	  var doc = isDocumentOrFragment ? rootContainerElement : rootContainerElement.ownerDocument;
	  listenTo(registrationName, doc);
	}

	function getOwnerDocumentFromRootContainer(rootContainerElement) {
	  return rootContainerElement.nodeType === DOCUMENT_NODE$1 ? rootContainerElement : rootContainerElement.ownerDocument;
	}

	// There are so many media events, it makes sense to just
	// maintain a list rather than create a `trapBubbledEvent` for each
	var mediaEvents = {
	  topAbort: 'abort',
	  topCanPlay: 'canplay',
	  topCanPlayThrough: 'canplaythrough',
	  topDurationChange: 'durationchange',
	  topEmptied: 'emptied',
	  topEncrypted: 'encrypted',
	  topEnded: 'ended',
	  topError: 'error',
	  topLoadedData: 'loadeddata',
	  topLoadedMetadata: 'loadedmetadata',
	  topLoadStart: 'loadstart',
	  topPause: 'pause',
	  topPlay: 'play',
	  topPlaying: 'playing',
	  topProgress: 'progress',
	  topRateChange: 'ratechange',
	  topSeeked: 'seeked',
	  topSeeking: 'seeking',
	  topStalled: 'stalled',
	  topSuspend: 'suspend',
	  topTimeUpdate: 'timeupdate',
	  topVolumeChange: 'volumechange',
	  topWaiting: 'waiting'
	};

	function trapClickOnNonInteractiveElement(node) {
	  // Mobile Safari does not fire properly bubble click events on
	  // non-interactive elements, which means delegated click listeners do not
	  // fire. The workaround for this bug involves attaching an empty click
	  // listener on the target node.
	  // http://www.quirksmode.org/blog/archives/2010/09/click_event_del.html
	  // Just set it using the onclick property so that we don't have to manage any
	  // bookkeeping for it. Not sure if we need to clear it when the listener is
	  // removed.
	  // TODO: Only do this for the relevant Safaris maybe?
	  node.onclick = emptyFunction;
	}

	function setInitialDOMProperties(domElement, rootContainerElement, nextProps, isCustomComponentTag) {
	  for (var propKey in nextProps) {
	    if (!nextProps.hasOwnProperty(propKey)) {
	      continue;
	    }
	    var nextProp = nextProps[propKey];
	    if (propKey === STYLE) {
	      {
	        if (nextProp) {
	          // Freeze the next style object so that we can assume it won't be
	          // mutated. We have already warned for this in the past.
	          Object.freeze(nextProp);
	        }
	      }
	      // Relies on `updateStylesByID` not mutating `styleUpdates`.
	      CSSPropertyOperations_1.setValueForStyles(domElement, nextProp);
	    } else if (propKey === DANGEROUSLY_SET_INNER_HTML) {
	      var nextHtml = nextProp ? nextProp[HTML] : undefined;
	      if (nextHtml != null) {
	        setInnerHTML_1(domElement, nextHtml);
	      }
	    } else if (propKey === CHILDREN) {
	      if (typeof nextProp === 'string') {
	        setTextContent_1(domElement, nextProp);
	      } else if (typeof nextProp === 'number') {
	        setTextContent_1(domElement, '' + nextProp);
	      }
	    } else if (propKey === SUPPRESS_CONTENT_EDITABLE_WARNING) {
	      // Noop
	    } else if (registrationNameModules.hasOwnProperty(propKey)) {
	      if (nextProp != null) {
	        if (true && typeof nextProp !== 'function') {
	          warnForInvalidEventListener(propKey, nextProp);
	        }
	        ensureListeningTo(rootContainerElement, propKey);
	      }
	    } else if (isCustomComponentTag) {
	      DOMPropertyOperations_1.setValueForAttribute(domElement, propKey, nextProp);
	    } else if (nextProp != null) {
	      // If we're updating to null or undefined, we should remove the property
	      // from the DOM node instead of inadvertently setting to a string. This
	      // brings us in line with the same behavior we have on initial render.
	      DOMPropertyOperations_1.setValueForProperty(domElement, propKey, nextProp);
	    }
	  }
	}

	function updateDOMProperties(domElement, updatePayload, wasCustomComponentTag, isCustomComponentTag) {
	  // TODO: Handle wasCustomComponentTag
	  for (var i = 0; i < updatePayload.length; i += 2) {
	    var propKey = updatePayload[i];
	    var propValue = updatePayload[i + 1];
	    if (propKey === STYLE) {
	      CSSPropertyOperations_1.setValueForStyles(domElement, propValue);
	    } else if (propKey === DANGEROUSLY_SET_INNER_HTML) {
	      setInnerHTML_1(domElement, propValue);
	    } else if (propKey === CHILDREN) {
	      setTextContent_1(domElement, propValue);
	    } else if (isCustomComponentTag) {
	      if (propValue != null) {
	        DOMPropertyOperations_1.setValueForAttribute(domElement, propKey, propValue);
	      } else {
	        DOMPropertyOperations_1.deleteValueForAttribute(domElement, propKey);
	      }
	    } else if (propValue != null) {
	      DOMPropertyOperations_1.setValueForProperty(domElement, propKey, propValue);
	    } else {
	      // If we're updating to null or undefined, we should remove the property
	      // from the DOM node instead of inadvertently setting to a string. This
	      // brings us in line with the same behavior we have on initial render.
	      DOMPropertyOperations_1.deleteValueForProperty(domElement, propKey);
	    }
	  }
	}

	var ReactDOMFiberComponent = {
	  createElement: function (type, props, rootContainerElement, parentNamespace) {
	    // We create tags in the namespace of their parent container, except HTML
	    var ownerDocument = getOwnerDocumentFromRootContainer(rootContainerElement);
	    var domElement;
	    var namespaceURI = parentNamespace;
	    if (namespaceURI === HTML_NAMESPACE$1) {
	      namespaceURI = getIntrinsicNamespace$1(type);
	    }
	    if (namespaceURI === HTML_NAMESPACE$1) {
	      {
	        var isCustomComponentTag = isCustomComponent_1(type, props);
	        // Should this check be gated by parent namespace? Not sure we want to
	        // allow <SVG> or <mATH>.
	        warning$3(isCustomComponentTag || type === type.toLowerCase(), '<%s /> is using uppercase HTML. Always use lowercase HTML tags ' + 'in React.', type);
	      }

	      if (type === 'script') {
	        // Create the script via .innerHTML so its "parser-inserted" flag is
	        // set to true and it does not execute
	        var div = ownerDocument.createElement('div');
	        div.innerHTML = '<script><' + '/script>'; // eslint-disable-line
	        // This is guaranteed to yield a script element.
	        var firstChild = div.firstChild;
	        domElement = div.removeChild(firstChild);
	      } else if (typeof props.is === 'string') {
	        // $FlowIssue `createElement` should be updated for Web Components
	        domElement = ownerDocument.createElement(type, { is: props.is });
	      } else {
	        // Separate else branch instead of using `props.is || undefined` above because of a Firefox bug.
	        // See discussion in https://github.com/facebook/react/pull/6896
	        // and discussion in https://bugzilla.mozilla.org/show_bug.cgi?id=1276240
	        domElement = ownerDocument.createElement(type);
	      }
	    } else {
	      domElement = ownerDocument.createElementNS(namespaceURI, type);
	    }

	    {
	      if (namespaceURI === HTML_NAMESPACE$1) {
	        if (!isCustomComponentTag && Object.prototype.toString.call(domElement) === '[object HTMLUnknownElement]' && !Object.prototype.hasOwnProperty.call(warnedUnknownTags, type)) {
	          warnedUnknownTags[type] = true;
	          warning$3(false, 'The tag <%s> is unrecognized in this browser. ' + 'If you meant to render a React component, start its name with ' + 'an uppercase letter.', type);
	        }
	      }
	    }

	    return domElement;
	  },
	  createTextNode: function (text, rootContainerElement) {
	    return getOwnerDocumentFromRootContainer(rootContainerElement).createTextNode(text);
	  },
	  setInitialProperties: function (domElement, tag, rawProps, rootContainerElement) {
	    var isCustomComponentTag = isCustomComponent_1(tag, rawProps);
	    {
	      validatePropertiesInDevelopment(tag, rawProps);
	      if (isCustomComponentTag && !didWarnShadyDOM && domElement.shadyRoot) {
	        warning$3(false, '%s is using shady DOM. Using shady DOM with React can ' + 'cause things to break subtly.', getCurrentFiberOwnerName() || 'A component');
	        didWarnShadyDOM = true;
	      }
	    }

	    // TODO: Make sure that we check isMounted before firing any of these events.
	    var props;
	    switch (tag) {
	      case 'iframe':
	      case 'object':
	        ReactBrowserEventEmitter_1.trapBubbledEvent('topLoad', 'load', domElement);
	        props = rawProps;
	        break;
	      case 'video':
	      case 'audio':
	        // Create listener for each media event
	        for (var event in mediaEvents) {
	          if (mediaEvents.hasOwnProperty(event)) {
	            ReactBrowserEventEmitter_1.trapBubbledEvent(event, mediaEvents[event], domElement);
	          }
	        }
	        props = rawProps;
	        break;
	      case 'source':
	        ReactBrowserEventEmitter_1.trapBubbledEvent('topError', 'error', domElement);
	        props = rawProps;
	        break;
	      case 'img':
	      case 'image':
	        ReactBrowserEventEmitter_1.trapBubbledEvent('topError', 'error', domElement);
	        ReactBrowserEventEmitter_1.trapBubbledEvent('topLoad', 'load', domElement);
	        props = rawProps;
	        break;
	      case 'form':
	        ReactBrowserEventEmitter_1.trapBubbledEvent('topReset', 'reset', domElement);
	        ReactBrowserEventEmitter_1.trapBubbledEvent('topSubmit', 'submit', domElement);
	        props = rawProps;
	        break;
	      case 'details':
	        ReactBrowserEventEmitter_1.trapBubbledEvent('topToggle', 'toggle', domElement);
	        props = rawProps;
	        break;
	      case 'input':
	        ReactDOMFiberInput.initWrapperState(domElement, rawProps);
	        props = ReactDOMFiberInput.getHostProps(domElement, rawProps);
	        ReactBrowserEventEmitter_1.trapBubbledEvent('topInvalid', 'invalid', domElement);
	        // For controlled components we always need to ensure we're listening
	        // to onChange. Even if there is no listener.
	        ensureListeningTo(rootContainerElement, 'onChange');
	        break;
	      case 'option':
	        ReactDOMFiberOption.validateProps(domElement, rawProps);
	        props = ReactDOMFiberOption.getHostProps(domElement, rawProps);
	        break;
	      case 'select':
	        ReactDOMFiberSelect.initWrapperState(domElement, rawProps);
	        props = ReactDOMFiberSelect.getHostProps(domElement, rawProps);
	        ReactBrowserEventEmitter_1.trapBubbledEvent('topInvalid', 'invalid', domElement);
	        // For controlled components we always need to ensure we're listening
	        // to onChange. Even if there is no listener.
	        ensureListeningTo(rootContainerElement, 'onChange');
	        break;
	      case 'textarea':
	        ReactDOMFiberTextarea.initWrapperState(domElement, rawProps);
	        props = ReactDOMFiberTextarea.getHostProps(domElement, rawProps);
	        ReactBrowserEventEmitter_1.trapBubbledEvent('topInvalid', 'invalid', domElement);
	        // For controlled components we always need to ensure we're listening
	        // to onChange. Even if there is no listener.
	        ensureListeningTo(rootContainerElement, 'onChange');
	        break;
	      default:
	        props = rawProps;
	    }

	    assertValidProps_1(tag, props, getCurrentFiberOwnerName);

	    setInitialDOMProperties(domElement, rootContainerElement, props, isCustomComponentTag);

	    switch (tag) {
	      case 'input':
	        // TODO: Make sure we check if this is still unmounted or do any clean
	        // up necessary since we never stop tracking anymore.
	        inputValueTracking_1.track(domElement);
	        ReactDOMFiberInput.postMountWrapper(domElement, rawProps);
	        break;
	      case 'textarea':
	        // TODO: Make sure we check if this is still unmounted or do any clean
	        // up necessary since we never stop tracking anymore.
	        inputValueTracking_1.track(domElement);
	        ReactDOMFiberTextarea.postMountWrapper(domElement, rawProps);
	        break;
	      case 'option':
	        ReactDOMFiberOption.postMountWrapper(domElement, rawProps);
	        break;
	      case 'select':
	        ReactDOMFiberSelect.postMountWrapper(domElement, rawProps);
	        break;
	      default:
	        if (typeof props.onClick === 'function') {
	          // TODO: This cast may not be sound for SVG, MathML or custom elements.
	          trapClickOnNonInteractiveElement(domElement);
	        }
	        break;
	    }
	  },


	  // Calculate the diff between the two objects.
	  diffProperties: function (domElement, tag, lastRawProps, nextRawProps, rootContainerElement) {
	    {
	      validatePropertiesInDevelopment(tag, nextRawProps);
	    }

	    var updatePayload = null;

	    var lastProps;
	    var nextProps;
	    switch (tag) {
	      case 'input':
	        lastProps = ReactDOMFiberInput.getHostProps(domElement, lastRawProps);
	        nextProps = ReactDOMFiberInput.getHostProps(domElement, nextRawProps);
	        updatePayload = [];
	        break;
	      case 'option':
	        lastProps = ReactDOMFiberOption.getHostProps(domElement, lastRawProps);
	        nextProps = ReactDOMFiberOption.getHostProps(domElement, nextRawProps);
	        updatePayload = [];
	        break;
	      case 'select':
	        lastProps = ReactDOMFiberSelect.getHostProps(domElement, lastRawProps);
	        nextProps = ReactDOMFiberSelect.getHostProps(domElement, nextRawProps);
	        updatePayload = [];
	        break;
	      case 'textarea':
	        lastProps = ReactDOMFiberTextarea.getHostProps(domElement, lastRawProps);
	        nextProps = ReactDOMFiberTextarea.getHostProps(domElement, nextRawProps);
	        updatePayload = [];
	        break;
	      default:
	        lastProps = lastRawProps;
	        nextProps = nextRawProps;
	        if (typeof lastProps.onClick !== 'function' && typeof nextProps.onClick === 'function') {
	          // TODO: This cast may not be sound for SVG, MathML or custom elements.
	          trapClickOnNonInteractiveElement(domElement);
	        }
	        break;
	    }

	    assertValidProps_1(tag, nextProps, getCurrentFiberOwnerName);

	    var propKey;
	    var styleName;
	    var styleUpdates = null;
	    for (propKey in lastProps) {
	      if (nextProps.hasOwnProperty(propKey) || !lastProps.hasOwnProperty(propKey) || lastProps[propKey] == null) {
	        continue;
	      }
	      if (propKey === STYLE) {
	        var lastStyle = lastProps[propKey];
	        for (styleName in lastStyle) {
	          if (lastStyle.hasOwnProperty(styleName)) {
	            if (!styleUpdates) {
	              styleUpdates = {};
	            }
	            styleUpdates[styleName] = '';
	          }
	        }
	      } else if (propKey === DANGEROUSLY_SET_INNER_HTML || propKey === CHILDREN) {
	        // Noop. This is handled by the clear text mechanism.
	      } else if (propKey === SUPPRESS_CONTENT_EDITABLE_WARNING) {
	        // Noop
	      } else if (registrationNameModules.hasOwnProperty(propKey)) {
	        // This is a special case. If any listener updates we need to ensure
	        // that the "current" fiber pointer gets updated so we need a commit
	        // to update this element.
	        if (!updatePayload) {
	          updatePayload = [];
	        }
	      } else {
	        // For all other deleted properties we add it to the queue. We use
	        // the whitelist in the commit phase instead.
	        (updatePayload = updatePayload || []).push(propKey, null);
	      }
	    }
	    for (propKey in nextProps) {
	      var nextProp = nextProps[propKey];
	      var lastProp = lastProps != null ? lastProps[propKey] : undefined;
	      if (!nextProps.hasOwnProperty(propKey) || nextProp === lastProp || nextProp == null && lastProp == null) {
	        continue;
	      }
	      if (propKey === STYLE) {
	        {
	          if (nextProp) {
	            // Freeze the next style object so that we can assume it won't be
	            // mutated. We have already warned for this in the past.
	            Object.freeze(nextProp);
	          }
	        }
	        if (lastProp) {
	          // Unset styles on `lastProp` but not on `nextProp`.
	          for (styleName in lastProp) {
	            if (lastProp.hasOwnProperty(styleName) && (!nextProp || !nextProp.hasOwnProperty(styleName))) {
	              if (!styleUpdates) {
	                styleUpdates = {};
	              }
	              styleUpdates[styleName] = '';
	            }
	          }
	          // Update styles that changed since `lastProp`.
	          for (styleName in nextProp) {
	            if (nextProp.hasOwnProperty(styleName) && lastProp[styleName] !== nextProp[styleName]) {
	              if (!styleUpdates) {
	                styleUpdates = {};
	              }
	              styleUpdates[styleName] = nextProp[styleName];
	            }
	          }
	        } else {
	          // Relies on `updateStylesByID` not mutating `styleUpdates`.
	          if (!styleUpdates) {
	            if (!updatePayload) {
	              updatePayload = [];
	            }
	            updatePayload.push(propKey, styleUpdates);
	          }
	          styleUpdates = nextProp;
	        }
	      } else if (propKey === DANGEROUSLY_SET_INNER_HTML) {
	        var nextHtml = nextProp ? nextProp[HTML] : undefined;
	        var lastHtml = lastProp ? lastProp[HTML] : undefined;
	        if (nextHtml != null) {
	          if (lastHtml !== nextHtml) {
	            (updatePayload = updatePayload || []).push(propKey, '' + nextHtml);
	          }
	        } else {
	          // TODO: It might be too late to clear this if we have children
	          // inserted already.
	        }
	      } else if (propKey === CHILDREN) {
	        if (lastProp !== nextProp && (typeof nextProp === 'string' || typeof nextProp === 'number')) {
	          (updatePayload = updatePayload || []).push(propKey, '' + nextProp);
	        }
	      } else if (propKey === SUPPRESS_CONTENT_EDITABLE_WARNING) {
	        // Noop
	      } else if (registrationNameModules.hasOwnProperty(propKey)) {
	        if (nextProp != null) {
	          // We eagerly listen to this even though we haven't committed yet.
	          if (true && typeof nextProp !== 'function') {
	            warnForInvalidEventListener(propKey, nextProp);
	          }
	          ensureListeningTo(rootContainerElement, propKey);
	        }
	        if (!updatePayload && lastProp !== nextProp) {
	          // This is a special case. If any listener updates we need to ensure
	          // that the "current" props pointer gets updated so we need a commit
	          // to update this element.
	          updatePayload = [];
	        }
	      } else {
	        // For any other property we always add it to the queue and then we
	        // filter it out using the whitelist during the commit.
	        (updatePayload = updatePayload || []).push(propKey, nextProp);
	      }
	    }
	    if (styleUpdates) {
	      (updatePayload = updatePayload || []).push(STYLE, styleUpdates);
	    }
	    return updatePayload;
	  },


	  // Apply the diff.
	  updateProperties: function (domElement, updatePayload, tag, lastRawProps, nextRawProps) {
	    var wasCustomComponentTag = isCustomComponent_1(tag, lastRawProps);
	    var isCustomComponentTag = isCustomComponent_1(tag, nextRawProps);
	    // Apply the diff.
	    updateDOMProperties(domElement, updatePayload, wasCustomComponentTag, isCustomComponentTag);

	    // TODO: Ensure that an update gets scheduled if any of the special props
	    // changed.
	    switch (tag) {
	      case 'input':
	        // Update the wrapper around inputs *after* updating props. This has to
	        // happen after `updateDOMProperties`. Otherwise HTML5 input validations
	        // raise warnings and prevent the new value from being assigned.
	        ReactDOMFiberInput.updateWrapper(domElement, nextRawProps);

	        // We also check that we haven't missed a value update, such as a
	        // Radio group shifting the checked value to another named radio input.
	        inputValueTracking_1.updateValueIfChanged(domElement);
	        break;
	      case 'textarea':
	        ReactDOMFiberTextarea.updateWrapper(domElement, nextRawProps);
	        break;
	      case 'select':
	        // <select> value update needs to occur after <option> children
	        // reconciliation
	        ReactDOMFiberSelect.postUpdateWrapper(domElement, nextRawProps);
	        break;
	    }
	  },
	  diffHydratedProperties: function (domElement, tag, rawProps, parentNamespace, rootContainerElement) {
	    {
	      var isCustomComponentTag = isCustomComponent_1(tag, rawProps);
	      validatePropertiesInDevelopment(tag, rawProps);
	      if (isCustomComponentTag && !didWarnShadyDOM && domElement.shadyRoot) {
	        warning$3(false, '%s is using shady DOM. Using shady DOM with React can ' + 'cause things to break subtly.', getCurrentFiberOwnerName() || 'A component');
	        didWarnShadyDOM = true;
	      }
	    }

	    // TODO: Make sure that we check isMounted before firing any of these events.
	    switch (tag) {
	      case 'iframe':
	      case 'object':
	        ReactBrowserEventEmitter_1.trapBubbledEvent('topLoad', 'load', domElement);
	        break;
	      case 'video':
	      case 'audio':
	        // Create listener for each media event
	        for (var event in mediaEvents) {
	          if (mediaEvents.hasOwnProperty(event)) {
	            ReactBrowserEventEmitter_1.trapBubbledEvent(event, mediaEvents[event], domElement);
	          }
	        }
	        break;
	      case 'source':
	        ReactBrowserEventEmitter_1.trapBubbledEvent('topError', 'error', domElement);
	        break;
	      case 'img':
	      case 'image':
	        ReactBrowserEventEmitter_1.trapBubbledEvent('topError', 'error', domElement);
	        ReactBrowserEventEmitter_1.trapBubbledEvent('topLoad', 'load', domElement);
	        break;
	      case 'form':
	        ReactBrowserEventEmitter_1.trapBubbledEvent('topReset', 'reset', domElement);
	        ReactBrowserEventEmitter_1.trapBubbledEvent('topSubmit', 'submit', domElement);
	        break;
	      case 'details':
	        ReactBrowserEventEmitter_1.trapBubbledEvent('topToggle', 'toggle', domElement);
	        break;
	      case 'input':
	        ReactDOMFiberInput.initWrapperState(domElement, rawProps);
	        ReactBrowserEventEmitter_1.trapBubbledEvent('topInvalid', 'invalid', domElement);
	        // For controlled components we always need to ensure we're listening
	        // to onChange. Even if there is no listener.
	        ensureListeningTo(rootContainerElement, 'onChange');
	        break;
	      case 'option':
	        ReactDOMFiberOption.validateProps(domElement, rawProps);
	        break;
	      case 'select':
	        ReactDOMFiberSelect.initWrapperState(domElement, rawProps);
	        ReactBrowserEventEmitter_1.trapBubbledEvent('topInvalid', 'invalid', domElement);
	        // For controlled components we always need to ensure we're listening
	        // to onChange. Even if there is no listener.
	        ensureListeningTo(rootContainerElement, 'onChange');
	        break;
	      case 'textarea':
	        ReactDOMFiberTextarea.initWrapperState(domElement, rawProps);
	        ReactBrowserEventEmitter_1.trapBubbledEvent('topInvalid', 'invalid', domElement);
	        // For controlled components we always need to ensure we're listening
	        // to onChange. Even if there is no listener.
	        ensureListeningTo(rootContainerElement, 'onChange');
	        break;
	    }

	    assertValidProps_1(tag, rawProps, getCurrentFiberOwnerName);

	    {
	      var extraAttributeNames = new Set();
	      var attributes = domElement.attributes;
	      for (var i = 0; i < attributes.length; i++) {
	        var name = attributes[i].name.toLowerCase();
	        switch (name) {
	          // Built-in SSR attribute is whitelisted
	          case 'data-reactroot':
	            break;
	          // Controlled attributes are not validated
	          // TODO: Only ignore them on controlled tags.
	          case 'value':
	            break;
	          case 'checked':
	            break;
	          case 'selected':
	            break;
	          default:
	            // Intentionally use the original name.
	            // See discussion in https://github.com/facebook/react/pull/10676.
	            extraAttributeNames.add(attributes[i].name);
	        }
	      }
	    }

	    var updatePayload = null;
	    for (var propKey in rawProps) {
	      if (!rawProps.hasOwnProperty(propKey)) {
	        continue;
	      }
	      var nextProp = rawProps[propKey];
	      if (propKey === CHILDREN) {
	        // For text content children we compare against textContent. This
	        // might match additional HTML that is hidden when we read it using
	        // textContent. E.g. "foo" will match "f<span>oo</span>" but that still
	        // satisfies our requirement. Our requirement is not to produce perfect
	        // HTML and attributes. Ideally we should preserve structure but it's
	        // ok not to if the visible content is still enough to indicate what
	        // even listeners these nodes might be wired up to.
	        // TODO: Warn if there is more than a single textNode as a child.
	        // TODO: Should we use domElement.firstChild.nodeValue to compare?
	        if (typeof nextProp === 'string') {
	          if (domElement.textContent !== nextProp) {
	            {
	              warnForTextDifference(domElement.textContent, nextProp);
	            }
	            updatePayload = [CHILDREN, nextProp];
	          }
	        } else if (typeof nextProp === 'number') {
	          if (domElement.textContent !== '' + nextProp) {
	            {
	              warnForTextDifference(domElement.textContent, nextProp);
	            }
	            updatePayload = [CHILDREN, '' + nextProp];
	          }
	        }
	      } else if (registrationNameModules.hasOwnProperty(propKey)) {
	        if (nextProp != null) {
	          if (true && typeof nextProp !== 'function') {
	            warnForInvalidEventListener(propKey, nextProp);
	          }
	          ensureListeningTo(rootContainerElement, propKey);
	        }
	      } else {
	        // Validate that the properties correspond to their expected values.
	        var serverValue;
	        var propertyInfo;
	        if (propKey === SUPPRESS_CONTENT_EDITABLE_WARNING ||
	        // Controlled attributes are not validated
	        // TODO: Only ignore them on controlled tags.
	        propKey === 'value' || propKey === 'checked' || propKey === 'selected') {
	          // Noop
	        } else if (propKey === DANGEROUSLY_SET_INNER_HTML) {
	          var rawHtml = nextProp ? nextProp[HTML] || '' : '';
	          var serverHTML = domElement.innerHTML;
	          var expectedHTML = normalizeHTML(domElement, rawHtml);
	          if (expectedHTML !== serverHTML) {
	            warnForPropDifference(propKey, serverHTML, expectedHTML);
	          }
	        } else if (propKey === STYLE) {
	          // $FlowFixMe - Should be inferred as not undefined.
	          extraAttributeNames['delete'](propKey);
	          var expectedStyle = CSSPropertyOperations_1.createDangerousStringForStyles(nextProp);
	          serverValue = domElement.getAttribute('style');
	          if (expectedStyle !== serverValue) {
	            warnForPropDifference(propKey, serverValue, expectedStyle);
	          }
	        } else if (isCustomComponentTag) {
	          // $FlowFixMe - Should be inferred as not undefined.
	          extraAttributeNames['delete'](propKey.toLowerCase());
	          serverValue = DOMPropertyOperations_1.getValueForAttribute(domElement, propKey, nextProp);

	          if (nextProp !== serverValue) {
	            warnForPropDifference(propKey, serverValue, nextProp);
	          }
	        } else if (DOMProperty_1.shouldSetAttribute(propKey, nextProp)) {
	          if (propertyInfo = DOMProperty_1.getPropertyInfo(propKey)) {
	            // $FlowFixMe - Should be inferred as not undefined.
	            extraAttributeNames['delete'](propertyInfo.attributeName);
	            serverValue = DOMPropertyOperations_1.getValueForProperty(domElement, propKey, nextProp);
	          } else {
	            var ownNamespace = parentNamespace;
	            if (ownNamespace === HTML_NAMESPACE$1) {
	              ownNamespace = getIntrinsicNamespace$1(tag);
	            }
	            if (ownNamespace === HTML_NAMESPACE$1) {
	              // $FlowFixMe - Should be inferred as not undefined.
	              extraAttributeNames['delete'](propKey.toLowerCase());
	            } else {
	              // $FlowFixMe - Should be inferred as not undefined.
	              extraAttributeNames['delete'](propKey);
	            }
	            serverValue = DOMPropertyOperations_1.getValueForAttribute(domElement, propKey, nextProp);
	          }

	          if (nextProp !== serverValue) {
	            warnForPropDifference(propKey, serverValue, nextProp);
	          }
	        }
	      }
	    }

	    {
	      // $FlowFixMe - Should be inferred as not undefined.
	      if (extraAttributeNames.size > 0) {
	        // $FlowFixMe - Should be inferred as not undefined.
	        warnForExtraAttributes(extraAttributeNames);
	      }
	    }

	    switch (tag) {
	      case 'input':
	        // TODO: Make sure we check if this is still unmounted or do any clean
	        // up necessary since we never stop tracking anymore.
	        inputValueTracking_1.track(domElement);
	        ReactDOMFiberInput.postMountWrapper(domElement, rawProps);
	        break;
	      case 'textarea':
	        // TODO: Make sure we check if this is still unmounted or do any clean
	        // up necessary since we never stop tracking anymore.
	        inputValueTracking_1.track(domElement);
	        ReactDOMFiberTextarea.postMountWrapper(domElement, rawProps);
	        break;
	      case 'select':
	      case 'option':
	        // For input and textarea we current always set the value property at
	        // post mount to force it to diverge from attributes. However, for
	        // option and select we don't quite do the same thing and select
	        // is not resilient to the DOM state changing so we don't do that here.
	        // TODO: Consider not doing this for input and textarea.
	        break;
	      default:
	        if (typeof rawProps.onClick === 'function') {
	          // TODO: This cast may not be sound for SVG, MathML or custom elements.
	          trapClickOnNonInteractiveElement(domElement);
	        }
	        break;
	    }

	    return updatePayload;
	  },
	  diffHydratedText: function (textNode, text) {
	    var isDifferent = textNode.nodeValue !== text;
	    {
	      if (isDifferent) {
	        warnForTextDifference(textNode.nodeValue, text);
	      }
	    }
	    return isDifferent;
	  },
	  warnForDeletedHydratableElement: function (parentNode, child) {
	    {
	      if (didWarnInvalidHydration) {
	        return;
	      }
	      didWarnInvalidHydration = true;
	      warning$3(false, 'Did not expect server HTML to contain a <%s> in <%s>.', child.nodeName.toLowerCase(), parentNode.nodeName.toLowerCase());
	    }
	  },
	  warnForDeletedHydratableText: function (parentNode, child) {
	    {
	      if (didWarnInvalidHydration) {
	        return;
	      }
	      didWarnInvalidHydration = true;
	      warning$3(false, 'Did not expect server HTML to contain the text node "%s" in <%s>.', child.nodeValue, parentNode.nodeName.toLowerCase());
	    }
	  },
	  warnForInsertedHydratedElement: function (parentNode, tag, props) {
	    {
	      if (didWarnInvalidHydration) {
	        return;
	      }
	      didWarnInvalidHydration = true;
	      warning$3(false, 'Expected server HTML to contain a matching <%s> in <%s>.', tag, parentNode.nodeName.toLowerCase());
	    }
	  },
	  warnForInsertedHydratedText: function (parentNode, text) {
	    {
	      if (text === '') {
	        // We expect to insert empty text nodes since they're not represented in
	        // the HTML.
	        // TODO: Remove this special case if we can just avoid inserting empty
	        // text nodes.
	        return;
	      }
	      if (didWarnInvalidHydration) {
	        return;
	      }
	      didWarnInvalidHydration = true;
	      warning$3(false, 'Expected server HTML to contain a matching text node for "%s" in <%s>.', text, parentNode.nodeName.toLowerCase());
	    }
	  },
	  restoreControlledState: function (domElement, tag, props) {
	    switch (tag) {
	      case 'input':
	        ReactDOMFiberInput.restoreControlledState(domElement, props);
	        return;
	      case 'textarea':
	        ReactDOMFiberTextarea.restoreControlledState(domElement, props);
	        return;
	      case 'select':
	        ReactDOMFiberSelect.restoreControlledState(domElement, props);
	        return;
	    }
	  }
	};

	var ReactDOMFiberComponent_1 = ReactDOMFiberComponent;

	// This is a built-in polyfill for requestIdleCallback. It works by scheduling
	// a requestAnimationFrame, storing the time for the start of the frame, then
	// scheduling a postMessage which gets scheduled after paint. Within the
	// postMessage handler do as much work as possible until time + frame rate.
	// By separating the idle call into a separate event tick we ensure that
	// layout, paint and other browser work is counted against the available time.
	// The frame rate is dynamically adjusted.



	{
	  var warning$17 = require$$0;

	  if (ExecutionEnvironment.canUseDOM && typeof requestAnimationFrame !== 'function') {
	    warning$17(false, 'React depends on requestAnimationFrame. Make sure that you load a ' + 'polyfill in older browsers. http://fb.me/react-polyfills');
	  }
	}

	// TODO: There's no way to cancel, because Fiber doesn't atm.
	var rIC = void 0;

	if (!ExecutionEnvironment.canUseDOM) {
	  rIC = function (frameCallback) {
	    setTimeout(function () {
	      frameCallback({
	        timeRemaining: function () {
	          return Infinity;
	        }
	      });
	    });
	    return 0;
	  };
	} else if (typeof requestIdleCallback !== 'function') {
	  // Polyfill requestIdleCallback.

	  var scheduledRAFCallback = null;
	  var scheduledRICCallback = null;

	  var isIdleScheduled = false;
	  var isAnimationFrameScheduled = false;

	  var frameDeadline = 0;
	  // We start out assuming that we run at 30fps but then the heuristic tracking
	  // will adjust this value to a faster fps if we get more frequent animation
	  // frames.
	  var previousFrameTime = 33;
	  var activeFrameTime = 33;

	  var frameDeadlineObject = {
	    timeRemaining: typeof performance === 'object' && typeof performance.now === 'function' ? function () {
	      // We assume that if we have a performance timer that the rAF callback
	      // gets a performance timer value. Not sure if this is always true.
	      return frameDeadline - performance.now();
	    } : function () {
	      // As a fallback we use Date.now.
	      return frameDeadline - Date.now();
	    }
	  };

	  // We use the postMessage trick to defer idle work until after the repaint.
	  var messageKey = '__reactIdleCallback$' + Math.random().toString(36).slice(2);
	  var idleTick = function (event) {
	    if (event.source !== window || event.data !== messageKey) {
	      return;
	    }
	    isIdleScheduled = false;
	    var callback = scheduledRICCallback;
	    scheduledRICCallback = null;
	    if (callback !== null) {
	      callback(frameDeadlineObject);
	    }
	  };
	  // Assumes that we have addEventListener in this environment. Might need
	  // something better for old IE.
	  window.addEventListener('message', idleTick, false);

	  var animationTick = function (rafTime) {
	    isAnimationFrameScheduled = false;
	    var nextFrameTime = rafTime - frameDeadline + activeFrameTime;
	    if (nextFrameTime < activeFrameTime && previousFrameTime < activeFrameTime) {
	      if (nextFrameTime < 8) {
	        // Defensive coding. We don't support higher frame rates than 120hz.
	        // If we get lower than that, it is probably a bug.
	        nextFrameTime = 8;
	      }
	      // If one frame goes long, then the next one can be short to catch up.
	      // If two frames are short in a row, then that's an indication that we
	      // actually have a higher frame rate than what we're currently optimizing.
	      // We adjust our heuristic dynamically accordingly. For example, if we're
	      // running on 120hz display or 90hz VR display.
	      // Take the max of the two in case one of them was an anomaly due to
	      // missed frame deadlines.
	      activeFrameTime = nextFrameTime < previousFrameTime ? previousFrameTime : nextFrameTime;
	    } else {
	      previousFrameTime = nextFrameTime;
	    }
	    frameDeadline = rafTime + activeFrameTime;
	    if (!isIdleScheduled) {
	      isIdleScheduled = true;
	      window.postMessage(messageKey, '*');
	    }
	    var callback = scheduledRAFCallback;
	    scheduledRAFCallback = null;
	    if (callback !== null) {
	      callback(rafTime);
	    }
	  };

	  rIC = function (callback) {
	    // This assumes that we only schedule one callback at a time because that's
	    // how Fiber uses it.
	    scheduledRICCallback = callback;
	    if (!isAnimationFrameScheduled) {
	      // If rAF didn't already schedule one, we need to schedule a frame.
	      // TODO: If this rAF doesn't materialize because the browser throttles, we
	      // might want to still have setTimeout trigger rIC as a backup to ensure
	      // that we keep performing work.
	      isAnimationFrameScheduled = true;
	      requestAnimationFrame(animationTick);
	    }
	    return 0;
	  };
	} else {
	  rIC = requestIdleCallback;
	}

	var rIC_1 = rIC;

	var ReactDOMFrameScheduling = {
		rIC: rIC_1
	};

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * @providesModule ReactFeatureFlags
	 * 
	 */

	var ReactFeatureFlags = {
	  enableAsyncSubtreeAPI: true
	};

	var ReactFeatureFlags_1 = ReactFeatureFlags;

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * @providesModule ReactPriorityLevel
	 * 
	 */

	var ReactPriorityLevel = {
	  NoWork: 0, // No work is pending.
	  SynchronousPriority: 1, // For controlled text inputs. Synchronous side-effects.
	  TaskPriority: 2, // Completes at the end of the current tick.
	  HighPriority: 3, // Interaction that needs to complete pretty soon to feel responsive.
	  LowPriority: 4, // Data fetching, or result from updating stores.
	  OffscreenPriority: 5 };

	var CallbackEffect = ReactTypeOfSideEffect.Callback;

	var NoWork = ReactPriorityLevel.NoWork;
	var SynchronousPriority = ReactPriorityLevel.SynchronousPriority;
	var TaskPriority = ReactPriorityLevel.TaskPriority;

	var ClassComponent$2 = ReactTypeOfWork.ClassComponent;
	var HostRoot$2 = ReactTypeOfWork.HostRoot;


	{
	  var warning$19 = require$$0;
	}

	// Callbacks are not validated until invocation


	// Singly linked-list of updates. When an update is scheduled, it is added to
	// the queue of the current fiber and the work-in-progress fiber. The two queues
	// are separate but they share a persistent structure.
	//
	// During reconciliation, updates are removed from the work-in-progress fiber,
	// but they remain on the current fiber. That ensures that if a work-in-progress
	// is aborted, the aborted updates are recovered by cloning from current.
	//
	// The work-in-progress queue is always a subset of the current queue.
	//
	// When the tree is committed, the work-in-progress becomes the current.


	var _queue1 = void 0;
	var _queue2 = void 0;

	function comparePriority(a, b) {
	  // When comparing update priorities, treat sync and Task work as equal.
	  // TODO: Could we avoid the need for this by always coercing sync priority
	  // to Task when scheduling an update?
	  if ((a === TaskPriority || a === SynchronousPriority) && (b === TaskPriority || b === SynchronousPriority)) {
	    return 0;
	  }
	  if (a === NoWork && b !== NoWork) {
	    return -255;
	  }
	  if (a !== NoWork && b === NoWork) {
	    return 255;
	  }
	  return a - b;
	}

	function createUpdateQueue() {
	  var queue = {
	    first: null,
	    last: null,
	    hasForceUpdate: false,
	    callbackList: null
	  };
	  {
	    queue.isProcessing = false;
	  }
	  return queue;
	}

	function cloneUpdate(update) {
	  return {
	    priorityLevel: update.priorityLevel,
	    partialState: update.partialState,
	    callback: update.callback,
	    isReplace: update.isReplace,
	    isForced: update.isForced,
	    isTopLevelUnmount: update.isTopLevelUnmount,
	    next: null
	  };
	}

	function insertUpdateIntoQueue(queue, update, insertAfter, insertBefore) {
	  if (insertAfter !== null) {
	    insertAfter.next = update;
	  } else {
	    // This is the first item in the queue.
	    update.next = queue.first;
	    queue.first = update;
	  }

	  if (insertBefore !== null) {
	    update.next = insertBefore;
	  } else {
	    // This is the last item in the queue.
	    queue.last = update;
	  }
	}

	// Returns the update after which the incoming update should be inserted into
	// the queue, or null if it should be inserted at beginning.
	function findInsertionPosition(queue, update) {
	  var priorityLevel = update.priorityLevel;
	  var insertAfter = null;
	  var insertBefore = null;
	  if (queue.last !== null && comparePriority(queue.last.priorityLevel, priorityLevel) <= 0) {
	    // Fast path for the common case where the update should be inserted at
	    // the end of the queue.
	    insertAfter = queue.last;
	  } else {
	    insertBefore = queue.first;
	    while (insertBefore !== null && comparePriority(insertBefore.priorityLevel, priorityLevel) <= 0) {
	      insertAfter = insertBefore;
	      insertBefore = insertBefore.next;
	    }
	  }
	  return insertAfter;
	}

	function ensureUpdateQueues(fiber) {
	  var alternateFiber = fiber.alternate;

	  var queue1 = fiber.updateQueue;
	  if (queue1 === null) {
	    queue1 = fiber.updateQueue = createUpdateQueue();
	  }

	  var queue2 = void 0;
	  if (alternateFiber !== null) {
	    queue2 = alternateFiber.updateQueue;
	    if (queue2 === null) {
	      queue2 = alternateFiber.updateQueue = createUpdateQueue();
	    }
	  } else {
	    queue2 = null;
	  }

	  _queue1 = queue1;
	  // Return null if there is no alternate queue, or if its queue is the same.
	  _queue2 = queue2 !== queue1 ? queue2 : null;
	}

	// The work-in-progress queue is a subset of the current queue (if it exists).
	// We need to insert the incoming update into both lists. However, it's possible
	// that the correct position in one list will be different from the position in
	// the other. Consider the following case:
	//
	//     Current:             3-5-6
	//     Work-in-progress:        6
	//
	// Then we receive an update with priority 4 and insert it into each list:
	//
	//     Current:             3-4-5-6
	//     Work-in-progress:        4-6
	//
	// In the current queue, the new update's `next` pointer points to the update
	// with priority 5. But in the work-in-progress queue, the pointer points to the
	// update with priority 6. Because these two queues share the same persistent
	// data structure, this won't do. (This can only happen when the incoming update
	// has higher priority than all the updates in the work-in-progress queue.)
	//
	// To solve this, in the case where the incoming update needs to be inserted
	// into two different positions, we'll make a clone of the update and insert
	// each copy into a separate queue. This forks the list while maintaining a
	// persistent structure, because the update that is added to the work-in-progress
	// is always added to the front of the list.
	//
	// However, if incoming update is inserted into the same position of both lists,
	// we shouldn't make a copy.
	//
	// If the update is cloned, it returns the cloned update.
	function insertUpdate(fiber, update) {
	  // We'll have at least one and at most two distinct update queues.
	  ensureUpdateQueues(fiber);
	  var queue1 = _queue1;
	  var queue2 = _queue2;

	  // Warn if an update is scheduled from inside an updater function.
	  {
	    if (queue1.isProcessing || queue2 !== null && queue2.isProcessing) {
	      warning$19(false, 'An update (setState, replaceState, or forceUpdate) was scheduled ' + 'from inside an update function. Update functions should be pure, ' + 'with zero side-effects. Consider using componentDidUpdate or a ' + 'callback.');
	    }
	  }

	  // Find the insertion position in the first queue.
	  var insertAfter1 = findInsertionPosition(queue1, update);
	  var insertBefore1 = insertAfter1 !== null ? insertAfter1.next : queue1.first;

	  if (queue2 === null) {
	    // If there's no alternate queue, there's nothing else to do but insert.
	    insertUpdateIntoQueue(queue1, update, insertAfter1, insertBefore1);
	    return null;
	  }

	  // If there is an alternate queue, find the insertion position.
	  var insertAfter2 = findInsertionPosition(queue2, update);
	  var insertBefore2 = insertAfter2 !== null ? insertAfter2.next : queue2.first;

	  // Now we can insert into the first queue. This must come after finding both
	  // insertion positions because it mutates the list.
	  insertUpdateIntoQueue(queue1, update, insertAfter1, insertBefore1);

	  // See if the insertion positions are equal. Be careful to only compare
	  // non-null values.
	  if (insertBefore1 === insertBefore2 && insertBefore1 !== null || insertAfter1 === insertAfter2 && insertAfter1 !== null) {
	    // The insertion positions are the same, so when we inserted into the first
	    // queue, it also inserted into the alternate. All we need to do is update
	    // the alternate queue's `first` and `last` pointers, in case they
	    // have changed.
	    if (insertAfter2 === null) {
	      queue2.first = update;
	    }
	    if (insertBefore2 === null) {
	      queue2.last = null;
	    }
	    return null;
	  } else {
	    // The insertion positions are different, so we need to clone the update and
	    // insert the clone into the alternate queue.
	    var update2 = cloneUpdate(update);
	    insertUpdateIntoQueue(queue2, update2, insertAfter2, insertBefore2);
	    return update2;
	  }
	}

	function addUpdate(fiber, partialState, callback, priorityLevel) {
	  var update = {
	    priorityLevel: priorityLevel,
	    partialState: partialState,
	    callback: callback,
	    isReplace: false,
	    isForced: false,
	    isTopLevelUnmount: false,
	    next: null
	  };
	  insertUpdate(fiber, update);
	}
	var addUpdate_1 = addUpdate;

	function addReplaceUpdate(fiber, state, callback, priorityLevel) {
	  var update = {
	    priorityLevel: priorityLevel,
	    partialState: state,
	    callback: callback,
	    isReplace: true,
	    isForced: false,
	    isTopLevelUnmount: false,
	    next: null
	  };
	  insertUpdate(fiber, update);
	}
	var addReplaceUpdate_1 = addReplaceUpdate;

	function addForceUpdate(fiber, callback, priorityLevel) {
	  var update = {
	    priorityLevel: priorityLevel,
	    partialState: null,
	    callback: callback,
	    isReplace: false,
	    isForced: true,
	    isTopLevelUnmount: false,
	    next: null
	  };
	  insertUpdate(fiber, update);
	}
	var addForceUpdate_1 = addForceUpdate;

	function getUpdatePriority(fiber) {
	  var updateQueue = fiber.updateQueue;
	  if (updateQueue === null) {
	    return NoWork;
	  }
	  if (fiber.tag !== ClassComponent$2 && fiber.tag !== HostRoot$2) {
	    return NoWork;
	  }
	  return updateQueue.first !== null ? updateQueue.first.priorityLevel : NoWork;
	}
	var getUpdatePriority_1 = getUpdatePriority;

	function addTopLevelUpdate$1(fiber, partialState, callback, priorityLevel) {
	  var isTopLevelUnmount = partialState.element === null;

	  var update = {
	    priorityLevel: priorityLevel,
	    partialState: partialState,
	    callback: callback,
	    isReplace: false,
	    isForced: false,
	    isTopLevelUnmount: isTopLevelUnmount,
	    next: null
	  };
	  var update2 = insertUpdate(fiber, update);

	  if (isTopLevelUnmount) {
	    // TODO: Redesign the top-level mount/update/unmount API to avoid this
	    // special case.
	    var queue1 = _queue1;
	    var queue2 = _queue2;

	    // Drop all updates that are lower-priority, so that the tree is not
	    // remounted. We need to do this for both queues.
	    if (queue1 !== null && update.next !== null) {
	      update.next = null;
	      queue1.last = update;
	    }
	    if (queue2 !== null && update2 !== null && update2.next !== null) {
	      update2.next = null;
	      queue2.last = update;
	    }
	  }
	}
	var addTopLevelUpdate_1 = addTopLevelUpdate$1;

	function getStateFromUpdate(update, instance, prevState, props) {
	  var partialState = update.partialState;
	  if (typeof partialState === 'function') {
	    var updateFn = partialState;
	    return updateFn.call(instance, prevState, props);
	  } else {
	    return partialState;
	  }
	}

	function beginUpdateQueue(current, workInProgress, queue, instance, prevState, props, priorityLevel) {
	  if (current !== null && current.updateQueue === queue) {
	    // We need to create a work-in-progress queue, by cloning the current queue.
	    var currentQueue = queue;
	    queue = workInProgress.updateQueue = {
	      first: currentQueue.first,
	      last: currentQueue.last,
	      // These fields are no longer valid because they were already committed.
	      // Reset them.
	      callbackList: null,
	      hasForceUpdate: false
	    };
	  }

	  {
	    // Set this flag so we can warn if setState is called inside the update
	    // function of another setState.
	    queue.isProcessing = true;
	  }

	  // Calculate these using the the existing values as a base.
	  var callbackList = queue.callbackList;
	  var hasForceUpdate = queue.hasForceUpdate;

	  // Applies updates with matching priority to the previous state to create
	  // a new state object.
	  var state = prevState;
	  var dontMutatePrevState = true;
	  var update = queue.first;
	  while (update !== null && comparePriority(update.priorityLevel, priorityLevel) <= 0) {
	    // Remove each update from the queue right before it is processed. That way
	    // if setState is called from inside an updater function, the new update
	    // will be inserted in the correct position.
	    queue.first = update.next;
	    if (queue.first === null) {
	      queue.last = null;
	    }

	    var _partialState = void 0;
	    if (update.isReplace) {
	      state = getStateFromUpdate(update, instance, state, props);
	      dontMutatePrevState = true;
	    } else {
	      _partialState = getStateFromUpdate(update, instance, state, props);
	      if (_partialState) {
	        if (dontMutatePrevState) {
	          state = _assign({}, state, _partialState);
	        } else {
	          state = _assign(state, _partialState);
	        }
	        dontMutatePrevState = false;
	      }
	    }
	    if (update.isForced) {
	      hasForceUpdate = true;
	    }
	    // Second condition ignores top-level unmount callbacks if they are not the
	    // last update in the queue, since a subsequent update will cause a remount.
	    if (update.callback !== null && !(update.isTopLevelUnmount && update.next !== null)) {
	      callbackList = callbackList !== null ? callbackList : [];
	      callbackList.push(update.callback);
	      workInProgress.effectTag |= CallbackEffect;
	    }
	    update = update.next;
	  }

	  queue.callbackList = callbackList;
	  queue.hasForceUpdate = hasForceUpdate;

	  if (queue.first === null && callbackList === null && !hasForceUpdate) {
	    // The queue is empty and there are no callbacks. We can reset it.
	    workInProgress.updateQueue = null;
	  }

	  {
	    // No longer processing.
	    queue.isProcessing = false;
	  }

	  return state;
	}
	var beginUpdateQueue_1 = beginUpdateQueue;

	function commitCallbacks(finishedWork, queue, context) {
	  var callbackList = queue.callbackList;
	  if (callbackList === null) {
	    return;
	  }

	  // Set the list to null to make sure they don't get called more than once.
	  queue.callbackList = null;

	  for (var i = 0; i < callbackList.length; i++) {
	    var _callback = callbackList[i];
	    !(typeof _callback === 'function') ? invariant(false, 'Invalid argument passed as callback. Expected a function. Instead received: %s', _callback) : void 0;
	    _callback.call(context);
	  }
	}
	var commitCallbacks_1 = commitCallbacks;

	var ReactFiberUpdateQueue = {
		addUpdate: addUpdate_1,
		addReplaceUpdate: addReplaceUpdate_1,
		addForceUpdate: addForceUpdate_1,
		getUpdatePriority: getUpdatePriority_1,
		addTopLevelUpdate: addTopLevelUpdate_1,
		beginUpdateQueue: beginUpdateQueue_1,
		commitCallbacks: commitCallbacks_1
	};

	{
	  var warning$21 = require$$0;
	}

	var valueStack = [];

	{
	  var fiberStack = [];
	}

	var index = -1;

	var createCursor$1 = function (defaultValue) {
	  return {
	    current: defaultValue
	  };
	};

	var isEmpty = function () {
	  return index === -1;
	};

	var pop$1 = function (cursor, fiber) {
	  if (index < 0) {
	    {
	      warning$21(false, 'Unexpected pop.');
	    }
	    return;
	  }

	  {
	    if (fiber !== fiberStack[index]) {
	      warning$21(false, 'Unexpected Fiber popped.');
	    }
	  }

	  cursor.current = valueStack[index];

	  valueStack[index] = null;

	  {
	    fiberStack[index] = null;
	  }

	  index--;
	};

	var push$1 = function (cursor, value, fiber) {
	  index++;

	  valueStack[index] = cursor.current;

	  {
	    fiberStack[index] = fiber;
	  }

	  cursor.current = value;
	};

	var reset = function () {
	  while (index > -1) {
	    valueStack[index] = null;

	    {
	      fiberStack[index] = null;
	    }

	    index--;
	  }
	};

	var ReactFiberStack = {
		createCursor: createCursor$1,
		isEmpty: isEmpty,
		pop: pop$1,
		push: push$1,
		reset: reset
	};

	// Trust the developer to only use this with a true check
	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * @providesModule ReactDebugFiberPerf
	 * 
	 */

	var ReactDebugFiberPerf = null;

	{
	  var _require$8 = ReactTypeOfWork,
	      HostRoot$4 = _require$8.HostRoot,
	      HostComponent$4 = _require$8.HostComponent,
	      HostText$2 = _require$8.HostText,
	      HostPortal$1 = _require$8.HostPortal,
	      YieldComponent = _require$8.YieldComponent,
	      Fragment = _require$8.Fragment;

	  var getComponentName$5 = getComponentName_1;

	  // Prefix measurements so that it's possible to filter them.
	  // Longer prefixes are hard to read in DevTools.
	  var reactEmoji = '\u269B';
	  var warningEmoji = '\u26D4';
	  var supportsUserTiming = typeof performance !== 'undefined' && typeof performance.mark === 'function' && typeof performance.clearMarks === 'function' && typeof performance.measure === 'function' && typeof performance.clearMeasures === 'function';

	  // Keep track of current fiber so that we know the path to unwind on pause.
	  // TODO: this looks the same as nextUnitOfWork in scheduler. Can we unify them?
	  var currentFiber = null;
	  // If we're in the middle of user code, which fiber and method is it?
	  // Reusing `currentFiber` would be confusing for this because user code fiber
	  // can change during commit phase too, but we don't need to unwind it (since
	  // lifecycles in the commit phase don't resemble a tree).
	  var currentPhase = null;
	  var currentPhaseFiber = null;
	  // Did lifecycle hook schedule an update? This is often a performance problem,
	  // so we will keep track of it, and include it in the report.
	  // Track commits caused by cascading updates.
	  var isCommitting = false;
	  var hasScheduledUpdateInCurrentCommit = false;
	  var hasScheduledUpdateInCurrentPhase = false;
	  var commitCountInCurrentWorkLoop = 0;
	  var effectCountInCurrentCommit = 0;
	  // During commits, we only show a measurement once per method name
	  // to avoid stretch the commit phase with measurement overhead.
	  var labelsInCurrentCommit = new Set();

	  var formatMarkName = function (markName) {
	    return reactEmoji + ' ' + markName;
	  };

	  var formatLabel = function (label, warning) {
	    var prefix = warning ? warningEmoji + ' ' : reactEmoji + ' ';
	    var suffix = warning ? ' Warning: ' + warning : '';
	    return '' + prefix + label + suffix;
	  };

	  var beginMark = function (markName) {
	    performance.mark(formatMarkName(markName));
	  };

	  var clearMark = function (markName) {
	    performance.clearMarks(formatMarkName(markName));
	  };

	  var endMark = function (label, markName, warning) {
	    var formattedMarkName = formatMarkName(markName);
	    var formattedLabel = formatLabel(label, warning);
	    try {
	      performance.measure(formattedLabel, formattedMarkName);
	    } catch (err) {}
	    // If previous mark was missing for some reason, this will throw.
	    // This could only happen if React crashed in an unexpected place earlier.
	    // Don't pile on with more errors.

	    // Clear marks immediately to avoid growing buffer.
	    performance.clearMarks(formattedMarkName);
	    performance.clearMeasures(formattedLabel);
	  };

	  var getFiberMarkName = function (label, debugID) {
	    return label + ' (#' + debugID + ')';
	  };

	  var getFiberLabel = function (componentName, isMounted, phase) {
	    if (phase === null) {
	      // These are composite component total time measurements.
	      return componentName + ' [' + (isMounted ? 'update' : 'mount') + ']';
	    } else {
	      // Composite component methods.
	      return componentName + '.' + phase;
	    }
	  };

	  var beginFiberMark = function (fiber, phase) {
	    var componentName = getComponentName$5(fiber) || 'Unknown';
	    var debugID = fiber._debugID;
	    var isMounted = fiber.alternate !== null;
	    var label = getFiberLabel(componentName, isMounted, phase);

	    if (isCommitting && labelsInCurrentCommit.has(label)) {
	      // During the commit phase, we don't show duplicate labels because
	      // there is a fixed overhead for every measurement, and we don't
	      // want to stretch the commit phase beyond necessary.
	      return false;
	    }
	    labelsInCurrentCommit.add(label);

	    var markName = getFiberMarkName(label, debugID);
	    beginMark(markName);
	    return true;
	  };

	  var clearFiberMark = function (fiber, phase) {
	    var componentName = getComponentName$5(fiber) || 'Unknown';
	    var debugID = fiber._debugID;
	    var isMounted = fiber.alternate !== null;
	    var label = getFiberLabel(componentName, isMounted, phase);
	    var markName = getFiberMarkName(label, debugID);
	    clearMark(markName);
	  };

	  var endFiberMark = function (fiber, phase, warning) {
	    var componentName = getComponentName$5(fiber) || 'Unknown';
	    var debugID = fiber._debugID;
	    var isMounted = fiber.alternate !== null;
	    var label = getFiberLabel(componentName, isMounted, phase);
	    var markName = getFiberMarkName(label, debugID);
	    endMark(label, markName, warning);
	  };

	  var shouldIgnoreFiber = function (fiber) {
	    // Host components should be skipped in the timeline.
	    // We could check typeof fiber.type, but does this work with RN?
	    switch (fiber.tag) {
	      case HostRoot$4:
	      case HostComponent$4:
	      case HostText$2:
	      case HostPortal$1:
	      case YieldComponent:
	      case Fragment:
	        return true;
	      default:
	        return false;
	    }
	  };

	  var clearPendingPhaseMeasurement = function () {
	    if (currentPhase !== null && currentPhaseFiber !== null) {
	      clearFiberMark(currentPhaseFiber, currentPhase);
	    }
	    currentPhaseFiber = null;
	    currentPhase = null;
	    hasScheduledUpdateInCurrentPhase = false;
	  };

	  var pauseTimers = function () {
	    // Stops all currently active measurements so that they can be resumed
	    // if we continue in a later deferred loop from the same unit of work.
	    var fiber = currentFiber;
	    while (fiber) {
	      if (fiber._debugIsCurrentlyTiming) {
	        endFiberMark(fiber, null, null);
	      }
	      fiber = fiber['return'];
	    }
	  };

	  var resumeTimersRecursively = function (fiber) {
	    if (fiber['return'] !== null) {
	      resumeTimersRecursively(fiber['return']);
	    }
	    if (fiber._debugIsCurrentlyTiming) {
	      beginFiberMark(fiber, null);
	    }
	  };

	  var resumeTimers = function () {
	    // Resumes all measurements that were active during the last deferred loop.
	    if (currentFiber !== null) {
	      resumeTimersRecursively(currentFiber);
	    }
	  };

	  ReactDebugFiberPerf = {
	    recordEffect: function () {
	      effectCountInCurrentCommit++;
	    },
	    recordScheduleUpdate: function () {
	      if (isCommitting) {
	        hasScheduledUpdateInCurrentCommit = true;
	      }
	      if (currentPhase !== null && currentPhase !== 'componentWillMount' && currentPhase !== 'componentWillReceiveProps') {
	        hasScheduledUpdateInCurrentPhase = true;
	      }
	    },
	    startWorkTimer: function (fiber) {
	      if (!supportsUserTiming || shouldIgnoreFiber(fiber)) {
	        return;
	      }
	      // If we pause, this is the fiber to unwind from.
	      currentFiber = fiber;
	      if (!beginFiberMark(fiber, null)) {
	        return;
	      }
	      fiber._debugIsCurrentlyTiming = true;
	    },
	    cancelWorkTimer: function (fiber) {
	      if (!supportsUserTiming || shouldIgnoreFiber(fiber)) {
	        return;
	      }
	      // Remember we shouldn't complete measurement for this fiber.
	      // Otherwise flamechart will be deep even for small updates.
	      fiber._debugIsCurrentlyTiming = false;
	      clearFiberMark(fiber, null);
	    },
	    stopWorkTimer: function (fiber) {
	      if (!supportsUserTiming || shouldIgnoreFiber(fiber)) {
	        return;
	      }
	      // If we pause, its parent is the fiber to unwind from.
	      currentFiber = fiber['return'];
	      if (!fiber._debugIsCurrentlyTiming) {
	        return;
	      }
	      fiber._debugIsCurrentlyTiming = false;
	      endFiberMark(fiber, null, null);
	    },
	    stopFailedWorkTimer: function (fiber) {
	      if (!supportsUserTiming || shouldIgnoreFiber(fiber)) {
	        return;
	      }
	      // If we pause, its parent is the fiber to unwind from.
	      currentFiber = fiber['return'];
	      if (!fiber._debugIsCurrentlyTiming) {
	        return;
	      }
	      fiber._debugIsCurrentlyTiming = false;
	      var warning = 'An error was thrown inside this error boundary';
	      endFiberMark(fiber, null, warning);
	    },
	    startPhaseTimer: function (fiber, phase) {
	      if (!supportsUserTiming) {
	        return;
	      }
	      clearPendingPhaseMeasurement();
	      if (!beginFiberMark(fiber, phase)) {
	        return;
	      }
	      currentPhaseFiber = fiber;
	      currentPhase = phase;
	    },
	    stopPhaseTimer: function () {
	      if (!supportsUserTiming) {
	        return;
	      }
	      if (currentPhase !== null && currentPhaseFiber !== null) {
	        var warning = hasScheduledUpdateInCurrentPhase ? 'Scheduled a cascading update' : null;
	        endFiberMark(currentPhaseFiber, currentPhase, warning);
	      }
	      currentPhase = null;
	      currentPhaseFiber = null;
	    },
	    startWorkLoopTimer: function () {
	      if (!supportsUserTiming) {
	        return;
	      }
	      commitCountInCurrentWorkLoop = 0;
	      // This is top level call.
	      // Any other measurements are performed within.
	      beginMark('(React Tree Reconciliation)');
	      // Resume any measurements that were in progress during the last loop.
	      resumeTimers();
	    },
	    stopWorkLoopTimer: function () {
	      if (!supportsUserTiming) {
	        return;
	      }
	      var warning = commitCountInCurrentWorkLoop > 1 ? 'There were cascading updates' : null;
	      commitCountInCurrentWorkLoop = 0;
	      // Pause any measurements until the next loop.
	      pauseTimers();
	      endMark('(React Tree Reconciliation)', '(React Tree Reconciliation)', warning);
	    },
	    startCommitTimer: function () {
	      if (!supportsUserTiming) {
	        return;
	      }
	      isCommitting = true;
	      hasScheduledUpdateInCurrentCommit = false;
	      labelsInCurrentCommit.clear();
	      beginMark('(Committing Changes)');
	    },
	    stopCommitTimer: function () {
	      if (!supportsUserTiming) {
	        return;
	      }

	      var warning = null;
	      if (hasScheduledUpdateInCurrentCommit) {
	        warning = 'Lifecycle hook scheduled a cascading update';
	      } else if (commitCountInCurrentWorkLoop > 0) {
	        warning = 'Caused by a cascading update in earlier commit';
	      }
	      hasScheduledUpdateInCurrentCommit = false;
	      commitCountInCurrentWorkLoop++;
	      isCommitting = false;
	      labelsInCurrentCommit.clear();

	      endMark('(Committing Changes)', '(Committing Changes)', warning);
	    },
	    startCommitHostEffectsTimer: function () {
	      if (!supportsUserTiming) {
	        return;
	      }
	      effectCountInCurrentCommit = 0;
	      beginMark('(Committing Host Effects)');
	    },
	    stopCommitHostEffectsTimer: function () {
	      if (!supportsUserTiming) {
	        return;
	      }
	      var count = effectCountInCurrentCommit;
	      effectCountInCurrentCommit = 0;
	      endMark('(Committing Host Effects: ' + count + ' Total)', '(Committing Host Effects)', null);
	    },
	    startCommitLifeCyclesTimer: function () {
	      if (!supportsUserTiming) {
	        return;
	      }
	      effectCountInCurrentCommit = 0;
	      beginMark('(Calling Lifecycle Methods)');
	    },
	    stopCommitLifeCyclesTimer: function () {
	      if (!supportsUserTiming) {
	        return;
	      }
	      var count = effectCountInCurrentCommit;
	      effectCountInCurrentCommit = 0;
	      endMark('(Calling Lifecycle Methods: ' + count + ' Total)', '(Calling Lifecycle Methods)', null);
	    }
	  };
	}

	var ReactDebugFiberPerf_1 = ReactDebugFiberPerf;

	var isFiberMounted$1 = ReactFiberTreeReflection.isFiberMounted;

	var ClassComponent$3 = ReactTypeOfWork.ClassComponent;
	var HostRoot$3 = ReactTypeOfWork.HostRoot;

	var createCursor = ReactFiberStack.createCursor;
	var pop = ReactFiberStack.pop;
	var push = ReactFiberStack.push;

	{
	  var warning$20 = require$$0;
	  var checkPropTypes$1 = checkPropTypes;
	  var ReactDebugCurrentFiber$2 = ReactDebugCurrentFiber_1;

	  var _require4 = ReactDebugFiberPerf_1,
	      startPhaseTimer = _require4.startPhaseTimer,
	      stopPhaseTimer = _require4.stopPhaseTimer;

	  var warnedAboutMissingGetChildContext = {};
	}

	// A cursor to the current merged context object on the stack.
	var contextStackCursor = createCursor(emptyObject);
	// A cursor to a boolean indicating whether the context has changed.
	var didPerformWorkStackCursor = createCursor(false);
	// Keep track of the previous context object that was on the stack.
	// We use this to get access to the parent context after we have already
	// pushed the next context provider, and now need to merge their contexts.
	var previousContext = emptyObject;

	function getUnmaskedContext(workInProgress) {
	  var hasOwnContext = isContextProvider$1(workInProgress);
	  if (hasOwnContext) {
	    // If the fiber is a context provider itself, when we read its context
	    // we have already pushed its own child context on the stack. A context
	    // provider should not "see" its own child context. Therefore we read the
	    // previous (parent) context instead for a context provider.
	    return previousContext;
	  }
	  return contextStackCursor.current;
	}
	var getUnmaskedContext_1 = getUnmaskedContext;

	function cacheContext(workInProgress, unmaskedContext, maskedContext) {
	  var instance = workInProgress.stateNode;
	  instance.__reactInternalMemoizedUnmaskedChildContext = unmaskedContext;
	  instance.__reactInternalMemoizedMaskedChildContext = maskedContext;
	}
	var cacheContext_1 = cacheContext;

	var getMaskedContext = function (workInProgress, unmaskedContext) {
	  var type = workInProgress.type;
	  var contextTypes = type.contextTypes;
	  if (!contextTypes) {
	    return emptyObject;
	  }

	  // Avoid recreating masked context unless unmasked context has changed.
	  // Failing to do this will result in unnecessary calls to componentWillReceiveProps.
	  // This may trigger infinite loops if componentWillReceiveProps calls setState.
	  var instance = workInProgress.stateNode;
	  if (instance && instance.__reactInternalMemoizedUnmaskedChildContext === unmaskedContext) {
	    return instance.__reactInternalMemoizedMaskedChildContext;
	  }

	  var context = {};
	  for (var key in contextTypes) {
	    context[key] = unmaskedContext[key];
	  }

	  {
	    var name = getComponentName_1(workInProgress) || 'Unknown';
	    ReactDebugCurrentFiber$2.setCurrentFiber(workInProgress, null);
	    checkPropTypes$1(contextTypes, context, 'context', name, ReactDebugCurrentFiber$2.getCurrentFiberStackAddendum);
	    ReactDebugCurrentFiber$2.resetCurrentFiber();
	  }

	  // Cache unmasked context so we can avoid recreating masked context unless necessary.
	  // Context is created before the class component is instantiated so check for instance.
	  if (instance) {
	    cacheContext(workInProgress, unmaskedContext, context);
	  }

	  return context;
	};

	var hasContextChanged = function () {
	  return didPerformWorkStackCursor.current;
	};

	function isContextConsumer(fiber) {
	  return fiber.tag === ClassComponent$3 && fiber.type.contextTypes != null;
	}
	var isContextConsumer_1 = isContextConsumer;

	function isContextProvider$1(fiber) {
	  return fiber.tag === ClassComponent$3 && fiber.type.childContextTypes != null;
	}
	var isContextProvider_1 = isContextProvider$1;

	function popContextProvider(fiber) {
	  if (!isContextProvider$1(fiber)) {
	    return;
	  }

	  pop(didPerformWorkStackCursor, fiber);
	  pop(contextStackCursor, fiber);
	}
	var popContextProvider_1 = popContextProvider;

	var popTopLevelContextObject = function (fiber) {
	  pop(didPerformWorkStackCursor, fiber);
	  pop(contextStackCursor, fiber);
	};

	var pushTopLevelContextObject = function (fiber, context, didChange) {
	  !(contextStackCursor.cursor == null) ? invariant(false, 'Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.') : void 0;

	  push(contextStackCursor, context, fiber);
	  push(didPerformWorkStackCursor, didChange, fiber);
	};

	function processChildContext$1(fiber, parentContext, isReconciling) {
	  var instance = fiber.stateNode;
	  var childContextTypes = fiber.type.childContextTypes;

	  // TODO (bvaughn) Replace this behavior with an invariant() in the future.
	  // It has only been added in Fiber to match the (unintentional) behavior in Stack.
	  if (typeof instance.getChildContext !== 'function') {
	    {
	      var componentName = getComponentName_1(fiber) || 'Unknown';

	      if (!warnedAboutMissingGetChildContext[componentName]) {
	        warnedAboutMissingGetChildContext[componentName] = true;
	        warning$20(false, '%s.childContextTypes is specified but there is no getChildContext() method ' + 'on the instance. You can either define getChildContext() on %s or remove ' + 'childContextTypes from it.', componentName, componentName);
	      }
	    }
	    return parentContext;
	  }

	  var childContext = void 0;
	  {
	    ReactDebugCurrentFiber$2.setCurrentFiber(fiber, 'getChildContext');
	    startPhaseTimer(fiber, 'getChildContext');
	    childContext = instance.getChildContext();
	    stopPhaseTimer();
	    ReactDebugCurrentFiber$2.resetCurrentFiber();
	  }
	  for (var contextKey in childContext) {
	    !(contextKey in childContextTypes) ? invariant(false, '%s.getChildContext(): key "%s" is not defined in childContextTypes.', getComponentName_1(fiber) || 'Unknown', contextKey) : void 0;
	  }
	  {
	    var name = getComponentName_1(fiber) || 'Unknown';
	    // We can only provide accurate element stacks if we pass work-in-progress tree
	    // during the begin or complete phase. However currently this function is also
	    // called from unstable_renderSubtree legacy implementation. In this case it unsafe to
	    // assume anything about the given fiber. We won't pass it down if we aren't sure.
	    // TODO: remove this hack when we delete unstable_renderSubtree in Fiber.
	    var workInProgress = isReconciling ? fiber : null;
	    ReactDebugCurrentFiber$2.setCurrentFiber(workInProgress, null);
	    checkPropTypes$1(childContextTypes, childContext, 'child context', name, ReactDebugCurrentFiber$2.getCurrentFiberStackAddendum);
	    ReactDebugCurrentFiber$2.resetCurrentFiber();
	  }

	  return _assign({}, parentContext, childContext);
	}
	var processChildContext_1 = processChildContext$1;

	var pushContextProvider = function (workInProgress) {
	  if (!isContextProvider$1(workInProgress)) {
	    return false;
	  }

	  var instance = workInProgress.stateNode;
	  // We push the context as early as possible to ensure stack integrity.
	  // If the instance does not exist yet, we will push null at first,
	  // and replace it on the stack later when invalidating the context.
	  var memoizedMergedChildContext = instance && instance.__reactInternalMemoizedMergedChildContext || emptyObject;

	  // Remember the parent context so we can merge with it later.
	  // Inherit the parent's did-perform-work value to avoid inadvertantly blocking updates.
	  previousContext = contextStackCursor.current;
	  push(contextStackCursor, memoizedMergedChildContext, workInProgress);
	  push(didPerformWorkStackCursor, didPerformWorkStackCursor.current, workInProgress);

	  return true;
	};

	var invalidateContextProvider = function (workInProgress, didChange) {
	  var instance = workInProgress.stateNode;
	  !instance ? invariant(false, 'Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.') : void 0;

	  if (didChange) {
	    // Merge parent and own context.
	    // Skip this if we're not updating due to sCU.
	    // This avoids unnecessarily recomputing memoized values.
	    var mergedContext = processChildContext$1(workInProgress, previousContext, true);
	    instance.__reactInternalMemoizedMergedChildContext = mergedContext;

	    // Replace the old (or empty) context with the new one.
	    // It is important to unwind the context in the reverse order.
	    pop(didPerformWorkStackCursor, workInProgress);
	    pop(contextStackCursor, workInProgress);
	    // Now push the new context and mark that it has changed.
	    push(contextStackCursor, mergedContext, workInProgress);
	    push(didPerformWorkStackCursor, didChange, workInProgress);
	  } else {
	    pop(didPerformWorkStackCursor, workInProgress);
	    push(didPerformWorkStackCursor, didChange, workInProgress);
	  }
	};

	var resetContext = function () {
	  previousContext = emptyObject;
	  contextStackCursor.current = emptyObject;
	  didPerformWorkStackCursor.current = false;
	};

	var findCurrentUnmaskedContext$1 = function (fiber) {
	  // Currently this is only used with renderSubtreeIntoContainer; not sure if it
	  // makes sense elsewhere
	  !(isFiberMounted$1(fiber) && fiber.tag === ClassComponent$3) ? invariant(false, 'Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.') : void 0;

	  var node = fiber;
	  while (node.tag !== HostRoot$3) {
	    if (isContextProvider$1(node)) {
	      return node.stateNode.__reactInternalMemoizedMergedChildContext;
	    }
	    var parent = node['return'];
	    !parent ? invariant(false, 'Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.') : void 0;
	    node = parent;
	  }
	  return node.stateNode.context;
	};

	var ReactFiberContext = {
		getUnmaskedContext: getUnmaskedContext_1,
		cacheContext: cacheContext_1,
		getMaskedContext: getMaskedContext,
		hasContextChanged: hasContextChanged,
		isContextConsumer: isContextConsumer_1,
		isContextProvider: isContextProvider_1,
		popContextProvider: popContextProvider_1,
		popTopLevelContextObject: popTopLevelContextObject,
		pushTopLevelContextObject: pushTopLevelContextObject,
		processChildContext: processChildContext_1,
		pushContextProvider: pushContextProvider,
		invalidateContextProvider: invalidateContextProvider,
		resetContext: resetContext,
		findCurrentUnmaskedContext: findCurrentUnmaskedContext$1
	};

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * @providesModule ReactTypeOfInternalContext
	 * 
	 */

	var ReactTypeOfInternalContext = {
	  NoContext: 0,
	  AsyncUpdates: 1
	};

	var IndeterminateComponent$1 = ReactTypeOfWork.IndeterminateComponent;
	var ClassComponent$4 = ReactTypeOfWork.ClassComponent;
	var HostRoot$5 = ReactTypeOfWork.HostRoot;
	var HostComponent$5 = ReactTypeOfWork.HostComponent;
	var HostText$3 = ReactTypeOfWork.HostText;
	var HostPortal$2 = ReactTypeOfWork.HostPortal;
	var CoroutineComponent = ReactTypeOfWork.CoroutineComponent;
	var YieldComponent$1 = ReactTypeOfWork.YieldComponent;
	var Fragment$1 = ReactTypeOfWork.Fragment;

	var NoWork$1 = ReactPriorityLevel.NoWork;

	var NoContext = ReactTypeOfInternalContext.NoContext;

	var NoEffect$1 = ReactTypeOfSideEffect.NoEffect;



	{
	  var getComponentName$6 = getComponentName_1;
	  var hasBadMapPolyfill = false;
	  try {
	    var nonExtensibleObject = Object.preventExtensions({});
	    /* eslint-disable no-new */
	    new Map([[nonExtensibleObject, null]]);
	    new Set([nonExtensibleObject]);
	    /* eslint-enable no-new */
	  } catch (e) {
	    // TODO: Consider warning about bad polyfills
	    hasBadMapPolyfill = true;
	  }
	}

	// A Fiber is work on a Component that needs to be done or was done. There can
	// be more than one per component.


	{
	  var debugCounter = 1;
	}

	function FiberNode(tag, key, internalContextTag) {
	  // Instance
	  this.tag = tag;
	  this.key = key;
	  this.type = null;
	  this.stateNode = null;

	  // Fiber
	  this['return'] = null;
	  this.child = null;
	  this.sibling = null;
	  this.index = 0;

	  this.ref = null;

	  this.pendingProps = null;
	  this.memoizedProps = null;
	  this.updateQueue = null;
	  this.memoizedState = null;

	  this.internalContextTag = internalContextTag;

	  // Effects
	  this.effectTag = NoEffect$1;
	  this.nextEffect = null;

	  this.firstEffect = null;
	  this.lastEffect = null;

	  this.pendingWorkPriority = NoWork$1;

	  this.alternate = null;

	  {
	    this._debugID = debugCounter++;
	    this._debugSource = null;
	    this._debugOwner = null;
	    this._debugIsCurrentlyTiming = false;
	    if (!hasBadMapPolyfill && typeof Object.preventExtensions === 'function') {
	      Object.preventExtensions(this);
	    }
	  }
	}

	// This is a constructor function, rather than a POJO constructor, still
	// please ensure we do the following:
	// 1) Nobody should add any instance methods on this. Instance methods can be
	//    more difficult to predict when they get optimized and they are almost
	//    never inlined properly in static compilers.
	// 2) Nobody should rely on `instanceof Fiber` for type testing. We should
	//    always know when it is a fiber.
	// 3) We might want to experiment with using numeric keys since they are easier
	//    to optimize in a non-JIT environment.
	// 4) We can easily go from a constructor to a createFiber object literal if that
	//    is faster.
	// 5) It should be easy to port this to a C struct and keep a C implementation
	//    compatible.
	var createFiber = function (tag, key, internalContextTag) {
	  // $FlowFixMe: the shapes are exact here but Flow doesn't like constructors
	  return new FiberNode(tag, key, internalContextTag);
	};

	function shouldConstruct(Component) {
	  return !!(Component.prototype && Component.prototype.isReactComponent);
	}

	// This is used to create an alternate fiber to do work on.
	var createWorkInProgress = function (current, renderPriority) {
	  var workInProgress = current.alternate;
	  if (workInProgress === null) {
	    // We use a double buffering pooling technique because we know that we'll
	    // only ever need at most two versions of a tree. We pool the "other" unused
	    // node that we're free to reuse. This is lazily created to avoid allocating
	    // extra objects for things that are never updated. It also allow us to
	    // reclaim the extra memory if needed.
	    workInProgress = createFiber(current.tag, current.key, current.internalContextTag);
	    workInProgress.type = current.type;
	    workInProgress.stateNode = current.stateNode;

	    {
	      // DEV-only fields
	      workInProgress._debugID = current._debugID;
	      workInProgress._debugSource = current._debugSource;
	      workInProgress._debugOwner = current._debugOwner;
	    }

	    workInProgress.alternate = current;
	    current.alternate = workInProgress;
	  } else {
	    // We already have an alternate.
	    // Reset the effect tag.
	    workInProgress.effectTag = NoEffect$1;

	    // The effect list is no longer valid.
	    workInProgress.nextEffect = null;
	    workInProgress.firstEffect = null;
	    workInProgress.lastEffect = null;
	  }

	  workInProgress.pendingWorkPriority = renderPriority;

	  workInProgress.child = current.child;
	  workInProgress.memoizedProps = current.memoizedProps;
	  workInProgress.memoizedState = current.memoizedState;
	  workInProgress.updateQueue = current.updateQueue;

	  // pendingProps is set by the parent during reconciliation.
	  // TODO: Pass this as an argument.

	  // These will be overridden during the parent's reconciliation
	  workInProgress.sibling = current.sibling;
	  workInProgress.index = current.index;
	  workInProgress.ref = current.ref;

	  return workInProgress;
	};

	var createHostRootFiber$1 = function () {
	  var fiber = createFiber(HostRoot$5, null, NoContext);
	  return fiber;
	};

	var createFiberFromElement = function (element, internalContextTag, priorityLevel) {
	  var owner = null;
	  {
	    owner = element._owner;
	  }

	  var fiber = createFiberFromElementType(element.type, element.key, internalContextTag, owner);
	  fiber.pendingProps = element.props;
	  fiber.pendingWorkPriority = priorityLevel;

	  {
	    fiber._debugSource = element._source;
	    fiber._debugOwner = element._owner;
	  }

	  return fiber;
	};

	var createFiberFromFragment = function (elements, internalContextTag, priorityLevel) {
	  // TODO: Consider supporting keyed fragments. Technically, we accidentally
	  // support that in the existing React.
	  var fiber = createFiber(Fragment$1, null, internalContextTag);
	  fiber.pendingProps = elements;
	  fiber.pendingWorkPriority = priorityLevel;
	  return fiber;
	};

	var createFiberFromText = function (content, internalContextTag, priorityLevel) {
	  var fiber = createFiber(HostText$3, null, internalContextTag);
	  fiber.pendingProps = content;
	  fiber.pendingWorkPriority = priorityLevel;
	  return fiber;
	};

	function createFiberFromElementType(type, key, internalContextTag, debugOwner) {
	  var fiber = void 0;
	  if (typeof type === 'function') {
	    fiber = shouldConstruct(type) ? createFiber(ClassComponent$4, key, internalContextTag) : createFiber(IndeterminateComponent$1, key, internalContextTag);
	    fiber.type = type;
	  } else if (typeof type === 'string') {
	    fiber = createFiber(HostComponent$5, key, internalContextTag);
	    fiber.type = type;
	  } else if (typeof type === 'object' && type !== null && typeof type.tag === 'number') {
	    // Currently assumed to be a continuation and therefore is a fiber already.
	    // TODO: The yield system is currently broken for updates in some cases.
	    // The reified yield stores a fiber, but we don't know which fiber that is;
	    // the current or a workInProgress? When the continuation gets rendered here
	    // we don't know if we can reuse that fiber or if we need to clone it.
	    // There is probably a clever way to restructure this.
	    fiber = type;
	  } else {
	    var info = '';
	    {
	      if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
	        info += ' You likely forgot to export your component from the file ' + "it's defined in.";
	      }
	      var ownerName = debugOwner ? getComponentName$6(debugOwner) : null;
	      if (ownerName) {
	        info += '\n\nCheck the render method of `' + ownerName + '`.';
	      }
	    }
	    invariant(false, 'Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s', type == null ? type : typeof type, info);
	  }
	  return fiber;
	}

	var createFiberFromElementType_1 = createFiberFromElementType;

	var createFiberFromHostInstanceForDeletion = function () {
	  var fiber = createFiber(HostComponent$5, null, NoContext);
	  fiber.type = 'DELETED';
	  return fiber;
	};

	var createFiberFromCoroutine = function (coroutine, internalContextTag, priorityLevel) {
	  var fiber = createFiber(CoroutineComponent, coroutine.key, internalContextTag);
	  fiber.type = coroutine.handler;
	  fiber.pendingProps = coroutine;
	  fiber.pendingWorkPriority = priorityLevel;
	  return fiber;
	};

	var createFiberFromYield = function (yieldNode, internalContextTag, priorityLevel) {
	  var fiber = createFiber(YieldComponent$1, null, internalContextTag);
	  return fiber;
	};

	var createFiberFromPortal = function (portal, internalContextTag, priorityLevel) {
	  var fiber = createFiber(HostPortal$2, portal.key, internalContextTag);
	  fiber.pendingProps = portal.children || [];
	  fiber.pendingWorkPriority = priorityLevel;
	  fiber.stateNode = {
	    containerInfo: portal.containerInfo,
	    implementation: portal.implementation
	  };
	  return fiber;
	};

	var largerPriority = function (p1, p2) {
	  return p1 !== NoWork$1 && (p2 === NoWork$1 || p2 > p1) ? p1 : p2;
	};

	var ReactFiber = {
		createWorkInProgress: createWorkInProgress,
		createHostRootFiber: createHostRootFiber$1,
		createFiberFromElement: createFiberFromElement,
		createFiberFromFragment: createFiberFromFragment,
		createFiberFromText: createFiberFromText,
		createFiberFromElementType: createFiberFromElementType_1,
		createFiberFromHostInstanceForDeletion: createFiberFromHostInstanceForDeletion,
		createFiberFromCoroutine: createFiberFromCoroutine,
		createFiberFromYield: createFiberFromYield,
		createFiberFromPortal: createFiberFromPortal,
		largerPriority: largerPriority
	};

	var createHostRootFiber = ReactFiber.createHostRootFiber;

	var createFiberRoot$1 = function (containerInfo) {
	  // Cyclic construction. This cheats the type system right now because
	  // stateNode is any.
	  var uninitializedFiber = createHostRootFiber();
	  var root = {
	    current: uninitializedFiber,
	    containerInfo: containerInfo,
	    isScheduled: false,
	    nextScheduledRoot: null,
	    context: null,
	    pendingContext: null
	  };
	  uninitializedFiber.stateNode = root;
	  return root;
	};

	var ReactFiberRoot = {
		createFiberRoot: createFiberRoot$1
	};

	var defaultShowDialog = function (capturedError) {
	  return true;
	};

	var showDialog = defaultShowDialog;

	function logCapturedError$1(capturedError) {
	  var logError = showDialog(capturedError);

	  // Allow injected showDialog() to prevent default console.error logging.
	  // This enables renderers like ReactNative to better manage redbox behavior.
	  if (logError === false) {
	    return;
	  }

	  var error = capturedError.error;
	  {
	    var componentName = capturedError.componentName,
	        componentStack = capturedError.componentStack,
	        errorBoundaryName = capturedError.errorBoundaryName,
	        errorBoundaryFound = capturedError.errorBoundaryFound,
	        willRetry = capturedError.willRetry;


	    var componentNameMessage = componentName ? 'The above error occurred in the <' + componentName + '> component:' : 'The above error occurred in one of your React components:';

	    var errorBoundaryMessage = void 0;
	    // errorBoundaryFound check is sufficient; errorBoundaryName check is to satisfy Flow.
	    if (errorBoundaryFound && errorBoundaryName) {
	      if (willRetry) {
	        errorBoundaryMessage = 'React will try to recreate this component tree from scratch ' + ('using the error boundary you provided, ' + errorBoundaryName + '.');
	      } else {
	        errorBoundaryMessage = 'This error was initially handled by the error boundary ' + errorBoundaryName + '.\n' + 'Recreating the tree from scratch failed so React will unmount the tree.';
	      }
	    } else {
	      errorBoundaryMessage = 'Consider adding an error boundary to your tree to customize error handling behavior.\n' + 'You can learn more about error boundaries at https://fb.me/react-error-boundaries.';
	    }
	    var combinedMessage = '' + componentNameMessage + componentStack + '\n\n' + ('' + errorBoundaryMessage);

	    // In development, we provide our own message with just the component stack.
	    // We don't include the original error message and JS stack because the browser
	    // has already printed it. Even if the application swallows the error, it is still
	    // displayed by the browser thanks to the DEV-only fake event trick in ReactErrorUtils.
	    console.error(combinedMessage);
	  }
	}

	var injection$1 = {
	  /**
	   * Display custom dialog for lifecycle errors.
	   * Return false to prevent default behavior of logging to console.error.
	   */
	  injectDialog: function (fn) {
	    !(showDialog === defaultShowDialog) ? invariant(false, 'The custom dialog was already injected.') : void 0;
	    !(typeof fn === 'function') ? invariant(false, 'Injected showDialog() must be a function.') : void 0;
	    showDialog = fn;
	  }
	};

	var logCapturedError_1 = logCapturedError$1;

	var ReactFiberErrorLogger = {
		injection: injection$1,
		logCapturedError: logCapturedError_1
	};

	/**
	 * Copyright (c) 2014-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * @providesModule ReactCoroutine
	 * 
	 */

	// The Symbol used to tag the special React types. If there is no native Symbol
	// nor polyfill, then a plain number is used for performance.
	var REACT_COROUTINE_TYPE$1;
	var REACT_YIELD_TYPE$1;
	if (typeof Symbol === 'function' && Symbol['for']) {
	  REACT_COROUTINE_TYPE$1 = Symbol['for']('react.coroutine');
	  REACT_YIELD_TYPE$1 = Symbol['for']('react.yield');
	} else {
	  REACT_COROUTINE_TYPE$1 = 0xeac8;
	  REACT_YIELD_TYPE$1 = 0xeac9;
	}

	var createCoroutine = function (children, handler, props) {
	  var key = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

	  var coroutine = {
	    // This tag allow us to uniquely identify this as a React Coroutine
	    $$typeof: REACT_COROUTINE_TYPE$1,
	    key: key == null ? null : '' + key,
	    children: children,
	    handler: handler,
	    props: props
	  };

	  {
	    // TODO: Add _store property for marking this as validated.
	    if (Object.freeze) {
	      Object.freeze(coroutine.props);
	      Object.freeze(coroutine);
	    }
	  }

	  return coroutine;
	};

	var createYield = function (value) {
	  var yieldNode = {
	    // This tag allow us to uniquely identify this as a React Yield
	    $$typeof: REACT_YIELD_TYPE$1,
	    value: value
	  };

	  {
	    // TODO: Add _store property for marking this as validated.
	    if (Object.freeze) {
	      Object.freeze(yieldNode);
	    }
	  }

	  return yieldNode;
	};

	/**
	 * Verifies the object is a coroutine object.
	 */
	var isCoroutine = function (object) {
	  return typeof object === 'object' && object !== null && object.$$typeof === REACT_COROUTINE_TYPE$1;
	};

	/**
	 * Verifies the object is a yield object.
	 */
	var isYield = function (object) {
	  return typeof object === 'object' && object !== null && object.$$typeof === REACT_YIELD_TYPE$1;
	};

	var REACT_YIELD_TYPE_1 = REACT_YIELD_TYPE$1;
	var REACT_COROUTINE_TYPE_1 = REACT_COROUTINE_TYPE$1;

	var ReactCoroutine = {
		createCoroutine: createCoroutine,
		createYield: createYield,
		isCoroutine: isCoroutine,
		isYield: isYield,
		REACT_YIELD_TYPE: REACT_YIELD_TYPE_1,
		REACT_COROUTINE_TYPE: REACT_COROUTINE_TYPE_1
	};

	/**
	 * Copyright (c) 2014-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * @providesModule ReactPortal
	 * 
	 */

	// The Symbol used to tag the special React types. If there is no native Symbol
	// nor polyfill, then a plain number is used for performance.
	var REACT_PORTAL_TYPE$1 = typeof Symbol === 'function' && Symbol['for'] && Symbol['for']('react.portal') || 0xeaca;

	var createPortal$1 = function (children, containerInfo,
	// TODO: figure out the API for cross-renderer implementation.
	implementation) {
	  var key = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

	  return {
	    // This tag allow us to uniquely identify this as a React Portal
	    $$typeof: REACT_PORTAL_TYPE$1,
	    key: key == null ? null : '' + key,
	    children: children,
	    containerInfo: containerInfo,
	    implementation: implementation
	  };
	};

	/**
	 * Verifies the object is a portal object.
	 */
	var isPortal = function (object) {
	  return typeof object === 'object' && object !== null && object.$$typeof === REACT_PORTAL_TYPE$1;
	};

	var REACT_PORTAL_TYPE_1 = REACT_PORTAL_TYPE$1;

	var ReactPortal = {
		createPortal: createPortal$1,
		isPortal: isPortal,
		REACT_PORTAL_TYPE: REACT_PORTAL_TYPE_1
	};

	var REACT_COROUTINE_TYPE = ReactCoroutine.REACT_COROUTINE_TYPE;
	var REACT_YIELD_TYPE = ReactCoroutine.REACT_YIELD_TYPE;

	var REACT_PORTAL_TYPE = ReactPortal.REACT_PORTAL_TYPE;








	{
	  var _require3$4 = ReactDebugCurrentFiber_1,
	      getCurrentFiberStackAddendum$5 = _require3$4.getCurrentFiberStackAddendum;

	  var warning$24 = require$$0;
	  var didWarnAboutMaps = false;
	  /**
	   * Warn if there's no key explicitly set on dynamic arrays of children or
	   * object keys are not valid. This allows us to keep track of children between
	   * updates.
	   */
	  var ownerHasKeyUseWarning = {};

	  var warnForMissingKey = function (child) {
	    if (child === null || typeof child !== 'object') {
	      return;
	    }
	    if (!child._store || child._store.validated || child.key != null) {
	      return;
	    }
	    !(typeof child._store === 'object') ? invariant(false, 'React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.') : void 0;
	    child._store.validated = true;

	    var currentComponentErrorInfo = 'Each child in an array or iterator should have a unique ' + '"key" prop. See https://fb.me/react-warning-keys for ' + 'more information.' + (getCurrentFiberStackAddendum$5() || '');
	    if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
	      return;
	    }
	    ownerHasKeyUseWarning[currentComponentErrorInfo] = true;

	    warning$24(false, 'Each child in an array or iterator should have a unique ' + '"key" prop. See https://fb.me/react-warning-keys for ' + 'more information.%s', getCurrentFiberStackAddendum$5());
	  };
	}

	var createWorkInProgress$2 = ReactFiber.createWorkInProgress;
	var createFiberFromElement$1 = ReactFiber.createFiberFromElement;
	var createFiberFromFragment$1 = ReactFiber.createFiberFromFragment;
	var createFiberFromText$1 = ReactFiber.createFiberFromText;
	var createFiberFromCoroutine$1 = ReactFiber.createFiberFromCoroutine;
	var createFiberFromYield$1 = ReactFiber.createFiberFromYield;
	var createFiberFromPortal$1 = ReactFiber.createFiberFromPortal;


	var isArray = Array.isArray;

	var FunctionalComponent$2 = ReactTypeOfWork.FunctionalComponent;
	var ClassComponent$7 = ReactTypeOfWork.ClassComponent;
	var HostText$5 = ReactTypeOfWork.HostText;
	var HostPortal$5 = ReactTypeOfWork.HostPortal;
	var CoroutineComponent$2 = ReactTypeOfWork.CoroutineComponent;
	var YieldComponent$3 = ReactTypeOfWork.YieldComponent;
	var Fragment$3 = ReactTypeOfWork.Fragment;
	var NoEffect$2 = ReactTypeOfSideEffect.NoEffect;
	var Placement$3 = ReactTypeOfSideEffect.Placement;
	var Deletion$1 = ReactTypeOfSideEffect.Deletion;


	var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
	var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.
	// The Symbol used to tag the ReactElement type. If there is no native Symbol
	// nor polyfill, then a plain number is used for performance.
	var REACT_ELEMENT_TYPE = typeof Symbol === 'function' && Symbol['for'] && Symbol['for']('react.element') || 0xeac7;

	function getIteratorFn(maybeIterable) {
	  if (maybeIterable === null || typeof maybeIterable === 'undefined') {
	    return null;
	  }
	  var iteratorFn = ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
	  if (typeof iteratorFn === 'function') {
	    return iteratorFn;
	  }
	  return null;
	}

	function coerceRef(current, element) {
	  var mixedRef = element.ref;
	  if (mixedRef !== null && typeof mixedRef !== 'function') {
	    if (element._owner) {
	      var owner = element._owner;
	      var inst = void 0;
	      if (owner) {
	        if (typeof owner.tag === 'number') {
	          var ownerFiber = owner;
	          !(ownerFiber.tag === ClassComponent$7) ? invariant(false, 'Stateless function components cannot have refs.') : void 0;
	          inst = ownerFiber.stateNode;
	        } else {
	          // Stack
	          inst = owner.getPublicInstance();
	        }
	      }
	      !inst ? invariant(false, 'Missing owner for string ref %s. This error is likely caused by a bug in React. Please file an issue.', mixedRef) : void 0;
	      var stringRef = '' + mixedRef;
	      // Check if previous string ref matches new string ref
	      if (current !== null && current.ref !== null && current.ref._stringRef === stringRef) {
	        return current.ref;
	      }
	      var ref = function (value) {
	        var refs = inst.refs === emptyObject ? inst.refs = {} : inst.refs;
	        if (value === null) {
	          delete refs[stringRef];
	        } else {
	          refs[stringRef] = value;
	        }
	      };
	      ref._stringRef = stringRef;
	      return ref;
	    } else {
	      !(typeof mixedRef === 'string') ? invariant(false, 'Expected ref to be a function or a string.') : void 0;
	      !element._owner ? invariant(false, 'Element ref was specified as a string (%s) but no owner was set. You may have multiple copies of React loaded. (details: https://fb.me/react-refs-must-have-owner).', mixedRef) : void 0;
	    }
	  }
	  return mixedRef;
	}

	function throwOnInvalidObjectType(returnFiber, newChild) {
	  if (returnFiber.type !== 'textarea') {
	    var addendum = '';
	    {
	      addendum = ' If you meant to render a collection of children, use an array ' + 'instead.' + (getCurrentFiberStackAddendum$5() || '');
	    }
	    invariant(false, 'Objects are not valid as a React child (found: %s).%s', Object.prototype.toString.call(newChild) === '[object Object]' ? 'object with keys {' + Object.keys(newChild).join(', ') + '}' : newChild, addendum);
	  }
	}

	function warnOnFunctionType() {
	  warning$24(false, 'Functions are not valid as a React child. This may happen if ' + 'you return a Component instead of <Component /> from render. ' + 'Or maybe you meant to call this function rather than return it.%s', getCurrentFiberStackAddendum$5() || '');
	}

	// This wrapper function exists because I expect to clone the code in each path
	// to be able to optimize each path individually by branching early. This needs
	// a compiler or we can do it manually. Helpers that don't need this branching
	// live outside of this function.
	function ChildReconciler(shouldClone, shouldTrackSideEffects) {
	  function deleteChild(returnFiber, childToDelete) {
	    if (!shouldTrackSideEffects) {
	      // Noop.
	      return;
	    }
	    if (!shouldClone) {
	      // When we're reconciling in place we have a work in progress copy. We
	      // actually want the current copy. If there is no current copy, then we
	      // don't need to track deletion side-effects.
	      if (childToDelete.alternate === null) {
	        return;
	      }
	      childToDelete = childToDelete.alternate;
	    }
	    // Deletions are added in reversed order so we add it to the front.
	    // At this point, the return fiber's effect list is empty except for
	    // deletions, so we can just append the deletion to the list. The remaining
	    // effects aren't added until the complete phase. Once we implement
	    // resuming, this may not be true.
	    var last = returnFiber.lastEffect;
	    if (last !== null) {
	      last.nextEffect = childToDelete;
	      returnFiber.lastEffect = childToDelete;
	    } else {
	      returnFiber.firstEffect = returnFiber.lastEffect = childToDelete;
	    }
	    childToDelete.nextEffect = null;
	    childToDelete.effectTag = Deletion$1;
	  }

	  function deleteRemainingChildren(returnFiber, currentFirstChild) {
	    if (!shouldTrackSideEffects) {
	      // Noop.
	      return null;
	    }

	    // TODO: For the shouldClone case, this could be micro-optimized a bit by
	    // assuming that after the first child we've already added everything.
	    var childToDelete = currentFirstChild;
	    while (childToDelete !== null) {
	      deleteChild(returnFiber, childToDelete);
	      childToDelete = childToDelete.sibling;
	    }
	    return null;
	  }

	  function mapRemainingChildren(returnFiber, currentFirstChild) {
	    // Add the remaining children to a temporary map so that we can find them by
	    // keys quickly. Implicit (null) keys get added to this set with their index
	    var existingChildren = new Map();

	    var existingChild = currentFirstChild;
	    while (existingChild !== null) {
	      if (existingChild.key !== null) {
	        existingChildren.set(existingChild.key, existingChild);
	      } else {
	        existingChildren.set(existingChild.index, existingChild);
	      }
	      existingChild = existingChild.sibling;
	    }
	    return existingChildren;
	  }

	  function useFiber(fiber, priority) {
	    // We currently set sibling to null and index to 0 here because it is easy
	    // to forget to do before returning it. E.g. for the single child case.
	    if (shouldClone) {
	      var clone = createWorkInProgress$2(fiber, priority);
	      clone.index = 0;
	      clone.sibling = null;
	      return clone;
	    } else {
	      // We override the pending priority even if it is higher, because if
	      // we're reconciling at a lower priority that means that this was
	      // down-prioritized.
	      fiber.pendingWorkPriority = priority;
	      fiber.effectTag = NoEffect$2;
	      fiber.index = 0;
	      fiber.sibling = null;
	      return fiber;
	    }
	  }

	  function placeChild(newFiber, lastPlacedIndex, newIndex) {
	    newFiber.index = newIndex;
	    if (!shouldTrackSideEffects) {
	      // Noop.
	      return lastPlacedIndex;
	    }
	    var current = newFiber.alternate;
	    if (current !== null) {
	      var oldIndex = current.index;
	      if (oldIndex < lastPlacedIndex) {
	        // This is a move.
	        newFiber.effectTag = Placement$3;
	        return lastPlacedIndex;
	      } else {
	        // This item can stay in place.
	        return oldIndex;
	      }
	    } else {
	      // This is an insertion.
	      newFiber.effectTag = Placement$3;
	      return lastPlacedIndex;
	    }
	  }

	  function placeSingleChild(newFiber) {
	    // This is simpler for the single child case. We only need to do a
	    // placement for inserting new children.
	    if (shouldTrackSideEffects && newFiber.alternate === null) {
	      newFiber.effectTag = Placement$3;
	    }
	    return newFiber;
	  }

	  function updateTextNode(returnFiber, current, textContent, priority) {
	    if (current === null || current.tag !== HostText$5) {
	      // Insert
	      var created = createFiberFromText$1(textContent, returnFiber.internalContextTag, priority);
	      created['return'] = returnFiber;
	      return created;
	    } else {
	      // Update
	      var existing = useFiber(current, priority);
	      existing.pendingProps = textContent;
	      existing['return'] = returnFiber;
	      return existing;
	    }
	  }

	  function updateElement(returnFiber, current, element, priority) {
	    if (current === null || current.type !== element.type) {
	      // Insert
	      var created = createFiberFromElement$1(element, returnFiber.internalContextTag, priority);
	      created.ref = coerceRef(current, element);
	      created['return'] = returnFiber;
	      return created;
	    } else {
	      // Move based on index
	      var existing = useFiber(current, priority);
	      existing.ref = coerceRef(current, element);
	      existing.pendingProps = element.props;
	      existing['return'] = returnFiber;
	      {
	        existing._debugSource = element._source;
	        existing._debugOwner = element._owner;
	      }
	      return existing;
	    }
	  }

	  function updateCoroutine(returnFiber, current, coroutine, priority) {
	    // TODO: Should this also compare handler to determine whether to reuse?
	    if (current === null || current.tag !== CoroutineComponent$2) {
	      // Insert
	      var created = createFiberFromCoroutine$1(coroutine, returnFiber.internalContextTag, priority);
	      created['return'] = returnFiber;
	      return created;
	    } else {
	      // Move based on index
	      var existing = useFiber(current, priority);
	      existing.pendingProps = coroutine;
	      existing['return'] = returnFiber;
	      return existing;
	    }
	  }

	  function updateYield(returnFiber, current, yieldNode, priority) {
	    if (current === null || current.tag !== YieldComponent$3) {
	      // Insert
	      var created = createFiberFromYield$1(yieldNode, returnFiber.internalContextTag, priority);
	      created.type = yieldNode.value;
	      created['return'] = returnFiber;
	      return created;
	    } else {
	      // Move based on index
	      var existing = useFiber(current, priority);
	      existing.type = yieldNode.value;
	      existing['return'] = returnFiber;
	      return existing;
	    }
	  }

	  function updatePortal(returnFiber, current, portal, priority) {
	    if (current === null || current.tag !== HostPortal$5 || current.stateNode.containerInfo !== portal.containerInfo || current.stateNode.implementation !== portal.implementation) {
	      // Insert
	      var created = createFiberFromPortal$1(portal, returnFiber.internalContextTag, priority);
	      created['return'] = returnFiber;
	      return created;
	    } else {
	      // Update
	      var existing = useFiber(current, priority);
	      existing.pendingProps = portal.children || [];
	      existing['return'] = returnFiber;
	      return existing;
	    }
	  }

	  function updateFragment(returnFiber, current, fragment, priority) {
	    if (current === null || current.tag !== Fragment$3) {
	      // Insert
	      var created = createFiberFromFragment$1(fragment, returnFiber.internalContextTag, priority);
	      created['return'] = returnFiber;
	      return created;
	    } else {
	      // Update
	      var existing = useFiber(current, priority);
	      existing.pendingProps = fragment;
	      existing['return'] = returnFiber;
	      return existing;
	    }
	  }

	  function createChild(returnFiber, newChild, priority) {
	    if (typeof newChild === 'string' || typeof newChild === 'number') {
	      // Text nodes doesn't have keys. If the previous node is implicitly keyed
	      // we can continue to replace it without aborting even if it is not a text
	      // node.
	      var created = createFiberFromText$1('' + newChild, returnFiber.internalContextTag, priority);
	      created['return'] = returnFiber;
	      return created;
	    }

	    if (typeof newChild === 'object' && newChild !== null) {
	      switch (newChild.$$typeof) {
	        case REACT_ELEMENT_TYPE:
	          {
	            var _created = createFiberFromElement$1(newChild, returnFiber.internalContextTag, priority);
	            _created.ref = coerceRef(null, newChild);
	            _created['return'] = returnFiber;
	            return _created;
	          }

	        case REACT_COROUTINE_TYPE:
	          {
	            var _created2 = createFiberFromCoroutine$1(newChild, returnFiber.internalContextTag, priority);
	            _created2['return'] = returnFiber;
	            return _created2;
	          }

	        case REACT_YIELD_TYPE:
	          {
	            var _created3 = createFiberFromYield$1(newChild, returnFiber.internalContextTag, priority);
	            _created3.type = newChild.value;
	            _created3['return'] = returnFiber;
	            return _created3;
	          }

	        case REACT_PORTAL_TYPE:
	          {
	            var _created4 = createFiberFromPortal$1(newChild, returnFiber.internalContextTag, priority);
	            _created4['return'] = returnFiber;
	            return _created4;
	          }
	      }

	      if (isArray(newChild) || getIteratorFn(newChild)) {
	        var _created5 = createFiberFromFragment$1(newChild, returnFiber.internalContextTag, priority);
	        _created5['return'] = returnFiber;
	        return _created5;
	      }

	      throwOnInvalidObjectType(returnFiber, newChild);
	    }

	    {
	      if (typeof newChild === 'function') {
	        warnOnFunctionType();
	      }
	    }

	    return null;
	  }

	  function updateSlot(returnFiber, oldFiber, newChild, priority) {
	    // Update the fiber if the keys match, otherwise return null.

	    var key = oldFiber !== null ? oldFiber.key : null;

	    if (typeof newChild === 'string' || typeof newChild === 'number') {
	      // Text nodes doesn't have keys. If the previous node is implicitly keyed
	      // we can continue to replace it without aborting even if it is not a text
	      // node.
	      if (key !== null) {
	        return null;
	      }
	      return updateTextNode(returnFiber, oldFiber, '' + newChild, priority);
	    }

	    if (typeof newChild === 'object' && newChild !== null) {
	      switch (newChild.$$typeof) {
	        case REACT_ELEMENT_TYPE:
	          {
	            if (newChild.key === key) {
	              return updateElement(returnFiber, oldFiber, newChild, priority);
	            } else {
	              return null;
	            }
	          }

	        case REACT_COROUTINE_TYPE:
	          {
	            if (newChild.key === key) {
	              return updateCoroutine(returnFiber, oldFiber, newChild, priority);
	            } else {
	              return null;
	            }
	          }

	        case REACT_YIELD_TYPE:
	          {
	            // Yields doesn't have keys. If the previous node is implicitly keyed
	            // we can continue to replace it without aborting even if it is not a
	            // yield.
	            if (key === null) {
	              return updateYield(returnFiber, oldFiber, newChild, priority);
	            } else {
	              return null;
	            }
	          }

	        case REACT_PORTAL_TYPE:
	          {
	            if (newChild.key === key) {
	              return updatePortal(returnFiber, oldFiber, newChild, priority);
	            } else {
	              return null;
	            }
	          }
	      }

	      if (isArray(newChild) || getIteratorFn(newChild)) {
	        // Fragments doesn't have keys so if the previous key is implicit we can
	        // update it.
	        if (key !== null) {
	          return null;
	        }
	        return updateFragment(returnFiber, oldFiber, newChild, priority);
	      }

	      throwOnInvalidObjectType(returnFiber, newChild);
	    }

	    {
	      if (typeof newChild === 'function') {
	        warnOnFunctionType();
	      }
	    }

	    return null;
	  }

	  function updateFromMap(existingChildren, returnFiber, newIdx, newChild, priority) {
	    if (typeof newChild === 'string' || typeof newChild === 'number') {
	      // Text nodes doesn't have keys, so we neither have to check the old nor
	      // new node for the key. If both are text nodes, they match.
	      var matchedFiber = existingChildren.get(newIdx) || null;
	      return updateTextNode(returnFiber, matchedFiber, '' + newChild, priority);
	    }

	    if (typeof newChild === 'object' && newChild !== null) {
	      switch (newChild.$$typeof) {
	        case REACT_ELEMENT_TYPE:
	          {
	            var _matchedFiber = existingChildren.get(newChild.key === null ? newIdx : newChild.key) || null;
	            return updateElement(returnFiber, _matchedFiber, newChild, priority);
	          }

	        case REACT_COROUTINE_TYPE:
	          {
	            var _matchedFiber2 = existingChildren.get(newChild.key === null ? newIdx : newChild.key) || null;
	            return updateCoroutine(returnFiber, _matchedFiber2, newChild, priority);
	          }

	        case REACT_YIELD_TYPE:
	          {
	            // Yields doesn't have keys, so we neither have to check the old nor
	            // new node for the key. If both are yields, they match.
	            var _matchedFiber3 = existingChildren.get(newIdx) || null;
	            return updateYield(returnFiber, _matchedFiber3, newChild, priority);
	          }

	        case REACT_PORTAL_TYPE:
	          {
	            var _matchedFiber4 = existingChildren.get(newChild.key === null ? newIdx : newChild.key) || null;
	            return updatePortal(returnFiber, _matchedFiber4, newChild, priority);
	          }
	      }

	      if (isArray(newChild) || getIteratorFn(newChild)) {
	        var _matchedFiber5 = existingChildren.get(newIdx) || null;
	        return updateFragment(returnFiber, _matchedFiber5, newChild, priority);
	      }

	      throwOnInvalidObjectType(returnFiber, newChild);
	    }

	    {
	      if (typeof newChild === 'function') {
	        warnOnFunctionType();
	      }
	    }

	    return null;
	  }

	  /**
	   * Warns if there is a duplicate or missing key
	   */
	  function warnOnInvalidKey(child, knownKeys) {
	    {
	      if (typeof child !== 'object' || child === null) {
	        return knownKeys;
	      }
	      switch (child.$$typeof) {
	        case REACT_ELEMENT_TYPE:
	        case REACT_COROUTINE_TYPE:
	        case REACT_PORTAL_TYPE:
	          warnForMissingKey(child);
	          var key = child.key;
	          if (typeof key !== 'string') {
	            break;
	          }
	          if (knownKeys === null) {
	            knownKeys = new Set();
	            knownKeys.add(key);
	            break;
	          }
	          if (!knownKeys.has(key)) {
	            knownKeys.add(key);
	            break;
	          }
	          warning$24(false, 'Encountered two children with the same key, `%s`. ' + 'Keys should be unique so that components maintain their identity ' + 'across updates. Non-unique keys may cause children to be ' + 'duplicated and/or omitted — the behavior is unsupported and ' + 'could change in a future version.%s', key, getCurrentFiberStackAddendum$5());
	          break;
	        default:
	          break;
	      }
	    }
	    return knownKeys;
	  }

	  function reconcileChildrenArray(returnFiber, currentFirstChild, newChildren, priority) {
	    // This algorithm can't optimize by searching from boths ends since we
	    // don't have backpointers on fibers. I'm trying to see how far we can get
	    // with that model. If it ends up not being worth the tradeoffs, we can
	    // add it later.

	    // Even with a two ended optimization, we'd want to optimize for the case
	    // where there are few changes and brute force the comparison instead of
	    // going for the Map. It'd like to explore hitting that path first in
	    // forward-only mode and only go for the Map once we notice that we need
	    // lots of look ahead. This doesn't handle reversal as well as two ended
	    // search but that's unusual. Besides, for the two ended optimization to
	    // work on Iterables, we'd need to copy the whole set.

	    // In this first iteration, we'll just live with hitting the bad case
	    // (adding everything to a Map) in for every insert/move.

	    // If you change this code, also update reconcileChildrenIterator() which
	    // uses the same algorithm.

	    {
	      // First, validate keys.
	      var knownKeys = null;
	      for (var i = 0; i < newChildren.length; i++) {
	        var child = newChildren[i];
	        knownKeys = warnOnInvalidKey(child, knownKeys);
	      }
	    }

	    var resultingFirstChild = null;
	    var previousNewFiber = null;

	    var oldFiber = currentFirstChild;
	    var lastPlacedIndex = 0;
	    var newIdx = 0;
	    var nextOldFiber = null;
	    for (; oldFiber !== null && newIdx < newChildren.length; newIdx++) {
	      if (oldFiber.index > newIdx) {
	        nextOldFiber = oldFiber;
	        oldFiber = null;
	      } else {
	        nextOldFiber = oldFiber.sibling;
	      }
	      var newFiber = updateSlot(returnFiber, oldFiber, newChildren[newIdx], priority);
	      if (newFiber === null) {
	        // TODO: This breaks on empty slots like null children. That's
	        // unfortunate because it triggers the slow path all the time. We need
	        // a better way to communicate whether this was a miss or null,
	        // boolean, undefined, etc.
	        if (oldFiber === null) {
	          oldFiber = nextOldFiber;
	        }
	        break;
	      }
	      if (shouldTrackSideEffects) {
	        if (oldFiber && newFiber.alternate === null) {
	          // We matched the slot, but we didn't reuse the existing fiber, so we
	          // need to delete the existing child.
	          deleteChild(returnFiber, oldFiber);
	        }
	      }
	      lastPlacedIndex = placeChild(newFiber, lastPlacedIndex, newIdx);
	      if (previousNewFiber === null) {
	        // TODO: Move out of the loop. This only happens for the first run.
	        resultingFirstChild = newFiber;
	      } else {
	        // TODO: Defer siblings if we're not at the right index for this slot.
	        // I.e. if we had null values before, then we want to defer this
	        // for each null value. However, we also don't want to call updateSlot
	        // with the previous one.
	        previousNewFiber.sibling = newFiber;
	      }
	      previousNewFiber = newFiber;
	      oldFiber = nextOldFiber;
	    }

	    if (newIdx === newChildren.length) {
	      // We've reached the end of the new children. We can delete the rest.
	      deleteRemainingChildren(returnFiber, oldFiber);
	      return resultingFirstChild;
	    }

	    if (oldFiber === null) {
	      // If we don't have any more existing children we can choose a fast path
	      // since the rest will all be insertions.
	      for (; newIdx < newChildren.length; newIdx++) {
	        var _newFiber = createChild(returnFiber, newChildren[newIdx], priority);
	        if (!_newFiber) {
	          continue;
	        }
	        lastPlacedIndex = placeChild(_newFiber, lastPlacedIndex, newIdx);
	        if (previousNewFiber === null) {
	          // TODO: Move out of the loop. This only happens for the first run.
	          resultingFirstChild = _newFiber;
	        } else {
	          previousNewFiber.sibling = _newFiber;
	        }
	        previousNewFiber = _newFiber;
	      }
	      return resultingFirstChild;
	    }

	    // Add all children to a key map for quick lookups.
	    var existingChildren = mapRemainingChildren(returnFiber, oldFiber);

	    // Keep scanning and use the map to restore deleted items as moves.
	    for (; newIdx < newChildren.length; newIdx++) {
	      var _newFiber2 = updateFromMap(existingChildren, returnFiber, newIdx, newChildren[newIdx], priority);
	      if (_newFiber2) {
	        if (shouldTrackSideEffects) {
	          if (_newFiber2.alternate !== null) {
	            // The new fiber is a work in progress, but if there exists a
	            // current, that means that we reused the fiber. We need to delete
	            // it from the child list so that we don't add it to the deletion
	            // list.
	            existingChildren['delete'](_newFiber2.key === null ? newIdx : _newFiber2.key);
	          }
	        }
	        lastPlacedIndex = placeChild(_newFiber2, lastPlacedIndex, newIdx);
	        if (previousNewFiber === null) {
	          resultingFirstChild = _newFiber2;
	        } else {
	          previousNewFiber.sibling = _newFiber2;
	        }
	        previousNewFiber = _newFiber2;
	      }
	    }

	    if (shouldTrackSideEffects) {
	      // Any existing children that weren't consumed above were deleted. We need
	      // to add them to the deletion list.
	      existingChildren.forEach(function (child) {
	        return deleteChild(returnFiber, child);
	      });
	    }

	    return resultingFirstChild;
	  }

	  function reconcileChildrenIterator(returnFiber, currentFirstChild, newChildrenIterable, priority) {
	    // This is the same implementation as reconcileChildrenArray(),
	    // but using the iterator instead.

	    var iteratorFn = getIteratorFn(newChildrenIterable);
	    !(typeof iteratorFn === 'function') ? invariant(false, 'An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.') : void 0;

	    {
	      // Warn about using Maps as children
	      if (typeof newChildrenIterable.entries === 'function') {
	        var possibleMap = newChildrenIterable;
	        if (possibleMap.entries === iteratorFn) {
	          warning$24(didWarnAboutMaps, 'Using Maps as children is unsupported and will likely yield ' + 'unexpected results. Convert it to a sequence/iterable of keyed ' + 'ReactElements instead.%s', getCurrentFiberStackAddendum$5());
	          didWarnAboutMaps = true;
	        }
	      }

	      // First, validate keys.
	      // We'll get a different iterator later for the main pass.
	      var _newChildren = iteratorFn.call(newChildrenIterable);
	      if (_newChildren) {
	        var knownKeys = null;
	        var _step = _newChildren.next();
	        for (; !_step.done; _step = _newChildren.next()) {
	          var child = _step.value;
	          knownKeys = warnOnInvalidKey(child, knownKeys);
	        }
	      }
	    }

	    var newChildren = iteratorFn.call(newChildrenIterable);
	    !(newChildren != null) ? invariant(false, 'An iterable object provided no iterator.') : void 0;

	    var resultingFirstChild = null;
	    var previousNewFiber = null;

	    var oldFiber = currentFirstChild;
	    var lastPlacedIndex = 0;
	    var newIdx = 0;
	    var nextOldFiber = null;

	    var step = newChildren.next();
	    for (; oldFiber !== null && !step.done; newIdx++, step = newChildren.next()) {
	      if (oldFiber.index > newIdx) {
	        nextOldFiber = oldFiber;
	        oldFiber = null;
	      } else {
	        nextOldFiber = oldFiber.sibling;
	      }
	      var newFiber = updateSlot(returnFiber, oldFiber, step.value, priority);
	      if (newFiber === null) {
	        // TODO: This breaks on empty slots like null children. That's
	        // unfortunate because it triggers the slow path all the time. We need
	        // a better way to communicate whether this was a miss or null,
	        // boolean, undefined, etc.
	        if (!oldFiber) {
	          oldFiber = nextOldFiber;
	        }
	        break;
	      }
	      if (shouldTrackSideEffects) {
	        if (oldFiber && newFiber.alternate === null) {
	          // We matched the slot, but we didn't reuse the existing fiber, so we
	          // need to delete the existing child.
	          deleteChild(returnFiber, oldFiber);
	        }
	      }
	      lastPlacedIndex = placeChild(newFiber, lastPlacedIndex, newIdx);
	      if (previousNewFiber === null) {
	        // TODO: Move out of the loop. This only happens for the first run.
	        resultingFirstChild = newFiber;
	      } else {
	        // TODO: Defer siblings if we're not at the right index for this slot.
	        // I.e. if we had null values before, then we want to defer this
	        // for each null value. However, we also don't want to call updateSlot
	        // with the previous one.
	        previousNewFiber.sibling = newFiber;
	      }
	      previousNewFiber = newFiber;
	      oldFiber = nextOldFiber;
	    }

	    if (step.done) {
	      // We've reached the end of the new children. We can delete the rest.
	      deleteRemainingChildren(returnFiber, oldFiber);
	      return resultingFirstChild;
	    }

	    if (oldFiber === null) {
	      // If we don't have any more existing children we can choose a fast path
	      // since the rest will all be insertions.
	      for (; !step.done; newIdx++, step = newChildren.next()) {
	        var _newFiber3 = createChild(returnFiber, step.value, priority);
	        if (_newFiber3 === null) {
	          continue;
	        }
	        lastPlacedIndex = placeChild(_newFiber3, lastPlacedIndex, newIdx);
	        if (previousNewFiber === null) {
	          // TODO: Move out of the loop. This only happens for the first run.
	          resultingFirstChild = _newFiber3;
	        } else {
	          previousNewFiber.sibling = _newFiber3;
	        }
	        previousNewFiber = _newFiber3;
	      }
	      return resultingFirstChild;
	    }

	    // Add all children to a key map for quick lookups.
	    var existingChildren = mapRemainingChildren(returnFiber, oldFiber);

	    // Keep scanning and use the map to restore deleted items as moves.
	    for (; !step.done; newIdx++, step = newChildren.next()) {
	      var _newFiber4 = updateFromMap(existingChildren, returnFiber, newIdx, step.value, priority);
	      if (_newFiber4 !== null) {
	        if (shouldTrackSideEffects) {
	          if (_newFiber4.alternate !== null) {
	            // The new fiber is a work in progress, but if there exists a
	            // current, that means that we reused the fiber. We need to delete
	            // it from the child list so that we don't add it to the deletion
	            // list.
	            existingChildren['delete'](_newFiber4.key === null ? newIdx : _newFiber4.key);
	          }
	        }
	        lastPlacedIndex = placeChild(_newFiber4, lastPlacedIndex, newIdx);
	        if (previousNewFiber === null) {
	          resultingFirstChild = _newFiber4;
	        } else {
	          previousNewFiber.sibling = _newFiber4;
	        }
	        previousNewFiber = _newFiber4;
	      }
	    }

	    if (shouldTrackSideEffects) {
	      // Any existing children that weren't consumed above were deleted. We need
	      // to add them to the deletion list.
	      existingChildren.forEach(function (child) {
	        return deleteChild(returnFiber, child);
	      });
	    }

	    return resultingFirstChild;
	  }

	  function reconcileSingleTextNode(returnFiber, currentFirstChild, textContent, priority) {
	    // There's no need to check for keys on text nodes since we don't have a
	    // way to define them.
	    if (currentFirstChild !== null && currentFirstChild.tag === HostText$5) {
	      // We already have an existing node so let's just update it and delete
	      // the rest.
	      deleteRemainingChildren(returnFiber, currentFirstChild.sibling);
	      var existing = useFiber(currentFirstChild, priority);
	      existing.pendingProps = textContent;
	      existing['return'] = returnFiber;
	      return existing;
	    }
	    // The existing first child is not a text node so we need to create one
	    // and delete the existing ones.
	    deleteRemainingChildren(returnFiber, currentFirstChild);
	    var created = createFiberFromText$1(textContent, returnFiber.internalContextTag, priority);
	    created['return'] = returnFiber;
	    return created;
	  }

	  function reconcileSingleElement(returnFiber, currentFirstChild, element, priority) {
	    var key = element.key;
	    var child = currentFirstChild;
	    while (child !== null) {
	      // TODO: If key === null and child.key === null, then this only applies to
	      // the first item in the list.
	      if (child.key === key) {
	        if (child.type === element.type) {
	          deleteRemainingChildren(returnFiber, child.sibling);
	          var existing = useFiber(child, priority);
	          existing.ref = coerceRef(child, element);
	          existing.pendingProps = element.props;
	          existing['return'] = returnFiber;
	          {
	            existing._debugSource = element._source;
	            existing._debugOwner = element._owner;
	          }
	          return existing;
	        } else {
	          deleteRemainingChildren(returnFiber, child);
	          break;
	        }
	      } else {
	        deleteChild(returnFiber, child);
	      }
	      child = child.sibling;
	    }

	    var created = createFiberFromElement$1(element, returnFiber.internalContextTag, priority);
	    created.ref = coerceRef(currentFirstChild, element);
	    created['return'] = returnFiber;
	    return created;
	  }

	  function reconcileSingleCoroutine(returnFiber, currentFirstChild, coroutine, priority) {
	    var key = coroutine.key;
	    var child = currentFirstChild;
	    while (child !== null) {
	      // TODO: If key === null and child.key === null, then this only applies to
	      // the first item in the list.
	      if (child.key === key) {
	        if (child.tag === CoroutineComponent$2) {
	          deleteRemainingChildren(returnFiber, child.sibling);
	          var existing = useFiber(child, priority);
	          existing.pendingProps = coroutine;
	          existing['return'] = returnFiber;
	          return existing;
	        } else {
	          deleteRemainingChildren(returnFiber, child);
	          break;
	        }
	      } else {
	        deleteChild(returnFiber, child);
	      }
	      child = child.sibling;
	    }

	    var created = createFiberFromCoroutine$1(coroutine, returnFiber.internalContextTag, priority);
	    created['return'] = returnFiber;
	    return created;
	  }

	  function reconcileSingleYield(returnFiber, currentFirstChild, yieldNode, priority) {
	    // There's no need to check for keys on yields since they're stateless.
	    var child = currentFirstChild;
	    if (child !== null) {
	      if (child.tag === YieldComponent$3) {
	        deleteRemainingChildren(returnFiber, child.sibling);
	        var existing = useFiber(child, priority);
	        existing.type = yieldNode.value;
	        existing['return'] = returnFiber;
	        return existing;
	      } else {
	        deleteRemainingChildren(returnFiber, child);
	      }
	    }

	    var created = createFiberFromYield$1(yieldNode, returnFiber.internalContextTag, priority);
	    created.type = yieldNode.value;
	    created['return'] = returnFiber;
	    return created;
	  }

	  function reconcileSinglePortal(returnFiber, currentFirstChild, portal, priority) {
	    var key = portal.key;
	    var child = currentFirstChild;
	    while (child !== null) {
	      // TODO: If key === null and child.key === null, then this only applies to
	      // the first item in the list.
	      if (child.key === key) {
	        if (child.tag === HostPortal$5 && child.stateNode.containerInfo === portal.containerInfo && child.stateNode.implementation === portal.implementation) {
	          deleteRemainingChildren(returnFiber, child.sibling);
	          var existing = useFiber(child, priority);
	          existing.pendingProps = portal.children || [];
	          existing['return'] = returnFiber;
	          return existing;
	        } else {
	          deleteRemainingChildren(returnFiber, child);
	          break;
	        }
	      } else {
	        deleteChild(returnFiber, child);
	      }
	      child = child.sibling;
	    }

	    var created = createFiberFromPortal$1(portal, returnFiber.internalContextTag, priority);
	    created['return'] = returnFiber;
	    return created;
	  }

	  // This API will tag the children with the side-effect of the reconciliation
	  // itself. They will be added to the side-effect list as we pass through the
	  // children and the parent.
	  function reconcileChildFibers(returnFiber, currentFirstChild, newChild, priority) {
	    // This function is not recursive.
	    // If the top level item is an array, we treat it as a set of children,
	    // not as a fragment. Nested arrays on the other hand will be treated as
	    // fragment nodes. Recursion happens at the normal flow.

	    // Handle object types
	    var isObject = typeof newChild === 'object' && newChild !== null;
	    if (isObject) {
	      // Support only the subset of return types that Stack supports. Treat
	      // everything else as empty, but log a warning.
	      switch (newChild.$$typeof) {
	        case REACT_ELEMENT_TYPE:
	          return placeSingleChild(reconcileSingleElement(returnFiber, currentFirstChild, newChild, priority));

	        case REACT_COROUTINE_TYPE:
	          return placeSingleChild(reconcileSingleCoroutine(returnFiber, currentFirstChild, newChild, priority));

	        case REACT_YIELD_TYPE:
	          return placeSingleChild(reconcileSingleYield(returnFiber, currentFirstChild, newChild, priority));

	        case REACT_PORTAL_TYPE:
	          return placeSingleChild(reconcileSinglePortal(returnFiber, currentFirstChild, newChild, priority));
	      }
	    }

	    if (typeof newChild === 'string' || typeof newChild === 'number') {
	      return placeSingleChild(reconcileSingleTextNode(returnFiber, currentFirstChild, '' + newChild, priority));
	    }

	    if (isArray(newChild)) {
	      return reconcileChildrenArray(returnFiber, currentFirstChild, newChild, priority);
	    }

	    if (getIteratorFn(newChild)) {
	      return reconcileChildrenIterator(returnFiber, currentFirstChild, newChild, priority);
	    }

	    if (isObject) {
	      throwOnInvalidObjectType(returnFiber, newChild);
	    }

	    {
	      if (typeof newChild === 'function') {
	        warnOnFunctionType();
	      }
	    }
	    if (typeof newChild === 'undefined') {
	      // If the new child is undefined, and the return fiber is a composite
	      // component, throw an error. If Fiber return types are disabled,
	      // we already threw above.
	      switch (returnFiber.tag) {
	        case ClassComponent$7:
	          {
	            {
	              var instance = returnFiber.stateNode;
	              if (instance.render._isMockFunction) {
	                // We allow auto-mocks to proceed as if they're returning null.
	                break;
	              }
	            }
	          }
	        // Intentionally fall through to the next case, which handles both
	        // functions and classes
	        // eslint-disable-next-lined no-fallthrough
	        case FunctionalComponent$2:
	          {
	            var Component = returnFiber.type;
	            invariant(false, '%s(...): Nothing was returned from render. This usually means a return statement is missing. Or, to render nothing, return null.', Component.displayName || Component.name || 'Component');
	          }
	      }
	    }

	    // Remaining cases are all treated as empty.
	    return deleteRemainingChildren(returnFiber, currentFirstChild);
	  }

	  return reconcileChildFibers;
	}

	var reconcileChildFibers$1 = ChildReconciler(true, true);

	var reconcileChildFibersInPlace$1 = ChildReconciler(false, true);

	var mountChildFibersInPlace$1 = ChildReconciler(false, false);

	var cloneChildFibers$1 = function (current, workInProgress) {
	  !(current === null || workInProgress.child === current.child) ? invariant(false, 'Resuming work not yet implemented.') : void 0;

	  if (workInProgress.child === null) {
	    return;
	  }

	  var currentChild = workInProgress.child;
	  var newChild = createWorkInProgress$2(currentChild, currentChild.pendingWorkPriority);
	  // TODO: Pass this as an argument, since it's easy to forget.
	  newChild.pendingProps = currentChild.pendingProps;
	  workInProgress.child = newChild;

	  newChild['return'] = workInProgress;
	  while (currentChild.sibling !== null) {
	    currentChild = currentChild.sibling;
	    newChild = newChild.sibling = createWorkInProgress$2(currentChild, currentChild.pendingWorkPriority);
	    newChild.pendingProps = currentChild.pendingProps;
	    newChild['return'] = workInProgress;
	  }
	  newChild.sibling = null;
	};

	var ReactChildFiber = {
		reconcileChildFibers: reconcileChildFibers$1,
		reconcileChildFibersInPlace: reconcileChildFibersInPlace$1,
		mountChildFibersInPlace: mountChildFibersInPlace$1,
		cloneChildFibers: cloneChildFibers$1
	};

	var Update$1 = ReactTypeOfSideEffect.Update;



	var AsyncUpdates$1 = ReactTypeOfInternalContext.AsyncUpdates;

	var cacheContext$1 = ReactFiberContext.cacheContext;
	var getMaskedContext$2 = ReactFiberContext.getMaskedContext;
	var getUnmaskedContext$2 = ReactFiberContext.getUnmaskedContext;
	var isContextConsumer$1 = ReactFiberContext.isContextConsumer;

	var addUpdate$1 = ReactFiberUpdateQueue.addUpdate;
	var addReplaceUpdate$1 = ReactFiberUpdateQueue.addReplaceUpdate;
	var addForceUpdate$1 = ReactFiberUpdateQueue.addForceUpdate;
	var beginUpdateQueue$2 = ReactFiberUpdateQueue.beginUpdateQueue;

	var _require5 = ReactFiberContext;
	var hasContextChanged$2 = _require5.hasContextChanged;

	var isMounted$1 = ReactFiberTreeReflection.isMounted;







	var fakeInternalInstance = {};
	var isArray$1 = Array.isArray;

	{
	  var _require7$1 = ReactDebugFiberPerf_1,
	      startPhaseTimer$1 = _require7$1.startPhaseTimer,
	      stopPhaseTimer$1 = _require7$1.stopPhaseTimer;

	  var warning$25 = require$$0;
	  var warnOnInvalidCallback = function (callback, callerName) {
	    warning$25(callback === null || typeof callback === 'function', '%s(...): Expected the last optional `callback` argument to be a ' + 'function. Instead received: %s.', callerName, callback);
	  };

	  // This is so gross but it's at least non-critical and can be removed if
	  // it causes problems. This is meant to give a nicer error message for
	  // ReactDOM15.unstable_renderSubtreeIntoContainer(reactDOM16Component,
	  // ...)) which otherwise throws a "_processChildContext is not a function"
	  // exception.
	  Object.defineProperty(fakeInternalInstance, '_processChildContext', {
	    enumerable: false,
	    value: function () {
	      invariant(false, '_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn\'t supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).');
	    }
	  });
	  Object.freeze(fakeInternalInstance);
	}

	var ReactFiberClassComponent = function (scheduleUpdate, getPriorityContext, memoizeProps, memoizeState) {
	  // Class component state updater
	  var updater = {
	    isMounted: isMounted$1,
	    enqueueSetState: function (instance, partialState, callback) {
	      var fiber = ReactInstanceMap_1.get(instance);
	      var priorityLevel = getPriorityContext(fiber, false);
	      callback = callback === undefined ? null : callback;
	      {
	        warnOnInvalidCallback(callback, 'setState');
	      }
	      addUpdate$1(fiber, partialState, callback, priorityLevel);
	      scheduleUpdate(fiber, priorityLevel);
	    },
	    enqueueReplaceState: function (instance, state, callback) {
	      var fiber = ReactInstanceMap_1.get(instance);
	      var priorityLevel = getPriorityContext(fiber, false);
	      callback = callback === undefined ? null : callback;
	      {
	        warnOnInvalidCallback(callback, 'replaceState');
	      }
	      addReplaceUpdate$1(fiber, state, callback, priorityLevel);
	      scheduleUpdate(fiber, priorityLevel);
	    },
	    enqueueForceUpdate: function (instance, callback) {
	      var fiber = ReactInstanceMap_1.get(instance);
	      var priorityLevel = getPriorityContext(fiber, false);
	      callback = callback === undefined ? null : callback;
	      {
	        warnOnInvalidCallback(callback, 'forceUpdate');
	      }
	      addForceUpdate$1(fiber, callback, priorityLevel);
	      scheduleUpdate(fiber, priorityLevel);
	    }
	  };

	  function checkShouldComponentUpdate(workInProgress, oldProps, newProps, oldState, newState, newContext) {
	    if (oldProps === null || workInProgress.updateQueue !== null && workInProgress.updateQueue.hasForceUpdate) {
	      // If the workInProgress already has an Update effect, return true
	      return true;
	    }

	    var instance = workInProgress.stateNode;
	    var type = workInProgress.type;
	    if (typeof instance.shouldComponentUpdate === 'function') {
	      {
	        startPhaseTimer$1(workInProgress, 'shouldComponentUpdate');
	      }
	      var shouldUpdate = instance.shouldComponentUpdate(newProps, newState, newContext);
	      {
	        stopPhaseTimer$1();
	      }

	      {
	        warning$25(shouldUpdate !== undefined, '%s.shouldComponentUpdate(): Returned undefined instead of a ' + 'boolean value. Make sure to return true or false.', getComponentName_1(workInProgress) || 'Unknown');
	      }

	      return shouldUpdate;
	    }

	    if (type.prototype && type.prototype.isPureReactComponent) {
	      return !shallowEqual(oldProps, newProps) || !shallowEqual(oldState, newState);
	    }

	    return true;
	  }

	  function checkClassInstance(workInProgress) {
	    var instance = workInProgress.stateNode;
	    var type = workInProgress.type;
	    {
	      var name = getComponentName_1(workInProgress);
	      var renderPresent = instance.render;
	      warning$25(renderPresent, '%s(...): No `render` method found on the returned component ' + 'instance: you may have forgotten to define `render`.', name);
	      var noGetInitialStateOnES6 = !instance.getInitialState || instance.getInitialState.isReactClassApproved || instance.state;
	      warning$25(noGetInitialStateOnES6, 'getInitialState was defined on %s, a plain JavaScript class. ' + 'This is only supported for classes created using React.createClass. ' + 'Did you mean to define a state property instead?', name);
	      var noGetDefaultPropsOnES6 = !instance.getDefaultProps || instance.getDefaultProps.isReactClassApproved;
	      warning$25(noGetDefaultPropsOnES6, 'getDefaultProps was defined on %s, a plain JavaScript class. ' + 'This is only supported for classes created using React.createClass. ' + 'Use a static property to define defaultProps instead.', name);
	      var noInstancePropTypes = !instance.propTypes;
	      warning$25(noInstancePropTypes, 'propTypes was defined as an instance property on %s. Use a static ' + 'property to define propTypes instead.', name);
	      var noInstanceContextTypes = !instance.contextTypes;
	      warning$25(noInstanceContextTypes, 'contextTypes was defined as an instance property on %s. Use a static ' + 'property to define contextTypes instead.', name);
	      var noComponentShouldUpdate = typeof instance.componentShouldUpdate !== 'function';
	      warning$25(noComponentShouldUpdate, '%s has a method called ' + 'componentShouldUpdate(). Did you mean shouldComponentUpdate()? ' + 'The name is phrased as a question because the function is ' + 'expected to return a value.', name);
	      if (type.prototype && type.prototype.isPureReactComponent && typeof instance.shouldComponentUpdate !== 'undefined') {
	        warning$25(false, '%s has a method called shouldComponentUpdate(). ' + 'shouldComponentUpdate should not be used when extending React.PureComponent. ' + 'Please extend React.Component if shouldComponentUpdate is used.', getComponentName_1(workInProgress) || 'A pure component');
	      }
	      var noComponentDidUnmount = typeof instance.componentDidUnmount !== 'function';
	      warning$25(noComponentDidUnmount, '%s has a method called ' + 'componentDidUnmount(). But there is no such lifecycle method. ' + 'Did you mean componentWillUnmount()?', name);
	      var noComponentWillRecieveProps = typeof instance.componentWillRecieveProps !== 'function';
	      warning$25(noComponentWillRecieveProps, '%s has a method called ' + 'componentWillRecieveProps(). Did you mean componentWillReceiveProps()?', name);
	      var hasMutatedProps = instance.props !== workInProgress.pendingProps;
	      warning$25(instance.props === undefined || !hasMutatedProps, '%s(...): When calling super() in `%s`, make sure to pass ' + "up the same props that your component's constructor was passed.", name, name);
	      var noInstanceDefaultProps = !instance.defaultProps;
	      warning$25(noInstanceDefaultProps, 'Setting defaultProps as an instance property on %s is not supported and will be ignored.' + ' Instead, define defaultProps as a static property on %s.', name, name);
	    }

	    var state = instance.state;
	    if (state && (typeof state !== 'object' || isArray$1(state))) {
	      invariant(false, '%s.state: must be set to an object or null', getComponentName_1(workInProgress));
	    }
	    if (typeof instance.getChildContext === 'function') {
	      !(typeof workInProgress.type.childContextTypes === 'object') ? invariant(false, '%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().', getComponentName_1(workInProgress)) : void 0;
	    }
	  }

	  function resetInputPointers(workInProgress, instance) {
	    instance.props = workInProgress.memoizedProps;
	    instance.state = workInProgress.memoizedState;
	  }

	  function adoptClassInstance(workInProgress, instance) {
	    instance.updater = updater;
	    workInProgress.stateNode = instance;
	    // The instance needs access to the fiber so that it can schedule updates
	    ReactInstanceMap_1.set(instance, workInProgress);
	    {
	      instance._reactInternalInstance = fakeInternalInstance;
	    }
	  }

	  function constructClassInstance(workInProgress, props) {
	    var ctor = workInProgress.type;
	    var unmaskedContext = getUnmaskedContext$2(workInProgress);
	    var needsContext = isContextConsumer$1(workInProgress);
	    var context = needsContext ? getMaskedContext$2(workInProgress, unmaskedContext) : emptyObject;
	    var instance = new ctor(props, context);
	    adoptClassInstance(workInProgress, instance);

	    // Cache unmasked context so we can avoid recreating masked context unless necessary.
	    // ReactFiberContext usually updates this cache but can't for newly-created instances.
	    if (needsContext) {
	      cacheContext$1(workInProgress, unmaskedContext, context);
	    }

	    return instance;
	  }

	  function callComponentWillMount(workInProgress, instance) {
	    {
	      startPhaseTimer$1(workInProgress, 'componentWillMount');
	    }
	    var oldState = instance.state;
	    instance.componentWillMount();
	    {
	      stopPhaseTimer$1();
	    }

	    if (oldState !== instance.state) {
	      {
	        warning$25(false, '%s.componentWillMount(): Assigning directly to this.state is ' + "deprecated (except inside a component's " + 'constructor). Use setState instead.', getComponentName_1(workInProgress));
	      }
	      updater.enqueueReplaceState(instance, instance.state, null);
	    }
	  }

	  function callComponentWillReceiveProps(workInProgress, instance, newProps, newContext) {
	    {
	      startPhaseTimer$1(workInProgress, 'componentWillReceiveProps');
	    }
	    var oldState = instance.state;
	    instance.componentWillReceiveProps(newProps, newContext);
	    {
	      stopPhaseTimer$1();
	    }

	    if (instance.state !== oldState) {
	      {
	        warning$25(false, '%s.componentWillReceiveProps(): Assigning directly to ' + "this.state is deprecated (except inside a component's " + 'constructor). Use setState instead.', getComponentName_1(workInProgress));
	      }
	      updater.enqueueReplaceState(instance, instance.state, null);
	    }
	  }

	  // Invokes the mount life-cycles on a previously never rendered instance.
	  function mountClassInstance(workInProgress, priorityLevel) {
	    var current = workInProgress.alternate;

	    {
	      checkClassInstance(workInProgress);
	    }

	    var instance = workInProgress.stateNode;
	    var state = instance.state || null;

	    var props = workInProgress.pendingProps;
	    !props ? invariant(false, 'There must be pending props for an initial mount. This error is likely caused by a bug in React. Please file an issue.') : void 0;

	    var unmaskedContext = getUnmaskedContext$2(workInProgress);

	    instance.props = props;
	    instance.state = state;
	    instance.refs = emptyObject;
	    instance.context = getMaskedContext$2(workInProgress, unmaskedContext);

	    if (ReactFeatureFlags_1.enableAsyncSubtreeAPI && workInProgress.type != null && workInProgress.type.prototype != null && workInProgress.type.prototype.unstable_isAsyncReactComponent === true) {
	      workInProgress.internalContextTag |= AsyncUpdates$1;
	    }

	    if (typeof instance.componentWillMount === 'function') {
	      callComponentWillMount(workInProgress, instance);
	      // If we had additional state updates during this life-cycle, let's
	      // process them now.
	      var updateQueue = workInProgress.updateQueue;
	      if (updateQueue !== null) {
	        instance.state = beginUpdateQueue$2(current, workInProgress, updateQueue, instance, state, props, priorityLevel);
	      }
	    }
	    if (typeof instance.componentDidMount === 'function') {
	      workInProgress.effectTag |= Update$1;
	    }
	  }

	  // Called on a preexisting class instance. Returns false if a resumed render
	  // could be reused.
	  // function resumeMountClassInstance(
	  //   workInProgress: Fiber,
	  //   priorityLevel: PriorityLevel,
	  // ): boolean {
	  //   const instance = workInProgress.stateNode;
	  //   resetInputPointers(workInProgress, instance);

	  //   let newState = workInProgress.memoizedState;
	  //   let newProps = workInProgress.pendingProps;
	  //   if (!newProps) {
	  //     // If there isn't any new props, then we'll reuse the memoized props.
	  //     // This could be from already completed work.
	  //     newProps = workInProgress.memoizedProps;
	  //     invariant(
	  //       newProps != null,
	  //       'There should always be pending or memoized props. This error is ' +
	  //         'likely caused by a bug in React. Please file an issue.',
	  //     );
	  //   }
	  //   const newUnmaskedContext = getUnmaskedContext(workInProgress);
	  //   const newContext = getMaskedContext(workInProgress, newUnmaskedContext);

	  //   const oldContext = instance.context;
	  //   const oldProps = workInProgress.memoizedProps;

	  //   if (
	  //     typeof instance.componentWillReceiveProps === 'function' &&
	  //     (oldProps !== newProps || oldContext !== newContext)
	  //   ) {
	  //     callComponentWillReceiveProps(
	  //       workInProgress,
	  //       instance,
	  //       newProps,
	  //       newContext,
	  //     );
	  //   }

	  //   // Process the update queue before calling shouldComponentUpdate
	  //   const updateQueue = workInProgress.updateQueue;
	  //   if (updateQueue !== null) {
	  //     newState = beginUpdateQueue(
	  //       workInProgress,
	  //       updateQueue,
	  //       instance,
	  //       newState,
	  //       newProps,
	  //       priorityLevel,
	  //     );
	  //   }

	  //   // TODO: Should we deal with a setState that happened after the last
	  //   // componentWillMount and before this componentWillMount? Probably
	  //   // unsupported anyway.

	  //   if (
	  //     !checkShouldComponentUpdate(
	  //       workInProgress,
	  //       workInProgress.memoizedProps,
	  //       newProps,
	  //       workInProgress.memoizedState,
	  //       newState,
	  //       newContext,
	  //     )
	  //   ) {
	  //     // Update the existing instance's state, props, and context pointers even
	  //     // though we're bailing out.
	  //     instance.props = newProps;
	  //     instance.state = newState;
	  //     instance.context = newContext;
	  //     return false;
	  //   }

	  //   // Update the input pointers now so that they are correct when we call
	  //   // componentWillMount
	  //   instance.props = newProps;
	  //   instance.state = newState;
	  //   instance.context = newContext;

	  //   if (typeof instance.componentWillMount === 'function') {
	  //     callComponentWillMount(workInProgress, instance);
	  //     // componentWillMount may have called setState. Process the update queue.
	  //     const newUpdateQueue = workInProgress.updateQueue;
	  //     if (newUpdateQueue !== null) {
	  //       newState = beginUpdateQueue(
	  //         workInProgress,
	  //         newUpdateQueue,
	  //         instance,
	  //         newState,
	  //         newProps,
	  //         priorityLevel,
	  //       );
	  //     }
	  //   }

	  //   if (typeof instance.componentDidMount === 'function') {
	  //     workInProgress.effectTag |= Update;
	  //   }

	  //   instance.state = newState;

	  //   return true;
	  // }

	  // Invokes the update life-cycles and returns false if it shouldn't rerender.
	  function updateClassInstance(current, workInProgress, priorityLevel) {
	    var instance = workInProgress.stateNode;
	    resetInputPointers(workInProgress, instance);

	    var oldProps = workInProgress.memoizedProps;
	    var newProps = workInProgress.pendingProps;
	    if (!newProps) {
	      // If there aren't any new props, then we'll reuse the memoized props.
	      // This could be from already completed work.
	      newProps = oldProps;
	      !(newProps != null) ? invariant(false, 'There should always be pending or memoized props. This error is likely caused by a bug in React. Please file an issue.') : void 0;
	    }
	    var oldContext = instance.context;
	    var newUnmaskedContext = getUnmaskedContext$2(workInProgress);
	    var newContext = getMaskedContext$2(workInProgress, newUnmaskedContext);

	    // Note: During these life-cycles, instance.props/instance.state are what
	    // ever the previously attempted to render - not the "current". However,
	    // during componentDidUpdate we pass the "current" props.

	    if (typeof instance.componentWillReceiveProps === 'function' && (oldProps !== newProps || oldContext !== newContext)) {
	      callComponentWillReceiveProps(workInProgress, instance, newProps, newContext);
	    }

	    // Compute the next state using the memoized state and the update queue.
	    var oldState = workInProgress.memoizedState;
	    // TODO: Previous state can be null.
	    var newState = void 0;
	    if (workInProgress.updateQueue !== null) {
	      newState = beginUpdateQueue$2(current, workInProgress, workInProgress.updateQueue, instance, oldState, newProps, priorityLevel);
	    } else {
	      newState = oldState;
	    }

	    if (oldProps === newProps && oldState === newState && !hasContextChanged$2() && !(workInProgress.updateQueue !== null && workInProgress.updateQueue.hasForceUpdate)) {
	      // If an update was already in progress, we should schedule an Update
	      // effect even though we're bailing out, so that cWU/cDU are called.
	      if (typeof instance.componentDidUpdate === 'function') {
	        if (oldProps !== current.memoizedProps || oldState !== current.memoizedState) {
	          workInProgress.effectTag |= Update$1;
	        }
	      }
	      return false;
	    }

	    var shouldUpdate = checkShouldComponentUpdate(workInProgress, oldProps, newProps, oldState, newState, newContext);

	    if (shouldUpdate) {
	      if (typeof instance.componentWillUpdate === 'function') {
	        {
	          startPhaseTimer$1(workInProgress, 'componentWillUpdate');
	        }
	        instance.componentWillUpdate(newProps, newState, newContext);
	        {
	          stopPhaseTimer$1();
	        }
	      }
	      if (typeof instance.componentDidUpdate === 'function') {
	        workInProgress.effectTag |= Update$1;
	      }
	    } else {
	      // If an update was already in progress, we should schedule an Update
	      // effect even though we're bailing out, so that cWU/cDU are called.
	      if (typeof instance.componentDidUpdate === 'function') {
	        if (oldProps !== current.memoizedProps || oldState !== current.memoizedState) {
	          workInProgress.effectTag |= Update$1;
	        }
	      }

	      // If shouldComponentUpdate returned false, we should still update the
	      // memoized props/state to indicate that this work can be reused.
	      memoizeProps(workInProgress, newProps);
	      memoizeState(workInProgress, newState);
	    }

	    // Update the existing instance's state, props, and context pointers even
	    // if shouldComponentUpdate returns false.
	    instance.props = newProps;
	    instance.state = newState;
	    instance.context = newContext;

	    return shouldUpdate;
	  }

	  return {
	    adoptClassInstance: adoptClassInstance,
	    constructClassInstance: constructClassInstance,
	    mountClassInstance: mountClassInstance,
	    // resumeMountClassInstance,
	    updateClassInstance: updateClassInstance
	  };
	};

	var mountChildFibersInPlace = ReactChildFiber.mountChildFibersInPlace;
	var reconcileChildFibers = ReactChildFiber.reconcileChildFibers;
	var reconcileChildFibersInPlace = ReactChildFiber.reconcileChildFibersInPlace;
	var cloneChildFibers = ReactChildFiber.cloneChildFibers;

	var beginUpdateQueue$1 = ReactFiberUpdateQueue.beginUpdateQueue;



	var getMaskedContext$1 = ReactFiberContext.getMaskedContext;
	var getUnmaskedContext$1 = ReactFiberContext.getUnmaskedContext;
	var hasContextChanged$1 = ReactFiberContext.hasContextChanged;
	var pushContextProvider$1 = ReactFiberContext.pushContextProvider;
	var pushTopLevelContextObject$1 = ReactFiberContext.pushTopLevelContextObject;
	var invalidateContextProvider$1 = ReactFiberContext.invalidateContextProvider;

	var IndeterminateComponent$2 = ReactTypeOfWork.IndeterminateComponent;
	var FunctionalComponent$1 = ReactTypeOfWork.FunctionalComponent;
	var ClassComponent$6 = ReactTypeOfWork.ClassComponent;
	var HostRoot$7 = ReactTypeOfWork.HostRoot;
	var HostComponent$7 = ReactTypeOfWork.HostComponent;
	var HostText$4 = ReactTypeOfWork.HostText;
	var HostPortal$4 = ReactTypeOfWork.HostPortal;
	var CoroutineComponent$1 = ReactTypeOfWork.CoroutineComponent;
	var CoroutineHandlerPhase = ReactTypeOfWork.CoroutineHandlerPhase;
	var YieldComponent$2 = ReactTypeOfWork.YieldComponent;
	var Fragment$2 = ReactTypeOfWork.Fragment;

	var NoWork$3 = ReactPriorityLevel.NoWork;
	var OffscreenPriority$1 = ReactPriorityLevel.OffscreenPriority;

	var PerformedWork$1 = ReactTypeOfSideEffect.PerformedWork;
	var Placement$2 = ReactTypeOfSideEffect.Placement;
	var ContentReset$1 = ReactTypeOfSideEffect.ContentReset;
	var Err$1 = ReactTypeOfSideEffect.Err;
	var Ref$1 = ReactTypeOfSideEffect.Ref;



	var ReactCurrentOwner$2 = ReactGlobalSharedState_1.ReactCurrentOwner;



	{
	  var ReactDebugCurrentFiber$4 = ReactDebugCurrentFiber_1;

	  var _require7 = ReactDebugFiberPerf_1,
	      cancelWorkTimer = _require7.cancelWorkTimer;

	  var warning$23 = require$$0;

	  var warnedAboutStatelessRefs = {};
	}

	var ReactFiberBeginWork = function (config, hostContext, hydrationContext, scheduleUpdate, getPriorityContext) {
	  var shouldSetTextContent = config.shouldSetTextContent,
	      useSyncScheduling = config.useSyncScheduling,
	      shouldDeprioritizeSubtree = config.shouldDeprioritizeSubtree;
	  var pushHostContext = hostContext.pushHostContext,
	      pushHostContainer = hostContext.pushHostContainer;
	  var enterHydrationState = hydrationContext.enterHydrationState,
	      resetHydrationState = hydrationContext.resetHydrationState,
	      tryToClaimNextHydratableInstance = hydrationContext.tryToClaimNextHydratableInstance;

	  var _ReactFiberClassCompo = ReactFiberClassComponent(scheduleUpdate, getPriorityContext, memoizeProps, memoizeState),
	      adoptClassInstance = _ReactFiberClassCompo.adoptClassInstance,
	      constructClassInstance = _ReactFiberClassCompo.constructClassInstance,
	      mountClassInstance = _ReactFiberClassCompo.mountClassInstance,
	      updateClassInstance = _ReactFiberClassCompo.updateClassInstance;

	  function reconcileChildren(current, workInProgress, nextChildren) {
	    var priorityLevel = workInProgress.pendingWorkPriority;
	    reconcileChildrenAtPriority(current, workInProgress, nextChildren, priorityLevel);
	  }

	  function reconcileChildrenAtPriority(current, workInProgress, nextChildren, priorityLevel) {
	    if (current === null) {
	      // If this is a fresh new component that hasn't been rendered yet, we
	      // won't update its child set by applying minimal side-effects. Instead,
	      // we will add them all to the child before it gets rendered. That means
	      // we can optimize this reconciliation pass by not tracking side-effects.
	      workInProgress.child = mountChildFibersInPlace(workInProgress, workInProgress.child, nextChildren, priorityLevel);
	    } else if (current.child === workInProgress.child) {
	      // If the current child is the same as the work in progress, it means that
	      // we haven't yet started any work on these children. Therefore, we use
	      // the clone algorithm to create a copy of all the current children.

	      // If we had any progressed work already, that is invalid at this point so
	      // let's throw it out.
	      workInProgress.child = reconcileChildFibers(workInProgress, workInProgress.child, nextChildren, priorityLevel);
	    } else {
	      // If, on the other hand, it is already using a clone, that means we've
	      // already begun some work on this tree and we can continue where we left
	      // off by reconciling against the existing children.
	      workInProgress.child = reconcileChildFibersInPlace(workInProgress, workInProgress.child, nextChildren, priorityLevel);
	    }
	  }

	  function updateFragment(current, workInProgress) {
	    var nextChildren = workInProgress.pendingProps;
	    if (hasContextChanged$1()) {
	      // Normally we can bail out on props equality but if context has changed
	      // we don't do the bailout and we have to reuse existing props instead.
	      if (nextChildren === null) {
	        nextChildren = workInProgress.memoizedProps;
	      }
	    } else if (nextChildren === null || workInProgress.memoizedProps === nextChildren) {
	      return bailoutOnAlreadyFinishedWork(current, workInProgress);
	    }
	    reconcileChildren(current, workInProgress, nextChildren);
	    memoizeProps(workInProgress, nextChildren);
	    return workInProgress.child;
	  }

	  function markRef(current, workInProgress) {
	    var ref = workInProgress.ref;
	    if (ref !== null && (!current || current.ref !== ref)) {
	      // Schedule a Ref effect
	      workInProgress.effectTag |= Ref$1;
	    }
	  }

	  function updateFunctionalComponent(current, workInProgress) {
	    var fn = workInProgress.type;
	    var nextProps = workInProgress.pendingProps;

	    var memoizedProps = workInProgress.memoizedProps;
	    if (hasContextChanged$1()) {
	      // Normally we can bail out on props equality but if context has changed
	      // we don't do the bailout and we have to reuse existing props instead.
	      if (nextProps === null) {
	        nextProps = memoizedProps;
	      }
	    } else {
	      if (nextProps === null || memoizedProps === nextProps) {
	        return bailoutOnAlreadyFinishedWork(current, workInProgress);
	      }
	      // TODO: consider bringing fn.shouldComponentUpdate() back.
	      // It used to be here.
	    }

	    var unmaskedContext = getUnmaskedContext$1(workInProgress);
	    var context = getMaskedContext$1(workInProgress, unmaskedContext);

	    var nextChildren;

	    {
	      ReactCurrentOwner$2.current = workInProgress;
	      ReactDebugCurrentFiber$4.setCurrentFiber(workInProgress, 'render');
	      nextChildren = fn(nextProps, context);
	      ReactDebugCurrentFiber$4.setCurrentFiber(workInProgress, null);
	    }
	    // React DevTools reads this flag.
	    workInProgress.effectTag |= PerformedWork$1;
	    reconcileChildren(current, workInProgress, nextChildren);
	    memoizeProps(workInProgress, nextProps);
	    return workInProgress.child;
	  }

	  function updateClassComponent(current, workInProgress, priorityLevel) {
	    // Push context providers early to prevent context stack mismatches.
	    // During mounting we don't know the child context yet as the instance doesn't exist.
	    // We will invalidate the child context in finishClassComponent() right after rendering.
	    var hasContext = pushContextProvider$1(workInProgress);

	    var shouldUpdate = void 0;
	    if (current === null) {
	      if (!workInProgress.stateNode) {
	        // In the initial pass we might need to construct the instance.
	        constructClassInstance(workInProgress, workInProgress.pendingProps);
	        mountClassInstance(workInProgress, priorityLevel);
	        shouldUpdate = true;
	      } else {
	        invariant(false, 'Resuming work not yet implemented.');
	        // In a resume, we'll already have an instance we can reuse.
	        // shouldUpdate = resumeMountClassInstance(workInProgress, priorityLevel);
	      }
	    } else {
	      shouldUpdate = updateClassInstance(current, workInProgress, priorityLevel);
	    }
	    return finishClassComponent(current, workInProgress, shouldUpdate, hasContext);
	  }

	  function finishClassComponent(current, workInProgress, shouldUpdate, hasContext) {
	    // Refs should update even if shouldComponentUpdate returns false
	    markRef(current, workInProgress);

	    if (!shouldUpdate) {
	      // Context providers should defer to sCU for rendering
	      if (hasContext) {
	        invalidateContextProvider$1(workInProgress, false);
	      }

	      return bailoutOnAlreadyFinishedWork(current, workInProgress);
	    }

	    var instance = workInProgress.stateNode;

	    // Rerender
	    ReactCurrentOwner$2.current = workInProgress;
	    var nextChildren = void 0;
	    {
	      ReactDebugCurrentFiber$4.setCurrentFiber(workInProgress, 'render');
	      nextChildren = instance.render();
	      ReactDebugCurrentFiber$4.setCurrentFiber(workInProgress, null);
	    }
	    // React DevTools reads this flag.
	    workInProgress.effectTag |= PerformedWork$1;
	    reconcileChildren(current, workInProgress, nextChildren);
	    // Memoize props and state using the values we just used to render.
	    // TODO: Restructure so we never read values from the instance.
	    memoizeState(workInProgress, instance.state);
	    memoizeProps(workInProgress, instance.props);

	    // The context might have changed so we need to recalculate it.
	    if (hasContext) {
	      invalidateContextProvider$1(workInProgress, true);
	    }

	    return workInProgress.child;
	  }

	  function pushHostRootContext(workInProgress) {
	    var root = workInProgress.stateNode;
	    if (root.pendingContext) {
	      pushTopLevelContextObject$1(workInProgress, root.pendingContext, root.pendingContext !== root.context);
	    } else if (root.context) {
	      // Should always be set
	      pushTopLevelContextObject$1(workInProgress, root.context, false);
	    }
	    pushHostContainer(workInProgress, root.containerInfo);
	  }

	  function updateHostRoot(current, workInProgress, priorityLevel) {
	    pushHostRootContext(workInProgress);
	    var updateQueue = workInProgress.updateQueue;
	    if (updateQueue !== null) {
	      var prevState = workInProgress.memoizedState;
	      var state = beginUpdateQueue$1(current, workInProgress, updateQueue, null, prevState, null, priorityLevel);
	      if (prevState === state) {
	        // If the state is the same as before, that's a bailout because we had
	        // no work matching this priority.
	        resetHydrationState();
	        return bailoutOnAlreadyFinishedWork(current, workInProgress);
	      }
	      var element = state.element;
	      if ((current === null || current.child === null) && enterHydrationState(workInProgress)) {
	        // If we don't have any current children this might be the first pass.
	        // We always try to hydrate. If this isn't a hydration pass there won't
	        // be any children to hydrate which is effectively the same thing as
	        // not hydrating.

	        // This is a bit of a hack. We track the host root as a placement to
	        // know that we're currently in a mounting state. That way isMounted
	        // works as expected. We must reset this before committing.
	        // TODO: Delete this when we delete isMounted and findDOMNode.
	        workInProgress.effectTag |= Placement$2;

	        // Ensure that children mount into this root without tracking
	        // side-effects. This ensures that we don't store Placement effects on
	        // nodes that will be hydrated.
	        workInProgress.child = mountChildFibersInPlace(workInProgress, workInProgress.child, element, priorityLevel);
	      } else {
	        // Otherwise reset hydration state in case we aborted and resumed another
	        // root.
	        resetHydrationState();
	        reconcileChildren(current, workInProgress, element);
	      }
	      memoizeState(workInProgress, state);
	      return workInProgress.child;
	    }
	    resetHydrationState();
	    // If there is no update queue, that's a bailout because the root has no props.
	    return bailoutOnAlreadyFinishedWork(current, workInProgress);
	  }

	  function updateHostComponent(current, workInProgress, renderPriority) {
	    pushHostContext(workInProgress);

	    if (current === null) {
	      tryToClaimNextHydratableInstance(workInProgress);
	    }

	    var type = workInProgress.type;
	    var memoizedProps = workInProgress.memoizedProps;
	    var nextProps = workInProgress.pendingProps;
	    if (nextProps === null) {
	      nextProps = memoizedProps;
	      !(nextProps !== null) ? invariant(false, 'We should always have pending or current props. This error is likely caused by a bug in React. Please file an issue.') : void 0;
	    }
	    var prevProps = current !== null ? current.memoizedProps : null;

	    if (hasContextChanged$1()) {
	      // Normally we can bail out on props equality but if context has changed
	      // we don't do the bailout and we have to reuse existing props instead.
	    } else if (nextProps === null || memoizedProps === nextProps) {
	      return bailoutOnAlreadyFinishedWork(current, workInProgress);
	    }

	    var nextChildren = nextProps.children;
	    var isDirectTextChild = shouldSetTextContent(type, nextProps);

	    if (isDirectTextChild) {
	      // We special case a direct text child of a host node. This is a common
	      // case. We won't handle it as a reified child. We will instead handle
	      // this in the host environment that also have access to this prop. That
	      // avoids allocating another HostText fiber and traversing it.
	      nextChildren = null;
	    } else if (prevProps && shouldSetTextContent(type, prevProps)) {
	      // If we're switching from a direct text child to a normal child, or to
	      // empty, we need to schedule the text content to be reset.
	      workInProgress.effectTag |= ContentReset$1;
	    }

	    markRef(current, workInProgress);

	    // Check the host config to see if the children are offscreen/hidden.
	    if (renderPriority !== OffscreenPriority$1 && !useSyncScheduling && shouldDeprioritizeSubtree(type, nextProps)) {
	      // Down-prioritize the children.
	      workInProgress.pendingWorkPriority = OffscreenPriority$1;
	      // Bailout and come back to this fiber later at OffscreenPriority.
	      return null;
	    }

	    reconcileChildren(current, workInProgress, nextChildren);
	    memoizeProps(workInProgress, nextProps);
	    return workInProgress.child;
	  }

	  function updateHostText(current, workInProgress) {
	    if (current === null) {
	      tryToClaimNextHydratableInstance(workInProgress);
	    }
	    var nextProps = workInProgress.pendingProps;
	    if (nextProps === null) {
	      nextProps = workInProgress.memoizedProps;
	    }
	    memoizeProps(workInProgress, nextProps);
	    // Nothing to do here. This is terminal. We'll do the completion step
	    // immediately after.
	    return null;
	  }

	  function mountIndeterminateComponent(current, workInProgress, priorityLevel) {
	    !(current === null) ? invariant(false, 'An indeterminate component should never have mounted. This error is likely caused by a bug in React. Please file an issue.') : void 0;
	    var fn = workInProgress.type;
	    var props = workInProgress.pendingProps;
	    var unmaskedContext = getUnmaskedContext$1(workInProgress);
	    var context = getMaskedContext$1(workInProgress, unmaskedContext);

	    var value;

	    {
	      ReactCurrentOwner$2.current = workInProgress;
	      value = fn(props, context);
	    }
	    // React DevTools reads this flag.
	    workInProgress.effectTag |= PerformedWork$1;

	    if (typeof value === 'object' && value !== null && typeof value.render === 'function') {
	      // Proceed under the assumption that this is a class instance
	      workInProgress.tag = ClassComponent$6;

	      // Push context providers early to prevent context stack mismatches.
	      // During mounting we don't know the child context yet as the instance doesn't exist.
	      // We will invalidate the child context in finishClassComponent() right after rendering.
	      var hasContext = pushContextProvider$1(workInProgress);
	      adoptClassInstance(workInProgress, value);
	      mountClassInstance(workInProgress, priorityLevel);
	      return finishClassComponent(current, workInProgress, true, hasContext);
	    } else {
	      // Proceed under the assumption that this is a functional component
	      workInProgress.tag = FunctionalComponent$1;
	      {
	        var Component = workInProgress.type;

	        if (Component) {
	          warning$23(!Component.childContextTypes, '%s(...): childContextTypes cannot be defined on a functional component.', Component.displayName || Component.name || 'Component');
	        }
	        if (workInProgress.ref !== null) {
	          var info = '';
	          var ownerName = ReactDebugCurrentFiber$4.getCurrentFiberOwnerName();
	          if (ownerName) {
	            info += '\n\nCheck the render method of `' + ownerName + '`.';
	          }

	          var warningKey = ownerName || workInProgress._debugID || '';
	          var debugSource = workInProgress._debugSource;
	          if (debugSource) {
	            warningKey = debugSource.fileName + ':' + debugSource.lineNumber;
	          }
	          if (!warnedAboutStatelessRefs[warningKey]) {
	            warnedAboutStatelessRefs[warningKey] = true;
	            warning$23(false, 'Stateless function components cannot be given refs. ' + 'Attempts to access this ref will fail.%s%s', info, ReactDebugCurrentFiber$4.getCurrentFiberStackAddendum());
	          }
	        }
	      }
	      reconcileChildren(current, workInProgress, value);
	      memoizeProps(workInProgress, props);
	      return workInProgress.child;
	    }
	  }

	  function updateCoroutineComponent(current, workInProgress) {
	    var nextCoroutine = workInProgress.pendingProps;
	    if (hasContextChanged$1()) {
	      // Normally we can bail out on props equality but if context has changed
	      // we don't do the bailout and we have to reuse existing props instead.
	      if (nextCoroutine === null) {
	        nextCoroutine = current && current.memoizedProps;
	        !(nextCoroutine !== null) ? invariant(false, 'We should always have pending or current props. This error is likely caused by a bug in React. Please file an issue.') : void 0;
	      }
	    } else if (nextCoroutine === null || workInProgress.memoizedProps === nextCoroutine) {
	      nextCoroutine = workInProgress.memoizedProps;
	      // TODO: When bailing out, we might need to return the stateNode instead
	      // of the child. To check it for work.
	      // return bailoutOnAlreadyFinishedWork(current, workInProgress);
	    }

	    var nextChildren = nextCoroutine.children;
	    var priorityLevel = workInProgress.pendingWorkPriority;

	    // The following is a fork of reconcileChildrenAtPriority but using
	    // stateNode to store the child.
	    if (current === null) {
	      workInProgress.stateNode = mountChildFibersInPlace(workInProgress, workInProgress.stateNode, nextChildren, priorityLevel);
	    } else if (current.child === workInProgress.child) {
	      workInProgress.stateNode = reconcileChildFibers(workInProgress, workInProgress.stateNode, nextChildren, priorityLevel);
	    } else {
	      workInProgress.stateNode = reconcileChildFibersInPlace(workInProgress, workInProgress.stateNode, nextChildren, priorityLevel);
	    }

	    memoizeProps(workInProgress, nextCoroutine);
	    // This doesn't take arbitrary time so we could synchronously just begin
	    // eagerly do the work of workInProgress.child as an optimization.
	    return workInProgress.stateNode;
	  }

	  function updatePortalComponent(current, workInProgress) {
	    pushHostContainer(workInProgress, workInProgress.stateNode.containerInfo);
	    var priorityLevel = workInProgress.pendingWorkPriority;
	    var nextChildren = workInProgress.pendingProps;
	    if (hasContextChanged$1()) {
	      // Normally we can bail out on props equality but if context has changed
	      // we don't do the bailout and we have to reuse existing props instead.
	      if (nextChildren === null) {
	        nextChildren = current && current.memoizedProps;
	        !(nextChildren != null) ? invariant(false, 'We should always have pending or current props. This error is likely caused by a bug in React. Please file an issue.') : void 0;
	      }
	    } else if (nextChildren === null || workInProgress.memoizedProps === nextChildren) {
	      return bailoutOnAlreadyFinishedWork(current, workInProgress);
	    }

	    if (current === null) {
	      // Portals are special because we don't append the children during mount
	      // but at commit. Therefore we need to track insertions which the normal
	      // flow doesn't do during mount. This doesn't happen at the root because
	      // the root always starts with a "current" with a null child.
	      // TODO: Consider unifying this with how the root works.
	      workInProgress.child = reconcileChildFibersInPlace(workInProgress, workInProgress.child, nextChildren, priorityLevel);
	      memoizeProps(workInProgress, nextChildren);
	    } else {
	      reconcileChildren(current, workInProgress, nextChildren);
	      memoizeProps(workInProgress, nextChildren);
	    }
	    return workInProgress.child;
	  }

	  /*
	  function reuseChildrenEffects(returnFiber : Fiber, firstChild : Fiber) {
	    let child = firstChild;
	    do {
	      // Ensure that the first and last effect of the parent corresponds
	      // to the children's first and last effect.
	      if (!returnFiber.firstEffect) {
	        returnFiber.firstEffect = child.firstEffect;
	      }
	      if (child.lastEffect) {
	        if (returnFiber.lastEffect) {
	          returnFiber.lastEffect.nextEffect = child.firstEffect;
	        }
	        returnFiber.lastEffect = child.lastEffect;
	      }
	    } while (child = child.sibling);
	  }
	  */

	  function bailoutOnAlreadyFinishedWork(current, workInProgress) {
	    {
	      cancelWorkTimer(workInProgress);
	    }

	    // TODO: We should ideally be able to bail out early if the children have no
	    // more work to do. However, since we don't have a separation of this
	    // Fiber's priority and its children yet - we don't know without doing lots
	    // of the same work we do anyway. Once we have that separation we can just
	    // bail out here if the children has no more work at this priority level.
	    // if (workInProgress.priorityOfChildren <= priorityLevel) {
	    //   // If there are side-effects in these children that have not yet been
	    //   // committed we need to ensure that they get properly transferred up.
	    //   if (current && current.child !== workInProgress.child) {
	    //     reuseChildrenEffects(workInProgress, child);
	    //   }
	    //   return null;
	    // }

	    cloneChildFibers(current, workInProgress);
	    return workInProgress.child;
	  }

	  function bailoutOnLowPriority(current, workInProgress) {
	    {
	      cancelWorkTimer(workInProgress);
	    }

	    // TODO: Handle HostComponent tags here as well and call pushHostContext()?
	    // See PR 8590 discussion for context
	    switch (workInProgress.tag) {
	      case HostRoot$7:
	        pushHostRootContext(workInProgress);
	        break;
	      case ClassComponent$6:
	        pushContextProvider$1(workInProgress);
	        break;
	      case HostPortal$4:
	        pushHostContainer(workInProgress, workInProgress.stateNode.containerInfo);
	        break;
	    }
	    // TODO: What if this is currently in progress?
	    // How can that happen? How is this not being cloned?
	    return null;
	  }

	  // TODO: Delete memoizeProps/State and move to reconcile/bailout instead
	  function memoizeProps(workInProgress, nextProps) {
	    workInProgress.memoizedProps = nextProps;
	  }

	  function memoizeState(workInProgress, nextState) {
	    workInProgress.memoizedState = nextState;
	    // Don't reset the updateQueue, in case there are pending updates. Resetting
	    // is handled by beginUpdateQueue.
	  }

	  function beginWork(current, workInProgress, priorityLevel) {
	    if (workInProgress.pendingWorkPriority === NoWork$3 || workInProgress.pendingWorkPriority > priorityLevel) {
	      return bailoutOnLowPriority(current, workInProgress);
	    }

	    {
	      ReactDebugCurrentFiber$4.setCurrentFiber(workInProgress, null);
	    }

	    switch (workInProgress.tag) {
	      case IndeterminateComponent$2:
	        return mountIndeterminateComponent(current, workInProgress, priorityLevel);
	      case FunctionalComponent$1:
	        return updateFunctionalComponent(current, workInProgress);
	      case ClassComponent$6:
	        return updateClassComponent(current, workInProgress, priorityLevel);
	      case HostRoot$7:
	        return updateHostRoot(current, workInProgress, priorityLevel);
	      case HostComponent$7:
	        return updateHostComponent(current, workInProgress, priorityLevel);
	      case HostText$4:
	        return updateHostText(current, workInProgress);
	      case CoroutineHandlerPhase:
	        // This is a restart. Reset the tag to the initial phase.
	        workInProgress.tag = CoroutineComponent$1;
	      // Intentionally fall through since this is now the same.
	      case CoroutineComponent$1:
	        return updateCoroutineComponent(current, workInProgress);
	      case YieldComponent$2:
	        // A yield component is just a placeholder, we can just run through the
	        // next one immediately.
	        return null;
	      case HostPortal$4:
	        return updatePortalComponent(current, workInProgress);
	      case Fragment$2:
	        return updateFragment(current, workInProgress);
	      default:
	        invariant(false, 'Unknown unit of work tag. This error is likely caused by a bug in React. Please file an issue.');
	    }
	  }

	  function beginFailedWork(current, workInProgress, priorityLevel) {
	    // Push context providers here to avoid a push/pop context mismatch.
	    switch (workInProgress.tag) {
	      case ClassComponent$6:
	        pushContextProvider$1(workInProgress);
	        break;
	      case HostRoot$7:
	        pushHostRootContext(workInProgress);
	        break;
	      default:
	        invariant(false, 'Invalid type of work. This error is likely caused by a bug in React. Please file an issue.');
	    }

	    // Add an error effect so we can handle the error during the commit phase
	    workInProgress.effectTag |= Err$1;

	    // This is a weird case where we do "resume" work — work that failed on
	    // our first attempt. Because we no longer have a notion of "progressed
	    // deletions," reset the child to the current child to make sure we delete
	    // it again. TODO: Find a better way to handle this, perhaps during a more
	    // general overhaul of error handling.
	    if (current === null) {
	      workInProgress.child = null;
	    } else if (workInProgress.child !== current.child) {
	      workInProgress.child = current.child;
	    }

	    if (workInProgress.pendingWorkPriority === NoWork$3 || workInProgress.pendingWorkPriority > priorityLevel) {
	      return bailoutOnLowPriority(current, workInProgress);
	    }

	    // If we don't bail out, we're going be recomputing our children so we need
	    // to drop our effect list.
	    workInProgress.firstEffect = null;
	    workInProgress.lastEffect = null;

	    // Unmount the current children as if the component rendered null
	    var nextChildren = null;
	    reconcileChildrenAtPriority(current, workInProgress, nextChildren, priorityLevel);

	    if (workInProgress.tag === ClassComponent$6) {
	      var instance = workInProgress.stateNode;
	      workInProgress.memoizedProps = instance.props;
	      workInProgress.memoizedState = instance.state;
	    }

	    return workInProgress.child;
	  }

	  return {
	    beginWork: beginWork,
	    beginFailedWork: beginFailedWork
	  };
	};

	var reconcileChildFibers$2 = ReactChildFiber.reconcileChildFibers;

	var popContextProvider$2 = ReactFiberContext.popContextProvider;
	var popTopLevelContextObject$1 = ReactFiberContext.popTopLevelContextObject;




	var IndeterminateComponent$3 = ReactTypeOfWork.IndeterminateComponent;
	var FunctionalComponent$3 = ReactTypeOfWork.FunctionalComponent;
	var ClassComponent$8 = ReactTypeOfWork.ClassComponent;
	var HostRoot$8 = ReactTypeOfWork.HostRoot;
	var HostComponent$8 = ReactTypeOfWork.HostComponent;
	var HostText$6 = ReactTypeOfWork.HostText;
	var HostPortal$6 = ReactTypeOfWork.HostPortal;
	var CoroutineComponent$3 = ReactTypeOfWork.CoroutineComponent;
	var CoroutineHandlerPhase$1 = ReactTypeOfWork.CoroutineHandlerPhase;
	var YieldComponent$4 = ReactTypeOfWork.YieldComponent;
	var Fragment$4 = ReactTypeOfWork.Fragment;
	var Placement$4 = ReactTypeOfSideEffect.Placement;
	var Ref$2 = ReactTypeOfSideEffect.Ref;
	var Update$2 = ReactTypeOfSideEffect.Update;
	var OffscreenPriority$2 = ReactPriorityLevel.OffscreenPriority;


	{
	  var ReactDebugCurrentFiber$5 = ReactDebugCurrentFiber_1;
	}



	var ReactFiberCompleteWork = function (config, hostContext, hydrationContext) {
	  var createInstance = config.createInstance,
	      createTextInstance = config.createTextInstance,
	      appendInitialChild = config.appendInitialChild,
	      finalizeInitialChildren = config.finalizeInitialChildren,
	      prepareUpdate = config.prepareUpdate;
	  var getRootHostContainer = hostContext.getRootHostContainer,
	      popHostContext = hostContext.popHostContext,
	      getHostContext = hostContext.getHostContext,
	      popHostContainer = hostContext.popHostContainer;
	  var prepareToHydrateHostInstance = hydrationContext.prepareToHydrateHostInstance,
	      prepareToHydrateHostTextInstance = hydrationContext.prepareToHydrateHostTextInstance,
	      popHydrationState = hydrationContext.popHydrationState;


	  function markUpdate(workInProgress) {
	    // Tag the fiber with an update effect. This turns a Placement into
	    // an UpdateAndPlacement.
	    workInProgress.effectTag |= Update$2;
	  }

	  function markRef(workInProgress) {
	    workInProgress.effectTag |= Ref$2;
	  }

	  function appendAllYields(yields, workInProgress) {
	    var node = workInProgress.stateNode;
	    if (node) {
	      node['return'] = workInProgress;
	    }
	    while (node !== null) {
	      if (node.tag === HostComponent$8 || node.tag === HostText$6 || node.tag === HostPortal$6) {
	        invariant(false, 'A coroutine cannot have host component children.');
	      } else if (node.tag === YieldComponent$4) {
	        yields.push(node.type);
	      } else if (node.child !== null) {
	        node.child['return'] = node;
	        node = node.child;
	        continue;
	      }
	      while (node.sibling === null) {
	        if (node['return'] === null || node['return'] === workInProgress) {
	          return;
	        }
	        node = node['return'];
	      }
	      node.sibling['return'] = node['return'];
	      node = node.sibling;
	    }
	  }

	  function moveCoroutineToHandlerPhase(current, workInProgress) {
	    var coroutine = workInProgress.memoizedProps;
	    !coroutine ? invariant(false, 'Should be resolved by now. This error is likely caused by a bug in React. Please file an issue.') : void 0;

	    // First step of the coroutine has completed. Now we need to do the second.
	    // TODO: It would be nice to have a multi stage coroutine represented by a
	    // single component, or at least tail call optimize nested ones. Currently
	    // that requires additional fields that we don't want to add to the fiber.
	    // So this requires nested handlers.
	    // Note: This doesn't mutate the alternate node. I don't think it needs to
	    // since this stage is reset for every pass.
	    workInProgress.tag = CoroutineHandlerPhase$1;

	    // Build up the yields.
	    // TODO: Compare this to a generator or opaque helpers like Children.
	    var yields = [];
	    appendAllYields(yields, workInProgress);
	    var fn = coroutine.handler;
	    var props = coroutine.props;
	    var nextChildren = fn(props, yields);

	    var currentFirstChild = current !== null ? current.child : null;
	    // Inherit the priority of the returnFiber.
	    var priority = workInProgress.pendingWorkPriority;
	    workInProgress.child = reconcileChildFibers$2(workInProgress, currentFirstChild, nextChildren, priority);
	    return workInProgress.child;
	  }

	  function appendAllChildren(parent, workInProgress) {
	    // We only have the top Fiber that was created but we need recurse down its
	    // children to find all the terminal nodes.
	    var node = workInProgress.child;
	    while (node !== null) {
	      if (node.tag === HostComponent$8 || node.tag === HostText$6) {
	        appendInitialChild(parent, node.stateNode);
	      } else if (node.tag === HostPortal$6) {
	        // If we have a portal child, then we don't want to traverse
	        // down its children. Instead, we'll get insertions from each child in
	        // the portal directly.
	      } else if (node.child !== null) {
	        node = node.child;
	        continue;
	      }
	      if (node === workInProgress) {
	        return;
	      }
	      while (node.sibling === null) {
	        if (node['return'] === null || node['return'] === workInProgress) {
	          return;
	        }
	        node = node['return'];
	      }
	      node = node.sibling;
	    }
	  }

	  function completeWork(current, workInProgress, renderPriority) {
	    {
	      ReactDebugCurrentFiber$5.setCurrentFiber(workInProgress, null);
	    }

	    // Get the latest props.
	    var newProps = workInProgress.pendingProps;
	    if (newProps === null) {
	      newProps = workInProgress.memoizedProps;
	    } else if (workInProgress.pendingWorkPriority !== OffscreenPriority$2 || renderPriority === OffscreenPriority$2) {
	      // Reset the pending props, unless this was a down-prioritization.
	      workInProgress.pendingProps = null;
	    }

	    switch (workInProgress.tag) {
	      case FunctionalComponent$3:
	        return null;
	      case ClassComponent$8:
	        {
	          // We are leaving this subtree, so pop context if any.
	          popContextProvider$2(workInProgress);
	          return null;
	        }
	      case HostRoot$8:
	        {
	          popHostContainer(workInProgress);
	          popTopLevelContextObject$1(workInProgress);
	          var fiberRoot = workInProgress.stateNode;
	          if (fiberRoot.pendingContext) {
	            fiberRoot.context = fiberRoot.pendingContext;
	            fiberRoot.pendingContext = null;
	          }

	          if (current === null || current.child === null) {
	            // If we hydrated, pop so that we can delete any remaining children
	            // that weren't hydrated.
	            popHydrationState(workInProgress);
	            // This resets the hacky state to fix isMounted before committing.
	            // TODO: Delete this when we delete isMounted and findDOMNode.
	            workInProgress.effectTag &= ~Placement$4;
	          }
	          return null;
	        }
	      case HostComponent$8:
	        {
	          popHostContext(workInProgress);
	          var rootContainerInstance = getRootHostContainer();
	          var type = workInProgress.type;
	          if (current !== null && workInProgress.stateNode != null) {
	            // If we have an alternate, that means this is an update and we need to
	            // schedule a side-effect to do the updates.
	            var oldProps = current.memoizedProps;
	            // If we get updated because one of our children updated, we don't
	            // have newProps so we'll have to reuse them.
	            // TODO: Split the update API as separate for the props vs. children.
	            // Even better would be if children weren't special cased at all tho.
	            var instance = workInProgress.stateNode;
	            var currentHostContext = getHostContext();
	            var updatePayload = prepareUpdate(instance, type, oldProps, newProps, rootContainerInstance, currentHostContext);

	            // TODO: Type this specific to this type of component.
	            workInProgress.updateQueue = updatePayload;
	            // If the update payload indicates that there is a change or if there
	            // is a new ref we mark this as an update.
	            if (updatePayload) {
	              markUpdate(workInProgress);
	            }
	            if (current.ref !== workInProgress.ref) {
	              markRef(workInProgress);
	            }
	          } else {
	            if (!newProps) {
	              !(workInProgress.stateNode !== null) ? invariant(false, 'We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.') : void 0;
	              // This can happen when we abort work.
	              return null;
	            }

	            var _currentHostContext = getHostContext();
	            // TODO: Move createInstance to beginWork and keep it on a context
	            // "stack" as the parent. Then append children as we go in beginWork
	            // or completeWork depending on we want to add then top->down or
	            // bottom->up. Top->down is faster in IE11.
	            var wasHydrated = popHydrationState(workInProgress);
	            if (wasHydrated) {
	              // TOOD: Move this and createInstance step into the beginPhase
	              // to consolidate.
	              if (prepareToHydrateHostInstance(workInProgress, rootContainerInstance, _currentHostContext)) {
	                // If changes to the hydrated node needs to be applied at the
	                // commit-phase we mark this as such.
	                markUpdate(workInProgress);
	              }
	            } else {
	              var _instance = createInstance(type, newProps, rootContainerInstance, _currentHostContext, workInProgress);

	              appendAllChildren(_instance, workInProgress);

	              // Certain renderers require commit-time effects for initial mount.
	              // (eg DOM renderer supports auto-focus for certain elements).
	              // Make sure such renderers get scheduled for later work.
	              if (finalizeInitialChildren(_instance, type, newProps, rootContainerInstance)) {
	                markUpdate(workInProgress);
	              }
	              workInProgress.stateNode = _instance;
	            }

	            if (workInProgress.ref !== null) {
	              // If there is a ref on a host node we need to schedule a callback
	              markRef(workInProgress);
	            }
	          }
	          return null;
	        }
	      case HostText$6:
	        {
	          var newText = newProps;
	          if (current && workInProgress.stateNode != null) {
	            var oldText = current.memoizedProps;
	            // If we have an alternate, that means this is an update and we need
	            // to schedule a side-effect to do the updates.
	            if (oldText !== newText) {
	              markUpdate(workInProgress);
	            }
	          } else {
	            if (typeof newText !== 'string') {
	              !(workInProgress.stateNode !== null) ? invariant(false, 'We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.') : void 0;
	              // This can happen when we abort work.
	              return null;
	            }
	            var _rootContainerInstance = getRootHostContainer();
	            var _currentHostContext2 = getHostContext();
	            var _wasHydrated = popHydrationState(workInProgress);
	            if (_wasHydrated) {
	              if (prepareToHydrateHostTextInstance(workInProgress)) {
	                markUpdate(workInProgress);
	              }
	            } else {
	              workInProgress.stateNode = createTextInstance(newText, _rootContainerInstance, _currentHostContext2, workInProgress);
	            }
	          }
	          return null;
	        }
	      case CoroutineComponent$3:
	        return moveCoroutineToHandlerPhase(current, workInProgress);
	      case CoroutineHandlerPhase$1:
	        // Reset the tag to now be a first phase coroutine.
	        workInProgress.tag = CoroutineComponent$3;
	        return null;
	      case YieldComponent$4:
	        // Does nothing.
	        return null;
	      case Fragment$4:
	        return null;
	      case HostPortal$6:
	        // TODO: Only mark this as an update if we have any pending callbacks.
	        markUpdate(workInProgress);
	        popHostContainer(workInProgress);
	        return null;
	      // Error cases
	      case IndeterminateComponent$3:
	        invariant(false, 'An indeterminate component should have become determinate before completing. This error is likely caused by a bug in React. Please file an issue.');
	      // eslint-disable-next-line no-fallthrough
	      default:
	        invariant(false, 'Unknown unit of work tag. This error is likely caused by a bug in React. Please file an issue.');
	    }
	  }

	  return {
	    completeWork: completeWork
	  };
	};

	{
	  var warning$26 = require$$0;
	}

	var onCommitFiberRoot = null;
	var onCommitFiberUnmount = null;
	var hasLoggedError = false;

	function catchErrors(fn) {
	  return function (arg) {
	    try {
	      return fn(arg);
	    } catch (err) {
	      if (true && !hasLoggedError) {
	        hasLoggedError = true;
	        warning$26(false, 'React DevTools encountered an error: %s', err);
	      }
	    }
	  };
	}

	function injectInternals$1(internals) {
	  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined') {
	    // No DevTools
	    return false;
	  }
	  var hook = __REACT_DEVTOOLS_GLOBAL_HOOK__;
	  if (!hook.supportsFiber) {
	    {
	      warning$26(false, 'The installed version of React DevTools is too old and will not work ' + 'with the current version of React. Please update React DevTools. ' + 'https://fb.me/react-devtools');
	    }
	    // DevTools exists, even though it doesn't support Fiber.
	    return true;
	  }
	  try {
	    var rendererID = hook.inject(internals);
	    // We have successfully injected, so now it is safe to set up hooks.
	    onCommitFiberRoot = catchErrors(function (root) {
	      return hook.onCommitFiberRoot(rendererID, root);
	    });
	    onCommitFiberUnmount = catchErrors(function (fiber) {
	      return hook.onCommitFiberUnmount(rendererID, fiber);
	    });
	  } catch (err) {
	    // Catch all errors because it is unsafe to throw during initialization.
	    {
	      warning$26(false, 'React DevTools encountered an error: %s.', err);
	    }
	  }
	  // DevTools exists
	  return true;
	}

	function onCommitRoot$1(root) {
	  if (typeof onCommitFiberRoot === 'function') {
	    onCommitFiberRoot(root);
	  }
	}

	function onCommitUnmount$1(fiber) {
	  if (typeof onCommitFiberUnmount === 'function') {
	    onCommitFiberUnmount(fiber);
	  }
	}

	var injectInternals_1 = injectInternals$1;
	var onCommitRoot_1 = onCommitRoot$1;
	var onCommitUnmount_1 = onCommitUnmount$1;

	var ReactFiberDevToolsHook = {
		injectInternals: injectInternals_1,
		onCommitRoot: onCommitRoot_1,
		onCommitUnmount: onCommitUnmount_1
	};

	var ClassComponent$9 = ReactTypeOfWork.ClassComponent;
	var HostRoot$9 = ReactTypeOfWork.HostRoot;
	var HostComponent$9 = ReactTypeOfWork.HostComponent;
	var HostText$7 = ReactTypeOfWork.HostText;
	var HostPortal$7 = ReactTypeOfWork.HostPortal;
	var CoroutineComponent$4 = ReactTypeOfWork.CoroutineComponent;

	var commitCallbacks$1 = ReactFiberUpdateQueue.commitCallbacks;

	var onCommitUnmount = ReactFiberDevToolsHook.onCommitUnmount;

	var invokeGuardedCallback$2 = ReactErrorUtils_1.invokeGuardedCallback;
	var hasCaughtError$1 = ReactErrorUtils_1.hasCaughtError;
	var clearCaughtError$1 = ReactErrorUtils_1.clearCaughtError;

	var Placement$5 = ReactTypeOfSideEffect.Placement;
	var Update$3 = ReactTypeOfSideEffect.Update;
	var Callback$1 = ReactTypeOfSideEffect.Callback;
	var ContentReset$2 = ReactTypeOfSideEffect.ContentReset;



	{
	  var _require5$1 = ReactDebugFiberPerf_1,
	      startPhaseTimer$2 = _require5$1.startPhaseTimer,
	      stopPhaseTimer$2 = _require5$1.stopPhaseTimer;
	}

	var ReactFiberCommitWork = function (config, captureError) {
	  var commitMount = config.commitMount,
	      commitUpdate = config.commitUpdate,
	      resetTextContent = config.resetTextContent,
	      commitTextUpdate = config.commitTextUpdate,
	      appendChild = config.appendChild,
	      appendChildToContainer = config.appendChildToContainer,
	      insertBefore = config.insertBefore,
	      insertInContainerBefore = config.insertInContainerBefore,
	      removeChild = config.removeChild,
	      removeChildFromContainer = config.removeChildFromContainer,
	      getPublicInstance = config.getPublicInstance;


	  {
	    var callComponentWillUnmountWithTimerInDev = function (current, instance) {
	      startPhaseTimer$2(current, 'componentWillUnmount');
	      instance.props = current.memoizedProps;
	      instance.state = current.memoizedState;
	      instance.componentWillUnmount();
	      stopPhaseTimer$2();
	    };
	  }

	  // Capture errors so they don't interrupt unmounting.
	  function safelyCallComponentWillUnmount(current, instance) {
	    {
	      invokeGuardedCallback$2(null, callComponentWillUnmountWithTimerInDev, null, current, instance);
	      if (hasCaughtError$1()) {
	        var unmountError = clearCaughtError$1();
	        captureError(current, unmountError);
	      }
	    }
	  }

	  function safelyDetachRef(current) {
	    var ref = current.ref;
	    if (ref !== null) {
	      {
	        invokeGuardedCallback$2(null, ref, null, null);
	        if (hasCaughtError$1()) {
	          var refError = clearCaughtError$1();
	          captureError(current, refError);
	        }
	      }
	    }
	  }

	  function getHostParentFiber(fiber) {
	    var parent = fiber['return'];
	    while (parent !== null) {
	      if (isHostParent(parent)) {
	        return parent;
	      }
	      parent = parent['return'];
	    }
	    invariant(false, 'Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.');
	  }

	  function isHostParent(fiber) {
	    return fiber.tag === HostComponent$9 || fiber.tag === HostRoot$9 || fiber.tag === HostPortal$7;
	  }

	  function getHostSibling(fiber) {
	    // We're going to search forward into the tree until we find a sibling host
	    // node. Unfortunately, if multiple insertions are done in a row we have to
	    // search past them. This leads to exponential search for the next sibling.
	    var node = fiber;
	    siblings: while (true) {
	      // If we didn't find anything, let's try the next sibling.
	      while (node.sibling === null) {
	        if (node['return'] === null || isHostParent(node['return'])) {
	          // If we pop out of the root or hit the parent the fiber we are the
	          // last sibling.
	          return null;
	        }
	        node = node['return'];
	      }
	      node.sibling['return'] = node['return'];
	      node = node.sibling;
	      while (node.tag !== HostComponent$9 && node.tag !== HostText$7) {
	        // If it is not host node and, we might have a host node inside it.
	        // Try to search down until we find one.
	        if (node.effectTag & Placement$5) {
	          // If we don't have a child, try the siblings instead.
	          continue siblings;
	        }
	        // If we don't have a child, try the siblings instead.
	        // We also skip portals because they are not part of this host tree.
	        if (node.child === null || node.tag === HostPortal$7) {
	          continue siblings;
	        } else {
	          node.child['return'] = node;
	          node = node.child;
	        }
	      }
	      // Check if this host node is stable or about to be placed.
	      if (!(node.effectTag & Placement$5)) {
	        // Found it!
	        return node.stateNode;
	      }
	    }
	  }

	  function commitPlacement(finishedWork) {
	    // Recursively insert all host nodes into the parent.
	    var parentFiber = getHostParentFiber(finishedWork);
	    var parent = void 0;
	    var isContainer = void 0;
	    switch (parentFiber.tag) {
	      case HostComponent$9:
	        parent = parentFiber.stateNode;
	        isContainer = false;
	        break;
	      case HostRoot$9:
	        parent = parentFiber.stateNode.containerInfo;
	        isContainer = true;
	        break;
	      case HostPortal$7:
	        parent = parentFiber.stateNode.containerInfo;
	        isContainer = true;
	        break;
	      default:
	        invariant(false, 'Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.');
	    }
	    if (parentFiber.effectTag & ContentReset$2) {
	      // Reset the text content of the parent before doing any insertions
	      resetTextContent(parent);
	      // Clear ContentReset from the effect tag
	      parentFiber.effectTag &= ~ContentReset$2;
	    }

	    var before = getHostSibling(finishedWork);
	    // We only have the top Fiber that was inserted but we need recurse down its
	    // children to find all the terminal nodes.
	    var node = finishedWork;
	    while (true) {
	      if (node.tag === HostComponent$9 || node.tag === HostText$7) {
	        if (before) {
	          if (isContainer) {
	            insertInContainerBefore(parent, node.stateNode, before);
	          } else {
	            insertBefore(parent, node.stateNode, before);
	          }
	        } else {
	          if (isContainer) {
	            appendChildToContainer(parent, node.stateNode);
	          } else {
	            appendChild(parent, node.stateNode);
	          }
	        }
	      } else if (node.tag === HostPortal$7) {
	        // If the insertion itself is a portal, then we don't want to traverse
	        // down its children. Instead, we'll get insertions from each child in
	        // the portal directly.
	      } else if (node.child !== null) {
	        node.child['return'] = node;
	        node = node.child;
	        continue;
	      }
	      if (node === finishedWork) {
	        return;
	      }
	      while (node.sibling === null) {
	        if (node['return'] === null || node['return'] === finishedWork) {
	          return;
	        }
	        node = node['return'];
	      }
	      node.sibling['return'] = node['return'];
	      node = node.sibling;
	    }
	  }

	  function commitNestedUnmounts(root) {
	    // While we're inside a removed host node we don't want to call
	    // removeChild on the inner nodes because they're removed by the top
	    // call anyway. We also want to call componentWillUnmount on all
	    // composites before this host node is removed from the tree. Therefore
	    var node = root;
	    while (true) {
	      commitUnmount(node);
	      // Visit children because they may contain more composite or host nodes.
	      // Skip portals because commitUnmount() currently visits them recursively.
	      if (node.child !== null && node.tag !== HostPortal$7) {
	        node.child['return'] = node;
	        node = node.child;
	        continue;
	      }
	      if (node === root) {
	        return;
	      }
	      while (node.sibling === null) {
	        if (node['return'] === null || node['return'] === root) {
	          return;
	        }
	        node = node['return'];
	      }
	      node.sibling['return'] = node['return'];
	      node = node.sibling;
	    }
	  }

	  function unmountHostComponents(current) {
	    // We only have the top Fiber that was inserted but we need recurse down its
	    var node = current;

	    // Each iteration, currentParent is populated with node's host parent if not
	    // currentParentIsValid.
	    var currentParentIsValid = false;
	    var currentParent = void 0;
	    var currentParentIsContainer = void 0;

	    while (true) {
	      if (!currentParentIsValid) {
	        var parent = node['return'];
	        findParent: while (true) {
	          !(parent !== null) ? invariant(false, 'Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.') : void 0;
	          switch (parent.tag) {
	            case HostComponent$9:
	              currentParent = parent.stateNode;
	              currentParentIsContainer = false;
	              break findParent;
	            case HostRoot$9:
	              currentParent = parent.stateNode.containerInfo;
	              currentParentIsContainer = true;
	              break findParent;
	            case HostPortal$7:
	              currentParent = parent.stateNode.containerInfo;
	              currentParentIsContainer = true;
	              break findParent;
	          }
	          parent = parent['return'];
	        }
	        currentParentIsValid = true;
	      }

	      if (node.tag === HostComponent$9 || node.tag === HostText$7) {
	        commitNestedUnmounts(node);
	        // After all the children have unmounted, it is now safe to remove the
	        // node from the tree.
	        if (currentParentIsContainer) {
	          removeChildFromContainer(currentParent, node.stateNode);
	        } else {
	          removeChild(currentParent, node.stateNode);
	        }
	        // Don't visit children because we already visited them.
	      } else if (node.tag === HostPortal$7) {
	        // When we go into a portal, it becomes the parent to remove from.
	        // We will reassign it back when we pop the portal on the way up.
	        currentParent = node.stateNode.containerInfo;
	        // Visit children because portals might contain host components.
	        if (node.child !== null) {
	          node.child['return'] = node;
	          node = node.child;
	          continue;
	        }
	      } else {
	        commitUnmount(node);
	        // Visit children because we may find more host components below.
	        if (node.child !== null) {
	          node.child['return'] = node;
	          node = node.child;
	          continue;
	        }
	      }
	      if (node === current) {
	        return;
	      }
	      while (node.sibling === null) {
	        if (node['return'] === null || node['return'] === current) {
	          return;
	        }
	        node = node['return'];
	        if (node.tag === HostPortal$7) {
	          // When we go out of the portal, we need to restore the parent.
	          // Since we don't keep a stack of them, we will search for it.
	          currentParentIsValid = false;
	        }
	      }
	      node.sibling['return'] = node['return'];
	      node = node.sibling;
	    }
	  }

	  function commitDeletion(current) {
	    // Recursively delete all host nodes from the parent.
	    // Detach refs and call componentWillUnmount() on the whole subtree.
	    unmountHostComponents(current);

	    // Cut off the return pointers to disconnect it from the tree. Ideally, we
	    // should clear the child pointer of the parent alternate to let this
	    // get GC:ed but we don't know which for sure which parent is the current
	    // one so we'll settle for GC:ing the subtree of this child. This child
	    // itself will be GC:ed when the parent updates the next time.
	    current['return'] = null;
	    current.child = null;
	    if (current.alternate) {
	      current.alternate.child = null;
	      current.alternate['return'] = null;
	    }
	  }

	  // User-originating errors (lifecycles and refs) should not interrupt
	  // deletion, so don't let them throw. Host-originating errors should
	  // interrupt deletion, so it's okay
	  function commitUnmount(current) {
	    if (typeof onCommitUnmount === 'function') {
	      onCommitUnmount(current);
	    }

	    switch (current.tag) {
	      case ClassComponent$9:
	        {
	          safelyDetachRef(current);
	          var instance = current.stateNode;
	          if (typeof instance.componentWillUnmount === 'function') {
	            safelyCallComponentWillUnmount(current, instance);
	          }
	          return;
	        }
	      case HostComponent$9:
	        {
	          safelyDetachRef(current);
	          return;
	        }
	      case CoroutineComponent$4:
	        {
	          commitNestedUnmounts(current.stateNode);
	          return;
	        }
	      case HostPortal$7:
	        {
	          // TODO: this is recursive.
	          // We are also not using this parent because
	          // the portal will get pushed immediately.
	          unmountHostComponents(current);
	          return;
	        }
	    }
	  }

	  function commitWork(current, finishedWork) {
	    switch (finishedWork.tag) {
	      case ClassComponent$9:
	        {
	          return;
	        }
	      case HostComponent$9:
	        {
	          var instance = finishedWork.stateNode;
	          if (instance != null) {
	            // Commit the work prepared earlier.
	            var newProps = finishedWork.memoizedProps;
	            // For hydration we reuse the update path but we treat the oldProps
	            // as the newProps. The updatePayload will contain the real change in
	            // this case.
	            var oldProps = current !== null ? current.memoizedProps : newProps;
	            var type = finishedWork.type;
	            // TODO: Type the updateQueue to be specific to host components.
	            var updatePayload = finishedWork.updateQueue;
	            finishedWork.updateQueue = null;
	            if (updatePayload !== null) {
	              commitUpdate(instance, updatePayload, type, oldProps, newProps, finishedWork);
	            }
	          }
	          return;
	        }
	      case HostText$7:
	        {
	          !(finishedWork.stateNode !== null) ? invariant(false, 'This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.') : void 0;
	          var textInstance = finishedWork.stateNode;
	          var newText = finishedWork.memoizedProps;
	          // For hydration we reuse the update path but we treat the oldProps
	          // as the newProps. The updatePayload will contain the real change in
	          // this case.
	          var oldText = current !== null ? current.memoizedProps : newText;
	          commitTextUpdate(textInstance, oldText, newText);
	          return;
	        }
	      case HostRoot$9:
	        {
	          return;
	        }
	      case HostPortal$7:
	        {
	          return;
	        }
	      default:
	        {
	          invariant(false, 'This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.');
	        }
	    }
	  }

	  function commitLifeCycles(current, finishedWork) {
	    switch (finishedWork.tag) {
	      case ClassComponent$9:
	        {
	          var instance = finishedWork.stateNode;
	          if (finishedWork.effectTag & Update$3) {
	            if (current === null) {
	              {
	                startPhaseTimer$2(finishedWork, 'componentDidMount');
	              }
	              instance.props = finishedWork.memoizedProps;
	              instance.state = finishedWork.memoizedState;
	              instance.componentDidMount();
	              {
	                stopPhaseTimer$2();
	              }
	            } else {
	              var prevProps = current.memoizedProps;
	              var prevState = current.memoizedState;
	              {
	                startPhaseTimer$2(finishedWork, 'componentDidUpdate');
	              }
	              instance.props = finishedWork.memoizedProps;
	              instance.state = finishedWork.memoizedState;
	              instance.componentDidUpdate(prevProps, prevState);
	              {
	                stopPhaseTimer$2();
	              }
	            }
	          }
	          if (finishedWork.effectTag & Callback$1 && finishedWork.updateQueue !== null) {
	            commitCallbacks$1(finishedWork, finishedWork.updateQueue, instance);
	          }
	          return;
	        }
	      case HostRoot$9:
	        {
	          var updateQueue = finishedWork.updateQueue;
	          if (updateQueue !== null) {
	            var _instance = finishedWork.child && finishedWork.child.stateNode;
	            commitCallbacks$1(finishedWork, updateQueue, _instance);
	          }
	          return;
	        }
	      case HostComponent$9:
	        {
	          var _instance2 = finishedWork.stateNode;

	          // Renderers may schedule work to be done after host components are mounted
	          // (eg DOM renderer may schedule auto-focus for inputs and form controls).
	          // These effects should only be committed when components are first mounted,
	          // aka when there is no current/alternate.
	          if (current === null && finishedWork.effectTag & Update$3) {
	            var type = finishedWork.type;
	            var props = finishedWork.memoizedProps;
	            commitMount(_instance2, type, props, finishedWork);
	          }

	          return;
	        }
	      case HostText$7:
	        {
	          // We have no life-cycles associated with text.
	          return;
	        }
	      case HostPortal$7:
	        {
	          // We have no life-cycles associated with portals.
	          return;
	        }
	      default:
	        {
	          invariant(false, 'This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.');
	        }
	    }
	  }

	  function commitAttachRef(finishedWork) {
	    var ref = finishedWork.ref;
	    if (ref !== null) {
	      var instance = finishedWork.stateNode;
	      switch (finishedWork.tag) {
	        case HostComponent$9:
	          ref(getPublicInstance(instance));
	          break;
	        default:
	          ref(instance);
	      }
	    }
	  }

	  function commitDetachRef(current) {
	    var currentRef = current.ref;
	    if (currentRef !== null) {
	      currentRef(null);
	    }
	  }

	  return {
	    commitPlacement: commitPlacement,
	    commitDeletion: commitDeletion,
	    commitWork: commitWork,
	    commitLifeCycles: commitLifeCycles,
	    commitAttachRef: commitAttachRef,
	    commitDetachRef: commitDetachRef
	  };
	};

	var createCursor$2 = ReactFiberStack.createCursor;
	var pop$2 = ReactFiberStack.pop;
	var push$2 = ReactFiberStack.push;



	var NO_CONTEXT = {};

	var ReactFiberHostContext = function (config) {
	  var getChildHostContext = config.getChildHostContext,
	      getRootHostContext = config.getRootHostContext;


	  var contextStackCursor = createCursor$2(NO_CONTEXT);
	  var contextFiberStackCursor = createCursor$2(NO_CONTEXT);
	  var rootInstanceStackCursor = createCursor$2(NO_CONTEXT);

	  function requiredContext(c) {
	    !(c !== NO_CONTEXT) ? invariant(false, 'Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.') : void 0;
	    return c;
	  }

	  function getRootHostContainer() {
	    var rootInstance = requiredContext(rootInstanceStackCursor.current);
	    return rootInstance;
	  }

	  function pushHostContainer(fiber, nextRootInstance) {
	    // Push current root instance onto the stack;
	    // This allows us to reset root when portals are popped.
	    push$2(rootInstanceStackCursor, nextRootInstance, fiber);

	    var nextRootContext = getRootHostContext(nextRootInstance);

	    // Track the context and the Fiber that provided it.
	    // This enables us to pop only Fibers that provide unique contexts.
	    push$2(contextFiberStackCursor, fiber, fiber);
	    push$2(contextStackCursor, nextRootContext, fiber);
	  }

	  function popHostContainer(fiber) {
	    pop$2(contextStackCursor, fiber);
	    pop$2(contextFiberStackCursor, fiber);
	    pop$2(rootInstanceStackCursor, fiber);
	  }

	  function getHostContext() {
	    var context = requiredContext(contextStackCursor.current);
	    return context;
	  }

	  function pushHostContext(fiber) {
	    var rootInstance = requiredContext(rootInstanceStackCursor.current);
	    var context = requiredContext(contextStackCursor.current);
	    var nextContext = getChildHostContext(context, fiber.type, rootInstance);

	    // Don't push this Fiber's context unless it's unique.
	    if (context === nextContext) {
	      return;
	    }

	    // Track the context and the Fiber that provided it.
	    // This enables us to pop only Fibers that provide unique contexts.
	    push$2(contextFiberStackCursor, fiber, fiber);
	    push$2(contextStackCursor, nextContext, fiber);
	  }

	  function popHostContext(fiber) {
	    // Do not pop unless this Fiber provided the current context.
	    // pushHostContext() only pushes Fibers that provide unique contexts.
	    if (contextFiberStackCursor.current !== fiber) {
	      return;
	    }

	    pop$2(contextStackCursor, fiber);
	    pop$2(contextFiberStackCursor, fiber);
	  }

	  function resetHostContainer() {
	    contextStackCursor.current = NO_CONTEXT;
	    rootInstanceStackCursor.current = NO_CONTEXT;
	  }

	  return {
	    getHostContext: getHostContext,
	    getRootHostContainer: getRootHostContainer,
	    popHostContainer: popHostContainer,
	    popHostContext: popHostContext,
	    pushHostContainer: pushHostContainer,
	    pushHostContext: pushHostContext,
	    resetHostContainer: resetHostContainer
	  };
	};

	var HostComponent$10 = ReactTypeOfWork.HostComponent;
	var HostText$8 = ReactTypeOfWork.HostText;
	var HostRoot$10 = ReactTypeOfWork.HostRoot;

	var Deletion$2 = ReactTypeOfSideEffect.Deletion;
	var Placement$6 = ReactTypeOfSideEffect.Placement;

	var createFiberFromHostInstanceForDeletion$1 = ReactFiber.createFiberFromHostInstanceForDeletion;

	var ReactFiberHydrationContext = function (config) {
	  var shouldSetTextContent = config.shouldSetTextContent,
	      canHydrateInstance = config.canHydrateInstance,
	      canHydrateTextInstance = config.canHydrateTextInstance,
	      getNextHydratableSibling = config.getNextHydratableSibling,
	      getFirstHydratableChild = config.getFirstHydratableChild,
	      hydrateInstance = config.hydrateInstance,
	      hydrateTextInstance = config.hydrateTextInstance,
	      didNotHydrateInstance = config.didNotHydrateInstance,
	      didNotFindHydratableInstance = config.didNotFindHydratableInstance,
	      didNotFindHydratableTextInstance = config.didNotFindHydratableTextInstance;

	  // If this doesn't have hydration mode.

	  if (!(canHydrateInstance && canHydrateTextInstance && getNextHydratableSibling && getFirstHydratableChild && hydrateInstance && hydrateTextInstance && didNotHydrateInstance && didNotFindHydratableInstance && didNotFindHydratableTextInstance)) {
	    return {
	      enterHydrationState: function () {
	        return false;
	      },
	      resetHydrationState: function () {},
	      tryToClaimNextHydratableInstance: function () {},
	      prepareToHydrateHostInstance: function () {
	        invariant(false, 'Expected prepareToHydrateHostInstance() to never be called. This error is likely caused by a bug in React. Please file an issue.');
	      },
	      prepareToHydrateHostTextInstance: function () {
	        invariant(false, 'Expected prepareToHydrateHostTextInstance() to never be called. This error is likely caused by a bug in React. Please file an issue.');
	      },
	      popHydrationState: function (fiber) {
	        return false;
	      }
	    };
	  }

	  // The deepest Fiber on the stack involved in a hydration context.
	  // This may have been an insertion or a hydration.
	  var hydrationParentFiber = null;
	  var nextHydratableInstance = null;
	  var isHydrating = false;

	  function enterHydrationState(fiber) {
	    var parentInstance = fiber.stateNode.containerInfo;
	    nextHydratableInstance = getFirstHydratableChild(parentInstance);
	    hydrationParentFiber = fiber;
	    isHydrating = true;
	    return true;
	  }

	  function deleteHydratableInstance(returnFiber, instance) {
	    {
	      switch (returnFiber.tag) {
	        case HostRoot$10:
	          didNotHydrateInstance(returnFiber.stateNode.containerInfo, instance);
	          break;
	        case HostComponent$10:
	          didNotHydrateInstance(returnFiber.stateNode, instance);
	          break;
	      }
	    }

	    var childToDelete = createFiberFromHostInstanceForDeletion$1();
	    childToDelete.stateNode = instance;
	    childToDelete['return'] = returnFiber;
	    childToDelete.effectTag = Deletion$2;

	    // This might seem like it belongs on progressedFirstDeletion. However,
	    // these children are not part of the reconciliation list of children.
	    // Even if we abort and rereconcile the children, that will try to hydrate
	    // again and the nodes are still in the host tree so these will be
	    // recreated.
	    if (returnFiber.lastEffect !== null) {
	      returnFiber.lastEffect.nextEffect = childToDelete;
	      returnFiber.lastEffect = childToDelete;
	    } else {
	      returnFiber.firstEffect = returnFiber.lastEffect = childToDelete;
	    }
	  }

	  function insertNonHydratedInstance(returnFiber, fiber) {
	    fiber.effectTag |= Placement$6;
	    {
	      var parentInstance;
	      switch (returnFiber.tag) {
	        // TODO: Currently we don't warn for insertions into the root because
	        // we always insert into the root in the non-hydrating case. We just
	        // delete the existing content. Reenable this once we have a better
	        // strategy for determining if we're hydrating or not.
	        // case HostRoot:
	        //   parentInstance = returnFiber.stateNode.containerInfo;
	        //   break;
	        case HostComponent$10:
	          parentInstance = returnFiber.stateNode;
	          break;
	        default:
	          return;
	      }
	      switch (fiber.tag) {
	        case HostComponent$10:
	          var type = fiber.type;
	          var props = fiber.pendingProps;
	          didNotFindHydratableInstance(parentInstance, type, props);
	          break;
	        case HostText$8:
	          var text = fiber.pendingProps;
	          didNotFindHydratableTextInstance(parentInstance, text);
	          break;
	      }
	    }
	  }

	  function canHydrate(fiber, nextInstance) {
	    switch (fiber.tag) {
	      case HostComponent$10:
	        {
	          var type = fiber.type;
	          var props = fiber.pendingProps;
	          return canHydrateInstance(nextInstance, type, props);
	        }
	      case HostText$8:
	        {
	          var text = fiber.pendingProps;
	          return canHydrateTextInstance(nextInstance, text);
	        }
	      default:
	        return false;
	    }
	  }

	  function tryToClaimNextHydratableInstance(fiber) {
	    if (!isHydrating) {
	      return;
	    }
	    var nextInstance = nextHydratableInstance;
	    if (!nextInstance) {
	      // Nothing to hydrate. Make it an insertion.
	      insertNonHydratedInstance(hydrationParentFiber, fiber);
	      isHydrating = false;
	      hydrationParentFiber = fiber;
	      return;
	    }
	    if (!canHydrate(fiber, nextInstance)) {
	      // If we can't hydrate this instance let's try the next one.
	      // We use this as a heuristic. It's based on intuition and not data so it
	      // might be flawed or unnecessary.
	      nextInstance = getNextHydratableSibling(nextInstance);
	      if (!nextInstance || !canHydrate(fiber, nextInstance)) {
	        // Nothing to hydrate. Make it an insertion.
	        insertNonHydratedInstance(hydrationParentFiber, fiber);
	        isHydrating = false;
	        hydrationParentFiber = fiber;
	        return;
	      }
	      // We matched the next one, we'll now assume that the first one was
	      // superfluous and we'll delete it. Since we can't eagerly delete it
	      // we'll have to schedule a deletion. To do that, this node needs a dummy
	      // fiber associated with it.
	      deleteHydratableInstance(hydrationParentFiber, nextHydratableInstance);
	    }
	    fiber.stateNode = nextInstance;
	    hydrationParentFiber = fiber;
	    nextHydratableInstance = getFirstHydratableChild(nextInstance);
	  }

	  function prepareToHydrateHostInstance(fiber, rootContainerInstance, hostContext) {
	    var instance = fiber.stateNode;
	    var updatePayload = hydrateInstance(instance, fiber.type, fiber.memoizedProps, rootContainerInstance, hostContext, fiber);
	    // TODO: Type this specific to this type of component.
	    fiber.updateQueue = updatePayload;
	    // If the update payload indicates that there is a change or if there
	    // is a new ref we mark this as an update.
	    if (updatePayload !== null) {
	      return true;
	    }
	    return false;
	  }

	  function prepareToHydrateHostTextInstance(fiber) {
	    var textInstance = fiber.stateNode;
	    var shouldUpdate = hydrateTextInstance(textInstance, fiber.memoizedProps, fiber);
	    return shouldUpdate;
	  }

	  function popToNextHostParent(fiber) {
	    var parent = fiber['return'];
	    while (parent !== null && parent.tag !== HostComponent$10 && parent.tag !== HostRoot$10) {
	      parent = parent['return'];
	    }
	    hydrationParentFiber = parent;
	  }

	  function popHydrationState(fiber) {
	    if (fiber !== hydrationParentFiber) {
	      // We're deeper than the current hydration context, inside an inserted
	      // tree.
	      return false;
	    }
	    if (!isHydrating) {
	      // If we're not currently hydrating but we're in a hydration context, then
	      // we were an insertion and now need to pop up reenter hydration of our
	      // siblings.
	      popToNextHostParent(fiber);
	      isHydrating = true;
	      return false;
	    }

	    var type = fiber.type;

	    // If we have any remaining hydratable nodes, we need to delete them now.
	    // We only do this deeper than head and body since they tend to have random
	    // other nodes in them. We also ignore components with pure text content in
	    // side of them.
	    // TODO: Better heuristic.
	    if (fiber.tag !== HostComponent$10 || type !== 'head' && type !== 'body' && !shouldSetTextContent(type, fiber.memoizedProps)) {
	      var nextInstance = nextHydratableInstance;
	      while (nextInstance) {
	        deleteHydratableInstance(fiber, nextInstance);
	        nextInstance = getNextHydratableSibling(nextInstance);
	      }
	    }

	    popToNextHostParent(fiber);
	    nextHydratableInstance = hydrationParentFiber ? getNextHydratableSibling(fiber.stateNode) : null;
	    return true;
	  }

	  function resetHydrationState() {
	    hydrationParentFiber = null;
	    nextHydratableInstance = null;
	    isHydrating = false;
	  }

	  return {
	    enterHydrationState: enterHydrationState,
	    resetHydrationState: resetHydrationState,
	    tryToClaimNextHydratableInstance: tryToClaimNextHydratableInstance,
	    prepareToHydrateHostInstance: prepareToHydrateHostInstance,
	    prepareToHydrateHostTextInstance: prepareToHydrateHostTextInstance,
	    popHydrationState: popHydrationState
	  };
	};

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * @providesModule ReactFiberInstrumentation
	 * 
	 */

	// This lets us hook into Fiber to debug what it's doing.
	// See https://github.com/facebook/react/pull/8033.
	// This is not part of the public API, not even for React DevTools.
	// You may only inject a debugTool if you work on React Fiber itself.

	var ReactFiberInstrumentation$2 = {
	  debugTool: null
	};

	var ReactFiberInstrumentation_1 = ReactFiberInstrumentation$2;

	var popContextProvider$1 = ReactFiberContext.popContextProvider;

	var reset$1 = ReactFiberStack.reset;

	var getStackAddendumByWorkInProgressFiber$2 = ReactFiberComponentTreeHook.getStackAddendumByWorkInProgressFiber;

	var logCapturedError = ReactFiberErrorLogger.logCapturedError;

	var invokeGuardedCallback$1 = ReactErrorUtils_1.invokeGuardedCallback;
	var hasCaughtError = ReactErrorUtils_1.hasCaughtError;
	var clearCaughtError = ReactErrorUtils_1.clearCaughtError;







	var ReactCurrentOwner$1 = ReactGlobalSharedState_1.ReactCurrentOwner;



	var createWorkInProgress$1 = ReactFiber.createWorkInProgress;
	var largerPriority$1 = ReactFiber.largerPriority;

	var onCommitRoot = ReactFiberDevToolsHook.onCommitRoot;

	var NoWork$2 = ReactPriorityLevel.NoWork;
	var SynchronousPriority$1 = ReactPriorityLevel.SynchronousPriority;
	var TaskPriority$1 = ReactPriorityLevel.TaskPriority;
	var HighPriority = ReactPriorityLevel.HighPriority;
	var LowPriority = ReactPriorityLevel.LowPriority;
	var OffscreenPriority = ReactPriorityLevel.OffscreenPriority;

	var AsyncUpdates = ReactTypeOfInternalContext.AsyncUpdates;

	var PerformedWork = ReactTypeOfSideEffect.PerformedWork;
	var Placement$1 = ReactTypeOfSideEffect.Placement;
	var Update = ReactTypeOfSideEffect.Update;
	var PlacementAndUpdate = ReactTypeOfSideEffect.PlacementAndUpdate;
	var Deletion = ReactTypeOfSideEffect.Deletion;
	var ContentReset = ReactTypeOfSideEffect.ContentReset;
	var Callback = ReactTypeOfSideEffect.Callback;
	var Err = ReactTypeOfSideEffect.Err;
	var Ref = ReactTypeOfSideEffect.Ref;

	var HostRoot$6 = ReactTypeOfWork.HostRoot;
	var HostComponent$6 = ReactTypeOfWork.HostComponent;
	var HostPortal$3 = ReactTypeOfWork.HostPortal;
	var ClassComponent$5 = ReactTypeOfWork.ClassComponent;

	var getUpdatePriority$1 = ReactFiberUpdateQueue.getUpdatePriority;

	var _require14 = ReactFiberContext;
	var resetContext$1 = _require14.resetContext;



	{
	  var warning$22 = require$$0;
	  var ReactFiberInstrumentation$1 = ReactFiberInstrumentation_1;
	  var ReactDebugCurrentFiber$3 = ReactDebugCurrentFiber_1;

	  var _require15 = ReactDebugFiberPerf_1,
	      recordEffect = _require15.recordEffect,
	      recordScheduleUpdate = _require15.recordScheduleUpdate,
	      startWorkTimer = _require15.startWorkTimer,
	      stopWorkTimer = _require15.stopWorkTimer,
	      stopFailedWorkTimer = _require15.stopFailedWorkTimer,
	      startWorkLoopTimer = _require15.startWorkLoopTimer,
	      stopWorkLoopTimer = _require15.stopWorkLoopTimer,
	      startCommitTimer = _require15.startCommitTimer,
	      stopCommitTimer = _require15.stopCommitTimer,
	      startCommitHostEffectsTimer = _require15.startCommitHostEffectsTimer,
	      stopCommitHostEffectsTimer = _require15.stopCommitHostEffectsTimer,
	      startCommitLifeCyclesTimer = _require15.startCommitLifeCyclesTimer,
	      stopCommitLifeCyclesTimer = _require15.stopCommitLifeCyclesTimer;

	  var warnAboutUpdateOnUnmounted = function (instance) {
	    var ctor = instance.constructor;
	    warning$22(false, 'Can only update a mounted or mounting component. This usually means ' + 'you called setState, replaceState, or forceUpdate on an unmounted ' + 'component. This is a no-op.\n\nPlease check the code for the ' + '%s component.', ctor && (ctor.displayName || ctor.name) || 'ReactClass');
	  };

	  var warnAboutInvalidUpdates = function (instance) {
	    switch (ReactDebugCurrentFiber$3.phase) {
	      case 'getChildContext':
	        warning$22(false, 'setState(...): Cannot call setState() inside getChildContext()');
	        break;
	      case 'render':
	        warning$22(false, 'Cannot update during an existing state transition (such as within ' + "`render` or another component's constructor). Render methods should " + 'be a pure function of props and state; constructor side-effects are ' + 'an anti-pattern, but can be moved to `componentWillMount`.');
	        break;
	    }
	  };
	}

	var timeHeuristicForUnitOfWork = 1;

	var ReactFiberScheduler = function (config) {
	  var hostContext = ReactFiberHostContext(config);
	  var hydrationContext = ReactFiberHydrationContext(config);
	  var popHostContainer = hostContext.popHostContainer,
	      popHostContext = hostContext.popHostContext,
	      resetHostContainer = hostContext.resetHostContainer;

	  var _ReactFiberBeginWork = ReactFiberBeginWork(config, hostContext, hydrationContext, scheduleUpdate, getPriorityContext),
	      beginWork = _ReactFiberBeginWork.beginWork,
	      beginFailedWork = _ReactFiberBeginWork.beginFailedWork;

	  var _ReactFiberCompleteWo = ReactFiberCompleteWork(config, hostContext, hydrationContext),
	      completeWork = _ReactFiberCompleteWo.completeWork;

	  var _ReactFiberCommitWork = ReactFiberCommitWork(config, captureError),
	      commitPlacement = _ReactFiberCommitWork.commitPlacement,
	      commitDeletion = _ReactFiberCommitWork.commitDeletion,
	      commitWork = _ReactFiberCommitWork.commitWork,
	      commitLifeCycles = _ReactFiberCommitWork.commitLifeCycles,
	      commitAttachRef = _ReactFiberCommitWork.commitAttachRef,
	      commitDetachRef = _ReactFiberCommitWork.commitDetachRef;

	  var scheduleDeferredCallback = config.scheduleDeferredCallback,
	      useSyncScheduling = config.useSyncScheduling,
	      prepareForCommit = config.prepareForCommit,
	      resetAfterCommit = config.resetAfterCommit;

	  // The priority level to use when scheduling an update. We use NoWork to
	  // represent the default priority.
	  // TODO: Should we change this to an array instead of using the call stack?
	  // Might be less confusing.

	  var priorityContext = NoWork$2;

	  // Keeps track of whether we're currently in a work loop.
	  var isPerformingWork = false;

	  // Keeps track of whether the current deadline has expired.
	  var deadlineHasExpired = false;

	  // Keeps track of whether we should should batch sync updates.
	  var isBatchingUpdates = false;

	  // This is needed for the weird case where the initial mount is synchronous
	  // even inside batchedUpdates :(
	  var isUnbatchingUpdates = false;

	  // The next work in progress fiber that we're currently working on.
	  var nextUnitOfWork = null;
	  var nextPriorityLevel = NoWork$2;

	  // The next fiber with an effect that we're currently committing.
	  var nextEffect = null;

	  var pendingCommit = null;

	  // Linked list of roots with scheduled work on them.
	  var nextScheduledRoot = null;
	  var lastScheduledRoot = null;

	  // Keep track of which host environment callbacks are scheduled.
	  var isCallbackScheduled = false;

	  // Keep track of which fibers have captured an error that need to be handled.
	  // Work is removed from this collection after componentDidCatch is called.
	  var capturedErrors = null;
	  // Keep track of which fibers have failed during the current batch of work.
	  // This is a different set than capturedErrors, because it is not reset until
	  // the end of the batch. This is needed to propagate errors correctly if a
	  // subtree fails more than once.
	  var failedBoundaries = null;
	  // Error boundaries that captured an error during the current commit.
	  var commitPhaseBoundaries = null;
	  var firstUncaughtError = null;
	  var didFatal = false;

	  var isCommitting = false;
	  var isUnmounting = false;

	  // Use these to prevent an infinite loop of nested updates
	  var NESTED_UPDATE_LIMIT = 1000;
	  var nestedUpdateCount = 0;
	  var nextRenderedTree = null;

	  function resetContextStack() {
	    // Reset the stack
	    reset$1();
	    // Reset the cursors
	    resetContext$1();
	    resetHostContainer();
	  }

	  // resetNextUnitOfWork mutates the current priority context. It is reset after
	  // after the workLoop exits, so never call resetNextUnitOfWork from outside
	  // the work loop.
	  function resetNextUnitOfWork() {
	    // Clear out roots with no more work on them, or if they have uncaught errors
	    while (nextScheduledRoot !== null && nextScheduledRoot.current.pendingWorkPriority === NoWork$2) {
	      // Unschedule this root.
	      nextScheduledRoot.isScheduled = false;
	      // Read the next pointer now.
	      // We need to clear it in case this root gets scheduled again later.
	      var next = nextScheduledRoot.nextScheduledRoot;
	      nextScheduledRoot.nextScheduledRoot = null;
	      // Exit if we cleared all the roots and there's no work to do.
	      if (nextScheduledRoot === lastScheduledRoot) {
	        nextScheduledRoot = null;
	        lastScheduledRoot = null;
	        nextPriorityLevel = NoWork$2;
	        return null;
	      }
	      // Continue with the next root.
	      // If there's no work on it, it will get unscheduled too.
	      nextScheduledRoot = next;
	    }

	    var root = nextScheduledRoot;
	    var highestPriorityRoot = null;
	    var highestPriorityLevel = NoWork$2;
	    while (root !== null) {
	      if (root.current.pendingWorkPriority !== NoWork$2 && (highestPriorityLevel === NoWork$2 || highestPriorityLevel > root.current.pendingWorkPriority)) {
	        highestPriorityLevel = root.current.pendingWorkPriority;
	        highestPriorityRoot = root;
	      }
	      // We didn't find anything to do in this root, so let's try the next one.
	      root = root.nextScheduledRoot;
	    }
	    if (highestPriorityRoot !== null) {
	      nextPriorityLevel = highestPriorityLevel;
	      // Before we start any new work, let's make sure that we have a fresh
	      // stack to work from.
	      // TODO: This call is buried a bit too deep. It would be nice to have
	      // a single point which happens right before any new work and
	      // unfortunately this is it.
	      resetContextStack();

	      nextUnitOfWork = createWorkInProgress$1(highestPriorityRoot.current, highestPriorityLevel);
	      if (highestPriorityRoot !== nextRenderedTree) {
	        // We've switched trees. Reset the nested update counter.
	        nestedUpdateCount = 0;
	        nextRenderedTree = highestPriorityRoot;
	      }
	      return;
	    }

	    nextPriorityLevel = NoWork$2;
	    nextUnitOfWork = null;
	    nextRenderedTree = null;
	    return;
	  }

	  function commitAllHostEffects() {
	    while (nextEffect !== null) {
	      {
	        ReactDebugCurrentFiber$3.setCurrentFiber(nextEffect, null);
	        recordEffect();
	      }

	      var effectTag = nextEffect.effectTag;
	      if (effectTag & ContentReset) {
	        config.resetTextContent(nextEffect.stateNode);
	      }

	      if (effectTag & Ref) {
	        var current = nextEffect.alternate;
	        if (current !== null) {
	          commitDetachRef(current);
	        }
	      }

	      // The following switch statement is only concerned about placement,
	      // updates, and deletions. To avoid needing to add a case for every
	      // possible bitmap value, we remove the secondary effects from the
	      // effect tag and switch on that value.
	      var primaryEffectTag = effectTag & ~(Callback | Err | ContentReset | Ref | PerformedWork);
	      switch (primaryEffectTag) {
	        case Placement$1:
	          {
	            commitPlacement(nextEffect);
	            // Clear the "placement" from effect tag so that we know that this is inserted, before
	            // any life-cycles like componentDidMount gets called.
	            // TODO: findDOMNode doesn't rely on this any more but isMounted
	            // does and isMounted is deprecated anyway so we should be able
	            // to kill this.
	            nextEffect.effectTag &= ~Placement$1;
	            break;
	          }
	        case PlacementAndUpdate:
	          {
	            // Placement
	            commitPlacement(nextEffect);
	            // Clear the "placement" from effect tag so that we know that this is inserted, before
	            // any life-cycles like componentDidMount gets called.
	            nextEffect.effectTag &= ~Placement$1;

	            // Update
	            var _current = nextEffect.alternate;
	            commitWork(_current, nextEffect);
	            break;
	          }
	        case Update:
	          {
	            var _current2 = nextEffect.alternate;
	            commitWork(_current2, nextEffect);
	            break;
	          }
	        case Deletion:
	          {
	            isUnmounting = true;
	            commitDeletion(nextEffect);
	            isUnmounting = false;
	            break;
	          }
	      }
	      nextEffect = nextEffect.nextEffect;
	    }

	    {
	      ReactDebugCurrentFiber$3.resetCurrentFiber();
	    }
	  }

	  function commitAllLifeCycles() {
	    while (nextEffect !== null) {
	      var effectTag = nextEffect.effectTag;

	      // Use Task priority for lifecycle updates
	      if (effectTag & (Update | Callback)) {
	        {
	          recordEffect();
	        }
	        var current = nextEffect.alternate;
	        commitLifeCycles(current, nextEffect);
	      }

	      if (effectTag & Ref) {
	        {
	          recordEffect();
	        }
	        commitAttachRef(nextEffect);
	      }

	      if (effectTag & Err) {
	        {
	          recordEffect();
	        }
	        commitErrorHandling(nextEffect);
	      }

	      var next = nextEffect.nextEffect;
	      // Ensure that we clean these up so that we don't accidentally keep them.
	      // I'm not actually sure this matters because we can't reset firstEffect
	      // and lastEffect since they're on every node, not just the effectful
	      // ones. So we have to clean everything as we reuse nodes anyway.
	      nextEffect.nextEffect = null;
	      // Ensure that we reset the effectTag here so that we can rely on effect
	      // tags to reason about the current life-cycle.
	      nextEffect = next;
	    }
	  }

	  function commitAllWork(finishedWork) {
	    // We keep track of this so that captureError can collect any boundaries
	    // that capture an error during the commit phase. The reason these aren't
	    // local to this function is because errors that occur during cWU are
	    // captured elsewhere, to prevent the unmount from being interrupted.
	    isCommitting = true;
	    {
	      startCommitTimer();
	    }

	    pendingCommit = null;
	    var root = finishedWork.stateNode;
	    !(root.current !== finishedWork) ? invariant(false, 'Cannot commit the same tree as before. This is probably a bug related to the return field. This error is likely caused by a bug in React. Please file an issue.') : void 0;

	    if (nextPriorityLevel === SynchronousPriority$1 || nextPriorityLevel === TaskPriority$1) {
	      // Keep track of the number of iterations to prevent an infinite
	      // update loop.
	      nestedUpdateCount++;
	    }

	    // Reset this to null before calling lifecycles
	    ReactCurrentOwner$1.current = null;

	    var firstEffect = void 0;
	    if (finishedWork.effectTag > PerformedWork) {
	      // A fiber's effect list consists only of its children, not itself. So if
	      // the root has an effect, we need to add it to the end of the list. The
	      // resulting list is the set that would belong to the root's parent, if
	      // it had one; that is, all the effects in the tree including the root.
	      if (finishedWork.lastEffect !== null) {
	        finishedWork.lastEffect.nextEffect = finishedWork;
	        firstEffect = finishedWork.firstEffect;
	      } else {
	        firstEffect = finishedWork;
	      }
	    } else {
	      // There is no effect on the root.
	      firstEffect = finishedWork.firstEffect;
	    }

	    prepareForCommit();

	    // Commit all the side-effects within a tree. We'll do this in two passes.
	    // The first pass performs all the host insertions, updates, deletions and
	    // ref unmounts.
	    nextEffect = firstEffect;
	    {
	      startCommitHostEffectsTimer();
	    }
	    while (nextEffect !== null) {
	      var didError = false;
	      var _error = void 0;
	      {
	        invokeGuardedCallback$1(null, commitAllHostEffects, null);
	        if (hasCaughtError()) {
	          didError = true;
	          _error = clearCaughtError();
	        }
	      }
	      if (didError) {
	        !(nextEffect !== null) ? invariant(false, 'Should have next effect. This error is likely caused by a bug in React. Please file an issue.') : void 0;
	        captureError(nextEffect, _error);
	        // Clean-up
	        if (nextEffect !== null) {
	          nextEffect = nextEffect.nextEffect;
	        }
	      }
	    }
	    {
	      stopCommitHostEffectsTimer();
	    }

	    resetAfterCommit();

	    // The work-in-progress tree is now the current tree. This must come after
	    // the first pass of the commit phase, so that the previous tree is still
	    // current during componentWillUnmount, but before the second pass, so that
	    // the finished work is current during componentDidMount/Update.
	    root.current = finishedWork;

	    // In the second pass we'll perform all life-cycles and ref callbacks.
	    // Life-cycles happen as a separate pass so that all placements, updates,
	    // and deletions in the entire tree have already been invoked.
	    // This pass also triggers any renderer-specific initial effects.
	    nextEffect = firstEffect;
	    {
	      startCommitLifeCyclesTimer();
	    }
	    while (nextEffect !== null) {
	      var _didError = false;
	      var _error2 = void 0;
	      {
	        invokeGuardedCallback$1(null, commitAllLifeCycles, null);
	        if (hasCaughtError()) {
	          _didError = true;
	          _error2 = clearCaughtError();
	        }
	      }
	      if (_didError) {
	        !(nextEffect !== null) ? invariant(false, 'Should have next effect. This error is likely caused by a bug in React. Please file an issue.') : void 0;
	        captureError(nextEffect, _error2);
	        if (nextEffect !== null) {
	          nextEffect = nextEffect.nextEffect;
	        }
	      }
	    }

	    isCommitting = false;
	    {
	      stopCommitLifeCyclesTimer();
	      stopCommitTimer();
	    }
	    if (typeof onCommitRoot === 'function') {
	      onCommitRoot(finishedWork.stateNode);
	    }
	    if (true && ReactFiberInstrumentation$1.debugTool) {
	      ReactFiberInstrumentation$1.debugTool.onCommitWork(finishedWork);
	    }

	    // If we caught any errors during this commit, schedule their boundaries
	    // to update.
	    if (commitPhaseBoundaries) {
	      commitPhaseBoundaries.forEach(scheduleErrorRecovery);
	      commitPhaseBoundaries = null;
	    }

	    // This tree is done. Reset the unit of work pointer to the next highest
	    // priority root. If there's no more work left, the pointer is set to null.
	    resetNextUnitOfWork();
	  }

	  function resetWorkPriority(workInProgress, renderPriority) {
	    if (workInProgress.pendingWorkPriority !== NoWork$2 && workInProgress.pendingWorkPriority > renderPriority) {
	      // This was a down-prioritization. Don't bubble priority from children.
	      return;
	    }

	    // Check for pending update priority.
	    var newPriority = getUpdatePriority$1(workInProgress);

	    // TODO: Coroutines need to visit stateNode

	    var child = workInProgress.child;
	    while (child !== null) {
	      // Ensure that remaining work priority bubbles up.
	      newPriority = largerPriority$1(newPriority, child.pendingWorkPriority);
	      child = child.sibling;
	    }
	    workInProgress.pendingWorkPriority = newPriority;
	  }

	  function completeUnitOfWork(workInProgress) {
	    while (true) {
	      // The current, flushed, state of this fiber is the alternate.
	      // Ideally nothing should rely on this, but relying on it here
	      // means that we don't need an additional field on the work in
	      // progress.
	      var current = workInProgress.alternate;
	      var next = completeWork(current, workInProgress, nextPriorityLevel);

	      var returnFiber = workInProgress['return'];
	      var siblingFiber = workInProgress.sibling;

	      resetWorkPriority(workInProgress, nextPriorityLevel);

	      if (next !== null) {
	        {
	          stopWorkTimer(workInProgress);
	        }
	        if (true && ReactFiberInstrumentation$1.debugTool) {
	          ReactFiberInstrumentation$1.debugTool.onCompleteWork(workInProgress);
	        }
	        // If completing this work spawned new work, do that next. We'll come
	        // back here again.
	        return next;
	      }

	      if (returnFiber !== null) {
	        // Append all the effects of the subtree and this fiber onto the effect
	        // list of the parent. The completion order of the children affects the
	        // side-effect order.
	        if (returnFiber.firstEffect === null) {
	          returnFiber.firstEffect = workInProgress.firstEffect;
	        }
	        if (workInProgress.lastEffect !== null) {
	          if (returnFiber.lastEffect !== null) {
	            returnFiber.lastEffect.nextEffect = workInProgress.firstEffect;
	          }
	          returnFiber.lastEffect = workInProgress.lastEffect;
	        }

	        // If this fiber had side-effects, we append it AFTER the children's
	        // side-effects. We can perform certain side-effects earlier if
	        // needed, by doing multiple passes over the effect list. We don't want
	        // to schedule our own side-effect on our own list because if end up
	        // reusing children we'll schedule this effect onto itself since we're
	        // at the end.
	        var effectTag = workInProgress.effectTag;
	        // Skip both NoWork and PerformedWork tags when creating the effect list.
	        // PerformedWork effect is read by React DevTools but shouldn't be committed.
	        if (effectTag > PerformedWork) {
	          if (returnFiber.lastEffect !== null) {
	            returnFiber.lastEffect.nextEffect = workInProgress;
	          } else {
	            returnFiber.firstEffect = workInProgress;
	          }
	          returnFiber.lastEffect = workInProgress;
	        }
	      }

	      {
	        stopWorkTimer(workInProgress);
	      }
	      if (true && ReactFiberInstrumentation$1.debugTool) {
	        ReactFiberInstrumentation$1.debugTool.onCompleteWork(workInProgress);
	      }

	      if (siblingFiber !== null) {
	        // If there is more work to do in this returnFiber, do that next.
	        return siblingFiber;
	      } else if (returnFiber !== null) {
	        // If there's no more work in this returnFiber. Complete the returnFiber.
	        workInProgress = returnFiber;
	        continue;
	      } else {
	        // We've reached the root. Mark the root as pending commit. Depending
	        // on how much time we have left, we'll either commit it now or in
	        // the next frame.
	        pendingCommit = workInProgress;
	        return null;
	      }
	    }

	    // Without this explicit null return Flow complains of invalid return type
	    // TODO Remove the above while(true) loop
	    // eslint-disable-next-line no-unreachable
	    return null;
	  }

	  function performUnitOfWork(workInProgress) {
	    // The current, flushed, state of this fiber is the alternate.
	    // Ideally nothing should rely on this, but relying on it here
	    // means that we don't need an additional field on the work in
	    // progress.
	    var current = workInProgress.alternate;

	    // See if beginning this work spawns more work.
	    {
	      startWorkTimer(workInProgress);
	    }
	    var next = beginWork(current, workInProgress, nextPriorityLevel);
	    if (true && ReactFiberInstrumentation$1.debugTool) {
	      ReactFiberInstrumentation$1.debugTool.onBeginWork(workInProgress);
	    }

	    if (next === null) {
	      // If this doesn't spawn new work, complete the current work.
	      next = completeUnitOfWork(workInProgress);
	    }

	    ReactCurrentOwner$1.current = null;
	    {
	      ReactDebugCurrentFiber$3.resetCurrentFiber();
	    }

	    return next;
	  }

	  function performFailedUnitOfWork(workInProgress) {
	    // The current, flushed, state of this fiber is the alternate.
	    // Ideally nothing should rely on this, but relying on it here
	    // means that we don't need an additional field on the work in
	    // progress.
	    var current = workInProgress.alternate;

	    // See if beginning this work spawns more work.
	    {
	      startWorkTimer(workInProgress);
	    }
	    var next = beginFailedWork(current, workInProgress, nextPriorityLevel);
	    if (true && ReactFiberInstrumentation$1.debugTool) {
	      ReactFiberInstrumentation$1.debugTool.onBeginWork(workInProgress);
	    }

	    if (next === null) {
	      // If this doesn't spawn new work, complete the current work.
	      next = completeUnitOfWork(workInProgress);
	    }

	    ReactCurrentOwner$1.current = null;
	    {
	      ReactDebugCurrentFiber$3.resetCurrentFiber();
	    }

	    return next;
	  }

	  function performDeferredWork(deadline) {
	    performWork(OffscreenPriority, deadline);
	  }

	  function handleCommitPhaseErrors() {
	    // This is a special work loop for handling commit phase errors. It's
	    // similar to the syncrhonous work loop, but does an additional check on
	    // each fiber to see if it's an error boundary with an unhandled error. If
	    // so, it uses a forked version of performUnitOfWork that unmounts the
	    // failed subtree.
	    //
	    // The loop stops once the children have unmounted and error lifecycles are
	    // called. Then we return to the regular flow.

	    if (capturedErrors !== null && capturedErrors.size > 0 && nextPriorityLevel === TaskPriority$1) {
	      while (nextUnitOfWork !== null) {
	        if (hasCapturedError(nextUnitOfWork)) {
	          // Use a forked version of performUnitOfWork
	          nextUnitOfWork = performFailedUnitOfWork(nextUnitOfWork);
	        } else {
	          nextUnitOfWork = performUnitOfWork(nextUnitOfWork);
	        }
	        if (nextUnitOfWork === null) {
	          !(pendingCommit !== null) ? invariant(false, 'Should have a pending commit. This error is likely caused by a bug in React. Please file an issue.') : void 0;
	          // We just completed a root. Commit it now.
	          priorityContext = TaskPriority$1;
	          commitAllWork(pendingCommit);
	          priorityContext = nextPriorityLevel;

	          if (capturedErrors === null || capturedErrors.size === 0 || nextPriorityLevel !== TaskPriority$1) {
	            // There are no more unhandled errors. We can exit this special
	            // work loop. If there's still additional work, we'll perform it
	            // using one of the normal work loops.
	            break;
	          }
	          // The commit phase produced additional errors. Continue working.
	        }
	      }
	    }
	  }

	  function workLoop(minPriorityLevel, deadline) {
	    if (pendingCommit !== null) {
	      priorityContext = TaskPriority$1;
	      commitAllWork(pendingCommit);
	      handleCommitPhaseErrors();
	    } else if (nextUnitOfWork === null) {
	      resetNextUnitOfWork();
	    }

	    if (nextPriorityLevel === NoWork$2 || nextPriorityLevel > minPriorityLevel) {
	      return;
	    }

	    // During the render phase, updates should have the same priority at which
	    // we're rendering.
	    priorityContext = nextPriorityLevel;

	    loop: do {
	      if (nextPriorityLevel <= TaskPriority$1) {
	        // Flush all synchronous and task work.
	        while (nextUnitOfWork !== null) {
	          nextUnitOfWork = performUnitOfWork(nextUnitOfWork);
	          if (nextUnitOfWork === null) {
	            !(pendingCommit !== null) ? invariant(false, 'Should have a pending commit. This error is likely caused by a bug in React. Please file an issue.') : void 0;
	            // We just completed a root. Commit it now.
	            priorityContext = TaskPriority$1;
	            commitAllWork(pendingCommit);
	            priorityContext = nextPriorityLevel;
	            // Clear any errors that were scheduled during the commit phase.
	            handleCommitPhaseErrors();
	            // The priority level may have changed. Check again.
	            if (nextPriorityLevel === NoWork$2 || nextPriorityLevel > minPriorityLevel || nextPriorityLevel > TaskPriority$1) {
	              // The priority level does not match.
	              break;
	            }
	          }
	        }
	      } else if (deadline !== null) {
	        // Flush asynchronous work until the deadline expires.
	        while (nextUnitOfWork !== null && !deadlineHasExpired) {
	          if (deadline.timeRemaining() > timeHeuristicForUnitOfWork) {
	            nextUnitOfWork = performUnitOfWork(nextUnitOfWork);
	            // In a deferred work batch, iff nextUnitOfWork returns null, we just
	            // completed a root and a pendingCommit exists. Logically, we could
	            // omit either of the checks in the following condition, but we need
	            // both to satisfy Flow.
	            if (nextUnitOfWork === null) {
	              !(pendingCommit !== null) ? invariant(false, 'Should have a pending commit. This error is likely caused by a bug in React. Please file an issue.') : void 0;
	              // We just completed a root. If we have time, commit it now.
	              // Otherwise, we'll commit it in the next frame.
	              if (deadline.timeRemaining() > timeHeuristicForUnitOfWork) {
	                priorityContext = TaskPriority$1;
	                commitAllWork(pendingCommit);
	                priorityContext = nextPriorityLevel;
	                // Clear any errors that were scheduled during the commit phase.
	                handleCommitPhaseErrors();
	                // The priority level may have changed. Check again.
	                if (nextPriorityLevel === NoWork$2 || nextPriorityLevel > minPriorityLevel || nextPriorityLevel < HighPriority) {
	                  // The priority level does not match.
	                  break;
	                }
	              } else {
	                deadlineHasExpired = true;
	              }
	            }
	          } else {
	            deadlineHasExpired = true;
	          }
	        }
	      }

	      // There might be work left. Depending on the priority, we should
	      // either perform it now or schedule a callback to perform it later.
	      switch (nextPriorityLevel) {
	        case SynchronousPriority$1:
	        case TaskPriority$1:
	          // We have remaining synchronous or task work. Keep performing it,
	          // regardless of whether we're inside a callback.
	          if (nextPriorityLevel <= minPriorityLevel) {
	            continue loop;
	          }
	          break loop;
	        case HighPriority:
	        case LowPriority:
	        case OffscreenPriority:
	          // We have remaining async work.
	          if (deadline === null) {
	            // We're not inside a callback. Exit and perform the work during
	            // the next callback.
	            break loop;
	          }
	          // We are inside a callback.
	          if (!deadlineHasExpired && nextPriorityLevel <= minPriorityLevel) {
	            // We still have time. Keep working.
	            continue loop;
	          }
	          // We've run out of time. Exit.
	          break loop;
	        case NoWork$2:
	          // No work left. We can exit.
	          break loop;
	        default:
	          invariant(false, 'Switch statement should be exhuastive. This error is likely caused by a bug in React. Please file an issue.');
	      }
	    } while (true);
	  }

	  function performWorkCatchBlock(failedWork, boundary, minPriorityLevel, deadline) {
	    // We're going to restart the error boundary that captured the error.
	    // Conceptually, we're unwinding the stack. We need to unwind the
	    // context stack, too.
	    unwindContexts(failedWork, boundary);

	    // Restart the error boundary using a forked version of
	    // performUnitOfWork that deletes the boundary's children. The entire
	    // failed subree will be unmounted. During the commit phase, a special
	    // lifecycle method is called on the error boundary, which triggers
	    // a re-render.
	    nextUnitOfWork = performFailedUnitOfWork(boundary);

	    // Continue working.
	    workLoop(minPriorityLevel, deadline);
	  }

	  function performWork(minPriorityLevel, deadline) {
	    {
	      startWorkLoopTimer();
	    }

	    !!isPerformingWork ? invariant(false, 'performWork was called recursively. This error is likely caused by a bug in React. Please file an issue.') : void 0;
	    isPerformingWork = true;

	    // The priority context changes during the render phase. We'll need to
	    // reset it at the end.
	    var previousPriorityContext = priorityContext;

	    var didError = false;
	    var error = null;
	    {
	      invokeGuardedCallback$1(null, workLoop, null, minPriorityLevel, deadline);
	      if (hasCaughtError()) {
	        didError = true;
	        error = clearCaughtError();
	      }
	    }

	    // An error was thrown during the render phase.
	    while (didError) {
	      if (didFatal) {
	        // This was a fatal error. Don't attempt to recover from it.
	        firstUncaughtError = error;
	        break;
	      }

	      var failedWork = nextUnitOfWork;
	      if (failedWork === null) {
	        // An error was thrown but there's no current unit of work. This can
	        // happen during the commit phase if there's a bug in the renderer.
	        didFatal = true;
	        continue;
	      }

	      // "Capture" the error by finding the nearest boundary. If there is no
	      // error boundary, we use the root.
	      var boundary = captureError(failedWork, error);
	      !(boundary !== null) ? invariant(false, 'Should have found an error boundary. This error is likely caused by a bug in React. Please file an issue.') : void 0;

	      if (didFatal) {
	        // The error we just captured was a fatal error. This happens
	        // when the error propagates to the root more than once.
	        continue;
	      }

	      didError = false;
	      error = null;
	      {
	        invokeGuardedCallback$1(null, performWorkCatchBlock, null, failedWork, boundary, minPriorityLevel, deadline);
	        if (hasCaughtError()) {
	          didError = true;
	          error = clearCaughtError();
	          continue;
	        }
	      }
	      // We're finished working. Exit the error loop.
	      break;
	    }

	    // Reset the priority context to its previous value.
	    priorityContext = previousPriorityContext;

	    // If we're inside a callback, set this to false, since we just flushed it.
	    if (deadline !== null) {
	      isCallbackScheduled = false;
	    }
	    // If there's remaining async work, make sure we schedule another callback.
	    if (nextPriorityLevel > TaskPriority$1 && !isCallbackScheduled) {
	      scheduleDeferredCallback(performDeferredWork);
	      isCallbackScheduled = true;
	    }

	    var errorToThrow = firstUncaughtError;

	    // We're done performing work. Time to clean up.
	    isPerformingWork = false;
	    deadlineHasExpired = false;
	    didFatal = false;
	    firstUncaughtError = null;
	    capturedErrors = null;
	    failedBoundaries = null;
	    nextRenderedTree = null;
	    nestedUpdateCount = 0;

	    {
	      stopWorkLoopTimer();
	    }

	    // It's safe to throw any unhandled errors.
	    if (errorToThrow !== null) {
	      throw errorToThrow;
	    }
	  }

	  // Returns the boundary that captured the error, or null if the error is ignored
	  function captureError(failedWork, error) {
	    // It is no longer valid because we exited the user code.
	    ReactCurrentOwner$1.current = null;
	    {
	      ReactDebugCurrentFiber$3.resetCurrentFiber();
	    }

	    // Search for the nearest error boundary.
	    var boundary = null;

	    // Passed to logCapturedError()
	    var errorBoundaryFound = false;
	    var willRetry = false;
	    var errorBoundaryName = null;

	    // Host containers are a special case. If the failed work itself is a host
	    // container, then it acts as its own boundary. In all other cases, we
	    // ignore the work itself and only search through the parents.
	    if (failedWork.tag === HostRoot$6) {
	      boundary = failedWork;

	      if (isFailedBoundary(failedWork)) {
	        // If this root already failed, there must have been an error when
	        // attempting to unmount it. This is a worst-case scenario and
	        // should only be possible if there's a bug in the renderer.
	        didFatal = true;
	      }
	    } else {
	      var node = failedWork['return'];
	      while (node !== null && boundary === null) {
	        if (node.tag === ClassComponent$5) {
	          var instance = node.stateNode;
	          if (typeof instance.componentDidCatch === 'function') {
	            errorBoundaryFound = true;
	            errorBoundaryName = getComponentName_1(node);

	            // Found an error boundary!
	            boundary = node;
	            willRetry = true;
	          }
	        } else if (node.tag === HostRoot$6) {
	          // Treat the root like a no-op error boundary
	          boundary = node;
	        }

	        if (isFailedBoundary(node)) {
	          // This boundary is already in a failed state.

	          // If we're currently unmounting, that means this error was
	          // thrown while unmounting a failed subtree. We should ignore
	          // the error.
	          if (isUnmounting) {
	            return null;
	          }

	          // If we're in the commit phase, we should check to see if
	          // this boundary already captured an error during this commit.
	          // This case exists because multiple errors can be thrown during
	          // a single commit without interruption.
	          if (commitPhaseBoundaries !== null && (commitPhaseBoundaries.has(node) || node.alternate !== null && commitPhaseBoundaries.has(node.alternate))) {
	            // If so, we should ignore this error.
	            return null;
	          }

	          // The error should propagate to the next boundary -— we keep looking.
	          boundary = null;
	          willRetry = false;
	        }

	        node = node['return'];
	      }
	    }

	    if (boundary !== null) {
	      // Add to the collection of failed boundaries. This lets us know that
	      // subsequent errors in this subtree should propagate to the next boundary.
	      if (failedBoundaries === null) {
	        failedBoundaries = new Set();
	      }
	      failedBoundaries.add(boundary);

	      // This method is unsafe outside of the begin and complete phases.
	      // We might be in the commit phase when an error is captured.
	      // The risk is that the return path from this Fiber may not be accurate.
	      // That risk is acceptable given the benefit of providing users more context.
	      var _componentStack = getStackAddendumByWorkInProgressFiber$2(failedWork);
	      var _componentName = getComponentName_1(failedWork);

	      // Add to the collection of captured errors. This is stored as a global
	      // map of errors and their component stack location keyed by the boundaries
	      // that capture them. We mostly use this Map as a Set; it's a Map only to
	      // avoid adding a field to Fiber to store the error.
	      if (capturedErrors === null) {
	        capturedErrors = new Map();
	      }

	      var capturedError = {
	        componentName: _componentName,
	        componentStack: _componentStack,
	        error: error,
	        errorBoundary: errorBoundaryFound ? boundary.stateNode : null,
	        errorBoundaryFound: errorBoundaryFound,
	        errorBoundaryName: errorBoundaryName,
	        willRetry: willRetry
	      };

	      capturedErrors.set(boundary, capturedError);

	      try {
	        logCapturedError(capturedError);
	      } catch (e) {
	        // Prevent cycle if logCapturedError() throws.
	        // A cycle may still occur if logCapturedError renders a component that throws.
	        console.error(e);
	      }

	      // If we're in the commit phase, defer scheduling an update on the
	      // boundary until after the commit is complete
	      if (isCommitting) {
	        if (commitPhaseBoundaries === null) {
	          commitPhaseBoundaries = new Set();
	        }
	        commitPhaseBoundaries.add(boundary);
	      } else {
	        // Otherwise, schedule an update now.
	        // TODO: Is this actually necessary during the render phase? Is it
	        // possible to unwind and continue rendering at the same priority,
	        // without corrupting internal state?
	        scheduleErrorRecovery(boundary);
	      }
	      return boundary;
	    } else if (firstUncaughtError === null) {
	      // If no boundary is found, we'll need to throw the error
	      firstUncaughtError = error;
	    }
	    return null;
	  }

	  function hasCapturedError(fiber) {
	    // TODO: capturedErrors should store the boundary instance, to avoid needing
	    // to check the alternate.
	    return capturedErrors !== null && (capturedErrors.has(fiber) || fiber.alternate !== null && capturedErrors.has(fiber.alternate));
	  }

	  function isFailedBoundary(fiber) {
	    // TODO: failedBoundaries should store the boundary instance, to avoid
	    // needing to check the alternate.
	    return failedBoundaries !== null && (failedBoundaries.has(fiber) || fiber.alternate !== null && failedBoundaries.has(fiber.alternate));
	  }

	  function commitErrorHandling(effectfulFiber) {
	    var capturedError = void 0;
	    if (capturedErrors !== null) {
	      capturedError = capturedErrors.get(effectfulFiber);
	      capturedErrors['delete'](effectfulFiber);
	      if (capturedError == null) {
	        if (effectfulFiber.alternate !== null) {
	          effectfulFiber = effectfulFiber.alternate;
	          capturedError = capturedErrors.get(effectfulFiber);
	          capturedErrors['delete'](effectfulFiber);
	        }
	      }
	    }

	    !(capturedError != null) ? invariant(false, 'No error for given unit of work. This error is likely caused by a bug in React. Please file an issue.') : void 0;

	    switch (effectfulFiber.tag) {
	      case ClassComponent$5:
	        var instance = effectfulFiber.stateNode;

	        var info = {
	          componentStack: capturedError.componentStack
	        };

	        // Allow the boundary to handle the error, usually by scheduling
	        // an update to itself
	        instance.componentDidCatch(capturedError.error, info);
	        return;
	      case HostRoot$6:
	        if (firstUncaughtError === null) {
	          // If this is the host container, we treat it as a no-op error
	          // boundary. We'll throw the first uncaught error once it's safe to
	          // do so, at the end of the batch.
	          firstUncaughtError = capturedError.error;
	        }
	        return;
	      default:
	        invariant(false, 'Invalid type of work. This error is likely caused by a bug in React. Please file an issue.');
	    }
	  }

	  function unwindContexts(from, to) {
	    var node = from;
	    while (node !== null) {
	      switch (node.tag) {
	        case ClassComponent$5:
	          popContextProvider$1(node);
	          break;
	        case HostComponent$6:
	          popHostContext(node);
	          break;
	        case HostRoot$6:
	          popHostContainer(node);
	          break;
	        case HostPortal$3:
	          popHostContainer(node);
	          break;
	      }
	      if (node === to || node.alternate === to) {
	        {
	          stopFailedWorkTimer(node);
	        }
	        break;
	      } else {
	        stopWorkTimer(node);
	      }
	      node = node['return'];
	    }
	  }

	  function scheduleRoot(root, priorityLevel) {
	    if (priorityLevel === NoWork$2) {
	      return;
	    }

	    if (!root.isScheduled) {
	      root.isScheduled = true;
	      if (lastScheduledRoot) {
	        // Schedule ourselves to the end.
	        lastScheduledRoot.nextScheduledRoot = root;
	        lastScheduledRoot = root;
	      } else {
	        // We're the only work scheduled.
	        nextScheduledRoot = root;
	        lastScheduledRoot = root;
	      }
	    }
	  }

	  function scheduleUpdate(fiber, priorityLevel) {
	    return scheduleUpdateImpl(fiber, priorityLevel, false);
	  }

	  function scheduleUpdateImpl(fiber, priorityLevel, isErrorRecovery) {
	    {
	      recordScheduleUpdate();
	    }

	    if (nestedUpdateCount > NESTED_UPDATE_LIMIT) {
	      didFatal = true;
	      invariant(false, 'Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.');
	    }

	    if (!isPerformingWork && priorityLevel <= nextPriorityLevel) {
	      // We must reset the current unit of work pointer so that we restart the
	      // search from the root during the next tick, in case there is now higher
	      // priority work somewhere earlier than before.
	      nextUnitOfWork = null;
	    }

	    {
	      if (!isErrorRecovery && fiber.tag === ClassComponent$5) {
	        var instance = fiber.stateNode;
	        warnAboutInvalidUpdates(instance);
	      }
	    }

	    var node = fiber;
	    var shouldContinue = true;
	    while (node !== null && shouldContinue) {
	      // Walk the parent path to the root and update each node's priority. Once
	      // we reach a node whose priority matches (and whose alternate's priority
	      // matches) we can exit safely knowing that the rest of the path is correct.
	      shouldContinue = false;
	      if (node.pendingWorkPriority === NoWork$2 || node.pendingWorkPriority > priorityLevel) {
	        // Priority did not match. Update and keep going.
	        shouldContinue = true;
	        node.pendingWorkPriority = priorityLevel;
	      }
	      if (node.alternate !== null) {
	        if (node.alternate.pendingWorkPriority === NoWork$2 || node.alternate.pendingWorkPriority > priorityLevel) {
	          // Priority did not match. Update and keep going.
	          shouldContinue = true;
	          node.alternate.pendingWorkPriority = priorityLevel;
	        }
	      }
	      if (node['return'] === null) {
	        if (node.tag === HostRoot$6) {
	          var root = node.stateNode;
	          scheduleRoot(root, priorityLevel);
	          if (!isPerformingWork) {
	            switch (priorityLevel) {
	              case SynchronousPriority$1:
	                // Perform this update now.
	                if (isUnbatchingUpdates) {
	                  // We're inside unbatchedUpdates, which is inside either
	                  // batchedUpdates or a lifecycle. We should only flush
	                  // synchronous work, not task work.
	                  performWork(SynchronousPriority$1, null);
	                } else {
	                  // Flush both synchronous and task work.
	                  performWork(TaskPriority$1, null);
	                }
	                break;
	              case TaskPriority$1:
	                !isBatchingUpdates ? invariant(false, 'Task updates can only be scheduled as a nested update or inside batchedUpdates.') : void 0;
	                break;
	              default:
	                // Schedule a callback to perform the work later.
	                if (!isCallbackScheduled) {
	                  scheduleDeferredCallback(performDeferredWork);
	                  isCallbackScheduled = true;
	                }
	            }
	          }
	        } else {
	          {
	            if (!isErrorRecovery && fiber.tag === ClassComponent$5) {
	              warnAboutUpdateOnUnmounted(fiber.stateNode);
	            }
	          }
	          return;
	        }
	      }
	      node = node['return'];
	    }
	  }

	  function getPriorityContext(fiber, forceAsync) {
	    var priorityLevel = priorityContext;
	    if (priorityLevel === NoWork$2) {
	      if (!useSyncScheduling || fiber.internalContextTag & AsyncUpdates || forceAsync) {
	        priorityLevel = LowPriority;
	      } else {
	        priorityLevel = SynchronousPriority$1;
	      }
	    }

	    // If we're in a batch, or if we're already performing work, downgrade sync
	    // priority to task priority
	    if (priorityLevel === SynchronousPriority$1 && (isPerformingWork || isBatchingUpdates)) {
	      return TaskPriority$1;
	    }
	    return priorityLevel;
	  }

	  function scheduleErrorRecovery(fiber) {
	    scheduleUpdateImpl(fiber, TaskPriority$1, true);
	  }

	  function batchedUpdates(fn, a) {
	    var previousIsBatchingUpdates = isBatchingUpdates;
	    isBatchingUpdates = true;
	    try {
	      return fn(a);
	    } finally {
	      isBatchingUpdates = previousIsBatchingUpdates;
	      // If we're not already inside a batch, we need to flush any task work
	      // that was created by the user-provided function.
	      if (!isPerformingWork && !isBatchingUpdates) {
	        performWork(TaskPriority$1, null);
	      }
	    }
	  }

	  function unbatchedUpdates(fn) {
	    var previousIsUnbatchingUpdates = isUnbatchingUpdates;
	    var previousIsBatchingUpdates = isBatchingUpdates;
	    // This is only true if we're nested inside batchedUpdates.
	    isUnbatchingUpdates = isBatchingUpdates;
	    isBatchingUpdates = false;
	    try {
	      return fn();
	    } finally {
	      isBatchingUpdates = previousIsBatchingUpdates;
	      isUnbatchingUpdates = previousIsUnbatchingUpdates;
	    }
	  }

	  function flushSync(batch) {
	    var previousIsBatchingUpdates = isBatchingUpdates;
	    var previousPriorityContext = priorityContext;
	    isBatchingUpdates = true;
	    priorityContext = SynchronousPriority$1;
	    try {
	      return batch();
	    } finally {
	      isBatchingUpdates = previousIsBatchingUpdates;
	      priorityContext = previousPriorityContext;

	      !!isPerformingWork ? invariant(false, 'flushSync was called from inside a lifecycle method. It cannot be called when React is already rendering.') : void 0;
	      performWork(TaskPriority$1, null);
	    }
	  }

	  function deferredUpdates(fn) {
	    var previousPriorityContext = priorityContext;
	    priorityContext = LowPriority;
	    try {
	      return fn();
	    } finally {
	      priorityContext = previousPriorityContext;
	    }
	  }

	  return {
	    scheduleUpdate: scheduleUpdate,
	    getPriorityContext: getPriorityContext,
	    batchedUpdates: batchedUpdates,
	    unbatchedUpdates: unbatchedUpdates,
	    flushSync: flushSync,
	    deferredUpdates: deferredUpdates
	  };
	};

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * @providesModule getContextForSubtree
	 * 
	 */






	var getContextFiber = function (arg) {
	  invariant(false, 'Missing injection for fiber getContextForSubtree');
	};

	function getContextForSubtree(parentComponent) {
	  if (!parentComponent) {
	    return emptyObject;
	  }

	  var instance = ReactInstanceMap_1.get(parentComponent);
	  if (typeof instance.tag === 'number') {
	    return getContextFiber(instance);
	  } else {
	    return instance._processChildContext(instance._context);
	  }
	}

	getContextForSubtree._injectFiber = function (fn) {
	  getContextFiber = fn;
	};

	var getContextForSubtree_1 = getContextForSubtree;

	var addTopLevelUpdate = ReactFiberUpdateQueue.addTopLevelUpdate;

	var findCurrentUnmaskedContext = ReactFiberContext.findCurrentUnmaskedContext;
	var isContextProvider = ReactFiberContext.isContextProvider;
	var processChildContext = ReactFiberContext.processChildContext;

	var createFiberRoot = ReactFiberRoot.createFiberRoot;



	var HostComponent$3 = ReactTypeOfWork.HostComponent;

	{
	  var warning$18 = require$$0;
	  var ReactFiberInstrumentation = ReactFiberInstrumentation_1;
	  var ReactDebugCurrentFiber$1 = ReactDebugCurrentFiber_1;
	  var getComponentName$4 = getComponentName_1;
	}

	var findCurrentHostFiber$1 = ReactFiberTreeReflection.findCurrentHostFiber;
	var findCurrentHostFiberWithNoPortals$1 = ReactFiberTreeReflection.findCurrentHostFiberWithNoPortals;



	getContextForSubtree_1._injectFiber(function (fiber) {
	  var parentContext = findCurrentUnmaskedContext(fiber);
	  return isContextProvider(fiber) ? processChildContext(fiber, parentContext, false) : parentContext;
	});

	var ReactFiberReconciler = function (config) {
	  var getPublicInstance = config.getPublicInstance;

	  var _ReactFiberScheduler = ReactFiberScheduler(config),
	      scheduleUpdate = _ReactFiberScheduler.scheduleUpdate,
	      getPriorityContext = _ReactFiberScheduler.getPriorityContext,
	      batchedUpdates = _ReactFiberScheduler.batchedUpdates,
	      unbatchedUpdates = _ReactFiberScheduler.unbatchedUpdates,
	      flushSync = _ReactFiberScheduler.flushSync,
	      deferredUpdates = _ReactFiberScheduler.deferredUpdates;

	  function scheduleTopLevelUpdate(current, element, callback) {
	    {
	      if (ReactDebugCurrentFiber$1.phase === 'render' && ReactDebugCurrentFiber$1.current !== null) {
	        warning$18(false, 'Render methods should be a pure function of props and state; ' + 'triggering nested component updates from render is not allowed. ' + 'If necessary, trigger nested updates in componentDidUpdate.\n\n' + 'Check the render method of %s.', getComponentName$4(ReactDebugCurrentFiber$1.current) || 'Unknown');
	      }
	    }

	    // Check if the top-level element is an async wrapper component. If so, treat
	    // updates to the root as async. This is a bit weird but lets us avoid a separate
	    // `renderAsync` API.
	    var forceAsync = ReactFeatureFlags_1.enableAsyncSubtreeAPI && element != null && element.type != null && element.type.prototype != null && element.type.prototype.unstable_isAsyncReactComponent === true;
	    var priorityLevel = getPriorityContext(current, forceAsync);
	    var nextState = { element: element };
	    callback = callback === undefined ? null : callback;
	    {
	      warning$18(callback === null || typeof callback === 'function', 'render(...): Expected the last optional `callback` argument to be a ' + 'function. Instead received: %s.', callback);
	    }
	    addTopLevelUpdate(current, nextState, callback, priorityLevel);
	    scheduleUpdate(current, priorityLevel);
	  }

	  return {
	    createContainer: function (containerInfo) {
	      return createFiberRoot(containerInfo);
	    },
	    updateContainer: function (element, container, parentComponent, callback) {
	      // TODO: If this is a nested container, this won't be the root.
	      var current = container.current;

	      {
	        if (ReactFiberInstrumentation.debugTool) {
	          if (current.alternate === null) {
	            ReactFiberInstrumentation.debugTool.onMountContainer(container);
	          } else if (element === null) {
	            ReactFiberInstrumentation.debugTool.onUnmountContainer(container);
	          } else {
	            ReactFiberInstrumentation.debugTool.onUpdateContainer(container);
	          }
	        }
	      }

	      var context = getContextForSubtree_1(parentComponent);
	      if (container.context === null) {
	        container.context = context;
	      } else {
	        container.pendingContext = context;
	      }

	      scheduleTopLevelUpdate(current, element, callback);
	    },


	    batchedUpdates: batchedUpdates,

	    unbatchedUpdates: unbatchedUpdates,

	    deferredUpdates: deferredUpdates,

	    flushSync: flushSync,

	    getPublicRootInstance: function (container) {
	      var containerFiber = container.current;
	      if (!containerFiber.child) {
	        return null;
	      }
	      switch (containerFiber.child.tag) {
	        case HostComponent$3:
	          return getPublicInstance(containerFiber.child.stateNode);
	        default:
	          return containerFiber.child.stateNode;
	      }
	    },
	    findHostInstance: function (fiber) {
	      var hostFiber = findCurrentHostFiber$1(fiber);
	      if (hostFiber === null) {
	        return null;
	      }
	      return hostFiber.stateNode;
	    },
	    findHostInstanceWithNoPortals: function (fiber) {
	      var hostFiber = findCurrentHostFiberWithNoPortals$1(fiber);
	      if (hostFiber === null) {
	        return null;
	      }
	      return hostFiber.stateNode;
	    }
	  };
	};

	var TEXT_NODE$3 = HTMLNodeType_1.TEXT_NODE;

	/**
	 * Given any node return the first leaf node without children.
	 *
	 * @param {DOMElement|DOMTextNode} node
	 * @return {DOMElement|DOMTextNode}
	 */


	function getLeafNode(node) {
	  while (node && node.firstChild) {
	    node = node.firstChild;
	  }
	  return node;
	}

	/**
	 * Get the next sibling within a container. This will walk up the
	 * DOM if a node's siblings have been exhausted.
	 *
	 * @param {DOMElement|DOMTextNode} node
	 * @return {?DOMElement|DOMTextNode}
	 */
	function getSiblingNode(node) {
	  while (node) {
	    if (node.nextSibling) {
	      return node.nextSibling;
	    }
	    node = node.parentNode;
	  }
	}

	/**
	 * Get object describing the nodes which contain characters at offset.
	 *
	 * @param {DOMElement|DOMTextNode} root
	 * @param {number} offset
	 * @return {?object}
	 */
	function getNodeForCharacterOffset(root, offset) {
	  var node = getLeafNode(root);
	  var nodeStart = 0;
	  var nodeEnd = 0;

	  while (node) {
	    if (node.nodeType === TEXT_NODE$3) {
	      nodeEnd = nodeStart + node.textContent.length;

	      if (nodeStart <= offset && nodeEnd >= offset) {
	        return {
	          node: node,
	          offset: offset - nodeStart
	        };
	      }

	      nodeStart = nodeEnd;
	    }

	    node = getLeafNode(getSiblingNode(node));
	  }
	}

	var getNodeForCharacterOffset_1 = getNodeForCharacterOffset;

	var contentKey = null;

	/**
	 * Gets the key used to access text content on a DOM node.
	 *
	 * @return {?string} Key used to access text content.
	 * @internal
	 */
	function getTextContentAccessor() {
	  if (!contentKey && ExecutionEnvironment.canUseDOM) {
	    // Prefer textContent to innerText because many browsers support both but
	    // SVG <text> elements don't support innerText even when <div> does.
	    contentKey = 'textContent' in document.documentElement ? 'textContent' : 'innerText';
	  }
	  return contentKey;
	}

	var getTextContentAccessor_1 = getTextContentAccessor;

	/**
	 * While `isCollapsed` is available on the Selection object and `collapsed`
	 * is available on the Range object, IE11 sometimes gets them wrong.
	 * If the anchor/focus nodes and offsets are the same, the range is collapsed.
	 */
	function isCollapsed(anchorNode, anchorOffset, focusNode$$1, focusOffset) {
	  return anchorNode === focusNode$$1 && anchorOffset === focusOffset;
	}

	/**
	 * @param {DOMElement} node
	 * @return {?object}
	 */
	function getModernOffsets(node) {
	  var selection = window.getSelection && window.getSelection();

	  if (!selection || selection.rangeCount === 0) {
	    return null;
	  }

	  var anchorNode = selection.anchorNode;
	  var anchorOffset = selection.anchorOffset;
	  var focusNode$$1 = selection.focusNode;
	  var focusOffset = selection.focusOffset;

	  var currentRange = selection.getRangeAt(0);

	  // In Firefox, range.startContainer and range.endContainer can be "anonymous
	  // divs", e.g. the up/down buttons on an <input type="number">. Anonymous
	  // divs do not seem to expose properties, triggering a "Permission denied
	  // error" if any of its properties are accessed. The only seemingly possible
	  // way to avoid erroring is to access a property that typically works for
	  // non-anonymous divs and catch any error that may otherwise arise. See
	  // https://bugzilla.mozilla.org/show_bug.cgi?id=208427
	  try {
	    /* eslint-disable no-unused-expressions */
	    currentRange.startContainer.nodeType;
	    currentRange.endContainer.nodeType;
	    /* eslint-enable no-unused-expressions */
	  } catch (e) {
	    return null;
	  }

	  // If the node and offset values are the same, the selection is collapsed.
	  // `Selection.isCollapsed` is available natively, but IE sometimes gets
	  // this value wrong.
	  var isSelectionCollapsed = isCollapsed(selection.anchorNode, selection.anchorOffset, selection.focusNode, selection.focusOffset);

	  var rangeLength = isSelectionCollapsed ? 0 : currentRange.toString().length;

	  var tempRange = currentRange.cloneRange();
	  tempRange.selectNodeContents(node);
	  tempRange.setEnd(currentRange.startContainer, currentRange.startOffset);

	  var isTempRangeCollapsed = isCollapsed(tempRange.startContainer, tempRange.startOffset, tempRange.endContainer, tempRange.endOffset);

	  var start = isTempRangeCollapsed ? 0 : tempRange.toString().length;
	  var end = start + rangeLength;

	  // Detect whether the selection is backward.
	  var detectionRange = document.createRange();
	  detectionRange.setStart(anchorNode, anchorOffset);
	  detectionRange.setEnd(focusNode$$1, focusOffset);
	  var isBackward = detectionRange.collapsed;

	  return {
	    start: isBackward ? end : start,
	    end: isBackward ? start : end
	  };
	}

	/**
	 * In modern non-IE browsers, we can support both forward and backward
	 * selections.
	 *
	 * Note: IE10+ supports the Selection object, but it does not support
	 * the `extend` method, which means that even in modern IE, it's not possible
	 * to programmatically create a backward selection. Thus, for all IE
	 * versions, we use the old IE API to create our selections.
	 *
	 * @param {DOMElement|DOMTextNode} node
	 * @param {object} offsets
	 */
	function setModernOffsets(node, offsets) {
	  if (!window.getSelection) {
	    return;
	  }

	  var selection = window.getSelection();
	  var length = node[getTextContentAccessor_1()].length;
	  var start = Math.min(offsets.start, length);
	  var end = offsets.end === undefined ? start : Math.min(offsets.end, length);

	  // IE 11 uses modern selection, but doesn't support the extend method.
	  // Flip backward selections, so we can set with a single range.
	  if (!selection.extend && start > end) {
	    var temp = end;
	    end = start;
	    start = temp;
	  }

	  var startMarker = getNodeForCharacterOffset_1(node, start);
	  var endMarker = getNodeForCharacterOffset_1(node, end);

	  if (startMarker && endMarker) {
	    var range = document.createRange();
	    range.setStart(startMarker.node, startMarker.offset);
	    selection.removeAllRanges();

	    if (start > end) {
	      selection.addRange(range);
	      selection.extend(endMarker.node, endMarker.offset);
	    } else {
	      range.setEnd(endMarker.node, endMarker.offset);
	      selection.addRange(range);
	    }
	  }
	}

	var ReactDOMSelection = {
	  /**
	   * @param {DOMElement} node
	   */
	  getOffsets: getModernOffsets,

	  /**
	   * @param {DOMElement|DOMTextNode} node
	   * @param {object} offsets
	   */
	  setOffsets: setModernOffsets
	};

	var ReactDOMSelection_1 = ReactDOMSelection;

	var ELEMENT_NODE$2 = HTMLNodeType_1.ELEMENT_NODE;





	function isInDocument(node) {
	  return containsNode(document.documentElement, node);
	}

	/**
	 * @ReactInputSelection: React input selection module. Based on Selection.js,
	 * but modified to be suitable for react and has a couple of bug fixes (doesn't
	 * assume buttons have range selections allowed).
	 * Input selection module for React.
	 */
	var ReactInputSelection = {
	  hasSelectionCapabilities: function (elem) {
	    var nodeName = elem && elem.nodeName && elem.nodeName.toLowerCase();
	    return nodeName && (nodeName === 'input' && elem.type === 'text' || nodeName === 'textarea' || elem.contentEditable === 'true');
	  },

	  getSelectionInformation: function () {
	    var focusedElem = getActiveElement();
	    return {
	      focusedElem: focusedElem,
	      selectionRange: ReactInputSelection.hasSelectionCapabilities(focusedElem) ? ReactInputSelection.getSelection(focusedElem) : null
	    };
	  },

	  /**
	   * @restoreSelection: If any selection information was potentially lost,
	   * restore it. This is useful when performing operations that could remove dom
	   * nodes and place them back in, resulting in focus being lost.
	   */
	  restoreSelection: function (priorSelectionInformation) {
	    var curFocusedElem = getActiveElement();
	    var priorFocusedElem = priorSelectionInformation.focusedElem;
	    var priorSelectionRange = priorSelectionInformation.selectionRange;
	    if (curFocusedElem !== priorFocusedElem && isInDocument(priorFocusedElem)) {
	      if (ReactInputSelection.hasSelectionCapabilities(priorFocusedElem)) {
	        ReactInputSelection.setSelection(priorFocusedElem, priorSelectionRange);
	      }

	      // Focusing a node can change the scroll position, which is undesirable
	      var ancestors = [];
	      var ancestor = priorFocusedElem;
	      while (ancestor = ancestor.parentNode) {
	        if (ancestor.nodeType === ELEMENT_NODE$2) {
	          ancestors.push({
	            element: ancestor,
	            left: ancestor.scrollLeft,
	            top: ancestor.scrollTop
	          });
	        }
	      }

	      focusNode(priorFocusedElem);

	      for (var i = 0; i < ancestors.length; i++) {
	        var info = ancestors[i];
	        info.element.scrollLeft = info.left;
	        info.element.scrollTop = info.top;
	      }
	    }
	  },

	  /**
	   * @getSelection: Gets the selection bounds of a focused textarea, input or
	   * contentEditable node.
	   * -@input: Look up selection bounds of this input
	   * -@return {start: selectionStart, end: selectionEnd}
	   */
	  getSelection: function (input) {
	    var selection;

	    if ('selectionStart' in input) {
	      // Modern browser with input or textarea.
	      selection = {
	        start: input.selectionStart,
	        end: input.selectionEnd
	      };
	    } else {
	      // Content editable or old IE textarea.
	      selection = ReactDOMSelection_1.getOffsets(input);
	    }

	    return selection || { start: 0, end: 0 };
	  },

	  /**
	   * @setSelection: Sets the selection bounds of a textarea or input and focuses
	   * the input.
	   * -@input     Set selection bounds of this input or textarea
	   * -@offsets   Object of same form that is returned from get*
	   */
	  setSelection: function (input, offsets) {
	    var start = offsets.start;
	    var end = offsets.end;
	    if (end === undefined) {
	      end = start;
	    }

	    if ('selectionStart' in input) {
	      input.selectionStart = start;
	      input.selectionEnd = Math.min(end, input.value.length);
	    } else {
	      ReactDOMSelection_1.setOffsets(input, offsets);
	    }
	  }
	};

	var ReactInputSelection_1 = ReactInputSelection;

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * @providesModule ReactVersion
	 */

	var ReactVersion = '16.0.0';

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * @providesModule findDOMNode
	 * 
	 */



	var ELEMENT_NODE$3 = HTMLNodeType_1.ELEMENT_NODE;

	var ReactCurrentOwner$3 = ReactGlobalSharedState_1.ReactCurrentOwner;




	{
	  var warning$27 = require$$0;
	}

	var findFiber = function (arg) {
	  invariant(false, 'Missing injection for fiber findDOMNode');
	};
	var findStack = function (arg) {
	  invariant(false, 'Missing injection for stack findDOMNode');
	};

	var findDOMNode = function (componentOrElement) {
	  {
	    var owner = ReactCurrentOwner$3.current;
	    if (owner !== null) {
	      var isFiber = typeof owner.tag === 'number';
	      var warnedAboutRefsInRender = isFiber ? owner.stateNode._warnedAboutRefsInRender : owner._warnedAboutRefsInRender;
	      warning$27(warnedAboutRefsInRender, '%s is accessing findDOMNode inside its render(). ' + 'render() should be a pure function of props and state. It should ' + 'never access something that requires stale data from the previous ' + 'render, such as refs. Move this logic to componentDidMount and ' + 'componentDidUpdate instead.', getComponentName_1(owner) || 'A component');
	      if (isFiber) {
	        owner.stateNode._warnedAboutRefsInRender = true;
	      } else {
	        owner._warnedAboutRefsInRender = true;
	      }
	    }
	  }
	  if (componentOrElement == null) {
	    return null;
	  }
	  if (componentOrElement.nodeType === ELEMENT_NODE$3) {
	    return componentOrElement;
	  }

	  var inst = ReactInstanceMap_1.get(componentOrElement);
	  if (inst) {
	    if (typeof inst.tag === 'number') {
	      return findFiber(inst);
	    } else {
	      return findStack(inst);
	    }
	  }

	  if (typeof componentOrElement.render === 'function') {
	    invariant(false, 'Unable to find node on an unmounted component.');
	  } else {
	    invariant(false, 'Element appears to be neither ReactComponent nor DOMNode. Keys: %s', Object.keys(componentOrElement));
	  }
	};

	findDOMNode._injectFiber = function (fn) {
	  findFiber = fn;
	};
	findDOMNode._injectStack = function (fn) {
	  findStack = fn;
	};

	var findDOMNode_1 = findDOMNode;

	/**
	 * Copyright (c) 2014-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * @providesModule lowPriorityWarning
	 */

	/**
	 * Forked from fbjs/warning:
	 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
	 *
	 * Only change is we use console.warn instead of console.error,
	 * and do nothing when 'console' is not supported.
	 * This really simplifies the code.
	 * ---
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */

	var lowPriorityWarning$1 = function () {};

	{
	  var printWarning = function (format) {
	    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	      args[_key - 1] = arguments[_key];
	    }

	    var argIndex = 0;
	    var message = 'Warning: ' + format.replace(/%s/g, function () {
	      return args[argIndex++];
	    });
	    if (typeof console !== 'undefined') {
	      console.warn(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) {}
	  };

	  lowPriorityWarning$1 = function (condition, format) {
	    if (format === undefined) {
	      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
	    }
	    if (!condition) {
	      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
	        args[_key2 - 2] = arguments[_key2];
	      }

	      printWarning.apply(undefined, [format].concat(args));
	    }
	  };
	}

	var lowPriorityWarning_1 = lowPriorityWarning$1;

	var validateDOMNesting$1 = emptyFunction;

	{
	  var warning$28 = require$$0;

	  var _require$13 = ReactDebugCurrentFiber_1,
	      getCurrentFiberStackAddendum$6 = _require$13.getCurrentFiberStackAddendum;

	  // This validation code was written based on the HTML5 parsing spec:
	  // https://html.spec.whatwg.org/multipage/syntax.html#has-an-element-in-scope
	  //
	  // Note: this does not catch all invalid nesting, nor does it try to (as it's
	  // not clear what practical benefit doing so provides); instead, we warn only
	  // for cases where the parser will give a parse tree differing from what React
	  // intended. For example, <b><div></div></b> is invalid but we don't warn
	  // because it still parses correctly; we do warn for other cases like nested
	  // <p> tags where the beginning of the second element implicitly closes the
	  // first, causing a confusing mess.

	  // https://html.spec.whatwg.org/multipage/syntax.html#special


	  var specialTags = ['address', 'applet', 'area', 'article', 'aside', 'base', 'basefont', 'bgsound', 'blockquote', 'body', 'br', 'button', 'caption', 'center', 'col', 'colgroup', 'dd', 'details', 'dir', 'div', 'dl', 'dt', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'frame', 'frameset', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'iframe', 'img', 'input', 'isindex', 'li', 'link', 'listing', 'main', 'marquee', 'menu', 'menuitem', 'meta', 'nav', 'noembed', 'noframes', 'noscript', 'object', 'ol', 'p', 'param', 'plaintext', 'pre', 'script', 'section', 'select', 'source', 'style', 'summary', 'table', 'tbody', 'td', 'template', 'textarea', 'tfoot', 'th', 'thead', 'title', 'tr', 'track', 'ul', 'wbr', 'xmp'];

	  // https://html.spec.whatwg.org/multipage/syntax.html#has-an-element-in-scope
	  var inScopeTags = ['applet', 'caption', 'html', 'table', 'td', 'th', 'marquee', 'object', 'template',

	  // https://html.spec.whatwg.org/multipage/syntax.html#html-integration-point
	  // TODO: Distinguish by namespace here -- for <title>, including it here
	  // errs on the side of fewer warnings
	  'foreignObject', 'desc', 'title'];

	  // https://html.spec.whatwg.org/multipage/syntax.html#has-an-element-in-button-scope
	  var buttonScopeTags = inScopeTags.concat(['button']);

	  // https://html.spec.whatwg.org/multipage/syntax.html#generate-implied-end-tags
	  var impliedEndTags = ['dd', 'dt', 'li', 'option', 'optgroup', 'p', 'rp', 'rt'];

	  var emptyAncestorInfo = {
	    current: null,

	    formTag: null,
	    aTagInScope: null,
	    buttonTagInScope: null,
	    nobrTagInScope: null,
	    pTagInButtonScope: null,

	    listItemTagAutoclosing: null,
	    dlItemTagAutoclosing: null
	  };

	  var updatedAncestorInfo$1 = function (oldInfo, tag, instance) {
	    var ancestorInfo = _assign({}, oldInfo || emptyAncestorInfo);
	    var info = { tag: tag, instance: instance };

	    if (inScopeTags.indexOf(tag) !== -1) {
	      ancestorInfo.aTagInScope = null;
	      ancestorInfo.buttonTagInScope = null;
	      ancestorInfo.nobrTagInScope = null;
	    }
	    if (buttonScopeTags.indexOf(tag) !== -1) {
	      ancestorInfo.pTagInButtonScope = null;
	    }

	    // See rules for 'li', 'dd', 'dt' start tags in
	    // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-inbody
	    if (specialTags.indexOf(tag) !== -1 && tag !== 'address' && tag !== 'div' && tag !== 'p') {
	      ancestorInfo.listItemTagAutoclosing = null;
	      ancestorInfo.dlItemTagAutoclosing = null;
	    }

	    ancestorInfo.current = info;

	    if (tag === 'form') {
	      ancestorInfo.formTag = info;
	    }
	    if (tag === 'a') {
	      ancestorInfo.aTagInScope = info;
	    }
	    if (tag === 'button') {
	      ancestorInfo.buttonTagInScope = info;
	    }
	    if (tag === 'nobr') {
	      ancestorInfo.nobrTagInScope = info;
	    }
	    if (tag === 'p') {
	      ancestorInfo.pTagInButtonScope = info;
	    }
	    if (tag === 'li') {
	      ancestorInfo.listItemTagAutoclosing = info;
	    }
	    if (tag === 'dd' || tag === 'dt') {
	      ancestorInfo.dlItemTagAutoclosing = info;
	    }

	    return ancestorInfo;
	  };

	  /**
	   * Returns whether
	   */
	  var isTagValidWithParent = function (tag, parentTag) {
	    // First, let's check if we're in an unusual parsing mode...
	    switch (parentTag) {
	      // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-inselect
	      case 'select':
	        return tag === 'option' || tag === 'optgroup' || tag === '#text';
	      case 'optgroup':
	        return tag === 'option' || tag === '#text';
	      // Strictly speaking, seeing an <option> doesn't mean we're in a <select>
	      // but
	      case 'option':
	        return tag === '#text';
	      // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intd
	      // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-incaption
	      // No special behavior since these rules fall back to "in body" mode for
	      // all except special table nodes which cause bad parsing behavior anyway.

	      // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intr
	      case 'tr':
	        return tag === 'th' || tag === 'td' || tag === 'style' || tag === 'script' || tag === 'template';
	      // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intbody
	      case 'tbody':
	      case 'thead':
	      case 'tfoot':
	        return tag === 'tr' || tag === 'style' || tag === 'script' || tag === 'template';
	      // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-incolgroup
	      case 'colgroup':
	        return tag === 'col' || tag === 'template';
	      // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intable
	      case 'table':
	        return tag === 'caption' || tag === 'colgroup' || tag === 'tbody' || tag === 'tfoot' || tag === 'thead' || tag === 'style' || tag === 'script' || tag === 'template';
	      // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-inhead
	      case 'head':
	        return tag === 'base' || tag === 'basefont' || tag === 'bgsound' || tag === 'link' || tag === 'meta' || tag === 'title' || tag === 'noscript' || tag === 'noframes' || tag === 'style' || tag === 'script' || tag === 'template';
	      // https://html.spec.whatwg.org/multipage/semantics.html#the-html-element
	      case 'html':
	        return tag === 'head' || tag === 'body';
	      case '#document':
	        return tag === 'html';
	    }

	    // Probably in the "in body" parsing mode, so we outlaw only tag combos
	    // where the parsing rules cause implicit opens or closes to be added.
	    // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-inbody
	    switch (tag) {
	      case 'h1':
	      case 'h2':
	      case 'h3':
	      case 'h4':
	      case 'h5':
	      case 'h6':
	        return parentTag !== 'h1' && parentTag !== 'h2' && parentTag !== 'h3' && parentTag !== 'h4' && parentTag !== 'h5' && parentTag !== 'h6';

	      case 'rp':
	      case 'rt':
	        return impliedEndTags.indexOf(parentTag) === -1;

	      case 'body':
	      case 'caption':
	      case 'col':
	      case 'colgroup':
	      case 'frame':
	      case 'head':
	      case 'html':
	      case 'tbody':
	      case 'td':
	      case 'tfoot':
	      case 'th':
	      case 'thead':
	      case 'tr':
	        // These tags are only valid with a few parents that have special child
	        // parsing rules -- if we're down here, then none of those matched and
	        // so we allow it only if we don't know what the parent is, as all other
	        // cases are invalid.
	        return parentTag == null;
	    }

	    return true;
	  };

	  /**
	   * Returns whether
	   */
	  var findInvalidAncestorForTag = function (tag, ancestorInfo) {
	    switch (tag) {
	      case 'address':
	      case 'article':
	      case 'aside':
	      case 'blockquote':
	      case 'center':
	      case 'details':
	      case 'dialog':
	      case 'dir':
	      case 'div':
	      case 'dl':
	      case 'fieldset':
	      case 'figcaption':
	      case 'figure':
	      case 'footer':
	      case 'header':
	      case 'hgroup':
	      case 'main':
	      case 'menu':
	      case 'nav':
	      case 'ol':
	      case 'p':
	      case 'section':
	      case 'summary':
	      case 'ul':
	      case 'pre':
	      case 'listing':
	      case 'table':
	      case 'hr':
	      case 'xmp':
	      case 'h1':
	      case 'h2':
	      case 'h3':
	      case 'h4':
	      case 'h5':
	      case 'h6':
	        return ancestorInfo.pTagInButtonScope;

	      case 'form':
	        return ancestorInfo.formTag || ancestorInfo.pTagInButtonScope;

	      case 'li':
	        return ancestorInfo.listItemTagAutoclosing;

	      case 'dd':
	      case 'dt':
	        return ancestorInfo.dlItemTagAutoclosing;

	      case 'button':
	        return ancestorInfo.buttonTagInScope;

	      case 'a':
	        // Spec says something about storing a list of markers, but it sounds
	        // equivalent to this check.
	        return ancestorInfo.aTagInScope;

	      case 'nobr':
	        return ancestorInfo.nobrTagInScope;
	    }

	    return null;
	  };

	  /**
	   * Given a ReactCompositeComponent instance, return a list of its recursive
	   * owners, starting at the root and ending with the instance itself.
	   */
	  var findOwnerStack = function (instance) {
	    if (!instance) {
	      return [];
	    }

	    var stack = [];
	    do {
	      stack.push(instance);
	    } while (instance = instance._currentElement._owner);
	    stack.reverse();
	    return stack;
	  };

	  var getOwnerInfo = function (childInstance, childTag, ancestorInstance, ancestorTag, isParent) {
	    var childOwner = childInstance && childInstance._currentElement._owner;
	    var ancestorOwner = ancestorInstance && ancestorInstance._currentElement._owner;

	    var childOwners = findOwnerStack(childOwner);
	    var ancestorOwners = findOwnerStack(ancestorOwner);

	    var minStackLen = Math.min(childOwners.length, ancestorOwners.length);
	    var i;

	    var deepestCommon = -1;
	    for (i = 0; i < minStackLen; i++) {
	      if (childOwners[i] === ancestorOwners[i]) {
	        deepestCommon = i;
	      } else {
	        break;
	      }
	    }

	    var UNKNOWN = '(unknown)';
	    var childOwnerNames = childOwners.slice(deepestCommon + 1).map(function (inst) {
	      return getComponentName_1(inst) || UNKNOWN;
	    });
	    var ancestorOwnerNames = ancestorOwners.slice(deepestCommon + 1).map(function (inst) {
	      return getComponentName_1(inst) || UNKNOWN;
	    });
	    var ownerInfo = [].concat(
	    // If the parent and child instances have a common owner ancestor, start
	    // with that -- otherwise we just start with the parent's owners.
	    deepestCommon !== -1 ? getComponentName_1(childOwners[deepestCommon]) || UNKNOWN : [], ancestorOwnerNames, ancestorTag,
	    // If we're warning about an invalid (non-parent) ancestry, add '...'
	    isParent ? [] : ['...'], childOwnerNames, childTag).join(' > ');

	    return ownerInfo;
	  };

	  var didWarn = {};

	  validateDOMNesting$1 = function (childTag, childText, childInstance, ancestorInfo) {
	    ancestorInfo = ancestorInfo || emptyAncestorInfo;
	    var parentInfo = ancestorInfo.current;
	    var parentTag = parentInfo && parentInfo.tag;

	    if (childText != null) {
	      warning$28(childTag == null, 'validateDOMNesting: when childText is passed, childTag should be null');
	      childTag = '#text';
	    }

	    var invalidParent = isTagValidWithParent(childTag, parentTag) ? null : parentInfo;
	    var invalidAncestor = invalidParent ? null : findInvalidAncestorForTag(childTag, ancestorInfo);
	    var invalidParentOrAncestor = invalidParent || invalidAncestor;
	    if (!invalidParentOrAncestor) {
	      return;
	    }

	    var ancestorInstance = invalidParentOrAncestor.instance;
	    var ancestorTag = invalidParentOrAncestor.tag;
	    var addendum;

	    if (childInstance != null) {
	      addendum = ' See ' + getOwnerInfo(childInstance, childTag, ancestorInstance, ancestorTag, !!invalidParent) + '.';
	    } else {
	      addendum = getCurrentFiberStackAddendum$6();
	    }

	    var warnKey = !!invalidParent + '|' + childTag + '|' + ancestorTag + '|' + addendum;
	    if (didWarn[warnKey]) {
	      return;
	    }
	    didWarn[warnKey] = true;

	    var tagDisplayName = childTag;
	    var whitespaceInfo = '';
	    if (childTag === '#text') {
	      if (/\S/.test(childText)) {
	        tagDisplayName = 'Text nodes';
	      } else {
	        tagDisplayName = 'Whitespace text nodes';
	        whitespaceInfo = " Make sure you don't have any extra whitespace between tags on " + 'each line of your source code.';
	      }
	    } else {
	      tagDisplayName = '<' + childTag + '>';
	    }

	    if (invalidParent) {
	      var info = '';
	      if (ancestorTag === 'table' && childTag === 'tr') {
	        info += ' Add a <tbody> to your code to match the DOM tree generated by ' + 'the browser.';
	      }
	      warning$28(false, 'validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s%s', tagDisplayName, ancestorTag, whitespaceInfo, info, addendum);
	    } else {
	      warning$28(false, 'validateDOMNesting(...): %s cannot appear as a descendant of ' + '<%s>.%s', tagDisplayName, ancestorTag, addendum);
	    }
	  };

	  validateDOMNesting$1.updatedAncestorInfo = updatedAncestorInfo$1;

	  // For testing
	  validateDOMNesting$1.isTagValidInContext = function (tag, ancestorInfo) {
	    ancestorInfo = ancestorInfo || emptyAncestorInfo;
	    var parentInfo = ancestorInfo.current;
	    var parentTag = parentInfo && parentInfo.tag;
	    return isTagValidWithParent(tag, parentTag) && !findInvalidAncestorForTag(tag, ancestorInfo);
	  };
	}

	var validateDOMNesting_1 = validateDOMNesting$1;

	var HostComponent$11 = ReactTypeOfWork.HostComponent;

	function getParent(inst) {
	  if (inst._hostParent !== undefined) {
	    return inst._hostParent;
	  }
	  if (typeof inst.tag === 'number') {
	    do {
	      inst = inst['return'];
	      // TODO: If this is a HostRoot we might want to bail out.
	      // That is depending on if we want nested subtrees (layers) to bubble
	      // events to their parent. We could also go through parentNode on the
	      // host node but that wouldn't work for React Native and doesn't let us
	      // do the portal feature.
	    } while (inst && inst.tag !== HostComponent$11);
	    if (inst) {
	      return inst;
	    }
	  }
	  return null;
	}

	/**
	 * Return the lowest common ancestor of A and B, or null if they are in
	 * different trees.
	 */
	function getLowestCommonAncestor(instA, instB) {
	  var depthA = 0;
	  for (var tempA = instA; tempA; tempA = getParent(tempA)) {
	    depthA++;
	  }
	  var depthB = 0;
	  for (var tempB = instB; tempB; tempB = getParent(tempB)) {
	    depthB++;
	  }

	  // If A is deeper, crawl up.
	  while (depthA - depthB > 0) {
	    instA = getParent(instA);
	    depthA--;
	  }

	  // If B is deeper, crawl up.
	  while (depthB - depthA > 0) {
	    instB = getParent(instB);
	    depthB--;
	  }

	  // Walk in lockstep until we find a match.
	  var depth = depthA;
	  while (depth--) {
	    if (instA === instB || instA === instB.alternate) {
	      return instA;
	    }
	    instA = getParent(instA);
	    instB = getParent(instB);
	  }
	  return null;
	}

	/**
	 * Return if A is an ancestor of B.
	 */
	function isAncestor(instA, instB) {
	  while (instB) {
	    if (instA === instB || instA === instB.alternate) {
	      return true;
	    }
	    instB = getParent(instB);
	  }
	  return false;
	}

	/**
	 * Return the parent instance of the passed-in instance.
	 */
	function getParentInstance(inst) {
	  return getParent(inst);
	}

	/**
	 * Simulates the traversal of a two-phase, capture/bubble event dispatch.
	 */
	function traverseTwoPhase(inst, fn, arg) {
	  var path = [];
	  while (inst) {
	    path.push(inst);
	    inst = getParent(inst);
	  }
	  var i;
	  for (i = path.length; i-- > 0;) {
	    fn(path[i], 'captured', arg);
	  }
	  for (i = 0; i < path.length; i++) {
	    fn(path[i], 'bubbled', arg);
	  }
	}

	/**
	 * Traverses the ID hierarchy and invokes the supplied `cb` on any IDs that
	 * should would receive a `mouseEnter` or `mouseLeave` event.
	 *
	 * Does not invoke the callback on the nearest common ancestor because nothing
	 * "entered" or "left" that element.
	 */
	function traverseEnterLeave(from, to, fn, argFrom, argTo) {
	  var common = from && to ? getLowestCommonAncestor(from, to) : null;
	  var pathFrom = [];
	  while (from && from !== common) {
	    pathFrom.push(from);
	    from = getParent(from);
	  }
	  var pathTo = [];
	  while (to && to !== common) {
	    pathTo.push(to);
	    to = getParent(to);
	  }
	  var i;
	  for (i = 0; i < pathFrom.length; i++) {
	    fn(pathFrom[i], 'bubbled', argFrom);
	  }
	  for (i = pathTo.length; i-- > 0;) {
	    fn(pathTo[i], 'captured', argTo);
	  }
	}

	var ReactTreeTraversal = {
	  isAncestor: isAncestor,
	  getLowestCommonAncestor: getLowestCommonAncestor,
	  getParentInstance: getParentInstance,
	  traverseTwoPhase: traverseTwoPhase,
	  traverseEnterLeave: traverseEnterLeave
	};

	var getListener = EventPluginHub_1.getListener;

	{
	  var warning$29 = require$$0;
	}

	/**
	 * Some event types have a notion of different registration names for different
	 * "phases" of propagation. This finds listeners by a given phase.
	 */
	function listenerAtPhase(inst, event, propagationPhase) {
	  var registrationName = event.dispatchConfig.phasedRegistrationNames[propagationPhase];
	  return getListener(inst, registrationName);
	}

	/**
	 * Tags a `SyntheticEvent` with dispatched listeners. Creating this function
	 * here, allows us to not have to bind or create functions for each event.
	 * Mutating the event's members allows us to not have to create a wrapping
	 * "dispatch" object that pairs the event with the listener.
	 */
	function accumulateDirectionalDispatches(inst, phase, event) {
	  {
	    warning$29(inst, 'Dispatching inst must not be null');
	  }
	  var listener = listenerAtPhase(inst, event, phase);
	  if (listener) {
	    event._dispatchListeners = accumulateInto_1(event._dispatchListeners, listener);
	    event._dispatchInstances = accumulateInto_1(event._dispatchInstances, inst);
	  }
	}

	/**
	 * Collect dispatches (must be entirely collected before dispatching - see unit
	 * tests). Lazily allocate the array to conserve memory.  We must loop through
	 * each event and perform the traversal for each one. We cannot perform a
	 * single traversal for the entire collection of events because each event may
	 * have a different target.
	 */
	function accumulateTwoPhaseDispatchesSingle(event) {
	  if (event && event.dispatchConfig.phasedRegistrationNames) {
	    ReactTreeTraversal.traverseTwoPhase(event._targetInst, accumulateDirectionalDispatches, event);
	  }
	}

	/**
	 * Same as `accumulateTwoPhaseDispatchesSingle`, but skips over the targetID.
	 */
	function accumulateTwoPhaseDispatchesSingleSkipTarget(event) {
	  if (event && event.dispatchConfig.phasedRegistrationNames) {
	    var targetInst = event._targetInst;
	    var parentInst = targetInst ? ReactTreeTraversal.getParentInstance(targetInst) : null;
	    ReactTreeTraversal.traverseTwoPhase(parentInst, accumulateDirectionalDispatches, event);
	  }
	}

	/**
	 * Accumulates without regard to direction, does not look for phased
	 * registration names. Same as `accumulateDirectDispatchesSingle` but without
	 * requiring that the `dispatchMarker` be the same as the dispatched ID.
	 */
	function accumulateDispatches(inst, ignoredDirection, event) {
	  if (inst && event && event.dispatchConfig.registrationName) {
	    var registrationName = event.dispatchConfig.registrationName;
	    var listener = getListener(inst, registrationName);
	    if (listener) {
	      event._dispatchListeners = accumulateInto_1(event._dispatchListeners, listener);
	      event._dispatchInstances = accumulateInto_1(event._dispatchInstances, inst);
	    }
	  }
	}

	/**
	 * Accumulates dispatches on an `SyntheticEvent`, but only for the
	 * `dispatchMarker`.
	 * @param {SyntheticEvent} event
	 */
	function accumulateDirectDispatchesSingle(event) {
	  if (event && event.dispatchConfig.registrationName) {
	    accumulateDispatches(event._targetInst, null, event);
	  }
	}

	function accumulateTwoPhaseDispatches(events) {
	  forEachAccumulated_1(events, accumulateTwoPhaseDispatchesSingle);
	}

	function accumulateTwoPhaseDispatchesSkipTarget(events) {
	  forEachAccumulated_1(events, accumulateTwoPhaseDispatchesSingleSkipTarget);
	}

	function accumulateEnterLeaveDispatches(leave, enter, from, to) {
	  ReactTreeTraversal.traverseEnterLeave(from, to, accumulateDispatches, leave, enter);
	}

	function accumulateDirectDispatches(events) {
	  forEachAccumulated_1(events, accumulateDirectDispatchesSingle);
	}

	/**
	 * A small set of propagation patterns, each of which will accept a small amount
	 * of information, and generate a set of "dispatch ready event objects" - which
	 * are sets of events that have already been annotated with a set of dispatched
	 * listener functions/ids. The API is designed this way to discourage these
	 * propagation strategies from actually executing the dispatches, since we
	 * always want to collect the entire set of dispatches before executing even a
	 * single one.
	 *
	 * @constructor EventPropagators
	 */
	var EventPropagators = {
	  accumulateTwoPhaseDispatches: accumulateTwoPhaseDispatches,
	  accumulateTwoPhaseDispatchesSkipTarget: accumulateTwoPhaseDispatchesSkipTarget,
	  accumulateDirectDispatches: accumulateDirectDispatches,
	  accumulateEnterLeaveDispatches: accumulateEnterLeaveDispatches
	};

	var EventPropagators_1 = EventPropagators;

	/**
	 * This helper object stores information about text content of a target node,
	 * allowing comparison of content before and after a given event.
	 *
	 * Identify the node where selection currently begins, then observe
	 * both its text content and its current position in the DOM. Since the
	 * browser may natively replace the target node during composition, we can
	 * use its position to find its replacement.
	 * 
	 *
	 */
	var compositionState = {
	  _root: null,
	  _startText: null,
	  _fallbackText: null
	};

	var FallbackCompositionState = {
	  initialize: function (nativeEventTarget) {
	    compositionState._root = nativeEventTarget;
	    compositionState._startText = FallbackCompositionState.getText();
	    return true;
	  },
	  reset: function () {
	    compositionState._root = null;
	    compositionState._startText = null;
	    compositionState._fallbackText = null;
	  },
	  getData: function () {
	    if (compositionState._fallbackText) {
	      return compositionState._fallbackText;
	    }

	    var start;
	    var startValue = compositionState._startText;
	    var startLength = startValue.length;
	    var end;
	    var endValue = FallbackCompositionState.getText();
	    var endLength = endValue.length;

	    for (start = 0; start < startLength; start++) {
	      if (startValue[start] !== endValue[start]) {
	        break;
	      }
	    }

	    var minEnd = startLength - start;
	    for (end = 1; end <= minEnd; end++) {
	      if (startValue[startLength - end] !== endValue[endLength - end]) {
	        break;
	      }
	    }

	    var sliceTail = end > 1 ? 1 - end : undefined;
	    compositionState._fallbackText = endValue.slice(start, sliceTail);
	    return compositionState._fallbackText;
	  },
	  getText: function () {
	    if ('value' in compositionState._root) {
	      return compositionState._root.value;
	    }
	    return compositionState._root[getTextContentAccessor_1()];
	  }
	};

	var FallbackCompositionState_1 = FallbackCompositionState;

	var didWarnForAddedNewProperty = false;
	var isProxySupported = typeof Proxy === 'function';
	var EVENT_POOL_SIZE = 10;

	{
	  var warning$30 = require$$0;
	}

	var shouldBeReleasedProperties = ['dispatchConfig', '_targetInst', 'nativeEvent', 'isDefaultPrevented', 'isPropagationStopped', '_dispatchListeners', '_dispatchInstances'];

	/**
	 * @interface Event
	 * @see http://www.w3.org/TR/DOM-Level-3-Events/
	 */
	var EventInterface = {
	  type: null,
	  target: null,
	  // currentTarget is set when dispatching; no use in copying it here
	  currentTarget: emptyFunction.thatReturnsNull,
	  eventPhase: null,
	  bubbles: null,
	  cancelable: null,
	  timeStamp: function (event) {
	    return event.timeStamp || Date.now();
	  },
	  defaultPrevented: null,
	  isTrusted: null
	};

	/**
	 * Synthetic events are dispatched by event plugins, typically in response to a
	 * top-level event delegation handler.
	 *
	 * These systems should generally use pooling to reduce the frequency of garbage
	 * collection. The system should check `isPersistent` to determine whether the
	 * event should be released into the pool after being dispatched. Users that
	 * need a persisted event should invoke `persist`.
	 *
	 * Synthetic events (and subclasses) implement the DOM Level 3 Events API by
	 * normalizing browser quirks. Subclasses do not necessarily have to implement a
	 * DOM interface; custom application-specific events can also subclass this.
	 *
	 * @param {object} dispatchConfig Configuration used to dispatch this event.
	 * @param {*} targetInst Marker identifying the event target.
	 * @param {object} nativeEvent Native browser event.
	 * @param {DOMEventTarget} nativeEventTarget Target node.
	 */
	function SyntheticEvent(dispatchConfig, targetInst, nativeEvent, nativeEventTarget) {
	  {
	    // these have a getter/setter for warnings
	    delete this.nativeEvent;
	    delete this.preventDefault;
	    delete this.stopPropagation;
	  }

	  this.dispatchConfig = dispatchConfig;
	  this._targetInst = targetInst;
	  this.nativeEvent = nativeEvent;

	  var Interface = this.constructor.Interface;
	  for (var propName in Interface) {
	    if (!Interface.hasOwnProperty(propName)) {
	      continue;
	    }
	    {
	      delete this[propName]; // this has a getter/setter for warnings
	    }
	    var normalize = Interface[propName];
	    if (normalize) {
	      this[propName] = normalize(nativeEvent);
	    } else {
	      if (propName === 'target') {
	        this.target = nativeEventTarget;
	      } else {
	        this[propName] = nativeEvent[propName];
	      }
	    }
	  }

	  var defaultPrevented = nativeEvent.defaultPrevented != null ? nativeEvent.defaultPrevented : nativeEvent.returnValue === false;
	  if (defaultPrevented) {
	    this.isDefaultPrevented = emptyFunction.thatReturnsTrue;
	  } else {
	    this.isDefaultPrevented = emptyFunction.thatReturnsFalse;
	  }
	  this.isPropagationStopped = emptyFunction.thatReturnsFalse;
	  return this;
	}

	_assign(SyntheticEvent.prototype, {
	  preventDefault: function () {
	    this.defaultPrevented = true;
	    var event = this.nativeEvent;
	    if (!event) {
	      return;
	    }

	    if (event.preventDefault) {
	      event.preventDefault();
	    } else if (typeof event.returnValue !== 'unknown') {
	      event.returnValue = false;
	    }
	    this.isDefaultPrevented = emptyFunction.thatReturnsTrue;
	  },

	  stopPropagation: function () {
	    var event = this.nativeEvent;
	    if (!event) {
	      return;
	    }

	    if (event.stopPropagation) {
	      event.stopPropagation();
	    } else if (typeof event.cancelBubble !== 'unknown') {
	      // The ChangeEventPlugin registers a "propertychange" event for
	      // IE. This event does not support bubbling or cancelling, and
	      // any references to cancelBubble throw "Member not found".  A
	      // typeof check of "unknown" circumvents this issue (and is also
	      // IE specific).
	      event.cancelBubble = true;
	    }

	    this.isPropagationStopped = emptyFunction.thatReturnsTrue;
	  },

	  /**
	   * We release all dispatched `SyntheticEvent`s after each event loop, adding
	   * them back into the pool. This allows a way to hold onto a reference that
	   * won't be added back into the pool.
	   */
	  persist: function () {
	    this.isPersistent = emptyFunction.thatReturnsTrue;
	  },

	  /**
	   * Checks if this event should be released back into the pool.
	   *
	   * @return {boolean} True if this should not be released, false otherwise.
	   */
	  isPersistent: emptyFunction.thatReturnsFalse,

	  /**
	   * `PooledClass` looks for `destructor` on each instance it releases.
	   */
	  destructor: function () {
	    var Interface = this.constructor.Interface;
	    for (var propName in Interface) {
	      {
	        Object.defineProperty(this, propName, getPooledWarningPropertyDefinition(propName, Interface[propName]));
	      }
	    }
	    for (var i = 0; i < shouldBeReleasedProperties.length; i++) {
	      this[shouldBeReleasedProperties[i]] = null;
	    }
	    {
	      Object.defineProperty(this, 'nativeEvent', getPooledWarningPropertyDefinition('nativeEvent', null));
	      Object.defineProperty(this, 'preventDefault', getPooledWarningPropertyDefinition('preventDefault', emptyFunction));
	      Object.defineProperty(this, 'stopPropagation', getPooledWarningPropertyDefinition('stopPropagation', emptyFunction));
	    }
	  }
	});

	SyntheticEvent.Interface = EventInterface;

	/**
	 * Helper to reduce boilerplate when creating subclasses.
	 *
	 * @param {function} Class
	 * @param {?object} Interface
	 */
	SyntheticEvent.augmentClass = function (Class, Interface) {
	  var Super = this;

	  var E = function () {};
	  E.prototype = Super.prototype;
	  var prototype = new E();

	  _assign(prototype, Class.prototype);
	  Class.prototype = prototype;
	  Class.prototype.constructor = Class;

	  Class.Interface = _assign({}, Super.Interface, Interface);
	  Class.augmentClass = Super.augmentClass;
	  addEventPoolingTo(Class);
	};

	/** Proxying after everything set on SyntheticEvent
	  * to resolve Proxy issue on some WebKit browsers
	  * in which some Event properties are set to undefined (GH#10010)
	  */
	{
	  if (isProxySupported) {
	    /*eslint-disable no-func-assign */
	    SyntheticEvent = new Proxy(SyntheticEvent, {
	      construct: function (target, args) {
	        return this.apply(target, Object.create(target.prototype), args);
	      },
	      apply: function (constructor, that, args) {
	        return new Proxy(constructor.apply(that, args), {
	          set: function (target, prop, value) {
	            if (prop !== 'isPersistent' && !target.constructor.Interface.hasOwnProperty(prop) && shouldBeReleasedProperties.indexOf(prop) === -1) {
	              warning$30(didWarnForAddedNewProperty || target.isPersistent(), "This synthetic event is reused for performance reasons. If you're " + "seeing this, you're adding a new property in the synthetic event object. " + 'The property is never released. See ' + 'https://fb.me/react-event-pooling for more information.');
	              didWarnForAddedNewProperty = true;
	            }
	            target[prop] = value;
	            return true;
	          }
	        });
	      }
	    });
	    /*eslint-enable no-func-assign */
	  }
	}

	addEventPoolingTo(SyntheticEvent);

	var SyntheticEvent_1 = SyntheticEvent;

	/**
	  * Helper to nullify syntheticEvent instance properties when destructing
	  *
	  * @param {String} propName
	  * @param {?object} getVal
	  * @return {object} defineProperty object
	  */
	function getPooledWarningPropertyDefinition(propName, getVal) {
	  var isFunction = typeof getVal === 'function';
	  return {
	    configurable: true,
	    set: set,
	    get: get
	  };

	  function set(val) {
	    var action = isFunction ? 'setting the method' : 'setting the property';
	    warn(action, 'This is effectively a no-op');
	    return val;
	  }

	  function get() {
	    var action = isFunction ? 'accessing the method' : 'accessing the property';
	    var result = isFunction ? 'This is a no-op function' : 'This is set to null';
	    warn(action, result);
	    return getVal;
	  }

	  function warn(action, result) {
	    var warningCondition = false;
	    warning$30(warningCondition, "This synthetic event is reused for performance reasons. If you're seeing this, " + "you're %s `%s` on a released/nullified synthetic event. %s. " + 'If you must keep the original synthetic event around, use event.persist(). ' + 'See https://fb.me/react-event-pooling for more information.', action, propName, result);
	  }
	}

	function getPooledEvent(dispatchConfig, targetInst, nativeEvent, nativeInst) {
	  var EventConstructor = this;
	  if (EventConstructor.eventPool.length) {
	    var instance = EventConstructor.eventPool.pop();
	    EventConstructor.call(instance, dispatchConfig, targetInst, nativeEvent, nativeInst);
	    return instance;
	  }
	  return new EventConstructor(dispatchConfig, targetInst, nativeEvent, nativeInst);
	}

	function releasePooledEvent(event) {
	  var EventConstructor = this;
	  !(event instanceof EventConstructor) ? invariant(false, 'Trying to release an event instance  into a pool of a different type.') : void 0;
	  event.destructor();
	  if (EventConstructor.eventPool.length < EVENT_POOL_SIZE) {
	    EventConstructor.eventPool.push(event);
	  }
	}

	function addEventPoolingTo(EventConstructor) {
	  EventConstructor.eventPool = [];
	  EventConstructor.getPooled = getPooledEvent;
	  EventConstructor.release = releasePooledEvent;
	}

	/**
	 * @interface Event
	 * @see http://www.w3.org/TR/DOM-Level-3-Events/#events-compositionevents
	 */
	var CompositionEventInterface = {
	  data: null
	};

	/**
	 * @param {object} dispatchConfig Configuration used to dispatch this event.
	 * @param {string} dispatchMarker Marker identifying the event target.
	 * @param {object} nativeEvent Native browser event.
	 * @extends {SyntheticUIEvent}
	 */
	function SyntheticCompositionEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
	  return SyntheticEvent_1.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
	}

	SyntheticEvent_1.augmentClass(SyntheticCompositionEvent, CompositionEventInterface);

	var SyntheticCompositionEvent_1 = SyntheticCompositionEvent;

	/**
	 * @interface Event
	 * @see http://www.w3.org/TR/2013/WD-DOM-Level-3-Events-20131105
	 *      /#events-inputevents
	 */
	var InputEventInterface = {
	  data: null
	};

	/**
	 * @param {object} dispatchConfig Configuration used to dispatch this event.
	 * @param {string} dispatchMarker Marker identifying the event target.
	 * @param {object} nativeEvent Native browser event.
	 * @extends {SyntheticUIEvent}
	 */
	function SyntheticInputEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
	  return SyntheticEvent_1.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
	}

	SyntheticEvent_1.augmentClass(SyntheticInputEvent, InputEventInterface);

	var SyntheticInputEvent_1 = SyntheticInputEvent;

	var END_KEYCODES = [9, 13, 27, 32]; // Tab, Return, Esc, Space
	var START_KEYCODE = 229;

	var canUseCompositionEvent = ExecutionEnvironment.canUseDOM && 'CompositionEvent' in window;

	var documentMode = null;
	if (ExecutionEnvironment.canUseDOM && 'documentMode' in document) {
	  documentMode = document.documentMode;
	}

	// Webkit offers a very useful `textInput` event that can be used to
	// directly represent `beforeInput`. The IE `textinput` event is not as
	// useful, so we don't use it.
	var canUseTextInputEvent = ExecutionEnvironment.canUseDOM && 'TextEvent' in window && !documentMode && !isPresto();

	// In IE9+, we have access to composition events, but the data supplied
	// by the native compositionend event may be incorrect. Japanese ideographic
	// spaces, for instance (\u3000) are not recorded correctly.
	var useFallbackCompositionData = ExecutionEnvironment.canUseDOM && (!canUseCompositionEvent || documentMode && documentMode > 8 && documentMode <= 11);

	/**
	 * Opera <= 12 includes TextEvent in window, but does not fire
	 * text input events. Rely on keypress instead.
	 */
	function isPresto() {
	  var opera = window.opera;
	  return typeof opera === 'object' && typeof opera.version === 'function' && parseInt(opera.version(), 10) <= 12;
	}

	var SPACEBAR_CODE = 32;
	var SPACEBAR_CHAR = String.fromCharCode(SPACEBAR_CODE);

	// Events and their corresponding property names.
	var eventTypes = {
	  beforeInput: {
	    phasedRegistrationNames: {
	      bubbled: 'onBeforeInput',
	      captured: 'onBeforeInputCapture'
	    },
	    dependencies: ['topCompositionEnd', 'topKeyPress', 'topTextInput', 'topPaste']
	  },
	  compositionEnd: {
	    phasedRegistrationNames: {
	      bubbled: 'onCompositionEnd',
	      captured: 'onCompositionEndCapture'
	    },
	    dependencies: ['topBlur', 'topCompositionEnd', 'topKeyDown', 'topKeyPress', 'topKeyUp', 'topMouseDown']
	  },
	  compositionStart: {
	    phasedRegistrationNames: {
	      bubbled: 'onCompositionStart',
	      captured: 'onCompositionStartCapture'
	    },
	    dependencies: ['topBlur', 'topCompositionStart', 'topKeyDown', 'topKeyPress', 'topKeyUp', 'topMouseDown']
	  },
	  compositionUpdate: {
	    phasedRegistrationNames: {
	      bubbled: 'onCompositionUpdate',
	      captured: 'onCompositionUpdateCapture'
	    },
	    dependencies: ['topBlur', 'topCompositionUpdate', 'topKeyDown', 'topKeyPress', 'topKeyUp', 'topMouseDown']
	  }
	};

	// Track whether we've ever handled a keypress on the space key.
	var hasSpaceKeypress = false;

	/**
	 * Return whether a native keypress event is assumed to be a command.
	 * This is required because Firefox fires `keypress` events for key commands
	 * (cut, copy, select-all, etc.) even though no character is inserted.
	 */
	function isKeypressCommand(nativeEvent) {
	  return (nativeEvent.ctrlKey || nativeEvent.altKey || nativeEvent.metaKey) &&
	  // ctrlKey && altKey is equivalent to AltGr, and is not a command.
	  !(nativeEvent.ctrlKey && nativeEvent.altKey);
	}

	/**
	 * Translate native top level events into event types.
	 *
	 * @param {string} topLevelType
	 * @return {object}
	 */
	function getCompositionEventType(topLevelType) {
	  switch (topLevelType) {
	    case 'topCompositionStart':
	      return eventTypes.compositionStart;
	    case 'topCompositionEnd':
	      return eventTypes.compositionEnd;
	    case 'topCompositionUpdate':
	      return eventTypes.compositionUpdate;
	  }
	}

	/**
	 * Does our fallback best-guess model think this event signifies that
	 * composition has begun?
	 *
	 * @param {string} topLevelType
	 * @param {object} nativeEvent
	 * @return {boolean}
	 */
	function isFallbackCompositionStart(topLevelType, nativeEvent) {
	  return topLevelType === 'topKeyDown' && nativeEvent.keyCode === START_KEYCODE;
	}

	/**
	 * Does our fallback mode think that this event is the end of composition?
	 *
	 * @param {string} topLevelType
	 * @param {object} nativeEvent
	 * @return {boolean}
	 */
	function isFallbackCompositionEnd(topLevelType, nativeEvent) {
	  switch (topLevelType) {
	    case 'topKeyUp':
	      // Command keys insert or clear IME input.
	      return END_KEYCODES.indexOf(nativeEvent.keyCode) !== -1;
	    case 'topKeyDown':
	      // Expect IME keyCode on each keydown. If we get any other
	      // code we must have exited earlier.
	      return nativeEvent.keyCode !== START_KEYCODE;
	    case 'topKeyPress':
	    case 'topMouseDown':
	    case 'topBlur':
	      // Events are not possible without cancelling IME.
	      return true;
	    default:
	      return false;
	  }
	}

	/**
	 * Google Input Tools provides composition data via a CustomEvent,
	 * with the `data` property populated in the `detail` object. If this
	 * is available on the event object, use it. If not, this is a plain
	 * composition event and we have nothing special to extract.
	 *
	 * @param {object} nativeEvent
	 * @return {?string}
	 */
	function getDataFromCustomEvent(nativeEvent) {
	  var detail = nativeEvent.detail;
	  if (typeof detail === 'object' && 'data' in detail) {
	    return detail.data;
	  }
	  return null;
	}

	// Track the current IME composition status, if any.
	var isComposing = false;

	/**
	 * @return {?object} A SyntheticCompositionEvent.
	 */
	function extractCompositionEvent(topLevelType, targetInst, nativeEvent, nativeEventTarget) {
	  var eventType;
	  var fallbackData;

	  if (canUseCompositionEvent) {
	    eventType = getCompositionEventType(topLevelType);
	  } else if (!isComposing) {
	    if (isFallbackCompositionStart(topLevelType, nativeEvent)) {
	      eventType = eventTypes.compositionStart;
	    }
	  } else if (isFallbackCompositionEnd(topLevelType, nativeEvent)) {
	    eventType = eventTypes.compositionEnd;
	  }

	  if (!eventType) {
	    return null;
	  }

	  if (useFallbackCompositionData) {
	    // The current composition is stored statically and must not be
	    // overwritten while composition continues.
	    if (!isComposing && eventType === eventTypes.compositionStart) {
	      isComposing = FallbackCompositionState_1.initialize(nativeEventTarget);
	    } else if (eventType === eventTypes.compositionEnd) {
	      if (isComposing) {
	        fallbackData = FallbackCompositionState_1.getData();
	      }
	    }
	  }

	  var event = SyntheticCompositionEvent_1.getPooled(eventType, targetInst, nativeEvent, nativeEventTarget);

	  if (fallbackData) {
	    // Inject data generated from fallback path into the synthetic event.
	    // This matches the property of native CompositionEventInterface.
	    event.data = fallbackData;
	  } else {
	    var customData = getDataFromCustomEvent(nativeEvent);
	    if (customData !== null) {
	      event.data = customData;
	    }
	  }

	  EventPropagators_1.accumulateTwoPhaseDispatches(event);
	  return event;
	}

	/**
	 * @param {TopLevelTypes} topLevelType Record from `BrowserEventConstants`.
	 * @param {object} nativeEvent Native browser event.
	 * @return {?string} The string corresponding to this `beforeInput` event.
	 */
	function getNativeBeforeInputChars(topLevelType, nativeEvent) {
	  switch (topLevelType) {
	    case 'topCompositionEnd':
	      return getDataFromCustomEvent(nativeEvent);
	    case 'topKeyPress':
	      /**
	       * If native `textInput` events are available, our goal is to make
	       * use of them. However, there is a special case: the spacebar key.
	       * In Webkit, preventing default on a spacebar `textInput` event
	       * cancels character insertion, but it *also* causes the browser
	       * to fall back to its default spacebar behavior of scrolling the
	       * page.
	       *
	       * Tracking at:
	       * https://code.google.com/p/chromium/issues/detail?id=355103
	       *
	       * To avoid this issue, use the keypress event as if no `textInput`
	       * event is available.
	       */
	      var which = nativeEvent.which;
	      if (which !== SPACEBAR_CODE) {
	        return null;
	      }

	      hasSpaceKeypress = true;
	      return SPACEBAR_CHAR;

	    case 'topTextInput':
	      // Record the characters to be added to the DOM.
	      var chars = nativeEvent.data;

	      // If it's a spacebar character, assume that we have already handled
	      // it at the keypress level and bail immediately. Android Chrome
	      // doesn't give us keycodes, so we need to blacklist it.
	      if (chars === SPACEBAR_CHAR && hasSpaceKeypress) {
	        return null;
	      }

	      return chars;

	    default:
	      // For other native event types, do nothing.
	      return null;
	  }
	}

	/**
	 * For browsers that do not provide the `textInput` event, extract the
	 * appropriate string to use for SyntheticInputEvent.
	 *
	 * @param {string} topLevelType Record from `BrowserEventConstants`.
	 * @param {object} nativeEvent Native browser event.
	 * @return {?string} The fallback string for this `beforeInput` event.
	 */
	function getFallbackBeforeInputChars(topLevelType, nativeEvent) {
	  // If we are currently composing (IME) and using a fallback to do so,
	  // try to extract the composed characters from the fallback object.
	  // If composition event is available, we extract a string only at
	  // compositionevent, otherwise extract it at fallback events.
	  if (isComposing) {
	    if (topLevelType === 'topCompositionEnd' || !canUseCompositionEvent && isFallbackCompositionEnd(topLevelType, nativeEvent)) {
	      var chars = FallbackCompositionState_1.getData();
	      FallbackCompositionState_1.reset();
	      isComposing = false;
	      return chars;
	    }
	    return null;
	  }

	  switch (topLevelType) {
	    case 'topPaste':
	      // If a paste event occurs after a keypress, throw out the input
	      // chars. Paste events should not lead to BeforeInput events.
	      return null;
	    case 'topKeyPress':
	      /**
	       * As of v27, Firefox may fire keypress events even when no character
	       * will be inserted. A few possibilities:
	       *
	       * - `which` is `0`. Arrow keys, Esc key, etc.
	       *
	       * - `which` is the pressed key code, but no char is available.
	       *   Ex: 'AltGr + d` in Polish. There is no modified character for
	       *   this key combination and no character is inserted into the
	       *   document, but FF fires the keypress for char code `100` anyway.
	       *   No `input` event will occur.
	       *
	       * - `which` is the pressed key code, but a command combination is
	       *   being used. Ex: `Cmd+C`. No character is inserted, and no
	       *   `input` event will occur.
	       */
	      if (!isKeypressCommand(nativeEvent)) {
	        // IE fires the `keypress` event when a user types an emoji via
	        // Touch keyboard of Windows.  In such a case, the `char` property
	        // holds an emoji character like `\uD83D\uDE0A`.  Because its length
	        // is 2, the property `which` does not represent an emoji correctly.
	        // In such a case, we directly return the `char` property instead of
	        // using `which`.
	        if (nativeEvent.char && nativeEvent.char.length > 1) {
	          return nativeEvent.char;
	        } else if (nativeEvent.which) {
	          return String.fromCharCode(nativeEvent.which);
	        }
	      }
	      return null;
	    case 'topCompositionEnd':
	      return useFallbackCompositionData ? null : nativeEvent.data;
	    default:
	      return null;
	  }
	}

	/**
	 * Extract a SyntheticInputEvent for `beforeInput`, based on either native
	 * `textInput` or fallback behavior.
	 *
	 * @return {?object} A SyntheticInputEvent.
	 */
	function extractBeforeInputEvent(topLevelType, targetInst, nativeEvent, nativeEventTarget) {
	  var chars;

	  if (canUseTextInputEvent) {
	    chars = getNativeBeforeInputChars(topLevelType, nativeEvent);
	  } else {
	    chars = getFallbackBeforeInputChars(topLevelType, nativeEvent);
	  }

	  // If no characters are being inserted, no BeforeInput event should
	  // be fired.
	  if (!chars) {
	    return null;
	  }

	  var event = SyntheticInputEvent_1.getPooled(eventTypes.beforeInput, targetInst, nativeEvent, nativeEventTarget);

	  event.data = chars;
	  EventPropagators_1.accumulateTwoPhaseDispatches(event);
	  return event;
	}

	/**
	 * Create an `onBeforeInput` event to match
	 * http://www.w3.org/TR/2013/WD-DOM-Level-3-Events-20131105/#events-inputevents.
	 *
	 * This event plugin is based on the native `textInput` event
	 * available in Chrome, Safari, Opera, and IE. This event fires after
	 * `onKeyPress` and `onCompositionEnd`, but before `onInput`.
	 *
	 * `beforeInput` is spec'd but not implemented in any browsers, and
	 * the `input` event does not provide any useful information about what has
	 * actually been added, contrary to the spec. Thus, `textInput` is the best
	 * available event to identify the characters that have actually been inserted
	 * into the target node.
	 *
	 * This plugin is also responsible for emitting `composition` events, thus
	 * allowing us to share composition fallback code for both `beforeInput` and
	 * `composition` event types.
	 */
	var BeforeInputEventPlugin = {
	  eventTypes: eventTypes,

	  extractEvents: function (topLevelType, targetInst, nativeEvent, nativeEventTarget) {
	    return [extractCompositionEvent(topLevelType, targetInst, nativeEvent, nativeEventTarget), extractBeforeInputEvent(topLevelType, targetInst, nativeEvent, nativeEventTarget)];
	  }
	};

	var BeforeInputEventPlugin_1 = BeforeInputEventPlugin;

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * @providesModule isTextInputElement
	 * 
	 */

	/**
	 * @see http://www.whatwg.org/specs/web-apps/current-work/multipage/the-input-element.html#input-type-attr-summary
	 */

	var supportedInputTypes = {
	  color: true,
	  date: true,
	  datetime: true,
	  'datetime-local': true,
	  email: true,
	  month: true,
	  number: true,
	  password: true,
	  range: true,
	  search: true,
	  tel: true,
	  text: true,
	  time: true,
	  url: true,
	  week: true
	};

	function isTextInputElement(elem) {
	  var nodeName = elem && elem.nodeName && elem.nodeName.toLowerCase();

	  if (nodeName === 'input') {
	    return !!supportedInputTypes[elem.type];
	  }

	  if (nodeName === 'textarea') {
	    return true;
	  }

	  return false;
	}

	var isTextInputElement_1 = isTextInputElement;

	var eventTypes$1 = {
	  change: {
	    phasedRegistrationNames: {
	      bubbled: 'onChange',
	      captured: 'onChangeCapture'
	    },
	    dependencies: ['topBlur', 'topChange', 'topClick', 'topFocus', 'topInput', 'topKeyDown', 'topKeyUp', 'topSelectionChange']
	  }
	};

	function createAndAccumulateChangeEvent(inst, nativeEvent, target) {
	  var event = SyntheticEvent_1.getPooled(eventTypes$1.change, inst, nativeEvent, target);
	  event.type = 'change';
	  // Flag this event loop as needing state restore.
	  ReactControlledComponent_1.enqueueStateRestore(target);
	  EventPropagators_1.accumulateTwoPhaseDispatches(event);
	  return event;
	}
	/**
	 * For IE shims
	 */
	var activeElement = null;
	var activeElementInst = null;

	/**
	 * SECTION: handle `change` event
	 */
	function shouldUseChangeEvent(elem) {
	  var nodeName = elem.nodeName && elem.nodeName.toLowerCase();
	  return nodeName === 'select' || nodeName === 'input' && elem.type === 'file';
	}

	function manualDispatchChangeEvent(nativeEvent) {
	  var event = createAndAccumulateChangeEvent(activeElementInst, nativeEvent, getEventTarget_1(nativeEvent));

	  // If change and propertychange bubbled, we'd just bind to it like all the
	  // other events and have it go through ReactBrowserEventEmitter. Since it
	  // doesn't, we manually listen for the events and so we have to enqueue and
	  // process the abstract event manually.
	  //
	  // Batching is necessary here in order to ensure that all event handlers run
	  // before the next rerender (including event handlers attached to ancestor
	  // elements instead of directly on the input). Without this, controlled
	  // components don't work properly in conjunction with event bubbling because
	  // the component is rerendered and the value reverted before all the event
	  // handlers can run. See https://github.com/facebook/react/issues/708.
	  ReactGenericBatching_1.batchedUpdates(runEventInBatch, event);
	}

	function runEventInBatch(event) {
	  EventPluginHub_1.enqueueEvents(event);
	  EventPluginHub_1.processEventQueue(false);
	}

	function getInstIfValueChanged(targetInst) {
	  var targetNode = ReactDOMComponentTree_1.getNodeFromInstance(targetInst);
	  if (inputValueTracking_1.updateValueIfChanged(targetNode)) {
	    return targetInst;
	  }
	}

	function getTargetInstForChangeEvent(topLevelType, targetInst) {
	  if (topLevelType === 'topChange') {
	    return targetInst;
	  }
	}

	/**
	 * SECTION: handle `input` event
	 */
	var isInputEventSupported = false;
	if (ExecutionEnvironment.canUseDOM) {
	  // IE9 claims to support the input event but fails to trigger it when
	  // deleting text, so we ignore its input events.
	  isInputEventSupported = isEventSupported_1('input') && (!document.documentMode || document.documentMode > 9);
	}

	/**
	 * (For IE <=9) Starts tracking propertychange events on the passed-in element
	 * and override the value property so that we can distinguish user events from
	 * value changes in JS.
	 */
	function startWatchingForValueChange(target, targetInst) {
	  activeElement = target;
	  activeElementInst = targetInst;
	  activeElement.attachEvent('onpropertychange', handlePropertyChange);
	}

	/**
	 * (For IE <=9) Removes the event listeners from the currently-tracked element,
	 * if any exists.
	 */
	function stopWatchingForValueChange() {
	  if (!activeElement) {
	    return;
	  }
	  activeElement.detachEvent('onpropertychange', handlePropertyChange);
	  activeElement = null;
	  activeElementInst = null;
	}

	/**
	 * (For IE <=9) Handles a propertychange event, sending a `change` event if
	 * the value of the active element has changed.
	 */
	function handlePropertyChange(nativeEvent) {
	  if (nativeEvent.propertyName !== 'value') {
	    return;
	  }
	  if (getInstIfValueChanged(activeElementInst)) {
	    manualDispatchChangeEvent(nativeEvent);
	  }
	}

	function handleEventsForInputEventPolyfill(topLevelType, target, targetInst) {
	  if (topLevelType === 'topFocus') {
	    // In IE9, propertychange fires for most input events but is buggy and
	    // doesn't fire when text is deleted, but conveniently, selectionchange
	    // appears to fire in all of the remaining cases so we catch those and
	    // forward the event if the value has changed
	    // In either case, we don't want to call the event handler if the value
	    // is changed from JS so we redefine a setter for `.value` that updates
	    // our activeElementValue variable, allowing us to ignore those changes
	    //
	    // stopWatching() should be a noop here but we call it just in case we
	    // missed a blur event somehow.
	    stopWatchingForValueChange();
	    startWatchingForValueChange(target, targetInst);
	  } else if (topLevelType === 'topBlur') {
	    stopWatchingForValueChange();
	  }
	}

	// For IE8 and IE9.
	function getTargetInstForInputEventPolyfill(topLevelType, targetInst) {
	  if (topLevelType === 'topSelectionChange' || topLevelType === 'topKeyUp' || topLevelType === 'topKeyDown') {
	    // On the selectionchange event, the target is just document which isn't
	    // helpful for us so just check activeElement instead.
	    //
	    // 99% of the time, keydown and keyup aren't necessary. IE8 fails to fire
	    // propertychange on the first input event after setting `value` from a
	    // script and fires only keydown, keypress, keyup. Catching keyup usually
	    // gets it and catching keydown lets us fire an event for the first
	    // keystroke if user does a key repeat (it'll be a little delayed: right
	    // before the second keystroke). Other input methods (e.g., paste) seem to
	    // fire selectionchange normally.
	    return getInstIfValueChanged(activeElementInst);
	  }
	}

	/**
	 * SECTION: handle `click` event
	 */
	function shouldUseClickEvent(elem) {
	  // Use the `click` event to detect changes to checkbox and radio inputs.
	  // This approach works across all browsers, whereas `change` does not fire
	  // until `blur` in IE8.
	  var nodeName = elem.nodeName;
	  return nodeName && nodeName.toLowerCase() === 'input' && (elem.type === 'checkbox' || elem.type === 'radio');
	}

	function getTargetInstForClickEvent(topLevelType, targetInst) {
	  if (topLevelType === 'topClick') {
	    return getInstIfValueChanged(targetInst);
	  }
	}

	function getTargetInstForInputOrChangeEvent(topLevelType, targetInst) {
	  if (topLevelType === 'topInput' || topLevelType === 'topChange') {
	    return getInstIfValueChanged(targetInst);
	  }
	}

	function handleControlledInputBlur(inst, node) {
	  // TODO: In IE, inst is occasionally null. Why?
	  if (inst == null) {
	    return;
	  }

	  // Fiber and ReactDOM keep wrapper state in separate places
	  var state = inst._wrapperState || node._wrapperState;

	  if (!state || !state.controlled || node.type !== 'number') {
	    return;
	  }

	  // If controlled, assign the value attribute to the current value on blur
	  var value = '' + node.value;
	  if (node.getAttribute('value') !== value) {
	    node.setAttribute('value', value);
	  }
	}

	/**
	 * This plugin creates an `onChange` event that normalizes change events
	 * across form elements. This event fires at a time when it's possible to
	 * change the element's value without seeing a flicker.
	 *
	 * Supported elements are:
	 * - input (see `isTextInputElement`)
	 * - textarea
	 * - select
	 */
	var ChangeEventPlugin = {
	  eventTypes: eventTypes$1,

	  _isInputEventSupported: isInputEventSupported,

	  extractEvents: function (topLevelType, targetInst, nativeEvent, nativeEventTarget) {
	    var targetNode = targetInst ? ReactDOMComponentTree_1.getNodeFromInstance(targetInst) : window;

	    var getTargetInstFunc, handleEventFunc;
	    if (shouldUseChangeEvent(targetNode)) {
	      getTargetInstFunc = getTargetInstForChangeEvent;
	    } else if (isTextInputElement_1(targetNode)) {
	      if (isInputEventSupported) {
	        getTargetInstFunc = getTargetInstForInputOrChangeEvent;
	      } else {
	        getTargetInstFunc = getTargetInstForInputEventPolyfill;
	        handleEventFunc = handleEventsForInputEventPolyfill;
	      }
	    } else if (shouldUseClickEvent(targetNode)) {
	      getTargetInstFunc = getTargetInstForClickEvent;
	    }

	    if (getTargetInstFunc) {
	      var inst = getTargetInstFunc(topLevelType, targetInst);
	      if (inst) {
	        var event = createAndAccumulateChangeEvent(inst, nativeEvent, nativeEventTarget);
	        return event;
	      }
	    }

	    if (handleEventFunc) {
	      handleEventFunc(topLevelType, targetNode, targetInst);
	    }

	    // When blurring, set the value attribute for number inputs
	    if (topLevelType === 'topBlur') {
	      handleControlledInputBlur(targetInst, targetNode);
	    }
	  }
	};

	var ChangeEventPlugin_1 = ChangeEventPlugin;

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * @providesModule DOMEventPluginOrder
	 */

	/**
	 * Module that is injectable into `EventPluginHub`, that specifies a
	 * deterministic ordering of `EventPlugin`s. A convenient way to reason about
	 * plugins, without having to package every one of them. This is better than
	 * having plugins be ordered in the same order that they are injected because
	 * that ordering would be influenced by the packaging order.
	 * `ResponderEventPlugin` must occur before `SimpleEventPlugin` so that
	 * preventing default on events is convenient in `SimpleEventPlugin` handlers.
	 */

	var DOMEventPluginOrder = ['ResponderEventPlugin', 'SimpleEventPlugin', 'TapEventPlugin', 'EnterLeaveEventPlugin', 'ChangeEventPlugin', 'SelectEventPlugin', 'BeforeInputEventPlugin'];

	var DOMEventPluginOrder_1 = DOMEventPluginOrder;

	/**
	 * @interface UIEvent
	 * @see http://www.w3.org/TR/DOM-Level-3-Events/
	 */
	var UIEventInterface = {
	  view: function (event) {
	    if (event.view) {
	      return event.view;
	    }

	    var target = getEventTarget_1(event);
	    if (target.window === target) {
	      // target is a window object
	      return target;
	    }

	    var doc = target.ownerDocument;
	    // TODO: Figure out why `ownerDocument` is sometimes undefined in IE8.
	    if (doc) {
	      return doc.defaultView || doc.parentWindow;
	    } else {
	      return window;
	    }
	  },
	  detail: function (event) {
	    return event.detail || 0;
	  }
	};

	/**
	 * @param {object} dispatchConfig Configuration used to dispatch this event.
	 * @param {string} dispatchMarker Marker identifying the event target.
	 * @param {object} nativeEvent Native browser event.
	 * @extends {SyntheticEvent}
	 */
	function SyntheticUIEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
	  return SyntheticEvent_1.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
	}

	SyntheticEvent_1.augmentClass(SyntheticUIEvent, UIEventInterface);

	var SyntheticUIEvent_1 = SyntheticUIEvent;

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * @providesModule getEventModifierState
	 */

	/**
	 * Translation from modifier key to the associated property in the event.
	 * @see http://www.w3.org/TR/DOM-Level-3-Events/#keys-Modifiers
	 */

	var modifierKeyToProp = {
	  Alt: 'altKey',
	  Control: 'ctrlKey',
	  Meta: 'metaKey',
	  Shift: 'shiftKey'
	};

	// IE8 does not implement getModifierState so we simply map it to the only
	// modifier keys exposed by the event itself, does not support Lock-keys.
	// Currently, all major browsers except Chrome seems to support Lock-keys.
	function modifierStateGetter(keyArg) {
	  var syntheticEvent = this;
	  var nativeEvent = syntheticEvent.nativeEvent;
	  if (nativeEvent.getModifierState) {
	    return nativeEvent.getModifierState(keyArg);
	  }
	  var keyProp = modifierKeyToProp[keyArg];
	  return keyProp ? !!nativeEvent[keyProp] : false;
	}

	function getEventModifierState(nativeEvent) {
	  return modifierStateGetter;
	}

	var getEventModifierState_1 = getEventModifierState;

	/**
	 * @interface MouseEvent
	 * @see http://www.w3.org/TR/DOM-Level-3-Events/
	 */
	var MouseEventInterface = {
	  screenX: null,
	  screenY: null,
	  clientX: null,
	  clientY: null,
	  pageX: null,
	  pageY: null,
	  ctrlKey: null,
	  shiftKey: null,
	  altKey: null,
	  metaKey: null,
	  getModifierState: getEventModifierState_1,
	  button: null,
	  buttons: null,
	  relatedTarget: function (event) {
	    return event.relatedTarget || (event.fromElement === event.srcElement ? event.toElement : event.fromElement);
	  }
	};

	/**
	 * @param {object} dispatchConfig Configuration used to dispatch this event.
	 * @param {string} dispatchMarker Marker identifying the event target.
	 * @param {object} nativeEvent Native browser event.
	 * @extends {SyntheticUIEvent}
	 */
	function SyntheticMouseEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
	  return SyntheticUIEvent_1.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
	}

	SyntheticUIEvent_1.augmentClass(SyntheticMouseEvent, MouseEventInterface);

	var SyntheticMouseEvent_1 = SyntheticMouseEvent;

	var eventTypes$2 = {
	  mouseEnter: {
	    registrationName: 'onMouseEnter',
	    dependencies: ['topMouseOut', 'topMouseOver']
	  },
	  mouseLeave: {
	    registrationName: 'onMouseLeave',
	    dependencies: ['topMouseOut', 'topMouseOver']
	  }
	};

	var EnterLeaveEventPlugin = {
	  eventTypes: eventTypes$2,

	  /**
	   * For almost every interaction we care about, there will be both a top-level
	   * `mouseover` and `mouseout` event that occurs. Only use `mouseout` so that
	   * we do not extract duplicate events. However, moving the mouse into the
	   * browser from outside will not fire a `mouseout` event. In this case, we use
	   * the `mouseover` top-level event.
	   */
	  extractEvents: function (topLevelType, targetInst, nativeEvent, nativeEventTarget) {
	    if (topLevelType === 'topMouseOver' && (nativeEvent.relatedTarget || nativeEvent.fromElement)) {
	      return null;
	    }
	    if (topLevelType !== 'topMouseOut' && topLevelType !== 'topMouseOver') {
	      // Must not be a mouse in or mouse out - ignoring.
	      return null;
	    }

	    var win;
	    if (nativeEventTarget.window === nativeEventTarget) {
	      // `nativeEventTarget` is probably a window object.
	      win = nativeEventTarget;
	    } else {
	      // TODO: Figure out why `ownerDocument` is sometimes undefined in IE8.
	      var doc = nativeEventTarget.ownerDocument;
	      if (doc) {
	        win = doc.defaultView || doc.parentWindow;
	      } else {
	        win = window;
	      }
	    }

	    var from;
	    var to;
	    if (topLevelType === 'topMouseOut') {
	      from = targetInst;
	      var related = nativeEvent.relatedTarget || nativeEvent.toElement;
	      to = related ? ReactDOMComponentTree_1.getClosestInstanceFromNode(related) : null;
	    } else {
	      // Moving to a node from outside the window.
	      from = null;
	      to = targetInst;
	    }

	    if (from === to) {
	      // Nothing pertains to our managed components.
	      return null;
	    }

	    var fromNode = from == null ? win : ReactDOMComponentTree_1.getNodeFromInstance(from);
	    var toNode = to == null ? win : ReactDOMComponentTree_1.getNodeFromInstance(to);

	    var leave = SyntheticMouseEvent_1.getPooled(eventTypes$2.mouseLeave, from, nativeEvent, nativeEventTarget);
	    leave.type = 'mouseleave';
	    leave.target = fromNode;
	    leave.relatedTarget = toNode;

	    var enter = SyntheticMouseEvent_1.getPooled(eventTypes$2.mouseEnter, to, nativeEvent, nativeEventTarget);
	    enter.type = 'mouseenter';
	    enter.target = toNode;
	    enter.relatedTarget = fromNode;

	    EventPropagators_1.accumulateEnterLeaveDispatches(leave, enter, from, to);

	    return [leave, enter];
	  }
	};

	var EnterLeaveEventPlugin_1 = EnterLeaveEventPlugin;

	var DOCUMENT_NODE$2 = HTMLNodeType_1.DOCUMENT_NODE;





	var skipSelectionChangeEvent = ExecutionEnvironment.canUseDOM && 'documentMode' in document && document.documentMode <= 11;

	var eventTypes$3 = {
	  select: {
	    phasedRegistrationNames: {
	      bubbled: 'onSelect',
	      captured: 'onSelectCapture'
	    },
	    dependencies: ['topBlur', 'topContextMenu', 'topFocus', 'topKeyDown', 'topKeyUp', 'topMouseDown', 'topMouseUp', 'topSelectionChange']
	  }
	};

	var activeElement$1 = null;
	var activeElementInst$1 = null;
	var lastSelection = null;
	var mouseDown = false;

	// Track whether all listeners exists for this plugin. If none exist, we do
	// not extract events. See #3639.
	var isListeningToAllDependencies = ReactBrowserEventEmitter_1.isListeningToAllDependencies;

	/**
	 * Get an object which is a unique representation of the current selection.
	 *
	 * The return value will not be consistent across nodes or browsers, but
	 * two identical selections on the same node will return identical objects.
	 *
	 * @param {DOMElement} node
	 * @return {object}
	 */
	function getSelection(node) {
	  if ('selectionStart' in node && ReactInputSelection_1.hasSelectionCapabilities(node)) {
	    return {
	      start: node.selectionStart,
	      end: node.selectionEnd
	    };
	  } else if (window.getSelection) {
	    var selection = window.getSelection();
	    return {
	      anchorNode: selection.anchorNode,
	      anchorOffset: selection.anchorOffset,
	      focusNode: selection.focusNode,
	      focusOffset: selection.focusOffset
	    };
	  }
	}

	/**
	 * Poll selection to see whether it's changed.
	 *
	 * @param {object} nativeEvent
	 * @return {?SyntheticEvent}
	 */
	function constructSelectEvent(nativeEvent, nativeEventTarget) {
	  // Ensure we have the right element, and that the user is not dragging a
	  // selection (this matches native `select` event behavior). In HTML5, select
	  // fires only on input and textarea thus if there's no focused element we
	  // won't dispatch.
	  if (mouseDown || activeElement$1 == null || activeElement$1 !== getActiveElement()) {
	    return null;
	  }

	  // Only fire when selection has actually changed.
	  var currentSelection = getSelection(activeElement$1);
	  if (!lastSelection || !shallowEqual(lastSelection, currentSelection)) {
	    lastSelection = currentSelection;

	    var syntheticEvent = SyntheticEvent_1.getPooled(eventTypes$3.select, activeElementInst$1, nativeEvent, nativeEventTarget);

	    syntheticEvent.type = 'select';
	    syntheticEvent.target = activeElement$1;

	    EventPropagators_1.accumulateTwoPhaseDispatches(syntheticEvent);

	    return syntheticEvent;
	  }

	  return null;
	}

	/**
	 * This plugin creates an `onSelect` event that normalizes select events
	 * across form elements.
	 *
	 * Supported elements are:
	 * - input (see `isTextInputElement`)
	 * - textarea
	 * - contentEditable
	 *
	 * This differs from native browser implementations in the following ways:
	 * - Fires on contentEditable fields as well as inputs.
	 * - Fires for collapsed selection.
	 * - Fires after user input.
	 */
	var SelectEventPlugin = {
	  eventTypes: eventTypes$3,

	  extractEvents: function (topLevelType, targetInst, nativeEvent, nativeEventTarget) {
	    var doc = nativeEventTarget.window === nativeEventTarget ? nativeEventTarget.document : nativeEventTarget.nodeType === DOCUMENT_NODE$2 ? nativeEventTarget : nativeEventTarget.ownerDocument;
	    if (!doc || !isListeningToAllDependencies('onSelect', doc)) {
	      return null;
	    }

	    var targetNode = targetInst ? ReactDOMComponentTree_1.getNodeFromInstance(targetInst) : window;

	    switch (topLevelType) {
	      // Track the input node that has focus.
	      case 'topFocus':
	        if (isTextInputElement_1(targetNode) || targetNode.contentEditable === 'true') {
	          activeElement$1 = targetNode;
	          activeElementInst$1 = targetInst;
	          lastSelection = null;
	        }
	        break;
	      case 'topBlur':
	        activeElement$1 = null;
	        activeElementInst$1 = null;
	        lastSelection = null;
	        break;
	      // Don't fire the event while the user is dragging. This matches the
	      // semantics of the native select event.
	      case 'topMouseDown':
	        mouseDown = true;
	        break;
	      case 'topContextMenu':
	      case 'topMouseUp':
	        mouseDown = false;
	        return constructSelectEvent(nativeEvent, nativeEventTarget);
	      // Chrome and IE fire non-standard event when selection is changed (and
	      // sometimes when it hasn't). IE's event fires out of order with respect
	      // to key and input events on deletion, so we discard it.
	      //
	      // Firefox doesn't support selectionchange, so check selection status
	      // after each key entry. The selection changes after keydown and before
	      // keyup, but we check on keydown as well in the case of holding down a
	      // key, when multiple keydown events are fired but only one keyup is.
	      // This is also our approach for IE handling, for the reason above.
	      case 'topSelectionChange':
	        if (skipSelectionChangeEvent) {
	          break;
	        }
	      // falls through
	      case 'topKeyDown':
	      case 'topKeyUp':
	        return constructSelectEvent(nativeEvent, nativeEventTarget);
	    }

	    return null;
	  }
	};

	var SelectEventPlugin_1 = SelectEventPlugin;

	/**
	 * @interface Event
	 * @see http://www.w3.org/TR/css3-animations/#AnimationEvent-interface
	 * @see https://developer.mozilla.org/en-US/docs/Web/API/AnimationEvent
	 */
	var AnimationEventInterface = {
	  animationName: null,
	  elapsedTime: null,
	  pseudoElement: null
	};

	/**
	 * @param {object} dispatchConfig Configuration used to dispatch this event.
	 * @param {string} dispatchMarker Marker identifying the event target.
	 * @param {object} nativeEvent Native browser event.
	 * @extends {SyntheticEvent}
	 */
	function SyntheticAnimationEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
	  return SyntheticEvent_1.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
	}

	SyntheticEvent_1.augmentClass(SyntheticAnimationEvent, AnimationEventInterface);

	var SyntheticAnimationEvent_1 = SyntheticAnimationEvent;

	/**
	 * @interface Event
	 * @see http://www.w3.org/TR/clipboard-apis/
	 */
	var ClipboardEventInterface = {
	  clipboardData: function (event) {
	    return 'clipboardData' in event ? event.clipboardData : window.clipboardData;
	  }
	};

	/**
	 * @param {object} dispatchConfig Configuration used to dispatch this event.
	 * @param {string} dispatchMarker Marker identifying the event target.
	 * @param {object} nativeEvent Native browser event.
	 * @extends {SyntheticUIEvent}
	 */
	function SyntheticClipboardEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
	  return SyntheticEvent_1.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
	}

	SyntheticEvent_1.augmentClass(SyntheticClipboardEvent, ClipboardEventInterface);

	var SyntheticClipboardEvent_1 = SyntheticClipboardEvent;

	/**
	 * @interface FocusEvent
	 * @see http://www.w3.org/TR/DOM-Level-3-Events/
	 */
	var FocusEventInterface = {
	  relatedTarget: null
	};

	/**
	 * @param {object} dispatchConfig Configuration used to dispatch this event.
	 * @param {string} dispatchMarker Marker identifying the event target.
	 * @param {object} nativeEvent Native browser event.
	 * @extends {SyntheticUIEvent}
	 */
	function SyntheticFocusEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
	  return SyntheticUIEvent_1.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
	}

	SyntheticUIEvent_1.augmentClass(SyntheticFocusEvent, FocusEventInterface);

	var SyntheticFocusEvent_1 = SyntheticFocusEvent;

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * @providesModule getEventCharCode
	 */

	/**
	 * `charCode` represents the actual "character code" and is safe to use with
	 * `String.fromCharCode`. As such, only keys that correspond to printable
	 * characters produce a valid `charCode`, the only exception to this is Enter.
	 * The Tab-key is considered non-printable and does not have a `charCode`,
	 * presumably because it does not produce a tab-character in browsers.
	 *
	 * @param {object} nativeEvent Native browser event.
	 * @return {number} Normalized `charCode` property.
	 */

	function getEventCharCode(nativeEvent) {
	  var charCode;
	  var keyCode = nativeEvent.keyCode;

	  if ('charCode' in nativeEvent) {
	    charCode = nativeEvent.charCode;

	    // FF does not set `charCode` for the Enter-key, check against `keyCode`.
	    if (charCode === 0 && keyCode === 13) {
	      charCode = 13;
	    }
	  } else {
	    // IE8 does not implement `charCode`, but `keyCode` has the correct value.
	    charCode = keyCode;
	  }

	  // Some non-printable keys are reported in `charCode`/`keyCode`, discard them.
	  // Must not discard the (non-)printable Enter-key.
	  if (charCode >= 32 || charCode === 13) {
	    return charCode;
	  }

	  return 0;
	}

	var getEventCharCode_1 = getEventCharCode;

	/**
	 * Normalization of deprecated HTML5 `key` values
	 * @see https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent#Key_names
	 */
	var normalizeKey = {
	  Esc: 'Escape',
	  Spacebar: ' ',
	  Left: 'ArrowLeft',
	  Up: 'ArrowUp',
	  Right: 'ArrowRight',
	  Down: 'ArrowDown',
	  Del: 'Delete',
	  Win: 'OS',
	  Menu: 'ContextMenu',
	  Apps: 'ContextMenu',
	  Scroll: 'ScrollLock',
	  MozPrintableKey: 'Unidentified'
	};

	/**
	 * Translation from legacy `keyCode` to HTML5 `key`
	 * Only special keys supported, all others depend on keyboard layout or browser
	 * @see https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent#Key_names
	 */
	var translateToKey = {
	  8: 'Backspace',
	  9: 'Tab',
	  12: 'Clear',
	  13: 'Enter',
	  16: 'Shift',
	  17: 'Control',
	  18: 'Alt',
	  19: 'Pause',
	  20: 'CapsLock',
	  27: 'Escape',
	  32: ' ',
	  33: 'PageUp',
	  34: 'PageDown',
	  35: 'End',
	  36: 'Home',
	  37: 'ArrowLeft',
	  38: 'ArrowUp',
	  39: 'ArrowRight',
	  40: 'ArrowDown',
	  45: 'Insert',
	  46: 'Delete',
	  112: 'F1',
	  113: 'F2',
	  114: 'F3',
	  115: 'F4',
	  116: 'F5',
	  117: 'F6',
	  118: 'F7',
	  119: 'F8',
	  120: 'F9',
	  121: 'F10',
	  122: 'F11',
	  123: 'F12',
	  144: 'NumLock',
	  145: 'ScrollLock',
	  224: 'Meta'
	};

	/**
	 * @param {object} nativeEvent Native browser event.
	 * @return {string} Normalized `key` property.
	 */
	function getEventKey(nativeEvent) {
	  if (nativeEvent.key) {
	    // Normalize inconsistent values reported by browsers due to
	    // implementations of a working draft specification.

	    // FireFox implements `key` but returns `MozPrintableKey` for all
	    // printable characters (normalized to `Unidentified`), ignore it.
	    var key = normalizeKey[nativeEvent.key] || nativeEvent.key;
	    if (key !== 'Unidentified') {
	      return key;
	    }
	  }

	  // Browser does not implement `key`, polyfill as much of it as we can.
	  if (nativeEvent.type === 'keypress') {
	    var charCode = getEventCharCode_1(nativeEvent);

	    // The enter-key is technically both printable and non-printable and can
	    // thus be captured by `keypress`, no other non-printable key should.
	    return charCode === 13 ? 'Enter' : String.fromCharCode(charCode);
	  }
	  if (nativeEvent.type === 'keydown' || nativeEvent.type === 'keyup') {
	    // While user keyboard layout determines the actual meaning of each
	    // `keyCode` value, almost all function keys have a universal value.
	    return translateToKey[nativeEvent.keyCode] || 'Unidentified';
	  }
	  return '';
	}

	var getEventKey_1 = getEventKey;

	/**
	 * @interface KeyboardEvent
	 * @see http://www.w3.org/TR/DOM-Level-3-Events/
	 */
	var KeyboardEventInterface = {
	  key: getEventKey_1,
	  location: null,
	  ctrlKey: null,
	  shiftKey: null,
	  altKey: null,
	  metaKey: null,
	  repeat: null,
	  locale: null,
	  getModifierState: getEventModifierState_1,
	  // Legacy Interface
	  charCode: function (event) {
	    // `charCode` is the result of a KeyPress event and represents the value of
	    // the actual printable character.

	    // KeyPress is deprecated, but its replacement is not yet final and not
	    // implemented in any major browser. Only KeyPress has charCode.
	    if (event.type === 'keypress') {
	      return getEventCharCode_1(event);
	    }
	    return 0;
	  },
	  keyCode: function (event) {
	    // `keyCode` is the result of a KeyDown/Up event and represents the value of
	    // physical keyboard key.

	    // The actual meaning of the value depends on the users' keyboard layout
	    // which cannot be detected. Assuming that it is a US keyboard layout
	    // provides a surprisingly accurate mapping for US and European users.
	    // Due to this, it is left to the user to implement at this time.
	    if (event.type === 'keydown' || event.type === 'keyup') {
	      return event.keyCode;
	    }
	    return 0;
	  },
	  which: function (event) {
	    // `which` is an alias for either `keyCode` or `charCode` depending on the
	    // type of the event.
	    if (event.type === 'keypress') {
	      return getEventCharCode_1(event);
	    }
	    if (event.type === 'keydown' || event.type === 'keyup') {
	      return event.keyCode;
	    }
	    return 0;
	  }
	};

	/**
	 * @param {object} dispatchConfig Configuration used to dispatch this event.
	 * @param {string} dispatchMarker Marker identifying the event target.
	 * @param {object} nativeEvent Native browser event.
	 * @extends {SyntheticUIEvent}
	 */
	function SyntheticKeyboardEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
	  return SyntheticUIEvent_1.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
	}

	SyntheticUIEvent_1.augmentClass(SyntheticKeyboardEvent, KeyboardEventInterface);

	var SyntheticKeyboardEvent_1 = SyntheticKeyboardEvent;

	/**
	 * @interface DragEvent
	 * @see http://www.w3.org/TR/DOM-Level-3-Events/
	 */
	var DragEventInterface = {
	  dataTransfer: null
	};

	/**
	 * @param {object} dispatchConfig Configuration used to dispatch this event.
	 * @param {string} dispatchMarker Marker identifying the event target.
	 * @param {object} nativeEvent Native browser event.
	 * @extends {SyntheticUIEvent}
	 */
	function SyntheticDragEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
	  return SyntheticMouseEvent_1.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
	}

	SyntheticMouseEvent_1.augmentClass(SyntheticDragEvent, DragEventInterface);

	var SyntheticDragEvent_1 = SyntheticDragEvent;

	/**
	 * @interface TouchEvent
	 * @see http://www.w3.org/TR/touch-events/
	 */
	var TouchEventInterface = {
	  touches: null,
	  targetTouches: null,
	  changedTouches: null,
	  altKey: null,
	  metaKey: null,
	  ctrlKey: null,
	  shiftKey: null,
	  getModifierState: getEventModifierState_1
	};

	/**
	 * @param {object} dispatchConfig Configuration used to dispatch this event.
	 * @param {string} dispatchMarker Marker identifying the event target.
	 * @param {object} nativeEvent Native browser event.
	 * @extends {SyntheticUIEvent}
	 */
	function SyntheticTouchEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
	  return SyntheticUIEvent_1.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
	}

	SyntheticUIEvent_1.augmentClass(SyntheticTouchEvent, TouchEventInterface);

	var SyntheticTouchEvent_1 = SyntheticTouchEvent;

	/**
	 * @interface Event
	 * @see http://www.w3.org/TR/2009/WD-css3-transitions-20090320/#transition-events-
	 * @see https://developer.mozilla.org/en-US/docs/Web/API/TransitionEvent
	 */
	var TransitionEventInterface = {
	  propertyName: null,
	  elapsedTime: null,
	  pseudoElement: null
	};

	/**
	 * @param {object} dispatchConfig Configuration used to dispatch this event.
	 * @param {string} dispatchMarker Marker identifying the event target.
	 * @param {object} nativeEvent Native browser event.
	 * @extends {SyntheticEvent}
	 */
	function SyntheticTransitionEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
	  return SyntheticEvent_1.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
	}

	SyntheticEvent_1.augmentClass(SyntheticTransitionEvent, TransitionEventInterface);

	var SyntheticTransitionEvent_1 = SyntheticTransitionEvent;

	/**
	 * @interface WheelEvent
	 * @see http://www.w3.org/TR/DOM-Level-3-Events/
	 */
	var WheelEventInterface = {
	  deltaX: function (event) {
	    return 'deltaX' in event ? event.deltaX : // Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
	    'wheelDeltaX' in event ? -event.wheelDeltaX : 0;
	  },
	  deltaY: function (event) {
	    return 'deltaY' in event ? event.deltaY : // Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
	    'wheelDeltaY' in event ? -event.wheelDeltaY : // Fallback to `wheelDelta` for IE<9 and normalize (down is positive).
	    'wheelDelta' in event ? -event.wheelDelta : 0;
	  },
	  deltaZ: null,

	  // Browsers without "deltaMode" is reporting in raw wheel delta where one
	  // notch on the scroll is always +/- 120, roughly equivalent to pixels.
	  // A good approximation of DOM_DELTA_LINE (1) is 5% of viewport size or
	  // ~40 pixels, for DOM_DELTA_SCREEN (2) it is 87.5% of viewport size.
	  deltaMode: null
	};

	/**
	 * @param {object} dispatchConfig Configuration used to dispatch this event.
	 * @param {string} dispatchMarker Marker identifying the event target.
	 * @param {object} nativeEvent Native browser event.
	 * @extends {SyntheticMouseEvent}
	 */
	function SyntheticWheelEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
	  return SyntheticMouseEvent_1.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
	}

	SyntheticMouseEvent_1.augmentClass(SyntheticWheelEvent, WheelEventInterface);

	var SyntheticWheelEvent_1 = SyntheticWheelEvent;

	/**
	 * Turns
	 * ['abort', ...]
	 * into
	 * eventTypes = {
	 *   'abort': {
	 *     phasedRegistrationNames: {
	 *       bubbled: 'onAbort',
	 *       captured: 'onAbortCapture',
	 *     },
	 *     dependencies: ['topAbort'],
	 *   },
	 *   ...
	 * };
	 * topLevelEventsToDispatchConfig = {
	 *   'topAbort': { sameConfig }
	 * };
	 */
	var eventTypes$4 = {};
	var topLevelEventsToDispatchConfig = {};
	['abort', 'animationEnd', 'animationIteration', 'animationStart', 'blur', 'cancel', 'canPlay', 'canPlayThrough', 'click', 'close', 'contextMenu', 'copy', 'cut', 'doubleClick', 'drag', 'dragEnd', 'dragEnter', 'dragExit', 'dragLeave', 'dragOver', 'dragStart', 'drop', 'durationChange', 'emptied', 'encrypted', 'ended', 'error', 'focus', 'input', 'invalid', 'keyDown', 'keyPress', 'keyUp', 'load', 'loadedData', 'loadedMetadata', 'loadStart', 'mouseDown', 'mouseMove', 'mouseOut', 'mouseOver', 'mouseUp', 'paste', 'pause', 'play', 'playing', 'progress', 'rateChange', 'reset', 'scroll', 'seeked', 'seeking', 'stalled', 'submit', 'suspend', 'timeUpdate', 'toggle', 'touchCancel', 'touchEnd', 'touchMove', 'touchStart', 'transitionEnd', 'volumeChange', 'waiting', 'wheel'].forEach(function (event) {
	  var capitalizedEvent = event[0].toUpperCase() + event.slice(1);
	  var onEvent = 'on' + capitalizedEvent;
	  var topEvent = 'top' + capitalizedEvent;

	  var type = {
	    phasedRegistrationNames: {
	      bubbled: onEvent,
	      captured: onEvent + 'Capture'
	    },
	    dependencies: [topEvent]
	  };
	  eventTypes$4[event] = type;
	  topLevelEventsToDispatchConfig[topEvent] = type;
	});

	var SimpleEventPlugin = {
	  eventTypes: eventTypes$4,

	  extractEvents: function (topLevelType, targetInst, nativeEvent, nativeEventTarget) {
	    var dispatchConfig = topLevelEventsToDispatchConfig[topLevelType];
	    if (!dispatchConfig) {
	      return null;
	    }
	    var EventConstructor;
	    switch (topLevelType) {
	      case 'topAbort':
	      case 'topCancel':
	      case 'topCanPlay':
	      case 'topCanPlayThrough':
	      case 'topClose':
	      case 'topDurationChange':
	      case 'topEmptied':
	      case 'topEncrypted':
	      case 'topEnded':
	      case 'topError':
	      case 'topInput':
	      case 'topInvalid':
	      case 'topLoad':
	      case 'topLoadedData':
	      case 'topLoadedMetadata':
	      case 'topLoadStart':
	      case 'topPause':
	      case 'topPlay':
	      case 'topPlaying':
	      case 'topProgress':
	      case 'topRateChange':
	      case 'topReset':
	      case 'topSeeked':
	      case 'topSeeking':
	      case 'topStalled':
	      case 'topSubmit':
	      case 'topSuspend':
	      case 'topTimeUpdate':
	      case 'topToggle':
	      case 'topVolumeChange':
	      case 'topWaiting':
	        // HTML Events
	        // @see http://www.w3.org/TR/html5/index.html#events-0
	        EventConstructor = SyntheticEvent_1;
	        break;
	      case 'topKeyPress':
	        // Firefox creates a keypress event for function keys too. This removes
	        // the unwanted keypress events. Enter is however both printable and
	        // non-printable. One would expect Tab to be as well (but it isn't).
	        if (getEventCharCode_1(nativeEvent) === 0) {
	          return null;
	        }
	      /* falls through */
	      case 'topKeyDown':
	      case 'topKeyUp':
	        EventConstructor = SyntheticKeyboardEvent_1;
	        break;
	      case 'topBlur':
	      case 'topFocus':
	        EventConstructor = SyntheticFocusEvent_1;
	        break;
	      case 'topClick':
	        // Firefox creates a click event on right mouse clicks. This removes the
	        // unwanted click events.
	        if (nativeEvent.button === 2) {
	          return null;
	        }
	      /* falls through */
	      case 'topDoubleClick':
	      case 'topMouseDown':
	      case 'topMouseMove':
	      case 'topMouseUp':
	      // TODO: Disabled elements should not respond to mouse events
	      /* falls through */
	      case 'topMouseOut':
	      case 'topMouseOver':
	      case 'topContextMenu':
	        EventConstructor = SyntheticMouseEvent_1;
	        break;
	      case 'topDrag':
	      case 'topDragEnd':
	      case 'topDragEnter':
	      case 'topDragExit':
	      case 'topDragLeave':
	      case 'topDragOver':
	      case 'topDragStart':
	      case 'topDrop':
	        EventConstructor = SyntheticDragEvent_1;
	        break;
	      case 'topTouchCancel':
	      case 'topTouchEnd':
	      case 'topTouchMove':
	      case 'topTouchStart':
	        EventConstructor = SyntheticTouchEvent_1;
	        break;
	      case 'topAnimationEnd':
	      case 'topAnimationIteration':
	      case 'topAnimationStart':
	        EventConstructor = SyntheticAnimationEvent_1;
	        break;
	      case 'topTransitionEnd':
	        EventConstructor = SyntheticTransitionEvent_1;
	        break;
	      case 'topScroll':
	        EventConstructor = SyntheticUIEvent_1;
	        break;
	      case 'topWheel':
	        EventConstructor = SyntheticWheelEvent_1;
	        break;
	      case 'topCopy':
	      case 'topCut':
	      case 'topPaste':
	        EventConstructor = SyntheticClipboardEvent_1;
	        break;
	    }
	    !EventConstructor ? invariant(false, 'SimpleEventPlugin: Unhandled event type, `%s`.', topLevelType) : void 0;
	    var event = EventConstructor.getPooled(dispatchConfig, targetInst, nativeEvent, nativeEventTarget);
	    EventPropagators_1.accumulateTwoPhaseDispatches(event);
	    return event;
	  }
	};

	var SimpleEventPlugin_1 = SimpleEventPlugin;

	ReactDOMEventListener_1.setHandleTopLevel(ReactBrowserEventEmitter_1.handleTopLevel);

	/**
	 * Inject modules for resolving DOM hierarchy and plugin ordering.
	 */
	EventPluginHub_1.injection.injectEventPluginOrder(DOMEventPluginOrder_1);
	EventPluginUtils_1.injection.injectComponentTree(ReactDOMComponentTree_1);

	/**
	 * Some important event plugins included by default (without having to require
	 * them).
	 */
	EventPluginHub_1.injection.injectEventPluginsByName({
	  SimpleEventPlugin: SimpleEventPlugin_1,
	  EnterLeaveEventPlugin: EnterLeaveEventPlugin_1,
	  ChangeEventPlugin: ChangeEventPlugin_1,
	  SelectEventPlugin: SelectEventPlugin_1,
	  BeforeInputEventPlugin: BeforeInputEventPlugin_1
	});

	var MUST_USE_PROPERTY = DOMProperty_1.injection.MUST_USE_PROPERTY;
	var HAS_BOOLEAN_VALUE = DOMProperty_1.injection.HAS_BOOLEAN_VALUE;
	var HAS_NUMERIC_VALUE = DOMProperty_1.injection.HAS_NUMERIC_VALUE;
	var HAS_POSITIVE_NUMERIC_VALUE = DOMProperty_1.injection.HAS_POSITIVE_NUMERIC_VALUE;
	var HAS_OVERLOADED_BOOLEAN_VALUE = DOMProperty_1.injection.HAS_OVERLOADED_BOOLEAN_VALUE;
	var HAS_STRING_BOOLEAN_VALUE = DOMProperty_1.injection.HAS_STRING_BOOLEAN_VALUE;

	var HTMLDOMPropertyConfig = {
	  // When adding attributes to this list, be sure to also add them to
	  // the `possibleStandardNames` module to ensure casing and incorrect
	  // name warnings.
	  Properties: {
	    allowFullScreen: HAS_BOOLEAN_VALUE,
	    // IE only true/false iFrame attribute
	    // https://msdn.microsoft.com/en-us/library/ms533072(v=vs.85).aspx
	    allowTransparency: HAS_STRING_BOOLEAN_VALUE,
	    // specifies target context for links with `preload` type
	    async: HAS_BOOLEAN_VALUE,
	    // autoFocus is polyfilled/normalized by AutoFocusUtils
	    // autoFocus: HAS_BOOLEAN_VALUE,
	    autoPlay: HAS_BOOLEAN_VALUE,
	    capture: HAS_BOOLEAN_VALUE,
	    checked: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
	    cols: HAS_POSITIVE_NUMERIC_VALUE,
	    contentEditable: HAS_STRING_BOOLEAN_VALUE,
	    controls: HAS_BOOLEAN_VALUE,
	    'default': HAS_BOOLEAN_VALUE,
	    defer: HAS_BOOLEAN_VALUE,
	    disabled: HAS_BOOLEAN_VALUE,
	    download: HAS_OVERLOADED_BOOLEAN_VALUE,
	    draggable: HAS_STRING_BOOLEAN_VALUE,
	    formNoValidate: HAS_BOOLEAN_VALUE,
	    hidden: HAS_BOOLEAN_VALUE,
	    loop: HAS_BOOLEAN_VALUE,
	    // Caution; `option.selected` is not updated if `select.multiple` is
	    // disabled with `removeAttribute`.
	    multiple: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
	    muted: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
	    noValidate: HAS_BOOLEAN_VALUE,
	    open: HAS_BOOLEAN_VALUE,
	    playsInline: HAS_BOOLEAN_VALUE,
	    readOnly: HAS_BOOLEAN_VALUE,
	    required: HAS_BOOLEAN_VALUE,
	    reversed: HAS_BOOLEAN_VALUE,
	    rows: HAS_POSITIVE_NUMERIC_VALUE,
	    rowSpan: HAS_NUMERIC_VALUE,
	    scoped: HAS_BOOLEAN_VALUE,
	    seamless: HAS_BOOLEAN_VALUE,
	    selected: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
	    size: HAS_POSITIVE_NUMERIC_VALUE,
	    start: HAS_NUMERIC_VALUE,
	    // support for projecting regular DOM Elements via V1 named slots ( shadow dom )
	    span: HAS_POSITIVE_NUMERIC_VALUE,
	    spellCheck: HAS_STRING_BOOLEAN_VALUE,
	    // Style must be explicitly set in the attribute list. React components
	    // expect a style object
	    style: 0,
	    // itemScope is for for Microdata support.
	    // See http://schema.org/docs/gs.html
	    itemScope: HAS_BOOLEAN_VALUE,
	    // These attributes must stay in the white-list because they have
	    // different attribute names (see DOMAttributeNames below)
	    acceptCharset: 0,
	    className: 0,
	    htmlFor: 0,
	    httpEquiv: 0,
	    // Attributes with mutation methods must be specified in the whitelist
	    // Set the string boolean flag to allow the behavior
	    value: HAS_STRING_BOOLEAN_VALUE
	  },
	  DOMAttributeNames: {
	    acceptCharset: 'accept-charset',
	    className: 'class',
	    htmlFor: 'for',
	    httpEquiv: 'http-equiv'
	  },
	  DOMMutationMethods: {
	    value: function (node, value) {
	      if (value == null) {
	        return node.removeAttribute('value');
	      }

	      // Number inputs get special treatment due to some edge cases in
	      // Chrome. Let everything else assign the value attribute as normal.
	      // https://github.com/facebook/react/issues/7253#issuecomment-236074326
	      if (node.type !== 'number' || node.hasAttribute('value') === false) {
	        node.setAttribute('value', '' + value);
	      } else if (node.validity && !node.validity.badInput && node.ownerDocument.activeElement !== node) {
	        // Don't assign an attribute if validation reports bad
	        // input. Chrome will clear the value. Additionally, don't
	        // operate on inputs that have focus, otherwise Chrome might
	        // strip off trailing decimal places and cause the user's
	        // cursor position to jump to the beginning of the input.
	        //
	        // In ReactDOMInput, we have an onBlur event that will trigger
	        // this function again when focus is lost.
	        node.setAttribute('value', '' + value);
	      }
	    }
	  }
	};

	var HTMLDOMPropertyConfig_1 = HTMLDOMPropertyConfig;

	var HAS_STRING_BOOLEAN_VALUE$1 = DOMProperty_1.injection.HAS_STRING_BOOLEAN_VALUE;


	var NS = {
	  xlink: 'http://www.w3.org/1999/xlink',
	  xml: 'http://www.w3.org/XML/1998/namespace'
	};

	/**
	 * This is a list of all SVG attributes that need special casing,
	 * namespacing, or boolean value assignment.
	 *
	 * When adding attributes to this list, be sure to also add them to
	 * the `possibleStandardNames` module to ensure casing and incorrect
	 * name warnings.
	 *
	 * SVG Attributes List:
	 * https://www.w3.org/TR/SVG/attindex.html
	 * SMIL Spec:
	 * https://www.w3.org/TR/smil
	 */
	var ATTRS = ['accent-height', 'alignment-baseline', 'arabic-form', 'baseline-shift', 'cap-height', 'clip-path', 'clip-rule', 'color-interpolation', 'color-interpolation-filters', 'color-profile', 'color-rendering', 'dominant-baseline', 'enable-background', 'fill-opacity', 'fill-rule', 'flood-color', 'flood-opacity', 'font-family', 'font-size', 'font-size-adjust', 'font-stretch', 'font-style', 'font-variant', 'font-weight', 'glyph-name', 'glyph-orientation-horizontal', 'glyph-orientation-vertical', 'horiz-adv-x', 'horiz-origin-x', 'image-rendering', 'letter-spacing', 'lighting-color', 'marker-end', 'marker-mid', 'marker-start', 'overline-position', 'overline-thickness', 'paint-order', 'panose-1', 'pointer-events', 'rendering-intent', 'shape-rendering', 'stop-color', 'stop-opacity', 'strikethrough-position', 'strikethrough-thickness', 'stroke-dasharray', 'stroke-dashoffset', 'stroke-linecap', 'stroke-linejoin', 'stroke-miterlimit', 'stroke-opacity', 'stroke-width', 'text-anchor', 'text-decoration', 'text-rendering', 'underline-position', 'underline-thickness', 'unicode-bidi', 'unicode-range', 'units-per-em', 'v-alphabetic', 'v-hanging', 'v-ideographic', 'v-mathematical', 'vector-effect', 'vert-adv-y', 'vert-origin-x', 'vert-origin-y', 'word-spacing', 'writing-mode', 'x-height', 'xlink:actuate', 'xlink:arcrole', 'xlink:href', 'xlink:role', 'xlink:show', 'xlink:title', 'xlink:type', 'xml:base', 'xmlns:xlink', 'xml:lang', 'xml:space'];

	var SVGDOMPropertyConfig = {
	  Properties: {
	    autoReverse: HAS_STRING_BOOLEAN_VALUE$1,
	    externalResourcesRequired: HAS_STRING_BOOLEAN_VALUE$1,
	    preserveAlpha: HAS_STRING_BOOLEAN_VALUE$1
	  },
	  DOMAttributeNames: {
	    autoReverse: 'autoReverse',
	    externalResourcesRequired: 'externalResourcesRequired',
	    preserveAlpha: 'preserveAlpha'
	  },
	  DOMAttributeNamespaces: {
	    xlinkActuate: NS.xlink,
	    xlinkArcrole: NS.xlink,
	    xlinkHref: NS.xlink,
	    xlinkRole: NS.xlink,
	    xlinkShow: NS.xlink,
	    xlinkTitle: NS.xlink,
	    xlinkType: NS.xlink,
	    xmlBase: NS.xml,
	    xmlLang: NS.xml,
	    xmlSpace: NS.xml
	  }
	};

	var CAMELIZE = /[\-\:]([a-z])/g;
	var capitalize = function (token) {
	  return token[1].toUpperCase();
	};

	ATTRS.forEach(function (original) {
	  var reactName = original.replace(CAMELIZE, capitalize);

	  SVGDOMPropertyConfig.Properties[reactName] = 0;
	  SVGDOMPropertyConfig.DOMAttributeNames[reactName] = original;
	});

	var SVGDOMPropertyConfig_1 = SVGDOMPropertyConfig;

	DOMProperty_1.injection.injectDOMPropertyConfig(HTMLDOMPropertyConfig_1);
	DOMProperty_1.injection.injectDOMPropertyConfig(SVGDOMPropertyConfig_1);

	var injectInternals = ReactFiberDevToolsHook.injectInternals;

	var ELEMENT_NODE = HTMLNodeType_1.ELEMENT_NODE;
	var TEXT_NODE = HTMLNodeType_1.TEXT_NODE;
	var COMMENT_NODE = HTMLNodeType_1.COMMENT_NODE;
	var DOCUMENT_NODE = HTMLNodeType_1.DOCUMENT_NODE;
	var DOCUMENT_FRAGMENT_NODE = HTMLNodeType_1.DOCUMENT_FRAGMENT_NODE;

	var ROOT_ATTRIBUTE_NAME = DOMProperty_1.ROOT_ATTRIBUTE_NAME;




	var getChildNamespace = DOMNamespaces.getChildNamespace;
	var createElement = ReactDOMFiberComponent_1.createElement;
	var createTextNode = ReactDOMFiberComponent_1.createTextNode;
	var setInitialProperties = ReactDOMFiberComponent_1.setInitialProperties;
	var diffProperties = ReactDOMFiberComponent_1.diffProperties;
	var updateProperties = ReactDOMFiberComponent_1.updateProperties;
	var diffHydratedProperties = ReactDOMFiberComponent_1.diffHydratedProperties;
	var diffHydratedText = ReactDOMFiberComponent_1.diffHydratedText;
	var warnForDeletedHydratableElement = ReactDOMFiberComponent_1.warnForDeletedHydratableElement;
	var warnForDeletedHydratableText = ReactDOMFiberComponent_1.warnForDeletedHydratableText;
	var warnForInsertedHydratedElement = ReactDOMFiberComponent_1.warnForInsertedHydratedElement;
	var warnForInsertedHydratedText = ReactDOMFiberComponent_1.warnForInsertedHydratedText;
	var precacheFiberNode = ReactDOMComponentTree_1.precacheFiberNode;
	var updateFiberProps = ReactDOMComponentTree_1.updateFiberProps;


	{
	  var lowPriorityWarning = lowPriorityWarning_1;
	  var warning = require$$0;
	  var validateDOMNesting = validateDOMNesting_1;
	  var updatedAncestorInfo = validateDOMNesting.updatedAncestorInfo;


	  if (typeof Map !== 'function' || Map.prototype == null || typeof Map.prototype.forEach !== 'function' || typeof Set !== 'function' || Set.prototype == null || typeof Set.prototype.clear !== 'function' || typeof Set.prototype.forEach !== 'function') {
	    warning(false, 'React depends on Map and Set built-in types. Make sure that you load a ' + 'polyfill in older browsers. http://fb.me/react-polyfills');
	  }
	}



	ReactControlledComponent_1.injection.injectFiberControlledHostComponent(ReactDOMFiberComponent_1);
	findDOMNode_1._injectFiber(function (fiber) {
	  return DOMRenderer.findHostInstance(fiber);
	});

	var eventsEnabled = null;
	var selectionInformation = null;

	/**
	 * True if the supplied DOM node is a valid node element.
	 *
	 * @param {?DOMElement} node The candidate DOM node.
	 * @return {boolean} True if the DOM is a valid DOM node.
	 * @internal
	 */
	function isValidContainer(node) {
	  return !!(node && (node.nodeType === ELEMENT_NODE || node.nodeType === DOCUMENT_NODE || node.nodeType === DOCUMENT_FRAGMENT_NODE || node.nodeType === COMMENT_NODE && node.nodeValue === ' react-mount-point-unstable '));
	}

	function getReactRootElementInContainer(container) {
	  if (!container) {
	    return null;
	  }

	  if (container.nodeType === DOCUMENT_NODE) {
	    return container.documentElement;
	  } else {
	    return container.firstChild;
	  }
	}

	function shouldHydrateDueToLegacyHeuristic(container) {
	  var rootElement = getReactRootElementInContainer(container);
	  return !!(rootElement && rootElement.nodeType === ELEMENT_NODE && rootElement.hasAttribute(ROOT_ATTRIBUTE_NAME));
	}

	function shouldAutoFocusHostComponent(type, props) {
	  switch (type) {
	    case 'button':
	    case 'input':
	    case 'select':
	    case 'textarea':
	      return !!props.autoFocus;
	  }
	  return false;
	}

	var DOMRenderer = ReactFiberReconciler({
	  getRootHostContext: function (rootContainerInstance) {
	    var type = void 0;
	    var namespace = void 0;
	    if (rootContainerInstance.nodeType === DOCUMENT_NODE) {
	      type = '#document';
	      var root = rootContainerInstance.documentElement;
	      namespace = root ? root.namespaceURI : getChildNamespace(null, '');
	    } else {
	      var container = rootContainerInstance.nodeType === COMMENT_NODE ? rootContainerInstance.parentNode : rootContainerInstance;
	      var ownNamespace = container.namespaceURI || null;
	      type = container.tagName;
	      namespace = getChildNamespace(ownNamespace, type);
	    }
	    {
	      var validatedTag = type.toLowerCase();
	      var _ancestorInfo = updatedAncestorInfo(null, validatedTag, null);
	      return { namespace: namespace, ancestorInfo: _ancestorInfo };
	    }
	    return namespace;
	  },
	  getChildHostContext: function (parentHostContext, type) {
	    {
	      var parentHostContextDev = parentHostContext;
	      var _namespace = getChildNamespace(parentHostContextDev.namespace, type);
	      var _ancestorInfo2 = updatedAncestorInfo(parentHostContextDev.ancestorInfo, type, null);
	      return { namespace: _namespace, ancestorInfo: _ancestorInfo2 };
	    }
	    var parentNamespace = parentHostContext;
	    return getChildNamespace(parentNamespace, type);
	  },
	  getPublicInstance: function (instance) {
	    return instance;
	  },
	  prepareForCommit: function () {
	    eventsEnabled = ReactBrowserEventEmitter_1.isEnabled();
	    selectionInformation = ReactInputSelection_1.getSelectionInformation();
	    ReactBrowserEventEmitter_1.setEnabled(false);
	  },
	  resetAfterCommit: function () {
	    ReactInputSelection_1.restoreSelection(selectionInformation);
	    selectionInformation = null;
	    ReactBrowserEventEmitter_1.setEnabled(eventsEnabled);
	    eventsEnabled = null;
	  },
	  createInstance: function (type, props, rootContainerInstance, hostContext, internalInstanceHandle) {
	    var parentNamespace = void 0;
	    {
	      // TODO: take namespace into account when validating.
	      var hostContextDev = hostContext;
	      validateDOMNesting(type, null, null, hostContextDev.ancestorInfo);
	      if (typeof props.children === 'string' || typeof props.children === 'number') {
	        var string = '' + props.children;
	        var ownAncestorInfo = updatedAncestorInfo(hostContextDev.ancestorInfo, type, null);
	        validateDOMNesting(null, string, null, ownAncestorInfo);
	      }
	      parentNamespace = hostContextDev.namespace;
	    }
	    var domElement = createElement(type, props, rootContainerInstance, parentNamespace);
	    precacheFiberNode(internalInstanceHandle, domElement);
	    updateFiberProps(domElement, props);
	    return domElement;
	  },
	  appendInitialChild: function (parentInstance, child) {
	    parentInstance.appendChild(child);
	  },
	  finalizeInitialChildren: function (domElement, type, props, rootContainerInstance) {
	    setInitialProperties(domElement, type, props, rootContainerInstance);
	    return shouldAutoFocusHostComponent(type, props);
	  },
	  prepareUpdate: function (domElement, type, oldProps, newProps, rootContainerInstance, hostContext) {
	    {
	      var hostContextDev = hostContext;
	      if (typeof newProps.children !== typeof oldProps.children && (typeof newProps.children === 'string' || typeof newProps.children === 'number')) {
	        var string = '' + newProps.children;
	        var ownAncestorInfo = updatedAncestorInfo(hostContextDev.ancestorInfo, type, null);
	        validateDOMNesting(null, string, null, ownAncestorInfo);
	      }
	    }
	    return diffProperties(domElement, type, oldProps, newProps, rootContainerInstance);
	  },
	  commitMount: function (domElement, type, newProps, internalInstanceHandle) {
	    domElement.focus();
	  },
	  commitUpdate: function (domElement, updatePayload, type, oldProps, newProps, internalInstanceHandle) {
	    // Update the props handle so that we know which props are the ones with
	    // with current event handlers.
	    updateFiberProps(domElement, newProps);
	    // Apply the diff to the DOM node.
	    updateProperties(domElement, updatePayload, type, oldProps, newProps);
	  },
	  shouldSetTextContent: function (type, props) {
	    return type === 'textarea' || typeof props.children === 'string' || typeof props.children === 'number' || typeof props.dangerouslySetInnerHTML === 'object' && props.dangerouslySetInnerHTML !== null && typeof props.dangerouslySetInnerHTML.__html === 'string';
	  },
	  resetTextContent: function (domElement) {
	    domElement.textContent = '';
	  },
	  shouldDeprioritizeSubtree: function (type, props) {
	    return !!props.hidden;
	  },
	  createTextInstance: function (text, rootContainerInstance, hostContext, internalInstanceHandle) {
	    {
	      var hostContextDev = hostContext;
	      validateDOMNesting(null, text, null, hostContextDev.ancestorInfo);
	    }
	    var textNode = createTextNode(text, rootContainerInstance);
	    precacheFiberNode(internalInstanceHandle, textNode);
	    return textNode;
	  },
	  commitTextUpdate: function (textInstance, oldText, newText) {
	    textInstance.nodeValue = newText;
	  },
	  appendChild: function (parentInstance, child) {
	    parentInstance.appendChild(child);
	  },
	  appendChildToContainer: function (container, child) {
	    if (container.nodeType === COMMENT_NODE) {
	      container.parentNode.insertBefore(child, container);
	    } else {
	      container.appendChild(child);
	    }
	  },
	  insertBefore: function (parentInstance, child, beforeChild) {
	    parentInstance.insertBefore(child, beforeChild);
	  },
	  insertInContainerBefore: function (container, child, beforeChild) {
	    if (container.nodeType === COMMENT_NODE) {
	      container.parentNode.insertBefore(child, beforeChild);
	    } else {
	      container.insertBefore(child, beforeChild);
	    }
	  },
	  removeChild: function (parentInstance, child) {
	    parentInstance.removeChild(child);
	  },
	  removeChildFromContainer: function (container, child) {
	    if (container.nodeType === COMMENT_NODE) {
	      container.parentNode.removeChild(child);
	    } else {
	      container.removeChild(child);
	    }
	  },
	  canHydrateInstance: function (instance, type, props) {
	    return instance.nodeType === ELEMENT_NODE && type === instance.nodeName.toLowerCase();
	  },
	  canHydrateTextInstance: function (instance, text) {
	    if (text === '') {
	      // Empty strings are not parsed by HTML so there won't be a correct match here.
	      return false;
	    }
	    return instance.nodeType === TEXT_NODE;
	  },
	  getNextHydratableSibling: function (instance) {
	    var node = instance.nextSibling;
	    // Skip non-hydratable nodes.
	    while (node && node.nodeType !== ELEMENT_NODE && node.nodeType !== TEXT_NODE) {
	      node = node.nextSibling;
	    }
	    return node;
	  },
	  getFirstHydratableChild: function (parentInstance) {
	    var next = parentInstance.firstChild;
	    // Skip non-hydratable nodes.
	    while (next && next.nodeType !== ELEMENT_NODE && next.nodeType !== TEXT_NODE) {
	      next = next.nextSibling;
	    }
	    return next;
	  },
	  hydrateInstance: function (instance, type, props, rootContainerInstance, hostContext, internalInstanceHandle) {
	    precacheFiberNode(internalInstanceHandle, instance);
	    // TODO: Possibly defer this until the commit phase where all the events
	    // get attached.
	    updateFiberProps(instance, props);
	    var parentNamespace = void 0;
	    {
	      var hostContextDev = hostContext;
	      parentNamespace = hostContextDev.namespace;
	    }
	    return diffHydratedProperties(instance, type, props, parentNamespace, rootContainerInstance);
	  },
	  hydrateTextInstance: function (textInstance, text, internalInstanceHandle) {
	    precacheFiberNode(internalInstanceHandle, textInstance);
	    return diffHydratedText(textInstance, text);
	  },
	  didNotHydrateInstance: function (parentInstance, instance) {
	    if (instance.nodeType === 1) {
	      warnForDeletedHydratableElement(parentInstance, instance);
	    } else {
	      warnForDeletedHydratableText(parentInstance, instance);
	    }
	  },
	  didNotFindHydratableInstance: function (parentInstance, type, props) {
	    warnForInsertedHydratedElement(parentInstance, type, props);
	  },
	  didNotFindHydratableTextInstance: function (parentInstance, text) {
	    warnForInsertedHydratedText(parentInstance, text);
	  },


	  scheduleDeferredCallback: ReactDOMFrameScheduling.rIC,

	  useSyncScheduling: !ReactDOMFeatureFlags_1.fiberAsyncScheduling
	});

	ReactGenericBatching_1.injection.injectFiberBatchedUpdates(DOMRenderer.batchedUpdates);

	var warnedAboutHydrateAPI = false;

	function renderSubtreeIntoContainer(parentComponent, children, container, forceHydrate, callback) {
	  !isValidContainer(container) ? invariant(false, 'Target container is not a DOM element.') : void 0;

	  {
	    if (container._reactRootContainer && container.nodeType !== COMMENT_NODE) {
	      var hostInstance = DOMRenderer.findHostInstanceWithNoPortals(container._reactRootContainer.current);
	      if (hostInstance) {
	        warning(hostInstance.parentNode === container, 'render(...): It looks like the React-rendered content of this ' + 'container was removed without using React. This is not ' + 'supported and will cause errors. Instead, call ' + 'ReactDOM.unmountComponentAtNode to empty a container.');
	      }
	    }

	    var isRootRenderedBySomeReact = !!container._reactRootContainer;
	    var rootEl = getReactRootElementInContainer(container);
	    var hasNonRootReactChild = !!(rootEl && ReactDOMComponentTree_1.getInstanceFromNode(rootEl));

	    warning(!hasNonRootReactChild || isRootRenderedBySomeReact, 'render(...): Replacing React-rendered children with a new root ' + 'component. If you intended to update the children of this node, ' + 'you should instead have the existing children update their state ' + 'and render the new components instead of calling ReactDOM.render.');

	    warning(container.nodeType !== ELEMENT_NODE || !container.tagName || container.tagName.toUpperCase() !== 'BODY', 'render(): Rendering components directly into document.body is ' + 'discouraged, since its children are often manipulated by third-party ' + 'scripts and browser extensions. This may lead to subtle ' + 'reconciliation issues. Try rendering into a container element created ' + 'for your app.');
	  }

	  var root = container._reactRootContainer;
	  if (!root) {
	    var shouldHydrate = forceHydrate || shouldHydrateDueToLegacyHeuristic(container);
	    // First clear any existing content.
	    if (!shouldHydrate) {
	      var warned = false;
	      var rootSibling = void 0;
	      while (rootSibling = container.lastChild) {
	        {
	          if (!warned && rootSibling.nodeType === ELEMENT_NODE && rootSibling.hasAttribute(ROOT_ATTRIBUTE_NAME)) {
	            warned = true;
	            warning(false, 'render(): Target node has markup rendered by React, but there ' + 'are unrelated nodes as well. This is most commonly caused by ' + 'white-space inserted around server-rendered markup.');
	          }
	        }
	        container.removeChild(rootSibling);
	      }
	    }
	    {
	      if (shouldHydrate && !forceHydrate && !warnedAboutHydrateAPI) {
	        warnedAboutHydrateAPI = true;
	        lowPriorityWarning(false, 'render(): Calling ReactDOM.render() to hydrate server-rendered markup ' + 'will stop working in React v17. Replace the ReactDOM.render() call ' + 'with ReactDOM.hydrate() if you want React to attach to the server HTML.');
	      }
	    }
	    var newRoot = DOMRenderer.createContainer(container);
	    root = container._reactRootContainer = newRoot;
	    // Initial mount should not be batched.
	    DOMRenderer.unbatchedUpdates(function () {
	      DOMRenderer.updateContainer(children, newRoot, parentComponent, callback);
	    });
	  } else {
	    DOMRenderer.updateContainer(children, root, parentComponent, callback);
	  }
	  return DOMRenderer.getPublicRootInstance(root);
	}

	function createPortal(children, container) {
	  var key = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

	  !isValidContainer(container) ? invariant(false, 'Target container is not a DOM element.') : void 0;
	  // TODO: pass ReactDOM portal implementation as third argument
	  return ReactPortal.createPortal(children, container, null, key);
	}

	var ReactDOMFiber = {
	  createPortal: createPortal,

	  hydrate: function (element, container, callback) {
	    // TODO: throw or warn if we couldn't hydrate?
	    return renderSubtreeIntoContainer(null, element, container, true, callback);
	  },
	  render: function (element, container, callback) {
	    return renderSubtreeIntoContainer(null, element, container, false, callback);
	  },
	  unstable_renderSubtreeIntoContainer: function (parentComponent, element, containerNode, callback) {
	    !(parentComponent != null && ReactInstanceMap_1.has(parentComponent)) ? invariant(false, 'parentComponent must be a valid React Component') : void 0;
	    return renderSubtreeIntoContainer(parentComponent, element, containerNode, false, callback);
	  },
	  unmountComponentAtNode: function (container) {
	    !isValidContainer(container) ? invariant(false, 'unmountComponentAtNode(...): Target container is not a DOM element.') : void 0;

	    if (container._reactRootContainer) {
	      {
	        var rootEl = getReactRootElementInContainer(container);
	        var renderedByDifferentReact = rootEl && !ReactDOMComponentTree_1.getInstanceFromNode(rootEl);
	        warning(!renderedByDifferentReact, "unmountComponentAtNode(): The node you're attempting to unmount " + 'was rendered by another copy of React.');
	      }

	      // Unmount should not be batched.
	      DOMRenderer.unbatchedUpdates(function () {
	        renderSubtreeIntoContainer(null, null, container, false, function () {
	          container._reactRootContainer = null;
	        });
	      });
	      // If you call unmountComponentAtNode twice in quick succession, you'll
	      // get `true` twice. That's probably fine?
	      return true;
	    } else {
	      {
	        var _rootEl = getReactRootElementInContainer(container);
	        var hasNonRootReactChild = !!(_rootEl && ReactDOMComponentTree_1.getInstanceFromNode(_rootEl));

	        // Check if the container itself is a React root node.
	        var isContainerReactRoot = container.nodeType === 1 && isValidContainer(container.parentNode) && !!container.parentNode._reactRootContainer;

	        warning(!hasNonRootReactChild, "unmountComponentAtNode(): The node you're attempting to unmount " + 'was rendered by React and is not a top-level container. %s', isContainerReactRoot ? 'You may have accidentally passed in a React root node instead ' + 'of its container.' : 'Instead, have the parent component update its state and ' + 'rerender in order to remove this component.');
	      }

	      return false;
	    }
	  },


	  findDOMNode: findDOMNode_1,

	  // Temporary alias since we already shipped React 16 RC with it.
	  // TODO: remove in React 17.
	  unstable_createPortal: createPortal,

	  unstable_batchedUpdates: ReactGenericBatching_1.batchedUpdates,

	  unstable_deferredUpdates: DOMRenderer.deferredUpdates,

	  flushSync: DOMRenderer.flushSync,

	  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
	    // For TapEventPlugin which is popular in open source
	    EventPluginHub: EventPluginHub_1,
	    // Used by test-utils
	    EventPluginRegistry: EventPluginRegistry_1,
	    EventPropagators: EventPropagators_1,
	    ReactControlledComponent: ReactControlledComponent_1,
	    ReactDOMComponentTree: ReactDOMComponentTree_1,
	    ReactDOMEventListener: ReactDOMEventListener_1
	  }
	};

	var foundDevTools = injectInternals({
	  findFiberByHostInstance: ReactDOMComponentTree_1.getClosestInstanceFromNode,
	  findHostInstanceByFiber: DOMRenderer.findHostInstance,
	  // This is an enum because we may add more (e.g. profiler build)
	  bundleType: 1,
	  version: ReactVersion,
	  rendererPackageName: 'react-dom'
	});

	{
	  if (!foundDevTools && ExecutionEnvironment.canUseDOM && window.top === window.self) {
	    // If we're in Chrome or Firefox, provide a download link if not installed.
	    if (navigator.userAgent.indexOf('Chrome') > -1 && navigator.userAgent.indexOf('Edge') === -1 || navigator.userAgent.indexOf('Firefox') > -1) {
	      var protocol = window.location.protocol;
	      // Don't warn in exotic cases like chrome-extension://.
	      if (/^(https?|file):$/.test(protocol)) {
	        console.info('%cDownload the React DevTools ' + 'for a better development experience: ' + 'https://fb.me/react-devtools' + (protocol === 'file:' ? '\nYou might need to use a local HTTP server (instead of file://): ' + 'https://fb.me/react-devtools-faq' : ''), 'font-weight:bold');
	      }
	    }
	  }
	}

	var ReactDOMFiberEntry = ReactDOMFiber;

	module.exports = ReactDOMFiberEntry;

	})();
	}


/***/ },
/* 52 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */

	'use strict';

	var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

	/**
	 * Simple, lightweight module assisting with the detection and context of
	 * Worker. Helps avoid circular dependencies and allows code to reason about
	 * whether or not they are in a Worker, even if they never include the main
	 * `ReactWorker` dependency.
	 */
	var ExecutionEnvironment = {

	  canUseDOM: canUseDOM,

	  canUseWorkers: typeof Worker !== 'undefined',

	  canUseEventListeners: canUseDOM && !!(window.addEventListener || window.attachEvent),

	  canUseViewport: canUseDOM && !!window.screen,

	  isInWorker: !canUseDOM // For now, this is true - might change in the future.

	};

	module.exports = ExecutionEnvironment;

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * @typechecks
	 */

	var emptyFunction = __webpack_require__(45);

	/**
	 * Upstream version of event listener. Does not take into account specific
	 * nature of platform.
	 */
	var EventListener = {
	  /**
	   * Listen to DOM events during the bubble phase.
	   *
	   * @param {DOMEventTarget} target DOM element to register listener on.
	   * @param {string} eventType Event type, e.g. 'click' or 'mouseover'.
	   * @param {function} callback Callback function.
	   * @return {object} Object with a `remove` method.
	   */
	  listen: function listen(target, eventType, callback) {
	    if (target.addEventListener) {
	      target.addEventListener(eventType, callback, false);
	      return {
	        remove: function remove() {
	          target.removeEventListener(eventType, callback, false);
	        }
	      };
	    } else if (target.attachEvent) {
	      target.attachEvent('on' + eventType, callback);
	      return {
	        remove: function remove() {
	          target.detachEvent('on' + eventType, callback);
	        }
	      };
	    }
	  },

	  /**
	   * Listen to DOM events during the capture phase.
	   *
	   * @param {DOMEventTarget} target DOM element to register listener on.
	   * @param {string} eventType Event type, e.g. 'click' or 'mouseover'.
	   * @param {function} callback Callback function.
	   * @return {object} Object with a `remove` method.
	   */
	  capture: function capture(target, eventType, callback) {
	    if (target.addEventListener) {
	      target.addEventListener(eventType, callback, true);
	      return {
	        remove: function remove() {
	          target.removeEventListener(eventType, callback, true);
	        }
	      };
	    } else {
	      if (true) {
	        console.error('Attempted to listen to events during the capture phase on a ' + 'browser that does not support the capture phase. Your application ' + 'will not receive some events.');
	      }
	      return {
	        remove: emptyFunction
	      };
	    }
	  },

	  registerDefault: function registerDefault() {}
	};

	module.exports = EventListener;

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * @typechecks
	 */

	'use strict';

	var hyphenate = __webpack_require__(55);

	var msPattern = /^ms-/;

	/**
	 * Hyphenates a camelcased CSS property name, for example:
	 *
	 *   > hyphenateStyleName('backgroundColor')
	 *   < "background-color"
	 *   > hyphenateStyleName('MozTransition')
	 *   < "-moz-transition"
	 *   > hyphenateStyleName('msTransition')
	 *   < "-ms-transition"
	 *
	 * As Modernizr suggests (http://modernizr.com/docs/#prefixed), an `ms` prefix
	 * is converted to `-ms-`.
	 *
	 * @param {string} string
	 * @return {string}
	 */
	function hyphenateStyleName(string) {
	  return hyphenate(string).replace(msPattern, '-ms-');
	}

	module.exports = hyphenateStyleName;

/***/ },
/* 55 */
/***/ function(module, exports) {

	'use strict';

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * @typechecks
	 */

	var _uppercasePattern = /([A-Z])/g;

	/**
	 * Hyphenates a camelcased string, for example:
	 *
	 *   > hyphenate('backgroundColor')
	 *   < "background-color"
	 *
	 * For CSS style names, use `hyphenateStyleName` instead which works properly
	 * with all vendor prefixes, including `ms`.
	 *
	 * @param {string} string
	 * @return {string}
	 */
	function hyphenate(string) {
	  return string.replace(_uppercasePattern, '-$1').toLowerCase();
	}

	module.exports = hyphenate;

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * @typechecks
	 */

	'use strict';

	var camelize = __webpack_require__(57);

	var msPattern = /^-ms-/;

	/**
	 * Camelcases a hyphenated CSS property name, for example:
	 *
	 *   > camelizeStyleName('background-color')
	 *   < "backgroundColor"
	 *   > camelizeStyleName('-moz-transition')
	 *   < "MozTransition"
	 *   > camelizeStyleName('-ms-transition')
	 *   < "msTransition"
	 *
	 * As Andi Smith suggests
	 * (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
	 * is converted to lowercase `ms`.
	 *
	 * @param {string} string
	 * @return {string}
	 */
	function camelizeStyleName(string) {
	  return camelize(string.replace(msPattern, 'ms-'));
	}

	module.exports = camelizeStyleName;

/***/ },
/* 57 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * @typechecks
	 */

	var _hyphenPattern = /-(.)/g;

	/**
	 * Camelcases a hyphenated string, for example:
	 *
	 *   > camelize('background-color')
	 *   < "backgroundColor"
	 *
	 * @param {string} string
	 * @return {string}
	 */
	function camelize(string) {
	  return string.replace(_hyphenPattern, function (_, character) {
	    return character.toUpperCase();
	  });
	}

	module.exports = camelize;

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * @typechecks
	 */

	var performance = __webpack_require__(59);

	var performanceNow;

	/**
	 * Detect if we can use `window.performance.now()` and gracefully fallback to
	 * `Date.now()` if it doesn't exist. We need to support Firefox < 15 for now
	 * because of Facebook's testing infrastructure.
	 */
	if (performance.now) {
	  performanceNow = function performanceNow() {
	    return performance.now();
	  };
	} else {
	  performanceNow = function performanceNow() {
	    return Date.now();
	  };
	}

	module.exports = performanceNow;

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * @typechecks
	 */

	'use strict';

	var ExecutionEnvironment = __webpack_require__(52);

	var performance;

	if (ExecutionEnvironment.canUseDOM) {
	  performance = window.performance || window.msPerformance || window.webkitPerformance;
	}

	module.exports = performance || {};

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	if (true) {
	  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
	    Symbol.for &&
	    Symbol.for('react.element')) ||
	    0xeac7;

	  var isValidElement = function(object) {
	    return typeof object === 'object' &&
	      object !== null &&
	      object.$$typeof === REACT_ELEMENT_TYPE;
	  };

	  // By explicitly using `prop-types` you are opting into new development behavior.
	  // http://fb.me/prop-types-in-prod
	  var throwOnDirectAccess = true;
	  module.exports = __webpack_require__(61)(isValidElement, throwOnDirectAccess);
	} else {
	  // By explicitly using `prop-types` you are opting into new production behavior.
	  // http://fb.me/prop-types-in-prod
	  module.exports = require('./factoryWithThrowingShims')();
	}


/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';

	var emptyFunction = __webpack_require__(45);
	var invariant = __webpack_require__(47);
	var warning = __webpack_require__(44);
	var assign = __webpack_require__(43);

	var ReactPropTypesSecret = __webpack_require__(49);
	var checkPropTypes = __webpack_require__(48);

	module.exports = function(isValidElement, throwOnDirectAccess) {
	  /* global Symbol */
	  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
	  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

	  /**
	   * Returns the iterator method function contained on the iterable object.
	   *
	   * Be sure to invoke the function with the iterable as context:
	   *
	   *     var iteratorFn = getIteratorFn(myIterable);
	   *     if (iteratorFn) {
	   *       var iterator = iteratorFn.call(myIterable);
	   *       ...
	   *     }
	   *
	   * @param {?object} maybeIterable
	   * @return {?function}
	   */
	  function getIteratorFn(maybeIterable) {
	    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
	    if (typeof iteratorFn === 'function') {
	      return iteratorFn;
	    }
	  }

	  /**
	   * Collection of methods that allow declaration and validation of props that are
	   * supplied to React components. Example usage:
	   *
	   *   var Props = require('ReactPropTypes');
	   *   var MyArticle = React.createClass({
	   *     propTypes: {
	   *       // An optional string prop named "description".
	   *       description: Props.string,
	   *
	   *       // A required enum prop named "category".
	   *       category: Props.oneOf(['News','Photos']).isRequired,
	   *
	   *       // A prop named "dialog" that requires an instance of Dialog.
	   *       dialog: Props.instanceOf(Dialog).isRequired
	   *     },
	   *     render: function() { ... }
	   *   });
	   *
	   * A more formal specification of how these methods are used:
	   *
	   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
	   *   decl := ReactPropTypes.{type}(.isRequired)?
	   *
	   * Each and every declaration produces a function with the same signature. This
	   * allows the creation of custom validation functions. For example:
	   *
	   *  var MyLink = React.createClass({
	   *    propTypes: {
	   *      // An optional string or URI prop named "href".
	   *      href: function(props, propName, componentName) {
	   *        var propValue = props[propName];
	   *        if (propValue != null && typeof propValue !== 'string' &&
	   *            !(propValue instanceof URI)) {
	   *          return new Error(
	   *            'Expected a string or an URI for ' + propName + ' in ' +
	   *            componentName
	   *          );
	   *        }
	   *      }
	   *    },
	   *    render: function() {...}
	   *  });
	   *
	   * @internal
	   */

	  var ANONYMOUS = '<<anonymous>>';

	  // Important!
	  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
	  var ReactPropTypes = {
	    array: createPrimitiveTypeChecker('array'),
	    bool: createPrimitiveTypeChecker('boolean'),
	    func: createPrimitiveTypeChecker('function'),
	    number: createPrimitiveTypeChecker('number'),
	    object: createPrimitiveTypeChecker('object'),
	    string: createPrimitiveTypeChecker('string'),
	    symbol: createPrimitiveTypeChecker('symbol'),

	    any: createAnyTypeChecker(),
	    arrayOf: createArrayOfTypeChecker,
	    element: createElementTypeChecker(),
	    instanceOf: createInstanceTypeChecker,
	    node: createNodeChecker(),
	    objectOf: createObjectOfTypeChecker,
	    oneOf: createEnumTypeChecker,
	    oneOfType: createUnionTypeChecker,
	    shape: createShapeTypeChecker,
	    exact: createStrictShapeTypeChecker,
	  };

	  /**
	   * inlined Object.is polyfill to avoid requiring consumers ship their own
	   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	   */
	  /*eslint-disable no-self-compare*/
	  function is(x, y) {
	    // SameValue algorithm
	    if (x === y) {
	      // Steps 1-5, 7-10
	      // Steps 6.b-6.e: +0 != -0
	      return x !== 0 || 1 / x === 1 / y;
	    } else {
	      // Step 6.a: NaN == NaN
	      return x !== x && y !== y;
	    }
	  }
	  /*eslint-enable no-self-compare*/

	  /**
	   * We use an Error-like object for backward compatibility as people may call
	   * PropTypes directly and inspect their output. However, we don't use real
	   * Errors anymore. We don't inspect their stack anyway, and creating them
	   * is prohibitively expensive if they are created too often, such as what
	   * happens in oneOfType() for any type before the one that matched.
	   */
	  function PropTypeError(message) {
	    this.message = message;
	    this.stack = '';
	  }
	  // Make `instanceof Error` still work for returned errors.
	  PropTypeError.prototype = Error.prototype;

	  function createChainableTypeChecker(validate) {
	    if (true) {
	      var manualPropTypeCallCache = {};
	      var manualPropTypeWarningCount = 0;
	    }
	    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
	      componentName = componentName || ANONYMOUS;
	      propFullName = propFullName || propName;

	      if (secret !== ReactPropTypesSecret) {
	        if (throwOnDirectAccess) {
	          // New behavior only for users of `prop-types` package
	          invariant(
	            false,
	            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	            'Use `PropTypes.checkPropTypes()` to call them. ' +
	            'Read more at http://fb.me/use-check-prop-types'
	          );
	        } else if (("production ") !== 'production' && typeof console !== 'undefined') {
	          // Old behavior for people using React.PropTypes
	          var cacheKey = componentName + ':' + propName;
	          if (
	            !manualPropTypeCallCache[cacheKey] &&
	            // Avoid spamming the console because they are often not actionable except for lib authors
	            manualPropTypeWarningCount < 3
	          ) {
	            warning(
	              false,
	              'You are manually calling a React.PropTypes validation ' +
	              'function for the `%s` prop on `%s`. This is deprecated ' +
	              'and will throw in the standalone `prop-types` package. ' +
	              'You may be seeing this warning due to a third-party PropTypes ' +
	              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.',
	              propFullName,
	              componentName
	            );
	            manualPropTypeCallCache[cacheKey] = true;
	            manualPropTypeWarningCount++;
	          }
	        }
	      }
	      if (props[propName] == null) {
	        if (isRequired) {
	          if (props[propName] === null) {
	            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
	          }
	          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
	        }
	        return null;
	      } else {
	        return validate(props, propName, componentName, location, propFullName);
	      }
	    }

	    var chainedCheckType = checkType.bind(null, false);
	    chainedCheckType.isRequired = checkType.bind(null, true);

	    return chainedCheckType;
	  }

	  function createPrimitiveTypeChecker(expectedType) {
	    function validate(props, propName, componentName, location, propFullName, secret) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== expectedType) {
	        // `propValue` being instance of, say, date/regexp, pass the 'object'
	        // check, but we can offer a more precise error message here rather than
	        // 'of type `object`'.
	        var preciseType = getPreciseType(propValue);

	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createAnyTypeChecker() {
	    return createChainableTypeChecker(emptyFunction.thatReturnsNull);
	  }

	  function createArrayOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
	      }
	      var propValue = props[propName];
	      if (!Array.isArray(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
	      }
	      for (var i = 0; i < propValue.length; i++) {
	        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
	        if (error instanceof Error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createElementTypeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      if (!isValidElement(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createInstanceTypeChecker(expectedClass) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!(props[propName] instanceof expectedClass)) {
	        var expectedClassName = expectedClass.name || ANONYMOUS;
	        var actualClassName = getClassName(props[propName]);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createEnumTypeChecker(expectedValues) {
	    if (!Array.isArray(expectedValues)) {
	       true ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
	      return emptyFunction.thatReturnsNull;
	    }

	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      for (var i = 0; i < expectedValues.length; i++) {
	        if (is(propValue, expectedValues[i])) {
	          return null;
	        }
	      }

	      var valuesString = JSON.stringify(expectedValues);
	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createObjectOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
	      }
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
	      }
	      for (var key in propValue) {
	        if (propValue.hasOwnProperty(key)) {
	          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	          if (error instanceof Error) {
	            return error;
	          }
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createUnionTypeChecker(arrayOfTypeCheckers) {
	    if (!Array.isArray(arrayOfTypeCheckers)) {
	       true ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
	      return emptyFunction.thatReturnsNull;
	    }

	    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	      var checker = arrayOfTypeCheckers[i];
	      if (typeof checker !== 'function') {
	        warning(
	          false,
	          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
	          'received %s at index %s.',
	          getPostfixForTypeWarning(checker),
	          i
	        );
	        return emptyFunction.thatReturnsNull;
	      }
	    }

	    function validate(props, propName, componentName, location, propFullName) {
	      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	        var checker = arrayOfTypeCheckers[i];
	        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
	          return null;
	        }
	      }

	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createNodeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!isNode(props[propName])) {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      for (var key in shapeTypes) {
	        var checker = shapeTypes[key];
	        if (!checker) {
	          continue;
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createStrictShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      // We need to check all keys in case some are required but missing from
	      // props.
	      var allKeys = assign({}, props[propName], shapeTypes);
	      for (var key in allKeys) {
	        var checker = shapeTypes[key];
	        if (!checker) {
	          return new PropTypeError(
	            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
	            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
	            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
	          );
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }

	    return createChainableTypeChecker(validate);
	  }

	  function isNode(propValue) {
	    switch (typeof propValue) {
	      case 'number':
	      case 'string':
	      case 'undefined':
	        return true;
	      case 'boolean':
	        return !propValue;
	      case 'object':
	        if (Array.isArray(propValue)) {
	          return propValue.every(isNode);
	        }
	        if (propValue === null || isValidElement(propValue)) {
	          return true;
	        }

	        var iteratorFn = getIteratorFn(propValue);
	        if (iteratorFn) {
	          var iterator = iteratorFn.call(propValue);
	          var step;
	          if (iteratorFn !== propValue.entries) {
	            while (!(step = iterator.next()).done) {
	              if (!isNode(step.value)) {
	                return false;
	              }
	            }
	          } else {
	            // Iterator will provide entry [k,v] tuples rather than values.
	            while (!(step = iterator.next()).done) {
	              var entry = step.value;
	              if (entry) {
	                if (!isNode(entry[1])) {
	                  return false;
	                }
	              }
	            }
	          }
	        } else {
	          return false;
	        }

	        return true;
	      default:
	        return false;
	    }
	  }

	  function isSymbol(propType, propValue) {
	    // Native Symbol.
	    if (propType === 'symbol') {
	      return true;
	    }

	    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
	    if (propValue['@@toStringTag'] === 'Symbol') {
	      return true;
	    }

	    // Fallback for non-spec compliant Symbols which are polyfilled.
	    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
	      return true;
	    }

	    return false;
	  }

	  // Equivalent of `typeof` but with special handling for array and regexp.
	  function getPropType(propValue) {
	    var propType = typeof propValue;
	    if (Array.isArray(propValue)) {
	      return 'array';
	    }
	    if (propValue instanceof RegExp) {
	      // Old webkits (at least until Android 4.0) return 'function' rather than
	      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
	      // passes PropTypes.object.
	      return 'object';
	    }
	    if (isSymbol(propType, propValue)) {
	      return 'symbol';
	    }
	    return propType;
	  }

	  // This handles more types than `getPropType`. Only used for error messages.
	  // See `createPrimitiveTypeChecker`.
	  function getPreciseType(propValue) {
	    if (typeof propValue === 'undefined' || propValue === null) {
	      return '' + propValue;
	    }
	    var propType = getPropType(propValue);
	    if (propType === 'object') {
	      if (propValue instanceof Date) {
	        return 'date';
	      } else if (propValue instanceof RegExp) {
	        return 'regexp';
	      }
	    }
	    return propType;
	  }

	  // Returns a string that is postfixed to a warning about an invalid type.
	  // For example, "undefined" or "of type array"
	  function getPostfixForTypeWarning(value) {
	    var type = getPreciseType(value);
	    switch (type) {
	      case 'array':
	      case 'object':
	        return 'an ' + type;
	      case 'boolean':
	      case 'date':
	      case 'regexp':
	        return 'a ' + type;
	      default:
	        return type;
	    }
	  }

	  // Returns class name of the object, if any.
	  function getClassName(propValue) {
	    if (!propValue.constructor || !propValue.constructor.name) {
	      return ANONYMOUS;
	    }
	    return propValue.constructor.name;
	  }

	  ReactPropTypes.checkPropTypes = checkPropTypes;
	  ReactPropTypes.PropTypes = ReactPropTypes;

	  return ReactPropTypes;
	};


/***/ },
/* 62 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * @typechecks
	 * 
	 */

	/*eslint-disable no-self-compare */

	'use strict';

	var hasOwnProperty = Object.prototype.hasOwnProperty;

	/**
	 * inlined Object.is polyfill to avoid requiring consumers ship their own
	 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	 */
	function is(x, y) {
	  // SameValue algorithm
	  if (x === y) {
	    // Steps 1-5, 7-10
	    // Steps 6.b-6.e: +0 != -0
	    // Added the nonzero y check to make Flow happy, but it is redundant
	    return x !== 0 || y !== 0 || 1 / x === 1 / y;
	  } else {
	    // Step 6.a: NaN == NaN
	    return x !== x && y !== y;
	  }
	}

	/**
	 * Performs equality by iterating through keys on an object and returning false
	 * when any key has values which are not strictly equal between the arguments.
	 * Returns true when the values of all keys are strictly equal.
	 */
	function shallowEqual(objA, objB) {
	  if (is(objA, objB)) {
	    return true;
	  }

	  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
	    return false;
	  }

	  var keysA = Object.keys(objA);
	  var keysB = Object.keys(objB);

	  if (keysA.length !== keysB.length) {
	    return false;
	  }

	  // Test for A's keys different from B.
	  for (var i = 0; i < keysA.length; i++) {
	    if (!hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
	      return false;
	    }
	  }

	  return true;
	}

	module.exports = shallowEqual;

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */

	var isTextNode = __webpack_require__(64);

	/*eslint-disable no-bitwise */

	/**
	 * Checks if a given DOM node contains or is another DOM node.
	 */
	function containsNode(outerNode, innerNode) {
	  if (!outerNode || !innerNode) {
	    return false;
	  } else if (outerNode === innerNode) {
	    return true;
	  } else if (isTextNode(outerNode)) {
	    return false;
	  } else if (isTextNode(innerNode)) {
	    return containsNode(outerNode, innerNode.parentNode);
	  } else if ('contains' in outerNode) {
	    return outerNode.contains(innerNode);
	  } else if (outerNode.compareDocumentPosition) {
	    return !!(outerNode.compareDocumentPosition(innerNode) & 16);
	  } else {
	    return false;
	  }
	}

	module.exports = containsNode;

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * @typechecks
	 */

	var isNode = __webpack_require__(65);

	/**
	 * @param {*} object The object to check.
	 * @return {boolean} Whether or not the object is a DOM text node.
	 */
	function isTextNode(object) {
	  return isNode(object) && object.nodeType == 3;
	}

	module.exports = isTextNode;

/***/ },
/* 65 */
/***/ function(module, exports) {

	'use strict';

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * @typechecks
	 */

	/**
	 * @param {*} object The object to check.
	 * @return {boolean} Whether or not the object is a DOM node.
	 */
	function isNode(object) {
	  var doc = object ? object.ownerDocument || object : document;
	  var defaultView = doc.defaultView || window;
	  return !!(object && (typeof defaultView.Node === 'function' ? object instanceof defaultView.Node : typeof object === 'object' && typeof object.nodeType === 'number' && typeof object.nodeName === 'string'));
	}

	module.exports = isNode;

/***/ },
/* 66 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */

	'use strict';

	/**
	 * @param {DOMElement} node input/textarea to focus
	 */

	function focusNode(node) {
	  // IE8 can throw "Can't move focus to the control because it is invisible,
	  // not enabled, or of a type that does not accept the focus." for all kinds of
	  // reasons that are too expensive and fragile to test.
	  try {
	    node.focus();
	  } catch (e) {}
	}

	module.exports = focusNode;

/***/ },
/* 67 */
/***/ function(module, exports) {

	'use strict';

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * @typechecks
	 */

	/* eslint-disable fb-www/typeof-undefined */

	/**
	 * Same as document.activeElement but wraps in a try-catch block. In IE it is
	 * not safe to call document.activeElement if there is nothing focused.
	 *
	 * The activeElement will be null only if the document or document body is not
	 * yet defined.
	 *
	 * @param {?DOMDocument} doc Defaults to current document.
	 * @return {?DOMElement}
	 */
	function getActiveElement(doc) /*?DOMElement*/{
	  doc = doc || (typeof document !== 'undefined' ? document : undefined);
	  if (typeof doc === 'undefined') {
	    return null;
	  }
	  try {
	    return doc.activeElement || doc.body;
	  } catch (e) {
	    return doc.body;
	  }
	}

	module.exports = getActiveElement;

/***/ },
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;

	exports.default = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

/***/ },
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _defineProperty = __webpack_require__(78);

	var _defineProperty2 = _interopRequireDefault(_defineProperty);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (obj, key, value) {
	  if (key in obj) {
	    (0, _defineProperty2.default)(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }

	  return obj;
	};

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(79), __esModule: true };

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(80);
	var $Object = __webpack_require__(7).Object;
	module.exports = function defineProperty(it, key, desc) {
	  return $Object.defineProperty(it, key, desc);
	};


/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(5);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(15), 'Object', { defineProperty: __webpack_require__(11).f });


/***/ },
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */
/***/ function(module, exports) {

	'use strict';

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */

	var aStackPool = [];
	var bStackPool = [];

	/**
	 * Checks if two values are equal. Values may be primitives, arrays, or objects.
	 * Returns true if both arguments have the same keys and values.
	 *
	 * @see http://underscorejs.org
	 * @copyright 2009-2013 Jeremy Ashkenas, DocumentCloud Inc.
	 * @license MIT
	 */
	function areEqual(a, b) {
	  var aStack = aStackPool.length ? aStackPool.pop() : [];
	  var bStack = bStackPool.length ? bStackPool.pop() : [];
	  var result = eq(a, b, aStack, bStack);
	  aStack.length = 0;
	  bStack.length = 0;
	  aStackPool.push(aStack);
	  bStackPool.push(bStack);
	  return result;
	}

	function eq(a, b, aStack, bStack) {
	  if (a === b) {
	    // Identical objects are equal. `0 === -0`, but they aren't identical.
	    return a !== 0 || 1 / a == 1 / b;
	  }
	  if (a == null || b == null) {
	    // a or b can be `null` or `undefined`
	    return false;
	  }
	  if (typeof a != 'object' || typeof b != 'object') {
	    return false;
	  }
	  var objToStr = Object.prototype.toString;
	  var className = objToStr.call(a);
	  if (className != objToStr.call(b)) {
	    return false;
	  }
	  switch (className) {
	    case '[object String]':
	      return a == String(b);
	    case '[object Number]':
	      return isNaN(a) || isNaN(b) ? false : a == Number(b);
	    case '[object Date]':
	    case '[object Boolean]':
	      return +a == +b;
	    case '[object RegExp]':
	      return a.source == b.source && a.global == b.global && a.multiline == b.multiline && a.ignoreCase == b.ignoreCase;
	  }
	  // Assume equality for cyclic structures.
	  var length = aStack.length;
	  while (length--) {
	    if (aStack[length] == a) {
	      return bStack[length] == b;
	    }
	  }
	  aStack.push(a);
	  bStack.push(b);
	  var size = 0;
	  // Recursively compare objects and arrays.
	  if (className === '[object Array]') {
	    size = a.length;
	    if (size !== b.length) {
	      return false;
	    }
	    // Deep compare the contents, ignoring non-numeric properties.
	    while (size--) {
	      if (!eq(a[size], b[size], aStack, bStack)) {
	        return false;
	      }
	    }
	  } else {
	    if (a.constructor !== b.constructor) {
	      return false;
	    }
	    if (a.hasOwnProperty('valueOf') && b.hasOwnProperty('valueOf')) {
	      return a.valueOf() == b.valueOf();
	    }
	    var keys = Object.keys(a);
	    if (keys.length != Object.keys(b).length) {
	      return false;
	    }
	    for (var i = 0; i < keys.length; i++) {
	      if (!eq(a[keys[i]], b[keys[i]], aStack, bStack)) {
	        return false;
	      }
	    }
	  }
	  aStack.pop();
	  bStack.pop();
	  return true;
	}

	module.exports = areEqual;

/***/ },
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * @typechecks
	 * 
	 */

	/**
	 * Removes an element from an array.
	 */
	function removeFromArray(array, element) {
	  var index = array.indexOf(element);
	  if (index !== -1) {
	    array.splice(index, 1);
	  }
	}

	module.exports = removeFromArray;

/***/ },
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * @typechecks
	 */

	'use strict';

	var hasOwnProperty = Object.prototype.hasOwnProperty;

	/**
	 * Executes the provided `callback` once for each enumerable own property in the
	 * object. The `callback` is invoked with three arguments:
	 *
	 *  - the property value
	 *  - the property name
	 *  - the object being traversed
	 *
	 * Properties that are added after the call to `forEachObject` will not be
	 * visited by `callback`. If the values of existing properties are changed, the
	 * value passed to `callback` will be the value at the time `forEachObject`
	 * visits them. Properties that are deleted before being visited are not
	 * visited.
	 *
	 * @param {?object} object
	 * @param {function} callback
	 * @param {*} context
	 */
	function forEachObject(object, callback, context) {
	  for (var name in object) {
	    if (hasOwnProperty.call(object, name)) {
	      callback.call(context, object[name], name, object);
	    }
	  }
	}

	module.exports = forEachObject;

/***/ },
/* 112 */,
/* 113 */,
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _from = __webpack_require__(115);

	var _from2 = _interopRequireDefault(_from);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (arr) {
	  if (Array.isArray(arr)) {
	    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
	      arr2[i] = arr[i];
	    }

	    return arr2;
	  } else {
	    return (0, _from2.default)(arr);
	  }
	};

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(116), __esModule: true };

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(117);
	__webpack_require__(130);
	module.exports = __webpack_require__(7).Array.from;


/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at = __webpack_require__(118)(true);

	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(119)(String, 'String', function (iterated) {
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function () {
	  var O = this._t;
	  var index = this._i;
	  var point;
	  if (index >= O.length) return { value: undefined, done: true };
	  point = $at(O, index);
	  this._i += point.length;
	  return { value: point, done: false };
	});


/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(30);
	var defined = __webpack_require__(27);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function (TO_STRING) {
	  return function (that, pos) {
	    var s = String(defined(that));
	    var i = toInteger(pos);
	    var l = s.length;
	    var a, b;
	    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};


/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY = __webpack_require__(120);
	var $export = __webpack_require__(5);
	var redefine = __webpack_require__(121);
	var hide = __webpack_require__(10);
	var has = __webpack_require__(23);
	var Iterators = __webpack_require__(122);
	var $iterCreate = __webpack_require__(123);
	var setToStringTag = __webpack_require__(127);
	var getPrototypeOf = __webpack_require__(129);
	var ITERATOR = __webpack_require__(128)('iterator');
	var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
	var FF_ITERATOR = '@@iterator';
	var KEYS = 'keys';
	var VALUES = 'values';

	var returnThis = function () { return this; };

	module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function (kind) {
	    if (!BUGGY && kind in proto) return proto[kind];
	    switch (kind) {
	      case KEYS: return function keys() { return new Constructor(this, kind); };
	      case VALUES: return function values() { return new Constructor(this, kind); };
	    } return function entries() { return new Constructor(this, kind); };
	  };
	  var TAG = NAME + ' Iterator';
	  var DEF_VALUES = DEFAULT == VALUES;
	  var VALUES_BUG = false;
	  var proto = Base.prototype;
	  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
	  var $default = $native || getMethod(DEFAULT);
	  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
	  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
	  var methods, key, IteratorPrototype;
	  // Fix native
	  if ($anyNative) {
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
	    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if (DEF_VALUES && $native && $native.name !== VALUES) {
	    VALUES_BUG = true;
	    $default = function values() { return $native.call(this); };
	  }
	  // Define iterator
	  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG] = returnThis;
	  if (DEFAULT) {
	    methods = {
	      values: DEF_VALUES ? $default : getMethod(VALUES),
	      keys: IS_SET ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if (FORCED) for (key in methods) {
	      if (!(key in proto)) redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};


/***/ },
/* 120 */
/***/ function(module, exports) {

	module.exports = true;


/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(10);


/***/ },
/* 122 */
/***/ function(module, exports) {

	module.exports = {};


/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var create = __webpack_require__(124);
	var descriptor = __webpack_require__(19);
	var setToStringTag = __webpack_require__(127);
	var IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(10)(IteratorPrototype, __webpack_require__(128)('iterator'), function () { return this; });

	module.exports = function (Constructor, NAME, next) {
	  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
	  setToStringTag(Constructor, NAME + ' Iterator');
	};


/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject = __webpack_require__(12);
	var dPs = __webpack_require__(125);
	var enumBugKeys = __webpack_require__(35);
	var IE_PROTO = __webpack_require__(32)('IE_PROTO');
	var Empty = function () { /* empty */ };
	var PROTOTYPE = 'prototype';

	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function () {
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(17)('iframe');
	  var i = enumBugKeys.length;
	  var lt = '<';
	  var gt = '>';
	  var iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(126).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};

	module.exports = Object.create || function create(O, Properties) {
	  var result;
	  if (O !== null) {
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty();
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};


/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	var dP = __webpack_require__(11);
	var anObject = __webpack_require__(12);
	var getKeys = __webpack_require__(21);

	module.exports = __webpack_require__(15) ? Object.defineProperties : function defineProperties(O, Properties) {
	  anObject(O);
	  var keys = getKeys(Properties);
	  var length = keys.length;
	  var i = 0;
	  var P;
	  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};


/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	var document = __webpack_require__(6).document;
	module.exports = document && document.documentElement;


/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(11).f;
	var has = __webpack_require__(23);
	var TAG = __webpack_require__(128)('toStringTag');

	module.exports = function (it, tag, stat) {
	  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
	};


/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	var store = __webpack_require__(33)('wks');
	var uid = __webpack_require__(34);
	var Symbol = __webpack_require__(6).Symbol;
	var USE_SYMBOL = typeof Symbol == 'function';

	var $exports = module.exports = function (name) {
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};

	$exports.store = store;


/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has = __webpack_require__(23);
	var toObject = __webpack_require__(38);
	var IE_PROTO = __webpack_require__(32)('IE_PROTO');
	var ObjectProto = Object.prototype;

	module.exports = Object.getPrototypeOf || function (O) {
	  O = toObject(O);
	  if (has(O, IE_PROTO)) return O[IE_PROTO];
	  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};


/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ctx = __webpack_require__(8);
	var $export = __webpack_require__(5);
	var toObject = __webpack_require__(38);
	var call = __webpack_require__(131);
	var isArrayIter = __webpack_require__(132);
	var toLength = __webpack_require__(29);
	var createProperty = __webpack_require__(133);
	var getIterFn = __webpack_require__(134);

	$export($export.S + $export.F * !__webpack_require__(136)(function (iter) { Array.from(iter); }), 'Array', {
	  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
	    var O = toObject(arrayLike);
	    var C = typeof this == 'function' ? this : Array;
	    var aLen = arguments.length;
	    var mapfn = aLen > 1 ? arguments[1] : undefined;
	    var mapping = mapfn !== undefined;
	    var index = 0;
	    var iterFn = getIterFn(O);
	    var length, result, step, iterator;
	    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
	    // if object isn't iterable or it's array with default iterator - use simple case
	    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
	      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
	        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
	      }
	    } else {
	      length = toLength(O.length);
	      for (result = new C(length); length > index; index++) {
	        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
	      }
	    }
	    result.length = index;
	    return result;
	  }
	});


/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(12);
	module.exports = function (iterator, fn, value, entries) {
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch (e) {
	    var ret = iterator['return'];
	    if (ret !== undefined) anObject(ret.call(iterator));
	    throw e;
	  }
	};


/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators = __webpack_require__(122);
	var ITERATOR = __webpack_require__(128)('iterator');
	var ArrayProto = Array.prototype;

	module.exports = function (it) {
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};


/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $defineProperty = __webpack_require__(11);
	var createDesc = __webpack_require__(19);

	module.exports = function (object, index, value) {
	  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
	  else object[index] = value;
	};


/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	var classof = __webpack_require__(135);
	var ITERATOR = __webpack_require__(128)('iterator');
	var Iterators = __webpack_require__(122);
	module.exports = __webpack_require__(7).getIteratorMethod = function (it) {
	  if (it != undefined) return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};


/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(26);
	var TAG = __webpack_require__(128)('toStringTag');
	// ES3 wrong here
	var ARG = cof(function () { return arguments; }()) == 'Arguments';

	// fallback for IE11 Script Access Denied error
	var tryGet = function (it, key) {
	  try {
	    return it[key];
	  } catch (e) { /* empty */ }
	};

	module.exports = function (it) {
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};


/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	var ITERATOR = __webpack_require__(128)('iterator');
	var SAFE_CLOSING = false;

	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function () { SAFE_CLOSING = true; };
	  // eslint-disable-next-line no-throw-literal
	  Array.from(riter, function () { throw 2; });
	} catch (e) { /* empty */ }

	module.exports = function (exec, skipClosing) {
	  if (!skipClosing && !SAFE_CLOSING) return false;
	  var safe = false;
	  try {
	    var arr = [7];
	    var iter = arr[ITERATOR]();
	    iter.next = function () { return { done: safe = true }; };
	    arr[ITERATOR] = function () { return iter; };
	    exec(arr);
	  } catch (e) { /* empty */ }
	  return safe;
	};


/***/ },
/* 137 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * @typechecks
	 */

	/**
	 * Simple function for formatting strings.
	 *
	 * Replaces placeholders with values passed as extra arguments
	 *
	 * @param {string} format the base string
	 * @param ...args the values to insert
	 * @return {string} the replaced string
	 */
	function sprintf(format) {
	  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	    args[_key - 1] = arguments[_key];
	  }

	  var index = 0;
	  return format.replace(/%s/g, function (match) {
	    return args[index++];
	  });
	}

	module.exports = sprintf;

/***/ },
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var Promise = __webpack_require__(149);

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */

	var resolvedPromise = Promise.resolve();

	/**
	 * An alternative to setImmediate based on Promise.
	 */
	function resolveImmediate(callback) {
	  resolvedPromise.then(callback)["catch"](throwNext);
	}

	function throwNext(error) {
	  setTimeout(function () {
	    throw error;
	  }, 0);
	}

	module.exports = resolveImmediate;

/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */

	module.exports = __webpack_require__(150);

/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(151)


/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(152);
	__webpack_require__(154);
	__webpack_require__(155);
	__webpack_require__(156);
	__webpack_require__(157);
	__webpack_require__(159);


/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var asap = __webpack_require__(153);

	function noop() {}

	// States:
	//
	// 0 - pending
	// 1 - fulfilled with _value
	// 2 - rejected with _value
	// 3 - adopted the state of another promise, _value
	//
	// once the state is no longer pending (0) it is immutable

	// All `_` prefixed properties will be reduced to `_{random number}`
	// at build time to obfuscate them and discourage their use.
	// We don't use symbols or Object.defineProperty to fully hide them
	// because the performance isn't good enough.


	// to avoid using try/catch inside critical functions, we
	// extract them to here.
	var LAST_ERROR = null;
	var IS_ERROR = {};
	function getThen(obj) {
	  try {
	    return obj.then;
	  } catch (ex) {
	    LAST_ERROR = ex;
	    return IS_ERROR;
	  }
	}

	function tryCallOne(fn, a) {
	  try {
	    return fn(a);
	  } catch (ex) {
	    LAST_ERROR = ex;
	    return IS_ERROR;
	  }
	}
	function tryCallTwo(fn, a, b) {
	  try {
	    fn(a, b);
	  } catch (ex) {
	    LAST_ERROR = ex;
	    return IS_ERROR;
	  }
	}

	module.exports = Promise;

	function Promise(fn) {
	  if (typeof this !== 'object') {
	    throw new TypeError('Promises must be constructed via new');
	  }
	  if (typeof fn !== 'function') {
	    throw new TypeError('Promise constructor\'s argument is not a function');
	  }
	  this._40 = 0;
	  this._65 = 0;
	  this._55 = null;
	  this._72 = null;
	  if (fn === noop) return;
	  doResolve(fn, this);
	}
	Promise._37 = null;
	Promise._87 = null;
	Promise._61 = noop;

	Promise.prototype.then = function(onFulfilled, onRejected) {
	  if (this.constructor !== Promise) {
	    return safeThen(this, onFulfilled, onRejected);
	  }
	  var res = new Promise(noop);
	  handle(this, new Handler(onFulfilled, onRejected, res));
	  return res;
	};

	function safeThen(self, onFulfilled, onRejected) {
	  return new self.constructor(function (resolve, reject) {
	    var res = new Promise(noop);
	    res.then(resolve, reject);
	    handle(self, new Handler(onFulfilled, onRejected, res));
	  });
	}
	function handle(self, deferred) {
	  while (self._65 === 3) {
	    self = self._55;
	  }
	  if (Promise._37) {
	    Promise._37(self);
	  }
	  if (self._65 === 0) {
	    if (self._40 === 0) {
	      self._40 = 1;
	      self._72 = deferred;
	      return;
	    }
	    if (self._40 === 1) {
	      self._40 = 2;
	      self._72 = [self._72, deferred];
	      return;
	    }
	    self._72.push(deferred);
	    return;
	  }
	  handleResolved(self, deferred);
	}

	function handleResolved(self, deferred) {
	  asap(function() {
	    var cb = self._65 === 1 ? deferred.onFulfilled : deferred.onRejected;
	    if (cb === null) {
	      if (self._65 === 1) {
	        resolve(deferred.promise, self._55);
	      } else {
	        reject(deferred.promise, self._55);
	      }
	      return;
	    }
	    var ret = tryCallOne(cb, self._55);
	    if (ret === IS_ERROR) {
	      reject(deferred.promise, LAST_ERROR);
	    } else {
	      resolve(deferred.promise, ret);
	    }
	  });
	}
	function resolve(self, newValue) {
	  // Promise Resolution Procedure: https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure
	  if (newValue === self) {
	    return reject(
	      self,
	      new TypeError('A promise cannot be resolved with itself.')
	    );
	  }
	  if (
	    newValue &&
	    (typeof newValue === 'object' || typeof newValue === 'function')
	  ) {
	    var then = getThen(newValue);
	    if (then === IS_ERROR) {
	      return reject(self, LAST_ERROR);
	    }
	    if (
	      then === self.then &&
	      newValue instanceof Promise
	    ) {
	      self._65 = 3;
	      self._55 = newValue;
	      finale(self);
	      return;
	    } else if (typeof then === 'function') {
	      doResolve(then.bind(newValue), self);
	      return;
	    }
	  }
	  self._65 = 1;
	  self._55 = newValue;
	  finale(self);
	}

	function reject(self, newValue) {
	  self._65 = 2;
	  self._55 = newValue;
	  if (Promise._87) {
	    Promise._87(self, newValue);
	  }
	  finale(self);
	}
	function finale(self) {
	  if (self._40 === 1) {
	    handle(self, self._72);
	    self._72 = null;
	  }
	  if (self._40 === 2) {
	    for (var i = 0; i < self._72.length; i++) {
	      handle(self, self._72[i]);
	    }
	    self._72 = null;
	  }
	}

	function Handler(onFulfilled, onRejected, promise){
	  this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
	  this.onRejected = typeof onRejected === 'function' ? onRejected : null;
	  this.promise = promise;
	}

	/**
	 * Take a potentially misbehaving resolver function and make sure
	 * onFulfilled and onRejected are only called once.
	 *
	 * Makes no guarantees about asynchrony.
	 */
	function doResolve(fn, promise) {
	  var done = false;
	  var res = tryCallTwo(fn, function (value) {
	    if (done) return;
	    done = true;
	    resolve(promise, value);
	  }, function (reason) {
	    if (done) return;
	    done = true;
	    reject(promise, reason);
	  });
	  if (!done && res === IS_ERROR) {
	    done = true;
	    reject(promise, LAST_ERROR);
	  }
	}


/***/ },
/* 153 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {"use strict";

	// Use the fastest means possible to execute a task in its own turn, with
	// priority over other events including IO, animation, reflow, and redraw
	// events in browsers.
	//
	// An exception thrown by a task will permanently interrupt the processing of
	// subsequent tasks. The higher level `asap` function ensures that if an
	// exception is thrown by a task, that the task queue will continue flushing as
	// soon as possible, but if you use `rawAsap` directly, you are responsible to
	// either ensure that no exceptions are thrown from your task, or to manually
	// call `rawAsap.requestFlush` if an exception is thrown.
	module.exports = rawAsap;
	function rawAsap(task) {
	    if (!queue.length) {
	        requestFlush();
	        flushing = true;
	    }
	    // Equivalent to push, but avoids a function call.
	    queue[queue.length] = task;
	}

	var queue = [];
	// Once a flush has been requested, no further calls to `requestFlush` are
	// necessary until the next `flush` completes.
	var flushing = false;
	// `requestFlush` is an implementation-specific method that attempts to kick
	// off a `flush` event as quickly as possible. `flush` will attempt to exhaust
	// the event queue before yielding to the browser's own event loop.
	var requestFlush;
	// The position of the next task to execute in the task queue. This is
	// preserved between calls to `flush` so that it can be resumed if
	// a task throws an exception.
	var index = 0;
	// If a task schedules additional tasks recursively, the task queue can grow
	// unbounded. To prevent memory exhaustion, the task queue will periodically
	// truncate already-completed tasks.
	var capacity = 1024;

	// The flush function processes all tasks that have been scheduled with
	// `rawAsap` unless and until one of those tasks throws an exception.
	// If a task throws an exception, `flush` ensures that its state will remain
	// consistent and will resume where it left off when called again.
	// However, `flush` does not make any arrangements to be called again if an
	// exception is thrown.
	function flush() {
	    while (index < queue.length) {
	        var currentIndex = index;
	        // Advance the index before calling the task. This ensures that we will
	        // begin flushing on the next task the task throws an error.
	        index = index + 1;
	        queue[currentIndex].call();
	        // Prevent leaking memory for long chains of recursive calls to `asap`.
	        // If we call `asap` within tasks scheduled by `asap`, the queue will
	        // grow, but to avoid an O(n) walk for every task we execute, we don't
	        // shift tasks off the queue after they have been executed.
	        // Instead, we periodically shift 1024 tasks off the queue.
	        if (index > capacity) {
	            // Manually shift all values starting at the index back to the
	            // beginning of the queue.
	            for (var scan = 0, newLength = queue.length - index; scan < newLength; scan++) {
	                queue[scan] = queue[scan + index];
	            }
	            queue.length -= index;
	            index = 0;
	        }
	    }
	    queue.length = 0;
	    index = 0;
	    flushing = false;
	}

	// `requestFlush` is implemented using a strategy based on data collected from
	// every available SauceLabs Selenium web driver worker at time of writing.
	// https://docs.google.com/spreadsheets/d/1mG-5UYGup5qxGdEMWkhP6BWCz053NUb2E1QoUTU16uA/edit#gid=783724593

	// Safari 6 and 6.1 for desktop, iPad, and iPhone are the only browsers that
	// have WebKitMutationObserver but not un-prefixed MutationObserver.
	// Must use `global` or `self` instead of `window` to work in both frames and web
	// workers. `global` is a provision of Browserify, Mr, Mrs, or Mop.

	/* globals self */
	var scope = typeof global !== "undefined" ? global : self;
	var BrowserMutationObserver = scope.MutationObserver || scope.WebKitMutationObserver;

	// MutationObservers are desirable because they have high priority and work
	// reliably everywhere they are implemented.
	// They are implemented in all modern browsers.
	//
	// - Android 4-4.3
	// - Chrome 26-34
	// - Firefox 14-29
	// - Internet Explorer 11
	// - iPad Safari 6-7.1
	// - iPhone Safari 7-7.1
	// - Safari 6-7
	if (typeof BrowserMutationObserver === "function") {
	    requestFlush = makeRequestCallFromMutationObserver(flush);

	// MessageChannels are desirable because they give direct access to the HTML
	// task queue, are implemented in Internet Explorer 10, Safari 5.0-1, and Opera
	// 11-12, and in web workers in many engines.
	// Although message channels yield to any queued rendering and IO tasks, they
	// would be better than imposing the 4ms delay of timers.
	// However, they do not work reliably in Internet Explorer or Safari.

	// Internet Explorer 10 is the only browser that has setImmediate but does
	// not have MutationObservers.
	// Although setImmediate yields to the browser's renderer, it would be
	// preferrable to falling back to setTimeout since it does not have
	// the minimum 4ms penalty.
	// Unfortunately there appears to be a bug in Internet Explorer 10 Mobile (and
	// Desktop to a lesser extent) that renders both setImmediate and
	// MessageChannel useless for the purposes of ASAP.
	// https://github.com/kriskowal/q/issues/396

	// Timers are implemented universally.
	// We fall back to timers in workers in most engines, and in foreground
	// contexts in the following browsers.
	// However, note that even this simple case requires nuances to operate in a
	// broad spectrum of browsers.
	//
	// - Firefox 3-13
	// - Internet Explorer 6-9
	// - iPad Safari 4.3
	// - Lynx 2.8.7
	} else {
	    requestFlush = makeRequestCallFromTimer(flush);
	}

	// `requestFlush` requests that the high priority event queue be flushed as
	// soon as possible.
	// This is useful to prevent an error thrown in a task from stalling the event
	// queue if the exception handled by Node.js’s
	// `process.on("uncaughtException")` or by a domain.
	rawAsap.requestFlush = requestFlush;

	// To request a high priority event, we induce a mutation observer by toggling
	// the text of a text node between "1" and "-1".
	function makeRequestCallFromMutationObserver(callback) {
	    var toggle = 1;
	    var observer = new BrowserMutationObserver(callback);
	    var node = document.createTextNode("");
	    observer.observe(node, {characterData: true});
	    return function requestCall() {
	        toggle = -toggle;
	        node.data = toggle;
	    };
	}

	// The message channel technique was discovered by Malte Ubl and was the
	// original foundation for this library.
	// http://www.nonblocking.io/2011/06/windownexttick.html

	// Safari 6.0.5 (at least) intermittently fails to create message ports on a
	// page's first load. Thankfully, this version of Safari supports
	// MutationObservers, so we don't need to fall back in that case.

	// function makeRequestCallFromMessageChannel(callback) {
	//     var channel = new MessageChannel();
	//     channel.port1.onmessage = callback;
	//     return function requestCall() {
	//         channel.port2.postMessage(0);
	//     };
	// }

	// For reasons explained above, we are also unable to use `setImmediate`
	// under any circumstances.
	// Even if we were, there is another bug in Internet Explorer 10.
	// It is not sufficient to assign `setImmediate` to `requestFlush` because
	// `setImmediate` must be called *by name* and therefore must be wrapped in a
	// closure.
	// Never forget.

	// function makeRequestCallFromSetImmediate(callback) {
	//     return function requestCall() {
	//         setImmediate(callback);
	//     };
	// }

	// Safari 6.0 has a problem where timers will get lost while the user is
	// scrolling. This problem does not impact ASAP because Safari 6.0 supports
	// mutation observers, so that implementation is used instead.
	// However, if we ever elect to use timers in Safari, the prevalent work-around
	// is to add a scroll event listener that calls for a flush.

	// `setTimeout` does not call the passed callback if the delay is less than
	// approximately 7 in web workers in Firefox 8 through 18, and sometimes not
	// even then.

	function makeRequestCallFromTimer(callback) {
	    return function requestCall() {
	        // We dispatch a timeout with a specified delay of 0 for engines that
	        // can reliably accommodate that request. This will usually be snapped
	        // to a 4 milisecond delay, but once we're flushing, there's no delay
	        // between events.
	        var timeoutHandle = setTimeout(handleTimer, 0);
	        // However, since this timer gets frequently dropped in Firefox
	        // workers, we enlist an interval handle that will try to fire
	        // an event 20 times per second until it succeeds.
	        var intervalHandle = setInterval(handleTimer, 50);

	        function handleTimer() {
	            // Whichever timer succeeds will cancel both timers and
	            // execute the callback.
	            clearTimeout(timeoutHandle);
	            clearInterval(intervalHandle);
	            callback();
	        }
	    };
	}

	// This is for `asap.js` only.
	// Its name will be periodically randomized to break any code that depends on
	// its existence.
	rawAsap.makeRequestCallFromTimer = makeRequestCallFromTimer;

	// ASAP was originally a nextTick shim included in Q. This was factored out
	// into this ASAP package. It was later adapted to RSVP which made further
	// amendments. These decisions, particularly to marginalize MessageChannel and
	// to capture the MutationObserver implementation in a closure, were integrated
	// back into ASAP proper.
	// https://github.com/tildeio/rsvp.js/blob/cddf7232546a9cf858524b75cde6f9edf72620a7/lib/rsvp/asap.js

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Promise = __webpack_require__(152);

	module.exports = Promise;
	Promise.prototype.done = function (onFulfilled, onRejected) {
	  var self = arguments.length ? this.then.apply(this, arguments) : this;
	  self.then(null, function (err) {
	    setTimeout(function () {
	      throw err;
	    }, 0);
	  });
	};


/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Promise = __webpack_require__(152);

	module.exports = Promise;
	Promise.prototype['finally'] = function (f) {
	  return this.then(function (value) {
	    return Promise.resolve(f()).then(function () {
	      return value;
	    });
	  }, function (err) {
	    return Promise.resolve(f()).then(function () {
	      throw err;
	    });
	  });
	};


/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	//This file contains the ES6 extensions to the core Promises/A+ API

	var Promise = __webpack_require__(152);

	module.exports = Promise;

	/* Static Functions */

	var TRUE = valuePromise(true);
	var FALSE = valuePromise(false);
	var NULL = valuePromise(null);
	var UNDEFINED = valuePromise(undefined);
	var ZERO = valuePromise(0);
	var EMPTYSTRING = valuePromise('');

	function valuePromise(value) {
	  var p = new Promise(Promise._61);
	  p._65 = 1;
	  p._55 = value;
	  return p;
	}
	Promise.resolve = function (value) {
	  if (value instanceof Promise) return value;

	  if (value === null) return NULL;
	  if (value === undefined) return UNDEFINED;
	  if (value === true) return TRUE;
	  if (value === false) return FALSE;
	  if (value === 0) return ZERO;
	  if (value === '') return EMPTYSTRING;

	  if (typeof value === 'object' || typeof value === 'function') {
	    try {
	      var then = value.then;
	      if (typeof then === 'function') {
	        return new Promise(then.bind(value));
	      }
	    } catch (ex) {
	      return new Promise(function (resolve, reject) {
	        reject(ex);
	      });
	    }
	  }
	  return valuePromise(value);
	};

	Promise.all = function (arr) {
	  var args = Array.prototype.slice.call(arr);

	  return new Promise(function (resolve, reject) {
	    if (args.length === 0) return resolve([]);
	    var remaining = args.length;
	    function res(i, val) {
	      if (val && (typeof val === 'object' || typeof val === 'function')) {
	        if (val instanceof Promise && val.then === Promise.prototype.then) {
	          while (val._65 === 3) {
	            val = val._55;
	          }
	          if (val._65 === 1) return res(i, val._55);
	          if (val._65 === 2) reject(val._55);
	          val.then(function (val) {
	            res(i, val);
	          }, reject);
	          return;
	        } else {
	          var then = val.then;
	          if (typeof then === 'function') {
	            var p = new Promise(then.bind(val));
	            p.then(function (val) {
	              res(i, val);
	            }, reject);
	            return;
	          }
	        }
	      }
	      args[i] = val;
	      if (--remaining === 0) {
	        resolve(args);
	      }
	    }
	    for (var i = 0; i < args.length; i++) {
	      res(i, args[i]);
	    }
	  });
	};

	Promise.reject = function (value) {
	  return new Promise(function (resolve, reject) {
	    reject(value);
	  });
	};

	Promise.race = function (values) {
	  return new Promise(function (resolve, reject) {
	    values.forEach(function(value){
	      Promise.resolve(value).then(resolve, reject);
	    });
	  });
	};

	/* Prototype Methods */

	Promise.prototype['catch'] = function (onRejected) {
	  return this.then(null, onRejected);
	};


/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// This file contains then/promise specific extensions that are only useful
	// for node.js interop

	var Promise = __webpack_require__(152);
	var asap = __webpack_require__(158);

	module.exports = Promise;

	/* Static Functions */

	Promise.denodeify = function (fn, argumentCount) {
	  if (
	    typeof argumentCount === 'number' && argumentCount !== Infinity
	  ) {
	    return denodeifyWithCount(fn, argumentCount);
	  } else {
	    return denodeifyWithoutCount(fn);
	  }
	};

	var callbackFn = (
	  'function (err, res) {' +
	  'if (err) { rj(err); } else { rs(res); }' +
	  '}'
	);
	function denodeifyWithCount(fn, argumentCount) {
	  var args = [];
	  for (var i = 0; i < argumentCount; i++) {
	    args.push('a' + i);
	  }
	  var body = [
	    'return function (' + args.join(',') + ') {',
	    'var self = this;',
	    'return new Promise(function (rs, rj) {',
	    'var res = fn.call(',
	    ['self'].concat(args).concat([callbackFn]).join(','),
	    ');',
	    'if (res &&',
	    '(typeof res === "object" || typeof res === "function") &&',
	    'typeof res.then === "function"',
	    ') {rs(res);}',
	    '});',
	    '};'
	  ].join('');
	  return Function(['Promise', 'fn'], body)(Promise, fn);
	}
	function denodeifyWithoutCount(fn) {
	  var fnLength = Math.max(fn.length - 1, 3);
	  var args = [];
	  for (var i = 0; i < fnLength; i++) {
	    args.push('a' + i);
	  }
	  var body = [
	    'return function (' + args.join(',') + ') {',
	    'var self = this;',
	    'var args;',
	    'var argLength = arguments.length;',
	    'if (arguments.length > ' + fnLength + ') {',
	    'args = new Array(arguments.length + 1);',
	    'for (var i = 0; i < arguments.length; i++) {',
	    'args[i] = arguments[i];',
	    '}',
	    '}',
	    'return new Promise(function (rs, rj) {',
	    'var cb = ' + callbackFn + ';',
	    'var res;',
	    'switch (argLength) {',
	    args.concat(['extra']).map(function (_, index) {
	      return (
	        'case ' + (index) + ':' +
	        'res = fn.call(' + ['self'].concat(args.slice(0, index)).concat('cb').join(',') + ');' +
	        'break;'
	      );
	    }).join(''),
	    'default:',
	    'args[argLength] = cb;',
	    'res = fn.apply(self, args);',
	    '}',
	    
	    'if (res &&',
	    '(typeof res === "object" || typeof res === "function") &&',
	    'typeof res.then === "function"',
	    ') {rs(res);}',
	    '});',
	    '};'
	  ].join('');

	  return Function(
	    ['Promise', 'fn'],
	    body
	  )(Promise, fn);
	}

	Promise.nodeify = function (fn) {
	  return function () {
	    var args = Array.prototype.slice.call(arguments);
	    var callback =
	      typeof args[args.length - 1] === 'function' ? args.pop() : null;
	    var ctx = this;
	    try {
	      return fn.apply(this, arguments).nodeify(callback, ctx);
	    } catch (ex) {
	      if (callback === null || typeof callback == 'undefined') {
	        return new Promise(function (resolve, reject) {
	          reject(ex);
	        });
	      } else {
	        asap(function () {
	          callback.call(ctx, ex);
	        })
	      }
	    }
	  }
	};

	Promise.prototype.nodeify = function (callback, ctx) {
	  if (typeof callback != 'function') return this;

	  this.then(function (value) {
	    asap(function () {
	      callback.call(ctx, null, value);
	    });
	  }, function (err) {
	    asap(function () {
	      callback.call(ctx, err);
	    });
	  });
	};


/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	// rawAsap provides everything we need except exception management.
	var rawAsap = __webpack_require__(153);
	// RawTasks are recycled to reduce GC churn.
	var freeTasks = [];
	// We queue errors to ensure they are thrown in right order (FIFO).
	// Array-as-queue is good enough here, since we are just dealing with exceptions.
	var pendingErrors = [];
	var requestErrorThrow = rawAsap.makeRequestCallFromTimer(throwFirstError);

	function throwFirstError() {
	    if (pendingErrors.length) {
	        throw pendingErrors.shift();
	    }
	}

	/**
	 * Calls a task as soon as possible after returning, in its own event, with priority
	 * over other events like animation, reflow, and repaint. An error thrown from an
	 * event will not interrupt, nor even substantially slow down the processing of
	 * other events, but will be rather postponed to a lower priority event.
	 * @param {{call}} task A callable object, typically a function that takes no
	 * arguments.
	 */
	module.exports = asap;
	function asap(task) {
	    var rawTask;
	    if (freeTasks.length) {
	        rawTask = freeTasks.pop();
	    } else {
	        rawTask = new RawTask();
	    }
	    rawTask.task = task;
	    rawAsap(rawTask);
	}

	// We wrap tasks with recyclable task objects.  A task object implements
	// `call`, just like a function.
	function RawTask() {
	    this.task = null;
	}

	// The sole purpose of wrapping the task is to catch the exception and recycle
	// the task object after its single use.
	RawTask.prototype.call = function () {
	    try {
	        this.task.call();
	    } catch (error) {
	        if (asap.onerror) {
	            // This hook exists purely for testing purposes.
	            // Its name will be periodically randomized to break any code that
	            // depends on its existence.
	            asap.onerror(error);
	        } else {
	            // In a web browser, exceptions are not fatal. However, to avoid
	            // slowing down the queue of pending tasks, we rethrow the error in a
	            // lower priority turn.
	            pendingErrors.push(error);
	            requestErrorThrow();
	        }
	    } finally {
	        this.task = null;
	        freeTasks[freeTasks.length] = this;
	    }
	};


/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Promise = __webpack_require__(152);

	module.exports = Promise;
	Promise.enableSynchronous = function () {
	  Promise.prototype.isPending = function() {
	    return this.getState() == 0;
	  };

	  Promise.prototype.isFulfilled = function() {
	    return this.getState() == 1;
	  };

	  Promise.prototype.isRejected = function() {
	    return this.getState() == 2;
	  };

	  Promise.prototype.getValue = function () {
	    if (this._65 === 3) {
	      return this._55.getValue();
	    }

	    if (!this.isFulfilled()) {
	      throw new Error('Cannot get a value of an unfulfilled promise.');
	    }

	    return this._55;
	  };

	  Promise.prototype.getReason = function () {
	    if (this._65 === 3) {
	      return this._55.getReason();
	    }

	    if (!this.isRejected()) {
	      throw new Error('Cannot get a rejection reason of a non-rejected promise.');
	    }

	    return this._55;
	  };

	  Promise.prototype.getState = function () {
	    if (this._65 === 3) {
	      return this._55.getState();
	    }
	    if (this._65 === -1 || this._65 === -2) {
	      return 0;
	    }

	    return this._65;
	  };
	};

	Promise.disableSynchronous = function() {
	  Promise.prototype.isPending = undefined;
	  Promise.prototype.isFulfilled = undefined;
	  Promise.prototype.isRejected = undefined;
	  Promise.prototype.getValue = undefined;
	  Promise.prototype.getReason = undefined;
	  Promise.prototype.getState = undefined;
	};


/***/ },
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */

	'use strict';

	var hasOwnProperty = Object.prototype.hasOwnProperty;

	/**
	 * Executes the provided `callback` once for each enumerable own property in the
	 * object and constructs a new object from the results. The `callback` is
	 * invoked with three arguments:
	 *
	 *  - the property value
	 *  - the property name
	 *  - the object being traversed
	 *
	 * Properties that are added after the call to `mapObject` will not be visited
	 * by `callback`. If the values of existing properties are changed, the value
	 * passed to `callback` will be the value at the time `mapObject` visits them.
	 * Properties that are deleted before being visited are not visited.
	 *
	 * @grep function objectMap()
	 * @grep function objMap()
	 *
	 * @param {?object} object
	 * @param {function} callback
	 * @param {*} context
	 * @return {?object}
	 */
	function mapObject(object, callback, context) {
	  if (!object) {
	    return null;
	  }
	  var result = {};
	  for (var name in object) {
	    if (hasOwnProperty.call(object, name)) {
	      result[name] = callback.call(context, object[name], name, object);
	    }
	  }
	  return result;
	}

	module.exports = mapObject;

/***/ },
/* 170 */,
/* 171 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _typeof2 = __webpack_require__(172);

	var _typeof3 = _interopRequireDefault(_typeof2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }

	  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
	};

/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _iterator = __webpack_require__(173);

	var _iterator2 = _interopRequireDefault(_iterator);

	var _symbol = __webpack_require__(180);

	var _symbol2 = _interopRequireDefault(_symbol);

	var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
	} : function (obj) {
	  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
	};

/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(174), __esModule: true };

/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(117);
	__webpack_require__(175);
	module.exports = __webpack_require__(179).f('iterator');


/***/ },
/* 175 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(176);
	var global = __webpack_require__(6);
	var hide = __webpack_require__(10);
	var Iterators = __webpack_require__(122);
	var TO_STRING_TAG = __webpack_require__(128)('toStringTag');

	var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
	  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
	  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
	  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
	  'TextTrackList,TouchList').split(',');

	for (var i = 0; i < DOMIterables.length; i++) {
	  var NAME = DOMIterables[i];
	  var Collection = global[NAME];
	  var proto = Collection && Collection.prototype;
	  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
	  Iterators[NAME] = Iterators.Array;
	}


/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(177);
	var step = __webpack_require__(178);
	var Iterators = __webpack_require__(122);
	var toIObject = __webpack_require__(24);

	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(119)(Array, 'Array', function (iterated, kind) {
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function () {
	  var O = this._t;
	  var kind = this._k;
	  var index = this._i++;
	  if (!O || index >= O.length) {
	    this._t = undefined;
	    return step(1);
	  }
	  if (kind == 'keys') return step(0, index);
	  if (kind == 'values') return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');

	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;

	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');


/***/ },
/* 177 */
/***/ function(module, exports) {

	module.exports = function () { /* empty */ };


/***/ },
/* 178 */
/***/ function(module, exports) {

	module.exports = function (done, value) {
	  return { value: value, done: !!done };
	};


/***/ },
/* 179 */
/***/ function(module, exports, __webpack_require__) {

	exports.f = __webpack_require__(128);


/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(181), __esModule: true };

/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(182);
	__webpack_require__(190);
	__webpack_require__(191);
	__webpack_require__(192);
	module.exports = __webpack_require__(7).Symbol;


/***/ },
/* 182 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var global = __webpack_require__(6);
	var has = __webpack_require__(23);
	var DESCRIPTORS = __webpack_require__(15);
	var $export = __webpack_require__(5);
	var redefine = __webpack_require__(121);
	var META = __webpack_require__(183).KEY;
	var $fails = __webpack_require__(16);
	var shared = __webpack_require__(33);
	var setToStringTag = __webpack_require__(127);
	var uid = __webpack_require__(34);
	var wks = __webpack_require__(128);
	var wksExt = __webpack_require__(179);
	var wksDefine = __webpack_require__(184);
	var enumKeys = __webpack_require__(185);
	var isArray = __webpack_require__(186);
	var anObject = __webpack_require__(12);
	var toIObject = __webpack_require__(24);
	var toPrimitive = __webpack_require__(18);
	var createDesc = __webpack_require__(19);
	var _create = __webpack_require__(124);
	var gOPNExt = __webpack_require__(187);
	var $GOPD = __webpack_require__(189);
	var $DP = __webpack_require__(11);
	var $keys = __webpack_require__(21);
	var gOPD = $GOPD.f;
	var dP = $DP.f;
	var gOPN = gOPNExt.f;
	var $Symbol = global.Symbol;
	var $JSON = global.JSON;
	var _stringify = $JSON && $JSON.stringify;
	var PROTOTYPE = 'prototype';
	var HIDDEN = wks('_hidden');
	var TO_PRIMITIVE = wks('toPrimitive');
	var isEnum = {}.propertyIsEnumerable;
	var SymbolRegistry = shared('symbol-registry');
	var AllSymbols = shared('symbols');
	var OPSymbols = shared('op-symbols');
	var ObjectProto = Object[PROTOTYPE];
	var USE_NATIVE = typeof $Symbol == 'function';
	var QObject = global.QObject;
	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function () {
	  return _create(dP({}, 'a', {
	    get: function () { return dP(this, 'a', { value: 7 }).a; }
	  })).a != 7;
	}) ? function (it, key, D) {
	  var protoDesc = gOPD(ObjectProto, key);
	  if (protoDesc) delete ObjectProto[key];
	  dP(it, key, D);
	  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
	} : dP;

	var wrap = function (tag) {
	  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
	  sym._k = tag;
	  return sym;
	};

	var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
	  return typeof it == 'symbol';
	} : function (it) {
	  return it instanceof $Symbol;
	};

	var $defineProperty = function defineProperty(it, key, D) {
	  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
	  anObject(it);
	  key = toPrimitive(key, true);
	  anObject(D);
	  if (has(AllSymbols, key)) {
	    if (!D.enumerable) {
	      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
	      D = _create(D, { enumerable: createDesc(0, false) });
	    } return setSymbolDesc(it, key, D);
	  } return dP(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P) {
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P));
	  var i = 0;
	  var l = keys.length;
	  var key;
	  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P) {
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key) {
	  var E = isEnum.call(this, key = toPrimitive(key, true));
	  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
	  it = toIObject(it);
	  key = toPrimitive(key, true);
	  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
	  var D = gOPD(it, key);
	  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it) {
	  var names = gOPN(toIObject(it));
	  var result = [];
	  var i = 0;
	  var key;
	  while (names.length > i) {
	    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
	  } return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
	  var IS_OP = it === ObjectProto;
	  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
	  var result = [];
	  var i = 0;
	  var key;
	  while (names.length > i) {
	    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
	  } return result;
	};

	// 19.4.1.1 Symbol([description])
	if (!USE_NATIVE) {
	  $Symbol = function Symbol() {
	    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
	    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
	    var $set = function (value) {
	      if (this === ObjectProto) $set.call(OPSymbols, value);
	      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    };
	    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
	    return wrap(tag);
	  };
	  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
	    return this._k;
	  });

	  $GOPD.f = $getOwnPropertyDescriptor;
	  $DP.f = $defineProperty;
	  __webpack_require__(188).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(37).f = $propertyIsEnumerable;
	  __webpack_require__(36).f = $getOwnPropertySymbols;

	  if (DESCRIPTORS && !__webpack_require__(120)) {
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }

	  wksExt.f = function (name) {
	    return wrap(wks(name));
	  };
	}

	$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

	for (var es6Symbols = (
	  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
	).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

	for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

	$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function (key) {
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(sym) {
	    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
	    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
	  },
	  useSetter: function () { setter = true; },
	  useSimple: function () { setter = false; }
	});

	$export($export.S + $export.F * !USE_NATIVE, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});

	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
	})), 'JSON', {
	  stringify: function stringify(it) {
	    if (it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
	    var args = [it];
	    var i = 1;
	    var replacer, $replacer;
	    while (arguments.length > i) args.push(arguments[i++]);
	    replacer = args[1];
	    if (typeof replacer == 'function') $replacer = replacer;
	    if ($replacer || !isArray(replacer)) replacer = function (key, value) {
	      if ($replacer) value = $replacer.call(this, key, value);
	      if (!isSymbol(value)) return value;
	    };
	    args[1] = replacer;
	    return _stringify.apply($JSON, args);
	  }
	});

	// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(10)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);


/***/ },
/* 183 */
/***/ function(module, exports, __webpack_require__) {

	var META = __webpack_require__(34)('meta');
	var isObject = __webpack_require__(13);
	var has = __webpack_require__(23);
	var setDesc = __webpack_require__(11).f;
	var id = 0;
	var isExtensible = Object.isExtensible || function () {
	  return true;
	};
	var FREEZE = !__webpack_require__(16)(function () {
	  return isExtensible(Object.preventExtensions({}));
	});
	var setMeta = function (it) {
	  setDesc(it, META, { value: {
	    i: 'O' + ++id, // object ID
	    w: {}          // weak collections IDs
	  } });
	};
	var fastKey = function (it, create) {
	  // return primitive with prefix
	  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if (!has(it, META)) {
	    // can't set metadata to uncaught frozen object
	    if (!isExtensible(it)) return 'F';
	    // not necessary to add metadata
	    if (!create) return 'E';
	    // add missing metadata
	    setMeta(it);
	  // return object ID
	  } return it[META].i;
	};
	var getWeak = function (it, create) {
	  if (!has(it, META)) {
	    // can't set metadata to uncaught frozen object
	    if (!isExtensible(it)) return true;
	    // not necessary to add metadata
	    if (!create) return false;
	    // add missing metadata
	    setMeta(it);
	  // return hash weak collections IDs
	  } return it[META].w;
	};
	// add metadata on freeze-family methods calling
	var onFreeze = function (it) {
	  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
	  return it;
	};
	var meta = module.exports = {
	  KEY: META,
	  NEED: false,
	  fastKey: fastKey,
	  getWeak: getWeak,
	  onFreeze: onFreeze
	};


/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(6);
	var core = __webpack_require__(7);
	var LIBRARY = __webpack_require__(120);
	var wksExt = __webpack_require__(179);
	var defineProperty = __webpack_require__(11).f;
	module.exports = function (name) {
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
	};


/***/ },
/* 185 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(21);
	var gOPS = __webpack_require__(36);
	var pIE = __webpack_require__(37);
	module.exports = function (it) {
	  var result = getKeys(it);
	  var getSymbols = gOPS.f;
	  if (getSymbols) {
	    var symbols = getSymbols(it);
	    var isEnum = pIE.f;
	    var i = 0;
	    var key;
	    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
	  } return result;
	};


/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(26);
	module.exports = Array.isArray || function isArray(arg) {
	  return cof(arg) == 'Array';
	};


/***/ },
/* 187 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(24);
	var gOPN = __webpack_require__(188).f;
	var toString = {}.toString;

	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];

	var getWindowNames = function (it) {
	  try {
	    return gOPN(it);
	  } catch (e) {
	    return windowNames.slice();
	  }
	};

	module.exports.f = function getOwnPropertyNames(it) {
	  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
	};


/***/ },
/* 188 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys = __webpack_require__(22);
	var hiddenKeys = __webpack_require__(35).concat('length', 'prototype');

	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
	  return $keys(O, hiddenKeys);
	};


/***/ },
/* 189 */
/***/ function(module, exports, __webpack_require__) {

	var pIE = __webpack_require__(37);
	var createDesc = __webpack_require__(19);
	var toIObject = __webpack_require__(24);
	var toPrimitive = __webpack_require__(18);
	var has = __webpack_require__(23);
	var IE8_DOM_DEFINE = __webpack_require__(14);
	var gOPD = Object.getOwnPropertyDescriptor;

	exports.f = __webpack_require__(15) ? gOPD : function getOwnPropertyDescriptor(O, P) {
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if (IE8_DOM_DEFINE) try {
	    return gOPD(O, P);
	  } catch (e) { /* empty */ }
	  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
	};


/***/ },
/* 190 */
/***/ function(module, exports) {

	

/***/ },
/* 191 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(184)('asyncIterator');


/***/ },
/* 192 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(184)('observable');


/***/ },
/* 193 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _setPrototypeOf = __webpack_require__(194);

	var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

	var _create = __webpack_require__(198);

	var _create2 = _interopRequireDefault(_create);

	var _typeof2 = __webpack_require__(172);

	var _typeof3 = _interopRequireDefault(_typeof2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
	  }

	  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
	};

/***/ },
/* 194 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(195), __esModule: true };

/***/ },
/* 195 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(196);
	module.exports = __webpack_require__(7).Object.setPrototypeOf;


/***/ },
/* 196 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(5);
	$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(197).set });


/***/ },
/* 197 */
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var isObject = __webpack_require__(13);
	var anObject = __webpack_require__(12);
	var check = function (O, proto) {
	  anObject(O);
	  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function (test, buggy, set) {
	      try {
	        set = __webpack_require__(8)(Function.call, __webpack_require__(189).f(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch (e) { buggy = true; }
	      return function setPrototypeOf(O, proto) {
	        check(O, proto);
	        if (buggy) O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};


/***/ },
/* 198 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(199), __esModule: true };

/***/ },
/* 199 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(200);
	var $Object = __webpack_require__(7).Object;
	module.exports = function create(P, D) {
	  return $Object.create(P, D);
	};


/***/ },
/* 200 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(5);
	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	$export($export.S, 'Object', { create: __webpack_require__(124) });


/***/ },
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */

	var nullthrows = function nullthrows(x) {
	  if (x != null) {
	    return x;
	  }
	  throw new Error("Got unexpected null or undefined");
	};

	module.exports = nullthrows;

/***/ },
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * Module dependencies.
	 */

	var url = __webpack_require__(219);
	var parser = __webpack_require__(225);
	var Manager = __webpack_require__(232);
	var debug = __webpack_require__(221)('socket.io-client');

	/**
	 * Module exports.
	 */

	module.exports = exports = lookup;

	/**
	 * Managers cache.
	 */

	var cache = exports.managers = {};

	/**
	 * Looks up an existing `Manager` for multiplexing.
	 * If the user summons:
	 *
	 *   `io('http://localhost/a');`
	 *   `io('http://localhost/b');`
	 *
	 * We reuse the existing instance based on same scheme/port/host,
	 * and we initialize sockets for each namespace.
	 *
	 * @api public
	 */

	function lookup (uri, opts) {
	  if (typeof uri === 'object') {
	    opts = uri;
	    uri = undefined;
	  }

	  opts = opts || {};

	  var parsed = url(uri);
	  var source = parsed.source;
	  var id = parsed.id;
	  var path = parsed.path;
	  var sameNamespace = cache[id] && path in cache[id].nsps;
	  var newConnection = opts.forceNew || opts['force new connection'] ||
	                      false === opts.multiplex || sameNamespace;

	  var io;

	  if (newConnection) {
	    debug('ignoring socket cache for %s', source);
	    io = Manager(source, opts);
	  } else {
	    if (!cache[id]) {
	      debug('new io instance for %s', source);
	      cache[id] = Manager(source, opts);
	    }
	    io = cache[id];
	  }
	  if (parsed.query && !opts.query) {
	    opts.query = parsed.query;
	  }
	  return io.socket(parsed.path, opts);
	}

	/**
	 * Protocol version.
	 *
	 * @api public
	 */

	exports.protocol = parser.protocol;

	/**
	 * `connect`.
	 *
	 * @param {String} uri
	 * @api public
	 */

	exports.connect = lookup;

	/**
	 * Expose constructors for standalone build.
	 *
	 * @api public
	 */

	exports.Manager = __webpack_require__(232);
	exports.Socket = __webpack_require__(256);


/***/ },
/* 219 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {
	/**
	 * Module dependencies.
	 */

	var parseuri = __webpack_require__(220);
	var debug = __webpack_require__(221)('socket.io-client:url');

	/**
	 * Module exports.
	 */

	module.exports = url;

	/**
	 * URL parser.
	 *
	 * @param {String} url
	 * @param {Object} An object meant to mimic window.location.
	 *                 Defaults to window.location.
	 * @api public
	 */

	function url (uri, loc) {
	  var obj = uri;

	  // default to window.location
	  loc = loc || global.location;
	  if (null == uri) uri = loc.protocol + '//' + loc.host;

	  // relative path support
	  if ('string' === typeof uri) {
	    if ('/' === uri.charAt(0)) {
	      if ('/' === uri.charAt(1)) {
	        uri = loc.protocol + uri;
	      } else {
	        uri = loc.host + uri;
	      }
	    }

	    if (!/^(https?|wss?):\/\//.test(uri)) {
	      debug('protocol-less url %s', uri);
	      if ('undefined' !== typeof loc) {
	        uri = loc.protocol + '//' + uri;
	      } else {
	        uri = 'https://' + uri;
	      }
	    }

	    // parse
	    debug('parse %s', uri);
	    obj = parseuri(uri);
	  }

	  // make sure we treat `localhost:80` and `localhost` equally
	  if (!obj.port) {
	    if (/^(http|ws)$/.test(obj.protocol)) {
	      obj.port = '80';
	    } else if (/^(http|ws)s$/.test(obj.protocol)) {
	      obj.port = '443';
	    }
	  }

	  obj.path = obj.path || '/';

	  var ipv6 = obj.host.indexOf(':') !== -1;
	  var host = ipv6 ? '[' + obj.host + ']' : obj.host;

	  // define unique id
	  obj.id = obj.protocol + '://' + host + ':' + obj.port;
	  // define href
	  obj.href = obj.protocol + '://' + host + (loc && loc.port === obj.port ? '' : (':' + obj.port));

	  return obj;
	}

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 220 */
/***/ function(module, exports) {

	/**
	 * Parses an URI
	 *
	 * @author Steven Levithan <stevenlevithan.com> (MIT license)
	 * @api private
	 */

	var re = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;

	var parts = [
	    'source', 'protocol', 'authority', 'userInfo', 'user', 'password', 'host', 'port', 'relative', 'path', 'directory', 'file', 'query', 'anchor'
	];

	module.exports = function parseuri(str) {
	    var src = str,
	        b = str.indexOf('['),
	        e = str.indexOf(']');

	    if (b != -1 && e != -1) {
	        str = str.substring(0, b) + str.substring(b, e).replace(/:/g, ';') + str.substring(e, str.length);
	    }

	    var m = re.exec(str || ''),
	        uri = {},
	        i = 14;

	    while (i--) {
	        uri[parts[i]] = m[i] || '';
	    }

	    if (b != -1 && e != -1) {
	        uri.source = src;
	        uri.host = uri.host.substring(1, uri.host.length - 1).replace(/;/g, ':');
	        uri.authority = uri.authority.replace('[', '').replace(']', '').replace(/;/g, ':');
	        uri.ipv6uri = true;
	    }

	    return uri;
	};


/***/ },
/* 221 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * This is the web browser implementation of `debug()`.
	 *
	 * Expose `debug()` as the module.
	 */

	exports = module.exports = __webpack_require__(223);
	exports.log = log;
	exports.formatArgs = formatArgs;
	exports.save = save;
	exports.load = load;
	exports.useColors = useColors;
	exports.storage = 'undefined' != typeof chrome
	               && 'undefined' != typeof chrome.storage
	                  ? chrome.storage.local
	                  : localstorage();

	/**
	 * Colors.
	 */

	exports.colors = [
	  'lightseagreen',
	  'forestgreen',
	  'goldenrod',
	  'dodgerblue',
	  'darkorchid',
	  'crimson'
	];

	/**
	 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
	 * and the Firebug extension (any Firefox version) are known
	 * to support "%c" CSS customizations.
	 *
	 * TODO: add a `localStorage` variable to explicitly enable/disable colors
	 */

	function useColors() {
	  // NB: In an Electron preload script, document will be defined but not fully
	  // initialized. Since we know we're in Chrome, we'll just detect this case
	  // explicitly
	  if (typeof window !== 'undefined' && window.process && window.process.type === 'renderer') {
	    return true;
	  }

	  // is webkit? http://stackoverflow.com/a/16459606/376773
	  // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
	  return (typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance) ||
	    // is firebug? http://stackoverflow.com/a/398120/376773
	    (typeof window !== 'undefined' && window.console && (window.console.firebug || (window.console.exception && window.console.table))) ||
	    // is firefox >= v31?
	    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
	    (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31) ||
	    // double check webkit in userAgent just in case we are in a worker
	    (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
	}

	/**
	 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
	 */

	exports.formatters.j = function(v) {
	  try {
	    return JSON.stringify(v);
	  } catch (err) {
	    return '[UnexpectedJSONParseError]: ' + err.message;
	  }
	};


	/**
	 * Colorize log arguments if enabled.
	 *
	 * @api public
	 */

	function formatArgs(args) {
	  var useColors = this.useColors;

	  args[0] = (useColors ? '%c' : '')
	    + this.namespace
	    + (useColors ? ' %c' : ' ')
	    + args[0]
	    + (useColors ? '%c ' : ' ')
	    + '+' + exports.humanize(this.diff);

	  if (!useColors) return;

	  var c = 'color: ' + this.color;
	  args.splice(1, 0, c, 'color: inherit')

	  // the final "%c" is somewhat tricky, because there could be other
	  // arguments passed either before or after the %c, so we need to
	  // figure out the correct index to insert the CSS into
	  var index = 0;
	  var lastC = 0;
	  args[0].replace(/%[a-zA-Z%]/g, function(match) {
	    if ('%%' === match) return;
	    index++;
	    if ('%c' === match) {
	      // we only are interested in the *last* %c
	      // (the user may have provided their own)
	      lastC = index;
	    }
	  });

	  args.splice(lastC, 0, c);
	}

	/**
	 * Invokes `console.log()` when available.
	 * No-op when `console.log` is not a "function".
	 *
	 * @api public
	 */

	function log() {
	  // this hackery is required for IE8/9, where
	  // the `console.log` function doesn't have 'apply'
	  return 'object' === typeof console
	    && console.log
	    && Function.prototype.apply.call(console.log, console, arguments);
	}

	/**
	 * Save `namespaces`.
	 *
	 * @param {String} namespaces
	 * @api private
	 */

	function save(namespaces) {
	  try {
	    if (null == namespaces) {
	      exports.storage.removeItem('debug');
	    } else {
	      exports.storage.debug = namespaces;
	    }
	  } catch(e) {}
	}

	/**
	 * Load `namespaces`.
	 *
	 * @return {String} returns the previously persisted debug modes
	 * @api private
	 */

	function load() {
	  var r;
	  try {
	    r = exports.storage.debug;
	  } catch(e) {}

	  // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
	  if (!r && typeof process !== 'undefined' && 'env' in process) {
	    r = ({"NODE_ENV":"production "}).DEBUG;
	  }

	  return r;
	}

	/**
	 * Enable namespaces listed in `localStorage.debug` initially.
	 */

	exports.enable(load());

	/**
	 * Localstorage attempts to return the localstorage.
	 *
	 * This is necessary because safari throws
	 * when a user disables cookies/localstorage
	 * and you attempt to access it.
	 *
	 * @return {LocalStorage}
	 * @api private
	 */

	function localstorage() {
	  try {
	    return window.localStorage;
	  } catch (e) {}
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(222)))

/***/ },
/* 222 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }


	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }



	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
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
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
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
	        runTimeout(drainQueue);
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
	process.prependListener = noop;
	process.prependOnceListener = noop;

	process.listeners = function (name) { return [] }

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 223 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * This is the common logic for both the Node.js and web browser
	 * implementations of `debug()`.
	 *
	 * Expose `debug()` as the module.
	 */

	exports = module.exports = createDebug.debug = createDebug['default'] = createDebug;
	exports.coerce = coerce;
	exports.disable = disable;
	exports.enable = enable;
	exports.enabled = enabled;
	exports.humanize = __webpack_require__(224);

	/**
	 * The currently active debug mode names, and names to skip.
	 */

	exports.names = [];
	exports.skips = [];

	/**
	 * Map of special "%n" handling functions, for the debug "format" argument.
	 *
	 * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
	 */

	exports.formatters = {};

	/**
	 * Previous log timestamp.
	 */

	var prevTime;

	/**
	 * Select a color.
	 * @param {String} namespace
	 * @return {Number}
	 * @api private
	 */

	function selectColor(namespace) {
	  var hash = 0, i;

	  for (i in namespace) {
	    hash  = ((hash << 5) - hash) + namespace.charCodeAt(i);
	    hash |= 0; // Convert to 32bit integer
	  }

	  return exports.colors[Math.abs(hash) % exports.colors.length];
	}

	/**
	 * Create a debugger with the given `namespace`.
	 *
	 * @param {String} namespace
	 * @return {Function}
	 * @api public
	 */

	function createDebug(namespace) {

	  function debug() {
	    // disabled?
	    if (!debug.enabled) return;

	    var self = debug;

	    // set `diff` timestamp
	    var curr = +new Date();
	    var ms = curr - (prevTime || curr);
	    self.diff = ms;
	    self.prev = prevTime;
	    self.curr = curr;
	    prevTime = curr;

	    // turn the `arguments` into a proper Array
	    var args = new Array(arguments.length);
	    for (var i = 0; i < args.length; i++) {
	      args[i] = arguments[i];
	    }

	    args[0] = exports.coerce(args[0]);

	    if ('string' !== typeof args[0]) {
	      // anything else let's inspect with %O
	      args.unshift('%O');
	    }

	    // apply any `formatters` transformations
	    var index = 0;
	    args[0] = args[0].replace(/%([a-zA-Z%])/g, function(match, format) {
	      // if we encounter an escaped % then don't increase the array index
	      if (match === '%%') return match;
	      index++;
	      var formatter = exports.formatters[format];
	      if ('function' === typeof formatter) {
	        var val = args[index];
	        match = formatter.call(self, val);

	        // now we need to remove `args[index]` since it's inlined in the `format`
	        args.splice(index, 1);
	        index--;
	      }
	      return match;
	    });

	    // apply env-specific formatting (colors, etc.)
	    exports.formatArgs.call(self, args);

	    var logFn = debug.log || exports.log || console.log.bind(console);
	    logFn.apply(self, args);
	  }

	  debug.namespace = namespace;
	  debug.enabled = exports.enabled(namespace);
	  debug.useColors = exports.useColors();
	  debug.color = selectColor(namespace);

	  // env-specific initialization logic for debug instances
	  if ('function' === typeof exports.init) {
	    exports.init(debug);
	  }

	  return debug;
	}

	/**
	 * Enables a debug mode by namespaces. This can include modes
	 * separated by a colon and wildcards.
	 *
	 * @param {String} namespaces
	 * @api public
	 */

	function enable(namespaces) {
	  exports.save(namespaces);

	  exports.names = [];
	  exports.skips = [];

	  var split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
	  var len = split.length;

	  for (var i = 0; i < len; i++) {
	    if (!split[i]) continue; // ignore empty strings
	    namespaces = split[i].replace(/\*/g, '.*?');
	    if (namespaces[0] === '-') {
	      exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
	    } else {
	      exports.names.push(new RegExp('^' + namespaces + '$'));
	    }
	  }
	}

	/**
	 * Disable debug output.
	 *
	 * @api public
	 */

	function disable() {
	  exports.enable('');
	}

	/**
	 * Returns true if the given mode name is enabled, false otherwise.
	 *
	 * @param {String} name
	 * @return {Boolean}
	 * @api public
	 */

	function enabled(name) {
	  var i, len;
	  for (i = 0, len = exports.skips.length; i < len; i++) {
	    if (exports.skips[i].test(name)) {
	      return false;
	    }
	  }
	  for (i = 0, len = exports.names.length; i < len; i++) {
	    if (exports.names[i].test(name)) {
	      return true;
	    }
	  }
	  return false;
	}

	/**
	 * Coerce `val`.
	 *
	 * @param {Mixed} val
	 * @return {Mixed}
	 * @api private
	 */

	function coerce(val) {
	  if (val instanceof Error) return val.stack || val.message;
	  return val;
	}


/***/ },
/* 224 */
/***/ function(module, exports) {

	/**
	 * Helpers.
	 */

	var s = 1000;
	var m = s * 60;
	var h = m * 60;
	var d = h * 24;
	var y = d * 365.25;

	/**
	 * Parse or format the given `val`.
	 *
	 * Options:
	 *
	 *  - `long` verbose formatting [false]
	 *
	 * @param {String|Number} val
	 * @param {Object} [options]
	 * @throws {Error} throw an error if val is not a non-empty string or a number
	 * @return {String|Number}
	 * @api public
	 */

	module.exports = function(val, options) {
	  options = options || {};
	  var type = typeof val;
	  if (type === 'string' && val.length > 0) {
	    return parse(val);
	  } else if (type === 'number' && isNaN(val) === false) {
	    return options.long ? fmtLong(val) : fmtShort(val);
	  }
	  throw new Error(
	    'val is not a non-empty string or a valid number. val=' +
	      JSON.stringify(val)
	  );
	};

	/**
	 * Parse the given `str` and return milliseconds.
	 *
	 * @param {String} str
	 * @return {Number}
	 * @api private
	 */

	function parse(str) {
	  str = String(str);
	  if (str.length > 100) {
	    return;
	  }
	  var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(
	    str
	  );
	  if (!match) {
	    return;
	  }
	  var n = parseFloat(match[1]);
	  var type = (match[2] || 'ms').toLowerCase();
	  switch (type) {
	    case 'years':
	    case 'year':
	    case 'yrs':
	    case 'yr':
	    case 'y':
	      return n * y;
	    case 'days':
	    case 'day':
	    case 'd':
	      return n * d;
	    case 'hours':
	    case 'hour':
	    case 'hrs':
	    case 'hr':
	    case 'h':
	      return n * h;
	    case 'minutes':
	    case 'minute':
	    case 'mins':
	    case 'min':
	    case 'm':
	      return n * m;
	    case 'seconds':
	    case 'second':
	    case 'secs':
	    case 'sec':
	    case 's':
	      return n * s;
	    case 'milliseconds':
	    case 'millisecond':
	    case 'msecs':
	    case 'msec':
	    case 'ms':
	      return n;
	    default:
	      return undefined;
	  }
	}

	/**
	 * Short format for `ms`.
	 *
	 * @param {Number} ms
	 * @return {String}
	 * @api private
	 */

	function fmtShort(ms) {
	  if (ms >= d) {
	    return Math.round(ms / d) + 'd';
	  }
	  if (ms >= h) {
	    return Math.round(ms / h) + 'h';
	  }
	  if (ms >= m) {
	    return Math.round(ms / m) + 'm';
	  }
	  if (ms >= s) {
	    return Math.round(ms / s) + 's';
	  }
	  return ms + 'ms';
	}

	/**
	 * Long format for `ms`.
	 *
	 * @param {Number} ms
	 * @return {String}
	 * @api private
	 */

	function fmtLong(ms) {
	  return plural(ms, d, 'day') ||
	    plural(ms, h, 'hour') ||
	    plural(ms, m, 'minute') ||
	    plural(ms, s, 'second') ||
	    ms + ' ms';
	}

	/**
	 * Pluralization helper.
	 */

	function plural(ms, n, name) {
	  if (ms < n) {
	    return;
	  }
	  if (ms < n * 1.5) {
	    return Math.floor(ms / n) + ' ' + name;
	  }
	  return Math.ceil(ms / n) + ' ' + name + 's';
	}


/***/ },
/* 225 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * Module dependencies.
	 */

	var debug = __webpack_require__(221)('socket.io-parser');
	var Emitter = __webpack_require__(226);
	var hasBin = __webpack_require__(227);
	var binary = __webpack_require__(229);
	var isBuf = __webpack_require__(231);

	/**
	 * Protocol version.
	 *
	 * @api public
	 */

	exports.protocol = 4;

	/**
	 * Packet types.
	 *
	 * @api public
	 */

	exports.types = [
	  'CONNECT',
	  'DISCONNECT',
	  'EVENT',
	  'ACK',
	  'ERROR',
	  'BINARY_EVENT',
	  'BINARY_ACK'
	];

	/**
	 * Packet type `connect`.
	 *
	 * @api public
	 */

	exports.CONNECT = 0;

	/**
	 * Packet type `disconnect`.
	 *
	 * @api public
	 */

	exports.DISCONNECT = 1;

	/**
	 * Packet type `event`.
	 *
	 * @api public
	 */

	exports.EVENT = 2;

	/**
	 * Packet type `ack`.
	 *
	 * @api public
	 */

	exports.ACK = 3;

	/**
	 * Packet type `error`.
	 *
	 * @api public
	 */

	exports.ERROR = 4;

	/**
	 * Packet type 'binary event'
	 *
	 * @api public
	 */

	exports.BINARY_EVENT = 5;

	/**
	 * Packet type `binary ack`. For acks with binary arguments.
	 *
	 * @api public
	 */

	exports.BINARY_ACK = 6;

	/**
	 * Encoder constructor.
	 *
	 * @api public
	 */

	exports.Encoder = Encoder;

	/**
	 * Decoder constructor.
	 *
	 * @api public
	 */

	exports.Decoder = Decoder;

	/**
	 * A socket.io Encoder instance
	 *
	 * @api public
	 */

	function Encoder() {}

	/**
	 * Encode a packet as a single string if non-binary, or as a
	 * buffer sequence, depending on packet type.
	 *
	 * @param {Object} obj - packet object
	 * @param {Function} callback - function to handle encodings (likely engine.write)
	 * @return Calls callback with Array of encodings
	 * @api public
	 */

	Encoder.prototype.encode = function(obj, callback){
	  if ((obj.type === exports.EVENT || obj.type === exports.ACK) && hasBin(obj.data)) {
	    obj.type = obj.type === exports.EVENT ? exports.BINARY_EVENT : exports.BINARY_ACK;
	  }

	  debug('encoding packet %j', obj);

	  if (exports.BINARY_EVENT === obj.type || exports.BINARY_ACK === obj.type) {
	    encodeAsBinary(obj, callback);
	  }
	  else {
	    var encoding = encodeAsString(obj);
	    callback([encoding]);
	  }
	};

	/**
	 * Encode packet as string.
	 *
	 * @param {Object} packet
	 * @return {String} encoded
	 * @api private
	 */

	function encodeAsString(obj) {

	  // first is type
	  var str = '' + obj.type;

	  // attachments if we have them
	  if (exports.BINARY_EVENT === obj.type || exports.BINARY_ACK === obj.type) {
	    str += obj.attachments + '-';
	  }

	  // if we have a namespace other than `/`
	  // we append it followed by a comma `,`
	  if (obj.nsp && '/' !== obj.nsp) {
	    str += obj.nsp + ',';
	  }

	  // immediately followed by the id
	  if (null != obj.id) {
	    str += obj.id;
	  }

	  // json data
	  if (null != obj.data) {
	    str += JSON.stringify(obj.data);
	  }

	  debug('encoded %j as %s', obj, str);
	  return str;
	}

	/**
	 * Encode packet as 'buffer sequence' by removing blobs, and
	 * deconstructing packet into object with placeholders and
	 * a list of buffers.
	 *
	 * @param {Object} packet
	 * @return {Buffer} encoded
	 * @api private
	 */

	function encodeAsBinary(obj, callback) {

	  function writeEncoding(bloblessData) {
	    var deconstruction = binary.deconstructPacket(bloblessData);
	    var pack = encodeAsString(deconstruction.packet);
	    var buffers = deconstruction.buffers;

	    buffers.unshift(pack); // add packet info to beginning of data list
	    callback(buffers); // write all the buffers
	  }

	  binary.removeBlobs(obj, writeEncoding);
	}

	/**
	 * A socket.io Decoder instance
	 *
	 * @return {Object} decoder
	 * @api public
	 */

	function Decoder() {
	  this.reconstructor = null;
	}

	/**
	 * Mix in `Emitter` with Decoder.
	 */

	Emitter(Decoder.prototype);

	/**
	 * Decodes an ecoded packet string into packet JSON.
	 *
	 * @param {String} obj - encoded packet
	 * @return {Object} packet
	 * @api public
	 */

	Decoder.prototype.add = function(obj) {
	  var packet;
	  if (typeof obj === 'string') {
	    packet = decodeString(obj);
	    if (exports.BINARY_EVENT === packet.type || exports.BINARY_ACK === packet.type) { // binary packet's json
	      this.reconstructor = new BinaryReconstructor(packet);

	      // no attachments, labeled binary but no binary data to follow
	      if (this.reconstructor.reconPack.attachments === 0) {
	        this.emit('decoded', packet);
	      }
	    } else { // non-binary full packet
	      this.emit('decoded', packet);
	    }
	  }
	  else if (isBuf(obj) || obj.base64) { // raw binary data
	    if (!this.reconstructor) {
	      throw new Error('got binary data when not reconstructing a packet');
	    } else {
	      packet = this.reconstructor.takeBinaryData(obj);
	      if (packet) { // received final buffer
	        this.reconstructor = null;
	        this.emit('decoded', packet);
	      }
	    }
	  }
	  else {
	    throw new Error('Unknown type: ' + obj);
	  }
	};

	/**
	 * Decode a packet String (JSON data)
	 *
	 * @param {String} str
	 * @return {Object} packet
	 * @api private
	 */

	function decodeString(str) {
	  var i = 0;
	  // look up type
	  var p = {
	    type: Number(str.charAt(0))
	  };

	  if (null == exports.types[p.type]) return error();

	  // look up attachments if type binary
	  if (exports.BINARY_EVENT === p.type || exports.BINARY_ACK === p.type) {
	    var buf = '';
	    while (str.charAt(++i) !== '-') {
	      buf += str.charAt(i);
	      if (i == str.length) break;
	    }
	    if (buf != Number(buf) || str.charAt(i) !== '-') {
	      throw new Error('Illegal attachments');
	    }
	    p.attachments = Number(buf);
	  }

	  // look up namespace (if any)
	  if ('/' === str.charAt(i + 1)) {
	    p.nsp = '';
	    while (++i) {
	      var c = str.charAt(i);
	      if (',' === c) break;
	      p.nsp += c;
	      if (i === str.length) break;
	    }
	  } else {
	    p.nsp = '/';
	  }

	  // look up id
	  var next = str.charAt(i + 1);
	  if ('' !== next && Number(next) == next) {
	    p.id = '';
	    while (++i) {
	      var c = str.charAt(i);
	      if (null == c || Number(c) != c) {
	        --i;
	        break;
	      }
	      p.id += str.charAt(i);
	      if (i === str.length) break;
	    }
	    p.id = Number(p.id);
	  }

	  // look up json data
	  if (str.charAt(++i)) {
	    p = tryParse(p, str.substr(i));
	  }

	  debug('decoded %s as %j', str, p);
	  return p;
	}

	function tryParse(p, str) {
	  try {
	    p.data = JSON.parse(str);
	  } catch(e){
	    return error();
	  }
	  return p; 
	}

	/**
	 * Deallocates a parser's resources
	 *
	 * @api public
	 */

	Decoder.prototype.destroy = function() {
	  if (this.reconstructor) {
	    this.reconstructor.finishedReconstruction();
	  }
	};

	/**
	 * A manager of a binary event's 'buffer sequence'. Should
	 * be constructed whenever a packet of type BINARY_EVENT is
	 * decoded.
	 *
	 * @param {Object} packet
	 * @return {BinaryReconstructor} initialized reconstructor
	 * @api private
	 */

	function BinaryReconstructor(packet) {
	  this.reconPack = packet;
	  this.buffers = [];
	}

	/**
	 * Method to be called when binary data received from connection
	 * after a BINARY_EVENT packet.
	 *
	 * @param {Buffer | ArrayBuffer} binData - the raw binary data received
	 * @return {null | Object} returns null if more binary data is expected or
	 *   a reconstructed packet object if all buffers have been received.
	 * @api private
	 */

	BinaryReconstructor.prototype.takeBinaryData = function(binData) {
	  this.buffers.push(binData);
	  if (this.buffers.length === this.reconPack.attachments) { // done with buffer list
	    var packet = binary.reconstructPacket(this.reconPack, this.buffers);
	    this.finishedReconstruction();
	    return packet;
	  }
	  return null;
	};

	/**
	 * Cleans up binary packet reconstruction variables.
	 *
	 * @api private
	 */

	BinaryReconstructor.prototype.finishedReconstruction = function() {
	  this.reconPack = null;
	  this.buffers = [];
	};

	function error() {
	  return {
	    type: exports.ERROR,
	    data: 'parser error'
	  };
	}


/***/ },
/* 226 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * Expose `Emitter`.
	 */

	if (true) {
	  module.exports = Emitter;
	}

	/**
	 * Initialize a new `Emitter`.
	 *
	 * @api public
	 */

	function Emitter(obj) {
	  if (obj) return mixin(obj);
	};

	/**
	 * Mixin the emitter properties.
	 *
	 * @param {Object} obj
	 * @return {Object}
	 * @api private
	 */

	function mixin(obj) {
	  for (var key in Emitter.prototype) {
	    obj[key] = Emitter.prototype[key];
	  }
	  return obj;
	}

	/**
	 * Listen on the given `event` with `fn`.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */

	Emitter.prototype.on =
	Emitter.prototype.addEventListener = function(event, fn){
	  this._callbacks = this._callbacks || {};
	  (this._callbacks['$' + event] = this._callbacks['$' + event] || [])
	    .push(fn);
	  return this;
	};

	/**
	 * Adds an `event` listener that will be invoked a single
	 * time then automatically removed.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */

	Emitter.prototype.once = function(event, fn){
	  function on() {
	    this.off(event, on);
	    fn.apply(this, arguments);
	  }

	  on.fn = fn;
	  this.on(event, on);
	  return this;
	};

	/**
	 * Remove the given callback for `event` or all
	 * registered callbacks.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */

	Emitter.prototype.off =
	Emitter.prototype.removeListener =
	Emitter.prototype.removeAllListeners =
	Emitter.prototype.removeEventListener = function(event, fn){
	  this._callbacks = this._callbacks || {};

	  // all
	  if (0 == arguments.length) {
	    this._callbacks = {};
	    return this;
	  }

	  // specific event
	  var callbacks = this._callbacks['$' + event];
	  if (!callbacks) return this;

	  // remove all handlers
	  if (1 == arguments.length) {
	    delete this._callbacks['$' + event];
	    return this;
	  }

	  // remove specific handler
	  var cb;
	  for (var i = 0; i < callbacks.length; i++) {
	    cb = callbacks[i];
	    if (cb === fn || cb.fn === fn) {
	      callbacks.splice(i, 1);
	      break;
	    }
	  }
	  return this;
	};

	/**
	 * Emit `event` with the given args.
	 *
	 * @param {String} event
	 * @param {Mixed} ...
	 * @return {Emitter}
	 */

	Emitter.prototype.emit = function(event){
	  this._callbacks = this._callbacks || {};
	  var args = [].slice.call(arguments, 1)
	    , callbacks = this._callbacks['$' + event];

	  if (callbacks) {
	    callbacks = callbacks.slice(0);
	    for (var i = 0, len = callbacks.length; i < len; ++i) {
	      callbacks[i].apply(this, args);
	    }
	  }

	  return this;
	};

	/**
	 * Return array of callbacks for `event`.
	 *
	 * @param {String} event
	 * @return {Array}
	 * @api public
	 */

	Emitter.prototype.listeners = function(event){
	  this._callbacks = this._callbacks || {};
	  return this._callbacks['$' + event] || [];
	};

	/**
	 * Check if this emitter has `event` handlers.
	 *
	 * @param {String} event
	 * @return {Boolean}
	 * @api public
	 */

	Emitter.prototype.hasListeners = function(event){
	  return !! this.listeners(event).length;
	};


/***/ },
/* 227 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/* global Blob File */

	/*
	 * Module requirements.
	 */

	var isArray = __webpack_require__(228);

	var toString = Object.prototype.toString;
	var withNativeBlob = typeof global.Blob === 'function' || toString.call(global.Blob) === '[object BlobConstructor]';
	var withNativeFile = typeof global.File === 'function' || toString.call(global.File) === '[object FileConstructor]';

	/**
	 * Module exports.
	 */

	module.exports = hasBinary;

	/**
	 * Checks for binary data.
	 *
	 * Supports Buffer, ArrayBuffer, Blob and File.
	 *
	 * @param {Object} anything
	 * @api public
	 */

	function hasBinary (obj) {
	  if (!obj || typeof obj !== 'object') {
	    return false;
	  }

	  if (isArray(obj)) {
	    for (var i = 0, l = obj.length; i < l; i++) {
	      if (hasBinary(obj[i])) {
	        return true;
	      }
	    }
	    return false;
	  }

	  if ((typeof global.Buffer === 'function' && global.Buffer.isBuffer && global.Buffer.isBuffer(obj)) ||
	     (typeof global.ArrayBuffer === 'function' && obj instanceof ArrayBuffer) ||
	     (withNativeBlob && obj instanceof Blob) ||
	     (withNativeFile && obj instanceof File)
	    ) {
	    return true;
	  }

	  // see: https://github.com/Automattic/has-binary/pull/4
	  if (obj.toJSON && typeof obj.toJSON === 'function' && arguments.length === 1) {
	    return hasBinary(obj.toJSON(), true);
	  }

	  for (var key in obj) {
	    if (Object.prototype.hasOwnProperty.call(obj, key) && hasBinary(obj[key])) {
	      return true;
	    }
	  }

	  return false;
	}

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 228 */
/***/ function(module, exports) {

	var toString = {}.toString;

	module.exports = Array.isArray || function (arr) {
	  return toString.call(arr) == '[object Array]';
	};


/***/ },
/* 229 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/*global Blob,File*/

	/**
	 * Module requirements
	 */

	var isArray = __webpack_require__(230);
	var isBuf = __webpack_require__(231);
	var toString = Object.prototype.toString;
	var withNativeBlob = typeof global.Blob === 'function' || toString.call(global.Blob) === '[object BlobConstructor]';
	var withNativeFile = typeof global.File === 'function' || toString.call(global.File) === '[object FileConstructor]';

	/**
	 * Replaces every Buffer | ArrayBuffer in packet with a numbered placeholder.
	 * Anything with blobs or files should be fed through removeBlobs before coming
	 * here.
	 *
	 * @param {Object} packet - socket.io event packet
	 * @return {Object} with deconstructed packet and list of buffers
	 * @api public
	 */

	exports.deconstructPacket = function(packet) {
	  var buffers = [];
	  var packetData = packet.data;
	  var pack = packet;
	  pack.data = _deconstructPacket(packetData, buffers);
	  pack.attachments = buffers.length; // number of binary 'attachments'
	  return {packet: pack, buffers: buffers};
	};

	function _deconstructPacket(data, buffers) {
	  if (!data) return data;

	  if (isBuf(data)) {
	    var placeholder = { _placeholder: true, num: buffers.length };
	    buffers.push(data);
	    return placeholder;
	  } else if (isArray(data)) {
	    var newData = new Array(data.length);
	    for (var i = 0; i < data.length; i++) {
	      newData[i] = _deconstructPacket(data[i], buffers);
	    }
	    return newData;
	  } else if (typeof data === 'object' && !(data instanceof Date)) {
	    var newData = {};
	    for (var key in data) {
	      newData[key] = _deconstructPacket(data[key], buffers);
	    }
	    return newData;
	  }
	  return data;
	}

	/**
	 * Reconstructs a binary packet from its placeholder packet and buffers
	 *
	 * @param {Object} packet - event packet with placeholders
	 * @param {Array} buffers - binary buffers to put in placeholder positions
	 * @return {Object} reconstructed packet
	 * @api public
	 */

	exports.reconstructPacket = function(packet, buffers) {
	  packet.data = _reconstructPacket(packet.data, buffers);
	  packet.attachments = undefined; // no longer useful
	  return packet;
	};

	function _reconstructPacket(data, buffers) {
	  if (!data) return data;

	  if (data && data._placeholder) {
	    return buffers[data.num]; // appropriate buffer (should be natural order anyway)
	  } else if (isArray(data)) {
	    for (var i = 0; i < data.length; i++) {
	      data[i] = _reconstructPacket(data[i], buffers);
	    }
	  } else if (typeof data === 'object') {
	    for (var key in data) {
	      data[key] = _reconstructPacket(data[key], buffers);
	    }
	  }

	  return data;
	}

	/**
	 * Asynchronously removes Blobs or Files from data via
	 * FileReader's readAsArrayBuffer method. Used before encoding
	 * data as msgpack. Calls callback with the blobless data.
	 *
	 * @param {Object} data
	 * @param {Function} callback
	 * @api private
	 */

	exports.removeBlobs = function(data, callback) {
	  function _removeBlobs(obj, curKey, containingObject) {
	    if (!obj) return obj;

	    // convert any blob
	    if ((withNativeBlob && obj instanceof Blob) ||
	        (withNativeFile && obj instanceof File)) {
	      pendingBlobs++;

	      // async filereader
	      var fileReader = new FileReader();
	      fileReader.onload = function() { // this.result == arraybuffer
	        if (containingObject) {
	          containingObject[curKey] = this.result;
	        }
	        else {
	          bloblessData = this.result;
	        }

	        // if nothing pending its callback time
	        if(! --pendingBlobs) {
	          callback(bloblessData);
	        }
	      };

	      fileReader.readAsArrayBuffer(obj); // blob -> arraybuffer
	    } else if (isArray(obj)) { // handle array
	      for (var i = 0; i < obj.length; i++) {
	        _removeBlobs(obj[i], i, obj);
	      }
	    } else if (typeof obj === 'object' && !isBuf(obj)) { // and object
	      for (var key in obj) {
	        _removeBlobs(obj[key], key, obj);
	      }
	    }
	  }

	  var pendingBlobs = 0;
	  var bloblessData = data;
	  _removeBlobs(bloblessData);
	  if (!pendingBlobs) {
	    callback(bloblessData);
	  }
	};

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 230 */
/***/ function(module, exports) {

	var toString = {}.toString;

	module.exports = Array.isArray || function (arr) {
	  return toString.call(arr) == '[object Array]';
	};


/***/ },
/* 231 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {
	module.exports = isBuf;

	/**
	 * Returns true if obj is a buffer or an arraybuffer.
	 *
	 * @api private
	 */

	function isBuf(obj) {
	  return (global.Buffer && global.Buffer.isBuffer(obj)) ||
	         (global.ArrayBuffer && obj instanceof ArrayBuffer);
	}

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 232 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * Module dependencies.
	 */

	var eio = __webpack_require__(233);
	var Socket = __webpack_require__(256);
	var Emitter = __webpack_require__(226);
	var parser = __webpack_require__(225);
	var on = __webpack_require__(258);
	var bind = __webpack_require__(259);
	var debug = __webpack_require__(221)('socket.io-client:manager');
	var indexOf = __webpack_require__(255);
	var Backoff = __webpack_require__(260);

	/**
	 * IE6+ hasOwnProperty
	 */

	var has = Object.prototype.hasOwnProperty;

	/**
	 * Module exports
	 */

	module.exports = Manager;

	/**
	 * `Manager` constructor.
	 *
	 * @param {String} engine instance or engine uri/opts
	 * @param {Object} options
	 * @api public
	 */

	function Manager (uri, opts) {
	  if (!(this instanceof Manager)) return new Manager(uri, opts);
	  if (uri && ('object' === typeof uri)) {
	    opts = uri;
	    uri = undefined;
	  }
	  opts = opts || {};

	  opts.path = opts.path || '/socket.io';
	  this.nsps = {};
	  this.subs = [];
	  this.opts = opts;
	  this.reconnection(opts.reconnection !== false);
	  this.reconnectionAttempts(opts.reconnectionAttempts || Infinity);
	  this.reconnectionDelay(opts.reconnectionDelay || 1000);
	  this.reconnectionDelayMax(opts.reconnectionDelayMax || 5000);
	  this.randomizationFactor(opts.randomizationFactor || 0.5);
	  this.backoff = new Backoff({
	    min: this.reconnectionDelay(),
	    max: this.reconnectionDelayMax(),
	    jitter: this.randomizationFactor()
	  });
	  this.timeout(null == opts.timeout ? 20000 : opts.timeout);
	  this.readyState = 'closed';
	  this.uri = uri;
	  this.connecting = [];
	  this.lastPing = null;
	  this.encoding = false;
	  this.packetBuffer = [];
	  var _parser = opts.parser || parser;
	  this.encoder = new _parser.Encoder();
	  this.decoder = new _parser.Decoder();
	  this.autoConnect = opts.autoConnect !== false;
	  if (this.autoConnect) this.open();
	}

	/**
	 * Propagate given event to sockets and emit on `this`
	 *
	 * @api private
	 */

	Manager.prototype.emitAll = function () {
	  this.emit.apply(this, arguments);
	  for (var nsp in this.nsps) {
	    if (has.call(this.nsps, nsp)) {
	      this.nsps[nsp].emit.apply(this.nsps[nsp], arguments);
	    }
	  }
	};

	/**
	 * Update `socket.id` of all sockets
	 *
	 * @api private
	 */

	Manager.prototype.updateSocketIds = function () {
	  for (var nsp in this.nsps) {
	    if (has.call(this.nsps, nsp)) {
	      this.nsps[nsp].id = this.generateId(nsp);
	    }
	  }
	};

	/**
	 * generate `socket.id` for the given `nsp`
	 *
	 * @param {String} nsp
	 * @return {String}
	 * @api private
	 */

	Manager.prototype.generateId = function (nsp) {
	  return (nsp === '/' ? '' : (nsp + '#')) + this.engine.id;
	};

	/**
	 * Mix in `Emitter`.
	 */

	Emitter(Manager.prototype);

	/**
	 * Sets the `reconnection` config.
	 *
	 * @param {Boolean} true/false if it should automatically reconnect
	 * @return {Manager} self or value
	 * @api public
	 */

	Manager.prototype.reconnection = function (v) {
	  if (!arguments.length) return this._reconnection;
	  this._reconnection = !!v;
	  return this;
	};

	/**
	 * Sets the reconnection attempts config.
	 *
	 * @param {Number} max reconnection attempts before giving up
	 * @return {Manager} self or value
	 * @api public
	 */

	Manager.prototype.reconnectionAttempts = function (v) {
	  if (!arguments.length) return this._reconnectionAttempts;
	  this._reconnectionAttempts = v;
	  return this;
	};

	/**
	 * Sets the delay between reconnections.
	 *
	 * @param {Number} delay
	 * @return {Manager} self or value
	 * @api public
	 */

	Manager.prototype.reconnectionDelay = function (v) {
	  if (!arguments.length) return this._reconnectionDelay;
	  this._reconnectionDelay = v;
	  this.backoff && this.backoff.setMin(v);
	  return this;
	};

	Manager.prototype.randomizationFactor = function (v) {
	  if (!arguments.length) return this._randomizationFactor;
	  this._randomizationFactor = v;
	  this.backoff && this.backoff.setJitter(v);
	  return this;
	};

	/**
	 * Sets the maximum delay between reconnections.
	 *
	 * @param {Number} delay
	 * @return {Manager} self or value
	 * @api public
	 */

	Manager.prototype.reconnectionDelayMax = function (v) {
	  if (!arguments.length) return this._reconnectionDelayMax;
	  this._reconnectionDelayMax = v;
	  this.backoff && this.backoff.setMax(v);
	  return this;
	};

	/**
	 * Sets the connection timeout. `false` to disable
	 *
	 * @return {Manager} self or value
	 * @api public
	 */

	Manager.prototype.timeout = function (v) {
	  if (!arguments.length) return this._timeout;
	  this._timeout = v;
	  return this;
	};

	/**
	 * Starts trying to reconnect if reconnection is enabled and we have not
	 * started reconnecting yet
	 *
	 * @api private
	 */

	Manager.prototype.maybeReconnectOnOpen = function () {
	  // Only try to reconnect if it's the first time we're connecting
	  if (!this.reconnecting && this._reconnection && this.backoff.attempts === 0) {
	    // keeps reconnection from firing twice for the same reconnection loop
	    this.reconnect();
	  }
	};

	/**
	 * Sets the current transport `socket`.
	 *
	 * @param {Function} optional, callback
	 * @return {Manager} self
	 * @api public
	 */

	Manager.prototype.open =
	Manager.prototype.connect = function (fn, opts) {
	  debug('readyState %s', this.readyState);
	  if (~this.readyState.indexOf('open')) return this;

	  debug('opening %s', this.uri);
	  this.engine = eio(this.uri, this.opts);
	  var socket = this.engine;
	  var self = this;
	  this.readyState = 'opening';
	  this.skipReconnect = false;

	  // emit `open`
	  var openSub = on(socket, 'open', function () {
	    self.onopen();
	    fn && fn();
	  });

	  // emit `connect_error`
	  var errorSub = on(socket, 'error', function (data) {
	    debug('connect_error');
	    self.cleanup();
	    self.readyState = 'closed';
	    self.emitAll('connect_error', data);
	    if (fn) {
	      var err = new Error('Connection error');
	      err.data = data;
	      fn(err);
	    } else {
	      // Only do this if there is no fn to handle the error
	      self.maybeReconnectOnOpen();
	    }
	  });

	  // emit `connect_timeout`
	  if (false !== this._timeout) {
	    var timeout = this._timeout;
	    debug('connect attempt will timeout after %d', timeout);

	    // set timer
	    var timer = setTimeout(function () {
	      debug('connect attempt timed out after %d', timeout);
	      openSub.destroy();
	      socket.close();
	      socket.emit('error', 'timeout');
	      self.emitAll('connect_timeout', timeout);
	    }, timeout);

	    this.subs.push({
	      destroy: function () {
	        clearTimeout(timer);
	      }
	    });
	  }

	  this.subs.push(openSub);
	  this.subs.push(errorSub);

	  return this;
	};

	/**
	 * Called upon transport open.
	 *
	 * @api private
	 */

	Manager.prototype.onopen = function () {
	  debug('open');

	  // clear old subs
	  this.cleanup();

	  // mark as open
	  this.readyState = 'open';
	  this.emit('open');

	  // add new subs
	  var socket = this.engine;
	  this.subs.push(on(socket, 'data', bind(this, 'ondata')));
	  this.subs.push(on(socket, 'ping', bind(this, 'onping')));
	  this.subs.push(on(socket, 'pong', bind(this, 'onpong')));
	  this.subs.push(on(socket, 'error', bind(this, 'onerror')));
	  this.subs.push(on(socket, 'close', bind(this, 'onclose')));
	  this.subs.push(on(this.decoder, 'decoded', bind(this, 'ondecoded')));
	};

	/**
	 * Called upon a ping.
	 *
	 * @api private
	 */

	Manager.prototype.onping = function () {
	  this.lastPing = new Date();
	  this.emitAll('ping');
	};

	/**
	 * Called upon a packet.
	 *
	 * @api private
	 */

	Manager.prototype.onpong = function () {
	  this.emitAll('pong', new Date() - this.lastPing);
	};

	/**
	 * Called with data.
	 *
	 * @api private
	 */

	Manager.prototype.ondata = function (data) {
	  this.decoder.add(data);
	};

	/**
	 * Called when parser fully decodes a packet.
	 *
	 * @api private
	 */

	Manager.prototype.ondecoded = function (packet) {
	  this.emit('packet', packet);
	};

	/**
	 * Called upon socket error.
	 *
	 * @api private
	 */

	Manager.prototype.onerror = function (err) {
	  debug('error', err);
	  this.emitAll('error', err);
	};

	/**
	 * Creates a new socket for the given `nsp`.
	 *
	 * @return {Socket}
	 * @api public
	 */

	Manager.prototype.socket = function (nsp, opts) {
	  var socket = this.nsps[nsp];
	  if (!socket) {
	    socket = new Socket(this, nsp, opts);
	    this.nsps[nsp] = socket;
	    var self = this;
	    socket.on('connecting', onConnecting);
	    socket.on('connect', function () {
	      socket.id = self.generateId(nsp);
	    });

	    if (this.autoConnect) {
	      // manually call here since connecting event is fired before listening
	      onConnecting();
	    }
	  }

	  function onConnecting () {
	    if (!~indexOf(self.connecting, socket)) {
	      self.connecting.push(socket);
	    }
	  }

	  return socket;
	};

	/**
	 * Called upon a socket close.
	 *
	 * @param {Socket} socket
	 */

	Manager.prototype.destroy = function (socket) {
	  var index = indexOf(this.connecting, socket);
	  if (~index) this.connecting.splice(index, 1);
	  if (this.connecting.length) return;

	  this.close();
	};

	/**
	 * Writes a packet.
	 *
	 * @param {Object} packet
	 * @api private
	 */

	Manager.prototype.packet = function (packet) {
	  debug('writing packet %j', packet);
	  var self = this;
	  if (packet.query && packet.type === 0) packet.nsp += '?' + packet.query;

	  if (!self.encoding) {
	    // encode, then write to engine with result
	    self.encoding = true;
	    this.encoder.encode(packet, function (encodedPackets) {
	      for (var i = 0; i < encodedPackets.length; i++) {
	        self.engine.write(encodedPackets[i], packet.options);
	      }
	      self.encoding = false;
	      self.processPacketQueue();
	    });
	  } else { // add packet to the queue
	    self.packetBuffer.push(packet);
	  }
	};

	/**
	 * If packet buffer is non-empty, begins encoding the
	 * next packet in line.
	 *
	 * @api private
	 */

	Manager.prototype.processPacketQueue = function () {
	  if (this.packetBuffer.length > 0 && !this.encoding) {
	    var pack = this.packetBuffer.shift();
	    this.packet(pack);
	  }
	};

	/**
	 * Clean up transport subscriptions and packet buffer.
	 *
	 * @api private
	 */

	Manager.prototype.cleanup = function () {
	  debug('cleanup');

	  var subsLength = this.subs.length;
	  for (var i = 0; i < subsLength; i++) {
	    var sub = this.subs.shift();
	    sub.destroy();
	  }

	  this.packetBuffer = [];
	  this.encoding = false;
	  this.lastPing = null;

	  this.decoder.destroy();
	};

	/**
	 * Close the current socket.
	 *
	 * @api private
	 */

	Manager.prototype.close =
	Manager.prototype.disconnect = function () {
	  debug('disconnect');
	  this.skipReconnect = true;
	  this.reconnecting = false;
	  if ('opening' === this.readyState) {
	    // `onclose` will not fire because
	    // an open event never happened
	    this.cleanup();
	  }
	  this.backoff.reset();
	  this.readyState = 'closed';
	  if (this.engine) this.engine.close();
	};

	/**
	 * Called upon engine close.
	 *
	 * @api private
	 */

	Manager.prototype.onclose = function (reason) {
	  debug('onclose');

	  this.cleanup();
	  this.backoff.reset();
	  this.readyState = 'closed';
	  this.emit('close', reason);

	  if (this._reconnection && !this.skipReconnect) {
	    this.reconnect();
	  }
	};

	/**
	 * Attempt a reconnection.
	 *
	 * @api private
	 */

	Manager.prototype.reconnect = function () {
	  if (this.reconnecting || this.skipReconnect) return this;

	  var self = this;

	  if (this.backoff.attempts >= this._reconnectionAttempts) {
	    debug('reconnect failed');
	    this.backoff.reset();
	    this.emitAll('reconnect_failed');
	    this.reconnecting = false;
	  } else {
	    var delay = this.backoff.duration();
	    debug('will wait %dms before reconnect attempt', delay);

	    this.reconnecting = true;
	    var timer = setTimeout(function () {
	      if (self.skipReconnect) return;

	      debug('attempting reconnect');
	      self.emitAll('reconnect_attempt', self.backoff.attempts);
	      self.emitAll('reconnecting', self.backoff.attempts);

	      // check again for the case socket closed in above events
	      if (self.skipReconnect) return;

	      self.open(function (err) {
	        if (err) {
	          debug('reconnect attempt error');
	          self.reconnecting = false;
	          self.reconnect();
	          self.emitAll('reconnect_error', err.data);
	        } else {
	          debug('reconnect success');
	          self.onreconnect();
	        }
	      });
	    }, delay);

	    this.subs.push({
	      destroy: function () {
	        clearTimeout(timer);
	      }
	    });
	  }
	};

	/**
	 * Called upon successful reconnect.
	 *
	 * @api private
	 */

	Manager.prototype.onreconnect = function () {
	  var attempt = this.backoff.attempts;
	  this.reconnecting = false;
	  this.backoff.reset();
	  this.updateSocketIds();
	  this.emitAll('reconnect', attempt);
	};


/***/ },
/* 233 */
/***/ function(module, exports, __webpack_require__) {

	
	module.exports = __webpack_require__(234);

	/**
	 * Exports parser
	 *
	 * @api public
	 *
	 */
	module.exports.parser = __webpack_require__(241);


/***/ },
/* 234 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * Module dependencies.
	 */

	var transports = __webpack_require__(235);
	var Emitter = __webpack_require__(226);
	var debug = __webpack_require__(221)('engine.io-client:socket');
	var index = __webpack_require__(255);
	var parser = __webpack_require__(241);
	var parseuri = __webpack_require__(220);
	var parseqs = __webpack_require__(249);

	/**
	 * Module exports.
	 */

	module.exports = Socket;

	/**
	 * Socket constructor.
	 *
	 * @param {String|Object} uri or options
	 * @param {Object} options
	 * @api public
	 */

	function Socket (uri, opts) {
	  if (!(this instanceof Socket)) return new Socket(uri, opts);

	  opts = opts || {};

	  if (uri && 'object' === typeof uri) {
	    opts = uri;
	    uri = null;
	  }

	  if (uri) {
	    uri = parseuri(uri);
	    opts.hostname = uri.host;
	    opts.secure = uri.protocol === 'https' || uri.protocol === 'wss';
	    opts.port = uri.port;
	    if (uri.query) opts.query = uri.query;
	  } else if (opts.host) {
	    opts.hostname = parseuri(opts.host).host;
	  }

	  this.secure = null != opts.secure ? opts.secure
	    : (global.location && 'https:' === location.protocol);

	  if (opts.hostname && !opts.port) {
	    // if no port is specified manually, use the protocol default
	    opts.port = this.secure ? '443' : '80';
	  }

	  this.agent = opts.agent || false;
	  this.hostname = opts.hostname ||
	    (global.location ? location.hostname : 'localhost');
	  this.port = opts.port || (global.location && location.port
	      ? location.port
	      : (this.secure ? 443 : 80));
	  this.query = opts.query || {};
	  if ('string' === typeof this.query) this.query = parseqs.decode(this.query);
	  this.upgrade = false !== opts.upgrade;
	  this.path = (opts.path || '/engine.io').replace(/\/$/, '') + '/';
	  this.forceJSONP = !!opts.forceJSONP;
	  this.jsonp = false !== opts.jsonp;
	  this.forceBase64 = !!opts.forceBase64;
	  this.enablesXDR = !!opts.enablesXDR;
	  this.timestampParam = opts.timestampParam || 't';
	  this.timestampRequests = opts.timestampRequests;
	  this.transports = opts.transports || ['polling', 'websocket'];
	  this.transportOptions = opts.transportOptions || {};
	  this.readyState = '';
	  this.writeBuffer = [];
	  this.prevBufferLen = 0;
	  this.policyPort = opts.policyPort || 843;
	  this.rememberUpgrade = opts.rememberUpgrade || false;
	  this.binaryType = null;
	  this.onlyBinaryUpgrades = opts.onlyBinaryUpgrades;
	  this.perMessageDeflate = false !== opts.perMessageDeflate ? (opts.perMessageDeflate || {}) : false;

	  if (true === this.perMessageDeflate) this.perMessageDeflate = {};
	  if (this.perMessageDeflate && null == this.perMessageDeflate.threshold) {
	    this.perMessageDeflate.threshold = 1024;
	  }

	  // SSL options for Node.js client
	  this.pfx = opts.pfx || null;
	  this.key = opts.key || null;
	  this.passphrase = opts.passphrase || null;
	  this.cert = opts.cert || null;
	  this.ca = opts.ca || null;
	  this.ciphers = opts.ciphers || null;
	  this.rejectUnauthorized = opts.rejectUnauthorized === undefined ? true : opts.rejectUnauthorized;
	  this.forceNode = !!opts.forceNode;

	  // other options for Node.js client
	  var freeGlobal = typeof global === 'object' && global;
	  if (freeGlobal.global === freeGlobal) {
	    if (opts.extraHeaders && Object.keys(opts.extraHeaders).length > 0) {
	      this.extraHeaders = opts.extraHeaders;
	    }

	    if (opts.localAddress) {
	      this.localAddress = opts.localAddress;
	    }
	  }

	  // set on handshake
	  this.id = null;
	  this.upgrades = null;
	  this.pingInterval = null;
	  this.pingTimeout = null;

	  // set on heartbeat
	  this.pingIntervalTimer = null;
	  this.pingTimeoutTimer = null;

	  this.open();
	}

	Socket.priorWebsocketSuccess = false;

	/**
	 * Mix in `Emitter`.
	 */

	Emitter(Socket.prototype);

	/**
	 * Protocol version.
	 *
	 * @api public
	 */

	Socket.protocol = parser.protocol; // this is an int

	/**
	 * Expose deps for legacy compatibility
	 * and standalone browser access.
	 */

	Socket.Socket = Socket;
	Socket.Transport = __webpack_require__(240);
	Socket.transports = __webpack_require__(235);
	Socket.parser = __webpack_require__(241);

	/**
	 * Creates transport of the given type.
	 *
	 * @param {String} transport name
	 * @return {Transport}
	 * @api private
	 */

	Socket.prototype.createTransport = function (name) {
	  debug('creating transport "%s"', name);
	  var query = clone(this.query);

	  // append engine.io protocol identifier
	  query.EIO = parser.protocol;

	  // transport name
	  query.transport = name;

	  // per-transport options
	  var options = this.transportOptions[name] || {};

	  // session id if we already have one
	  if (this.id) query.sid = this.id;

	  var transport = new transports[name]({
	    query: query,
	    socket: this,
	    agent: options.agent || this.agent,
	    hostname: options.hostname || this.hostname,
	    port: options.port || this.port,
	    secure: options.secure || this.secure,
	    path: options.path || this.path,
	    forceJSONP: options.forceJSONP || this.forceJSONP,
	    jsonp: options.jsonp || this.jsonp,
	    forceBase64: options.forceBase64 || this.forceBase64,
	    enablesXDR: options.enablesXDR || this.enablesXDR,
	    timestampRequests: options.timestampRequests || this.timestampRequests,
	    timestampParam: options.timestampParam || this.timestampParam,
	    policyPort: options.policyPort || this.policyPort,
	    pfx: options.pfx || this.pfx,
	    key: options.key || this.key,
	    passphrase: options.passphrase || this.passphrase,
	    cert: options.cert || this.cert,
	    ca: options.ca || this.ca,
	    ciphers: options.ciphers || this.ciphers,
	    rejectUnauthorized: options.rejectUnauthorized || this.rejectUnauthorized,
	    perMessageDeflate: options.perMessageDeflate || this.perMessageDeflate,
	    extraHeaders: options.extraHeaders || this.extraHeaders,
	    forceNode: options.forceNode || this.forceNode,
	    localAddress: options.localAddress || this.localAddress,
	    requestTimeout: options.requestTimeout || this.requestTimeout,
	    protocols: options.protocols || void (0)
	  });

	  return transport;
	};

	function clone (obj) {
	  var o = {};
	  for (var i in obj) {
	    if (obj.hasOwnProperty(i)) {
	      o[i] = obj[i];
	    }
	  }
	  return o;
	}

	/**
	 * Initializes transport to use and starts probe.
	 *
	 * @api private
	 */
	Socket.prototype.open = function () {
	  var transport;
	  if (this.rememberUpgrade && Socket.priorWebsocketSuccess && this.transports.indexOf('websocket') !== -1) {
	    transport = 'websocket';
	  } else if (0 === this.transports.length) {
	    // Emit error on next tick so it can be listened to
	    var self = this;
	    setTimeout(function () {
	      self.emit('error', 'No transports available');
	    }, 0);
	    return;
	  } else {
	    transport = this.transports[0];
	  }
	  this.readyState = 'opening';

	  // Retry with the next transport if the transport is disabled (jsonp: false)
	  try {
	    transport = this.createTransport(transport);
	  } catch (e) {
	    this.transports.shift();
	    this.open();
	    return;
	  }

	  transport.open();
	  this.setTransport(transport);
	};

	/**
	 * Sets the current transport. Disables the existing one (if any).
	 *
	 * @api private
	 */

	Socket.prototype.setTransport = function (transport) {
	  debug('setting transport %s', transport.name);
	  var self = this;

	  if (this.transport) {
	    debug('clearing existing transport %s', this.transport.name);
	    this.transport.removeAllListeners();
	  }

	  // set up transport
	  this.transport = transport;

	  // set up transport listeners
	  transport
	  .on('drain', function () {
	    self.onDrain();
	  })
	  .on('packet', function (packet) {
	    self.onPacket(packet);
	  })
	  .on('error', function (e) {
	    self.onError(e);
	  })
	  .on('close', function () {
	    self.onClose('transport close');
	  });
	};

	/**
	 * Probes a transport.
	 *
	 * @param {String} transport name
	 * @api private
	 */

	Socket.prototype.probe = function (name) {
	  debug('probing transport "%s"', name);
	  var transport = this.createTransport(name, { probe: 1 });
	  var failed = false;
	  var self = this;

	  Socket.priorWebsocketSuccess = false;

	  function onTransportOpen () {
	    if (self.onlyBinaryUpgrades) {
	      var upgradeLosesBinary = !this.supportsBinary && self.transport.supportsBinary;
	      failed = failed || upgradeLosesBinary;
	    }
	    if (failed) return;

	    debug('probe transport "%s" opened', name);
	    transport.send([{ type: 'ping', data: 'probe' }]);
	    transport.once('packet', function (msg) {
	      if (failed) return;
	      if ('pong' === msg.type && 'probe' === msg.data) {
	        debug('probe transport "%s" pong', name);
	        self.upgrading = true;
	        self.emit('upgrading', transport);
	        if (!transport) return;
	        Socket.priorWebsocketSuccess = 'websocket' === transport.name;

	        debug('pausing current transport "%s"', self.transport.name);
	        self.transport.pause(function () {
	          if (failed) return;
	          if ('closed' === self.readyState) return;
	          debug('changing transport and sending upgrade packet');

	          cleanup();

	          self.setTransport(transport);
	          transport.send([{ type: 'upgrade' }]);
	          self.emit('upgrade', transport);
	          transport = null;
	          self.upgrading = false;
	          self.flush();
	        });
	      } else {
	        debug('probe transport "%s" failed', name);
	        var err = new Error('probe error');
	        err.transport = transport.name;
	        self.emit('upgradeError', err);
	      }
	    });
	  }

	  function freezeTransport () {
	    if (failed) return;

	    // Any callback called by transport should be ignored since now
	    failed = true;

	    cleanup();

	    transport.close();
	    transport = null;
	  }

	  // Handle any error that happens while probing
	  function onerror (err) {
	    var error = new Error('probe error: ' + err);
	    error.transport = transport.name;

	    freezeTransport();

	    debug('probe transport "%s" failed because of error: %s', name, err);

	    self.emit('upgradeError', error);
	  }

	  function onTransportClose () {
	    onerror('transport closed');
	  }

	  // When the socket is closed while we're probing
	  function onclose () {
	    onerror('socket closed');
	  }

	  // When the socket is upgraded while we're probing
	  function onupgrade (to) {
	    if (transport && to.name !== transport.name) {
	      debug('"%s" works - aborting "%s"', to.name, transport.name);
	      freezeTransport();
	    }
	  }

	  // Remove all listeners on the transport and on self
	  function cleanup () {
	    transport.removeListener('open', onTransportOpen);
	    transport.removeListener('error', onerror);
	    transport.removeListener('close', onTransportClose);
	    self.removeListener('close', onclose);
	    self.removeListener('upgrading', onupgrade);
	  }

	  transport.once('open', onTransportOpen);
	  transport.once('error', onerror);
	  transport.once('close', onTransportClose);

	  this.once('close', onclose);
	  this.once('upgrading', onupgrade);

	  transport.open();
	};

	/**
	 * Called when connection is deemed open.
	 *
	 * @api public
	 */

	Socket.prototype.onOpen = function () {
	  debug('socket open');
	  this.readyState = 'open';
	  Socket.priorWebsocketSuccess = 'websocket' === this.transport.name;
	  this.emit('open');
	  this.flush();

	  // we check for `readyState` in case an `open`
	  // listener already closed the socket
	  if ('open' === this.readyState && this.upgrade && this.transport.pause) {
	    debug('starting upgrade probes');
	    for (var i = 0, l = this.upgrades.length; i < l; i++) {
	      this.probe(this.upgrades[i]);
	    }
	  }
	};

	/**
	 * Handles a packet.
	 *
	 * @api private
	 */

	Socket.prototype.onPacket = function (packet) {
	  if ('opening' === this.readyState || 'open' === this.readyState ||
	      'closing' === this.readyState) {
	    debug('socket receive: type "%s", data "%s"', packet.type, packet.data);

	    this.emit('packet', packet);

	    // Socket is live - any packet counts
	    this.emit('heartbeat');

	    switch (packet.type) {
	      case 'open':
	        this.onHandshake(JSON.parse(packet.data));
	        break;

	      case 'pong':
	        this.setPing();
	        this.emit('pong');
	        break;

	      case 'error':
	        var err = new Error('server error');
	        err.code = packet.data;
	        this.onError(err);
	        break;

	      case 'message':
	        this.emit('data', packet.data);
	        this.emit('message', packet.data);
	        break;
	    }
	  } else {
	    debug('packet received with socket readyState "%s"', this.readyState);
	  }
	};

	/**
	 * Called upon handshake completion.
	 *
	 * @param {Object} handshake obj
	 * @api private
	 */

	Socket.prototype.onHandshake = function (data) {
	  this.emit('handshake', data);
	  this.id = data.sid;
	  this.transport.query.sid = data.sid;
	  this.upgrades = this.filterUpgrades(data.upgrades);
	  this.pingInterval = data.pingInterval;
	  this.pingTimeout = data.pingTimeout;
	  this.onOpen();
	  // In case open handler closes socket
	  if ('closed' === this.readyState) return;
	  this.setPing();

	  // Prolong liveness of socket on heartbeat
	  this.removeListener('heartbeat', this.onHeartbeat);
	  this.on('heartbeat', this.onHeartbeat);
	};

	/**
	 * Resets ping timeout.
	 *
	 * @api private
	 */

	Socket.prototype.onHeartbeat = function (timeout) {
	  clearTimeout(this.pingTimeoutTimer);
	  var self = this;
	  self.pingTimeoutTimer = setTimeout(function () {
	    if ('closed' === self.readyState) return;
	    self.onClose('ping timeout');
	  }, timeout || (self.pingInterval + self.pingTimeout));
	};

	/**
	 * Pings server every `this.pingInterval` and expects response
	 * within `this.pingTimeout` or closes connection.
	 *
	 * @api private
	 */

	Socket.prototype.setPing = function () {
	  var self = this;
	  clearTimeout(self.pingIntervalTimer);
	  self.pingIntervalTimer = setTimeout(function () {
	    debug('writing ping packet - expecting pong within %sms', self.pingTimeout);
	    self.ping();
	    self.onHeartbeat(self.pingTimeout);
	  }, self.pingInterval);
	};

	/**
	* Sends a ping packet.
	*
	* @api private
	*/

	Socket.prototype.ping = function () {
	  var self = this;
	  this.sendPacket('ping', function () {
	    self.emit('ping');
	  });
	};

	/**
	 * Called on `drain` event
	 *
	 * @api private
	 */

	Socket.prototype.onDrain = function () {
	  this.writeBuffer.splice(0, this.prevBufferLen);

	  // setting prevBufferLen = 0 is very important
	  // for example, when upgrading, upgrade packet is sent over,
	  // and a nonzero prevBufferLen could cause problems on `drain`
	  this.prevBufferLen = 0;

	  if (0 === this.writeBuffer.length) {
	    this.emit('drain');
	  } else {
	    this.flush();
	  }
	};

	/**
	 * Flush write buffers.
	 *
	 * @api private
	 */

	Socket.prototype.flush = function () {
	  if ('closed' !== this.readyState && this.transport.writable &&
	    !this.upgrading && this.writeBuffer.length) {
	    debug('flushing %d packets in socket', this.writeBuffer.length);
	    this.transport.send(this.writeBuffer);
	    // keep track of current length of writeBuffer
	    // splice writeBuffer and callbackBuffer on `drain`
	    this.prevBufferLen = this.writeBuffer.length;
	    this.emit('flush');
	  }
	};

	/**
	 * Sends a message.
	 *
	 * @param {String} message.
	 * @param {Function} callback function.
	 * @param {Object} options.
	 * @return {Socket} for chaining.
	 * @api public
	 */

	Socket.prototype.write =
	Socket.prototype.send = function (msg, options, fn) {
	  this.sendPacket('message', msg, options, fn);
	  return this;
	};

	/**
	 * Sends a packet.
	 *
	 * @param {String} packet type.
	 * @param {String} data.
	 * @param {Object} options.
	 * @param {Function} callback function.
	 * @api private
	 */

	Socket.prototype.sendPacket = function (type, data, options, fn) {
	  if ('function' === typeof data) {
	    fn = data;
	    data = undefined;
	  }

	  if ('function' === typeof options) {
	    fn = options;
	    options = null;
	  }

	  if ('closing' === this.readyState || 'closed' === this.readyState) {
	    return;
	  }

	  options = options || {};
	  options.compress = false !== options.compress;

	  var packet = {
	    type: type,
	    data: data,
	    options: options
	  };
	  this.emit('packetCreate', packet);
	  this.writeBuffer.push(packet);
	  if (fn) this.once('flush', fn);
	  this.flush();
	};

	/**
	 * Closes the connection.
	 *
	 * @api private
	 */

	Socket.prototype.close = function () {
	  if ('opening' === this.readyState || 'open' === this.readyState) {
	    this.readyState = 'closing';

	    var self = this;

	    if (this.writeBuffer.length) {
	      this.once('drain', function () {
	        if (this.upgrading) {
	          waitForUpgrade();
	        } else {
	          close();
	        }
	      });
	    } else if (this.upgrading) {
	      waitForUpgrade();
	    } else {
	      close();
	    }
	  }

	  function close () {
	    self.onClose('forced close');
	    debug('socket closing - telling transport to close');
	    self.transport.close();
	  }

	  function cleanupAndClose () {
	    self.removeListener('upgrade', cleanupAndClose);
	    self.removeListener('upgradeError', cleanupAndClose);
	    close();
	  }

	  function waitForUpgrade () {
	    // wait for upgrade to finish since we can't send packets while pausing a transport
	    self.once('upgrade', cleanupAndClose);
	    self.once('upgradeError', cleanupAndClose);
	  }

	  return this;
	};

	/**
	 * Called upon transport error
	 *
	 * @api private
	 */

	Socket.prototype.onError = function (err) {
	  debug('socket error %j', err);
	  Socket.priorWebsocketSuccess = false;
	  this.emit('error', err);
	  this.onClose('transport error', err);
	};

	/**
	 * Called upon transport close.
	 *
	 * @api private
	 */

	Socket.prototype.onClose = function (reason, desc) {
	  if ('opening' === this.readyState || 'open' === this.readyState || 'closing' === this.readyState) {
	    debug('socket close with reason: "%s"', reason);
	    var self = this;

	    // clear timers
	    clearTimeout(this.pingIntervalTimer);
	    clearTimeout(this.pingTimeoutTimer);

	    // stop event from firing again for transport
	    this.transport.removeAllListeners('close');

	    // ensure transport won't stay open
	    this.transport.close();

	    // ignore further transport communication
	    this.transport.removeAllListeners();

	    // set ready state
	    this.readyState = 'closed';

	    // clear session id
	    this.id = null;

	    // emit close event
	    this.emit('close', reason, desc);

	    // clean buffers after, so users can still
	    // grab the buffers on `close` event
	    self.writeBuffer = [];
	    self.prevBufferLen = 0;
	  }
	};

	/**
	 * Filters upgrades, returning only those matching client transports.
	 *
	 * @param {Array} server upgrades
	 * @api private
	 *
	 */

	Socket.prototype.filterUpgrades = function (upgrades) {
	  var filteredUpgrades = [];
	  for (var i = 0, j = upgrades.length; i < j; i++) {
	    if (~index(this.transports, upgrades[i])) filteredUpgrades.push(upgrades[i]);
	  }
	  return filteredUpgrades;
	};

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 235 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * Module dependencies
	 */

	var XMLHttpRequest = __webpack_require__(236);
	var XHR = __webpack_require__(238);
	var JSONP = __webpack_require__(252);
	var websocket = __webpack_require__(253);

	/**
	 * Export transports.
	 */

	exports.polling = polling;
	exports.websocket = websocket;

	/**
	 * Polling transport polymorphic constructor.
	 * Decides on xhr vs jsonp based on feature detection.
	 *
	 * @api private
	 */

	function polling (opts) {
	  var xhr;
	  var xd = false;
	  var xs = false;
	  var jsonp = false !== opts.jsonp;

	  if (global.location) {
	    var isSSL = 'https:' === location.protocol;
	    var port = location.port;

	    // some user agents have empty `location.port`
	    if (!port) {
	      port = isSSL ? 443 : 80;
	    }

	    xd = opts.hostname !== location.hostname || port !== opts.port;
	    xs = opts.secure !== isSSL;
	  }

	  opts.xdomain = xd;
	  opts.xscheme = xs;
	  xhr = new XMLHttpRequest(opts);

	  if ('open' in xhr && !opts.forceJSONP) {
	    return new XHR(opts);
	  } else {
	    if (!jsonp) throw new Error('JSONP disabled');
	    return new JSONP(opts);
	  }
	}

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 236 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {// browser shim for xmlhttprequest module

	var hasCORS = __webpack_require__(237);

	module.exports = function (opts) {
	  var xdomain = opts.xdomain;

	  // scheme must be same when usign XDomainRequest
	  // http://blogs.msdn.com/b/ieinternals/archive/2010/05/13/xdomainrequest-restrictions-limitations-and-workarounds.aspx
	  var xscheme = opts.xscheme;

	  // XDomainRequest has a flow of not sending cookie, therefore it should be disabled as a default.
	  // https://github.com/Automattic/engine.io-client/pull/217
	  var enablesXDR = opts.enablesXDR;

	  // XMLHttpRequest can be disabled on IE
	  try {
	    if ('undefined' !== typeof XMLHttpRequest && (!xdomain || hasCORS)) {
	      return new XMLHttpRequest();
	    }
	  } catch (e) { }

	  // Use XDomainRequest for IE8 if enablesXDR is true
	  // because loading bar keeps flashing when using jsonp-polling
	  // https://github.com/yujiosaka/socke.io-ie8-loading-example
	  try {
	    if ('undefined' !== typeof XDomainRequest && !xscheme && enablesXDR) {
	      return new XDomainRequest();
	    }
	  } catch (e) { }

	  if (!xdomain) {
	    try {
	      return new global[['Active'].concat('Object').join('X')]('Microsoft.XMLHTTP');
	    } catch (e) { }
	  }
	};

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 237 */
/***/ function(module, exports) {

	
	/**
	 * Module exports.
	 *
	 * Logic borrowed from Modernizr:
	 *
	 *   - https://github.com/Modernizr/Modernizr/blob/master/feature-detects/cors.js
	 */

	try {
	  module.exports = typeof XMLHttpRequest !== 'undefined' &&
	    'withCredentials' in new XMLHttpRequest();
	} catch (err) {
	  // if XMLHttp support is disabled in IE then it will throw
	  // when trying to create
	  module.exports = false;
	}


/***/ },
/* 238 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * Module requirements.
	 */

	var XMLHttpRequest = __webpack_require__(236);
	var Polling = __webpack_require__(239);
	var Emitter = __webpack_require__(226);
	var inherit = __webpack_require__(250);
	var debug = __webpack_require__(221)('engine.io-client:polling-xhr');

	/**
	 * Module exports.
	 */

	module.exports = XHR;
	module.exports.Request = Request;

	/**
	 * Empty function
	 */

	function empty () {}

	/**
	 * XHR Polling constructor.
	 *
	 * @param {Object} opts
	 * @api public
	 */

	function XHR (opts) {
	  Polling.call(this, opts);
	  this.requestTimeout = opts.requestTimeout;
	  this.extraHeaders = opts.extraHeaders;

	  if (global.location) {
	    var isSSL = 'https:' === location.protocol;
	    var port = location.port;

	    // some user agents have empty `location.port`
	    if (!port) {
	      port = isSSL ? 443 : 80;
	    }

	    this.xd = opts.hostname !== global.location.hostname ||
	      port !== opts.port;
	    this.xs = opts.secure !== isSSL;
	  }
	}

	/**
	 * Inherits from Polling.
	 */

	inherit(XHR, Polling);

	/**
	 * XHR supports binary
	 */

	XHR.prototype.supportsBinary = true;

	/**
	 * Creates a request.
	 *
	 * @param {String} method
	 * @api private
	 */

	XHR.prototype.request = function (opts) {
	  opts = opts || {};
	  opts.uri = this.uri();
	  opts.xd = this.xd;
	  opts.xs = this.xs;
	  opts.agent = this.agent || false;
	  opts.supportsBinary = this.supportsBinary;
	  opts.enablesXDR = this.enablesXDR;

	  // SSL options for Node.js client
	  opts.pfx = this.pfx;
	  opts.key = this.key;
	  opts.passphrase = this.passphrase;
	  opts.cert = this.cert;
	  opts.ca = this.ca;
	  opts.ciphers = this.ciphers;
	  opts.rejectUnauthorized = this.rejectUnauthorized;
	  opts.requestTimeout = this.requestTimeout;

	  // other options for Node.js client
	  opts.extraHeaders = this.extraHeaders;

	  return new Request(opts);
	};

	/**
	 * Sends data.
	 *
	 * @param {String} data to send.
	 * @param {Function} called upon flush.
	 * @api private
	 */

	XHR.prototype.doWrite = function (data, fn) {
	  var isBinary = typeof data !== 'string' && data !== undefined;
	  var req = this.request({ method: 'POST', data: data, isBinary: isBinary });
	  var self = this;
	  req.on('success', fn);
	  req.on('error', function (err) {
	    self.onError('xhr post error', err);
	  });
	  this.sendXhr = req;
	};

	/**
	 * Starts a poll cycle.
	 *
	 * @api private
	 */

	XHR.prototype.doPoll = function () {
	  debug('xhr poll');
	  var req = this.request();
	  var self = this;
	  req.on('data', function (data) {
	    self.onData(data);
	  });
	  req.on('error', function (err) {
	    self.onError('xhr poll error', err);
	  });
	  this.pollXhr = req;
	};

	/**
	 * Request constructor
	 *
	 * @param {Object} options
	 * @api public
	 */

	function Request (opts) {
	  this.method = opts.method || 'GET';
	  this.uri = opts.uri;
	  this.xd = !!opts.xd;
	  this.xs = !!opts.xs;
	  this.async = false !== opts.async;
	  this.data = undefined !== opts.data ? opts.data : null;
	  this.agent = opts.agent;
	  this.isBinary = opts.isBinary;
	  this.supportsBinary = opts.supportsBinary;
	  this.enablesXDR = opts.enablesXDR;
	  this.requestTimeout = opts.requestTimeout;

	  // SSL options for Node.js client
	  this.pfx = opts.pfx;
	  this.key = opts.key;
	  this.passphrase = opts.passphrase;
	  this.cert = opts.cert;
	  this.ca = opts.ca;
	  this.ciphers = opts.ciphers;
	  this.rejectUnauthorized = opts.rejectUnauthorized;

	  // other options for Node.js client
	  this.extraHeaders = opts.extraHeaders;

	  this.create();
	}

	/**
	 * Mix in `Emitter`.
	 */

	Emitter(Request.prototype);

	/**
	 * Creates the XHR object and sends the request.
	 *
	 * @api private
	 */

	Request.prototype.create = function () {
	  var opts = { agent: this.agent, xdomain: this.xd, xscheme: this.xs, enablesXDR: this.enablesXDR };

	  // SSL options for Node.js client
	  opts.pfx = this.pfx;
	  opts.key = this.key;
	  opts.passphrase = this.passphrase;
	  opts.cert = this.cert;
	  opts.ca = this.ca;
	  opts.ciphers = this.ciphers;
	  opts.rejectUnauthorized = this.rejectUnauthorized;

	  var xhr = this.xhr = new XMLHttpRequest(opts);
	  var self = this;

	  try {
	    debug('xhr open %s: %s', this.method, this.uri);
	    xhr.open(this.method, this.uri, this.async);
	    try {
	      if (this.extraHeaders) {
	        xhr.setDisableHeaderCheck && xhr.setDisableHeaderCheck(true);
	        for (var i in this.extraHeaders) {
	          if (this.extraHeaders.hasOwnProperty(i)) {
	            xhr.setRequestHeader(i, this.extraHeaders[i]);
	          }
	        }
	      }
	    } catch (e) {}

	    if ('POST' === this.method) {
	      try {
	        if (this.isBinary) {
	          xhr.setRequestHeader('Content-type', 'application/octet-stream');
	        } else {
	          xhr.setRequestHeader('Content-type', 'text/plain;charset=UTF-8');
	        }
	      } catch (e) {}
	    }

	    try {
	      xhr.setRequestHeader('Accept', '*/*');
	    } catch (e) {}

	    // ie6 check
	    if ('withCredentials' in xhr) {
	      xhr.withCredentials = true;
	    }

	    if (this.requestTimeout) {
	      xhr.timeout = this.requestTimeout;
	    }

	    if (this.hasXDR()) {
	      xhr.onload = function () {
	        self.onLoad();
	      };
	      xhr.onerror = function () {
	        self.onError(xhr.responseText);
	      };
	    } else {
	      xhr.onreadystatechange = function () {
	        if (xhr.readyState === 2) {
	          var contentType;
	          try {
	            contentType = xhr.getResponseHeader('Content-Type');
	          } catch (e) {}
	          if (contentType === 'application/octet-stream') {
	            xhr.responseType = 'arraybuffer';
	          }
	        }
	        if (4 !== xhr.readyState) return;
	        if (200 === xhr.status || 1223 === xhr.status) {
	          self.onLoad();
	        } else {
	          // make sure the `error` event handler that's user-set
	          // does not throw in the same tick and gets caught here
	          setTimeout(function () {
	            self.onError(xhr.status);
	          }, 0);
	        }
	      };
	    }

	    debug('xhr data %s', this.data);
	    xhr.send(this.data);
	  } catch (e) {
	    // Need to defer since .create() is called directly fhrom the constructor
	    // and thus the 'error' event can only be only bound *after* this exception
	    // occurs.  Therefore, also, we cannot throw here at all.
	    setTimeout(function () {
	      self.onError(e);
	    }, 0);
	    return;
	  }

	  if (global.document) {
	    this.index = Request.requestsCount++;
	    Request.requests[this.index] = this;
	  }
	};

	/**
	 * Called upon successful response.
	 *
	 * @api private
	 */

	Request.prototype.onSuccess = function () {
	  this.emit('success');
	  this.cleanup();
	};

	/**
	 * Called if we have data.
	 *
	 * @api private
	 */

	Request.prototype.onData = function (data) {
	  this.emit('data', data);
	  this.onSuccess();
	};

	/**
	 * Called upon error.
	 *
	 * @api private
	 */

	Request.prototype.onError = function (err) {
	  this.emit('error', err);
	  this.cleanup(true);
	};

	/**
	 * Cleans up house.
	 *
	 * @api private
	 */

	Request.prototype.cleanup = function (fromError) {
	  if ('undefined' === typeof this.xhr || null === this.xhr) {
	    return;
	  }
	  // xmlhttprequest
	  if (this.hasXDR()) {
	    this.xhr.onload = this.xhr.onerror = empty;
	  } else {
	    this.xhr.onreadystatechange = empty;
	  }

	  if (fromError) {
	    try {
	      this.xhr.abort();
	    } catch (e) {}
	  }

	  if (global.document) {
	    delete Request.requests[this.index];
	  }

	  this.xhr = null;
	};

	/**
	 * Called upon load.
	 *
	 * @api private
	 */

	Request.prototype.onLoad = function () {
	  var data;
	  try {
	    var contentType;
	    try {
	      contentType = this.xhr.getResponseHeader('Content-Type');
	    } catch (e) {}
	    if (contentType === 'application/octet-stream') {
	      data = this.xhr.response || this.xhr.responseText;
	    } else {
	      data = this.xhr.responseText;
	    }
	  } catch (e) {
	    this.onError(e);
	  }
	  if (null != data) {
	    this.onData(data);
	  }
	};

	/**
	 * Check if it has XDomainRequest.
	 *
	 * @api private
	 */

	Request.prototype.hasXDR = function () {
	  return 'undefined' !== typeof global.XDomainRequest && !this.xs && this.enablesXDR;
	};

	/**
	 * Aborts the request.
	 *
	 * @api public
	 */

	Request.prototype.abort = function () {
	  this.cleanup();
	};

	/**
	 * Aborts pending requests when unloading the window. This is needed to prevent
	 * memory leaks (e.g. when using IE) and to ensure that no spurious error is
	 * emitted.
	 */

	Request.requestsCount = 0;
	Request.requests = {};

	if (global.document) {
	  if (global.attachEvent) {
	    global.attachEvent('onunload', unloadHandler);
	  } else if (global.addEventListener) {
	    global.addEventListener('beforeunload', unloadHandler, false);
	  }
	}

	function unloadHandler () {
	  for (var i in Request.requests) {
	    if (Request.requests.hasOwnProperty(i)) {
	      Request.requests[i].abort();
	    }
	  }
	}

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 239 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Module dependencies.
	 */

	var Transport = __webpack_require__(240);
	var parseqs = __webpack_require__(249);
	var parser = __webpack_require__(241);
	var inherit = __webpack_require__(250);
	var yeast = __webpack_require__(251);
	var debug = __webpack_require__(221)('engine.io-client:polling');

	/**
	 * Module exports.
	 */

	module.exports = Polling;

	/**
	 * Is XHR2 supported?
	 */

	var hasXHR2 = (function () {
	  var XMLHttpRequest = __webpack_require__(236);
	  var xhr = new XMLHttpRequest({ xdomain: false });
	  return null != xhr.responseType;
	})();

	/**
	 * Polling interface.
	 *
	 * @param {Object} opts
	 * @api private
	 */

	function Polling (opts) {
	  var forceBase64 = (opts && opts.forceBase64);
	  if (!hasXHR2 || forceBase64) {
	    this.supportsBinary = false;
	  }
	  Transport.call(this, opts);
	}

	/**
	 * Inherits from Transport.
	 */

	inherit(Polling, Transport);

	/**
	 * Transport name.
	 */

	Polling.prototype.name = 'polling';

	/**
	 * Opens the socket (triggers polling). We write a PING message to determine
	 * when the transport is open.
	 *
	 * @api private
	 */

	Polling.prototype.doOpen = function () {
	  this.poll();
	};

	/**
	 * Pauses polling.
	 *
	 * @param {Function} callback upon buffers are flushed and transport is paused
	 * @api private
	 */

	Polling.prototype.pause = function (onPause) {
	  var self = this;

	  this.readyState = 'pausing';

	  function pause () {
	    debug('paused');
	    self.readyState = 'paused';
	    onPause();
	  }

	  if (this.polling || !this.writable) {
	    var total = 0;

	    if (this.polling) {
	      debug('we are currently polling - waiting to pause');
	      total++;
	      this.once('pollComplete', function () {
	        debug('pre-pause polling complete');
	        --total || pause();
	      });
	    }

	    if (!this.writable) {
	      debug('we are currently writing - waiting to pause');
	      total++;
	      this.once('drain', function () {
	        debug('pre-pause writing complete');
	        --total || pause();
	      });
	    }
	  } else {
	    pause();
	  }
	};

	/**
	 * Starts polling cycle.
	 *
	 * @api public
	 */

	Polling.prototype.poll = function () {
	  debug('polling');
	  this.polling = true;
	  this.doPoll();
	  this.emit('poll');
	};

	/**
	 * Overloads onData to detect payloads.
	 *
	 * @api private
	 */

	Polling.prototype.onData = function (data) {
	  var self = this;
	  debug('polling got data %s', data);
	  var callback = function (packet, index, total) {
	    // if its the first message we consider the transport open
	    if ('opening' === self.readyState) {
	      self.onOpen();
	    }

	    // if its a close packet, we close the ongoing requests
	    if ('close' === packet.type) {
	      self.onClose();
	      return false;
	    }

	    // otherwise bypass onData and handle the message
	    self.onPacket(packet);
	  };

	  // decode payload
	  parser.decodePayload(data, this.socket.binaryType, callback);

	  // if an event did not trigger closing
	  if ('closed' !== this.readyState) {
	    // if we got data we're not polling
	    this.polling = false;
	    this.emit('pollComplete');

	    if ('open' === this.readyState) {
	      this.poll();
	    } else {
	      debug('ignoring poll - transport state "%s"', this.readyState);
	    }
	  }
	};

	/**
	 * For polling, send a close packet.
	 *
	 * @api private
	 */

	Polling.prototype.doClose = function () {
	  var self = this;

	  function close () {
	    debug('writing close packet');
	    self.write([{ type: 'close' }]);
	  }

	  if ('open' === this.readyState) {
	    debug('transport open - closing');
	    close();
	  } else {
	    // in case we're trying to close while
	    // handshaking is in progress (GH-164)
	    debug('transport not open - deferring close');
	    this.once('open', close);
	  }
	};

	/**
	 * Writes a packets payload.
	 *
	 * @param {Array} data packets
	 * @param {Function} drain callback
	 * @api private
	 */

	Polling.prototype.write = function (packets) {
	  var self = this;
	  this.writable = false;
	  var callbackfn = function () {
	    self.writable = true;
	    self.emit('drain');
	  };

	  parser.encodePayload(packets, this.supportsBinary, function (data) {
	    self.doWrite(data, callbackfn);
	  });
	};

	/**
	 * Generates uri for connection.
	 *
	 * @api private
	 */

	Polling.prototype.uri = function () {
	  var query = this.query || {};
	  var schema = this.secure ? 'https' : 'http';
	  var port = '';

	  // cache busting is forced
	  if (false !== this.timestampRequests) {
	    query[this.timestampParam] = yeast();
	  }

	  if (!this.supportsBinary && !query.sid) {
	    query.b64 = 1;
	  }

	  query = parseqs.encode(query);

	  // avoid port if default for schema
	  if (this.port && (('https' === schema && Number(this.port) !== 443) ||
	     ('http' === schema && Number(this.port) !== 80))) {
	    port = ':' + this.port;
	  }

	  // prepend ? to query
	  if (query.length) {
	    query = '?' + query;
	  }

	  var ipv6 = this.hostname.indexOf(':') !== -1;
	  return schema + '://' + (ipv6 ? '[' + this.hostname + ']' : this.hostname) + port + this.path + query;
	};


/***/ },
/* 240 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Module dependencies.
	 */

	var parser = __webpack_require__(241);
	var Emitter = __webpack_require__(226);

	/**
	 * Module exports.
	 */

	module.exports = Transport;

	/**
	 * Transport abstract constructor.
	 *
	 * @param {Object} options.
	 * @api private
	 */

	function Transport (opts) {
	  this.path = opts.path;
	  this.hostname = opts.hostname;
	  this.port = opts.port;
	  this.secure = opts.secure;
	  this.query = opts.query;
	  this.timestampParam = opts.timestampParam;
	  this.timestampRequests = opts.timestampRequests;
	  this.readyState = '';
	  this.agent = opts.agent || false;
	  this.socket = opts.socket;
	  this.enablesXDR = opts.enablesXDR;

	  // SSL options for Node.js client
	  this.pfx = opts.pfx;
	  this.key = opts.key;
	  this.passphrase = opts.passphrase;
	  this.cert = opts.cert;
	  this.ca = opts.ca;
	  this.ciphers = opts.ciphers;
	  this.rejectUnauthorized = opts.rejectUnauthorized;
	  this.forceNode = opts.forceNode;

	  // other options for Node.js client
	  this.extraHeaders = opts.extraHeaders;
	  this.localAddress = opts.localAddress;
	}

	/**
	 * Mix in `Emitter`.
	 */

	Emitter(Transport.prototype);

	/**
	 * Emits an error.
	 *
	 * @param {String} str
	 * @return {Transport} for chaining
	 * @api public
	 */

	Transport.prototype.onError = function (msg, desc) {
	  var err = new Error(msg);
	  err.type = 'TransportError';
	  err.description = desc;
	  this.emit('error', err);
	  return this;
	};

	/**
	 * Opens the transport.
	 *
	 * @api public
	 */

	Transport.prototype.open = function () {
	  if ('closed' === this.readyState || '' === this.readyState) {
	    this.readyState = 'opening';
	    this.doOpen();
	  }

	  return this;
	};

	/**
	 * Closes the transport.
	 *
	 * @api private
	 */

	Transport.prototype.close = function () {
	  if ('opening' === this.readyState || 'open' === this.readyState) {
	    this.doClose();
	    this.onClose();
	  }

	  return this;
	};

	/**
	 * Sends multiple packets.
	 *
	 * @param {Array} packets
	 * @api private
	 */

	Transport.prototype.send = function (packets) {
	  if ('open' === this.readyState) {
	    this.write(packets);
	  } else {
	    throw new Error('Transport not open');
	  }
	};

	/**
	 * Called upon open
	 *
	 * @api private
	 */

	Transport.prototype.onOpen = function () {
	  this.readyState = 'open';
	  this.writable = true;
	  this.emit('open');
	};

	/**
	 * Called with data.
	 *
	 * @param {String} data
	 * @api private
	 */

	Transport.prototype.onData = function (data) {
	  var packet = parser.decodePacket(data, this.socket.binaryType);
	  this.onPacket(packet);
	};

	/**
	 * Called with a decoded packet.
	 */

	Transport.prototype.onPacket = function (packet) {
	  this.emit('packet', packet);
	};

	/**
	 * Called upon close.
	 *
	 * @api private
	 */

	Transport.prototype.onClose = function () {
	  this.readyState = 'closed';
	  this.emit('close');
	};


/***/ },
/* 241 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * Module dependencies.
	 */

	var keys = __webpack_require__(242);
	var hasBinary = __webpack_require__(227);
	var sliceBuffer = __webpack_require__(243);
	var after = __webpack_require__(244);
	var utf8 = __webpack_require__(245);

	var base64encoder;
	if (global && global.ArrayBuffer) {
	  base64encoder = __webpack_require__(247);
	}

	/**
	 * Check if we are running an android browser. That requires us to use
	 * ArrayBuffer with polling transports...
	 *
	 * http://ghinda.net/jpeg-blob-ajax-android/
	 */

	var isAndroid = typeof navigator !== 'undefined' && /Android/i.test(navigator.userAgent);

	/**
	 * Check if we are running in PhantomJS.
	 * Uploading a Blob with PhantomJS does not work correctly, as reported here:
	 * https://github.com/ariya/phantomjs/issues/11395
	 * @type boolean
	 */
	var isPhantomJS = typeof navigator !== 'undefined' && /PhantomJS/i.test(navigator.userAgent);

	/**
	 * When true, avoids using Blobs to encode payloads.
	 * @type boolean
	 */
	var dontSendBlobs = isAndroid || isPhantomJS;

	/**
	 * Current protocol version.
	 */

	exports.protocol = 3;

	/**
	 * Packet types.
	 */

	var packets = exports.packets = {
	    open:     0    // non-ws
	  , close:    1    // non-ws
	  , ping:     2
	  , pong:     3
	  , message:  4
	  , upgrade:  5
	  , noop:     6
	};

	var packetslist = keys(packets);

	/**
	 * Premade error packet.
	 */

	var err = { type: 'error', data: 'parser error' };

	/**
	 * Create a blob api even for blob builder when vendor prefixes exist
	 */

	var Blob = __webpack_require__(248);

	/**
	 * Encodes a packet.
	 *
	 *     <packet type id> [ <data> ]
	 *
	 * Example:
	 *
	 *     5hello world
	 *     3
	 *     4
	 *
	 * Binary is encoded in an identical principle
	 *
	 * @api private
	 */

	exports.encodePacket = function (packet, supportsBinary, utf8encode, callback) {
	  if (typeof supportsBinary === 'function') {
	    callback = supportsBinary;
	    supportsBinary = false;
	  }

	  if (typeof utf8encode === 'function') {
	    callback = utf8encode;
	    utf8encode = null;
	  }

	  var data = (packet.data === undefined)
	    ? undefined
	    : packet.data.buffer || packet.data;

	  if (global.ArrayBuffer && data instanceof ArrayBuffer) {
	    return encodeArrayBuffer(packet, supportsBinary, callback);
	  } else if (Blob && data instanceof global.Blob) {
	    return encodeBlob(packet, supportsBinary, callback);
	  }

	  // might be an object with { base64: true, data: dataAsBase64String }
	  if (data && data.base64) {
	    return encodeBase64Object(packet, callback);
	  }

	  // Sending data as a utf-8 string
	  var encoded = packets[packet.type];

	  // data fragment is optional
	  if (undefined !== packet.data) {
	    encoded += utf8encode ? utf8.encode(String(packet.data), { strict: false }) : String(packet.data);
	  }

	  return callback('' + encoded);

	};

	function encodeBase64Object(packet, callback) {
	  // packet data is an object { base64: true, data: dataAsBase64String }
	  var message = 'b' + exports.packets[packet.type] + packet.data.data;
	  return callback(message);
	}

	/**
	 * Encode packet helpers for binary types
	 */

	function encodeArrayBuffer(packet, supportsBinary, callback) {
	  if (!supportsBinary) {
	    return exports.encodeBase64Packet(packet, callback);
	  }

	  var data = packet.data;
	  var contentArray = new Uint8Array(data);
	  var resultBuffer = new Uint8Array(1 + data.byteLength);

	  resultBuffer[0] = packets[packet.type];
	  for (var i = 0; i < contentArray.length; i++) {
	    resultBuffer[i+1] = contentArray[i];
	  }

	  return callback(resultBuffer.buffer);
	}

	function encodeBlobAsArrayBuffer(packet, supportsBinary, callback) {
	  if (!supportsBinary) {
	    return exports.encodeBase64Packet(packet, callback);
	  }

	  var fr = new FileReader();
	  fr.onload = function() {
	    packet.data = fr.result;
	    exports.encodePacket(packet, supportsBinary, true, callback);
	  };
	  return fr.readAsArrayBuffer(packet.data);
	}

	function encodeBlob(packet, supportsBinary, callback) {
	  if (!supportsBinary) {
	    return exports.encodeBase64Packet(packet, callback);
	  }

	  if (dontSendBlobs) {
	    return encodeBlobAsArrayBuffer(packet, supportsBinary, callback);
	  }

	  var length = new Uint8Array(1);
	  length[0] = packets[packet.type];
	  var blob = new Blob([length.buffer, packet.data]);

	  return callback(blob);
	}

	/**
	 * Encodes a packet with binary data in a base64 string
	 *
	 * @param {Object} packet, has `type` and `data`
	 * @return {String} base64 encoded message
	 */

	exports.encodeBase64Packet = function(packet, callback) {
	  var message = 'b' + exports.packets[packet.type];
	  if (Blob && packet.data instanceof global.Blob) {
	    var fr = new FileReader();
	    fr.onload = function() {
	      var b64 = fr.result.split(',')[1];
	      callback(message + b64);
	    };
	    return fr.readAsDataURL(packet.data);
	  }

	  var b64data;
	  try {
	    b64data = String.fromCharCode.apply(null, new Uint8Array(packet.data));
	  } catch (e) {
	    // iPhone Safari doesn't let you apply with typed arrays
	    var typed = new Uint8Array(packet.data);
	    var basic = new Array(typed.length);
	    for (var i = 0; i < typed.length; i++) {
	      basic[i] = typed[i];
	    }
	    b64data = String.fromCharCode.apply(null, basic);
	  }
	  message += global.btoa(b64data);
	  return callback(message);
	};

	/**
	 * Decodes a packet. Changes format to Blob if requested.
	 *
	 * @return {Object} with `type` and `data` (if any)
	 * @api private
	 */

	exports.decodePacket = function (data, binaryType, utf8decode) {
	  if (data === undefined) {
	    return err;
	  }
	  // String data
	  if (typeof data === 'string') {
	    if (data.charAt(0) === 'b') {
	      return exports.decodeBase64Packet(data.substr(1), binaryType);
	    }

	    if (utf8decode) {
	      data = tryDecode(data);
	      if (data === false) {
	        return err;
	      }
	    }
	    var type = data.charAt(0);

	    if (Number(type) != type || !packetslist[type]) {
	      return err;
	    }

	    if (data.length > 1) {
	      return { type: packetslist[type], data: data.substring(1) };
	    } else {
	      return { type: packetslist[type] };
	    }
	  }

	  var asArray = new Uint8Array(data);
	  var type = asArray[0];
	  var rest = sliceBuffer(data, 1);
	  if (Blob && binaryType === 'blob') {
	    rest = new Blob([rest]);
	  }
	  return { type: packetslist[type], data: rest };
	};

	function tryDecode(data) {
	  try {
	    data = utf8.decode(data, { strict: false });
	  } catch (e) {
	    return false;
	  }
	  return data;
	}

	/**
	 * Decodes a packet encoded in a base64 string
	 *
	 * @param {String} base64 encoded message
	 * @return {Object} with `type` and `data` (if any)
	 */

	exports.decodeBase64Packet = function(msg, binaryType) {
	  var type = packetslist[msg.charAt(0)];
	  if (!base64encoder) {
	    return { type: type, data: { base64: true, data: msg.substr(1) } };
	  }

	  var data = base64encoder.decode(msg.substr(1));

	  if (binaryType === 'blob' && Blob) {
	    data = new Blob([data]);
	  }

	  return { type: type, data: data };
	};

	/**
	 * Encodes multiple messages (payload).
	 *
	 *     <length>:data
	 *
	 * Example:
	 *
	 *     11:hello world2:hi
	 *
	 * If any contents are binary, they will be encoded as base64 strings. Base64
	 * encoded strings are marked with a b before the length specifier
	 *
	 * @param {Array} packets
	 * @api private
	 */

	exports.encodePayload = function (packets, supportsBinary, callback) {
	  if (typeof supportsBinary === 'function') {
	    callback = supportsBinary;
	    supportsBinary = null;
	  }

	  var isBinary = hasBinary(packets);

	  if (supportsBinary && isBinary) {
	    if (Blob && !dontSendBlobs) {
	      return exports.encodePayloadAsBlob(packets, callback);
	    }

	    return exports.encodePayloadAsArrayBuffer(packets, callback);
	  }

	  if (!packets.length) {
	    return callback('0:');
	  }

	  function setLengthHeader(message) {
	    return message.length + ':' + message;
	  }

	  function encodeOne(packet, doneCallback) {
	    exports.encodePacket(packet, !isBinary ? false : supportsBinary, false, function(message) {
	      doneCallback(null, setLengthHeader(message));
	    });
	  }

	  map(packets, encodeOne, function(err, results) {
	    return callback(results.join(''));
	  });
	};

	/**
	 * Async array map using after
	 */

	function map(ary, each, done) {
	  var result = new Array(ary.length);
	  var next = after(ary.length, done);

	  var eachWithIndex = function(i, el, cb) {
	    each(el, function(error, msg) {
	      result[i] = msg;
	      cb(error, result);
	    });
	  };

	  for (var i = 0; i < ary.length; i++) {
	    eachWithIndex(i, ary[i], next);
	  }
	}

	/*
	 * Decodes data when a payload is maybe expected. Possible binary contents are
	 * decoded from their base64 representation
	 *
	 * @param {String} data, callback method
	 * @api public
	 */

	exports.decodePayload = function (data, binaryType, callback) {
	  if (typeof data !== 'string') {
	    return exports.decodePayloadAsBinary(data, binaryType, callback);
	  }

	  if (typeof binaryType === 'function') {
	    callback = binaryType;
	    binaryType = null;
	  }

	  var packet;
	  if (data === '') {
	    // parser error - ignoring payload
	    return callback(err, 0, 1);
	  }

	  var length = '', n, msg;

	  for (var i = 0, l = data.length; i < l; i++) {
	    var chr = data.charAt(i);

	    if (chr !== ':') {
	      length += chr;
	      continue;
	    }

	    if (length === '' || (length != (n = Number(length)))) {
	      // parser error - ignoring payload
	      return callback(err, 0, 1);
	    }

	    msg = data.substr(i + 1, n);

	    if (length != msg.length) {
	      // parser error - ignoring payload
	      return callback(err, 0, 1);
	    }

	    if (msg.length) {
	      packet = exports.decodePacket(msg, binaryType, false);

	      if (err.type === packet.type && err.data === packet.data) {
	        // parser error in individual packet - ignoring payload
	        return callback(err, 0, 1);
	      }

	      var ret = callback(packet, i + n, l);
	      if (false === ret) return;
	    }

	    // advance cursor
	    i += n;
	    length = '';
	  }

	  if (length !== '') {
	    // parser error - ignoring payload
	    return callback(err, 0, 1);
	  }

	};

	/**
	 * Encodes multiple messages (payload) as binary.
	 *
	 * <1 = binary, 0 = string><number from 0-9><number from 0-9>[...]<number
	 * 255><data>
	 *
	 * Example:
	 * 1 3 255 1 2 3, if the binary contents are interpreted as 8 bit integers
	 *
	 * @param {Array} packets
	 * @return {ArrayBuffer} encoded payload
	 * @api private
	 */

	exports.encodePayloadAsArrayBuffer = function(packets, callback) {
	  if (!packets.length) {
	    return callback(new ArrayBuffer(0));
	  }

	  function encodeOne(packet, doneCallback) {
	    exports.encodePacket(packet, true, true, function(data) {
	      return doneCallback(null, data);
	    });
	  }

	  map(packets, encodeOne, function(err, encodedPackets) {
	    var totalLength = encodedPackets.reduce(function(acc, p) {
	      var len;
	      if (typeof p === 'string'){
	        len = p.length;
	      } else {
	        len = p.byteLength;
	      }
	      return acc + len.toString().length + len + 2; // string/binary identifier + separator = 2
	    }, 0);

	    var resultArray = new Uint8Array(totalLength);

	    var bufferIndex = 0;
	    encodedPackets.forEach(function(p) {
	      var isString = typeof p === 'string';
	      var ab = p;
	      if (isString) {
	        var view = new Uint8Array(p.length);
	        for (var i = 0; i < p.length; i++) {
	          view[i] = p.charCodeAt(i);
	        }
	        ab = view.buffer;
	      }

	      if (isString) { // not true binary
	        resultArray[bufferIndex++] = 0;
	      } else { // true binary
	        resultArray[bufferIndex++] = 1;
	      }

	      var lenStr = ab.byteLength.toString();
	      for (var i = 0; i < lenStr.length; i++) {
	        resultArray[bufferIndex++] = parseInt(lenStr[i]);
	      }
	      resultArray[bufferIndex++] = 255;

	      var view = new Uint8Array(ab);
	      for (var i = 0; i < view.length; i++) {
	        resultArray[bufferIndex++] = view[i];
	      }
	    });

	    return callback(resultArray.buffer);
	  });
	};

	/**
	 * Encode as Blob
	 */

	exports.encodePayloadAsBlob = function(packets, callback) {
	  function encodeOne(packet, doneCallback) {
	    exports.encodePacket(packet, true, true, function(encoded) {
	      var binaryIdentifier = new Uint8Array(1);
	      binaryIdentifier[0] = 1;
	      if (typeof encoded === 'string') {
	        var view = new Uint8Array(encoded.length);
	        for (var i = 0; i < encoded.length; i++) {
	          view[i] = encoded.charCodeAt(i);
	        }
	        encoded = view.buffer;
	        binaryIdentifier[0] = 0;
	      }

	      var len = (encoded instanceof ArrayBuffer)
	        ? encoded.byteLength
	        : encoded.size;

	      var lenStr = len.toString();
	      var lengthAry = new Uint8Array(lenStr.length + 1);
	      for (var i = 0; i < lenStr.length; i++) {
	        lengthAry[i] = parseInt(lenStr[i]);
	      }
	      lengthAry[lenStr.length] = 255;

	      if (Blob) {
	        var blob = new Blob([binaryIdentifier.buffer, lengthAry.buffer, encoded]);
	        doneCallback(null, blob);
	      }
	    });
	  }

	  map(packets, encodeOne, function(err, results) {
	    return callback(new Blob(results));
	  });
	};

	/*
	 * Decodes data when a payload is maybe expected. Strings are decoded by
	 * interpreting each byte as a key code for entries marked to start with 0. See
	 * description of encodePayloadAsBinary
	 *
	 * @param {ArrayBuffer} data, callback method
	 * @api public
	 */

	exports.decodePayloadAsBinary = function (data, binaryType, callback) {
	  if (typeof binaryType === 'function') {
	    callback = binaryType;
	    binaryType = null;
	  }

	  var bufferTail = data;
	  var buffers = [];

	  while (bufferTail.byteLength > 0) {
	    var tailArray = new Uint8Array(bufferTail);
	    var isString = tailArray[0] === 0;
	    var msgLength = '';

	    for (var i = 1; ; i++) {
	      if (tailArray[i] === 255) break;

	      // 310 = char length of Number.MAX_VALUE
	      if (msgLength.length > 310) {
	        return callback(err, 0, 1);
	      }

	      msgLength += tailArray[i];
	    }

	    bufferTail = sliceBuffer(bufferTail, 2 + msgLength.length);
	    msgLength = parseInt(msgLength);

	    var msg = sliceBuffer(bufferTail, 0, msgLength);
	    if (isString) {
	      try {
	        msg = String.fromCharCode.apply(null, new Uint8Array(msg));
	      } catch (e) {
	        // iPhone Safari doesn't let you apply to typed arrays
	        var typed = new Uint8Array(msg);
	        msg = '';
	        for (var i = 0; i < typed.length; i++) {
	          msg += String.fromCharCode(typed[i]);
	        }
	      }
	    }

	    buffers.push(msg);
	    bufferTail = sliceBuffer(bufferTail, msgLength);
	  }

	  var total = buffers.length;
	  buffers.forEach(function(buffer, i) {
	    callback(exports.decodePacket(buffer, binaryType, true), i, total);
	  });
	};

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 242 */
/***/ function(module, exports) {

	
	/**
	 * Gets the keys for an object.
	 *
	 * @return {Array} keys
	 * @api private
	 */

	module.exports = Object.keys || function keys (obj){
	  var arr = [];
	  var has = Object.prototype.hasOwnProperty;

	  for (var i in obj) {
	    if (has.call(obj, i)) {
	      arr.push(i);
	    }
	  }
	  return arr;
	};


/***/ },
/* 243 */
/***/ function(module, exports) {

	/**
	 * An abstraction for slicing an arraybuffer even when
	 * ArrayBuffer.prototype.slice is not supported
	 *
	 * @api public
	 */

	module.exports = function(arraybuffer, start, end) {
	  var bytes = arraybuffer.byteLength;
	  start = start || 0;
	  end = end || bytes;

	  if (arraybuffer.slice) { return arraybuffer.slice(start, end); }

	  if (start < 0) { start += bytes; }
	  if (end < 0) { end += bytes; }
	  if (end > bytes) { end = bytes; }

	  if (start >= bytes || start >= end || bytes === 0) {
	    return new ArrayBuffer(0);
	  }

	  var abv = new Uint8Array(arraybuffer);
	  var result = new Uint8Array(end - start);
	  for (var i = start, ii = 0; i < end; i++, ii++) {
	    result[ii] = abv[i];
	  }
	  return result.buffer;
	};


/***/ },
/* 244 */
/***/ function(module, exports) {

	module.exports = after

	function after(count, callback, err_cb) {
	    var bail = false
	    err_cb = err_cb || noop
	    proxy.count = count

	    return (count === 0) ? callback() : proxy

	    function proxy(err, result) {
	        if (proxy.count <= 0) {
	            throw new Error('after called too many times')
	        }
	        --proxy.count

	        // after first error, rest are passed to err_cb
	        if (err) {
	            bail = true
	            callback(err)
	            // future error callbacks will go to error handler
	            callback = err_cb
	        } else if (proxy.count === 0 && !bail) {
	            callback(null, result)
	        }
	    }
	}

	function noop() {}


/***/ },
/* 245 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module, global) {/*! https://mths.be/utf8js v2.1.2 by @mathias */
	;(function(root) {

		// Detect free variables `exports`
		var freeExports = typeof exports == 'object' && exports;

		// Detect free variable `module`
		var freeModule = typeof module == 'object' && module &&
			module.exports == freeExports && module;

		// Detect free variable `global`, from Node.js or Browserified code,
		// and use it as `root`
		var freeGlobal = typeof global == 'object' && global;
		if (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal) {
			root = freeGlobal;
		}

		/*--------------------------------------------------------------------------*/

		var stringFromCharCode = String.fromCharCode;

		// Taken from https://mths.be/punycode
		function ucs2decode(string) {
			var output = [];
			var counter = 0;
			var length = string.length;
			var value;
			var extra;
			while (counter < length) {
				value = string.charCodeAt(counter++);
				if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
					// high surrogate, and there is a next character
					extra = string.charCodeAt(counter++);
					if ((extra & 0xFC00) == 0xDC00) { // low surrogate
						output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
					} else {
						// unmatched surrogate; only append this code unit, in case the next
						// code unit is the high surrogate of a surrogate pair
						output.push(value);
						counter--;
					}
				} else {
					output.push(value);
				}
			}
			return output;
		}

		// Taken from https://mths.be/punycode
		function ucs2encode(array) {
			var length = array.length;
			var index = -1;
			var value;
			var output = '';
			while (++index < length) {
				value = array[index];
				if (value > 0xFFFF) {
					value -= 0x10000;
					output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
					value = 0xDC00 | value & 0x3FF;
				}
				output += stringFromCharCode(value);
			}
			return output;
		}

		function checkScalarValue(codePoint, strict) {
			if (codePoint >= 0xD800 && codePoint <= 0xDFFF) {
				if (strict) {
					throw Error(
						'Lone surrogate U+' + codePoint.toString(16).toUpperCase() +
						' is not a scalar value'
					);
				}
				return false;
			}
			return true;
		}
		/*--------------------------------------------------------------------------*/

		function createByte(codePoint, shift) {
			return stringFromCharCode(((codePoint >> shift) & 0x3F) | 0x80);
		}

		function encodeCodePoint(codePoint, strict) {
			if ((codePoint & 0xFFFFFF80) == 0) { // 1-byte sequence
				return stringFromCharCode(codePoint);
			}
			var symbol = '';
			if ((codePoint & 0xFFFFF800) == 0) { // 2-byte sequence
				symbol = stringFromCharCode(((codePoint >> 6) & 0x1F) | 0xC0);
			}
			else if ((codePoint & 0xFFFF0000) == 0) { // 3-byte sequence
				if (!checkScalarValue(codePoint, strict)) {
					codePoint = 0xFFFD;
				}
				symbol = stringFromCharCode(((codePoint >> 12) & 0x0F) | 0xE0);
				symbol += createByte(codePoint, 6);
			}
			else if ((codePoint & 0xFFE00000) == 0) { // 4-byte sequence
				symbol = stringFromCharCode(((codePoint >> 18) & 0x07) | 0xF0);
				symbol += createByte(codePoint, 12);
				symbol += createByte(codePoint, 6);
			}
			symbol += stringFromCharCode((codePoint & 0x3F) | 0x80);
			return symbol;
		}

		function utf8encode(string, opts) {
			opts = opts || {};
			var strict = false !== opts.strict;

			var codePoints = ucs2decode(string);
			var length = codePoints.length;
			var index = -1;
			var codePoint;
			var byteString = '';
			while (++index < length) {
				codePoint = codePoints[index];
				byteString += encodeCodePoint(codePoint, strict);
			}
			return byteString;
		}

		/*--------------------------------------------------------------------------*/

		function readContinuationByte() {
			if (byteIndex >= byteCount) {
				throw Error('Invalid byte index');
			}

			var continuationByte = byteArray[byteIndex] & 0xFF;
			byteIndex++;

			if ((continuationByte & 0xC0) == 0x80) {
				return continuationByte & 0x3F;
			}

			// If we end up here, it’s not a continuation byte
			throw Error('Invalid continuation byte');
		}

		function decodeSymbol(strict) {
			var byte1;
			var byte2;
			var byte3;
			var byte4;
			var codePoint;

			if (byteIndex > byteCount) {
				throw Error('Invalid byte index');
			}

			if (byteIndex == byteCount) {
				return false;
			}

			// Read first byte
			byte1 = byteArray[byteIndex] & 0xFF;
			byteIndex++;

			// 1-byte sequence (no continuation bytes)
			if ((byte1 & 0x80) == 0) {
				return byte1;
			}

			// 2-byte sequence
			if ((byte1 & 0xE0) == 0xC0) {
				byte2 = readContinuationByte();
				codePoint = ((byte1 & 0x1F) << 6) | byte2;
				if (codePoint >= 0x80) {
					return codePoint;
				} else {
					throw Error('Invalid continuation byte');
				}
			}

			// 3-byte sequence (may include unpaired surrogates)
			if ((byte1 & 0xF0) == 0xE0) {
				byte2 = readContinuationByte();
				byte3 = readContinuationByte();
				codePoint = ((byte1 & 0x0F) << 12) | (byte2 << 6) | byte3;
				if (codePoint >= 0x0800) {
					return checkScalarValue(codePoint, strict) ? codePoint : 0xFFFD;
				} else {
					throw Error('Invalid continuation byte');
				}
			}

			// 4-byte sequence
			if ((byte1 & 0xF8) == 0xF0) {
				byte2 = readContinuationByte();
				byte3 = readContinuationByte();
				byte4 = readContinuationByte();
				codePoint = ((byte1 & 0x07) << 0x12) | (byte2 << 0x0C) |
					(byte3 << 0x06) | byte4;
				if (codePoint >= 0x010000 && codePoint <= 0x10FFFF) {
					return codePoint;
				}
			}

			throw Error('Invalid UTF-8 detected');
		}

		var byteArray;
		var byteCount;
		var byteIndex;
		function utf8decode(byteString, opts) {
			opts = opts || {};
			var strict = false !== opts.strict;

			byteArray = ucs2decode(byteString);
			byteCount = byteArray.length;
			byteIndex = 0;
			var codePoints = [];
			var tmp;
			while ((tmp = decodeSymbol(strict)) !== false) {
				codePoints.push(tmp);
			}
			return ucs2encode(codePoints);
		}

		/*--------------------------------------------------------------------------*/

		var utf8 = {
			'version': '2.1.2',
			'encode': utf8encode,
			'decode': utf8decode
		};

		// Some AMD build optimizers, like r.js, check for specific condition patterns
		// like the following:
		if (
			true
		) {
			!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
				return utf8;
			}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		}	else if (freeExports && !freeExports.nodeType) {
			if (freeModule) { // in Node.js or RingoJS v0.8.0+
				freeModule.exports = utf8;
			} else { // in Narwhal or RingoJS v0.7.0-
				var object = {};
				var hasOwnProperty = object.hasOwnProperty;
				for (var key in utf8) {
					hasOwnProperty.call(utf8, key) && (freeExports[key] = utf8[key]);
				}
			}
		} else { // in Rhino or a web browser
			root.utf8 = utf8;
		}

	}(this));

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(246)(module), (function() { return this; }())))

/***/ },
/* 246 */
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
/* 247 */
/***/ function(module, exports) {

	/*
	 * base64-arraybuffer
	 * https://github.com/niklasvh/base64-arraybuffer
	 *
	 * Copyright (c) 2012 Niklas von Hertzen
	 * Licensed under the MIT license.
	 */
	(function(){
	  "use strict";

	  var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

	  // Use a lookup table to find the index.
	  var lookup = new Uint8Array(256);
	  for (var i = 0; i < chars.length; i++) {
	    lookup[chars.charCodeAt(i)] = i;
	  }

	  exports.encode = function(arraybuffer) {
	    var bytes = new Uint8Array(arraybuffer),
	    i, len = bytes.length, base64 = "";

	    for (i = 0; i < len; i+=3) {
	      base64 += chars[bytes[i] >> 2];
	      base64 += chars[((bytes[i] & 3) << 4) | (bytes[i + 1] >> 4)];
	      base64 += chars[((bytes[i + 1] & 15) << 2) | (bytes[i + 2] >> 6)];
	      base64 += chars[bytes[i + 2] & 63];
	    }

	    if ((len % 3) === 2) {
	      base64 = base64.substring(0, base64.length - 1) + "=";
	    } else if (len % 3 === 1) {
	      base64 = base64.substring(0, base64.length - 2) + "==";
	    }

	    return base64;
	  };

	  exports.decode =  function(base64) {
	    var bufferLength = base64.length * 0.75,
	    len = base64.length, i, p = 0,
	    encoded1, encoded2, encoded3, encoded4;

	    if (base64[base64.length - 1] === "=") {
	      bufferLength--;
	      if (base64[base64.length - 2] === "=") {
	        bufferLength--;
	      }
	    }

	    var arraybuffer = new ArrayBuffer(bufferLength),
	    bytes = new Uint8Array(arraybuffer);

	    for (i = 0; i < len; i+=4) {
	      encoded1 = lookup[base64.charCodeAt(i)];
	      encoded2 = lookup[base64.charCodeAt(i+1)];
	      encoded3 = lookup[base64.charCodeAt(i+2)];
	      encoded4 = lookup[base64.charCodeAt(i+3)];

	      bytes[p++] = (encoded1 << 2) | (encoded2 >> 4);
	      bytes[p++] = ((encoded2 & 15) << 4) | (encoded3 >> 2);
	      bytes[p++] = ((encoded3 & 3) << 6) | (encoded4 & 63);
	    }

	    return arraybuffer;
	  };
	})();


/***/ },
/* 248 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * Create a blob builder even when vendor prefixes exist
	 */

	var BlobBuilder = global.BlobBuilder
	  || global.WebKitBlobBuilder
	  || global.MSBlobBuilder
	  || global.MozBlobBuilder;

	/**
	 * Check if Blob constructor is supported
	 */

	var blobSupported = (function() {
	  try {
	    var a = new Blob(['hi']);
	    return a.size === 2;
	  } catch(e) {
	    return false;
	  }
	})();

	/**
	 * Check if Blob constructor supports ArrayBufferViews
	 * Fails in Safari 6, so we need to map to ArrayBuffers there.
	 */

	var blobSupportsArrayBufferView = blobSupported && (function() {
	  try {
	    var b = new Blob([new Uint8Array([1,2])]);
	    return b.size === 2;
	  } catch(e) {
	    return false;
	  }
	})();

	/**
	 * Check if BlobBuilder is supported
	 */

	var blobBuilderSupported = BlobBuilder
	  && BlobBuilder.prototype.append
	  && BlobBuilder.prototype.getBlob;

	/**
	 * Helper function that maps ArrayBufferViews to ArrayBuffers
	 * Used by BlobBuilder constructor and old browsers that didn't
	 * support it in the Blob constructor.
	 */

	function mapArrayBufferViews(ary) {
	  for (var i = 0; i < ary.length; i++) {
	    var chunk = ary[i];
	    if (chunk.buffer instanceof ArrayBuffer) {
	      var buf = chunk.buffer;

	      // if this is a subarray, make a copy so we only
	      // include the subarray region from the underlying buffer
	      if (chunk.byteLength !== buf.byteLength) {
	        var copy = new Uint8Array(chunk.byteLength);
	        copy.set(new Uint8Array(buf, chunk.byteOffset, chunk.byteLength));
	        buf = copy.buffer;
	      }

	      ary[i] = buf;
	    }
	  }
	}

	function BlobBuilderConstructor(ary, options) {
	  options = options || {};

	  var bb = new BlobBuilder();
	  mapArrayBufferViews(ary);

	  for (var i = 0; i < ary.length; i++) {
	    bb.append(ary[i]);
	  }

	  return (options.type) ? bb.getBlob(options.type) : bb.getBlob();
	};

	function BlobConstructor(ary, options) {
	  mapArrayBufferViews(ary);
	  return new Blob(ary, options || {});
	};

	module.exports = (function() {
	  if (blobSupported) {
	    return blobSupportsArrayBufferView ? global.Blob : BlobConstructor;
	  } else if (blobBuilderSupported) {
	    return BlobBuilderConstructor;
	  } else {
	    return undefined;
	  }
	})();

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 249 */
/***/ function(module, exports) {

	/**
	 * Compiles a querystring
	 * Returns string representation of the object
	 *
	 * @param {Object}
	 * @api private
	 */

	exports.encode = function (obj) {
	  var str = '';

	  for (var i in obj) {
	    if (obj.hasOwnProperty(i)) {
	      if (str.length) str += '&';
	      str += encodeURIComponent(i) + '=' + encodeURIComponent(obj[i]);
	    }
	  }

	  return str;
	};

	/**
	 * Parses a simple querystring into an object
	 *
	 * @param {String} qs
	 * @api private
	 */

	exports.decode = function(qs){
	  var qry = {};
	  var pairs = qs.split('&');
	  for (var i = 0, l = pairs.length; i < l; i++) {
	    var pair = pairs[i].split('=');
	    qry[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
	  }
	  return qry;
	};


/***/ },
/* 250 */
/***/ function(module, exports) {

	
	module.exports = function(a, b){
	  var fn = function(){};
	  fn.prototype = b.prototype;
	  a.prototype = new fn;
	  a.prototype.constructor = a;
	};

/***/ },
/* 251 */
/***/ function(module, exports) {

	'use strict';

	var alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_'.split('')
	  , length = 64
	  , map = {}
	  , seed = 0
	  , i = 0
	  , prev;

	/**
	 * Return a string representing the specified number.
	 *
	 * @param {Number} num The number to convert.
	 * @returns {String} The string representation of the number.
	 * @api public
	 */
	function encode(num) {
	  var encoded = '';

	  do {
	    encoded = alphabet[num % length] + encoded;
	    num = Math.floor(num / length);
	  } while (num > 0);

	  return encoded;
	}

	/**
	 * Return the integer value specified by the given string.
	 *
	 * @param {String} str The string to convert.
	 * @returns {Number} The integer value represented by the string.
	 * @api public
	 */
	function decode(str) {
	  var decoded = 0;

	  for (i = 0; i < str.length; i++) {
	    decoded = decoded * length + map[str.charAt(i)];
	  }

	  return decoded;
	}

	/**
	 * Yeast: A tiny growing id generator.
	 *
	 * @returns {String} A unique id.
	 * @api public
	 */
	function yeast() {
	  var now = encode(+new Date());

	  if (now !== prev) return seed = 0, prev = now;
	  return now +'.'+ encode(seed++);
	}

	//
	// Map each character to its index.
	//
	for (; i < length; i++) map[alphabet[i]] = i;

	//
	// Expose the `yeast`, `encode` and `decode` functions.
	//
	yeast.encode = encode;
	yeast.decode = decode;
	module.exports = yeast;


/***/ },
/* 252 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {
	/**
	 * Module requirements.
	 */

	var Polling = __webpack_require__(239);
	var inherit = __webpack_require__(250);

	/**
	 * Module exports.
	 */

	module.exports = JSONPPolling;

	/**
	 * Cached regular expressions.
	 */

	var rNewline = /\n/g;
	var rEscapedNewline = /\\n/g;

	/**
	 * Global JSONP callbacks.
	 */

	var callbacks;

	/**
	 * Noop.
	 */

	function empty () { }

	/**
	 * JSONP Polling constructor.
	 *
	 * @param {Object} opts.
	 * @api public
	 */

	function JSONPPolling (opts) {
	  Polling.call(this, opts);

	  this.query = this.query || {};

	  // define global callbacks array if not present
	  // we do this here (lazily) to avoid unneeded global pollution
	  if (!callbacks) {
	    // we need to consider multiple engines in the same page
	    if (!global.___eio) global.___eio = [];
	    callbacks = global.___eio;
	  }

	  // callback identifier
	  this.index = callbacks.length;

	  // add callback to jsonp global
	  var self = this;
	  callbacks.push(function (msg) {
	    self.onData(msg);
	  });

	  // append to query string
	  this.query.j = this.index;

	  // prevent spurious errors from being emitted when the window is unloaded
	  if (global.document && global.addEventListener) {
	    global.addEventListener('beforeunload', function () {
	      if (self.script) self.script.onerror = empty;
	    }, false);
	  }
	}

	/**
	 * Inherits from Polling.
	 */

	inherit(JSONPPolling, Polling);

	/*
	 * JSONP only supports binary as base64 encoded strings
	 */

	JSONPPolling.prototype.supportsBinary = false;

	/**
	 * Closes the socket.
	 *
	 * @api private
	 */

	JSONPPolling.prototype.doClose = function () {
	  if (this.script) {
	    this.script.parentNode.removeChild(this.script);
	    this.script = null;
	  }

	  if (this.form) {
	    this.form.parentNode.removeChild(this.form);
	    this.form = null;
	    this.iframe = null;
	  }

	  Polling.prototype.doClose.call(this);
	};

	/**
	 * Starts a poll cycle.
	 *
	 * @api private
	 */

	JSONPPolling.prototype.doPoll = function () {
	  var self = this;
	  var script = document.createElement('script');

	  if (this.script) {
	    this.script.parentNode.removeChild(this.script);
	    this.script = null;
	  }

	  script.async = true;
	  script.src = this.uri();
	  script.onerror = function (e) {
	    self.onError('jsonp poll error', e);
	  };

	  var insertAt = document.getElementsByTagName('script')[0];
	  if (insertAt) {
	    insertAt.parentNode.insertBefore(script, insertAt);
	  } else {
	    (document.head || document.body).appendChild(script);
	  }
	  this.script = script;

	  var isUAgecko = 'undefined' !== typeof navigator && /gecko/i.test(navigator.userAgent);

	  if (isUAgecko) {
	    setTimeout(function () {
	      var iframe = document.createElement('iframe');
	      document.body.appendChild(iframe);
	      document.body.removeChild(iframe);
	    }, 100);
	  }
	};

	/**
	 * Writes with a hidden iframe.
	 *
	 * @param {String} data to send
	 * @param {Function} called upon flush.
	 * @api private
	 */

	JSONPPolling.prototype.doWrite = function (data, fn) {
	  var self = this;

	  if (!this.form) {
	    var form = document.createElement('form');
	    var area = document.createElement('textarea');
	    var id = this.iframeId = 'eio_iframe_' + this.index;
	    var iframe;

	    form.className = 'socketio';
	    form.style.position = 'absolute';
	    form.style.top = '-1000px';
	    form.style.left = '-1000px';
	    form.target = id;
	    form.method = 'POST';
	    form.setAttribute('accept-charset', 'utf-8');
	    area.name = 'd';
	    form.appendChild(area);
	    document.body.appendChild(form);

	    this.form = form;
	    this.area = area;
	  }

	  this.form.action = this.uri();

	  function complete () {
	    initIframe();
	    fn();
	  }

	  function initIframe () {
	    if (self.iframe) {
	      try {
	        self.form.removeChild(self.iframe);
	      } catch (e) {
	        self.onError('jsonp polling iframe removal error', e);
	      }
	    }

	    try {
	      // ie6 dynamic iframes with target="" support (thanks Chris Lambacher)
	      var html = '<iframe src="javascript:0" name="' + self.iframeId + '">';
	      iframe = document.createElement(html);
	    } catch (e) {
	      iframe = document.createElement('iframe');
	      iframe.name = self.iframeId;
	      iframe.src = 'javascript:0';
	    }

	    iframe.id = self.iframeId;

	    self.form.appendChild(iframe);
	    self.iframe = iframe;
	  }

	  initIframe();

	  // escape \n to prevent it from being converted into \r\n by some UAs
	  // double escaping is required for escaped new lines because unescaping of new lines can be done safely on server-side
	  data = data.replace(rEscapedNewline, '\\\n');
	  this.area.value = data.replace(rNewline, '\\n');

	  try {
	    this.form.submit();
	  } catch (e) {}

	  if (this.iframe.attachEvent) {
	    this.iframe.onreadystatechange = function () {
	      if (self.iframe.readyState === 'complete') {
	        complete();
	      }
	    };
	  } else {
	    this.iframe.onload = complete;
	  }
	};

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 253 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * Module dependencies.
	 */

	var Transport = __webpack_require__(240);
	var parser = __webpack_require__(241);
	var parseqs = __webpack_require__(249);
	var inherit = __webpack_require__(250);
	var yeast = __webpack_require__(251);
	var debug = __webpack_require__(221)('engine.io-client:websocket');
	var BrowserWebSocket = global.WebSocket || global.MozWebSocket;
	var NodeWebSocket;
	if (typeof window === 'undefined') {
	  try {
	    NodeWebSocket = __webpack_require__(254);
	  } catch (e) { }
	}

	/**
	 * Get either the `WebSocket` or `MozWebSocket` globals
	 * in the browser or try to resolve WebSocket-compatible
	 * interface exposed by `ws` for Node-like environment.
	 */

	var WebSocket = BrowserWebSocket;
	if (!WebSocket && typeof window === 'undefined') {
	  WebSocket = NodeWebSocket;
	}

	/**
	 * Module exports.
	 */

	module.exports = WS;

	/**
	 * WebSocket transport constructor.
	 *
	 * @api {Object} connection options
	 * @api public
	 */

	function WS (opts) {
	  var forceBase64 = (opts && opts.forceBase64);
	  if (forceBase64) {
	    this.supportsBinary = false;
	  }
	  this.perMessageDeflate = opts.perMessageDeflate;
	  this.usingBrowserWebSocket = BrowserWebSocket && !opts.forceNode;
	  this.protocols = opts.protocols;
	  if (!this.usingBrowserWebSocket) {
	    WebSocket = NodeWebSocket;
	  }
	  Transport.call(this, opts);
	}

	/**
	 * Inherits from Transport.
	 */

	inherit(WS, Transport);

	/**
	 * Transport name.
	 *
	 * @api public
	 */

	WS.prototype.name = 'websocket';

	/*
	 * WebSockets support binary
	 */

	WS.prototype.supportsBinary = true;

	/**
	 * Opens socket.
	 *
	 * @api private
	 */

	WS.prototype.doOpen = function () {
	  if (!this.check()) {
	    // let probe timeout
	    return;
	  }

	  var uri = this.uri();
	  var protocols = this.protocols;
	  var opts = {
	    agent: this.agent,
	    perMessageDeflate: this.perMessageDeflate
	  };

	  // SSL options for Node.js client
	  opts.pfx = this.pfx;
	  opts.key = this.key;
	  opts.passphrase = this.passphrase;
	  opts.cert = this.cert;
	  opts.ca = this.ca;
	  opts.ciphers = this.ciphers;
	  opts.rejectUnauthorized = this.rejectUnauthorized;
	  if (this.extraHeaders) {
	    opts.headers = this.extraHeaders;
	  }
	  if (this.localAddress) {
	    opts.localAddress = this.localAddress;
	  }

	  try {
	    this.ws = this.usingBrowserWebSocket ? (protocols ? new WebSocket(uri, protocols) : new WebSocket(uri)) : new WebSocket(uri, protocols, opts);
	  } catch (err) {
	    return this.emit('error', err);
	  }

	  if (this.ws.binaryType === undefined) {
	    this.supportsBinary = false;
	  }

	  if (this.ws.supports && this.ws.supports.binary) {
	    this.supportsBinary = true;
	    this.ws.binaryType = 'nodebuffer';
	  } else {
	    this.ws.binaryType = 'arraybuffer';
	  }

	  this.addEventListeners();
	};

	/**
	 * Adds event listeners to the socket
	 *
	 * @api private
	 */

	WS.prototype.addEventListeners = function () {
	  var self = this;

	  this.ws.onopen = function () {
	    self.onOpen();
	  };
	  this.ws.onclose = function () {
	    self.onClose();
	  };
	  this.ws.onmessage = function (ev) {
	    self.onData(ev.data);
	  };
	  this.ws.onerror = function (e) {
	    self.onError('websocket error', e);
	  };
	};

	/**
	 * Writes data to socket.
	 *
	 * @param {Array} array of packets.
	 * @api private
	 */

	WS.prototype.write = function (packets) {
	  var self = this;
	  this.writable = false;

	  // encodePacket efficient as it uses WS framing
	  // no need for encodePayload
	  var total = packets.length;
	  for (var i = 0, l = total; i < l; i++) {
	    (function (packet) {
	      parser.encodePacket(packet, self.supportsBinary, function (data) {
	        if (!self.usingBrowserWebSocket) {
	          // always create a new object (GH-437)
	          var opts = {};
	          if (packet.options) {
	            opts.compress = packet.options.compress;
	          }

	          if (self.perMessageDeflate) {
	            var len = 'string' === typeof data ? global.Buffer.byteLength(data) : data.length;
	            if (len < self.perMessageDeflate.threshold) {
	              opts.compress = false;
	            }
	          }
	        }

	        // Sometimes the websocket has already been closed but the browser didn't
	        // have a chance of informing us about it yet, in that case send will
	        // throw an error
	        try {
	          if (self.usingBrowserWebSocket) {
	            // TypeError is thrown when passing the second argument on Safari
	            self.ws.send(data);
	          } else {
	            self.ws.send(data, opts);
	          }
	        } catch (e) {
	          debug('websocket closed before onclose event');
	        }

	        --total || done();
	      });
	    })(packets[i]);
	  }

	  function done () {
	    self.emit('flush');

	    // fake drain
	    // defer to next tick to allow Socket to clear writeBuffer
	    setTimeout(function () {
	      self.writable = true;
	      self.emit('drain');
	    }, 0);
	  }
	};

	/**
	 * Called upon close
	 *
	 * @api private
	 */

	WS.prototype.onClose = function () {
	  Transport.prototype.onClose.call(this);
	};

	/**
	 * Closes socket.
	 *
	 * @api private
	 */

	WS.prototype.doClose = function () {
	  if (typeof this.ws !== 'undefined') {
	    this.ws.close();
	  }
	};

	/**
	 * Generates uri for connection.
	 *
	 * @api private
	 */

	WS.prototype.uri = function () {
	  var query = this.query || {};
	  var schema = this.secure ? 'wss' : 'ws';
	  var port = '';

	  // avoid port if default for schema
	  if (this.port && (('wss' === schema && Number(this.port) !== 443) ||
	    ('ws' === schema && Number(this.port) !== 80))) {
	    port = ':' + this.port;
	  }

	  // append timestamp to URI
	  if (this.timestampRequests) {
	    query[this.timestampParam] = yeast();
	  }

	  // communicate binary support capabilities
	  if (!this.supportsBinary) {
	    query.b64 = 1;
	  }

	  query = parseqs.encode(query);

	  // prepend ? to query
	  if (query.length) {
	    query = '?' + query;
	  }

	  var ipv6 = this.hostname.indexOf(':') !== -1;
	  return schema + '://' + (ipv6 ? '[' + this.hostname + ']' : this.hostname) + port + this.path + query;
	};

	/**
	 * Feature detection for WebSocket.
	 *
	 * @return {Boolean} whether this transport is available.
	 * @api public
	 */

	WS.prototype.check = function () {
	  return !!WebSocket && !('__initialize' in WebSocket && this.name === WS.prototype.name);
	};

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 254 */,
/* 255 */
/***/ function(module, exports) {

	
	var indexOf = [].indexOf;

	module.exports = function(arr, obj){
	  if (indexOf) return arr.indexOf(obj);
	  for (var i = 0; i < arr.length; ++i) {
	    if (arr[i] === obj) return i;
	  }
	  return -1;
	};

/***/ },
/* 256 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * Module dependencies.
	 */

	var parser = __webpack_require__(225);
	var Emitter = __webpack_require__(226);
	var toArray = __webpack_require__(257);
	var on = __webpack_require__(258);
	var bind = __webpack_require__(259);
	var debug = __webpack_require__(221)('socket.io-client:socket');
	var parseqs = __webpack_require__(249);

	/**
	 * Module exports.
	 */

	module.exports = exports = Socket;

	/**
	 * Internal events (blacklisted).
	 * These events can't be emitted by the user.
	 *
	 * @api private
	 */

	var events = {
	  connect: 1,
	  connect_error: 1,
	  connect_timeout: 1,
	  connecting: 1,
	  disconnect: 1,
	  error: 1,
	  reconnect: 1,
	  reconnect_attempt: 1,
	  reconnect_failed: 1,
	  reconnect_error: 1,
	  reconnecting: 1,
	  ping: 1,
	  pong: 1
	};

	/**
	 * Shortcut to `Emitter#emit`.
	 */

	var emit = Emitter.prototype.emit;

	/**
	 * `Socket` constructor.
	 *
	 * @api public
	 */

	function Socket (io, nsp, opts) {
	  this.io = io;
	  this.nsp = nsp;
	  this.json = this; // compat
	  this.ids = 0;
	  this.acks = {};
	  this.receiveBuffer = [];
	  this.sendBuffer = [];
	  this.connected = false;
	  this.disconnected = true;
	  if (opts && opts.query) {
	    this.query = opts.query;
	  }
	  if (this.io.autoConnect) this.open();
	}

	/**
	 * Mix in `Emitter`.
	 */

	Emitter(Socket.prototype);

	/**
	 * Subscribe to open, close and packet events
	 *
	 * @api private
	 */

	Socket.prototype.subEvents = function () {
	  if (this.subs) return;

	  var io = this.io;
	  this.subs = [
	    on(io, 'open', bind(this, 'onopen')),
	    on(io, 'packet', bind(this, 'onpacket')),
	    on(io, 'close', bind(this, 'onclose'))
	  ];
	};

	/**
	 * "Opens" the socket.
	 *
	 * @api public
	 */

	Socket.prototype.open =
	Socket.prototype.connect = function () {
	  if (this.connected) return this;

	  this.subEvents();
	  this.io.open(); // ensure open
	  if ('open' === this.io.readyState) this.onopen();
	  this.emit('connecting');
	  return this;
	};

	/**
	 * Sends a `message` event.
	 *
	 * @return {Socket} self
	 * @api public
	 */

	Socket.prototype.send = function () {
	  var args = toArray(arguments);
	  args.unshift('message');
	  this.emit.apply(this, args);
	  return this;
	};

	/**
	 * Override `emit`.
	 * If the event is in `events`, it's emitted normally.
	 *
	 * @param {String} event name
	 * @return {Socket} self
	 * @api public
	 */

	Socket.prototype.emit = function (ev) {
	  if (events.hasOwnProperty(ev)) {
	    emit.apply(this, arguments);
	    return this;
	  }

	  var args = toArray(arguments);
	  var packet = { type: parser.EVENT, data: args };

	  packet.options = {};
	  packet.options.compress = !this.flags || false !== this.flags.compress;

	  // event ack callback
	  if ('function' === typeof args[args.length - 1]) {
	    debug('emitting packet with ack id %d', this.ids);
	    this.acks[this.ids] = args.pop();
	    packet.id = this.ids++;
	  }

	  if (this.connected) {
	    this.packet(packet);
	  } else {
	    this.sendBuffer.push(packet);
	  }

	  delete this.flags;

	  return this;
	};

	/**
	 * Sends a packet.
	 *
	 * @param {Object} packet
	 * @api private
	 */

	Socket.prototype.packet = function (packet) {
	  packet.nsp = this.nsp;
	  this.io.packet(packet);
	};

	/**
	 * Called upon engine `open`.
	 *
	 * @api private
	 */

	Socket.prototype.onopen = function () {
	  debug('transport is open - connecting');

	  // write connect packet if necessary
	  if ('/' !== this.nsp) {
	    if (this.query) {
	      var query = typeof this.query === 'object' ? parseqs.encode(this.query) : this.query;
	      debug('sending connect packet with query %s', query);
	      this.packet({type: parser.CONNECT, query: query});
	    } else {
	      this.packet({type: parser.CONNECT});
	    }
	  }
	};

	/**
	 * Called upon engine `close`.
	 *
	 * @param {String} reason
	 * @api private
	 */

	Socket.prototype.onclose = function (reason) {
	  debug('close (%s)', reason);
	  this.connected = false;
	  this.disconnected = true;
	  delete this.id;
	  this.emit('disconnect', reason);
	};

	/**
	 * Called with socket packet.
	 *
	 * @param {Object} packet
	 * @api private
	 */

	Socket.prototype.onpacket = function (packet) {
	  if (packet.nsp !== this.nsp) return;

	  switch (packet.type) {
	    case parser.CONNECT:
	      this.onconnect();
	      break;

	    case parser.EVENT:
	      this.onevent(packet);
	      break;

	    case parser.BINARY_EVENT:
	      this.onevent(packet);
	      break;

	    case parser.ACK:
	      this.onack(packet);
	      break;

	    case parser.BINARY_ACK:
	      this.onack(packet);
	      break;

	    case parser.DISCONNECT:
	      this.ondisconnect();
	      break;

	    case parser.ERROR:
	      this.emit('error', packet.data);
	      break;
	  }
	};

	/**
	 * Called upon a server event.
	 *
	 * @param {Object} packet
	 * @api private
	 */

	Socket.prototype.onevent = function (packet) {
	  var args = packet.data || [];
	  debug('emitting event %j', args);

	  if (null != packet.id) {
	    debug('attaching ack callback to event');
	    args.push(this.ack(packet.id));
	  }

	  if (this.connected) {
	    emit.apply(this, args);
	  } else {
	    this.receiveBuffer.push(args);
	  }
	};

	/**
	 * Produces an ack callback to emit with an event.
	 *
	 * @api private
	 */

	Socket.prototype.ack = function (id) {
	  var self = this;
	  var sent = false;
	  return function () {
	    // prevent double callbacks
	    if (sent) return;
	    sent = true;
	    var args = toArray(arguments);
	    debug('sending ack %j', args);

	    self.packet({
	      type: parser.ACK,
	      id: id,
	      data: args
	    });
	  };
	};

	/**
	 * Called upon a server acknowlegement.
	 *
	 * @param {Object} packet
	 * @api private
	 */

	Socket.prototype.onack = function (packet) {
	  var ack = this.acks[packet.id];
	  if ('function' === typeof ack) {
	    debug('calling ack %s with %j', packet.id, packet.data);
	    ack.apply(this, packet.data);
	    delete this.acks[packet.id];
	  } else {
	    debug('bad ack %s', packet.id);
	  }
	};

	/**
	 * Called upon server connect.
	 *
	 * @api private
	 */

	Socket.prototype.onconnect = function () {
	  this.connected = true;
	  this.disconnected = false;
	  this.emit('connect');
	  this.emitBuffered();
	};

	/**
	 * Emit buffered events (received and emitted).
	 *
	 * @api private
	 */

	Socket.prototype.emitBuffered = function () {
	  var i;
	  for (i = 0; i < this.receiveBuffer.length; i++) {
	    emit.apply(this, this.receiveBuffer[i]);
	  }
	  this.receiveBuffer = [];

	  for (i = 0; i < this.sendBuffer.length; i++) {
	    this.packet(this.sendBuffer[i]);
	  }
	  this.sendBuffer = [];
	};

	/**
	 * Called upon server disconnect.
	 *
	 * @api private
	 */

	Socket.prototype.ondisconnect = function () {
	  debug('server disconnect (%s)', this.nsp);
	  this.destroy();
	  this.onclose('io server disconnect');
	};

	/**
	 * Called upon forced client/server side disconnections,
	 * this method ensures the manager stops tracking us and
	 * that reconnections don't get triggered for this.
	 *
	 * @api private.
	 */

	Socket.prototype.destroy = function () {
	  if (this.subs) {
	    // clean subscriptions to avoid reconnections
	    for (var i = 0; i < this.subs.length; i++) {
	      this.subs[i].destroy();
	    }
	    this.subs = null;
	  }

	  this.io.destroy(this);
	};

	/**
	 * Disconnects the socket manually.
	 *
	 * @return {Socket} self
	 * @api public
	 */

	Socket.prototype.close =
	Socket.prototype.disconnect = function () {
	  if (this.connected) {
	    debug('performing disconnect (%s)', this.nsp);
	    this.packet({ type: parser.DISCONNECT });
	  }

	  // remove socket from pool
	  this.destroy();

	  if (this.connected) {
	    // fire events
	    this.onclose('io client disconnect');
	  }
	  return this;
	};

	/**
	 * Sets the compress flag.
	 *
	 * @param {Boolean} if `true`, compresses the sending data
	 * @return {Socket} self
	 * @api public
	 */

	Socket.prototype.compress = function (compress) {
	  this.flags = this.flags || {};
	  this.flags.compress = compress;
	  return this;
	};


/***/ },
/* 257 */
/***/ function(module, exports) {

	module.exports = toArray

	function toArray(list, index) {
	    var array = []

	    index = index || 0

	    for (var i = index || 0; i < list.length; i++) {
	        array[i - index] = list[i]
	    }

	    return array
	}


/***/ },
/* 258 */
/***/ function(module, exports) {

	
	/**
	 * Module exports.
	 */

	module.exports = on;

	/**
	 * Helper for subscriptions.
	 *
	 * @param {Object|EventEmitter} obj with `Emitter` mixin or `EventEmitter`
	 * @param {String} event name
	 * @param {Function} callback
	 * @api public
	 */

	function on (obj, ev, fn) {
	  obj.on(ev, fn);
	  return {
	    destroy: function () {
	      obj.removeListener(ev, fn);
	    }
	  };
	}


/***/ },
/* 259 */
/***/ function(module, exports) {

	/**
	 * Slice reference.
	 */

	var slice = [].slice;

	/**
	 * Bind `obj` to `fn`.
	 *
	 * @param {Object} obj
	 * @param {Function|String} fn or string
	 * @return {Function}
	 * @api public
	 */

	module.exports = function(obj, fn){
	  if ('string' == typeof fn) fn = obj[fn];
	  if ('function' != typeof fn) throw new Error('bind() requires a function');
	  var args = slice.call(arguments, 2);
	  return function(){
	    return fn.apply(obj, args.concat(slice.call(arguments)));
	  }
	};


/***/ },
/* 260 */
/***/ function(module, exports) {

	
	/**
	 * Expose `Backoff`.
	 */

	module.exports = Backoff;

	/**
	 * Initialize backoff timer with `opts`.
	 *
	 * - `min` initial timeout in milliseconds [100]
	 * - `max` max timeout [10000]
	 * - `jitter` [0]
	 * - `factor` [2]
	 *
	 * @param {Object} opts
	 * @api public
	 */

	function Backoff(opts) {
	  opts = opts || {};
	  this.ms = opts.min || 100;
	  this.max = opts.max || 10000;
	  this.factor = opts.factor || 2;
	  this.jitter = opts.jitter > 0 && opts.jitter <= 1 ? opts.jitter : 0;
	  this.attempts = 0;
	}

	/**
	 * Return the backoff duration.
	 *
	 * @return {Number}
	 * @api public
	 */

	Backoff.prototype.duration = function(){
	  var ms = this.ms * Math.pow(this.factor, this.attempts++);
	  if (this.jitter) {
	    var rand =  Math.random();
	    var deviation = Math.floor(rand * this.jitter * ms);
	    ms = (Math.floor(rand * 10) & 1) == 0  ? ms - deviation : ms + deviation;
	  }
	  return Math.min(ms, this.max) | 0;
	};

	/**
	 * Reset the number of attempts.
	 *
	 * @api public
	 */

	Backoff.prototype.reset = function(){
	  this.attempts = 0;
	};

	/**
	 * Set the minimum duration
	 *
	 * @api public
	 */

	Backoff.prototype.setMin = function(min){
	  this.ms = min;
	};

	/**
	 * Set the maximum duration
	 *
	 * @api public
	 */

	Backoff.prototype.setMax = function(max){
	  this.max = max;
	};

	/**
	 * Set the jitter
	 *
	 * @api public
	 */

	Backoff.prototype.setJitter = function(jitter){
	  this.jitter = jitter;
	};



/***/ },
/* 261 */,
/* 262 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _defineProperty = __webpack_require__(78);

	var _defineProperty2 = _interopRequireDefault(_defineProperty);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
	    }
	  }

	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	}();

/***/ },
/* 263 */,
/* 264 */,
/* 265 */,
/* 266 */,
/* 267 */,
/* 268 */,
/* 269 */,
/* 270 */,
/* 271 */,
/* 272 */,
/* 273 */,
/* 274 */,
/* 275 */,
/* 276 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */

	(function () {
		'use strict';

		var hasOwn = {}.hasOwnProperty;

		function classNames () {
			var classes = [];

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg;

				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}

			return classes.join(' ');
		}

		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ },
/* 277 */,
/* 278 */,
/* 279 */,
/* 280 */,
/* 281 */,
/* 282 */,
/* 283 */,
/* 284 */,
/* 285 */,
/* 286 */,
/* 287 */,
/* 288 */,
/* 289 */,
/* 290 */,
/* 291 */,
/* 292 */
/***/ function(module, exports) {

	(function(self) {
	  'use strict';

	  if (self.fetch) {
	    return
	  }

	  var support = {
	    searchParams: 'URLSearchParams' in self,
	    iterable: 'Symbol' in self && 'iterator' in Symbol,
	    blob: 'FileReader' in self && 'Blob' in self && (function() {
	      try {
	        new Blob()
	        return true
	      } catch(e) {
	        return false
	      }
	    })(),
	    formData: 'FormData' in self,
	    arrayBuffer: 'ArrayBuffer' in self
	  }

	  if (support.arrayBuffer) {
	    var viewClasses = [
	      '[object Int8Array]',
	      '[object Uint8Array]',
	      '[object Uint8ClampedArray]',
	      '[object Int16Array]',
	      '[object Uint16Array]',
	      '[object Int32Array]',
	      '[object Uint32Array]',
	      '[object Float32Array]',
	      '[object Float64Array]'
	    ]

	    var isDataView = function(obj) {
	      return obj && DataView.prototype.isPrototypeOf(obj)
	    }

	    var isArrayBufferView = ArrayBuffer.isView || function(obj) {
	      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
	    }
	  }

	  function normalizeName(name) {
	    if (typeof name !== 'string') {
	      name = String(name)
	    }
	    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
	      throw new TypeError('Invalid character in header field name')
	    }
	    return name.toLowerCase()
	  }

	  function normalizeValue(value) {
	    if (typeof value !== 'string') {
	      value = String(value)
	    }
	    return value
	  }

	  // Build a destructive iterator for the value list
	  function iteratorFor(items) {
	    var iterator = {
	      next: function() {
	        var value = items.shift()
	        return {done: value === undefined, value: value}
	      }
	    }

	    if (support.iterable) {
	      iterator[Symbol.iterator] = function() {
	        return iterator
	      }
	    }

	    return iterator
	  }

	  function Headers(headers) {
	    this.map = {}

	    if (headers instanceof Headers) {
	      headers.forEach(function(value, name) {
	        this.append(name, value)
	      }, this)
	    } else if (Array.isArray(headers)) {
	      headers.forEach(function(header) {
	        this.append(header[0], header[1])
	      }, this)
	    } else if (headers) {
	      Object.getOwnPropertyNames(headers).forEach(function(name) {
	        this.append(name, headers[name])
	      }, this)
	    }
	  }

	  Headers.prototype.append = function(name, value) {
	    name = normalizeName(name)
	    value = normalizeValue(value)
	    var oldValue = this.map[name]
	    this.map[name] = oldValue ? oldValue+','+value : value
	  }

	  Headers.prototype['delete'] = function(name) {
	    delete this.map[normalizeName(name)]
	  }

	  Headers.prototype.get = function(name) {
	    name = normalizeName(name)
	    return this.has(name) ? this.map[name] : null
	  }

	  Headers.prototype.has = function(name) {
	    return this.map.hasOwnProperty(normalizeName(name))
	  }

	  Headers.prototype.set = function(name, value) {
	    this.map[normalizeName(name)] = normalizeValue(value)
	  }

	  Headers.prototype.forEach = function(callback, thisArg) {
	    for (var name in this.map) {
	      if (this.map.hasOwnProperty(name)) {
	        callback.call(thisArg, this.map[name], name, this)
	      }
	    }
	  }

	  Headers.prototype.keys = function() {
	    var items = []
	    this.forEach(function(value, name) { items.push(name) })
	    return iteratorFor(items)
	  }

	  Headers.prototype.values = function() {
	    var items = []
	    this.forEach(function(value) { items.push(value) })
	    return iteratorFor(items)
	  }

	  Headers.prototype.entries = function() {
	    var items = []
	    this.forEach(function(value, name) { items.push([name, value]) })
	    return iteratorFor(items)
	  }

	  if (support.iterable) {
	    Headers.prototype[Symbol.iterator] = Headers.prototype.entries
	  }

	  function consumed(body) {
	    if (body.bodyUsed) {
	      return Promise.reject(new TypeError('Already read'))
	    }
	    body.bodyUsed = true
	  }

	  function fileReaderReady(reader) {
	    return new Promise(function(resolve, reject) {
	      reader.onload = function() {
	        resolve(reader.result)
	      }
	      reader.onerror = function() {
	        reject(reader.error)
	      }
	    })
	  }

	  function readBlobAsArrayBuffer(blob) {
	    var reader = new FileReader()
	    var promise = fileReaderReady(reader)
	    reader.readAsArrayBuffer(blob)
	    return promise
	  }

	  function readBlobAsText(blob) {
	    var reader = new FileReader()
	    var promise = fileReaderReady(reader)
	    reader.readAsText(blob)
	    return promise
	  }

	  function readArrayBufferAsText(buf) {
	    var view = new Uint8Array(buf)
	    var chars = new Array(view.length)

	    for (var i = 0; i < view.length; i++) {
	      chars[i] = String.fromCharCode(view[i])
	    }
	    return chars.join('')
	  }

	  function bufferClone(buf) {
	    if (buf.slice) {
	      return buf.slice(0)
	    } else {
	      var view = new Uint8Array(buf.byteLength)
	      view.set(new Uint8Array(buf))
	      return view.buffer
	    }
	  }

	  function Body() {
	    this.bodyUsed = false

	    this._initBody = function(body) {
	      this._bodyInit = body
	      if (!body) {
	        this._bodyText = ''
	      } else if (typeof body === 'string') {
	        this._bodyText = body
	      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
	        this._bodyBlob = body
	      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
	        this._bodyFormData = body
	      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
	        this._bodyText = body.toString()
	      } else if (support.arrayBuffer && support.blob && isDataView(body)) {
	        this._bodyArrayBuffer = bufferClone(body.buffer)
	        // IE 10-11 can't handle a DataView body.
	        this._bodyInit = new Blob([this._bodyArrayBuffer])
	      } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
	        this._bodyArrayBuffer = bufferClone(body)
	      } else {
	        throw new Error('unsupported BodyInit type')
	      }

	      if (!this.headers.get('content-type')) {
	        if (typeof body === 'string') {
	          this.headers.set('content-type', 'text/plain;charset=UTF-8')
	        } else if (this._bodyBlob && this._bodyBlob.type) {
	          this.headers.set('content-type', this._bodyBlob.type)
	        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
	          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8')
	        }
	      }
	    }

	    if (support.blob) {
	      this.blob = function() {
	        var rejected = consumed(this)
	        if (rejected) {
	          return rejected
	        }

	        if (this._bodyBlob) {
	          return Promise.resolve(this._bodyBlob)
	        } else if (this._bodyArrayBuffer) {
	          return Promise.resolve(new Blob([this._bodyArrayBuffer]))
	        } else if (this._bodyFormData) {
	          throw new Error('could not read FormData body as blob')
	        } else {
	          return Promise.resolve(new Blob([this._bodyText]))
	        }
	      }

	      this.arrayBuffer = function() {
	        if (this._bodyArrayBuffer) {
	          return consumed(this) || Promise.resolve(this._bodyArrayBuffer)
	        } else {
	          return this.blob().then(readBlobAsArrayBuffer)
	        }
	      }
	    }

	    this.text = function() {
	      var rejected = consumed(this)
	      if (rejected) {
	        return rejected
	      }

	      if (this._bodyBlob) {
	        return readBlobAsText(this._bodyBlob)
	      } else if (this._bodyArrayBuffer) {
	        return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
	      } else if (this._bodyFormData) {
	        throw new Error('could not read FormData body as text')
	      } else {
	        return Promise.resolve(this._bodyText)
	      }
	    }

	    if (support.formData) {
	      this.formData = function() {
	        return this.text().then(decode)
	      }
	    }

	    this.json = function() {
	      return this.text().then(JSON.parse)
	    }

	    return this
	  }

	  // HTTP methods whose capitalization should be normalized
	  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']

	  function normalizeMethod(method) {
	    var upcased = method.toUpperCase()
	    return (methods.indexOf(upcased) > -1) ? upcased : method
	  }

	  function Request(input, options) {
	    options = options || {}
	    var body = options.body

	    if (input instanceof Request) {
	      if (input.bodyUsed) {
	        throw new TypeError('Already read')
	      }
	      this.url = input.url
	      this.credentials = input.credentials
	      if (!options.headers) {
	        this.headers = new Headers(input.headers)
	      }
	      this.method = input.method
	      this.mode = input.mode
	      if (!body && input._bodyInit != null) {
	        body = input._bodyInit
	        input.bodyUsed = true
	      }
	    } else {
	      this.url = String(input)
	    }

	    this.credentials = options.credentials || this.credentials || 'omit'
	    if (options.headers || !this.headers) {
	      this.headers = new Headers(options.headers)
	    }
	    this.method = normalizeMethod(options.method || this.method || 'GET')
	    this.mode = options.mode || this.mode || null
	    this.referrer = null

	    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
	      throw new TypeError('Body not allowed for GET or HEAD requests')
	    }
	    this._initBody(body)
	  }

	  Request.prototype.clone = function() {
	    return new Request(this, { body: this._bodyInit })
	  }

	  function decode(body) {
	    var form = new FormData()
	    body.trim().split('&').forEach(function(bytes) {
	      if (bytes) {
	        var split = bytes.split('=')
	        var name = split.shift().replace(/\+/g, ' ')
	        var value = split.join('=').replace(/\+/g, ' ')
	        form.append(decodeURIComponent(name), decodeURIComponent(value))
	      }
	    })
	    return form
	  }

	  function parseHeaders(rawHeaders) {
	    var headers = new Headers()
	    rawHeaders.split(/\r?\n/).forEach(function(line) {
	      var parts = line.split(':')
	      var key = parts.shift().trim()
	      if (key) {
	        var value = parts.join(':').trim()
	        headers.append(key, value)
	      }
	    })
	    return headers
	  }

	  Body.call(Request.prototype)

	  function Response(bodyInit, options) {
	    if (!options) {
	      options = {}
	    }

	    this.type = 'default'
	    this.status = 'status' in options ? options.status : 200
	    this.ok = this.status >= 200 && this.status < 300
	    this.statusText = 'statusText' in options ? options.statusText : 'OK'
	    this.headers = new Headers(options.headers)
	    this.url = options.url || ''
	    this._initBody(bodyInit)
	  }

	  Body.call(Response.prototype)

	  Response.prototype.clone = function() {
	    return new Response(this._bodyInit, {
	      status: this.status,
	      statusText: this.statusText,
	      headers: new Headers(this.headers),
	      url: this.url
	    })
	  }

	  Response.error = function() {
	    var response = new Response(null, {status: 0, statusText: ''})
	    response.type = 'error'
	    return response
	  }

	  var redirectStatuses = [301, 302, 303, 307, 308]

	  Response.redirect = function(url, status) {
	    if (redirectStatuses.indexOf(status) === -1) {
	      throw new RangeError('Invalid status code')
	    }

	    return new Response(null, {status: status, headers: {location: url}})
	  }

	  self.Headers = Headers
	  self.Request = Request
	  self.Response = Response

	  self.fetch = function(input, init) {
	    return new Promise(function(resolve, reject) {
	      var request = new Request(input, init)
	      var xhr = new XMLHttpRequest()

	      xhr.onload = function() {
	        var options = {
	          status: xhr.status,
	          statusText: xhr.statusText,
	          headers: parseHeaders(xhr.getAllResponseHeaders() || '')
	        }
	        options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL')
	        var body = 'response' in xhr ? xhr.response : xhr.responseText
	        resolve(new Response(body, options))
	      }

	      xhr.onerror = function() {
	        reject(new TypeError('Network request failed'))
	      }

	      xhr.ontimeout = function() {
	        reject(new TypeError('Network request failed'))
	      }

	      xhr.open(request.method, request.url, true)

	      if (request.credentials === 'include') {
	        xhr.withCredentials = true
	      }

	      if ('responseType' in xhr && support.blob) {
	        xhr.responseType = 'blob'
	      }

	      request.headers.forEach(function(value, name) {
	        xhr.setRequestHeader(name, value)
	      })

	      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)
	    })
	  }
	  self.fetch.polyfill = true
	})(typeof self !== 'undefined' ? self : this);


/***/ }
/******/ ]);