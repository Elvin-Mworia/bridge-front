"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.user_Reducer = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var user_Reducer = function user_Reducer(state, action) {
  switch (action.type) {
    case "LOGGED-IN":
      return _objectSpread({}, state, {
        customer: action.payload.customer,
        email: action.payload.email,
        id: action.payload.id
      });

    case "LOGGED_OUT":
      return _objectSpread({}, state, {
        customer: "",
        email: "",
        id: ""
      });

    default:
      return state;
  }
};

exports.user_Reducer = user_Reducer;
//# sourceMappingURL=userReducer.dev.js.map
