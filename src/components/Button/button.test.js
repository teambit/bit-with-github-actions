/* eslint-disable no-undef */
import React from 'react'
import ReactDOM from 'react-dom'
import { act } from 'react-dom/test-utils'
import { expect } from 'chai'
import { Button } from './button'

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
  it('Renders click in button', () => {
    act(() => {
      ReactDOM.render(
        <Button text="click" onClick={() => alert('on click')} />,
        rootContainer
      )
    })
    const text = rootContainer.querySelector('div')
    expect(text.textContent).to.equal('click')
  })
})
