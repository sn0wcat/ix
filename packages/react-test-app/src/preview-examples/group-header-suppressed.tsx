/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { IxGroup, IxGroupItem } from '@siemens/ix-react';
import React from 'react';

export const GroupHeaderSuppressed: React.FC = () => {
  return (
    <IxGroup
      header="Header text"
      subHeader="Subheader text"
      suppressHeaderSelection
    >
      <IxGroupItem text="Example text 1"></IxGroupItem>
      <IxGroupItem text="Example text 2"></IxGroupItem>
      <IxGroupItem text="Example text 3"></IxGroupItem>
    </IxGroup>
  );
};