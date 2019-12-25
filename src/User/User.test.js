import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'

import { User } from './User'

let container = null

beforeEach(() => {
   container = document.createElement("div")
   document.body.appendChild(container)
})

afterEach(() => {
   unmountComponentAtNode(container)
   container.remove()
   container = null
})

it('renders user name', () => {
   act(() => {
      render(<User name="Neil Armstrong" birthyear="1930" />, container) 
   })

   const expected = "Neil Armstrong was 39 years old when he walked on the moon."

   expect(container.textContent).toEqual(expect.stringContaining(expected))
})

