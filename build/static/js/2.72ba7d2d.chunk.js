webpackJsonp([2],{186:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=n(0),a=n.n(u),c=n(59),s=n(14),p=n(57),f=n(13),l=n(8),d=n(56),b=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),h=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),b(t,[{key:"componentDidMount",value:function(){this.props.onFetchOrders(this.props.token,this.props.userId)}},{key:"render",value:function(){var e=a.a.createElement(d.a,null);return this.props.loading||(e=this.props.orders.map(function(e){return a.a.createElement(c.a,{key:e.id,ingredients:e.ingredients,price:e.price})})),a.a.createElement("div",null,e)}}]),t}(u.Component),y=function(e){return{orders:e.order.orders,loading:e.order.loading,token:e.auth.token,userId:e.auth.userId}},O=function(e){return{onFetchOrders:function(t,n){return e(f.d(t,n))}}};t.default=Object(l.b)(y,O)(Object(p.a)(h,s.a))}});
//# sourceMappingURL=2.72ba7d2d.chunk.js.map