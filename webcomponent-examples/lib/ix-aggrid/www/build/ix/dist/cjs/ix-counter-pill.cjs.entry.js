'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-1e4a348f.js');

const counterPillCss = ".sc-ix-counter-pill-h{display:inline-flex;position:relative;align-items:center;justify-content:center;border-radius:100px;padding:0px 6px;margin-left:0.25rem;min-width:1.5rem;height:1.25rem;min-height:1.25rem;max-height:1.25rem;cursor:auto}.sc-ix-counter-pill-h .with-icon.sc-ix-counter-pill{margin-right:0.25rem}.align-left.sc-ix-counter-pill-h{justify-content:flex-start}[variant=primary].sc-ix-counter-pill-h{background-color:var(--theme-color-primary);color:var(--theme-chip-primary--color)}[variant=primary].sc-ix-counter-pill-h .close-button.sc-ix-counter-pill{color:var(--theme-chip-primary--color);pointer-events:auto}[variant=primary].outline.sc-ix-counter-pill-h{color:var(--theme-chip-primary-outline--color);background-color:transparent;border:solid 1px var(--theme-chip-primary-outline--border-color)}[variant=primary].outline.sc-ix-counter-pill-h .close-button.sc-ix-counter-pill{color:var(--theme-chip-primary-outline--color)}[variant=alarm].sc-ix-counter-pill-h{color:var(--theme-color-alarm--contrast)}[variant=alarm].sc-ix-counter-pill-h:not(.outline){background-color:var(--theme-color-alarm)}[variant=alarm].sc-ix-counter-pill-h:not(.outline) .close-button.sc-ix-counter-pill{color:var(--theme-color-alarm--contrast)}[variant=alarm].sc-ix-counter-pill-h:not(.outline):hover::after{content:\"\";background-color:rgba(0, 0, 0, 0.05)}[variant=alarm].sc-ix-counter-pill-h:not(.outline).active::after,[variant=alarm].sc-ix-counter-pill-h:not(.outline):active::after{background-color:rgba(0, 0, 0, 0.1)}[variant=alarm].outline.sc-ix-counter-pill-h{color:var(--theme-chip-outline--color);border:solid 1px var(--theme-color-alarm)}[variant=alarm].outline.sc-ix-counter-pill-h:hover::after{display:none}[variant=alarm].outline.sc-ix-counter-pill-h:hover{background-color:var(--theme-chip-outline--background--hover)}[variant=alarm].outline.active.sc-ix-counter-pill-h::after,[variant=alarm].outline.sc-ix-counter-pill-h:active::after{display:none}[variant=alarm].outline.active.sc-ix-counter-pill-h,[variant=alarm].outline.sc-ix-counter-pill-h:active{background-color:var(--theme-chip-outline--background--active)}[variant=critical].sc-ix-counter-pill-h{color:var(--theme-color-critical--contrast)}[variant=critical].sc-ix-counter-pill-h:not(.outline){background-color:var(--theme-color-critical)}[variant=critical].sc-ix-counter-pill-h:not(.outline) .close-button.sc-ix-counter-pill{color:var(--theme-color-critical--contrast)}[variant=critical].sc-ix-counter-pill-h:not(.outline):hover::after{content:\"\";background-color:rgba(0, 0, 0, 0.05)}[variant=critical].sc-ix-counter-pill-h:not(.outline).active::after,[variant=critical].sc-ix-counter-pill-h:not(.outline):active::after{background-color:rgba(0, 0, 0, 0.1)}[variant=critical].outline.sc-ix-counter-pill-h{color:var(--theme-chip-outline--color);border:solid 1px var(--theme-color-critical)}[variant=critical].outline.sc-ix-counter-pill-h:hover::after{display:none}[variant=critical].outline.sc-ix-counter-pill-h:hover{background-color:var(--theme-chip-outline--background--hover)}[variant=critical].outline.active.sc-ix-counter-pill-h::after,[variant=critical].outline.sc-ix-counter-pill-h:active::after{display:none}[variant=critical].outline.active.sc-ix-counter-pill-h,[variant=critical].outline.sc-ix-counter-pill-h:active{background-color:var(--theme-chip-outline--background--active)}[variant=warning].sc-ix-counter-pill-h{color:var(--theme-color-warning--contrast)}[variant=warning].sc-ix-counter-pill-h:not(.outline){background-color:var(--theme-color-warning)}[variant=warning].sc-ix-counter-pill-h:not(.outline) .close-button.sc-ix-counter-pill{color:var(--theme-color-warning--contrast)}[variant=warning].sc-ix-counter-pill-h:not(.outline):hover::after{content:\"\";background-color:rgba(0, 0, 0, 0.05)}[variant=warning].sc-ix-counter-pill-h:not(.outline).active::after,[variant=warning].sc-ix-counter-pill-h:not(.outline):active::after{background-color:rgba(0, 0, 0, 0.1)}[variant=warning].outline.sc-ix-counter-pill-h{color:var(--theme-chip-outline--color);border:solid 1px var(--theme-color-warning)}[variant=warning].outline.sc-ix-counter-pill-h:hover::after{display:none}[variant=warning].outline.sc-ix-counter-pill-h:hover{background-color:var(--theme-chip-outline--background--hover)}[variant=warning].outline.active.sc-ix-counter-pill-h::after,[variant=warning].outline.sc-ix-counter-pill-h:active::after{display:none}[variant=warning].outline.active.sc-ix-counter-pill-h,[variant=warning].outline.sc-ix-counter-pill-h:active{background-color:var(--theme-chip-outline--background--active)}[variant=info].sc-ix-counter-pill-h{color:var(--theme-color-info--contrast)}[variant=info].sc-ix-counter-pill-h:not(.outline){background-color:var(--theme-color-info)}[variant=info].sc-ix-counter-pill-h:not(.outline) .close-button.sc-ix-counter-pill{color:var(--theme-color-info--contrast)}[variant=info].sc-ix-counter-pill-h:not(.outline):hover::after{content:\"\";background-color:rgba(0, 0, 0, 0.05)}[variant=info].sc-ix-counter-pill-h:not(.outline).active::after,[variant=info].sc-ix-counter-pill-h:not(.outline):active::after{background-color:rgba(0, 0, 0, 0.1)}[variant=info].outline.sc-ix-counter-pill-h{color:var(--theme-chip-outline--color);border:solid 1px var(--theme-color-info)}[variant=info].outline.sc-ix-counter-pill-h:hover::after{display:none}[variant=info].outline.sc-ix-counter-pill-h:hover{background-color:var(--theme-chip-outline--background--hover)}[variant=info].outline.active.sc-ix-counter-pill-h::after,[variant=info].outline.sc-ix-counter-pill-h:active::after{display:none}[variant=info].outline.active.sc-ix-counter-pill-h,[variant=info].outline.sc-ix-counter-pill-h:active{background-color:var(--theme-chip-outline--background--active)}[variant=neutral].sc-ix-counter-pill-h{color:var(--theme-color-neutral--contrast)}[variant=neutral].sc-ix-counter-pill-h:not(.outline){background-color:var(--theme-color-neutral)}[variant=neutral].sc-ix-counter-pill-h:not(.outline) .close-button.sc-ix-counter-pill{color:var(--theme-color-neutral--contrast)}[variant=neutral].sc-ix-counter-pill-h:not(.outline):hover::after{content:\"\";background-color:rgba(0, 0, 0, 0.05)}[variant=neutral].sc-ix-counter-pill-h:not(.outline).active::after,[variant=neutral].sc-ix-counter-pill-h:not(.outline):active::after{background-color:rgba(0, 0, 0, 0.1)}[variant=neutral].outline.sc-ix-counter-pill-h{color:var(--theme-chip-outline--color);border:solid 1px var(--theme-color-neutral)}[variant=neutral].outline.sc-ix-counter-pill-h:hover::after{display:none}[variant=neutral].outline.sc-ix-counter-pill-h:hover{background-color:var(--theme-chip-outline--background--hover)}[variant=neutral].outline.active.sc-ix-counter-pill-h::after,[variant=neutral].outline.sc-ix-counter-pill-h:active::after{display:none}[variant=neutral].outline.active.sc-ix-counter-pill-h,[variant=neutral].outline.sc-ix-counter-pill-h:active{background-color:var(--theme-chip-outline--background--active)}[variant=success].sc-ix-counter-pill-h{color:var(--theme-color-success--contrast)}[variant=success].sc-ix-counter-pill-h:not(.outline){background-color:var(--theme-color-success)}[variant=success].sc-ix-counter-pill-h:not(.outline) .close-button.sc-ix-counter-pill{color:var(--theme-color-success--contrast)}[variant=success].sc-ix-counter-pill-h:not(.outline):hover::after{content:\"\";background-color:rgba(0, 0, 0, 0.05)}[variant=success].sc-ix-counter-pill-h:not(.outline).active::after,[variant=success].sc-ix-counter-pill-h:not(.outline):active::after{background-color:rgba(0, 0, 0, 0.1)}[variant=success].outline.sc-ix-counter-pill-h{color:var(--theme-chip-outline--color);border:solid 1px var(--theme-color-success)}[variant=success].outline.sc-ix-counter-pill-h:hover::after{display:none}[variant=success].outline.sc-ix-counter-pill-h:hover{background-color:var(--theme-chip-outline--background--hover)}[variant=success].outline.active.sc-ix-counter-pill-h::after,[variant=success].outline.sc-ix-counter-pill-h:active::after{display:none}[variant=success].outline.active.sc-ix-counter-pill-h,[variant=success].outline.sc-ix-counter-pill-h:active{background-color:var(--theme-chip-outline--background--active)}.sc-ix-counter-pill-h .slot.sc-ix-counter-pill{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.sc-ix-counter-pill-h{min-height:1rem;max-height:1rem;height:1rem;font-size:0.75rem;padding:0 0.25rem;min-width:1rem;width:auto;padding:0 4px}.sc-ix-counter-pill-h .slot-container.sc-ix-counter-pill{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}";

const CounterPill = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    /**
     * Pill variant
     */
    this.variant = 'primary';
    /**
     * Show pill as outline
     */
    this.outline = false;
    /**
     * Align pill content left
     */
    this.alignLeft = false;
  }
  render() {
    return (index.h(index.Host, { class: {
        outline: this.outline,
        'align-left': this.alignLeft,
      }, style: this.variant === 'custom'
        ? {
          color: this.color,
          backgroundColor: this.background,
        }
        : {}, title: this.el.textContent }, index.h("span", { class: "slot-container" }, index.h("slot", null))));
  }
  get el() { return index.getElement(this); }
};
CounterPill.style = counterPillCss;

exports.ix_counter_pill = CounterPill;