(this.webpackJsonpbeersandbrewskies=this.webpackJsonpbeersandbrewskies||[]).push([[0],{145:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(22),c=a.n(o),s=a(10),l=a(43),i=a(42),d=a(13),u=a(56),m=a(15),p=a(30),h=a.n(p),g=function(){return r.a.createElement("nav",{className:"site-header sticky-top py-1",style:{backgroundColor:"#130f0a",opacity:"0.9"}},r.a.createElement("div",{className:"container d-flex flex-md-row justify-content-between",style:{maxWidth:"960px"}},r.a.createElement(m.a,{to:"/",className:"py-2","aria-label":"Product"},r.a.createElement("img",{src:h.a,alt:"logo",height:"50px",width:"50px"})),r.a.createElement("div",{className:"button py-2"},r.a.createElement(m.a,{to:"/contact",className:"btn btn-primary"},"Send Us A Message"))))},f=function(){return r.a.createElement("footer",{className:"footer mt-auto py-1",style:{backgroundColor:"#130f0a",opacity:"0.9"}},r.a.createElement("div",{className:"container d-flex flex-md-row justify-content-between",style:{maxWidth:"960px"}},r.a.createElement(m.a,{to:"/",className:"py-2","aria-label":"Product"},r.a.createElement("img",{src:h.a,alt:"logo",height:"50px",width:"50px"})),r.a.createElement("div",{className:"social-icons mt-2"},r.a.createElement("a",{href:"https://open.spotify.com/show/3l2lcEnwFkuByHpp19WAH6",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{className:"rounded mr-2 mt-2",height:"25px",width:"25px",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Spotify.png/600px-Spotify.png",alt:"..."})),r.a.createElement("a",{href:"https://podcasts.apple.com/us/podcast/books-brewskies/id1496562707",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{className:"rounded mr-2 mt-2",height:"25px",width:"25px",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Podcasts_%28iOS%29.svg/256px-Podcasts_%28iOS%29.svg.png",alt:"..."})),r.a.createElement("a",{href:"https://www.youtube.com/channel/UCke2FqK-gJ9swoQ5xoh_FHQ",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{className:"rounded mr-2 mt-2",height:"25px",width:"25px",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/YouTube_social_red_squircle_%282017%29.svg/1024px-YouTube_social_red_squircle_%282017%29.svg.png",alt:"..."})),r.a.createElement("a",{href:"https://anchor.fm/books--brewskies",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{className:"rounded mr-2 mt-2",height:"25px",width:"25px",src:"https://pbs.twimg.com/profile_images/966666153929125888/pwVzLi75_400x400.jpg",alt:"..."})))))},b=a(58),y=a.n(b),E=(a(84),Object(n.lazy)((function(){return Promise.all([a.e(3),a.e(5)]).then(a.bind(null,270))}))),v=Object(n.lazy)((function(){return a.e(4).then(a.bind(null,269))})),w=Object(n.lazy)((function(){return a.e(6).then(a.bind(null,265))})),O=Object(s.f)((function(e){e.location;return r.a.createElement(r.a.Fragment,null,r.a.createElement(g,null),r.a.createElement("img",{src:y.a,className:"img-fluid position-fixed vh-100 w-100",alt:"background",style:{top:"0px",zIndex:"-1",position:"fixed",left:"50%",transform:"translate(-50%, 0)",maxWidth:"1400px"}}),r.a.createElement("div",{className:"mb-5",style:{minHeight:"100vh"}},r.a.createElement(n.Suspense,{fallback:r.a.createElement("div",null,"Loading...")},r.a.createElement(s.c,null,r.a.createElement(s.a,{path:"/",exact:!0,component:v}),r.a.createElement(s.a,{path:"/contact",exact:!0,component:E}),r.a.createElement(s.a,{component:w})))),r.a.createElement(f,null))})),_=a(147),x=a(3),T=a(49),k={contacted:!1,contactInfo:{firstName:"First Name",lastName:"Last Name",email:"email",message:"Say Something Damn it!"}},j={products:[]},N={products:[],productToAdd:{},productToRemove:{},productToChange:{}},C={data:{productQuantity:0,installments:0,totalPrice:0,currencyId:"USD",currencyFormat:"$"}},A={type:""},D={items:[]},R=Object(d.c)({contact:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case T.a:return Object(x.a)({},e,{contacted:!0,contactInfo:t.payload});default:return e}},form:_.a,shelf:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_PRODUCTS":return Object(x.a)({},e,{products:t.payload});default:return e}},cart:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOAD_CART":return Object(x.a)({},e,{products:t.payload});case"ADD_PRODUCT":return Object(x.a)({},e,{productToAdd:Object.assign({},t.payload)});case"REMOVE_PRODUCT":return Object(x.a)({},e,{productToRemove:Object.assign({},t.payload)});case"CHANGE_PRODUCT_QUANTITY":return Object(x.a)({},e,{productToChange:Object.assign({},t.payload)});case"CLEAR_CART":return{products:[],productToAdd:{},productToRemove:{},productToChange:{}};default:return e}},total:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_CART":return Object(x.a)({},e,{data:t.payload});case"CLEAR_CART_TOTAL":return{data:{productQuantity:0,installments:0,totalPrice:0,currencyId:"USD",currencyFormat:"$"}};default:return e}},filters:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_FILTER":return Object(x.a)({},e,{items:t.payload});default:return e}},sort:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_SORT":return Object(x.a)({},e,{type:t.payload});default:return e}},podcasts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_PODCAST":return t.payload;default:return e}}}),S=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||d.d,P=Object(d.e)(R,S(Object(d.a)(u.a)));c.a.render(r.a.createElement(i.a,{store:P},r.a.createElement(s.b,{history:l.a},r.a.createElement(O,null))),document.querySelector("#root"))},30:function(e,t,a){e.exports=a.p+"static/media/logo.3d787c73.png"},43:function(e,t,a){"use strict";var n=a(5);t.a=Object(n.a)()},49:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var n="CONTACTED"},58:function(e,t,a){e.exports=a.p+"static/media/studio.d7580d39.jpg"},75:function(e,t,a){e.exports=a(145)},84:function(e,t,a){}},[[75,1,2]]]);
//# sourceMappingURL=main.1b872372.chunk.js.map