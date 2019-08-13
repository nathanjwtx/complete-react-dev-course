"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var IndecisionApp =
/*#__PURE__*/
function (_React$Component) {
  _inherits(IndecisionApp, _React$Component);

  function IndecisionApp(props) {
    var _this;

    _classCallCheck(this, IndecisionApp);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(IndecisionApp).call(this, props));
    _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_assertThisInitialized(_this));
    _this.handlePickOption = _this.handlePickOption.bind(_assertThisInitialized(_this));
    _this.handleAddOption = _this.handleAddOption.bind(_assertThisInitialized(_this));
    _this.state = {
      options: []
    };
    return _this;
  }

  _createClass(IndecisionApp, [{
    key: "handleDeleteOptions",
    value: function handleDeleteOptions() {
      this.setState(function () {
        return {
          options: []
        };
      });
    }
  }, {
    key: "handlePickOption",
    value: function handlePickOption() {
      var _this2 = this;

      this.setState(function () {
        var randomNum = Math.floor(Math.random() * _this2.state.options.length);
        var option = _this2.state.options[randomNum];
        alert(option);
      });
    }
  }, {
    key: "handleAddOption",
    value: function handleAddOption(option) {
      if (!option) {
        return "enter valid value item to add";
      } else if (this.state.options.indexOf(option) > -1) {
        return "entry already exists";
      }

      this.setState(function (prevState) {
        return {
          options: prevState.options.concat([option])
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      var title = "Indecision App";
      var subTitle = "Subtitle prop";
      return React.createElement("div", {
        className: "col-2"
      }, React.createElement(Header, {
        title: title,
        subTitle: subTitle
      }), React.createElement(Action, {
        hasOptions: this.state.options.length > 0,
        handlePickOption: this.handlePickOption
      }), React.createElement(Options, {
        options: this.state.options,
        handleDeleteOptions: this.handleDeleteOptions
      }), React.createElement("p", null), React.createElement(OptionForm, {
        options: this.state.options,
        handleAddOption: this.handleAddOption
      }), React.createElement("p", null));
    }
  }]);

  return IndecisionApp;
}(React.Component);

var Header =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(Header, _React$Component2);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, _getPrototypeOf(Header).apply(this, arguments));
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      return React.createElement("div", null, React.createElement("h2", null, this.props.title), React.createElement("h3", null, this.props.subTitle));
    }
  }]);

  return Header;
}(React.Component);

var Action = function Action(props) {
  return React.createElement("div", null, React.createElement("button", {
    onClick: props.handlePickOption,
    className: "btn btn-primary",
    disabled: !props.hasOptions
  }, "What should I do?"));
};

var Options =
/*#__PURE__*/
function (_React$Component3) {
  _inherits(Options, _React$Component3);

  function Options() {
    _classCallCheck(this, Options);

    return _possibleConstructorReturn(this, _getPrototypeOf(Options).apply(this, arguments));
  }

  _createClass(Options, [{
    key: "render",
    value: function render() {
      return React.createElement("div", null, React.createElement("p", null), React.createElement("button", {
        onClick: this.props.handleDeleteOptions,
        className: "btn btn-danger"
      }, "Remove All"), this.props.options.map(function (option) {
        return React.createElement(Option, {
          key: option,
          optionText: option
        });
      }));
    }
  }]);

  return Options;
}(React.Component);

var AddOption =
/*#__PURE__*/
function (_React$Component4) {
  _inherits(AddOption, _React$Component4);

  function AddOption() {
    _classCallCheck(this, AddOption);

    return _possibleConstructorReturn(this, _getPrototypeOf(AddOption).apply(this, arguments));
  }

  _createClass(AddOption, [{
    key: "render",
    value: function render() {
      return React.createElement("div", null, React.createElement("button", null, "Add a new option"));
    }
  }]);

  return AddOption;
}(React.Component);

var OptionForm =
/*#__PURE__*/
function (_React$Component5) {
  _inherits(OptionForm, _React$Component5);

  function OptionForm(props) {
    var _this3;

    _classCallCheck(this, OptionForm);

    _this3 = _possibleConstructorReturn(this, _getPrototypeOf(OptionForm).call(this, props));
    _this3.addNewOption = _this3.addNewOption.bind(_assertThisInitialized(_this3));
    _this3.state = {
      error: undefined
    };
    return _this3;
  }

  _createClass(OptionForm, [{
    key: "addNewOption",
    value: function addNewOption(e) {
      e.preventDefault(); //use .trim() to avoid an empty string with just spaces

      var option = e.target.elements.option.value.trim();
      var error = this.props.handleAddOption(option);
      this.setState(function () {
        return {
          error: error
        };
      });
      e.target.reset();
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement("div", null, this.state.error && React.createElement("p", null, this.state.error), React.createElement("form", {
        onSubmit: this.addNewOption
      }, React.createElement("div", {
        className: "col-12"
      }, React.createElement("div", {
        className: "container border border-primary"
      }, React.createElement("div", {
        className: "row align-items-start"
      }, React.createElement("div", {
        className: "col-12"
      }, React.createElement("div", {
        className: "form-group"
      }, React.createElement("input", {
        type: "text",
        name: "option",
        className: "form-control"
      }), React.createElement("small", {
        className: "form-text text-muted"
      }, "Add a new option")), React.createElement("button", {
        className: "btn btn-success"
      }, "Add new option")))))));
    }
  }]);

  return OptionForm;
}(React.Component);

var Option =
/*#__PURE__*/
function (_React$Component6) {
  _inherits(Option, _React$Component6);

  function Option() {
    _classCallCheck(this, Option);

    return _possibleConstructorReturn(this, _getPrototypeOf(Option).apply(this, arguments));
  }

  _createClass(Option, [{
    key: "render",
    value: function render() {
      return React.createElement("div", null, this.props.optionText);
    }
  }]);

  return Option;
}(React.Component); // stateless functional component
// const User = (props) => {
//     return (
//         <div>
//             <p>Name: {props.name}</p>
//             <p>Age: {props.age}</p>
//         </div>
//     )
// };


ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById("app"));
