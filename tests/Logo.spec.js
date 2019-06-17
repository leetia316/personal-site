import { mount } from '@vue/test-utils'
import Logo from '~/components/Logo.vue'

describe('Logo', () => {
  test('has a class of loser on the p tag.', () => {
    const wrapper = mount(Logo)
    const text = wrapper.find('p')
    expect(text.classes()).toContain('loser')
  })
})
