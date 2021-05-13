(this["webpackJsonpsudoku-app"]=this["webpackJsonpsudoku-app"]||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),o=n(10),s=n.n(o),c=(n(15),n(2)),l=n(3),u=n(5),i=n(4),d=(n(16),n(7)),p=n.n(d),h=n(8),v=n(0),j=function(e){Object(u.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(c.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).handleChange=function(t){var n=""===t.target.value?"":parseInt(t.target.value,10);e.props.onChange(Object(h.a)(Object(h.a)({},e.props.cell),{},{value:n}))},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props.cell;return Object(v.jsx)("input",{className:"grid",value:e.value||"",readOnly:e.prefilled,onChange:this.handleChange})}}]),n}(r.Component),f=function(e){Object(u.a)(n,e);var t=Object(i.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t=this.props.sudoku;return Object(v.jsx)("div",{children:t.rows.map((function(t){return Object(v.jsx)("div",{className:"row",children:t.cols.map((function(t){return Object(v.jsx)(j,{cell:t,onChange:e.props.onChange},t.col)}))},t.index)}))})}}]),n}(r.Component),b=function(e){Object(u.a)(n,e);var t=Object(i.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(v.jsxs)("div",{className:"row",children:[Object(v.jsx)("button",{onClick:this.props.onClick,className:"check",children:"Check sudoku"}),Object(v.jsx)("button",{onClick:this.props.onStart,className:"start",children:"Start again"})]})}}]),n}(r.Component),m="grid-correct",O="grid-wrong",g=function(){var e=p.a.makepuzzle(),t={rows:[]};t.solution=p.a.solvepuzzle(e).map((function(e){return null===e?null:e+1}));for(var n=0;n<9;n++){for(var r={cols:[],index:n},a=0;a<9;a++){var o=e[9*n+a],s={row:n,col:a,value:null===o?null:o+1,prefilled:null!==o};r.cols.push(s)}t.rows.push(r)}return console.log(t.solution),t},k=function(e){Object(u.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(c.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={sudokuArray:g(),entries:[],grid:[]},e.handleChange=function(t){var n=e.state.sudokuArray;n.rows[t.row].cols[t.col].value=t.value;var r=document.querySelectorAll("input.grid");e.setState({sudokuArray:n,grid:r});var a=n.rows.map((function(e){return e.cols.map((function(e){return e.value}))})).flat();e.setState({entries:a});for(var o=0;o<81;o++)""!==a[o]&&null!==a[o]||(r[o].classList.remove(m),r[o].classList.remove(O));for(var s=18;s<27;s++)r[s].style.borderBottom="2px solid black";for(var c=45;c<54;c++)r[c].style.borderBottom="2px solid black"},e.handleCheck=function(){for(var t=e.state,n=t.sudokuArray,r=t.entries,a=t.grid,o=0;o<81;o++)""===r[o]||null===r[o]?(a[o].classList.remove(m),a[o].classList.remove(O)):r[o]===n.solution[o]&&null!==r[o]?(a[o].classList.remove(O),a[o].classList.add(m)):r[o]!==n.solution[o]&&null!==r[o]&&(a[o].classList.remove(m),a[o].classList.add(O))},e.startNew=function(){for(var t=g(),n=t.rows.map((function(e){return e.cols.map((function(e){return e.value}))})).flat(),r=document.querySelectorAll("input.grid"),a=0;a<81;a++)""!==n[a]&&null!==n[a]||(r[a].classList.remove(m),r[a].classList.remove(O));e.setState({sudokuArray:t,entries:n,grid:r})},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(v.jsxs)("div",{className:"App",children:[Object(v.jsx)("h1",{children:"Sudoku"}),Object(v.jsx)(f,{sudoku:this.state.sudokuArray,onChange:this.handleChange}),Object(v.jsx)(b,{onClick:this.handleCheck,onStart:this.startNew})]})}}]),n}(r.Component),C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,24)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),o(e),s(e)}))};s.a.render(Object(v.jsx)(a.a.StrictMode,{children:Object(v.jsx)(k,{})}),document.getElementById("root")),C()}},[[23,1,2]]]);
//# sourceMappingURL=main.a0920a1d.chunk.js.map