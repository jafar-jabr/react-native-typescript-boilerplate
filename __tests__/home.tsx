import React from 'react'
import renderer from 'react-test-renderer'

import { MainScreen } from "../src/screens/mainScreen"

it("renders correctly with defaults", () => {
    const button = renderer.create(<MainScreen name="World" enthusiasmLevel={1} />).toJSON()
    expect(button).toMatchSnapshot()
})
