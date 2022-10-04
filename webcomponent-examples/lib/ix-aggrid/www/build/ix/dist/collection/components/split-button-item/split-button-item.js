/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { Component, Element, Event, h, Prop } from '@stencil/core';
export class SplitButtonItem {
  render() {
    return (h("ix-dropdown-item", { icon: this.icon, label: this.label, onClick: (e) => this.itemClick.emit(e) }));
  }
  static get is() { return "ix-split-button-item"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() { return {
    "$": ["split-button-item.css"]
  }; }
  static get styleUrls() { return {
    "$": ["split-button-item.css"]
  }; }
  static get properties() { return {
    "icon": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Dropdown icon"
      },
      "attribute": "icon",
      "reflect": false
    },
    "label": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Dropdown label"
      },
      "attribute": "label",
      "reflect": false
    }
  }; }
  static get events() { return [{
      "method": "itemClick",
      "name": "itemClick",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Dropdown item clicked"
      },
      "complexType": {
        "original": "MouseEvent",
        "resolved": "MouseEvent",
        "references": {
          "MouseEvent": {
            "location": "global"
          }
        }
      }
    }]; }
  static get elementRef() { return "hostElement"; }
}