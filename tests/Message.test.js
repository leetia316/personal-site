import { mount } from '@vue/test-utils'
import Message from './Message.vue'

describe('Message', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Message)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
