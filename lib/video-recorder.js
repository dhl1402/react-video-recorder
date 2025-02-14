'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports['default'] = void 0

var _react = _interopRequireWildcard(require('react'))

var _propTypes = _interopRequireDefault(require('prop-types'))

var _lodash = _interopRequireDefault(require('lodash.merge'))

var _styledComponents = _interopRequireWildcard(require('styled-components'))

var _fixWebmDuration = _interopRequireDefault(require('fix-webm-duration'))

var _unsupportedView = _interopRequireDefault(
  require('./defaults/unsupported-view')
)

var _errorView = _interopRequireDefault(require('./defaults/error-view'))

var _disconnectedView = _interopRequireDefault(
  require('./defaults/disconnected-view')
)

var _loadingView = _interopRequireDefault(require('./defaults/loading-view'))

var _switchCameraView = _interopRequireDefault(
  require('./defaults/switch-camera-view')
)

var _renderActions = _interopRequireDefault(
  require('./defaults/render-actions')
)

var _getVideoInfo = _interopRequireWildcard(require('./get-video-info'))

var _customErrors = require('./custom-errors')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

function _getRequireWildcardCache() {
  if (typeof WeakMap !== 'function') return null
  var cache = new WeakMap()
  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache
  }
  return cache
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj
  }
  if (
    obj === null ||
    (_typeof(obj) !== 'object' && typeof obj !== 'function')
  ) {
    return { default: obj }
  }
  var cache = _getRequireWildcardCache()
  if (cache && cache.has(obj)) {
    return cache.get(obj)
  }
  var newObj = {}
  var hasPropertyDescriptor =
    Object.defineProperty && Object.getOwnPropertyDescriptor
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor
        ? Object.getOwnPropertyDescriptor(obj, key)
        : null
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc)
      } else {
        newObj[key] = obj[key]
      }
    }
  }
  newObj['default'] = obj
  if (cache) {
    cache.set(obj, newObj)
  }
  return newObj
}

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

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i]
    descriptor.enumerable = descriptor.enumerable || false
    descriptor.configurable = true
    if ('value' in descriptor) descriptor.writable = true
    Object.defineProperty(target, descriptor.key, descriptor)
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps)
  if (staticProps) _defineProperties(Constructor, staticProps)
  return Constructor
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

function _setPrototypeOf(o, p) {
  _setPrototypeOf =
    Object.setPrototypeOf ||
    function _setPrototypeOf(o, p) {
      o.__proto__ = p
      return o
    }
  return _setPrototypeOf(o, p)
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

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf
    ? Object.getPrototypeOf
    : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o)
      }
  return _getPrototypeOf(o)
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    })
  } else {
    obj[key] = value
  }
  return obj
}

var MIME_TYPES = [
  'video/webm;codecs="vp8,opus"',
  'video/webm;codecs=h264',
  'video/webm;codecs=vp9',
  'video/webm',
  'video/mp4'
]
var CONSTRAINTS = {
  audio: true,
  video: true
}

var Wrapper = _styledComponents['default'].div.withConfig({
  displayName: 'video-recorder__Wrapper',
  componentId: 'sc-7k20rv-0'
})([
  'position:relative;display:flex;flex-direction:column;align-items:center;justify-content:center;width:100%;height:100%;overflow:hidden;min-height:300px;background-color:#000;color:white;box-sizing:border-box;*{box-sizing:inherit;}'
])

var CameraView = _styledComponents['default'].div.withConfig({
  displayName: 'video-recorder__CameraView',
  componentId: 'sc-7k20rv-1'
})(['width:100%;height:100%;'])

var Video = _styledComponents['default'].video.withConfig({
  displayName: 'video-recorder__Video',
  componentId: 'sc-7k20rv-2'
})(
  [
    'position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);min-height:100%;min-width:100%;width:100%;height:100%;object-fit:cover;',
    ';',
    ';'
  ],
  function (props) {
    return (
      props.isFlipped &&
      (0, _styledComponents.css)(['transform:translate(-50%,-50%) scaleX(-1);'])
    )
  },
  function (props) {
    return props.onClick && (0, _styledComponents.css)(['cursor:pointer;'])
  }
)

