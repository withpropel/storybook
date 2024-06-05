import{w as W}from"./index-CWVeDs_5.js";import{C as X}from"./base-checkbox-TSuVvJaG.js";import{n as Y}from"./app-BQSE6mr4.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iconify-rQT97Fj4.js";import"./vue.esm-BaK_9ySz.js";const Z={components:{Checkbox:X},model:{prop:"value",event:"input-change"},props:{selectId:String,selectClass:String,value:[String,Number],autofocus:Boolean,disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},hasError:Boolean,isSuccess:Boolean,label:{type:String,default:"Label Text"},required:Boolean,description:String,checkboxLabel:String,anchorText:String,anchorHref:String,showCounter:Boolean,prefixIcon:{type:String,default:"fluent:search-24-regular"},suffixIcon:{type:String,default:"fluent:small-chevron-down-24-regular"},prefixIconColor:{type:String,default:"#000"},suffixIconColor:{type:String,default:"#000"},prefixIconSize:{type:Number,default:20},suffixIconSize:{type:Number,default:20},placeholder:{type:String,default:"Select an option"}},data(){return{default:(" "+this.value).slice(1),selectedValue:this.value,focusState:"blur",checkboxChecked:!1}},computed:{isReadOnly(){return!!this.readonly},isDisabled(){return!!this.disabled},counterClass(){return this.hasError?"counter-error":this.isSuccess?"counter-success":this.focusState==="focus"?"counter-focus":""}},watch:{value(a){this.selectedValue=a},selectedValue(a){this.isDisabled||this.isReadOnly||this.$emit("input-change",a)}},beforeDestroy(){this.selectedValue=this.default},mounted(){W(1500).then(()=>{this.autofocus&&this.focus()})},methods:{focus(){var a,e;(e=(a=this.$refs)==null?void 0:a.selectField)!=null&&e.focus&&this.$refs.selectField.focus()},handleInput(a){this.$emit("input",a),this.$emit("input-change",a.target.value)},onFocus(a){this.focusState="focus",this.$emit("focus",a)},onBlur(a){this.focusState="blur",this.$emit("blur",a)},handleKeyUp(a){this.$emit("keyup",a)},onClick(a){this.$emit("click",a),this.focus()}}};var ee=function(){var e=this,n=e._self._c;return n("div",{class:["base-select-wrapper",{"has-error":e.hasError,"is-success":e.isSuccess}]},[e.label?n("label",{staticClass:"base-select-label",attrs:{for:e.selectId}},[e._v(" "+e._s(e.label)),e.required?n("span",{staticClass:"required-asterisk"},[e._v("*")]):e._e()]):e._e(),e.description?n("div",{staticClass:"base-select-description"},[e._v(" "+e._s(e.description)+" ")]):e._e(),n("div",{class:["base-select-container",e.hasError?"is-invalid-select":"",e.isSuccess?"is-success":"",e.disabled?"is-disabled":""]},[e.prefixIcon?n("Icon",{class:["base-select__prefix base-select__prefix--icon"],attrs:{icon:e.prefixIcon,width:e.prefixIconSize,height:e.prefixIconSize,color:e.prefixIconColor}}):e._e(),n("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedValue,expression:"selectedValue"}],ref:"selectField",class:["form-control",e.selectClass,e.hasError?"is-invalid-select":"",e.isSuccess?"is-success":"",e.focusState==="focus"?"base-select--focus":""],attrs:{id:e.selectId,disabled:e.disabled,readonly:e.readonly},on:{input:e.handleInput,change:[function(o){var h=Array.prototype.filter.call(o.target.options,function(r){return r.selected}).map(function(r){var Q="_value"in r?r._value:r.value;return Q});e.selectedValue=o.target.multiple?h:h[0]},o=>e.$emit("change",o)],focus:e.onFocus,blur:e.onBlur,keydown:o=>e.$emit("keydown",o),keyup:e.handleKeyUp}},[n("option",{attrs:{value:"",disabled:""}},[e._v(e._s(e.placeholder))]),e._t("default")],2),e.suffixIcon?n("Icon",{class:["base-select__suffix base-select__suffix--icon"],attrs:{icon:e.suffixIcon,width:e.suffixIconSize,height:e.suffixIconSize,color:e.suffixIconColor}}):e._e()],1),e.showCounter?n("div",{class:["base-select-counter counter-input-group",e.counterClass]},[e._v(" "+e._s(e.selectedValue.length)+" ")]):e._e(),n("div",{staticClass:"base-select-footer"},[e.checkboxLabel?n("Checkbox",{model:{value:e.checkboxChecked,callback:function(o){e.checkboxChecked=o},expression:"checkboxChecked"}},[n("span",{staticClass:"chekbox-label-span"},[e._v(e._s(e.checkboxLabel))])]):e._e(),e.anchorText?n("a",{staticClass:"base-select-anchor",attrs:{href:e.anchorHref}},[e._v(e._s(e.anchorText))]):e._e()],1)])},ae=[],J=Y(Z,ee,ae,!1,null,null);const M=J.exports;J.exports.__docgenInfo={exportName:"default",displayName:"base-select",description:"",tags:{},props:[{name:"selectId",type:{name:"string"}},{name:"selectClass",type:{name:"string"}},{name:"v-model",type:{name:"string|number"}},{name:"autofocus",type:{name:"boolean"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"readonly",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"hasError",type:{name:"boolean"}},{name:"isSuccess",type:{name:"boolean"}},{name:"label",type:{name:"string"},defaultValue:{func:!1,value:'"Label Text"'}},{name:"required",type:{name:"boolean"}},{name:"description",type:{name:"string"}},{name:"checkboxLabel",type:{name:"string"}},{name:"anchorText",type:{name:"string"}},{name:"anchorHref",type:{name:"string"}},{name:"showCounter",type:{name:"boolean"}},{name:"prefixIcon",type:{name:"string"},defaultValue:{func:!1,value:'"fluent:search-24-regular"'}},{name:"suffixIcon",type:{name:"string"},defaultValue:{func:!1,value:'"fluent:small-chevron-down-24-regular"'}},{name:"prefixIconColor",type:{name:"string"},defaultValue:{func:!1,value:'"#000"'}},{name:"suffixIconColor",type:{name:"string"},defaultValue:{func:!1,value:'"#000"'}},{name:"prefixIconSize",type:{name:"number"},defaultValue:{func:!1,value:"20"}},{name:"suffixIconSize",type:{name:"number"},defaultValue:{func:!1,value:"20"}},{name:"placeholder",type:{name:"string"},defaultValue:{func:!1,value:'"Select an option"'}}],events:[{name:"change"},{name:"keydown"},{name:"input-change",type:{names:["undefined"]}},{name:"input",type:{names:["undefined"]}},{name:"focus",type:{names:["undefined"]}},{name:"blur",type:{names:["undefined"]}},{name:"keyup",type:{names:["undefined"]}},{name:"click",type:{names:["undefined"]}}],slots:[{name:"default"}],sourceFiles:["/Users/agoiabel/code/withpropel/resources/js/components/reusables/input-fields/base-select.vue"]};const ce={title:"Forms/BaseSelect",tags:["autodocs"],component:M,argTypes:{disabled:{control:"boolean"},hasError:{control:"boolean"},selectId:{control:"text"},selectClass:{control:"text"},readonly:{control:"boolean"},autofocus:{control:"boolean"},value:{control:"text"},label:{control:"text"},description:{control:"text"},required:{control:"boolean"},checkboxLabel:{control:"text"},anchorText:{control:"text"},anchorHref:{control:"text"},showCounter:{control:"boolean"},prefixIcon:{control:"text"},suffixIcon:{control:"text"},prefixIconColor:{control:"color"},suffixIconColor:{control:"color"},placeholder:{control:"text"}}},t=a=>({components:{BaseSelect:M},setup(){return{args:a}},template:'<BaseSelect v-bind="args"><option value="Typing">Typing</option><option value="Placeholder">Placeholder</option></BaseSelect>'}),s=t.bind({});s.args={value:"",label:"Label",description:"Inline text",placeholder:"Select an option",required:!0,checkboxLabel:"Helper text 1",anchorText:"Helper text 2",prefixIcon:"fluent:search-24-regular",prefixIconColor:"#788787",suffixIcon:"fluent:chevron-down-24-regular",suffixIconColor:"#788787"};const l=t.bind({});l.args={...s.args,value:"",disabled:!0};const c=t.bind({});c.args={...s.args,value:"",disabled:!1,autofocus:!0};const i=t.bind({});i.args={...s.args,value:"",disabled:!1};const u=t.bind({});u.args={...s.args,value:"Typing",disabled:!1,autofocus:!0};const p=t.bind({});p.args={...s.args,value:"Placeholder",disabled:!1};const d=t.bind({});d.args={...s.args,value:"Placeholder",isSuccess:!0,suffixIconColor:"#0AA749"};const f=t.bind({});f.args={...s.args,value:"Placeholder",hasError:!0};const m=t.bind({});m.args={...s.args,value:"Placeholder",readonly:!0};const g=t.bind({});g.args={...s.args,value:"",autofocus:!0};var b,v,y;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`args => ({
  components: {
    BaseSelect
  },
  setup() {
    return {
      args
    };
  },
  template: '<BaseSelect v-bind="args"><option value="Typing">Typing</option><option value="Placeholder">Placeholder</option></BaseSelect>'
})`,...(y=(v=s.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var S,x,_;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`args => ({
  components: {
    BaseSelect
  },
  setup() {
    return {
      args
    };
  },
  template: '<BaseSelect v-bind="args"><option value="Typing">Typing</option><option value="Placeholder">Placeholder</option></BaseSelect>'
})`,...(_=(x=l.parameters)==null?void 0:x.docs)==null?void 0:_.source}}};var B,I,C;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`args => ({
  components: {
    BaseSelect
  },
  setup() {
    return {
      args
    };
  },
  template: '<BaseSelect v-bind="args"><option value="Typing">Typing</option><option value="Placeholder">Placeholder</option></BaseSelect>'
})`,...(C=(I=c.parameters)==null?void 0:I.docs)==null?void 0:C.source}}};var T,k,P;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`args => ({
  components: {
    BaseSelect
  },
  setup() {
    return {
      args
    };
  },
  template: '<BaseSelect v-bind="args"><option value="Typing">Typing</option><option value="Placeholder">Placeholder</option></BaseSelect>'
})`,...(P=(k=i.parameters)==null?void 0:k.docs)==null?void 0:P.source}}};var V,w,$;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`args => ({
  components: {
    BaseSelect
  },
  setup() {
    return {
      args
    };
  },
  template: '<BaseSelect v-bind="args"><option value="Typing">Typing</option><option value="Placeholder">Placeholder</option></BaseSelect>'
})`,...($=(w=u.parameters)==null?void 0:w.docs)==null?void 0:$.source}}};var E,F,z;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`args => ({
  components: {
    BaseSelect
  },
  setup() {
    return {
      args
    };
  },
  template: '<BaseSelect v-bind="args"><option value="Typing">Typing</option><option value="Placeholder">Placeholder</option></BaseSelect>'
})`,...(z=(F=p.parameters)==null?void 0:F.docs)==null?void 0:z.source}}};var L,A,D;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`args => ({
  components: {
    BaseSelect
  },
  setup() {
    return {
      args
    };
  },
  template: '<BaseSelect v-bind="args"><option value="Typing">Typing</option><option value="Placeholder">Placeholder</option></BaseSelect>'
})`,...(D=(A=d.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};var q,H,N;f.parameters={...f.parameters,docs:{...(q=f.parameters)==null?void 0:q.docs,source:{originalSource:`args => ({
  components: {
    BaseSelect
  },
  setup() {
    return {
      args
    };
  },
  template: '<BaseSelect v-bind="args"><option value="Typing">Typing</option><option value="Placeholder">Placeholder</option></BaseSelect>'
})`,...(N=(H=f.parameters)==null?void 0:H.docs)==null?void 0:N.source}}};var R,O,U;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`args => ({
  components: {
    BaseSelect
  },
  setup() {
    return {
      args
    };
  },
  template: '<BaseSelect v-bind="args"><option value="Typing">Typing</option><option value="Placeholder">Placeholder</option></BaseSelect>'
})`,...(U=(O=m.parameters)==null?void 0:O.docs)==null?void 0:U.source}}};var K,j,G;g.parameters={...g.parameters,docs:{...(K=g.parameters)==null?void 0:K.docs,source:{originalSource:`args => ({
  components: {
    BaseSelect
  },
  setup() {
    return {
      args
    };
  },
  template: '<BaseSelect v-bind="args"><option value="Typing">Typing</option><option value="Placeholder">Placeholder</option></BaseSelect>'
})`,...(G=(j=g.parameters)==null?void 0:j.docs)==null?void 0:G.source}}};const ie=["Default","Disabled","Pressed","Active","Typing","Filled","Success","Error","Readonly","Autofocus"];export{i as Active,g as Autofocus,s as Default,l as Disabled,f as Error,p as Filled,c as Pressed,m as Readonly,d as Success,u as Typing,ie as __namedExportsOrder,ce as default};
