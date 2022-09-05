import React from 'react';
import {Meta, Story} from '@storybook/react'
import {Props}  from "../src/Button"
import Button from "../src/Button"


const meta:Meta = {
    title : 'Button',
    component: Button
}

export default meta;

export const Default = () => <Button variant="primary">Click Me</Button>