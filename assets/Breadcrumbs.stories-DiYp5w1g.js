import{n as l}from"./app-BQSE6mr4.js";const u={props:{items:{type:Array,default:()=>[]}},computed:{renderedItems(){if(this.items.length>4){const t=this.items.slice(0,1),e=this.items.slice(-2);return[...t,{text:"...",href:"#"},...e]}return this.items}},methods:{handleItemClick(t){this.$emit("breadcrumb-click",t)}}};var p=function(){var e=this,a=e._self._c;return a("b-breadcrumb",{staticClass:"breadcrumbs"},[e.items&&e.items.length>0?e._l(e.renderedItems,function(s,n){return a("b-breadcrumb-item",{key:n,attrs:{href:s.href,active:n===e.renderedItems.length-1},on:{click:function(h){return e.handleItemClick(s)}}},[e._v(" "+e._s(s.text)+" ")])}):e._t("default")],2)},f=[],d=l(u,p,f,!1,null,null);const o=d.exports;d.exports.__docgenInfo={exportName:"default",displayName:"breadcrumbs",description:"",tags:{},props:[{name:"items",type:{name:"array"},defaultValue:{func:!1,value:"[]"}}],events:[{name:"breadcrumb-click",type:{names:["undefined"]}}],slots:[{name:"default"}],sourceFiles:["/Users/agoiabel/code/withpropel/resources/js/components/reusables/breadcrumbs.vue"]};const _={title:"UI/Breadcrumbs",component:o,tags:["autodocs"],render:(t,{argTypes:e})=>({props:Object.keys(e),components:{Breadcrumbs:o},template:`
        <breadcrumbs v-bind="$props">
            <template v-if="${"default"in t}" v-slot>${t.default}</template>
        </breadcrumbs>`}),argTypes:{}},r={args:{items:[{text:"Home page",href:"#"},{text:"Previous page",href:"#"},{text:"hidden page",href:"#"},{text:"Previos page",href:"#"},{text:"Current page",href:"#"}]}};var c,i,m;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    items: [{
      text: "Home page",
      href: "#"
    }, {
      text: "Previous page",
      href: "#"
    }, {
      text: "hidden page",
      href: "#"
    }, {
      text: "Previos page",
      href: "#"
    }, {
      text: "Current page",
      href: "#"
    }]
  }
}`,...(m=(i=r.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const g=["Default"];export{r as Default,g as __namedExportsOrder,_ as default};
