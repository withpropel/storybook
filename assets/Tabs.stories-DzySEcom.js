import{n as d}from"./app-BQSE6mr4.js";const c={props:{classes:{type:String,default:""},tabs:{type:Array,default:()=>[]},fill:{type:Boolean,default:!1},justified:{type:Boolean,default:!1},pills:{type:Boolean,default:!1},cards:{type:Boolean,default:!1},align:{type:String,default:"left",validator:function(a){return["left","center","right"].indexOf(a)!==-1}},lazy:{type:Boolean,default:!1}},data(){return{selected:this.tabs[0]}},methods:{onChangeTab(a){this.selected=a,this.$emit("change")}}};var p=function(){var e=this,t=e._self._c;return t("b-tabs",{staticClass:"base-tabs",attrs:{"content-class":e.classes,fill:e.fill,justified:e.justified,pills:e.pills,cards:e.cards,align:e.align,lazy:e.lazy}},[e.tabs&&e.tabs.length>0?e._l(e.tabs,function(s,u){return t("b-tab",{key:`dyn-tab-${u}`,attrs:{active:e.selected},scopedSlots:e._u([{key:"title",fn:function(){return[t("Icon",{attrs:{icon:s.icon,width:"20px",height:"20px"}}),t("span",{staticClass:"base-tabs__title"},[e._v(e._s(s.title))]),t("span",{staticClass:"base-tabs__badge"},[e._v(e._s(s.badge))])]},proxy:!0}],null,!0)},[t("div",{domProps:{innerHTML:e._s(s.body)}})])}):e._t("default")],2)},b=[],r=d(c,p,b,!1,null,null);const n=r.exports;r.exports.__docgenInfo={exportName:"default",displayName:"base-tabs",description:"",tags:{},props:[{name:"classes",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"tabs",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"fill",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"justified",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"pills",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"cards",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"align",type:{name:"string"},defaultValue:{func:!1,value:'"left"'},values:["left","center","right"]},{name:"lazy",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"change"}],slots:[{name:"default"}],sourceFiles:["/Users/agoiabel/code/withpropel/resources/js/components/reusables/tabs/base-tabs.vue"]};const y={title:"UI/Tabs",component:n,tags:["autodocs"],render:(a,{argTypes:e})=>({props:Object.keys(e),components:{BaseTabs:n},template:`
        <base-tabs v-bind="$props">
            <template v-if="${"default"in a}" v-slot>${a.default}</template>
        </base-tabs>;`}),argTypes:{classes:{control:"boolean"}}},l={args:{classes:"",tabs:[{title:"Label",badge:"9+",icon:"fluent:toolbox-24-filled",body:"<p>This is a test with 9+ badge</p>"},{title:"Label",badge:"10+",icon:"fluent:toolbox-24-filled",body:"<p>This is a test with 10+ badge</p>"}]}};var o,i,f;l.parameters={...l.parameters,docs:{...(o=l.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    classes: "",
    tabs: [{
      title: "Label",
      badge: "9+",
      icon: "fluent:toolbox-24-filled",
      body: \`<p>This is a test with 9+ badge</p>\`
    }, {
      title: "Label",
      badge: "10+",
      icon: "fluent:toolbox-24-filled",
      body: \`<p>This is a test with 10+ badge</p>\`
    }]
  }
}`,...(f=(i=l.parameters)==null?void 0:i.docs)==null?void 0:f.source}}};const g=["Default"];export{l as Default,g as __namedExportsOrder,y as default};
