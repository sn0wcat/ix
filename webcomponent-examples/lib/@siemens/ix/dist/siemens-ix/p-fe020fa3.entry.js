import{r as e,c as i,h as t,H as s}from"./p-47ea9884.js";const o=class{constructor(t){e(this,t),this.done=i(this,"done",7),this.range=!0,this.showHour=!1,this.showMinutes=!1,this.showSeconds=!1,this.showTimeReference=!1}doneEvent(){console.log(this.date+" "+this.time),this.done.emit(this.date+" "+this.time)}render(){return t(s,null,t("div",{class:"flex"},t("ix-date-picker",{corners:"left",individual:!1,range:this.range,onDateChange:e=>this.date=e.detail}),t("ix-time-picker",{corners:"right",individual:!1,showHour:this.showHour,showMinutes:this.showMinutes,showSeconds:this.showSeconds,showTimeReference:this.showTimeReference,onTimeChange:e=>this.time=e.detail})),t("div",{class:"done"},t("ix-button",{onClick:()=>this.doneEvent()},"Done")))}};o.style=".sc-ix-datetime-picker-h{background-color:var(--theme-menu--background);box-shadow:0 0 2px 0 var(--theme-input--border-color-bottom--disabled), 0 4px 8px 0 var(--theme-input--border-color-bottom--disabled), 0 12px 18px 0px var(--theme-input--border-color-bottom--disabled);border-radius:4px}.flex.sc-ix-datetime-picker{display:flex}.done.sc-ix-datetime-picker{display:flex;justify-content:flex-end;margin:0 1rem 1rem 0}";export{o as ix_datetime_picker}