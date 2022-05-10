'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NewComponent = function (_React$Component) {
    _inherits(NewComponent, _React$Component);

    function NewComponent(props) {
        _classCallCheck(this, NewComponent);

        var _this = _possibleConstructorReturn(this, (NewComponent.__proto__ || Object.getPrototypeOf(NewComponent)).call(this, props));

        _this.state = { connect: false };
        return _this;
    }

    _createClass(NewComponent, [{
        key: 'connectingButton',
        value: function connectingButton() {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = oldCom.getElementsByTagName('button')[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var i = _step.value;

                    i.addEventListener('click', function (event) {
                        document.getElementById("response").firstChild.textContent = event.target.firstChild.textContent;
                    }, false);
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
        }
    }, {
        key: 'connectinginfo',
        value: function connectinginfo() {
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
                for (var _iterator2 = oldCom.getElementsByTagName('div')[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var i = _step2.value;

                    i.innerHTML = "";
                }
            } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
                        _iterator2.return();
                    }
                } finally {
                    if (_didIteratorError2) {
                        throw _iteratorError2;
                    }
                }
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            if (!this.state.connect) {
                return React.createElement(
                    'button',
                    { onClick: function onClick() {
                            _this2.connectingButton();_this2.setState({ connect: true });
                        } },
                    'connect'
                );
            }
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'button',
                    { onClick: this.connectinginfo },
                    'reset'
                ),
                React.createElement(
                    'p',
                    { id: 'response' },
                    'hello'
                )
            );
        }
    }]);

    return NewComponent;
}(React.Component);

var newCom = document.querySelector('#new');
var oldCom = document.querySelector('#old');
ReactDOM.render(React.createElement(NewComponent, null), newCom);