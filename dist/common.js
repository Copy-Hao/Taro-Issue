"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["common"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-11.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/Counter.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-11.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/Counter.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _stores_counter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../stores/counter */ "./src/stores/counter.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  setup: function setup() {
    var counter = (0,_stores_counter__WEBPACK_IMPORTED_MODULE_0__.useCounterStore)();
    var onAdd = function onAdd() {
      counter.count++;

      // with autocompletion ✨
      // counter.$patch({count: counter.count + 1})

      // or using an action instead
      // counter.increment()
    };

    return {
      counter: counter,
      onAdd: onAdd
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-11.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/Counter.vue?vue&type=template&id=274929fc":
/*!*********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-11.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/Counter.vue?vue&type=template&id=274929fc ***!
  \*********************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* binding */ render; }
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "webpack/container/remote/vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

var _hoisted_1 = {
  class: "title"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("view", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("text", _hoisted_1, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.counter.count), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("view", {
    class: "button",
    onTap: _cache[0] || (_cache[0] = function () {
      return $setup.onAdd && $setup.onAdd.apply($setup, arguments);
    })
  }, "ADD", 32 /* HYDRATE_EVENTS */)]);
}

/***/ }),

/***/ "./src/stores/counter.js":
/*!*******************************!*\
  !*** ./src/stores/counter.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useCounterStore: function() { return /* binding */ useCounterStore; }
/* harmony export */ });
/* harmony import */ var pinia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pinia */ "webpack/container/remote/pinia");
/* harmony import */ var pinia__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pinia__WEBPACK_IMPORTED_MODULE_0__);
// https://pinia.esm.dev/introduction.html

var useCounterStore = (0,pinia__WEBPACK_IMPORTED_MODULE_0__.defineStore)('counter', {
  state: function state() {
    return {
      count: 0
    };
  },
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    increment: function increment() {
      this.count++;
    }
  }
});

// You can even use a function (similar to a component setup()) to define a Store for more advanced use cases:
// export const useCounterStore = defineStore('counter', () => {
//   const count = ref(0)
//
//   function increment() {
//     count.value++
//   }
//
//   return {count, increment}
// })

/***/ }),

/***/ "./src/components/Counter.vue":
/*!************************************!*\
  !*** ./src/components/Counter.vue ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _Counter_vue_vue_type_template_id_274929fc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Counter.vue?vue&type=template&id=274929fc */ "./src/components/Counter.vue?vue&type=template&id=274929fc");
/* harmony import */ var _Counter_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Counter.vue?vue&type=script&lang=js */ "./src/components/Counter.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Counter_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Counter_vue_vue_type_template_id_274929fc__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/components/Counter.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./src/components/Counter.vue?vue&type=script&lang=js":
/*!************************************************************!*\
  !*** ./src/components/Counter.vue?vue&type=script&lang=js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_11_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Counter_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_11_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Counter_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-11.use[0]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Counter.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-11.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/Counter.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./src/components/Counter.vue?vue&type=template&id=274929fc":
/*!******************************************************************!*\
  !*** ./src/components/Counter.vue?vue&type=template&id=274929fc ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_11_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Counter_vue_vue_type_template_id_274929fc__WEBPACK_IMPORTED_MODULE_0__.render; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_11_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Counter_vue_vue_type_template_id_274929fc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-11.use[0]!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Counter.vue?vue&type=template&id=274929fc */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-11.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/Counter.vue?vue&type=template&id=274929fc");


/***/ })

}]);
//# sourceMappingURL=common.js.map