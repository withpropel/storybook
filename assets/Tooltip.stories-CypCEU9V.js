import{I}from"./iconify-rQT97Fj4.js";import{n as P}from"./app-BQSE6mr4.js";import"./vue.esm-BaK_9ySz.js";const b={name:"TooltipComponent",components:{Icon:I},props:{text:{type:String,required:!0},variant:{type:String,default:"arrow-up",validator:r=>["arrow-up","arrow-down","arrow-left","arrow-right"].includes(r)},icon:{type:String,default:""},iconPosition:{type:String,default:"right",validator:r=>["left","right"].includes(r)},onClose:{type:Function,default:null}}};var R=function(){var t=this,o=t._self._c;return o("div",{class:["tooltip",t.variant,{"with-icon":t.icon}]},[o("div",{staticClass:"tooltip-content"},[t.icon&&t.iconPosition==="left"?o("Icon",{staticClass:"tooltip-icon-left",attrs:{icon:t.icon},on:{click:function(A){return this.onClose()}}}):t._e(),o("span",[t._v(t._s(t.text))]),t.icon&&t.iconPosition==="right"?o("Icon",{staticClass:"tooltip-icon-right",attrs:{icon:t.icon},on:{click:function(A){return this.onClose()}}}):t._e()],1),o("div",{class:["tooltip-arrow",t.variant]})])},U=[],S=P(b,R,U,!1,null,"bc9290ef");const c=S.exports;S.exports.__docgenInfo={displayName:"TooltipComponent",exportName:"default",description:"",tags:{},props:[{name:"text",type:{name:"string"},required:!0},{name:"variant",type:{name:"string"},defaultValue:{func:!1,value:"'arrow-up'"},values:["arrow-up","arrow-down","arrow-left","arrow-right"]},{name:"icon",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"iconPosition",type:{name:"string"},defaultValue:{func:!1,value:"'right'"},values:["left","right"]},{name:"onClose",type:{name:"func"},defaultValue:{func:!1,value:"null"}}],sourceFiles:["/Users/agoiabel/code/withpropel/resources/js/components/reusables/tooltips/base-tooltip.vue"]};const $={title:"UI/Tooltip",component:c,tags:["autodocs"],render:(r,{argTypes:t})=>({props:Object.keys(t),components:{TooltipComponent:c},template:'<TooltipComponent v-bind="$props" />'}),argTypes:{variant:{control:{type:"select"},options:["arrow-up","arrow-down","arrow-left","arrow-right"]},text:{control:"text"},icon:{control:"text"},iconPosition:{control:{type:"select"},options:["left","right"]}}},e={args:{text:"Tooltip text",variant:"arrow-up"}},n={args:{text:"Tooltip text",variant:"arrow-down"}},a={args:{text:"Tooltip text",variant:"arrow-left"}},i={args:{text:"Tooltip text",variant:"arrow-right"}},s={args:{text:"Tooltip with icon",variant:"arrow-up",icon:"fluent:dismiss-24-regular",iconPosition:"right"}};var l,p,u;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    text: "Tooltip text",
    variant: "arrow-up"
  }
}`,...(u=(p=e.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var m,d,g;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    text: "Tooltip text",
    variant: "arrow-down"
  }
}`,...(g=(d=n.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var f,w,v;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    text: "Tooltip text",
    variant: "arrow-left"
  }
}`,...(v=(w=a.parameters)==null?void 0:w.docs)==null?void 0:v.source}}};var x,h,_;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    text: "Tooltip text",
    variant: "arrow-right"
  }
}`,...(_=(h=i.parameters)==null?void 0:h.docs)==null?void 0:_.source}}};var T,y,C;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    text: "Tooltip with icon",
    variant: "arrow-up",
    icon: "fluent:dismiss-24-regular",
    iconPosition: "right"
  }
}`,...(C=(y=s.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};const j=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","WithIconRight"];export{n as ArrowDown,a as ArrowLeft,i as ArrowRight,e as ArrowUp,s as WithIconRight,j as __namedExportsOrder,$ as default};
