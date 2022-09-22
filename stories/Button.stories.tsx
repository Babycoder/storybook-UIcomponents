import React from 'react';
import {Meta, Story} from '@storybook/react'
import {Props}  from "../src/Button"
import {action} from '@storybook/addon-actions'

import Button from '../src/Button'

const meta:Meta = {
    title : 'Button',
    component: Button,
    argTypes: {
        
        onClick: { action :'clicked' },

        children : {
            defaultValue : 'Click Me'
        }
    }
}

export default meta;

const Template: Story<Props> = (args) => <Button {...args} />

export const Default = Template.bind({});

export const Primary = Template.bind({});

export const Secondary = Template.bind({});


Primary.args ={
    type : 'primary',
    children : 'Buy daba',
    onClick: action('Primary click'),
}

Secondary.args ={
    type : 'secondary',
    children : 'Buy now',
    onClick: action('Secondary click'),

}

/*export const Default = () => <Button type="primary">Click Me</Button>

export const Scondary = () => <Button type='secondary'> Click Me</Button>*/










































