import{n as u}from"./app-BQSE6mr4.js";const m={name:"Divider",props:{orientation:{type:String,default:"horizontal",validator:function(r){return["horizontal","vertical"].indexOf(r)!==-1}},width:{type:String,default:"1px"},height:{type:String,default:"100px"},additionalClasses:{type:[String,Array,Object],default:""}},computed:{orientationClass(){return{"divider-horizontal":this.orientation==="horizontal","divider-vertical":this.orientation==="vertical"}},dividerStyle(){return this.orientation==="horizontal"?{height:this.width,width:this.height}:{width:this.width,height:this.height}}}};var v=function(){var e=this,h=e._self._c;return h("div",{class:["divider",e.orientationClass,e.additionalClasses],style:e.dividerStyle})},f=[],p=u(m,v,f,!1,null,"540f2b95");const a=p.exports;p.exports.__docgenInfo={displayName:"Divider",exportName:"default",description:"",tags:{},props:[{name:"orientation",type:{name:"string"},defaultValue:{func:!1,value:"'horizontal'"},values:["horizontal","vertical"]},{name:"width",type:{name:"string"},defaultValue:{func:!1,value:"'1px'"}},{name:"height",type:{name:"string"},defaultValue:{func:!1,value:"'100px'"}},{name:"additionalClasses",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}}],sourceFiles:["/Users/agoiabel/code/withpropel/resources/js/components/reusables/dividers/base-divider.vue"]};const x={title:"UI/Divider",component:a,tags:["autodocs"],render:(r,{argTypes:e})=>({props:Object.keys(e),components:{Divider:a},template:'<Divider v-bind="$props" />'}),argTypes:{orientation:{control:{type:"select"},options:["horizontal","vertical"],description:"Orientation of the divider"},width:{control:"text",description:"Width of the divider"},height:{control:"text",description:"Height of the divider"},additionalClasses:{control:"text",description:"Custom CSS class for additional styling"}}},t={args:{orientation:"horizontal",width:"1px",height:"100px",customClass:""}},i={args:{orientation:"vertical",width:"1px",height:"100px",customClass:""}};var o,n,s;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    orientation: 'horizontal',
    width: '1px',
    height: '100px',
    customClass: ''
  }
}`,...(s=(n=t.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};var l,d,c;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    orientation: 'vertical',
    width: '1px',
    height: '100px',
    customClass: ''
  }
}`,...(c=(d=i.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const _=["Horizontal","Vertical"];export{t as Horizontal,i as Vertical,_ as __namedExportsOrder,x as default};
