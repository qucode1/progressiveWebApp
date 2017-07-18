import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import { mount } from 'enzyme'
import { MemoryRouter } from 'react-router-dom'

import Posts from './Posts'
import PostDetail from '../PostDetail/PostDetail'

const posts = {
  'posts': [{
    'slug': 'post-slug'
  }]
}

const match = {
  'url': '/posts',
  'params': {
    'slug': 'post-slug'
  }
}

test('Should render PostDetails when visiting /posts/:slug', () => {
  const component = mount(
    <MemoryRouter initialEntries={['/posts/testing-with-jest-and-enzyme']} initialIndex={0} >
      <Posts match={match}/>
    </MemoryRouter>
  )

  expect(component.find(PostDetail).length).toBe(1)
})

test('Should render Post List', () => {
  const component = mount(
    <MemoryRouter initialEntries={['/posts']} initialIndex={0} >
      <Posts match={match}/>
    </MemoryRouter>
  )

  expect(component.find('ul').length).toBe(1)
})

it('Posts Component should render as expected', () => {
  const wrapper = shallow(<Posts match={match}/>)
  const tree = toJson(wrapper)
  expect(tree).toMatchSnapshot()
})
