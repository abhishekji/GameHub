import { Button, ButtonGroup, Grid, GridItem, Show } from "@chakra-ui/react";
import "./App.css";
import { NavBar } from "./components/NavBar";
import { GameGrid } from "./components/GameGrid";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
  Outlet,
} from "react-router-dom";

import { useState } from "react";

function App() {
  // const [count, setCount] = useState(0)
  //  const navigate = useNavigate();
  const Default = () => <h2> Default </h2>;
  const Home = () => <h2> Home </h2>;
  const Home1 = () => (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="team">Our Team</Link>
          </li>
          <li>
            <Link to="company">Our Company</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
  const Home2 = () => <h2> Home2 </h2>;

  const Team = () => <h2> Team </h2>;
  const Company = () => <h2> Company </h2>;

  let initialValue: { currValue: string; list: object[] } = {
    currValue: "",
    list: [],
  };

  let [checkValue, setCheckValue] = useState(initialValue);
  const addItem = () => {
    const itemPresentAlready = checkValue.list.find((elem: any) => {
      return elem.value === checkValue.currValue;
    });
    if (itemPresentAlready) {
      return;
    }
    const newList: object[] = [...checkValue.list, {value: checkValue.currValue, edited: false}];
    setCheckValue({ ...checkValue, list: newList });
  };

  let updateInput = (event: any) => {
    console.log(checkValue);
    setCheckValue({ ...checkValue, currValue: event.target.value });
  };

  let updateCurrInput = (event: any, index: any) => {
    const currElem = event.target.value;

    const newList = JSON.parse(JSON.stringify(checkValue.list));

    newList.splice(index, 1, {value: currElem, edited: true});
    setCheckValue({ ...checkValue, list: newList });
  }

  const finishUpdateItem = (index: any) => {
    const newList = JSON.parse(JSON.stringify(checkValue.list));
    newList.splice(index, 1, {...checkValue.list[index], edited: false})
    setCheckValue({...checkValue, list: newList})
  }

  const onDelete = (index: any) => {
    const newList = JSON.parse(JSON.stringify(checkValue.list));
    newList.splice(index, 1);
    setCheckValue({...checkValue, list: newList})
  }

  const onEdit = (index: any) => {
    const newList = JSON.parse(JSON.stringify(checkValue.list));
    newList.splice(index, 1, {...checkValue.list[index], edited: true})
    setCheckValue({...checkValue, list: newList})
  }

  return (
    <>
      {/* <Grid templateAreas={{
      base: `"nav" "main"`,
      lg: `"nav nav" "aside main"`
     }}>
      <GridItem area="nav"> 
        <NavBar></NavBar>  
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" bg="gold"> Nav </GridItem>
      </Show>
      <GridItem area="main" bg="dodgerblue">
        <GameGrid></GameGrid>
      </GridItem>
      {['hi','hello','welcome']}
     </Grid> */}
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/home"> Home </Link>
            </li>
            <li>
              <Link to="/home1"> Home1</Link>
            </li>
            <li>
              <Link to="/home2"> Home2 </Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/home1" element={<Home1 />}>
            <Route path="team" element={<Team />}></Route>
            <Route path="company" element={<Company />}></Route>
          </Route>
          <Route path="/home2" element={<Home2 />} />
          <Route path="/" element={<Default />} />
        </Routes>
      </BrowserRouter>
      <Outlet />
      // To do App
      <div>
        <input
          type="text"
          name="app-items"
          value={checkValue.currValue}
          onChange={() => updateInput(event)}
        />
        <button onClick={() => addItem()}> Add </button>
        <br />
        <ul>
          {checkValue.list.map((elem: any, index) => {
            return (
              <>
              {
                !elem.edited && 
                <>
                <li key={elem.value}> {elem.value} </li> 
                <span onClick={() => onEdit(index)}> Edit </span>
                </>
                }
                {
                elem.edited && 
                <>
                <input
                type="text"
                name="edited-item"
                value={elem.value}
                onChange={() => updateCurrInput(event, index)}
              />
              <button onClick={() => finishUpdateItem(index)}> Done </button>
              </>
                }
                <span onClick={() => onDelete(index)}> Delete </span>
              </>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default App;
