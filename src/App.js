import styled from 'styled-components'
import BasicTitle from './components/BasicTitle'
import ComplexTitle from './components/ComplexTitle'
import {DefaultButton, HipsterComponent} from './components/DefaultButton'

function App() {
  return (
    <>
       <BasicTitle>styled components</BasicTitle>
       <BasicTitle special>styled components</BasicTitle>
       <DefaultButton>click me</DefaultButton>
       <HipsterComponent>click me</HipsterComponent>
       <ComplexTitle title='Complex Title'></ComplexTitle>
    </>
  )
}

export default App;
