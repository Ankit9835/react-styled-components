import styled from 'styled-components/macro'
import BasicTitle from './components/BasicTitle'
import Card from './components/Card'
import ComplexTitle from './components/ComplexTitle'
import {DefaultButton, HipsterComponent} from './components/DefaultButton'
import GlobalStyles from './global-styles'
import { ThemeProvider } from 'styled-components'
import { useState } from 'react'
import Loading from './components/Loading'




const BaseTheme = {
  color:'#222',
  background:'#fff'
}

const DarkTheme = {
  color:'#fff',
  background:'#222'
}

const Conteiner = styled.div`
  padding:2rem;
  color:${(props) => props.theme}
`

function App() {
  const [theme,setTheme] = useState(true)
  const toggleMe = () => {
    return setTheme(!theme)
  }
  return (
    <>
       {/* <BasicTitle>styled components</BasicTitle>
       <BasicTitle special>styled components</BasicTitle>
       <DefaultButton>click me</DefaultButton>
       <HipsterComponent>click me</HipsterComponent>
       <ComplexTitle title='Complex Title'></ComplexTitle> */}
       {/* <Loading /> */}
       {/* <HipsterComponent css={`color: red`}>load more</HipsterComponent>
       <HipsterComponent>load more</HipsterComponent>
       <HipsterComponent as='a' href='https://www.pexels.com/photo/asian-woman-swimming-in-calm-water-of-river-4946595/'>load more</HipsterComponent> */}
       {/* <ThemeProvider theme={theme ? BaseTheme : DarkTheme}>
       <GlobalStyles />
          <Card />
          <Conteiner>
            <h1>hello react</h1>
            <button className='btn' onClick={toggleMe}>toggle me</button>
          </Conteiner>
       </ThemeProvider> */}
       <DefaultButton type='submit'>click me</DefaultButton>
       <DefaultButton large>click me</DefaultButton>
    </>
  )
}

export default App;
