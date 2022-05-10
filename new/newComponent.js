"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ReactDOM = require("react-dom");
var NewComponent = /** @class */ (function (_super) {
    __extends(NewComponent, _super);
    function NewComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { connect: false };
        return _this;
    }
    NewComponent.prototype.connectingButton = function () {
        var buttons = oldCom.getElementsByTagName('button');
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener('click', function (event) {
                var target = event.target;
                document.getElementById("response")
                    .firstChild.textContent = target.textContent;
            }, false);
        }
    };
    NewComponent.prototype.connectinginfo = function () {
        var buttons = oldCom.getElementsByTagName('div');
        for (var i = 0; i < buttons.length; i++)
            buttons[i].innerHTML = "";
    };
    NewComponent.prototype.render = function () {
        var _this = this;
        if (!this.state) {
            return (React.createElement("button", { onClick: function () { _this.connectingButton(); _this.setState({ connect: true }); } }, "connect"));
        }
        return (React.createElement("div", null,
            React.createElement("button", { onClick: this.connectinginfo }, "reset"),
            React.createElement("p", { id: 'response' }, "hello")));
    };
    return NewComponent;
}(React.Component));
exports.default = NewComponent;
var newCom = document.querySelector('#new');
var oldCom = document.querySelector('#old');
ReactDOM.render(React.createElement(NewComponent, null), newCom);
//# sourceMappingURL=newComponent.js.map