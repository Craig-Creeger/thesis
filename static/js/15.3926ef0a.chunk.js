(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{134:function(e,t,a){"use strict";var n=a(1),o=a(2),l=a(4),i=a(3),r=a(5),c=a(0),s=a.n(c),u=function(e){function t(){var e,a;Object(n.a)(this,t);for(var o=arguments.length,r=new Array(o),c=0;c<o;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).handleClick=function(){a.props.navRequested(a.props.position)},a}return Object(r.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.position,a=e.active,n=e.color,o="";return a&&(o+="active "),1===t&&(o+="pillFirst "),3===t&&(o+="pillLast "),s.a.createElement("button",{className:o||null,onClick:this.handleClick,style:{backgroundColor:n}},t)}}]),t}(s.a.Component),p=(a(135),function(e){function t(){return Object(n.a)(this,t),Object(l.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(r.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.active,a=e.navRequested,n=e.color;return s.a.createElement("div",{className:"pillNavigation"},s.a.createElement(u,{position:1,active:1===t,navRequested:a,color:n}),s.a.createElement(u,{position:2,active:2===t,navRequested:a,color:n}),s.a.createElement(u,{position:3,active:3===t,navRequested:a,color:n}))}}]),t}(s.a.Component));t.a=p},135:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(134);t.default=function(e){var t=e.overview;return o.a.createElement(o.a.Fragment,null,o.a.createElement(t,{id:e.id}),o.a.createElement("main",null,o.a.createElement(l.a,{active:e.pageNbr,navRequested:e.getNextPage,color:e.color}),o.a.createElement("h1",null,"Design an online platform that plays music"),o.a.createElement("h2",null,"Consideration 1"),o.a.createElement("p",null,"How to easily acclimate someone new to this platform. "),o.a.createElement("h2",null,"Consideration 2"),o.a.createElement("p",null,"How to allow someone to discover new music."),o.a.createElement("h2",null,"Consideration 3"),o.a.createElement("p",null,"User wants to listen to music without using up cellular data.")))}}}]);
//# sourceMappingURL=15.3926ef0a.chunk.js.map