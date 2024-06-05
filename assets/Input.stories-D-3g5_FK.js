import{w as ke}from"./index-CWVeDs_5.js";import{C as Ve}from"./base-checkbox-TSuVvJaG.js";import{n as we}from"./app-BQSE6mr4.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iconify-rQT97Fj4.js";import"./vue.esm-BaK_9ySz.js";const ze={components:{Checkbox:Ve},model:{prop:"value",event:"input-change"},props:{wrapperClass:String,inputClass:String,inputId:String,prefix:String,prefixIcon:String,prefixIconSize:{type:String,default:"20px"},prefixIconColor:{type:String,default:"inherit"},prefixClass:String,value:[String,Number],suffix:String,suffixIcon:String,suffixIconSize:{type:String,default:"20px"},suffixIconColor:{type:String,default:"inherit"},suffixClass:String,autofocus:Boolean,lazy:Boolean,min:[Number,String],max:[Number,String],readonly:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},trim:Boolean,type:{type:String,default:"text"},hasError:Boolean,isSuccess:Boolean,placeholder:{type:String,default:"Enter text here..."},showCounter:Boolean,label:{type:String,default:"Label Text"},required:Boolean,description:String,checkboxLabel:String,anchorText:String,anchorHref:String},data(){return{default:(" "+this.value).slice(1),reactiveValue:this.value,focusState:"blur",checkboxChecked:!1}},computed:{isReadOnly(){return!!this.readonly},isDisabled(){return!!this.disabled},counterClass(){return this.hasError?"counter-error":this.isSuccess?"counter-success":this.focusState==="focus"?"counter-focus":""}},watch:{value(n){this.reactiveValue=n},reactiveValue(n){if(this.isDisabled||this.isReadOnly)return;const e=this.trim||typeof n=="string"?(n||"").trim():n;this.lazy?this.$debounce(()=>{this.$emit("input-change",e)},500,"base_input_change_global_debounce_id"):this.$emit("input-change",e)}},beforeDestroy(){this.reactiveValue=this.default},mounted(){ke(1500).then(()=>{this.autofocus&&this.focus()})},methods:{focus(){var n,e;(e=(n=this.$refs)==null?void 0:n.inputField)!=null&&e.focus&&this.$refs.inputField.focus()},handleInput(n){this.$emit("input",n),this.$emit("input-change",n.target.value)},onFocus(n){this.focusState="focus",this.$emit("focus",n)},onBlur(n){this.focusState="blur",this.$emit("blur",n)},handleKeyUp(n){this.$emit("keyup",n)},onClick(n){this.$emit("click",n),this.focus()}}};var $e=function(){var e=this,r=e._self._c;return r("div",{class:["base-input-wrapper",{"has-error":e.hasError,"is-success":e.isSuccess}]},[e.label?r("label",{staticClass:"base-input-label",attrs:{for:e.inputId}},[e._v(" "+e._s(e.label)),e.required?r("span",{staticClass:"required-asterisk"},[e._v("*")]):e._e()]):e._e(),e.description?r("div",{staticClass:"base-input-description"},[e._v(" "+e._s(e.description)+" ")]):e._e(),r("div",{class:["base-input-container",e.hasError?"is-invalid":"",e.isSuccess?"is-success":"",e.disabled?"is-disabled":""]},[e.$slots.prefix?e._t("prefix"):e.prefix?r("span",{class:["base-input__prefix",e.prefixClass]},[e._v(e._s(e.prefix))]):e.prefixIcon?r("Icon",{class:["base-input__prefix base-input__prefix--icon",e.prefixClass],attrs:{icon:e.prefixIcon,width:e.prefixIconSize,height:e.prefixIconSize,color:e.prefixIconColor}}):e._e(),e.type==="checkbox"?r("input",e._b({directives:[{name:"model",rawName:"v-model",value:e.reactiveValue,expression:"reactiveValue"}],ref:"inputField",class:["form-control",e.inputClass,e.hasError?"is-invalid":"",e.isSuccess?"is-success":"",e.focusState==="focus"?"base-input--focus":""],attrs:{id:e.inputId,name:e.inputId,disabled:e.disabled,readonly:e.readonly,placeholder:e.placeholder||"Enter text here...",type:"checkbox"},domProps:{checked:Array.isArray(e.reactiveValue)?e._i(e.reactiveValue,null)>-1:e.reactiveValue},on:{input:e.handleInput,change:[function(s){var o=e.reactiveValue,B=s.target,Ce=!!B.checked;if(Array.isArray(o)){var C=null,S=e._i(o,C);B.checked?S<0&&(e.reactiveValue=o.concat([C])):S>-1&&(e.reactiveValue=o.slice(0,S).concat(o.slice(S+1)))}else e.reactiveValue=Ce},s=>e.$emit("change",s)],focus:e.onFocus,blur:e.onBlur,keydown:s=>e.$emit("keydown",s),keyup:e.handleKeyUp}},"input",e.$attrs,!1)):e.type==="radio"?r("input",e._b({directives:[{name:"model",rawName:"v-model",value:e.reactiveValue,expression:"reactiveValue"}],ref:"inputField",class:["form-control",e.inputClass,e.hasError?"is-invalid":"",e.isSuccess?"is-success":"",e.focusState==="focus"?"base-input--focus":""],attrs:{id:e.inputId,name:e.inputId,disabled:e.disabled,readonly:e.readonly,placeholder:e.placeholder||"Enter text here...",type:"radio"},domProps:{checked:e._q(e.reactiveValue,null)},on:{input:e.handleInput,change:[function(s){e.reactiveValue=null},s=>e.$emit("change",s)],focus:e.onFocus,blur:e.onBlur,keydown:s=>e.$emit("keydown",s),keyup:e.handleKeyUp}},"input",e.$attrs,!1)):r("input",e._b({directives:[{name:"model",rawName:"v-model",value:e.reactiveValue,expression:"reactiveValue"}],ref:"inputField",class:["form-control",e.inputClass,e.hasError?"is-invalid":"",e.isSuccess?"is-success":"",e.focusState==="focus"?"base-input--focus":""],attrs:{id:e.inputId,name:e.inputId,disabled:e.disabled,readonly:e.readonly,placeholder:e.placeholder||"Enter text here...",type:e.type},domProps:{value:e.reactiveValue},on:{input:[function(s){s.target.composing||(e.reactiveValue=s.target.value)},e.handleInput],change:s=>e.$emit("change",s),focus:e.onFocus,blur:e.onBlur,keydown:s=>e.$emit("keydown",s),keyup:e.handleKeyUp}},"input",e.$attrs,!1)),e.$slots.suffix?e._t("suffix"):e.suffix?r("span",{class:["base-input__suffix",e.suffixClass]},[e._v(e._s(e.suffix))]):e.suffixIcon||e.isSuccess?r("Icon",{class:["base-input__suffix base-input__prefix--icon",e.suffixClass],attrs:{icon:e.suffixIcon||(e.isSuccess?"fluent:checkmark-circle-24-regular":""),width:e.suffixIconSize,height:e.suffixIconSize,color:e.suffixIconColor}}):e._e()],2),e.showCounter?r("div",{class:["base-input-counter counter-input-group",e.counterClass]},[e._v(" "+e._s(e.reactiveValue.length)+" ")]):e._e(),r("div",{staticClass:"base-input-footer"},[e.checkboxLabel?r("Checkbox",{model:{value:e.checkboxChecked,callback:function(s){e.checkboxChecked=s},expression:"checkboxChecked"}},[r("span",{staticClass:"chekbox-label-span"},[e._v(e._s(e.checkboxLabel))])]):e._e(),e.anchorText?r("a",{staticClass:"base-input-anchor",attrs:{href:e.anchorHref}},[e._v(e._s(e.anchorText))]):e._e()],1)])},Ee=[],Se=we(ze,$e,Ee,!1,null,null);const Be=Se.exports;Se.exports.__docgenInfo={exportName:"default",displayName:"base-input",description:"",tags:{},props:[{name:"wrapperClass",type:{name:"string"}},{name:"inputClass",type:{name:"string"}},{name:"inputId",type:{name:"string"}},{name:"prefix",type:{name:"string"}},{name:"prefixIcon",type:{name:"string"}},{name:"prefixIconSize",type:{name:"string"},defaultValue:{func:!1,value:'"20px"'}},{name:"prefixIconColor",type:{name:"string"},defaultValue:{func:!1,value:'"inherit"'}},{name:"prefixClass",type:{name:"string"}},{name:"v-model",type:{name:"string|number"}},{name:"suffix",type:{name:"string"}},{name:"suffixIcon",type:{name:"string"}},{name:"suffixIconSize",type:{name:"string"},defaultValue:{func:!1,value:'"20px"'}},{name:"suffixIconColor",type:{name:"string"},defaultValue:{func:!1,value:'"inherit"'}},{name:"suffixClass",type:{name:"string"}},{name:"autofocus",type:{name:"boolean"}},{name:"lazy",type:{name:"boolean"}},{name:"min",type:{name:"number|string"}},{name:"max",type:{name:"number|string"}},{name:"readonly",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"trim",type:{name:"boolean"}},{name:"type",type:{name:"string"},defaultValue:{func:!1,value:'"text"'}},{name:"hasError",type:{name:"boolean"}},{name:"isSuccess",type:{name:"boolean"}},{name:"placeholder",type:{name:"string"},defaultValue:{func:!1,value:'"Enter text here..."'}},{name:"showCounter",type:{name:"boolean"}},{name:"label",type:{name:"string"},defaultValue:{func:!1,value:'"Label Text"'}},{name:"required",type:{name:"boolean"}},{name:"description",type:{name:"string"}},{name:"checkboxLabel",type:{name:"string"}},{name:"anchorText",type:{name:"string"}},{name:"anchorHref",type:{name:"string"}}],events:[{name:"change"},{name:"keydown"},{name:"input-change",type:{names:["undefined"]}},{name:"input",type:{names:["undefined"]}},{name:"focus",type:{names:["undefined"]}},{name:"blur",type:{names:["undefined"]}},{name:"keyup",type:{names:["undefined"]}},{name:"click",type:{names:["undefined"]}}],slots:[{name:"prefix",scoped:!0,bindings:[{name:"class",title:"binding"}]},{name:"suffix",scoped:!0,bindings:[{name:"class",title:"binding"}]}],sourceFiles:["/Users/agoiabel/code/withpropel/resources/js/components/reusables/input-fields/base-input.vue"]};const Ne={title:"Forms/BaseInput",tags:["autodocs"],component:Be,argTypes:{disabled:{control:"boolean"},hasError:{control:"boolean"},inputId:{control:"text"},inputClass:{control:"text"},readonly:{control:"boolean"},autofocus:{control:"boolean"},lazy:{control:"boolean"},trim:{control:"boolean"},value:{control:"text"},prefix:{control:"text"},suffix:{control:"text"},prefixIcon:{control:"text"},suffixIcon:{control:"text"},prefixIconSize:{control:"text"},suffixIconSize:{control:"text"},prefixIconColor:{control:"text"},suffixIconColor:{control:"text"},isSuccess:{control:"boolean"},showCounter:{control:"boolean"},maxLength:{control:"number"},label:{control:"text"},required:{control:"boolean"},description:{control:"text"},checkboxLabel:{control:"text"},anchorText:{control:"text"},anchorHref:{control:"text"}}},t=n=>({components:{BaseInput:Be},setup(){return{args:n}},template:'<BaseInput v-bind="args" />'}),a=t.bind({});a.args={value:"",label:"Label",description:"Inline text",placeholder:"Placeholder",required:!0,checkboxLabel:"Helper text 1",anchorText:"Helper text 2",anchorHref:"#",prefixIcon:"fluent:person-16-regular",prefixIconColor:"#788787",prefixIconSize:"20px",suffixIconSize:"20px"};const i=t.bind({});i.args={...a.args,value:"Disabled input",disabled:!0};const u=t.bind({});u.args={...a.args,value:" ",autofocus:!0};const c=t.bind({});c.args={...a.args,value:""};const l=t.bind({});l.args={...a.args,value:"Typing",autofocus:!0};const p=t.bind({});p.args={...a.args,value:"Placeholder"};const d=t.bind({});d.args={...a.args,value:"Placeholder",isSuccess:!0,suffixIconColor:"#0AA749"};const m=t.bind({});m.args={...a.args,value:"Placeholder",hasError:!0};const f=t.bind({});f.args={...a.args,value:"Readonly input",readonly:!0};const g=t.bind({});g.args={...a.args,value:"Autofocus input",autofocus:!0};const b=t.bind({});b.args={...a.args,value:"Lazy input",lazy:!0};const h=t.bind({});h.args={...a.args,value:"  Text with spaces  ",trim:!0};const x=t.bind({});x.args={...a.args,prefix:"Prefix",suffix:"Suffix"};const v=t.bind({});v.args={...a.args,prefixIcon:"fluent:person-16-regular",suffixIcon:"fluent:checkmark-circle-24-regular"};const y=t.bind({});y.args={...a.args,value:"Input with required field"};const _=t.bind({});_.args={...a.args,value:"Input not required",required:!1};const I=t.bind({});I.args={...a.args,value:"",label:null,description:null,placeholder:"Placeholder",required:!1,checkboxLabel:"",anchorText:"",anchorHref:"#",prefixIcon:"fluent:person-16-regular",prefixIconColor:"#788787"};var k,V,w;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`arguments_ => ({
  components: {
    BaseInput
  },
  setup() {
    return {
      args: arguments_
    };
  },
  template: '<BaseInput v-bind="args" />'
})`,...(w=(V=a.parameters)==null?void 0:V.docs)==null?void 0:w.source}}};var z,$,E;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`arguments_ => ({
  components: {
    BaseInput
  },
  setup() {
    return {
      args: arguments_
    };
  },
  template: '<BaseInput v-bind="args" />'
})`,...(E=($=i.parameters)==null?void 0:$.docs)==null?void 0:E.source}}};var T,F,q;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`arguments_ => ({
  components: {
    BaseInput
  },
  setup() {
    return {
      args: arguments_
    };
  },
  template: '<BaseInput v-bind="args" />'
})`,...(q=(F=u.parameters)==null?void 0:F.docs)==null?void 0:q.source}}};var L,A,P;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`arguments_ => ({
  components: {
    BaseInput
  },
  setup() {
    return {
      args: arguments_
    };
  },
  template: '<BaseInput v-bind="args" />'
})`,...(P=(A=c.parameters)==null?void 0:A.docs)==null?void 0:P.source}}};var N,R,D;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`arguments_ => ({
  components: {
    BaseInput
  },
  setup() {
    return {
      args: arguments_
    };
  },
  template: '<BaseInput v-bind="args" />'
})`,...(D=(R=l.parameters)==null?void 0:R.docs)==null?void 0:D.source}}};var H,U,K;p.parameters={...p.parameters,docs:{...(H=p.parameters)==null?void 0:H.docs,source:{originalSource:`arguments_ => ({
  components: {
    BaseInput
  },
  setup() {
    return {
      args: arguments_
    };
  },
  template: '<BaseInput v-bind="args" />'
})`,...(K=(U=p.parameters)==null?void 0:U.docs)==null?void 0:K.source}}};var W,O,j;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`arguments_ => ({
  components: {
    BaseInput
  },
  setup() {
    return {
      args: arguments_
    };
  },
  template: '<BaseInput v-bind="args" />'
})`,...(j=(O=d.parameters)==null?void 0:O.docs)==null?void 0:j.source}}};var G,J,M;m.parameters={...m.parameters,docs:{...(G=m.parameters)==null?void 0:G.docs,source:{originalSource:`arguments_ => ({
  components: {
    BaseInput
  },
  setup() {
    return {
      args: arguments_
    };
  },
  template: '<BaseInput v-bind="args" />'
})`,...(M=(J=m.parameters)==null?void 0:J.docs)==null?void 0:M.source}}};var Q,X,Y;f.parameters={...f.parameters,docs:{...(Q=f.parameters)==null?void 0:Q.docs,source:{originalSource:`arguments_ => ({
  components: {
    BaseInput
  },
  setup() {
    return {
      args: arguments_
    };
  },
  template: '<BaseInput v-bind="args" />'
})`,...(Y=(X=f.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,ne;g.parameters={...g.parameters,docs:{...(Z=g.parameters)==null?void 0:Z.docs,source:{originalSource:`arguments_ => ({
  components: {
    BaseInput
  },
  setup() {
    return {
      args: arguments_
    };
  },
  template: '<BaseInput v-bind="args" />'
})`,...(ne=(ee=g.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};var ae,se,re;b.parameters={...b.parameters,docs:{...(ae=b.parameters)==null?void 0:ae.docs,source:{originalSource:`arguments_ => ({
  components: {
    BaseInput
  },
  setup() {
    return {
      args: arguments_
    };
  },
  template: '<BaseInput v-bind="args" />'
})`,...(re=(se=b.parameters)==null?void 0:se.docs)==null?void 0:re.source}}};var te,oe,ie;h.parameters={...h.parameters,docs:{...(te=h.parameters)==null?void 0:te.docs,source:{originalSource:`arguments_ => ({
  components: {
    BaseInput
  },
  setup() {
    return {
      args: arguments_
    };
  },
  template: '<BaseInput v-bind="args" />'
})`,...(ie=(oe=h.parameters)==null?void 0:oe.docs)==null?void 0:ie.source}}};var ue,ce,le;x.parameters={...x.parameters,docs:{...(ue=x.parameters)==null?void 0:ue.docs,source:{originalSource:`arguments_ => ({
  components: {
    BaseInput
  },
  setup() {
    return {
      args: arguments_
    };
  },
  template: '<BaseInput v-bind="args" />'
})`,...(le=(ce=x.parameters)==null?void 0:ce.docs)==null?void 0:le.source}}};var pe,de,me;v.parameters={...v.parameters,docs:{...(pe=v.parameters)==null?void 0:pe.docs,source:{originalSource:`arguments_ => ({
  components: {
    BaseInput
  },
  setup() {
    return {
      args: arguments_
    };
  },
  template: '<BaseInput v-bind="args" />'
})`,...(me=(de=v.parameters)==null?void 0:de.docs)==null?void 0:me.source}}};var fe,ge,be;y.parameters={...y.parameters,docs:{...(fe=y.parameters)==null?void 0:fe.docs,source:{originalSource:`arguments_ => ({
  components: {
    BaseInput
  },
  setup() {
    return {
      args: arguments_
    };
  },
  template: '<BaseInput v-bind="args" />'
})`,...(be=(ge=y.parameters)==null?void 0:ge.docs)==null?void 0:be.source}}};var he,xe,ve;_.parameters={..._.parameters,docs:{...(he=_.parameters)==null?void 0:he.docs,source:{originalSource:`arguments_ => ({
  components: {
    BaseInput
  },
  setup() {
    return {
      args: arguments_
    };
  },
  template: '<BaseInput v-bind="args" />'
})`,...(ve=(xe=_.parameters)==null?void 0:xe.docs)==null?void 0:ve.source}}};var ye,_e,Ie;I.parameters={...I.parameters,docs:{...(ye=I.parameters)==null?void 0:ye.docs,source:{originalSource:`arguments_ => ({
  components: {
    BaseInput
  },
  setup() {
    return {
      args: arguments_
    };
  },
  template: '<BaseInput v-bind="args" />'
})`,...(Ie=(_e=I.parameters)==null?void 0:_e.docs)==null?void 0:Ie.source}}};const Re=["Default","Disabled","Pressed","Active","Typing","Filled","Success","Error","Readonly","Autofocus","Lazy","Trimmed","WithPrefixAndSuffix","WithIcons","RequiredField","NotRequired","UngroupedInput"];export{c as Active,g as Autofocus,a as Default,i as Disabled,m as Error,p as Filled,b as Lazy,_ as NotRequired,u as Pressed,f as Readonly,y as RequiredField,d as Success,h as Trimmed,l as Typing,I as UngroupedInput,v as WithIcons,x as WithPrefixAndSuffix,Re as __namedExportsOrder,Ne as default};
