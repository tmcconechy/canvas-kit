/// <reference path="../../../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';

import {LoadingDots} from '../index';
import README from '../README.md';

storiesOf('Components|Indicators/Loading Animation/React', module)
  .addParameters({component: LoadingDots})
  .addDecorator(withReadme(README))
  .add('Loading Dots', () => (
    <div className="story">
      <LoadingDots />
    </div>
  ));
