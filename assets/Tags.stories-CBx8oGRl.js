import{I as Q}from"./iconify-rQT97Fj4.js";import{n as X}from"./app-BQSE6mr4.js";import"./vue.esm-BaK_9ySz.js";const Y={name:"TagComponent",components:{Icon:Q},props:{text:{type:String,required:!0},variant:{type:String,default:"default",validator:t=>["success","error","warning","info","flat","blue","default"].includes(t)},icon:{type:String,default:""},iconPosition:{type:String,default:"none",validator:t=>["none","left","right"].includes(t)},additionalClasses:{type:[String,Array,Object],default:""},disabled:{type:Boolean,default:!1}},computed:{isDisabled(){return this.disabled}},methods:{handleClick(t){this.isDisabled?t.preventDefault():this.$emit("click",t)}}};var Z=function(){var e=this,r=e._self._c;return r("div",{class:["tag",e.variant,{disable:e.isDisabled},{"disabled-flat":e.variant==="flat"&&e.isDisabled},{clickable:!e.isDisabled},e.additionalClasses,e.iconPosition==="left"?"padding-left":e.iconPosition==="right"?"padding-right":"padding-none"],on:{click:e.handleClick}},[e.icon&&e.iconPosition==="left"?r("Icon",{staticClass:"icon icon-left",attrs:{icon:e.icon}}):e._e(),r("span",[e._v(e._s(e.text))]),e.icon&&e.iconPosition==="right"?r("Icon",{staticClass:"icon icon-right",attrs:{icon:e.icon}}):e._e()],1)},ee=[],M=X(Y,Z,ee,!1,null,"6b354afe");const g=M.exports;M.exports.__docgenInfo={displayName:"TagComponent",exportName:"default",description:"",tags:{},props:[{name:"text",type:{name:"string"},required:!0},{name:"variant",type:{name:"string"},defaultValue:{func:!1,value:"'default'"},values:["success","error","warning","info","flat","blue","default"]},{name:"icon",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"iconPosition",type:{name:"string"},defaultValue:{func:!1,value:"'none'"},values:["none","left","right"]},{name:"additionalClasses",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"click",type:{names:["undefined"]}}],sourceFiles:["/Users/agoiabel/code/withpropel/resources/js/components/reusables/tags/base-tag.vue"]};const se={title:"UI/Tags",component:g,tags:["autodocs"],render:(t,{argTypes:e})=>({props:Object.keys(e),components:{TagComponent:g},template:`
            <TagComponent v-bind="$props">
                <template v-if="${"default"in t}" v-slot>${t.default}</template>
            </TagComponent>
        `}),argTypes:{text:{control:"text"},variant:{control:{type:"select"},options:["success","error","warning","info","blue","flat","default"]},icon:{control:"text"},iconPosition:{control:{type:"select"},options:["left","right"]},additionalClasses:{control:"text"},disabled:{control:"boolean"}}},a="LABEL",s={args:{text:a,variant:"success"}},n={args:{text:a,variant:"error"}},o={args:{text:a,variant:"warning"}},i={args:{text:a,variant:"info"}},c={args:{text:a,variant:"blue"}},l={args:{text:a,variant:"flat"}},d={args:{text:a,variant:"default"}},u={args:{text:a,variant:"success",icon:"fluent:add-circle-24-regular",iconPosition:"left"}},p={args:{text:a,variant:"success",icon:"fluent:add-circle-24-regular",iconPosition:"right"}},m={args:{text:a,variant:"default",disabled:!0}},f={args:{text:a,variant:"flat",disabled:!0}};var v,b,x;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    text,
    variant: 'success'
  }
}`,...(x=(b=s.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var h,_,y;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    text,
    variant: 'error'
  }
}`,...(y=(_=n.parameters)==null?void 0:_.docs)==null?void 0:y.source}}};var S,C,D;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    text,
    variant: 'warning'
  }
}`,...(D=(C=o.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var I,P,T;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    text,
    variant: 'info'
  }
}`,...(T=(P=i.parameters)==null?void 0:P.docs)==null?void 0:T.source}}};var k,w,F;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    text,
    variant: 'blue'
  }
}`,...(F=(w=c.parameters)==null?void 0:w.docs)==null?void 0:F.source}}};var W,V,j;l.parameters={...l.parameters,docs:{...(W=l.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    text,
    variant: 'flat'
  }
}`,...(j=(V=l.parameters)==null?void 0:V.docs)==null?void 0:j.source}}};var B,E,L;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    text,
    variant: 'default'
  }
}`,...(L=(E=d.parameters)==null?void 0:E.docs)==null?void 0:L.source}}};var $,O,R;u.parameters={...u.parameters,docs:{...($=u.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    text,
    variant: 'success',
    icon: 'fluent:add-circle-24-regular',
    iconPosition: 'left'
  }
}`,...(R=(O=u.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};var q,A,N;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    text,
    variant: 'success',
    icon: 'fluent:add-circle-24-regular',
    iconPosition: 'right'
  }
}`,...(N=(A=p.parameters)==null?void 0:A.docs)==null?void 0:N.source}}};var U,z,G;m.parameters={...m.parameters,docs:{...(U=m.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    text,
    variant: 'default',
    disabled: true
  }
}`,...(G=(z=m.parameters)==null?void 0:z.docs)==null?void 0:G.source}}};var H,J,K;f.parameters={...f.parameters,docs:{...(H=f.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    text,
    variant: 'flat',
    disabled: true
  }
}`,...(K=(J=f.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};const ne=["Success","Error","Warning","Info","Blue","Flat","Default","WithIconLeft","WithIconRight","Disabled","DisabledFlat"];export{c as Blue,d as Default,m as Disabled,f as DisabledFlat,n as Error,l as Flat,i as Info,s as Success,o as Warning,u as WithIconLeft,p as WithIconRight,ne as __namedExportsOrder,se as default};
