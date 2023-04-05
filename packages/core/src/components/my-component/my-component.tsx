/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component, Element, h, Host } from '@stencil/core';
import { CardVariant } from '../card/card';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.scss',
  scoped: true,
})
export class MyComponent {
  private demo: CardVariant[] = [
    'notification',
    'alarm',
    'critical',
    'warning',
  ];

  @Element() hostElement: HTMLMyComponentElement;

  componentDidRender() {}

  render() {
    return (
      <Host>
        <div class={'list'} style={{ paddingBottom: '2rem' }}>
          <ix-notification-card
            icon="bulb"
            notification="42"
            heading="New devices have been discovered and are ready for onboarding"
            subheading="Secondary text"
          >
            <ix-button slot="title-action">Test</ix-button>
          </ix-notification-card>
          {this.demo.map((variant) => (
            <ix-card style={{ height: '100%' }} variant={variant}>
              <ix-card-title>
                <ix-icon name="rocket" size="32"></ix-icon>
                <span
                  style={{
                    fontSize: '40px',
                  }}
                >
                  10
                </span>
                <ix-icon-button
                  icon="warning"
                  color="color-warning"
                  ghost
                  slot="title-action"
                ></ix-icon-button>

                <ix-icon-button
                  icon="document"
                  color="color-primary"
                  ghost
                  slot="title-action"
                ></ix-icon-button>
              </ix-card-title>
              <ix-card-content>
                <ix-typography variant="default-title">
                  New devices have been discovered and are ready for onboarding
                </ix-typography>

                <ix-typography variant="default">Secondary text</ix-typography>
              </ix-card-content>
              <ix-card-accordion>
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">First</th>
                      <th scope="col">Last</th>
                      <th scope="col">Handle</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td colSpan={2}>Larry the Bird</td>
                      <td>@twitter</td>
                    </tr>
                  </tbody>
                </table>
              </ix-card-accordion>
            </ix-card>
          ))}

          <ix-card>
            <ix-card-title>
              <ix-icon name="rocket" size="32"></ix-icon>
              <ix-typography variant={'h2'}>10</ix-typography>
            </ix-card-title>
            <ix-card-content>
              <ix-typography variant="default-title">
                New devices have been discovered and are ready for onboarding
              </ix-typography>

              <ix-typography variant="default" color="soft">
                Secondary text
              </ix-typography>
            </ix-card-content>
            <ix-card-accordion></ix-card-accordion>
          </ix-card>

          <ix-card>
            <ix-card-title>
              <ix-icon name="rocket" size="32"></ix-icon>
              <ix-typography variant={'h2'}>10</ix-typography>
            </ix-card-title>
            <ix-card-content>
              <ix-typography variant="default-title">
                New devices have been discovered and are ready for onboarding
              </ix-typography>

              <ix-typography variant="default" color="soft">
                Secondary text
              </ix-typography>
            </ix-card-content>
            <ix-card-accordion>
              <iframe
                src="https://giphy.com/embed/MDJ9IbxxvDUQM"
                width="100%"
                height="100%"
                style={{ position: 'absolute' }}
                frameBorder="0"
                class="giphy-embed"
                allowFullScreen
              ></iframe>
            </ix-card-accordion>
          </ix-card>
        </div>
      </Host>
    );
  }
}
