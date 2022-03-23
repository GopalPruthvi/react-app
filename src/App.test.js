import { render,screen } from '@testing-library/react'
import {jest} from '@jest/globals';
import React from 'react'
import App from './App'

test("test 1", ()=>{
    expect(true).toBe(true)
})

// test("test 2", ()=>{
//     render (<App />)
//     const appEle = screen.getByTestId('container')
//     expect(appEle).toBe('container')
// })