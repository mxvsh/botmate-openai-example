import React from 'react';

import { Plugin } from '@botmate/client';

import SettingsPage from './settings';

export class Openai extends Plugin {
  displayName = 'openai';

  async beforeLoad() {
    this.provideSettings(<SettingsPage />);
  }
}
