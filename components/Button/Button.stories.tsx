import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';

export default {
  title: 'Controls/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const PrimaryButton = Template.bind({});
PrimaryButton.args = {
  children: 'Primary',
  color: 'primary',
};

export const SecondaryButton = Template.bind({});
SecondaryButton.args = {
  children: 'Secondary',
  color: 'secondary',
};

export const WarningButton = Template.bind({});
WarningButton.args = {
  children: 'Warning',
  color: 'warning',
};

export const DangerButton = Template.bind({});
DangerButton.args = {
  children: 'Danger',
  color: 'danger',
};
