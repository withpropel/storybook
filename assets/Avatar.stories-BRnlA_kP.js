import{A as t}from"./avatar-pZqWnf-t.js";import"./app-BQSE6mr4.js";const I={title:"UI/Avatar",component:t,tags:["autodocs"],render:(C,{argTypes:x})=>({props:Object.keys(x),components:{Avatar:t},template:'<avatar v-bind="$props" />'}),argTypes:{variant:{control:{type:"select"},options:["image","person","community","community-logo"]},imageSrc:{control:{type:"text"},description:"Path to the image. i.e. /images/avatars/Community.svg , /images/avatars/Image.png  or URL"},size:{control:{type:"text"},description:"size in pixel"}}},a={args:{variant:"person"}},r={args:{variant:"image"}},e={args:{variant:"community"}},o={args:{variant:"community-logo"}};var s,n,m;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    variant: "person"
  }
}`,...(m=(n=a.parameters)==null?void 0:n.docs)==null?void 0:m.source}}};var i,c,p;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    variant: "image"
  }
}`,...(p=(c=r.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var g,u,d;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    variant: "community"
  }
}`,...(d=(u=e.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var v,y,l;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    variant: "community-logo"
  }
}`,...(l=(y=o.parameters)==null?void 0:y.docs)==null?void 0:l.source}}};const L=["Person","Image","Community","CommunityLogo"];export{e as Community,o as CommunityLogo,r as Image,a as Person,L as __namedExportsOrder,I as default};
