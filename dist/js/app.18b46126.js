(function(){"use strict";var t={2764:function(t,a,e){var o=e(6848),i=e(9143),l=e.n(i),n=function(){var t=this,a=t._self._c;return a("div",{staticClass:"main"},[a("div",{attrs:{id:"app"}},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"body-data"},[a("el-form",{attrs:{model:t.bodyData}},[a("el-form-item",[a("label",{staticStyle:{"font-size":"16px"}},[t._v("TDEE:")]),a("el-input",{attrs:{placeholder:"TDEE",type:"number"},model:{value:t.bodyData.tdee,callback:function(a){t.$set(t.bodyData,"tdee",a)},expression:"bodyData.tdee"}})],1),a("el-form-item",[a("label",{staticStyle:{"font-size":"16px"}},[t._v("今日所需的蛋白質量:")]),a("el-input",{attrs:{placeholder:"需要的蛋白質量",type:"number"},model:{value:t.bodyData.protein,callback:function(a){t.$set(t.bodyData,"protein",a)},expression:"bodyData.protein"}})],1)],1)],1),a("div",{staticClass:"add-meal"},[a("el-row",[a("el-button",{staticClass:"meal-button",attrs:{type:"primary"},on:{click:function(a){return t.addFood(1)}}},[t._v("+ 早餐")]),a("el-button",{staticClass:"meal-button",attrs:{type:"primary"},on:{click:function(a){return t.addFood(2)}}},[t._v("+ 午餐")]),a("el-button",{staticClass:"meal-button",attrs:{type:"primary"},on:{click:function(a){return t.addFood(3)}}},[t._v("+ 晚餐")])],1)],1),a("el-dialog",{attrs:{title:t.dialogTitle,visible:t.dialogVisible,"before-close":t.handleClose,"show-close":!1,"close-on-click-modal":!1,"close-on-press-escape":!1},on:{"update:visible":function(a){t.dialogVisible=a}}},[a("el-form",{ref:"dynamicValidateForm",staticClass:"demo-dynamic",attrs:{model:t.dynamicValidateForm,"label-width":"10px","hide-required-asterisk":!0}},[t._l(t.dynamicValidateForm[t.mealType],(function(e,o){return a("el-form-item",{key:e.key,attrs:{prop:`${t.mealType}[${o}].food`,rules:{required:!0,message:"請輸入食物",trigger:"blur"}}},[a("div",{staticClass:"food-item"},[a("label",[t._v("食物：")]),a("el-input",{model:{value:e.food,callback:function(a){t.$set(e,"food",a)},expression:"domain.food"}}),a("label",[t._v("熱量：")]),a("el-input",{attrs:{type:"number"},model:{value:e.cal,callback:function(a){t.$set(e,"cal",a)},expression:"domain.cal"}}),a("label",[t._v("蛋白質：")]),a("el-input",{attrs:{type:"number"},model:{value:e.protein,callback:function(a){t.$set(e,"protein",a)},expression:"domain.protein"}}),a("el-button",{attrs:{type:"danger"},on:{click:function(a){return a.preventDefault(),t.removeDomain(e)}}},[t._v("删除")])],1)])})),a("el-form-item",{staticStyle:{"text-align":"right",display:"flex","justify-content":"space-between"}},[a("el-button",{attrs:{type:"primary"},on:{click:t.addDomain}},[t._v("新增食物")]),a("el-button",{attrs:{type:"success"},on:{click:function(a){return t.submitForm("dynamicValidateForm")}}},[t._v("確認")])],1)],2)],1),a("div",{staticClass:"table"},[a("div",{staticClass:"breakfast"},[a("h3",[t._v("早餐：")]),t._l(t.dynamicValidateForm.breakfast,(function(e,o){return a("div",{key:e.key},[a("div",{staticClass:"meal"},[a("div",{staticClass:"food-info"},[a("span",[t._v(t._s(o+1+".")+t._s(e.food))])]),a("div",{staticClass:"meal-detail"},[a("span",[t._v("熱量："+t._s(e.cal?e.cal+" kcal":"未填寫"))]),a("span",[t._v("蛋白質："+t._s(e.protein?e.protein+" g":"未填寫"))])])])])})),a("div",{directives:[{name:"show",rawName:"v-show",value:""!=t.totalCal.breakfast||""!=t.totalProtein.breakfast,expression:"totalCal.breakfast != '' || totalProtein.breakfast != ''"}],staticClass:"meal-detail-total"},[a("span",[t._v("總共：")]),a("span",[t._v(" 熱量"+t._s(t.totalCal.breakfast?t.totalCal.breakfast:"0")+" kcal ")]),a("span",[t._v("/")]),a("span",[t._v("蛋白質"+t._s(t.totalProtein.breakfast?t.totalProtein.breakfast:"0")+" g ")])]),a("hr")],2),a("div",{staticClass:"lunch"},[a("h3",[t._v("午餐：")]),t._l(t.dynamicValidateForm.lunch,(function(e,o){return a("div",{key:e.key},[a("div",{staticClass:"meal"},[a("div",{staticClass:"food-info"},[a("span",[t._v(t._s(o+1+".")+t._s(e.food))])]),a("div",{staticClass:"meal-detail"},[a("span",[t._v("熱量："+t._s(e.cal?e.cal+" kcal":"未填寫"))]),a("span",[t._v("蛋白質："+t._s(e.protein?e.protein+" g":"未填寫"))])])])])})),a("div",{directives:[{name:"show",rawName:"v-show",value:""!=t.totalCal.lunch||""!=t.totalProtein.lunch,expression:"totalCal.lunch != '' || totalProtein.lunch != ''"}],staticClass:"meal-detail-total"},[a("span",[t._v("總共：")]),a("span",[t._v(" 熱量"+t._s(t.totalCal.lunch?t.totalCal.lunch:"0")+" kcal ")]),a("span",[t._v("/")]),a("span",[t._v(" 蛋白質"+t._s(t.totalProtein.lunch?t.totalProtein.lunch:"0")+" g")])]),a("hr")],2),a("div",{staticClass:"dinner"},[a("h3",[t._v("晚餐：")]),t._l(t.dynamicValidateForm.dinner,(function(e,o){return a("div",{key:e.key},[a("div",{staticClass:"meal"},[a("div",{staticClass:"food-info"},[a("span",[t._v(t._s(o+1+".")+t._s(e.food))])]),a("div",{staticClass:"meal-detail"},[a("span",[t._v("熱量："+t._s(e.cal?e.cal+" kcal":"未填寫"))]),a("span",[t._v("蛋白質："+t._s(e.protein?e.protein+" g":"未填寫"))])])])])})),a("div",{directives:[{name:"show",rawName:"v-show",value:""!=t.totalCal.dinner||""!=t.totalProtein.dinner,expression:"totalCal.dinner != '' || totalProtein.dinner != ''"}],staticClass:"meal-detail-total"},[a("span",[t._v("總共：")]),a("span",[t._v(" 熱量"+t._s(t.totalCal.dinner?t.totalCal.dinner:"0")+" kcal ")]),a("span",[t._v("/")]),a("span",[t._v(" 蛋白質"+t._s(t.totalProtein.dinner?t.totalProtein.dinner:"0")+" g ")])]),a("hr")],2),a("div",{directives:[{name:"show",rawName:"v-show",value:""!=t.bodyData.tdee||""!=t.bodyData.protein,expression:"bodyData.tdee != '' || bodyData.protein != ''"}]},[a("h3",[t._v("結算：")]),a("div",{staticClass:"todaySum"},[a("div",{staticClass:"l-item"},[a("span",{staticStyle:{color:"black"}},[t._v(" "+t._s("今日攝取總熱量："+t.todayCalSum+" kcal")+" ")]),a("br"),a("span",{staticStyle:{color:"black"}},[t._v(" "+t._s("今日攝取總蛋白："+t.todayProteinSum+" g")+" ")])]),a("div",{staticClass:"r-item"},[a("span",{style:{color:t.bodyData.tdee-t.todayCalSum>=0?"green":"red"}},[t._v(" "+t._s(t.bodyData.tdee-t.todayCalSum>=0?"熱量赤字：":"熱量盈餘：")+" "+t._s(Math.abs(t.bodyData.tdee-t.todayCalSum))+" kcal ")]),a("br"),a("span",{style:{color:t.bodyData.protein-t.todayProteinSum>=0?"red":"green"}},[t._v(" "+t._s(t.bodyData.protein-t.todayProteinSum>=0?"蛋白質不足：":"蛋白質盈餘：")+" "+t._s(Math.abs(t.bodyData.protein-t.todayProteinSum))+" g ")])])])]),a("div",{staticClass:"reset"},[a("el-button",{staticStyle:{width:"100%","margin-top":"20px"},attrs:{type:"danger"},on:{click:t.clearAll}},[t._v(" 清除全部 ")]),a("div",{staticStyle:{"font-size":"12px","margin-top":"10px"}},[t._v(" *雖然影響增肌跟減脂的因素很多，但是熱量及蛋白質相對好計算，而本網站的功能是讓您可以快速的計算當天總攝取。 ")])],1)])],1)],1)])},r=[],s=(e(4114),{data(){return{foodDialogVisible:!1,dialogVisible:!1,mealType:"",todayCalSum:"",todayProteinSum:"",bodyData:{tdee:"",protein:""},totalCal:{breakfast:"",lunch:"",dinner:""},totalProtein:{breakfast:"",lunch:"",dinner:""},dynamicValidateForm:{breakfast:[],lunch:[],dinner:[]}}},mounted(){this.getItems(),this.totalToday()},watch:{bodyData:{handler(t,a){localStorage.setItem("bodyData_Tdee",t.tdee),localStorage.setItem("bodyData_Protein",t.protein)},deep:!0}},methods:{handleScrollToBottom(){const t=document.querySelector(".el-dialog__wrapper");t&&(t.scrollTop=t.scrollHeight)},addFood(t){this.dialogVisible=!0,1===t?this.mealType="breakfast":2===t?this.mealType="lunch":3===t&&(this.mealType="dinner")},submitForm(t){this.$refs[t].validate((t=>{t?(this.calculation(),this.totalToday(),this.removeEmptyDomain(),this.persist(),this.dialogVisible=!1):(this.removeEmptyDomain(),this.dialogVisible=!1)}))},removeDomain(t){var a=this.dynamicValidateForm[this.mealType].indexOf(t);-1!==a&&this.dynamicValidateForm[this.mealType].splice(a,1)},addDomain(){this.dynamicValidateForm[this.mealType].push({food:"",cal:"",protein:"",key:Date.now()}),setTimeout((()=>{this.handleScrollToBottom()}),0)},removeEmptyDomain(){const t=this.dynamicValidateForm[this.mealType];for(let a=t.length-1;a>=0;a--)t[a].food.trim()||t.splice(a,1)},handleClose(){this.dialogVisible=!1},calculation(){this.totalCal.breakfast=this.dynamicValidateForm.breakfast.reduce(((t,a)=>t+(parseFloat(a.cal)||0)),0),this.totalCal.lunch=this.dynamicValidateForm.lunch.reduce(((t,a)=>t+(parseFloat(a.cal)||0)),0),this.totalCal.dinner=this.dynamicValidateForm.dinner.reduce(((t,a)=>t+(parseFloat(a.cal)||0)),0),this.totalProtein.breakfast=this.dynamicValidateForm.breakfast.reduce(((t,a)=>t+(parseFloat(a.protein)||0)),0),this.totalProtein.lunch=this.dynamicValidateForm.lunch.reduce(((t,a)=>t+(parseFloat(a.protein)||0)),0),this.totalProtein.dinner=this.dynamicValidateForm.dinner.reduce(((t,a)=>t+(parseFloat(a.protein)||0)),0)},totalToday(){this.todayCalSum=Object.values(this.totalCal).map((t=>parseFloat(t)||0)).reduce(((t,a)=>t+a),0),this.todayProteinSum=Object.values(this.totalProtein).map((t=>parseFloat(t)||0)).reduce(((t,a)=>t+a),0)},clearAll(){this.$confirm("確定清除所有資料？",{confirmButtonText:"確定",cancelButtonText:"取消",type:"warning"}).then((()=>{this.$message({type:"success"}),localStorage.clear(),location.reload()})).catch((()=>{this.$message({type:"info",message:"已取消"})}))},persist(){localStorage.setItem("bodyData_Tdee",JSON.stringify(this.bodyData.tdee)),localStorage.setItem("bodyData_Protein",JSON.stringify(this.bodyData.protein));const t=["breakfast","lunch","dinner"];t.forEach((t=>{localStorage.setItem(t,JSON.stringify(this.dynamicValidateForm[t])),localStorage.setItem(`totalCal_${t}`,JSON.stringify(this.totalCal[t])),localStorage.setItem(`totalProtein_${t}`,JSON.stringify(this.totalProtein[t]))}))},getItems(){localStorage.getItem("bodyData_Tdee")&&(this.bodyData.tdee=JSON.parse(localStorage.getItem("bodyData_Tdee"))),localStorage.getItem("bodyData_Protein")&&(this.bodyData.protein=JSON.parse(localStorage.getItem("bodyData_Protein")));const t=["breakfast","lunch","dinner"];t.forEach((t=>{localStorage.getItem(t)&&(this.dynamicValidateForm[t]=JSON.parse(localStorage.getItem(t))),localStorage.getItem(`totalCal_${t}`)&&(this.totalCal[t]=JSON.parse(localStorage.getItem(`totalCal_${t}`))),localStorage.getItem(`totalProtein_${t}`)&&(this.totalProtein[t]=JSON.parse(localStorage.getItem(`totalProtein_${t}`)))}))}},computed:{dialogTitle(){switch(this.mealType){case"breakfast":return"早餐";case"lunch":return"午餐";case"dinner":return"晚餐"}}}}),d=s,c=e(1656),u=(0,c.A)(d,n,r,!1,null,null,null),m=u.exports;o["default"].use(l()),new o["default"]({el:"#app",render:t=>t(m)})}},a={};function e(o){var i=a[o];if(void 0!==i)return i.exports;var l=a[o]={id:o,loaded:!1,exports:{}};return t[o].call(l.exports,l,l.exports,e),l.loaded=!0,l.exports}e.m=t,function(){e.amdO={}}(),function(){var t=[];e.O=function(a,o,i,l){if(!o){var n=1/0;for(c=0;c<t.length;c++){o=t[c][0],i=t[c][1],l=t[c][2];for(var r=!0,s=0;s<o.length;s++)(!1&l||n>=l)&&Object.keys(e.O).every((function(t){return e.O[t](o[s])}))?o.splice(s--,1):(r=!1,l<n&&(n=l));if(r){t.splice(c--,1);var d=i();void 0!==d&&(a=d)}}return a}l=l||0;for(var c=t.length;c>0&&t[c-1][2]>l;c--)t[c]=t[c-1];t[c]=[o,i,l]}}(),function(){e.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(a,{a:a}),a}}(),function(){e.d=function(t,a){for(var o in a)e.o(a,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:a[o]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)}}(),function(){e.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){e.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t}}(),function(){var t={524:0};e.O.j=function(a){return 0===t[a]};var a=function(a,o){var i,l,n=o[0],r=o[1],s=o[2],d=0;if(n.some((function(a){return 0!==t[a]}))){for(i in r)e.o(r,i)&&(e.m[i]=r[i]);if(s)var c=s(e)}for(a&&a(o);d<n.length;d++)l=n[d],e.o(t,l)&&t[l]&&t[l][0](),t[l]=0;return e.O(c)},o=self["webpackChunkfood_calculator"]=self["webpackChunkfood_calculator"]||[];o.forEach(a.bind(null,0)),o.push=a.bind(null,o.push.bind(o))}();var o=e.O(void 0,[504],(function(){return e(2764)}));o=e.O(o)})();
//# sourceMappingURL=app.18b46126.js.map