'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.ReactVideoRecorderDeviceUnavailableError = exports.ReactVideoRecorderMediaRecorderUnavailableError = exports.ReactVideoRecorderDataAvailableTimeoutError = exports.ReactVideoRecorderRecordedBlobsUnavailableError = exports.ReactVideoRecorderDataIssueError = void 0

function _typeof(obj) {
  '@babel/helpers - typeof'
  if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') {
    _typeof = function _typeof(obj) {
      return typeof obj
    }
  } else {
    _typeof = function _typeof(obj) {
      return obj &&
        typeof Symbol === 'function' &&
        obj.constructor === Symbol &&
        obj !== Symbol.prototype
        ? 'symbol'
        : typeof obj
    }
  }
  return _typeof(obj)
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function')
  }
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== 'function' && superClass !== null) {
    throw new TypeError('Super expression must either be null or a function')
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: { value: subClass, writable: true, configurable: true }
  })
  if (superClass) _setPrototypeOf(subClass, superClass)
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct()
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
      result
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor
      result = Reflect.construct(Super, arguments, NewTarget)
    } else {
      result = Super.apply(this, arguments)
    }
    return _possibleConstructorReturn(this, result)
  }
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === 'object' || typeof call === 'function')) {
    return call
  }
  return _assertThisInitialized(self)
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    )
  }
  return self
}

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === 'function' ? new Map() : undefined
  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class
    if (typeof Class !== 'function') {
      throw new TypeError('Super expression must either be null or a function')
    }
    if (typeof _cache !== 'undefined') {
      if (_cache.has(Class)) return _cache.get(Class)
      _cache.set(Class, Wrapper)
    }
    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor)
    }
    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    })
    return _setPrototypeOf(Wrapper, Class)
  }
  return _wrapNativeSuper(Class)
}

function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null]
      a.push.apply(a, args)
      var Constructor = Function.bind.apply(Parent, a)
      var instance = new Constructor()
      if (Class) _setPrototypeOf(instance, Class.prototype)
      return instance
    }
  }
  return _construct.apply(null, arguments)
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === 'undefined' || !Reflect.construct) return false
  if (Reflect.construct.sham) return false
  if (typeof Proxy === 'function') return true
  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}))
    return true
  } catch (e) {
    return false
  }
}

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf('[native code]') !== -1
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf =
    Object.setPrototypeOf ||
    function _setPrototypeOf(o, p) {
      o.__proto__ = p
      return o
    }
  return _setPrototypeOf(o, p)
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf
    ? Object.getPrototypeOf
    : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o)
      }
  return _getPrototypeOf(o)
}

var ReactVideoRecorderDataIssueError = /*#__PURE__*/ (function (_Error) {
  _inherits(ReactVideoRecorderDataIssueError, _Error)

  var _super = _createSuper(ReactVideoRecorderDataIssueError)

  function ReactVideoRecorderDataIssueError(event) {
    var _this

    _classCallCheck(this, ReactVideoRecorderDataIssueError)

    _this = _super.call(this, "Couldn't get data from event")
    _this.name = 'ReactVideoRecorderDataIssueError'
    _this.event = event
    return _this
  }

  return ReactVideoRecorderDataIssueError
})(/*#__PURE__*/ _wrapNativeSuper(Error))

exports.ReactVideoRecorderDataIssueError = ReactVideoRecorderDataIssueError

var ReactVideoRecorderRecordedBlobsUnavailableError = /*#__PURE__*/ (function (
  _Error2
) {
  _inherits(ReactVideoRecorderRecordedBlobsUnavailableError, _Error2)

  var _super2 = _createSuper(ReactVideoRecorderRecordedBlobsUnavailableError)

  function ReactVideoRecorderRecordedBlobsUnavailableError(event) {
    var _this2

    _classCallCheck(this, ReactVideoRecorderRecordedBlobsUnavailableError)

    _this2 = _super2.call(this, "Couldn't get recordedBlobs")
    _this2.name = 'ReactVideoRecorderRecordedBlobsUnavailableError'
    _this2.event = event
    return _this2
  }

  return ReactVideoRecorderRecordedBlobsUnavailableError
})(/*#__PURE__*/ _wrapNativeSuper(Error))

exports.ReactVideoRecorderRecordedBlobsUnavailableError = ReactVideoRecorderRecordedBlobsUnavailableError

var ReactVideoRecorderDataAvailableTimeoutError = /*#__PURE__*/ (function (
  _Error3
) {
  _inherits(ReactVideoRecorderDataAvailableTimeoutError, _Error3)

  var _super3 = _createSuper(ReactVideoRecorderDataAvailableTimeoutError)

  function ReactVideoRecorderDataAvailableTimeoutError(dataAvailableTimeout) {
    var _this3

    _classCallCheck(this, ReactVideoRecorderDataAvailableTimeoutError)

    _this3 = _super3.call(
      this,
      "Method mediaRecorder.ondataavailable wasn't called after ".concat(
        dataAvailableTimeout,
        'ms'
      )
    )
    _this3.name = 'ReactVideoRecorderDataAvailableTimeoutError'
    _this3.dataAvailableTimeout = dataAvailableTimeout
    return _this3
  }

  return ReactVideoRecorderDataAvailableTimeoutError
})(/*#__PURE__*/ _wrapNativeSuper(Error))

exports.ReactVideoRecorderDataAvailableTimeoutError = ReactVideoRecorderDataAvailableTimeoutError

var ReactVideoRecorderMediaRecorderUnavailableError = /*#__PURE__*/ (function (
  _Error4
) {
  _inherits(ReactVideoRecorderMediaRecorderUnavailableError, _Error4)

  var _super4 = _createSuper(ReactVideoRecorderMediaRecorderUnavailableError)

  function ReactVideoRecorderMediaRecorderUnavailableError() {
    var _this4

    _classCallCheck(this, ReactVideoRecorderMediaRecorderUnavailableError)

    _this4 = _super4.call(this, "Couldn't get mediaRecorder")
    _this4.name = 'ReactVideoRecorderMediaRecorderUnavailableError'
    return _this4
  }

  return ReactVideoRecorderMediaRecorderUnavailableError
})(/*#__PURE__*/ _wrapNativeSuper(Error))

exports.ReactVideoRecorderMediaRecorderUnavailableError = ReactVideoRecorderMediaRecorderUnavailableError

var ReactVideoRecorderDeviceUnavailableError = /*#__PURE__*/ (function (
  _Error5
) {
  _inherits(ReactVideoRecorderDeviceUnavailableError, _Error5)

  var _super5 = _createSuper(ReactVideoRecorderDeviceUnavailableError)

  function ReactVideoRecorderDeviceUnavailableError() {
    var _this5

    _classCallCheck(this, ReactVideoRecorderDeviceUnavailableError)

    _this5 = _super5.call(this, "Couldn't get selected device")
    _this5.name = 'ReactVideoRecorderDeviceUnavailableError'
    return _this5
  }

  return ReactVideoRecorderDeviceUnavailableError
})(/*#__PURE__*/ _wrapNativeSuper(Error))

exports.ReactVideoRecorderDeviceUnavailableError = ReactVideoRecorderDeviceUnavailableError
