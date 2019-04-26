import React, {Component} from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';
import Menu from './components/MenuComponents';
import {DISHES} from './shared/dishes'



class App extends Component {

    constructor(props){
      super(props);

      this.state = {
        dishes: DISHES
      };
    }

    render(){
      return (
        <div className="App">
          <Navbar dark color='primary'>
            <div className='container'>
              <NavbarBrand href='/'> Shree Hari </NavbarBrand>
            </div>
          </Navbar>
          <Menu dishes={this.state.dishes}/>
        </div>
      );
    }


}

export default App;
