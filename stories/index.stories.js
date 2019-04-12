
import { storiesOf } from '@storybook/vue';
import { linkTo } from '@storybook/addon-links';

import Welcome from './Welcome';


storiesOf('Welcome', module).add('to Storybook', () => ({
  components: { Welcome },
  template: '<welcome :showApp="action" />',
  methods: { action: linkTo('Button') },
}));

  
  


