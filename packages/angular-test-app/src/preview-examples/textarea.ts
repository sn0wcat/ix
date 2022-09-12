// SPDX-FileCopyrightText: 2022 Siemens AG
//
// SPDX-License-Identifier: MIT

import { Component } from '@angular/core';

@Component({
  selector: 'app-textarea',
  template: `
    <textarea class="form-control" placeholder="Enter text here">
  Some example text
</textarea>
  `,
})
export class Textarea {}