/* eslint-disable no-undef */
import React from 'react'
import ReactDOM from 'react-dom'
import { act } from 'react-dom/test-utils'
import { expect } from 'chai'
import { Alert } from './alert'

let rootContainer

beforeEach(() => {
  rootContainer = document.createElement('div')
  document.body.appendChild(rootContainer)
})

afterEach(() => {
  document.body.removeChild(rootContainer)
  rootContainer = null
})

describe('Alert Component Testing', () => {
  it('Renders hello title', () => {
    act(() => {
      ReactDOM.render(<Alert text="hello" />, rootContainer)
    })
    const text = rootContainer.querySelector('div')
    expect(text.textContent).to.equal('hello')
  })
})
