(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,a,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return o(8371)}])},8371:function(e,a,o){"use strict";o.r(a),o.d(a,{default:function(){return w}});var t=o(5893),l=o(3366),r=o(7462),n=o(7294),i=o(512),c=o(8510),s=o(2101),d=(0,o(8169).Z)((0,t.jsx)("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel"),p=o(1705),v=o(8216),u=o(2607),m=o(3616),g=o(948),b=o(1977),h=o(8027);function $(e){return(0,h.ZP)("MuiChip",e)}let f=(0,b.Z)("MuiChip",["root","sizeSmall","sizeMedium","colorError","colorInfo","colorPrimary","colorSecondary","colorSuccess","colorWarning","disabled","clickable","clickableColorPrimary","clickableColorSecondary","deletable","deletableColorPrimary","deletableColorSecondary","outlined","filled","outlinedPrimary","outlinedSecondary","filledPrimary","filledSecondary","avatar","avatarSmall","avatarMedium","avatarColorPrimary","avatarColorSecondary","icon","iconSmall","iconMedium","iconColorPrimary","iconColorSecondary","label","labelSmall","labelMedium","deleteIcon","deleteIconSmall","deleteIconMedium","deleteIconColorPrimary","deleteIconColorSecondary","deleteIconOutlinedColorPrimary","deleteIconOutlinedColorSecondary","deleteIconFilledColorPrimary","deleteIconFilledColorSecondary","focusVisible"]),C=["avatar","className","clickable","color","component","deleteIcon","disabled","icon","label","onClick","onDelete","onKeyDown","onKeyUp","size","variant","tabIndex","skipFocusWhenDisabled"],y=e=>{let{classes:a,disabled:o,size:t,color:l,iconColor:r,onDelete:n,clickable:i,variant:s}=e,d={root:["root",s,o&&"disabled",`size${(0,v.Z)(t)}`,`color${(0,v.Z)(l)}`,i&&"clickable",i&&`clickableColor${(0,v.Z)(l)}`,n&&"deletable",n&&`deletableColor${(0,v.Z)(l)}`,`${s}${(0,v.Z)(l)}`],label:["label",`label${(0,v.Z)(t)}`],avatar:["avatar",`avatar${(0,v.Z)(t)}`,`avatarColor${(0,v.Z)(l)}`],icon:["icon",`icon${(0,v.Z)(t)}`,`iconColor${(0,v.Z)(r)}`],deleteIcon:["deleteIcon",`deleteIcon${(0,v.Z)(t)}`,`deleteIconColor${(0,v.Z)(l)}`,`deleteIcon${(0,v.Z)(s)}Color${(0,v.Z)(l)}`]};return(0,c.Z)(d,$,a)},Z=(0,g.ZP)("div",{name:"MuiChip",slot:"Root",overridesResolver:(e,a)=>{let{ownerState:o}=e,{color:t,iconColor:l,clickable:r,onDelete:n,size:i,variant:c}=o;return[{[`& .${f.avatar}`]:a.avatar},{[`& .${f.avatar}`]:a[`avatar${(0,v.Z)(i)}`]},{[`& .${f.avatar}`]:a[`avatarColor${(0,v.Z)(t)}`]},{[`& .${f.icon}`]:a.icon},{[`& .${f.icon}`]:a[`icon${(0,v.Z)(i)}`]},{[`& .${f.icon}`]:a[`iconColor${(0,v.Z)(l)}`]},{[`& .${f.deleteIcon}`]:a.deleteIcon},{[`& .${f.deleteIcon}`]:a[`deleteIcon${(0,v.Z)(i)}`]},{[`& .${f.deleteIcon}`]:a[`deleteIconColor${(0,v.Z)(t)}`]},{[`& .${f.deleteIcon}`]:a[`deleteIcon${(0,v.Z)(c)}Color${(0,v.Z)(t)}`]},a.root,a[`size${(0,v.Z)(i)}`],a[`color${(0,v.Z)(t)}`],r&&a.clickable,r&&"default"!==t&&a[`clickableColor${(0,v.Z)(t)})`],n&&a.deletable,n&&"default"!==t&&a[`deletableColor${(0,v.Z)(t)}`],a[c],a[`${c}${(0,v.Z)(t)}`]]}})(({theme:e,ownerState:a})=>{let o="light"===e.palette.mode?e.palette.grey[700]:e.palette.grey[300];return(0,r.Z)({maxWidth:"100%",fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(13),display:"inline-flex",alignItems:"center",justifyContent:"center",height:32,color:(e.vars||e).palette.text.primary,backgroundColor:(e.vars||e).palette.action.selected,borderRadius:16,whiteSpace:"nowrap",transition:e.transitions.create(["background-color","box-shadow"]),cursor:"unset",outline:0,textDecoration:"none",border:0,padding:0,verticalAlign:"middle",boxSizing:"border-box",[`&.${f.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity,pointerEvents:"none"},[`& .${f.avatar}`]:{marginLeft:5,marginRight:-6,width:24,height:24,color:e.vars?e.vars.palette.Chip.defaultAvatarColor:o,fontSize:e.typography.pxToRem(12)},[`& .${f.avatarColorPrimary}`]:{color:(e.vars||e).palette.primary.contrastText,backgroundColor:(e.vars||e).palette.primary.dark},[`& .${f.avatarColorSecondary}`]:{color:(e.vars||e).palette.secondary.contrastText,backgroundColor:(e.vars||e).palette.secondary.dark},[`& .${f.avatarSmall}`]:{marginLeft:4,marginRight:-4,width:18,height:18,fontSize:e.typography.pxToRem(10)},[`& .${f.icon}`]:(0,r.Z)({marginLeft:5,marginRight:-6},"small"===a.size&&{fontSize:18,marginLeft:4,marginRight:-4},a.iconColor===a.color&&(0,r.Z)({color:e.vars?e.vars.palette.Chip.defaultIconColor:o},"default"!==a.color&&{color:"inherit"})),[`& .${f.deleteIcon}`]:(0,r.Z)({WebkitTapHighlightColor:"transparent",color:e.vars?`rgba(${e.vars.palette.text.primaryChannel} / 0.26)`:(0,s.Fq)(e.palette.text.primary,.26),fontSize:22,cursor:"pointer",margin:"0 5px 0 -6px","&:hover":{color:e.vars?`rgba(${e.vars.palette.text.primaryChannel} / 0.4)`:(0,s.Fq)(e.palette.text.primary,.4)}},"small"===a.size&&{fontSize:16,marginRight:4,marginLeft:-4},"default"!==a.color&&{color:e.vars?`rgba(${e.vars.palette[a.color].contrastTextChannel} / 0.7)`:(0,s.Fq)(e.palette[a.color].contrastText,.7),"&:hover, &:active":{color:(e.vars||e).palette[a.color].contrastText}})},"small"===a.size&&{height:24},"default"!==a.color&&{backgroundColor:(e.vars||e).palette[a.color].main,color:(e.vars||e).palette[a.color].contrastText},a.onDelete&&{[`&.${f.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:(0,s.Fq)(e.palette.action.selected,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},a.onDelete&&"default"!==a.color&&{[`&.${f.focusVisible}`]:{backgroundColor:(e.vars||e).palette[a.color].dark}})},({theme:e,ownerState:a})=>(0,r.Z)({},a.clickable&&{userSelect:"none",WebkitTapHighlightColor:"transparent",cursor:"pointer","&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:(0,s.Fq)(e.palette.action.selected,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity)},[`&.${f.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:(0,s.Fq)(e.palette.action.selected,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)},"&:active":{boxShadow:(e.vars||e).shadows[1]}},a.clickable&&"default"!==a.color&&{[`&:hover, &.${f.focusVisible}`]:{backgroundColor:(e.vars||e).palette[a.color].dark}}),({theme:e,ownerState:a})=>(0,r.Z)({},"outlined"===a.variant&&{backgroundColor:"transparent",border:e.vars?`1px solid ${e.vars.palette.Chip.defaultBorder}`:`1px solid ${"light"===e.palette.mode?e.palette.grey[400]:e.palette.grey[700]}`,[`&.${f.clickable}:hover`]:{backgroundColor:(e.vars||e).palette.action.hover},[`&.${f.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`& .${f.avatar}`]:{marginLeft:4},[`& .${f.avatarSmall}`]:{marginLeft:2},[`& .${f.icon}`]:{marginLeft:4},[`& .${f.iconSmall}`]:{marginLeft:2},[`& .${f.deleteIcon}`]:{marginRight:5},[`& .${f.deleteIconSmall}`]:{marginRight:3}},"outlined"===a.variant&&"default"!==a.color&&{color:(e.vars||e).palette[a.color].main,border:`1px solid ${e.vars?`rgba(${e.vars.palette[a.color].mainChannel} / 0.7)`:(0,s.Fq)(e.palette[a.color].main,.7)}`,[`&.${f.clickable}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette[a.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,s.Fq)(e.palette[a.color].main,e.palette.action.hoverOpacity)},[`&.${f.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette[a.color].mainChannel} / ${e.vars.palette.action.focusOpacity})`:(0,s.Fq)(e.palette[a.color].main,e.palette.action.focusOpacity)},[`& .${f.deleteIcon}`]:{color:e.vars?`rgba(${e.vars.palette[a.color].mainChannel} / 0.7)`:(0,s.Fq)(e.palette[a.color].main,.7),"&:hover, &:active":{color:(e.vars||e).palette[a.color].main}}})),k=(0,g.ZP)("span",{name:"MuiChip",slot:"Label",overridesResolver:(e,a)=>{let{ownerState:o}=e,{size:t}=o;return[a.label,a[`label${(0,v.Z)(t)}`]]}})(({ownerState:e})=>(0,r.Z)({overflow:"hidden",textOverflow:"ellipsis",paddingLeft:12,paddingRight:12,whiteSpace:"nowrap"},"outlined"===e.variant&&{paddingLeft:11,paddingRight:11},"small"===e.size&&{paddingLeft:8,paddingRight:8},"small"===e.size&&"outlined"===e.variant&&{paddingLeft:7,paddingRight:7}));function x(e){return"Backspace"===e.key||"Delete"===e.key}let I=n.forwardRef(function(e,a){let o=(0,m.Z)({props:e,name:"MuiChip"}),{avatar:c,className:s,clickable:v,color:g="default",component:b,deleteIcon:h,disabled:$=!1,icon:f,label:I,onClick:S,onDelete:w,onKeyDown:O,onKeyUp:R,size:z="medium",variant:P="filled",tabIndex:N,skipFocusWhenDisabled:E=!1}=o,F=(0,l.Z)(o,C),L=n.useRef(null),T=(0,p.Z)(L,a),V=e=>{e.stopPropagation(),w&&w(e)},_=!1!==v&&!!S||v,D=_||w?u.Z:b||"div",M=(0,r.Z)({},o,{component:D,disabled:$,size:z,color:g,iconColor:n.isValidElement(f)&&f.props.color||g,onDelete:!!w,clickable:_,variant:P}),j=y(M),q=D===u.Z?(0,r.Z)({component:b||"div",focusVisibleClassName:j.focusVisible},w&&{disableRipple:!0}):{},W=null;w&&(W=h&&n.isValidElement(h)?n.cloneElement(h,{className:(0,i.Z)(h.props.className,j.deleteIcon),onClick:V}):(0,t.jsx)(d,{className:(0,i.Z)(j.deleteIcon),onClick:V}));let K=null;c&&n.isValidElement(c)&&(K=n.cloneElement(c,{className:(0,i.Z)(j.avatar,c.props.className)}));let B=null;return f&&n.isValidElement(f)&&(B=n.cloneElement(f,{className:(0,i.Z)(j.icon,f.props.className)})),(0,t.jsxs)(Z,(0,r.Z)({as:D,className:(0,i.Z)(j.root,s),disabled:!!_&&!!$||void 0,onClick:S,onKeyDown:e=>{e.currentTarget===e.target&&x(e)&&e.preventDefault(),O&&O(e)},onKeyUp:e=>{e.currentTarget===e.target&&(w&&x(e)?w(e):"Escape"===e.key&&L.current&&L.current.blur()),R&&R(e)},ref:T,tabIndex:E&&$?-1:N,ownerState:M},q,F,{children:[K||B,(0,t.jsx)(k,{className:(0,i.Z)(j.label),ownerState:M,children:I}),W]}))});var S=()=>(0,t.jsx)("div",{style:{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",height:"100vh"},children:(0,t.jsx)(I,{label:"Welcome to the Bacarat Game"})}),w=()=>(0,t.jsx)("div",{children:(0,t.jsx)(S,{})})}},function(e){e.O(0,[888,774,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);