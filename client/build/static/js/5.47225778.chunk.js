(this.webpackJsonpbeersandbrewskies=this.webpackJsonpbeersandbrewskies||[]).push([[5],{262:function(e,t,n){},263:function(e,t,n){},268:function(e,t,n){"use strict";n.r(t);var a=n(20),r=n(21),c=n(23),s=n(22),l=n(0),o=n.n(l),i=n(24),u=n(29),h=n.n(u),d=n(49),p=n(48),f=n.n(p),m=n(76),b={lowestprice:function(e,t){return e.price<t.price?-1:e.price>t.price?1:0},highestprice:function(e,t){return e.price>t.price?-1:e.price<t.price?1:0}},v=n(67),g=n(10),k=n(27),E=Object(i.b)(null,{addProduct:k.a})((function(e){var t=e.product,n=e.addProduct;t.quantity=1;var a=Object(g.a)(t.price,t.currencyId);return o.a.createElement("div",{className:"shelf-item",onClick:function(){return n(t)},"data-sku":t.sku},o.a.createElement(v.a,{classes:"shelf-item__thumb",src:"https://vangogh.teespring.com/v3/image/PrximIkrAEA63AH8HjyFOy8SBGk/480/560.jpg",alt:t.title}),o.a.createElement("p",{className:"shelf-item__title"},t.title),o.a.createElement("div",{className:"shelf-item__price"},o.a.createElement("div",{className:"val"},o.a.createElement("small",null,t.currencyFormat),o.a.createElement("b",null,a.substr(0,a.length-3)),o.a.createElement("span",null,a.substr(a.length-3,3)))),o.a.createElement("div",{className:"shelf-item__buy-btn"},"Add to cart"))})),y=function(e){return e.products.map((function(e){return o.a.createElement(E,{product:e,key:e.id})}))},C=n(77),O=function(e){var t=e.options,n=e.classes,a=e.handleOnChange;return o.a.createElement("select",{onChange:function(e){return a(e.target.value)},className:n},function(e){return e.map((function(e){return o.a.createElement("option",{value:e.value,key:e.value},e.label)}))}(t))},j=[{value:"",label:"Select"},{value:"lowestprice",label:"Lowest to highest"},{value:"highestprice",label:"Highest to lowest"}],x=Object(i.b)((function(e){return{sort:e.sort.type}}),{updateSort:function(e){return{type:C.a,payload:e}}})((function(e){var t=e.updateSort;e.sort;return o.a.createElement("div",{className:"sort"},"Order by",o.a.createElement(O,{options:j,handleOnChange:function(e){return t(e)}}))})),N=function(e){return o.a.createElement("div",{className:"shelf-container-header"},o.a.createElement("small",{className:"products-found"},o.a.createElement("span",null,e.productsLength," Product(s) found.")),o.a.createElement(x,null))},w=n(36),_=(n(262),function(e){Object(c.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(a.a)(this,n);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={isLoading:!1,filters:e.props.filters,sort:e.props.sort},e.handleFetchProducts=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e.state.filters,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.state.sort;e.setState({isLoading:!0}),e.props.fetchProducts(t,n,(function(){e.setState({isLoading:!1})}))},e}return Object(r.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchProducts()}},{key:"componentDidUpdate",value:function(e,t){var n=this.state,a=n.filters,r=n.sort,c=t.filters,s=t.sort;a.length!==c.length&&this.handleFetchProducts(a,void 0),r!==s&&this.handleFetchProducts(void 0,r)}},{key:"render",value:function(){var e=this.props.products,t=this.state.isLoading;return o.a.createElement(o.a.Fragment,null,t&&o.a.createElement(w.a,null),o.a.createElement("div",{className:"shelf-container"},o.a.createElement(N,{productsLength:e.length}),o.a.createElement(y,{products:e})))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.filters.length!==t.filters.length?{filters:e.filters}:e.sort!==t.sort?{sort:e.sort}:null}}]),n}(o.a.Component)),S=Object(i.b)((function(e){return{products:e.shelf.products,filters:e.filters.items,sort:e.sort.type}}),{fetchProducts:function(e,t,n){return function(){var a=Object(d.a)(h.a.mark((function a(r){var c,s;return h.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,f.a.get("/products");case 3:c=a.sent,a.next=9;break;case 6:return a.prev=6,a.t0=a.catch(0),a.abrupt("return",console.log(a.t0.response));case 9:s=c.data,e&&e.length>0&&(s=s.filter((function(t){return e.find((function(e){return t.availableSizes.find((function(t){return t===e}))}))}))),t&&(s=s.sort(b[t])),n&&n(),r({type:m.a,payload:s});case 14:case"end":return a.stop()}}),a,null,[[0,6]])})));return function(e){return a.apply(this,arguments)}}()}})(_),L=n(78),P=function(e){Object(c.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(a.a)(this,n);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={isChecked:!1},e.toggleCheckboxChange=function(){var t=e.props,n=t.handleCheckboxChange,a=t.label;e.setState((function(e){return{isChecked:!e.isChecked}})),n(a)},e}return Object(r.a)(n,[{key:"render",value:function(){var e=this.props,t=e.label,n=e.classes,a=this.state.isChecked;return o.a.createElement("div",{className:n},o.a.createElement("label",null,o.a.createElement("input",{type:"checkbox",value:t,checked:a,onChange:this.toggleCheckboxChange}),o.a.createElement("span",{className:"checkmark"},t)))}}]),n}(o.a.Component),F=(n(263),["XS","S","M","ML","L","XL","XXL"]),A=function(e){Object(c.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(a.a)(this,n);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).toggleCheckbox=function(t){e.selectedCheckboxes.has(t)?e.selectedCheckboxes.delete(t):e.selectedCheckboxes.add(t),e.props.updateFilters(Array.from(e.selectedCheckboxes))},e.createCheckbox=function(t){return o.a.createElement(P,{classes:"filters-available-size",label:t,handleCheckboxChange:e.toggleCheckbox,key:t})},e.createCheckboxes=function(){return F.map(e.createCheckbox)},e}return Object(r.a)(n,[{key:"componentDidMount",value:function(){this.selectedCheckboxes=new Set}},{key:"render",value:function(){return o.a.createElement("div",{className:"store__filters filters"},o.a.createElement("h4",{className:"title"},"Sizes:"),this.createCheckboxes())}}]),n}(o.a.Component),D=Object(i.b)(null,{updateFilters:function(e){return{type:L.a,payload:e}}})(A),M=function(e){Object(c.a)(n,e);var t=Object(s.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"componentDidMount",value:function(){window.scrollTo(0,0)}},{key:"render",value:function(){return o.a.createElement("div",{className:"store"},o.a.createElement(D,null),o.a.createElement("div",{className:"store__header"},o.a.createElement("div",{className:"store__text"},o.a.createElement("h1",null,"Store"))),o.a.createElement("div",{className:"store__shelf"},o.a.createElement(S,null)))}}]),n}(o.a.Component);t.default=M}}]);
//# sourceMappingURL=5.47225778.chunk.js.map