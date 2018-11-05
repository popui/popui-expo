import React from 'react'
import ResourceLoader from '../demo/common/ResourceLoader'
import AppNavigator from './AppNavigator'

export default function App() {
  return (
    <ResourceLoader>
      <AppNavigator />
    </ResourceLoader>
  )
}
