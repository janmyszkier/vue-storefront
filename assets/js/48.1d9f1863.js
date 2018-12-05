(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{152:function(t,e,s){"use strict";s.r(e);var a=s(0),n=Object(a.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("p",[t._v('One of the key principles of the Vue Storefront architecture is afull scalability. We\'ve achieved very good performance results by not relying on the Magento2/CMS API performance. By implementing the "Divide and conquer" rule we created the middleware and external data store for the catalog using ElasticSearch.')]),t._v(" "),s("p",[t._v("That was our first goal, but the second was to provide the full data safety and reliability to the business - so we never encounter situations like the stocks and prices are de-synchronized or the discount rules haven't got applied. It can ruin the business, no matter the performance 😃")]),t._v(" "),t._m(1),t._v(" "),s("p",[t._v("This is the reason that we've got the direct Shopping cart sync with Magento2. Whenever the user add something to the cart we're checking the stock and synchronize the local in-browser cart with CMS.")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),s("p",[t._v("By default cart and totals sync is disabled. To make it work You just need to follow the steps described bellow:")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("Please generate the Magento2 API accesses. In our first tutorial there is an "),s("router-link",{attrs:{to:"./../installation/magento.html"}},[t._v("explanation on how to do this")]),t._v(".")],1)]),t._v(" "),t._m(8)]),t._v(" "),t._m(9),s("p",[t._v("Please check the "),s("a",{attrs:{href:"https://github.com/DivanteLtd/vue-storefront-api/blob/master/config/default.json",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("conf/default.json")]),s("OutboundLink")],1),t._v(" for the reference.")]),t._v(" "),t._m(10),t._v(" "),t._m(11),s("p",[t._v("Please check the "),s("a",{attrs:{href:"https://github.com/DivanteLtd/vue-storefront/blob/1302ed84561a514beb8c35e45ae1d0aa4dc9f74a/config/default.json#L8",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("conf/default.json")]),s("OutboundLink")],1),t._v(" for a reference.")]),t._v(" "),t._m(12),t._v(" "),s("p",[t._v("The last missing block is the catalog prices sync. This can be very easily enabled using the feature called Dynamic Prices. Please check "),s("router-link",{attrs:{to:"./direct-prices-sync.html"}},[t._v("Dynamic Prices howto")]),t._v(" to switch this feature on.")],1),t._v(" "),t._m(13),t._v(" "),s("p",[t._v("One of the cool features of Vue Storefront is queued order sync. This means whenever user makes and order in the application we store the order in the local browser cache (indexedDb instance) and send it to the server as fast as the Internet connection is available.")]),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),s("p",[t._v("The server API stores the order in the queue where it's processed by the "),s("a",{attrs:{href:"https://github.com/DivanteLtd/vue-storefront-api/blob/master/src/worker/order_to_magento2.js",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("order_2_magento")]),s("OutboundLink")],1),t._v(" worker process. We do support multiple types of orders: for guest users and logged in, with already synchronized carts or not etc.")]),t._v(" "),s("p",[t._v("This process doesn't require much additional configuration:")]),t._v(" "),s("ol",[t._m(16),t._v(" "),s("li",[t._v('You must have the "Orders" section marked On within the "Permissions" section of Magento Integration ('),s("router-link",{attrs:{to:"./../installation/magento.html"}},[t._v("see the previous tutorial for the reference on how to set it up")]),t._v(").")],1),t._v(" "),t._m(17)]),t._v(" "),t._m(18)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"totals-and-cart-sync-with-magento"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#totals-and-cart-sync-with-magento","aria-hidden":"true"}},[this._v("#")]),this._v(" Totals and cart sync with Magento")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"cart-and-totals-sync"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cart-and-totals-sync","aria-hidden":"true"}},[this._v("#")]),this._v(" Cart and Totals sync")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"/vue-storefront/Vue-storefront-architecture-proxy-requests.png",alt:"This is the dynamic requests architecture"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("In the backward direction we're always getting the current Totals - after applied Magento shopping cart rules and discounts to display the proper data to the user. This synchronization is implemented to still keep the Vue Storefront platform agnostic - "),e("code",[this._v("vue-storefront-api")]),this._v(" layer is in charge of translating the platform specific API formats to the Vue Storefront general data abstraction.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"/vue-storefront/cart-sync.png",alt:"This is how the cart sync works"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("As you can see the synchronization works like a sequence of the network calls to the "),e("code",[this._v("vue-storefront-api")]),this._v(":")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ol",[s("li",[t._v("The "),s("code",[t._v("pull")]),t._v(" method is executed to get the current user's Magento cart")]),t._v(" "),s("li",[t._v("On the client side the logic is checking which elements are new on the client side, server side, removed")]),t._v(" "),s("li",[t._v("In our case one element doesn't exist on server side so we're calling an "),s("code",[t._v("update")]),t._v(" method to add it to the server cart")]),t._v(" "),s("li",[t._v("Then we call "),s("code",[t._v("totals")]),t._v(" to get the current row values and general totals for the cart.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"how-to-make-this-feature-work"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#how-to-make-this-feature-work","aria-hidden":"true"}},[this._v("#")]),this._v(" How to make this feature work?")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("p",[this._v("Use the oauth keys from the previous step to properly configure the "),e("code",[this._v("vue-storefront-api")]),this._v(" data layer (it should've been installed locally on your computer / server). To do so you need to modify the "),e("code",[this._v("conf/local.json")]),this._v(" and paste the authorization data to the "),e("code",[this._v("magento2.api")]),this._v(" section:")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{attrs:{class:"token property"}},[t._v('"magento2"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),s("span",{attrs:{class:"token property"}},[t._v('"url"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"http://magento2.demo-1.xyz.com"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),s("span",{attrs:{class:"token property"}},[t._v('"imgUrl"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"http://localhost:8080/media/catalog/product"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),s("span",{attrs:{class:"token property"}},[t._v('"magentoUserName"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('""')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),s("span",{attrs:{class:"token property"}},[t._v('"magentoUserPassword"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('""')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),s("span",{attrs:{class:"token property"}},[t._v('"httpUserName"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('""')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),s("span",{attrs:{class:"token property"}},[t._v('"httpUserPassword"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('""')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),s("span",{attrs:{class:"token property"}},[t._v('"api"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t"),s("span",{attrs:{class:"token property"}},[t._v('"url"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"http://demo-magento2.vuestorefront.io/rest"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\t"),s("span",{attrs:{class:"token property"}},[t._v('"consumerKey"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"byv3730rhoulpopcq64don8ukb8lf2gq"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\t"),s("span",{attrs:{class:"token property"}},[t._v('"consumerSecret"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"u9q4fcobv7vfx9td80oupa6uhexc27rb"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\t"),s("span",{attrs:{class:"token property"}},[t._v('"accessToken"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"040xx3qy7s0j28o3q0exrfop579cy20m"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\t"),s("span",{attrs:{class:"token property"}},[t._v('"accessTokenSecret"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"7qunl3p505rubmr7u1ijt7odyialnih9"')]),t._v("\n\t\t"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ol",{attrs:{start:"3"}},[s("li",[t._v("Then move to your "),s("code",[t._v("vue-storefront")]),t._v(" installation catalog and modify the "),s("code",[t._v("config/local.json")]),t._v(". You need to change the "),s("code",[t._v("cart")]),t._v(" section to switch the "),s("code",[t._v("synchronize")]),t._v(" and "),s("code",[t._v("synchronize_totals")]),t._v(" flags to true:")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[t._v("   "),s("span",{attrs:{class:"token property"}},[t._v('"cart"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{attrs:{class:"token property"}},[t._v('"synchronize"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token boolean"}},[t._v("false")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{attrs:{class:"token property"}},[t._v('"synchronize_totals"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token boolean"}},[t._v("false")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{attrs:{class:"token property"}},[t._v('"create_endpoint"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"http://localhost:8080/api/cart/create?token={{token}}"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{attrs:{class:"token property"}},[t._v('"updateitem_endpoint"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"http://localhost:8080/api/cart/update?token={{token}}&cartId={{cartId}}"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{attrs:{class:"token property"}},[t._v('"deleteitem_endpoint"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"http://localhost:8080/api/cart/delete?token={{token}}&cartId={{cartId}}"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{attrs:{class:"token property"}},[t._v('"pull_endpoint"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"http://localhost:8080/api/cart/pull?token={{token}}&cartId={{cartId}}"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{attrs:{class:"token property"}},[t._v('"totals_endpoint"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"http://localhost:8080/api/cart/totals?token={{token}}&cartId={{cartId}}"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{attrs:{class:"token property"}},[t._v('"paymentmethods_endpoint"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"http://localhost:8080/api/cart/payment-methods?token={{token}}&cartId={{cartId}}"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{attrs:{class:"token property"}},[t._v('"shippingmethods_endpoint"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"http://localhost:8080/api/cart/shipping-methods?token={{token}}&cartId={{cartId}}"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{attrs:{class:"token property"}},[t._v('"shippinginfo_endpoint"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"http://localhost:8080/api/cart/shipping-information?token={{token}}&cartId={{cartId}}"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{attrs:{class:"token property"}},[t._v('"collecttotals_endpoint"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"http://localhost:8080/api/cart/collect-totals?token={{token}}&cartId={{cartId}}"')]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"prices-sync"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#prices-sync","aria-hidden":"true"}},[this._v("#")]),this._v(" Prices sync")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"order-sync"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#order-sync","aria-hidden":"true"}},[this._v("#")]),this._v(" Order sync")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"/vue-storefront/orders-collection.png",alt:"Orders are stored locally before they're send to the server"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("On the server side the "),e("code",[this._v("vue-storefront-api")]),this._v(" is the first line which the Order is crossing on its way back to Magento2. No matter if the shopping cart was synchronized (as described above) or not the order will be converted to Magento2 object.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[this._v("You must have the Magento2 API access configures in the "),e("code",[this._v("config/local.json")]),this._v(" file of "),e("code",[this._v("vue-storefront-api")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[this._v("After the configuration step You just run "),e("code",[this._v("npm run o2m")]),this._v(" inside your "),e("code",[this._v("vue-storefront-api")]),this._v(" directory.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"/vue-storefront/o2m-output.png",alt:"This is the output of o2m after successfull setup"}})])}],!1,null,null,null);n.options.__file="totals-sync.md";e.default=n.exports}}]);