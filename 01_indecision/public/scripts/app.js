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
    _this.handleDeleteSingleOption = _this.handleDeleteSingleOption.bind(_assertThisInitialized(_this));
    _this.handlePickOption = _this.handlePickOption.bind(_assertThisInitialized(_this));
    _this.handleAddOption = _this.handleAddOption.bind(_assertThisInitialized(_this));
    _this.state = {
      options: props.options
    };
    return _this;
  } // Lifecycle only available in a Class based component


  _createClass(IndecisionApp, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      try {
        var json = localStorage.getItem("options");
        var options = JSON.parse(json);

        if (options) {
          this.setState(function () {
            return {
              options: options
            };
          });
        }
      } catch (e) {// Do nothing
      }
    } //doesn't fire on initial load/mount

  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevState) {
      if (prevState.options.length !== this.state.options.length) {
        var json = JSON.stringify(this.state.options);
        localStorage.setItem("options", json);
      }

      ;
    }
  }, {
    key: "handleDeleteOptions",
    value: function handleDeleteOptions() {
      this.setState(function () {
        return {
          options: []
        };
      });
    }
  }, {
    key: "handleDeleteSingleOption",
    value: function handleDeleteSingleOption(optionToRemove) {
      // passed down to Options and then from Options onto Option
      this.setState(function (prevState) {
        return {
          options: prevState.options.filter(function (option) {
            return optionToRemove !== option;
          })
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
      } // implicitly returning from the arrow function rather than explicity with return


      this.setState(function (prevState) {
        return {
          options: prevState.options.concat([option])
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      var subTitle = "Subtitle prop";
      return React.createElement("div", {
        className: "col-2"
      }, React.createElement(Header, {
        subTitle: subTitle
      }), React.createElement(Action, {
        hasOptions: this.state.options.length > 0,
        handlePickOption: this.handlePickOption
      }), React.createElement(Options, {
        options: this.state.options,
        handleDeleteOptions: this.handleDeleteOptions,
        handleDeleteSingleOption: this.handleDeleteSingleOption
      }), React.createElement("p", null), React.createElement(OptionForm, {
        options: this.state.options,
        handleAddOption: this.handleAddOption
      }), React.createElement("p", null));
    }
  }]);

  return IndecisionApp;
}(React.Component);

IndecisionApp.defaultProps = {
  options: []
};

var Header = function Header(props) {
  return React.createElement("div", null, React.createElement("h2", null, props.title), props.subTitle && React.createElement("h3", null, props.subTitle));
};

Header.defaultProps = {
  title: "Indecision"
};

var Action = function Action(props) {
  return React.createElement("div", null, React.createElement("button", {
    onClick: props.handlePickOption,
    className: "btn btn-primary",
    disabled: !props.hasOptions
  }, "What should I do?"));
};

var Options = function Options(props) {
  return React.createElement("div", null, React.createElement("p", null), React.createElement("button", {
    onClick: props.handleDeleteOptions,
    className: "btn btn-danger"
  }, "Remove All"), props.options.map(function (option) {
    return React.createElement(Option, {
      key: option,
      optionText: option,
      handleDeleteSingleOption: props.handleDeleteSingleOption
    });
  }));
};

var Option = function Option(props) {
  return React.createElement("div", null, props.optionText, React.createElement("button", {
    onClick: function onClick(e) {
      props.handleDeleteSingleOption(props.optionText);
    }
  }, "Remove"));
};

var AddOption =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(AddOption, _React$Component2);

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
function (_React$Component3) {
  _inherits(OptionForm, _React$Component3);

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

ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById("app"));
