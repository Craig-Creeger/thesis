(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{134:function(e,t,a){"use strict";var n=a(1),i=a(2),l=a(4),o=a(3),r=a(5),c=a(0),s=a.n(c),u=function(e){function t(){var e,a;Object(n.a)(this,t);for(var i=arguments.length,r=new Array(i),c=0;c<i;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(r)))).handleClick=function(){a.props.navRequested(a.props.position)},a}return Object(r.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.position,a=e.active,n=e.color,i="";return a&&(i+="active "),1===t&&(i+="pillFirst "),3===t&&(i+="pillLast "),s.a.createElement("button",{className:i||null,onClick:this.handleClick,style:{backgroundColor:n}},t)}}]),t}(s.a.Component),p=(a(135),function(e){function t(){return Object(n.a)(this,t),Object(l.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(r.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.active,a=e.navRequested,n=e.color;return s.a.createElement("div",{className:"pillNavigation"},s.a.createElement(u,{position:1,active:1===t,navRequested:a,color:n}),s.a.createElement(u,{position:2,active:2===t,navRequested:a,color:n}),s.a.createElement(u,{position:3,active:3===t,navRequested:a,color:n}))}}]),t}(s.a.Component));t.a=p},135:function(e,t,a){},78:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(134);t.default=function(e){var t=e.overview;return i.a.createElement(i.a.Fragment,null,i.a.createElement(t,{id:e.id}),i.a.createElement("main",null,i.a.createElement(l.a,{active:e.pageNbr,navRequested:e.getNextPage,color:e.color}),i.a.createElement("h1",null,"Design a product that boils water"),i.a.createElement("h2",null,"Consideration 1"),i.a.createElement("p",null,"What form lends itself to carrying large amounts of hot liquid?"),i.a.createElement("h2",null,"Consideration 2"),i.a.createElement("p",null,"What material lends itself to boiling liquid?"),i.a.createElement("h2",null,"Consideration 3"),i.a.createElement("p",null,"What size is reasonable for someone lifting hot liquid?")))}}}]);
//# sourceMappingURL=63.10b33534.chunk.js.map