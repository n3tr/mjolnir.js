(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ 190:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "query", function() { return query; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DocTemplate; });
/* harmony import */ var core_js_modules_es6_string_starts_with__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82);
/* harmony import */ var core_js_modules_es6_string_starts_with__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_starts_with__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(32);
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);





 // Query for the markdown doc by slug
// (Note: We could just search the allMarkdown from WebsiteConfig ourselves)

var query = "4156247007";

function replaceLinks(props) {
  var html = props.data.docBySlug.html;
  var relativeLinks = props.pageContext.relativeLinks;
  return html.replace(/href="([^"]+)"/g, function (link, href) {
    // don't rewrite external links, don't rewrite links to anchors
    if (href.startsWith('http') || href.startsWith('#')) {
      // TODO - we could style them differently though
      return link;
    }

    var hrefWithoutLeadingSlash = href.startsWith('/') ? href.slice(1) : href; // replace links to:
    // - known physical files, either relative to this file or relative to root
    // - known routes, either relative to the route of this page or to the home page
    // by a link to their corresponding route, expresed relative to the home page

    return "href=\"" + relativeLinks[hrefWithoutLeadingSlash] + "\"";
  });
}

var DocTemplate =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2___default()(DocTemplate, _React$Component);

  function DocTemplate(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.state = {
      html: replaceLinks(props)
    };
    return _this;
  }

  var _proto = DocTemplate.prototype;

  _proto.render = function render() {
    var html = this.state.html;
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "markdown-body",
      dangerouslySetInnerHTML: {
        __html: html
      }
    }));
  };

  return DocTemplate;
}(react__WEBPACK_IMPORTED_MODULE_3___default.a.Component);



/***/ })

}]);
//# sourceMappingURL=component---node-modules-ocular-gatsby-src-templates-doc-page-markdown-jsx-1336ae379fd7512b8deb.js.map