var VideoRecorder = /*#__PURE__*/ (function (_Component) {
  _inherits(VideoRecorder, _Component)

  var _super = _createSuper(VideoRecorder)

  function VideoRecorder() {
    var _this

    _classCallCheck(this, VideoRecorder)

    for (
      var _len = arguments.length, args = new Array(_len), _key = 0;
      _key < _len;
      _key++
    ) {
      args[_key] = arguments[_key]
    }

    _this = _super.call.apply(_super, [this].concat(args))

    _defineProperty(
      _assertThisInitialized(_this),
      'videoInput',
      /*#__PURE__*/ _react['default'].createRef()
    )

    _defineProperty(
      _assertThisInitialized(_this),
      'isComponentUnmounted',
      false
    )

    _defineProperty(_assertThisInitialized(_this), 'timeSinceInactivity', 0)

    _defineProperty(_assertThisInitialized(_this), 'lastRecordingTimestamp', 0)

    _defineProperty(_assertThisInitialized(_this), 'recordingDuration', 0)

    _defineProperty(_assertThisInitialized(_this), 'state', {
      isRecording: false,
      isCameraOn: false,
      isConnecting: false,
      isReplayingVideo: false,
      isReplayVideoMuted: true,
      thereWasAnError: false,
      error: null,
      streamIsReady: false,
      isInlineRecordingSupported: null,
      isVideoInputSupported: null,
      stream: undefined,
      currentDeviceId: null,
      availableDeviceIds: []
    })

    _defineProperty(_assertThisInitialized(_this), 'turnOnCamera', function () {
      var deviceId =
        arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null

      if (_this.props.onTurnOnCamera) {
        _this.props.onTurnOnCamera()
      }

      navigator.mediaDevices
        .enumerateDevices()
        .then(function (mediaDevices) {
          var videoDevices = mediaDevices.filter(function (x) {
            return x.kind === 'videoinput'
          })

          if (
            deviceId &&
            videoDevices[0] &&
            videoDevices.find(function (x) {
              return x.deviceId
            }) === undefined
          ) {
            return _this.handleError(
              new _customErrors.ReactVideoRecorderDeviceUnavailableError()
            )
          }

          var currentDeviceId =
            typeof deviceId === 'string' ? deviceId : videoDevices[0].deviceId

          _this.setState({
            isConnecting: true,
            isReplayingVideo: false,
            thereWasAnError: false,
            currentDeviceId: currentDeviceId,
            availableDeviceIds: videoDevices.map(function (x) {
              return x.deviceId
            }),
            error: null
          })

          var fallbackContraints = {
            audio: true,
            video: true
          }
          var currentConstraints = (0, _lodash['default'])(
            {
              video: {
                deviceId: {
                  exact: currentDeviceId
                }
              }
            },
            _this.props.constraints
          )
          navigator.mediaDevices
            .getUserMedia(currentConstraints)
            ['catch'](function (err) {
              // there's a bug in chrome in some windows computers where using `ideal` in the constraints throws a NotReadableError
              if (
                err.name === 'NotReadableError' ||
                err.name === 'OverconstrainedError'
              ) {
                console.warn(
                  'Got '.concat(
                    err.name,
                    ', trying getUserMedia again with fallback constraints'
                  )
                )
                return navigator.mediaDevices.getUserMedia(fallbackContraints)
              }

              throw err
            })
            .then(_this.handleSuccess)
            ['catch'](_this.handleError)
        })
        ['catch'](_this.handleError)
    })

    _defineProperty(
      _assertThisInitialized(_this),
      'handleSwitchCamera',
      function () {
        if (_this.props.onSwitchCamera) {
          _this.props.onSwitchCamera()
        }

        var _this$state = _this.state,
          currentDeviceId = _this$state.currentDeviceId,
          availableDeviceIds = _this$state.availableDeviceIds // Stop media tracks

        _this.stream &&
          _this.stream.getTracks().forEach(function (stream) {
            return stream.stop()
          })
        var index = availableDeviceIds.findIndex(function (x) {
          return x === currentDeviceId
        })
        var maxIndex = availableDeviceIds.length - 1

        if (index < 0) {
          return _this.handleError(
            new _customErrors.ReactVideoRecorderDeviceUnavailableError()
          )
        }

        if (index + 1 > maxIndex)
          return _this.turnOnCamera(availableDeviceIds[0])
        return _this.turnOnCamera(availableDeviceIds[index + 1])
      }
    )

    _defineProperty(
      _assertThisInitialized(_this),
      'turnOffCamera',
      function () {
        if (_this.props.onTurnOffCamera) {
          _this.props.onTurnOffCamera()
        }

        _this.stream &&
          _this.stream.getTracks().forEach(function (stream) {
            return stream.stop()
          })

        _this.setState({
          isCameraOn: false
        })

        clearInterval(_this.inactivityTimer)
      }
    )

    _defineProperty(_assertThisInitialized(_this), 'handleSuccess', function (
      stream
    ) {
      // Since handleSuccess is an async function, we may be in a situation where this was called after the
      // component was unmounted
      if (_this.isComponentUnmounted) {
        return
      }

      _this.stream = stream

      _this.setState({
        isCameraOn: true,
        stream: stream
      })

      if (_this.props.onCameraOn) {
        _this.props.onCameraOn()
      }

      if (window.URL) {
        _this.cameraVideo.srcObject = stream
      } else {
        _this.cameraVideo.src = stream
      } // there is probably a better way
      // but this makes sure the start recording button
      // gives the stream a couple miliseconds to be ready

      setTimeout(function () {
        _this.setState({
          isConnecting: false,
          streamIsReady: true
        })
      }, 200)
    })

    _defineProperty(_assertThisInitialized(_this), 'handleError', function (
      err
    ) {
      var onError = _this.props.onError

      if (onError) {
        onError(err)
      }

      if (_this.isComponentUnmounted) {
        return
      }

      console.error('Captured error', err)
      clearTimeout(_this.timeLimitTimeout)

      _this.setState({
        isConnecting: _this.state.isConnecting && false,
        isRecording: false,
        thereWasAnError: true,
        error: err
      })

      if (_this.state.isCameraOn) {
        _this.turnOffCamera()
      }
    })

    _defineProperty(_assertThisInitialized(_this), 'handleDataIssue', function (
      event
    ) {
      var error = new _customErrors.ReactVideoRecorderDataIssueError(event)
      console.error(error.message, event)

      _this.handleError(error)

      return false
    })

    _defineProperty(_assertThisInitialized(_this), 'getMimeType', function () {
      if (_this.props.mimeType) {
        return _this.props.mimeType
      }

      var mimeType = window.MediaRecorder.isTypeSupported
        ? MIME_TYPES.find(window.MediaRecorder.isTypeSupported)
        : 'video/webm'
      return (
        (_this.mediaRecorder && _this.mediaRecorder.mimeType) || mimeType || ''
      )
    })

    _defineProperty(_assertThisInitialized(_this), 'isDataHealthOK', function (
      event
    ) {
      if (!event.data) return _this.handleDataIssue(event)
      var chunkSize = _this.props.chunkSize
      var dataCheckInterval = 2000 / chunkSize // in some browsers (FF/S), data only shows up
      // after a certain amount of time ~everyt 2 seconds

      var blobCount = _this.recordedBlobs.length

      if (
        blobCount > dataCheckInterval &&
        blobCount % dataCheckInterval === 0
      ) {
        var blob = new window.Blob(_this.recordedBlobs, {
          type: _this.getMimeType()
        })
        if (blob.size <= 0) return _this.handleDataIssue(event)
      }

      return true
    })

    _defineProperty(
      _assertThisInitialized(_this),
      'tryToUnmuteReplayVideo',
      function () {
        var video = _this.replayVideo
        video.muted = false
        var playPromise = video.play()

        if (!playPromise) {
          video.muted = true
          return
        }

        playPromise
          .then(function () {
            _this.setState({
              isReplayVideoMuted: false
            }) // fixes bug where seeking control during autoplay is not available until the video is almost completely played through

            if (_this.props.replayVideoAutoplayAndLoopOff) {
              video.pause()
              video.loop = false
            }
          })
          ['catch'](function (err) {
            console.warn('Could not autoplay replay video', err)
            video.muted = true
            return video.play()
          })
          ['catch'](function (err) {
            console.warn(
              'Could play muted replay video after failed autoplay',
              err
            )
          })
      }
    )

    _defineProperty(
      _assertThisInitialized(_this),
      'handleDataAvailable',
      function (event) {
        if (_this.isDataHealthOK(event)) {
          _this.recordedBlobs.push(event.data)
        }
      }
    )

    _defineProperty(
      _assertThisInitialized(_this),
      'getTotalEllapsedTimeInMs',
      function () {
        return (
          Date.now() - _this.lastRecordingTimestamp + _this.recordingDuration
        )
      }
    )

    _defineProperty(
      _assertThisInitialized(_this),
      'handleStopRecording',
      function () {
        if (_this.props.onStopRecording) {
          _this.props.onStopRecording()
        }

        if (!_this.mediaRecorder) {
          _this.handleError(
            new _customErrors.ReactVideoRecorderMediaRecorderUnavailableError()
          )

          return
        }

        _this.mediaRecorder.stop()

        _this.recordingDuration = _this.getTotalEllapsedTimeInMs()
      }
    )

    _defineProperty(
      _assertThisInitialized(_this),
      'handlePauseRecording',
      function () {
        if (_this.props.onPauseRecording) {
          _this.props.onPauseRecording()
        }

        if (!_this.mediaRecorder) {
          _this.handleError(
            new _customErrors.ReactVideoRecorderMediaRecorderUnavailableError()
          )

          return
        }

        _this.mediaRecorder.pause()

        _this.recordingDuration = _this.getTotalEllapsedTimeInMs()
      }
    )

    _defineProperty(
      _assertThisInitialized(_this),
      'handleResumeRecording',
      function () {
        if (_this.props.onResumeRecording) {
          _this.props.onResumeRecording()
        }

        if (!_this.mediaRecorder) {
          _this.handleError(
            new _customErrors.ReactVideoRecorderMediaRecorderUnavailableError()
          )

          return
        }

        _this.mediaRecorder.resume()

        _this.lastRecordingTimestamp = Date.now()
      }
    )

    _defineProperty(
      _assertThisInitialized(_this),
      'handleStartRecording',
      function () {
        if (_this.props.onStartRecording) {
          _this.props.onStartRecording()
        }

        _this.setState({
          isRunningCountdown: true,
          isReplayingVideo: false
        })

        setTimeout(function () {
          return _this.startRecording()
        }, _this.props.countdownTime)
      }
    )

    _defineProperty(
      _assertThisInitialized(_this),
      'startRecording',
      function () {
        ;(0, _getVideoInfo.captureThumb)(_this.cameraVideo).then(function (
          thumbnail
        ) {
          _this.thumbnail = thumbnail
          _this.recordedBlobs = []
          var options = {
            mimeType: _this.getMimeType()
          }

          try {
            _this.setState({
              isRunningCountdown: false,
              isRecording: true
            })

            _this.startedAt = new Date().getTime()
            _this.mediaRecorder = new window.MediaRecorder(
              _this.stream,
              options
            )

            _this.mediaRecorder.addEventListener('stop', _this.handleStop)

            _this.mediaRecorder.addEventListener('error', _this.handleError)

            _this.mediaRecorder.addEventListener(
              'dataavailable',
              _this.handleDataAvailable
            )

            var _this$props = _this.props,
              timeLimit = _this$props.timeLimit,
              chunkSize = _this$props.chunkSize,
              dataAvailableTimeout = _this$props.dataAvailableTimeout

            _this.mediaRecorder.start(chunkSize) // collect 10ms of data

            _this.lastRecordingTimestamp = Date.now()
            _this.recordingDuration = 0

            if (timeLimit) {
              _this.timeLimitTimeout = setTimeout(function () {
                _this.handleStopRecording()
              }, timeLimit)
            } // mediaRecorder.ondataavailable should be called every 10ms,
            // as that's what we're passing to mediaRecorder.start() above

            if (Number.isInteger(dataAvailableTimeout)) {
              setTimeout(function () {
                if (_this.recordedBlobs.length === 0) {
                  _this.handleError(
                    new _customErrors.ReactVideoRecorderDataAvailableTimeoutError(
                      dataAvailableTimeout
                    )
                  )
                }
              }, dataAvailableTimeout)
            }
          } catch (err) {
            console.error("Couldn't create MediaRecorder", err, options)

            _this.handleError(err)
          }
        })
      }
    )

    _defineProperty(_assertThisInitialized(_this), 'handleStop', function (
      event
    ) {
      var endedAt = new Date().getTime()

      if (!_this.recordedBlobs || _this.recordedBlobs.length <= 0) {
        var error = new _customErrors.ReactVideoRecorderRecordedBlobsUnavailableError(
          event
        )
        console.error(error.message, event)

        _this.handleError(error)

        return
      }

      clearTimeout(_this.timeLimitTimeout)
      var videoBlob =
        _this.recordedBlobs.length === 1
          ? _this.recordedBlobs[0]
          : new window.Blob(_this.recordedBlobs, {
              type: _this.getMimeType()
            })
      var thumbnailBlob = _this.thumbnail
      var startedAt = _this.startedAt
      var duration = endedAt - startedAt // if this gets executed too soon, the last chunk of data is lost on FF

      _this.mediaRecorder.ondataavailable = null

      _this.fixVideoMetadata(videoBlob).then(function (fixedVideoBlob) {
        _this.setState({
          isRecording: false,
          isReplayingVideo: true,
          isReplayVideoMuted: true,
          fixedVideoBlob: fixedVideoBlob,
          videoUrl: window.URL.createObjectURL(fixedVideoBlob)
        })

        _this.turnOffCamera()

        _this.props.onRecordingComplete(
          fixedVideoBlob,
          startedAt,
          thumbnailBlob,
          duration
        )
      })
    })

    _defineProperty(
      _assertThisInitialized(_this),
      'fixVideoMetadata',
      function (rawVideoBlob) {
        var _Blob$prototype, _Blob$prototype$array

        var isSafari = /^((?!chrome|android).)*safari/i.test(
          navigator.userAgent
        )

        if (isSafari) {
          return Promise.resolve(rawVideoBlob)
        } // see https://stackoverflow.com/a/63568311

        ;(_Blob$prototype$array = (_Blob$prototype = Blob.prototype)
          .arrayBuffer) !== null && _Blob$prototype$array !== void 0
          ? _Blob$prototype$array
          : (_Blob$prototype.arrayBuffer = function () {
              return new Response(this).arrayBuffer()
            })
        return (0, _fixWebmDuration['default'])(
          rawVideoBlob,
          _this.recordingDuration
        )
      }
    )

    _defineProperty(
      _assertThisInitialized(_this),
      'handleVideoSelected',
      function (e) {
        if (_this.state.isReplayingVideo) {
          _this.setState({
            isReplayingVideo: false
          })
        }

        var files = e.target.files || e.dataTransfer.files
        if (files.length === 0) return
        var startedAt = new Date().getTime()
        var video = files[0]
        e.target.value = null
        var extension = video.type === 'video/quicktime' ? 'mov' : undefined
        ;(0, _getVideoInfo['default'])(video)
          .then(function (_ref) {
            var duration = _ref.duration,
              thumbnail = _ref.thumbnail

            _this.setState({
              isRecording: false,
              isReplayingVideo: true,
              isReplayVideoMuted: true,
              videoBlob: video,
              videoUrl: window.URL.createObjectURL(video)
            })

            _this.props.onRecordingComplete(
              video,
              startedAt,
              thumbnail,
              duration,
              extension
            )
          })
          ['catch'](function (err) {
            _this.handleError(err)
          })
      }
    )

    _defineProperty(
      _assertThisInitialized(_this),
      'handleOpenVideoInput',
      function () {
        if (_this.props.onOpenVideoInput) {
          _this.props.onOpenVideoInput()
        }

        _this.videoInput.current.value = null

        _this.videoInput.current.click() // fixes a bug on iPhone where it doesn't save the recorded video on the second time (if you press the 'Use another video' button)

        _this.videoInput.current.addEventListener(
          'change',
          _this.handleVideoSelected
        )
      }
    )

    _defineProperty(
      _assertThisInitialized(_this),
      'handleStopReplaying',
      function () {
        if (_this.props.onStopReplaying) {
          _this.props.onStopReplaying()
        }

        if (_this.props.useVideoInput && _this.props.isOnInitially) {
          return _this.handleOpenVideoInput()
        }

        _this.setState({
          isReplayingVideo: false
        })

        if (
          _this.state.isInlineRecordingSupported &&
          _this.props.isOnInitially
        ) {
          _this.turnOnCamera()
        } else if (
          _this.state.isVideoInputSupported &&
          _this.props.isOnInitially
        ) {
          _this.handleOpenVideoInput()
        }
      }
    )

    _defineProperty(
      _assertThisInitialized(_this),
      'handleReplayVideoClick',
      function () {
        if (_this.replayVideo.paused && !_this.props.showReplayControls) {
          _this.replayVideo.play()
        } // fixes bug where seeking control during autoplay is not available until the video is almost completely played through

        if (!_this.props.replayVideoAutoplayAndLoopOff) {
          _this.setState({
            isReplayVideoMuted: !_this.state.isReplayVideoMuted
          })
        }
      }
    )

    return _this
  }

  _createClass(VideoRecorder, [
    {
      key: 'componentDidMount',
      value: function componentDidMount() {
        var _this2 = this

        var isInlineRecordingSupported =
          !!window.MediaRecorder && !!navigator.mediaDevices
        var isVideoInputSupported =
          document.createElement('input').capture !== undefined
        this.setState(
          {
            isInlineRecordingSupported: isInlineRecordingSupported,
            isVideoInputSupported: isVideoInputSupported
          },
          function () {
            if (_this2.props.useVideoInput && _this2.props.isOnInitially) {
              _this2.handleOpenVideoInput()
            } else if (
              _this2.state.isInlineRecordingSupported &&
              _this2.props.isOnInitially
            ) {
              _this2.turnOnCamera()
            } else if (
              _this2.state.isVideoInputSupported &&
              _this2.props.isOnInitially
            ) {
              _this2.handleOpenVideoInput()
            }
          }
        )
      }
    },
    {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(prevProps, prevState) {
        if (
          this.replayVideo &&
          this.state.isReplayingVideo &&
          !prevState.isReplayingVideo
        ) {
          this.tryToUnmuteReplayVideo()
        }
      }
    },
    {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this.turnOffCamera()
        this.isComponentUnmounted = true
      }
    },
    {
      key: 'renderCameraView',
      value: function renderCameraView() {
        var _this3 = this

        var _this$props2 = this.props,
          cameraViewClassName = _this$props2.cameraViewClassName,
          showReplayControls = _this$props2.showReplayControls,
          videoControlsList = _this$props2.videoControlsList,
          disablePictureInPicture = _this$props2.disablePictureInPicture,
          replayVideoAutoplayAndLoopOff =
            _this$props2.replayVideoAutoplayAndLoopOff,
          renderDisconnectedView = _this$props2.renderDisconnectedView,
          renderVideoInputView = _this$props2.renderVideoInputView,
          renderUnsupportedView = _this$props2.renderUnsupportedView,
          renderErrorView = _this$props2.renderErrorView,
          renderLoadingView = _this$props2.renderLoadingView,
          useVideoInput = _this$props2.useVideoInput,
          videoClassName = _this$props2.videoClassName
        var _this$state2 = this.state,
          isVideoInputSupported = _this$state2.isVideoInputSupported,
          isReplayingVideo = _this$state2.isReplayingVideo,
          isInlineRecordingSupported = _this$state2.isInlineRecordingSupported,
          thereWasAnError = _this$state2.thereWasAnError,
          error = _this$state2.error,
          isCameraOn = _this$state2.isCameraOn,
          isConnecting = _this$state2.isConnecting,
          isReplayVideoMuted = _this$state2.isReplayVideoMuted,
          isRecording = _this$state2.isRecording,
          availableDeviceIds = _this$state2.availableDeviceIds
        var shouldUseVideoInput =
          useVideoInput ||
          (!isInlineRecordingSupported && isVideoInputSupported)
        var videoInput = shouldUseVideoInput
          ? /*#__PURE__*/ _react['default'].createElement('input', {
              ref: this.videoInput,
              key: 'videoInput',
              type: 'file',
              accept: 'video/*',
              capture: useVideoInput ? undefined : 'user',
              style: {
                display: 'none'
              },
              onChange: this.handleVideoSelected
            })
          : null

        if (isReplayingVideo) {
          return /*#__PURE__*/ _react['default'].createElement(
            CameraView,
            {
              key: 'replay',
              className: cameraViewClassName
            },
            /*#__PURE__*/ _react['default'].createElement(Video, {
              ref: function ref(el) {
                return (_this3.replayVideo = el)
              },
              className: videoClassName,
              src: this.state.videoUrl,
              loop: true,
              muted: isReplayVideoMuted,
              playsInline: true,
              autoPlay: !replayVideoAutoplayAndLoopOff,
              controls: showReplayControls,
              onClick: this.handleReplayVideoClick,
              onDurationChange: this.handleDurationChange,
              controlsList: videoControlsList,
              disablePictureInPicture: disablePictureInPicture
            }),
            videoInput
          )
        }

        if (shouldUseVideoInput) {
          return renderVideoInputView({
            videoInput: videoInput
          })
        }

        if (!isInlineRecordingSupported) {
          return renderUnsupportedView()
        }

        if (thereWasAnError) {
          return renderErrorView({
            error: error
          })
        }

        if (isCameraOn) {
          // Enable switch camera button, only if not recording and multiple video sources available
          var switchCameraControl =
            availableDeviceIds && availableDeviceIds.length >= 2 && !isRecording
              ? /*#__PURE__*/ _react['default'].createElement(
                  _switchCameraView['default'],
                  {
                    onClick: this.handleSwitchCamera
                  }
                )
              : null
          return /*#__PURE__*/ _react['default'].createElement(
            CameraView,
            {
              key: 'camera'
            },
            /*#__PURE__*/ _react['default'].createElement(Video, {
              isFlipped: this.props.isFlipped,
              ref: function ref(el) {
                return (_this3.cameraVideo = el)
              },
              autoPlay: true,
              muted: true,
              playsInline: true
            }),
            switchCameraControl
          )
        }

        if (isConnecting) {
          return renderLoadingView()
        }

        return renderDisconnectedView()
      }
    },
    {
      key: 'render',
      value: function render() {
        var _this4 = this

        var _this$state3 = this.state,
          isVideoInputSupported = _this$state3.isVideoInputSupported,
          isInlineRecordingSupported = _this$state3.isInlineRecordingSupported,
          thereWasAnError = _this$state3.thereWasAnError,
          isRecording = _this$state3.isRecording,
          isCameraOn = _this$state3.isCameraOn,
          streamIsReady = _this$state3.streamIsReady,
          isConnecting = _this$state3.isConnecting,
          isRunningCountdown = _this$state3.isRunningCountdown,
          isReplayingVideo = _this$state3.isReplayingVideo,
          isReplayVideoMuted = _this$state3.isReplayVideoMuted
        var _this$props3 = this.props,
          countdownTime = _this$props3.countdownTime,
          timeLimit = _this$props3.timeLimit,
          showReplayControls = _this$props3.showReplayControls,
          replayVideoAutoplayAndLoopOff =
            _this$props3.replayVideoAutoplayAndLoopOff,
          renderActions = _this$props3.renderActions,
          t = _this$props3.t,
          useVideoInput = _this$props3.useVideoInput,
          wrapperClassName = _this$props3.wrapperClassName
        return /*#__PURE__*/ _react['default'].createElement(
          Wrapper,
          {
            className: wrapperClassName
          },
          this.renderCameraView(),
          renderActions({
            t: t,
            isVideoInputSupported: isVideoInputSupported,
            isInlineRecordingSupported: isInlineRecordingSupported,
            thereWasAnError: thereWasAnError,
            isRecording: isRecording,
            isCameraOn: isCameraOn,
            streamIsReady: streamIsReady,
            isConnecting: isConnecting,
            isRunningCountdown: isRunningCountdown,
            isReplayingVideo: isReplayingVideo,
            isReplayVideoMuted: isReplayVideoMuted,
            countdownTime: countdownTime,
            timeLimit: timeLimit,
            showReplayControls: showReplayControls,
            replayVideoAutoplayAndLoopOff: replayVideoAutoplayAndLoopOff,
            useVideoInput: useVideoInput,
            onTurnOnCamera: function onTurnOnCamera() {
              return _this4.turnOnCamera()
            },
            onSwitchCamera: this.handleSwitchCamera,
            onTurnOffCamera: this.turnOffCamera,
            onOpenVideoInput: this.handleOpenVideoInput,
            onStartRecording: this.handleStartRecording,
            onStopRecording: this.handleStopRecording,
            onPauseRecording: this.handlePauseRecording,
            onResumeRecording: this.handleResumeRecording,
            onStopReplaying: this.handleStopReplaying
          })
        )
      }
    }
  ])

  return VideoRecorder
})(_react.Component)

