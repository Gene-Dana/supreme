"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Home = function Home() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('./components/Home.vue'));
  });
};

var About = function About() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('./components/About.vue'));
  });
};

var FreeQuote = function FreeQuote() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('./components/FreeQuote.vue'));
  });
};

var Accordion = function Accordion() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('./components/Accordion.vue'));
  });
};

var Panels = function Panels() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('./components/Panels.vue'));
  });
};

var Rolldown = function Rolldown() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('./components/Rolldown.vue'));
  });
};

var HowToMeasure = function HowToMeasure() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('./components/HowToMeasure.vue'));
  });
};

var SubmissionSuccess = function SubmissionSuccess() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('./components/SubmissionSuccess.vue'));
  });
};

var SubmissionFail = function SubmissionFail() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('./components/SubmissionFail.vue'));
  });
};

var _default = [// Redirects to /route-one as the default route.
{
  path: '/',
  redirect: '/home'
}, {
  path: '/home',
  component: Home
}, {
  path: '/about',
  component: About
}, {
  path: '/free quote',
  component: FreeQuote
}, {
  path: '/accordion',
  component: Accordion
}, {
  path: '/panels',
  component: Panels
}, {
  path: '/rolldown',
  component: Rolldown
}, {
  path: '/how to measure',
  component: HowToMeasure
}, {
  path: '/thanks',
  name: 'success',
  component: SubmissionSuccess
}, {
  path: '/404',
  name: 'fail',
  component: SubmissionFail
}];
exports["default"] = _default;