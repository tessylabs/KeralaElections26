
import { render } from '@testing-library/react'
import Landingpage from '../../pages/Landingpage'
import test from 'node:test'
import { describe } from 'node:test'

describe('Landingpage', () => {
  test('renders without crashing', () => {
    const { container } = render(<Landingpage />)
    expect(container).toBeTruthy()
  })
})
