import{b2 as g,bF as Le,bG as I,R as C,r as d,b3 as O,M as xe,a6 as Te,bz as ke,j as ze,bp as Ee}from"./index.Phesr84n.js";var y={small:"small",medium:"medium",large:"large"},_;function L(){return L=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},L.apply(this,arguments)}function ae(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,a)}return t}function P(e){for(var r=1;r<arguments.length;r++){var t=arguments[r]!=null?arguments[r]:{};r%2?ae(Object(t),!0).forEach(function(a){v(e,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ae(Object(t)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})}return e}function v(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function se(e){var r;return(r={},v(r,y.small,"2px"),v(r,y.medium,"4px"),v(r,y.large,"8px"),r)[e]}var A=g("div",function(e){return{width:"100%"}});A.displayName="StyledRoot";A.displayName="StyledRoot";var M=g("div",function(e){var r=e.$theme,t=r.sizing;return{display:"flex",marginLeft:t.scale500,marginRight:t.scale500,marginTop:t.scale500,marginBottom:t.scale500}});M.displayName="StyledBarContainer";M.displayName="StyledBarContainer";var D=g("div",function(e){var r=e.$theme,t=e.$size,a=e.$steps,n=r.colors,o=r.sizing,i=r.borders,s=i.useRoundedCorners?o.scale0:0;return P({borderTopLeftRadius:s,borderTopRightRadius:s,borderBottomRightRadius:s,borderBottomLeftRadius:s,backgroundColor:Le(n.progressbarTrackFill,"0.16"),height:se(t),flex:1,overflow:"hidden"},a<2?{}:{marginLeft:o.scale300,":first-child":{marginLeft:"0"}})});D.displayName="StyledBar";D.displayName="StyledBar";var H=g("div",function(e){var r=e.$theme,t=e.$value,a=e.$successValue,n=e.$steps,o=e.$index,i=e.$maxValue,s=e.$minValue,l=s===void 0?0:s,u=i||a,R=r.colors,B=r.sizing,$=r.borders,x="".concat(100-(t-l)*100/(u-l),"%"),m={default:"default",awaits:"awaits",inProgress:"inProgress",completed:"completed"},c=m.default;if(n>1){var T=(u-l)/n,j=(t-l)/(u-l)*100,k=Math.floor(j/T);o<k?c=m.completed:o===k?c=m.inProgress:c=m.awaits}var S=$.useRoundedCorners?B.scale0:0,b={transform:"translateX(-".concat(x,")")},N=c===m.inProgress?{animationDuration:"2.1s",animationIterationCount:"infinite",animationTimingFunction:r.animation.linearCurve,animationName:{"0%":{transform:"translateX(-102%)",opacity:1},"50%":{transform:"translateX(0%)",opacity:1},"100%":{transform:"translateX(0%)",opacity:0}}}:c===m.completed?{transform:"translateX(0%)"}:{transform:"translateX(-102%)"};return P({borderTopLeftRadius:S,borderTopRightRadius:S,borderBottomRightRadius:S,borderBottomLeftRadius:S,backgroundColor:R.accent,height:"100%",width:"100%",transform:"translateX(-102%)",transition:"transform 0.5s"},n>1?N:b)});H.displayName="StyledBarProgress";H.displayName="StyledBarProgress";var W=g("div",function(e){var r=e.$theme,t=e.$isLeft,a=t===void 0?!1:t,n=e.$size,o=n===void 0?y.medium:n,i=r.colors,s=r.sizing,l=r.borders,u=l.useRoundedCorners?s.scale0:0,R=se(o),B={display:"inline-block",flex:1,marginLeft:"auto",marginRight:"auto",transitionProperty:"background-position",animationDuration:"1.5s",animationIterationCount:"infinite",animationTimingFunction:r.animation.linearCurve,backgroundSize:"300% auto",backgroundRepeat:"no-repeat",backgroundPositionX:a?"-50%":"150%",backgroundImage:"linear-gradient(".concat(a?"90":"270","deg, transparent 0%, ").concat(i.accent," 25%, ").concat(i.accent," 75%, transparent 100%)"),animationName:a?{"0%":{backgroundPositionX:"-50%"},"33%":{backgroundPositionX:"50%"},"66%":{backgroundPositionX:"50%"},"100%":{backgroundPositionX:"150%"}}:{"0%":{backgroundPositionX:"150%"},"33%":{backgroundPositionX:"50%"},"66%":{backgroundPositionX:"50%"},"100%":{backgroundPositionX:"-50%"}}};return P(P({},a?{borderTopLeftRadius:u,borderBottomLeftRadius:u}:{borderTopRightRadius:u,borderBottomRightRadius:u}),{},{height:R},B)});W.displayName="StyledInfiniteBar";W.displayName="StyledInfiniteBar";var F=g("div",function(e){return P(P({textAlign:"center"},e.$theme.typography.font150),{},{color:e.$theme.colors.contentTertiary})});F.displayName="StyledLabel";F.displayName="StyledLabel";var f=(_={},v(_,y.large,{d:"M47.5 4H71.5529C82.2933 4 91 12.9543 91 24C91 35.0457 82.2933 44 71.5529 44H23.4471C12.7067 44 4 35.0457 4 24C4 12.9543 12.7067 4 23.4471 4H47.5195",width:95,height:48,strokeWidth:8,typography:"LabelLarge"}),v(_,y.medium,{d:"M39 2H60.5833C69.0977 2 76 9.16344 76 18C76 26.8366 69.0977 34 60.5833 34H17.4167C8.90228 34 2 26.8366 2 18C2 9.16344 8.90228 2 17.4167 2H39.0195",width:78,height:36,strokeWidth:4,typography:"LabelMedium"}),v(_,y.small,{d:"M32 1H51.6271C57.9082 1 63 6.37258 63 13C63 19.6274 57.9082 25 51.6271 25H12.3729C6.09181 25 1 19.6274 1 13C1 6.37258 6.09181 1 12.3729 1H32.0195",width:64,height:26,strokeWidth:2,typography:"LabelSmall"}),_),le=g("div",function(e){var r=e.$size,t=e.$inline;return{width:f[r].width+"px",height:f[r].height+"px",position:"relative",display:t?"inline-flex":"flex",alignItems:"center",justifyContent:"center"}});le.displayName="StyledProgressBarRoundedRoot";le.displayName="StyledProgressBarRoundedRoot";var G=g("svg",function(e){var r=e.$size;return{width:f[r].width+"px",height:f[r].height+"px",position:"absolute",fill:"none"}});G.displayName="_StyledProgressBarRoundedSvg";G.displayName="_StyledProgressBarRoundedSvg";I(G,function(e){return function(t){return C.createElement(e,L({viewBox:"0 0 ".concat(f[t.$size].width," ").concat(f[t.$size].height),xmlns:"http://www.w3.org/2000/svg"},t))}});var U=g("path",function(e){var r=e.$theme,t=e.$size;return{stroke:r.colors.backgroundTertiary,strokeWidth:f[t].strokeWidth+"px"}});U.displayName="_StyledProgressBarRoundedTrackBackground";U.displayName="_StyledProgressBarRoundedTrackBackground";I(U,function(e){return function(t){return C.createElement(e,L({d:f[t.$size].d},t))}});var Z=g("path",function(e){var r=e.$theme,t=e.$size,a=e.$visible,n=e.$pathLength,o=e.$pathProgress;return{visibility:a?"visible":"hidden",stroke:r.colors.borderAccent,strokeWidth:f[t].strokeWidth+"px",strokeDasharray:n,strokeDashoffset:n*(1-o)+""}});Z.displayName="_StyledProgressBarRoundedTrackForeground";Z.displayName="_StyledProgressBarRoundedTrackForeground";I(Z,function(e){return function(t){return C.createElement(e,L({d:f[t.$size].d},t))}});var ue=g("div",function(e){var r=e.$theme,t=e.$size;return P({color:r.colors.contentPrimary},r.typography[f[t].typography])});ue.displayName="StyledProgressBarRoundedText";ue.displayName="StyledProgressBarRoundedText";function X(e){"@babel/helpers - typeof";return X=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},X(e)}var Ce=["overrides","getProgressLabel","value","size","steps","successValue","minValue","maxValue","showLabel","infinite","errorMessage","forwardedRef"];function p(){return p=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},p.apply(this,arguments)}function w(e,r){return Ve(e)||Xe(e,r)||Ne(e,r)||je()}function je(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ne(e,r){if(e){if(typeof e=="string")return oe(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return oe(e,r)}}function oe(e,r){(r==null||r>e.length)&&(r=e.length);for(var t=0,a=new Array(r);t<r;t++)a[t]=e[t];return a}function Xe(e,r){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var a=[],n=!0,o=!1,i,s;try{for(t=t.call(e);!(n=(i=t.next()).done)&&(a.push(i.value),!(r&&a.length===r));n=!0);}catch(l){o=!0,s=l}finally{try{!n&&t.return!=null&&t.return()}finally{if(o)throw s}}return a}}function Ve(e){if(Array.isArray(e))return e}function Ie(e,r){if(e==null)return{};var t=Ae(e,r),a,n;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],!(r.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}function Ae(e,r){if(e==null)return{};var t={},a=Object.keys(e),n,o;for(o=0;o<a.length;o++)n=a[o],!(r.indexOf(n)>=0)&&(t[n]=e[n]);return t}function Me(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function De(e,r){for(var t=0;t<r.length;t++){var a=r[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function He(e,r,t){return r&&De(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function We(e,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),r&&V(e,r)}function V(e,r){return V=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(a,n){return a.__proto__=n,a},V(e,r)}function Fe(e){var r=Ze();return function(){var a=E(e),n;if(r){var o=E(this).constructor;n=Reflect.construct(a,arguments,o)}else n=a.apply(this,arguments);return Ge(this,n)}}function Ge(e,r){if(r&&(X(r)==="object"||typeof r=="function"))return r;if(r!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Ue(e)}function Ue(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Ze(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function E(e){return E=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},E(e)}function Ke(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var de=function(e){We(t,e);var r=Fe(t);function t(){return Me(this,t),r.apply(this,arguments)}return He(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var n=this.props,o=n.overrides,i=o===void 0?{}:o,s=n.getProgressLabel,l=n.value,u=n.size,R=n.steps,B=n.successValue,$=n.minValue,x=n.maxValue,m=n.showLabel,c=n.infinite,T=n.errorMessage,j=n.forwardedRef,k=Ie(n,Ce),S=this.props["aria-label"]||this.props.ariaLabel,b=x!==100?x:B,N=O(i.Root,A),K=w(N,2),fe=K[0],ge=K[1],pe=O(i.BarContainer,M),q=w(pe,2),me=q[0],ye=q[1],be=O(i.Bar,D),J=w(be,2),he=J[0],ve=J[1],Pe=O(i.BarProgress,H),Q=w(Pe,2),Re=Q[0],$e=Q[1],Se=O(i.Label,F),Y=w(Se,2),Oe=Y[0],we=Y[1],Be=O(i.InfiniteBar,W),ee=w(Be,2),re=ee[0],te=ee[1],h={$infinite:c,$size:u,$steps:R,$successValue:b,$minValue:$,$maxValue:b,$value:l};function _e(){for(var ne=[],z=0;z<R;z++)ne.push(d.createElement(he,p({key:z},h,ve),d.createElement(Re,p({$index:z},h,$e))));return ne}return d.createElement(fe,p({ref:j,"data-baseweb":"progress-bar",role:"progressbar","aria-label":S||s(l,b,$),"aria-valuenow":c?null:l,"aria-valuemin":c?null:$,"aria-valuemax":c?null:b,"aria-invalid":T?!0:null,"aria-errormessage":T},k,h,ge),d.createElement(me,p({},h,ye),c?d.createElement(d.Fragment,null,d.createElement(re,p({$isLeft:!0,$size:h.$size},te)),d.createElement(re,p({$size:h.$size},te))):_e()),m&&d.createElement(Oe,p({},h,we),s(l,b,$)))}}]),t}(d.Component);Ke(de,"defaultProps",{getProgressLabel:function(r,t,a){return"".concat(Math.round((r-a)/(t-a)*100),"% Loaded")},infinite:!1,overrides:{},showLabel:!1,size:y.medium,steps:1,successValue:100,minValue:0,maxValue:100,value:0});var ce=d.forwardRef(function(e,r){return d.createElement(de,p({forwardedRef:r},e))});ce.displayName="ProgressBar";var ie;(function(e){e.EXTRASMALL="xs",e.SMALL="sm",e.MEDIUM="md",e.LARGE="lg",e.EXTRALARGE="xl"})(ie||(ie={}));function Je({value:e,width:r,size:t="sm",overrides:a}){const n=xe(),o={xs:n.spacing.twoXS,sm:n.spacing.sm,md:n.spacing.lg,lg:n.spacing.xl,xl:n.spacing.twoXL},{activeTheme:i}=C.useContext(Te),s=!ke(i),l={BarContainer:{style:{marginTop:n.spacing.none,marginBottom:n.spacing.none,marginRight:n.spacing.none,marginLeft:n.spacing.none}},Bar:{style:({$theme:u})=>({width:r?r.toString():void 0,marginTop:n.spacing.none,marginBottom:n.spacing.none,marginRight:n.spacing.none,marginLeft:n.spacing.none,height:o[t],backgroundColor:u.colors.progressbarTrackFill,borderTopLeftRadius:n.spacing.twoXS,borderTopRightRadius:n.spacing.twoXS,borderBottomLeftRadius:n.spacing.twoXS,borderBottomRightRadius:n.spacing.twoXS})},BarProgress:{style:()=>({backgroundColor:s?n.colors.primary:n.colors.blue70,borderTopLeftRadius:n.spacing.twoXS,borderTopRightRadius:n.spacing.twoXS,borderBottomLeftRadius:n.spacing.twoXS,borderBottomRightRadius:n.spacing.twoXS})}};return ze(ce,{value:e,overrides:Ee(l,a)})}export{Je as P,ie as S};