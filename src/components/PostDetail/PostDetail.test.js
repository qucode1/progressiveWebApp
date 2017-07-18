import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import PostDetail from './PostDetail'

const posts = {
  'posts': [{
    'slug': 'post-slug'
  }]
}

const match = {
  'params': {
    'slug': 'post-slug'
  }
}

const mismatch = {
  'params': {
    'slug': 'different-slug'
  }
}

it('PostDetail should render as expected', () => {
  const wrapper = shallow(<PostDetail posts={posts} match={match}/>)
  const tree = toJson(wrapper)
  expect(tree).toMatchSnapshot()
})

it('PostDetail should render as expected', () => {
  const wrapper = shallow(<PostDetail posts={posts} match={mismatch}/>)
  const tree = toJson(wrapper)
  expect(tree).toMatchSnapshot()
})
