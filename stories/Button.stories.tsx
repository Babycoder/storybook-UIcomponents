import React from 'react';
import {Meta, Story} from '@storybook/react'
import {Props}  from "../src/Button"
import Button from '../src/Button'

const meta:Meta = {
    title : 'Button',
    component: Button,
}

export default meta;

const Template: Story<Props> = (args) => <Button {...args} />



/*export const Default = () => <Button type="primary">Click Me</Button>

export const Scondary = () => <Button type='secondary'> Click Me</Button>*/










































