"use strict";(self.webpackChunkweather_app=self.webpackChunkweather_app||[]).push([[35],{35:(e,s,i)=>{i.r(s),i.d(s,{default:()=>a});var n=i(43),d=i(519),l=i(216),t=i(166),c=i(117),r=i(713),o=i(579);function a(){var e;const{data:s,loading:i}=(0,n.useContext)(l.j),{t:a,i18n:h}=(0,c.Bd)();return(0,o.jsxs)("section",{className:"home d-flex flex-column",style:{paddingTop:"10em"},children:[(0,o.jsx)(t.A,{}),""!=s?(0,o.jsxs)(d.A,{children:[(0,o.jsxs)("div",{className:"main__card",children:[(0,o.jsxs)("h1",{children:[a("country"),": ",null===s||void 0===s?void 0:s.location.country]}),(0,o.jsxs)("h2",{children:[a("temp"),":"," "+(null===s||void 0===s?void 0:s.current.temp_c),(0,o.jsx)("sup",{children:"o"})]}),(0,o.jsxs)("p",{children:[a("city")," : ",null===s||void 0===s?void 0:s.location.name]}),(0,o.jsxs)("p",{children:[a("timeZone")," : ",null===s||void 0===s?void 0:s.location.tz_id]}),(0,o.jsx)("span",{children:null===s||void 0===s?void 0:s.current.condition.text}),(0,o.jsx)("img",{src:null===s||void 0===s?void 0:s.current.condition.icon,alt:"weather icon"})]}),(0,o.jsx)("table",{className:"mt-3 w-100",children:(0,o.jsx)("tbody",{children:null===s||void 0===s||null===(e=s.forecast.forecastday)||void 0===e?void 0:e.map((e=>(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:e.date}),(0,o.jsxs)("td",{children:[e.day.condition.text,(0,o.jsx)("img",{style:{width:"40px",height:"40px"},src:e.day.condition.icon,alt:"weather icon"})]}),(0,o.jsxs)("td",{children:[e.day.maxtemp_c," / ",e.day.mintemp_c," ",(0,o.jsx)("sup",{children:"o"}),"C"]})]})))})}),(0,o.jsxs)("div",{className:"weather__details mt-3 d-flex justify-content-around align-items-center flex-wrap p-3",children:[(0,o.jsxs)("h3",{children:[a("realTemp"),(0,o.jsxs)("p",{children:[" "+(null===s||void 0===s?void 0:s.current.temp_c)," ",(0,o.jsx)("sup",{children:"o"}),"C"]})]}),(0,o.jsxs)("h3",{children:[a("sun rise"),(0,o.jsx)("p",{children:null===s||void 0===s?void 0:s.forecast.forecastday[0].astro.sunrise})]}),(0,o.jsxs)("h3",{children:[a("sun set")," ",(0,o.jsx)("p",{children:null===s||void 0===s?void 0:s.forecast.forecastday[0].astro.sunset})]}),(0,o.jsxs)("h3",{children:[a("uv")," ",(0,o.jsx)("p",{children:null===s||void 0===s?void 0:s.current.uv})]})]})]}):(0,o.jsx)(r.A,{})]})}}}]);
//# sourceMappingURL=35.8d679514.chunk.js.map