import{I as C}from"./iconify-rQT97Fj4.js";import{n as D}from"./app-BQSE6mr4.js";import"./vue.esm-BaK_9ySz.js";const L={name:"BaseLink",components:{Icon:C},props:{href:{type:String,required:!0},text:{type:String,required:!0},variant:{type:String,default:"primary",validator:r=>["primary","secondary"].includes(r)},icon:{type:String,default:""},iconPosition:{type:String,default:"right",validator:r=>["left","right"].includes(r)},additionalClasses:{type:[String,Array,Object],default:""},disabled:{type:Boolean,default:!1}},computed:{isDisabled(){return this.disabled}},methods:{handleClick(r){this.isDisabled&&r.preventDefault()}}};var w=function(){var e=this,t=e._self._c;return t("a",{class:["link",e.variant,{disabled:e.isDisabled},e.additionalClasses],attrs:{href:e.isDisabled?void 0:e.href},on:{click:e.handleClick}},[e.icon&&e.iconPosition==="left"?t("Icon",{staticClass:"icon-left",attrs:{icon:e.icon}}):e._e(),t("span",[e._v(e._s(e.text))]),e.icon&&e.iconPosition==="right"?t("Icon",{staticClass:"icon-right",attrs:{icon:e.icon}}):e._e()],1)},A=[],I=D(L,w,A,!1,null,"d58df446");const l=I.exports;I.exports.__docgenInfo={displayName:"BaseLink",exportName:"default",description:"",tags:{},props:[{name:"href",type:{name:"string"},required:!0},{name:"text",type:{name:"string"},required:!0},{name:"variant",type:{name:"string"},defaultValue:{func:!1,value:"'primary'"},values:["primary","secondary"]},{name:"icon",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"iconPosition",type:{name:"string"},defaultValue:{func:!1,value:"'right'"},values:["left","right"]},{name:"additionalClasses",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],sourceFiles:["/Users/agoiabel/code/withpropel/resources/js/components/reusables/links/base-link.vue"]};const B={title:"UI/Link",component:l,tags:["autodocs"],render:(r,{argTypes:e})=>({props:Object.keys(e),components:{BaseLink:l},template:`
            <base-link v-bind="$props">
                <template v-if="${"default"in r}" v-slot>${r.default}</template>
            </base-link>
        `}),argTypes:{variant:{control:{type:"select"},options:["primary","secondary"]},href:{control:"text"},text:{control:"text"},icon:{control:"text"},iconPosition:{control:{type:"select"},options:["left","right"]},additionalClasses:{control:"text"},disabled:{control:"boolean"}}},a="Join community",n={args:{href:"#",text:a,variant:"primary"}},s={args:{href:"#",text:a,variant:"secondary"}},i={args:{href:"#",text:a,disabled:!0}},o={args:{href:"#",text:a,variant:"primary",icon:"fluent:arrow-left-24-regular",iconPosition:"left"}},c={args:{href:"#",text:a,variant:"primary",icon:"fluent:arrow-right-24-regular",iconPosition:"right"}};var d,p,u;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    href: '#',
    text,
    variant: 'primary'
  }
}`,...(u=(p=n.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var m,f,g;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    href: '#',
    text,
    variant: 'secondary'
  }
}`,...(g=(f=s.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var y,h,v;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    href: '#',
    text,
    disabled: true
  }
}`,...(v=(h=i.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var b,_,x;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    href: '#',
    text,
    variant: 'primary',
    icon: 'fluent:arrow-left-24-regular',
    iconPosition: 'left'
  }
}`,...(x=(_=o.parameters)==null?void 0:_.docs)==null?void 0:x.source}}};var k,S,P;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    href: '#',
    text,
    variant: 'primary',
    icon: 'fluent:arrow-right-24-regular',
    iconPosition: 'right'
  }
}`,...(P=(S=c.parameters)==null?void 0:S.docs)==null?void 0:P.source}}};const W=["PrimaryActive","SecondaryActive","Disabled","WithLeadingIcon","WithTrailingIcon"];export{i as Disabled,n as PrimaryActive,s as SecondaryActive,o as WithLeadingIcon,c as WithTrailingIcon,W as __namedExportsOrder,B as default};
