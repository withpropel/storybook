import{I as D}from"./iconify-rQT97Fj4.js";import{n as $}from"./app-BQSE6mr4.js";import"./vue.esm-BaK_9ySz.js";const B={name:"Ratings",components:{Icon:D},props:{value:{type:Number,default:0},disabled:{type:Boolean,default:!1},half:{type:Boolean,default:!1},size:{type:String,default:"medium",validator:function(a){return["small","medium","big"].indexOf(a)!==-1}}},computed:{sizeClass(){return`ratings--${this.size}`},maxStars(){return Math.ceil(this.value)},iconClass(){return{"star-icon":!0,"star-icon-disabled":this.disabled}}},methods:{rate(a){this.disabled||this.$emit("input",this.half?a-.5:a)}}};var V=function(){var e=this,s=e._self._c;return s("div",{class:["ratings",e.sizeClass,{disabled:e.disabled}]},e._l(e.maxStars,function(l){return s("span",{key:l,staticClass:"star",on:{click:function(x){return e.rate(l)}}},[e.half&&e.value>=l-.5&&e.value<l?s("Icon",{class:e.iconClass,attrs:{icon:"fluent:star-half-24-filled"}}):e.value>=l?s("Icon",{class:e.iconClass,attrs:{icon:"fluent:star-24-filled"}}):e._e()],1)}),0)},k=[],C=$(B,V,k,!1,null,"51c7b913");const u=C.exports;C.exports.__docgenInfo={displayName:"Ratings",exportName:"default",description:"",tags:{},props:[{name:"value",type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"half",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"size",type:{name:"string"},defaultValue:{func:!1,value:"'medium'"},values:["small","medium","big"]}],events:[{name:"input",type:{names:["undefined"]}}],sourceFiles:["/Users/agoiabel/code/withpropel/resources/js/components/reusables/ratings/base-rating.vue"]};const w={title:"UI/Ratings",component:u,tags:["autodocs"],render:(a,{argTypes:e})=>({props:Object.keys(e),components:{Ratings:u},template:`
      <Ratings v-bind="$props" @input="onInput" />
    `,methods:{onInput(s){this.$emit("input",s)}}}),argTypes:{value:{control:{type:"number"},description:"Rating value"},disabled:{control:"boolean",description:"Disable rating interaction"},half:{control:"boolean",description:"Allow half-star ratings"},size:{control:{type:"select"},options:["small","medium","big"],description:"Size of the stars"}}},t={args:{value:3,disabled:!1,half:!1,size:"medium"}},n={args:{value:2.5,disabled:!1,half:!0,size:"medium"}},r={args:{value:4,disabled:!0,half:!1,size:"medium"}},i={args:{value:4,disabled:!1,half:!1,size:"small"}},o={args:{value:4,disabled:!1,half:!1,size:"big"}};var d,c,m;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    value: 3,
    disabled: false,
    half: false,
    size: 'medium'
  }
}`,...(m=(c=t.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var f,p,g;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    value: 2.5,
    disabled: false,
    half: true,
    size: 'medium'
  }
}`,...(g=(p=n.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var b,v,h;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    value: 4,
    disabled: true,
    half: false,
    size: 'medium'
  }
}`,...(h=(v=r.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var _,z,y;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    value: 4,
    disabled: false,
    half: false,
    size: 'small'
  }
}`,...(y=(z=i.parameters)==null?void 0:z.docs)==null?void 0:y.source}}};var S,I,R;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    value: 4,
    disabled: false,
    half: false,
    size: 'big'
  }
}`,...(R=(I=o.parameters)==null?void 0:I.docs)==null?void 0:R.source}}};const F=["Default","Half","Disabled","Small","Big"];export{o as Big,t as Default,r as Disabled,n as Half,i as Small,F as __namedExportsOrder,w as default};
