(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{134:function(e,t,a){"use strict";var n=a(1),l=a(2),r=a(4),i=a(3),o=a(5),c=a(0),s=a.n(c),u=function(e){function t(){var e,a;Object(n.a)(this,t);for(var l=arguments.length,o=new Array(l),c=0;c<l;c++)o[c]=arguments[c];return(a=Object(r.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(o)))).handleClick=function(){a.props.navRequested(a.props.position)},a}return Object(o.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.position,a=e.active,n=e.color,l="";return a&&(l+="active "),1===t&&(l+="pillFirst "),3===t&&(l+="pillLast "),s.a.createElement("button",{className:l||null,onClick:this.handleClick,style:{backgroundColor:n}},t)}}]),t}(s.a.Component),p=(a(135),function(e){function t(){return Object(n.a)(this,t),Object(r.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.active,a=e.navRequested,n=e.color;return s.a.createElement("div",{className:"pillNavigation"},s.a.createElement(u,{position:1,active:1===t,navRequested:a,color:n}),s.a.createElement(u,{position:2,active:2===t,navRequested:a,color:n}),s.a.createElement(u,{position:3,active:3===t,navRequested:a,color:n}))}}]),t}(s.a.Component));t.a=p},135:function(e,t,a){},98:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(134);t.default=function(e){var t=e.overview;return l.a.createElement(l.a.Fragment,null,l.a.createElement(t,{id:e.id}),l.a.createElement("main",null,l.a.createElement(r.a,{active:e.pageNbr,navRequested:e.getNextPage,color:e.color}),l.a.createElement("h1",null,"Design a device that aids farming crops"),l.a.createElement("h2",null,"Consideration 1"),l.a.createElement("p",null,"Needs to dig and break ground"),l.a.createElement("h2",null,"Consideration 2"),l.a.createElement("p",null,"Plow and till soil"),l.a.createElement("h2",null,"Consideration 3"),l.a.createElement("p",null,"Plant seeds")))}}}]);
//# sourceMappingURL=83.080d3084.chunk.js.map