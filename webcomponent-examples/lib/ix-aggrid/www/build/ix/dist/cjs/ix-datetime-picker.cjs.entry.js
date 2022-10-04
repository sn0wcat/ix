'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-1e4a348f.js');

const datetimePickerCss = ".sc-ix-datetime-picker-h{background-color:var(--theme-menu--background);box-shadow:0 0 2px 0 var(--theme-input--border-color-bottom--disabled), 0 4px 8px 0 var(--theme-input--border-color-bottom--disabled), 0 12px 18px 0px var(--theme-input--border-color-bottom--disabled);border-radius:4px}.flex.sc-ix-datetime-picker{display:flex}.done.sc-ix-datetime-picker{display:flex;justify-content:flex-end;margin:0 1rem 1rem 0}";

const DatePicker = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.done = index.createEvent(this, "done", 7);
    /**
     * Set range size
     */
    this.range = true;
    /**
     * Show Hour Input
     */
    this.showHour = false;
    /**
     * Show Minutes Input
     */
    this.showMinutes = false;
    /**
     * Show Seconds Input
     */
    this.showSeconds = false;
    /**
     * Show Time Reference Input
     */
    this.showTimeReference = false;
  }
  doneEvent() {
    console.log(this.date + ' ' + this.time);
    this.done.emit(this.date + ' ' + this.time);
  }
  render() {
    return (index.h(index.Host, null, index.h("div", { class: "flex" }, index.h("ix-date-picker", { corners: "left", individual: false, range: this.range, onDateChange: (date) => (this.date = date.detail) }), index.h("ix-time-picker", { corners: "right", individual: false, showHour: this.showHour, showMinutes: this.showMinutes, showSeconds: this.showSeconds, showTimeReference: this.showTimeReference, onTimeChange: (time) => (this.time = time.detail) })), index.h("div", { class: "done" }, index.h("ix-button", { onClick: () => this.doneEvent() }, "Done"))));
  }
};
DatePicker.style = datetimePickerCss;

exports.ix_datetime_picker = DatePicker;