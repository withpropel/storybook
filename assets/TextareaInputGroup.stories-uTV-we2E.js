import{w as fe}from"./index-CWVeDs_5.js";import{C as me}from"./base-checkbox-TSuVvJaG.js";import{n as he}from"./app-BQSE6mr4.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iconify-rQT97Fj4.js";import"./vue.esm-BaK_9ySz.js";const xe={components:{Checkbox:me},model:{prop:"value",event:"input-change"},props:{disabled:{type:[Boolean,String],default:!1},hasError:{type:Boolean,default:!1},inputId:{type:String,default:void 0},inputClass:{type:String,default:""},readonly:{type:[Boolean,String],default:!1},autofocus:{type:Boolean,default:void 0},lazy:{type:Boolean,default:!1},trim:{type:Boolean,default:!1},value:{type:[String,Number],default:void 0},placeholderIcon:{type:String,default:void 0},iconSize:{type:String,default:"20px"},isSuccess:{type:Boolean,default:!1},showCounter:{type:Boolean,default:!1},maxLength:{type:Number,default:100},label:{type:String,default:"Label Text"},required:{type:Boolean,default:!0},description:{type:String,default:"Brief description goes here."},checkboxLabel:{type:String,default:"I agree to the terms"},anchorText:{type:String,default:"Learn more"},anchorHref:{type:String,default:"#"},placeholder:{type:String,default:"Placeholder"}},data(){return{default:(" "+this.value).slice(1),reactiveValue:this.value,focusState:"blur",checkboxChecked:!1}},computed:{isReadOnly(){return!!this.readonly},isDisabled(){return!!this.disabled},counterClass(){return this.hasError?"counter-error":this.isSuccess?"counter-success":this.focusState==="focus"?"counter-focus":""}},watch:{value(r){this.reactiveValue=r},reactiveValue(r){if(this.isDisabled||this.isReadOnly)return;const e=this.trim||typeof r=="string"?(r||"").trim():r;this.lazy?this.$debounce(()=>{this.$emit("input-change",e)},500,"base_input_change_global_debounce_id"):this.$emit("input-change",e)}},beforeDestroy(){this.reactiveValue=this.default},mounted(){fe(1500).then(()=>{this.autofocus&&this.focus()})},methods:{focus(){var r,e;(e=(r=this.$refs)==null?void 0:r.textareaField)!=null&&e.focus&&this.$refs.textareaField.focus()},handleInput(r){this.$emit("input",r),this.$emit("input-change",r.target.value)},handleFocus(r){this.focusState="focus",this.$emit("focus",r)},handleBlur(r){this.focusState="blur",this.$emit("blur",r)}}};var be=function(){var e=this,t=e._self._c;return t("div",{class:["text-area-wrapper",{"has-error":e.hasError,"is-success":e.isSuccess}]},[e.label?t("label",{staticClass:"text-area-label",attrs:{for:e.inputId}},[e._v(" "+e._s(e.label)),e.required?t("span",{staticClass:"required-asterisk"},[e._v("*")]):e._e()]):e._e(),e.description?t("div",{staticClass:"text-area-description"},[e._v(" "+e._s(e.description)+" ")]):e._e(),t("div",{staticClass:"text-area-container"},[t("textarea",e._b({directives:[{name:"model",rawName:"v-model",value:e.reactiveValue,expression:"reactiveValue"}],ref:"textareaField",class:["form-control text-area-input",e.inputClass,e.hasError?"is-invalid":"",e.isSuccess?"is-success":"",e.focusState==="focus"?"text-area-input--focus":""],attrs:{id:e.inputId,placeholder:e.placeholder,name:e.inputId,disabled:e.disabled,readonly:e.readonly},domProps:{value:e.reactiveValue},on:{input:[function(n){n.target.composing||(e.reactiveValue=n.target.value)},e.handleInput],change:n=>e.$emit("change",n),focus:e.handleFocus,blur:e.handleBlur,keydown:n=>e.$emit("keydown",n),keyup:n=>e.$emit("keyup",n)}},"textarea",e.$attrs,!1)),e._v(" "),e.placeholderIcon?t("div",{staticClass:"placeholder-icon"},[t("Icon",{attrs:{icon:e.placeholderIcon,width:e.iconSize,height:e.iconSize}})],1):e._e(),e.isSuccess?t("div",{staticClass:"success-icon"},[t("Icon",{attrs:{icon:"fluent:checkmark-circle-24-regular",width:"20px",height:"20px"}})],1):e._e(),!e.isSuccess&&!e.hasError?t("div",{staticClass:"default-icon"},[t("Icon",{attrs:{icon:"fluent:checkmark-circle-24-regular",width:"20px",height:"20px",color:"#788787"}})],1):e._e()]),e.showCounter?t("div",{class:["text-area-counter counter-input-group",e.counterClass]},[e._v(" "+e._s(e.reactiveValue.length)+" ")]):e._e(),t("div",{staticClass:"text-area-footer"},[e.checkboxLabel?t("Checkbox",{model:{value:e.checkboxChecked,callback:function(n){e.checkboxChecked=n},expression:"checkboxChecked"}},[t("span",[e._v(e._s(e.checkboxLabel))])]):e._e(),e.anchorText?t("a",{staticClass:"text-area-anchor",attrs:{href:e.anchorHref}},[e._v(e._s(e.anchorText))]):e._e()],1)])},ge=[],pe=he(xe,be,ge,!1,null,null);const de=pe.exports;pe.exports.__docgenInfo={exportName:"default",displayName:"text-area-input-group",description:"",tags:{},props:[{name:"disabled",type:{name:"boolean|string"},defaultValue:{func:!1,value:"false"}},{name:"hasError",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"inputId",type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"inputClass",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"readonly",type:{name:"boolean|string"},defaultValue:{func:!1,value:"false"}},{name:"autofocus",type:{name:"boolean"},defaultValue:{func:!1,value:"undefined"}},{name:"lazy",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"trim",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"v-model",type:{name:"string|number"},defaultValue:{func:!1,value:"undefined"}},{name:"placeholderIcon",type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"iconSize",type:{name:"string"},defaultValue:{func:!1,value:'"20px"'}},{name:"isSuccess",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"showCounter",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"maxLength",type:{name:"number"},defaultValue:{func:!1,value:"100"}},{name:"label",type:{name:"string"},defaultValue:{func:!1,value:'"Label Text"'}},{name:"required",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"description",type:{name:"string"},defaultValue:{func:!1,value:'"Brief description goes here."'}},{name:"checkboxLabel",type:{name:"string"},defaultValue:{func:!1,value:'"I agree to the terms"'}},{name:"anchorText",type:{name:"string"},defaultValue:{func:!1,value:'"Learn more"'}},{name:"anchorHref",type:{name:"string"},defaultValue:{func:!1,value:'"#"'}},{name:"placeholder",type:{name:"string"},defaultValue:{func:!1,value:'"Placeholder"'}}],events:[{name:"change"},{name:"keydown"},{name:"keyup"},{name:"input-change",type:{names:["undefined"]}},{name:"input",type:{names:["undefined"]}},{name:"focus",type:{names:["undefined"]}},{name:"blur",type:{names:["undefined"]}}],sourceFiles:["/Users/agoiabel/code/withpropel/resources/js/components/reusables/input-fields/text-area-input-group.vue"]};const Se={title:"Forms/TextAreaInputGroup",tags:["autodocs"],component:de,argTypes:{disabled:{control:"boolean"},hasError:{control:"boolean"},inputId:{control:"text"},inputClass:{control:"text"},readonly:{control:"boolean"},autofocus:{control:"boolean"},lazy:{control:"boolean"},trim:{control:"boolean"},value:{control:"text"},placeholderIcon:{control:"text"},iconSize:{control:"text"},isSuccess:{control:"boolean"},showCounter:{control:"boolean"},maxLength:{control:"number"},label:{control:"text"},required:{control:"boolean"},description:{control:"text"},checkboxLabel:{control:"text"},anchorText:{control:"text"},anchorHref:{control:"text"},placeholder:{control:"text"}}},a=r=>({components:{TextAreaInputGroup:de},setup(){return{args:r}},template:'<TextAreaInputGroup v-bind="args" />'}),o=a.bind({});o.args={value:"",placeholderIcon:"fluent:edit-24-regular",label:"Label",required:!0,description:"Inline text",checkboxLabel:"Helper text 1",anchorText:"Helper text 2",anchorHref:"#",showCounter:!0,placeholder:"Placeholder"};const l=a.bind({});l.args={value:"",placeholderIcon:"fluent:edit-24-regular",label:"Label",required:!0,description:"Inline text",checkboxLabel:"Helper text 1",anchorText:"Helper text 2",anchorHref:"#",showCounter:!0,autofocus:!0,placeholder:"Placeholder"};const s=a.bind({});s.args={value:"",placeholderIcon:"fluent:edit-24-regular",label:"Label",required:!0,description:"Inline text",checkboxLabel:"Helper text 1",anchorText:"Helper text 2",anchorHref:"#",showCounter:!0,placeholder:"Placeholder"};const u=a.bind({});u.args={value:"Typing",placeholderIcon:"fluent:edit-24-regular",label:"Label",required:!0,description:"Inline text",checkboxLabel:"Helper text 1",anchorText:"Helper text 2",anchorHref:"#",showCounter:!0,placeholder:"Placeholder",autofocus:!0};const c=a.bind({});c.args={value:"Placeholder",placeholderIcon:"fluent:edit-24-regular",label:"Label",required:!0,description:"Inline text",checkboxLabel:"Helper text 1",anchorText:"Helper text 2",anchorHref:"#",showCounter:!0,placeholder:"Placeholder"};const i=a.bind({});i.args={value:"Placeholder",isSuccess:!0,showCounter:!0,maxLength:100,placeholderIcon:"fluent:edit-24-regular",label:"Label",required:!0,description:"Inline text",checkboxLabel:"Helper text 1",anchorText:"Helper text 2",anchorHref:"#"};const p=a.bind({});p.args={value:"Placeholder",hasError:!0,placeholderIcon:"fluent:edit-24-regular",showCounter:!0,maxLength:100,label:"Label",required:!0,description:"Inline text",checkboxLabel:"Helper text 1",anchorText:"Helper text 2",anchorHref:"#"};const d=a.bind({});d.args={value:"",disabled:!0,placeholderIcon:"fluent:edit-24-regular",label:"Label",required:!0,description:"Inline text",checkboxLabel:"Helper text 1",anchorText:"Helper text 2",anchorHref:"#",showCounter:!0,placeholder:"Placeholder"};const f=a.bind({});f.args={value:"Placeholder",readonly:!0,placeholderIcon:"fluent:edit-24-regular",label:"Label",required:!0,description:"Inline text",checkboxLabel:"Helper text 1",anchorText:"Helper text 2",anchorHref:"#",showCounter:!0,placeholder:"Placeholder"};const m=a.bind({});m.args={value:"Autofocus textarea",autofocus:!0,placeholderIcon:"fluent:edit-24-regular",label:"Label",required:!0,description:"Inline text",checkboxLabel:"Helper text 1",anchorText:"Helper text 2",anchorHref:"#"};const h=a.bind({});h.args={value:"Lazy textarea input",lazy:!0,placeholderIcon:"fluent:edit-24-regular",label:"Label",required:!0,description:"Inline text",checkboxLabel:"Helper text 1",anchorText:"Helper text 2",anchorHref:"#"};const x=a.bind({});x.args={value:"  Text with spaces  ",trim:!0,placeholderIcon:"fluent:edit-24-regular",label:"Label",required:!0,description:"Inline text",checkboxLabel:"Helper text 1",anchorText:"Helper text 2",anchorHref:"#"};const b=a.bind({});b.args={value:"Textarea with label",label:"Label",placeholderIcon:"fluent:edit-24-regular",required:!0,description:"Inline text",checkboxLabel:"Helper text 1",anchorText:"Helper text 2",anchorHref:"#"};const g=a.bind({});g.args={value:"Textarea with required field",label:"Label",required:!0,placeholderIcon:"fluent:edit-24-regular",description:"Inline text",checkboxLabel:"Helper text 1",anchorText:"Helper text 2",anchorHref:"#"};const v=a.bind({});v.args={value:"Textarea not required",placeholderIcon:"fluent:edit-24-regular",checkboxLabel:"Helper text 1",anchorText:"Helper text 2",anchorHref:"#",label:"Label",required:!1,description:"Inline text"};var I,y,T;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`args => ({
  components: {
    TextAreaInputGroup
  },
  setup() {
    return {
      args
    };
  },
  template: '<TextAreaInputGroup v-bind="args" />'
})`,...(T=(y=o.parameters)==null?void 0:y.docs)==null?void 0:T.source}}};var H,L,S;l.parameters={...l.parameters,docs:{...(H=l.parameters)==null?void 0:H.docs,source:{originalSource:`args => ({
  components: {
    TextAreaInputGroup
  },
  setup() {
    return {
      args
    };
  },
  template: '<TextAreaInputGroup v-bind="args" />'
})`,...(S=(L=l.parameters)==null?void 0:L.docs)==null?void 0:S.source}}};var _,k,A;s.parameters={...s.parameters,docs:{...(_=s.parameters)==null?void 0:_.docs,source:{originalSource:`args => ({
  components: {
    TextAreaInputGroup
  },
  setup() {
    return {
      args
    };
  },
  template: '<TextAreaInputGroup v-bind="args" />'
})`,...(A=(k=s.parameters)==null?void 0:k.docs)==null?void 0:A.source}}};var C,G,V;u.parameters={...u.parameters,docs:{...(C=u.parameters)==null?void 0:C.docs,source:{originalSource:`args => ({
  components: {
    TextAreaInputGroup
  },
  setup() {
    return {
      args
    };
  },
  template: '<TextAreaInputGroup v-bind="args" />'
})`,...(V=(G=u.parameters)==null?void 0:G.docs)==null?void 0:V.source}}};var q,w,P;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`args => ({
  components: {
    TextAreaInputGroup
  },
  setup() {
    return {
      args
    };
  },
  template: '<TextAreaInputGroup v-bind="args" />'
})`,...(P=(w=c.parameters)==null?void 0:w.docs)==null?void 0:P.source}}};var z,B,F;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`args => ({
  components: {
    TextAreaInputGroup
  },
  setup() {
    return {
      args
    };
  },
  template: '<TextAreaInputGroup v-bind="args" />'
})`,...(F=(B=i.parameters)==null?void 0:B.docs)==null?void 0:F.source}}};var $,E,R;p.parameters={...p.parameters,docs:{...($=p.parameters)==null?void 0:$.docs,source:{originalSource:`args => ({
  components: {
    TextAreaInputGroup
  },
  setup() {
    return {
      args
    };
  },
  template: '<TextAreaInputGroup v-bind="args" />'
})`,...(R=(E=p.parameters)==null?void 0:E.docs)==null?void 0:R.source}}};var D,N,O;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`args => ({
  components: {
    TextAreaInputGroup
  },
  setup() {
    return {
      args
    };
  },
  template: '<TextAreaInputGroup v-bind="args" />'
})`,...(O=(N=d.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};var W,j,U;f.parameters={...f.parameters,docs:{...(W=f.parameters)==null?void 0:W.docs,source:{originalSource:`args => ({
  components: {
    TextAreaInputGroup
  },
  setup() {
    return {
      args
    };
  },
  template: '<TextAreaInputGroup v-bind="args" />'
})`,...(U=(j=f.parameters)==null?void 0:j.docs)==null?void 0:U.source}}};var J,K,M;m.parameters={...m.parameters,docs:{...(J=m.parameters)==null?void 0:J.docs,source:{originalSource:`args => ({
  components: {
    TextAreaInputGroup
  },
  setup() {
    return {
      args
    };
  },
  template: '<TextAreaInputGroup v-bind="args" />'
})`,...(M=(K=m.parameters)==null?void 0:K.docs)==null?void 0:M.source}}};var Q,X,Y;h.parameters={...h.parameters,docs:{...(Q=h.parameters)==null?void 0:Q.docs,source:{originalSource:`args => ({
  components: {
    TextAreaInputGroup
  },
  setup() {
    return {
      args
    };
  },
  template: '<TextAreaInputGroup v-bind="args" />'
})`,...(Y=(X=h.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,re;x.parameters={...x.parameters,docs:{...(Z=x.parameters)==null?void 0:Z.docs,source:{originalSource:`args => ({
  components: {
    TextAreaInputGroup
  },
  setup() {
    return {
      args
    };
  },
  template: '<TextAreaInputGroup v-bind="args" />'
})`,...(re=(ee=x.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var te,ae,ne;b.parameters={...b.parameters,docs:{...(te=b.parameters)==null?void 0:te.docs,source:{originalSource:`args => ({
  components: {
    TextAreaInputGroup
  },
  setup() {
    return {
      args
    };
  },
  template: '<TextAreaInputGroup v-bind="args" />'
})`,...(ne=(ae=b.parameters)==null?void 0:ae.docs)==null?void 0:ne.source}}};var oe,le,se;g.parameters={...g.parameters,docs:{...(oe=g.parameters)==null?void 0:oe.docs,source:{originalSource:`args => ({
  components: {
    TextAreaInputGroup
  },
  setup() {
    return {
      args
    };
  },
  template: '<TextAreaInputGroup v-bind="args" />'
})`,...(se=(le=g.parameters)==null?void 0:le.docs)==null?void 0:se.source}}};var ue,ce,ie;v.parameters={...v.parameters,docs:{...(ue=v.parameters)==null?void 0:ue.docs,source:{originalSource:`args => ({
  components: {
    TextAreaInputGroup
  },
  setup() {
    return {
      args
    };
  },
  template: '<TextAreaInputGroup v-bind="args" />'
})`,...(ie=(ce=v.parameters)==null?void 0:ce.docs)==null?void 0:ie.source}}};const _e=["Default","Pressed","Active","Typing","Filled","Success","Error","Disabled","Readonly","Autofocus","Lazy","Trimmed","WithLabel","RequiredField","NotRequired"];export{s as Active,m as Autofocus,o as Default,d as Disabled,p as Error,c as Filled,h as Lazy,v as NotRequired,l as Pressed,f as Readonly,g as RequiredField,i as Success,x as Trimmed,u as Typing,b as WithLabel,_e as __namedExportsOrder,Se as default};