exports['default'] = VideoRecorder

_defineProperty(VideoRecorder, 'propTypes', {
  /** Whether or not to start the camera initially */
  isOnInitially: _propTypes['default'].bool,

  /** Whether or not to display the video flipped (makes sense for user facing camera) */
  isFlipped: _propTypes['default'].bool,

  /** Pass this if you want to force a specific mime-type for the video */
  mimeType: _propTypes['default'].string,

  /** How much time to wait until it starts recording (in ms) */
  countdownTime: _propTypes['default'].number,

  /** Use this if you want to set a time limit for the video (in ms) */
  timeLimit: _propTypes['default'].number,

  /** Use this if you want to show play/pause/etc. controls on the replay video */
  showReplayControls: _propTypes['default'].bool,

  /** Use this to turn off autoplay and looping of the replay video. It is recommended to also showReplayControls in order to play */
  replayVideoAutoplayAndLoopOff: _propTypes['default'].bool,

  /** Use this if you want to customize the constraints passed to getUserMedia() */
  constraints: _propTypes['default'].shape({
    audio: _propTypes['default'].any,
    video: _propTypes['default'].any
  }),
  chunkSize: _propTypes['default'].number,
  dataAvailableTimeout: _propTypes['default'].number,
  useVideoInput: _propTypes['default'].bool,

  /** Use this to configure the replaying video element's controlslist attribute */
  videoControlsList: _propTypes['default'].string,

  /** Use this to disable picture in picture mode on the replaying video element */
  disablePictureInPicture: _propTypes['default'].bool,
  renderDisconnectedView: _propTypes['default'].func,
  renderLoadingView: _propTypes['default'].func,
  renderVideoInputView: _propTypes['default'].func,
  renderUnsupportedView: _propTypes['default'].func,
  renderErrorView: _propTypes['default'].func,
  renderActions: _propTypes['default'].func,
  cameraViewClassName: _propTypes['default'].string,
  videoClassName: _propTypes['default'].string,
  wrapperClassName: _propTypes['default'].string,

  /** Use this to localize the texts */
  t: _propTypes['default'].func,
  onCameraOn: _propTypes['default'].func,
  onTurnOnCamera: _propTypes['default'].func,
  onSwitchCamera: _propTypes['default'].func,
  onTurnOffCamera: _propTypes['default'].func,
  onStartRecording: _propTypes['default'].func,
  onStopRecording: _propTypes['default'].func,
  onPauseRecording: _propTypes['default'].func,
  onResumeRecording: _propTypes['default'].func,
  onRecordingComplete: _propTypes['default'].func,
  onOpenVideoInput: _propTypes['default'].func,
  onStopReplaying: _propTypes['default'].func,
  onError: _propTypes['default'].func
})

_defineProperty(VideoRecorder, 'defaultProps', {
  renderUnsupportedView: function renderUnsupportedView() {
    return /*#__PURE__*/ _react['default'].createElement(
      _unsupportedView['default'],
      null
    )
  },
  renderErrorView: function renderErrorView() {
    return /*#__PURE__*/ _react['default'].createElement(
      _errorView['default'],
      null
    )
  },
  renderVideoInputView: function renderVideoInputView(_ref2) {
    var videoInput = _ref2.videoInput
    return /*#__PURE__*/ _react['default'].createElement(
      _react['default'].Fragment,
      null,
      videoInput
    )
  },
  renderDisconnectedView: function renderDisconnectedView() {
    return /*#__PURE__*/ _react['default'].createElement(
      _disconnectedView['default'],
      null
    )
  },
  renderLoadingView: function renderLoadingView() {
    return /*#__PURE__*/ _react['default'].createElement(
      _loadingView['default'],
      null
    )
  },
  t: function t(x) {
    return x
  },
  renderActions: _renderActions['default'],
  isFlipped: true,
  countdownTime: 3000,
  constraints: CONSTRAINTS,
  chunkSize: 250,
  dataAvailableTimeout: 500
})
