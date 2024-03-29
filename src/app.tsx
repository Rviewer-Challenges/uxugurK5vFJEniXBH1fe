import { Center, Container, Tooltip } from '@mantine/core'
import './app.css'
import Convertor from './pages/Convertor'

export function App() {

  return (
    <Container>
      <Center>
        <h1>
          <Tooltip label={`Gross domestic product (GDP) is the total monetary or market value of all the finished
                            goods and services produced within a country's borders in a specific time period`}
            position='bottom' offset={5}>
            <span className="under-dotted">GDP</span></Tooltip> Convertor
        </h1>
      </Center>
      <h6>Results may not be perfectly accurate since it's generated by AI.</h6>
      <Convertor />
    </Container>
  )
}
