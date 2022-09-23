import React from 'react';
import {Meta, Story} from '@storybook/react'
import {InlineProps}  from "../src/InlineButton"
import {action} from '@storybook/addon-actions'

import InlineButton from '../src/InlineButton'

const meta:Meta = {
    title : 'InlineButton',
    component: InlineButton,
    argTypes: {
        
        onClick: { action :'clicked' },

        children : {
            defaultValue : 'Click Me'
        }
    }
}

export default meta;

const Template: Story<InlineProps> = (args) => <InlineButton {...args} />

export const Default = Template.bind({});

export const Primary = Template.bind({});

export const Secondary = Template.bind({});


Primary.args ={
    type : 'primary',
    ability : true,
    children : 'primary inlinebutton',
    onClick: action('Primary click'),
}

Secondary.args ={
    type : 'secondary',
    ability : true,
    children : 'secondary inlinebutton',
    onClick: action('Secondary click'),

}
