import{B as l}from"./base-button-DRq3dh2S.js";import"./app-BQSE6mr4.js";import"./iconify-rQT97Fj4.js";import"./vue.esm-BaK_9ySz.js";const E={title:"UI/Button",component:l,tags:["autodocs"],render:(c,{argTypes:w})=>({props:Object.keys(w),components:{BaseButton:l},template:`
        <base-button v-bind="$props">
            <template v-if="${"default"in c}" v-slot>${c.default}</template>
        </base-button>`}),argTypes:{variant:{control:{type:"select"},options:["primary","secondary","flat"]},size:{control:{type:"select"},options:["lg","md","sm"]},outline:{control:"boolean"},iconOnly:{control:"boolean"},round:{control:"boolean"},isDisabled:{control:"boolean"},isLoading:{control:"boolean"}}},e="Button text",r={args:{variant:"primary",text:e}},o={args:{variant:"primary",outline:!0,text:e}},n={args:{icon:"fluent:home-24-regular",iconSize:"20px",isLeadingIcon:!0,default:e}},a={args:{icon:"fluent:arrow-right-24-regular",iconSize:"20px",isLeadingIcon:!1,default:e}},t={args:{icon:"fluent:home-24-regular",iconSize:"20px",isLeadingIcon:!1,iconOnly:!0,default:""}},s={args:{isLoading:!0,text:e}},i={args:{isDisabled:!0,text:e}};var u,p,d;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    text
  }
}`,...(d=(p=r.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var m,g,f;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    outline: true,
    text
  }
}`,...(f=(g=o.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var b,x,y;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    icon: "fluent:home-24-regular",
    iconSize: "20px",
    isLeadingIcon: true,
    default: text
  }
}`,...(y=(x=n.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var I,L,S;a.parameters={...a.parameters,docs:{...(I=a.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    icon: "fluent:arrow-right-24-regular",
    iconSize: "20px",
    isLeadingIcon: false,
    default: text
  }
}`,...(S=(L=a.parameters)==null?void 0:L.docs)==null?void 0:S.source}}};var h,O,v;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    icon: "fluent:home-24-regular",
    iconSize: "20px",
    isLeadingIcon: false,
    iconOnly: true,
    default: ""
  }
}`,...(v=(O=t.parameters)==null?void 0:O.docs)==null?void 0:v.source}}};var z,B,D;s.parameters={...s.parameters,docs:{...(z=s.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    isLoading: true,
    text
  }
}`,...(D=(B=s.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};var W,T,$;i.parameters={...i.parameters,docs:{...(W=i.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    isDisabled: true,
    text
  }
}`,...($=(T=i.parameters)==null?void 0:T.docs)==null?void 0:$.source}}};const U=["Filled","Outline","WithLeadingIcon","WithTrailingIcon","IconOnly","Loading","Disabled"];export{i as Disabled,r as Filled,t as IconOnly,s as Loading,o as Outline,n as WithLeadingIcon,a as WithTrailingIcon,U as __namedExportsOrder,E as default};
