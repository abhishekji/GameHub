import { Button, ButtonGroup, Grid, GridItem, Show } from '@chakra-ui/react';
import './App.css'
import { NavBar } from "./components/NavBar";

function App() {
 // const [count, setCount] = useState(0)

  return (
    <>
     <Grid templateAreas={{
      base: `"nav" "main"`,
      lg: `"nav nav" "aside main"`
     }}>
      <GridItem area="nav"> 
        <NavBar></NavBar>  
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" bg="gold"> Nav </GridItem>
      </Show>
      <GridItem area="main" bg="dodgerblue"> Nav </GridItem>
     </Grid>
    </>
  )
}

export default App
