
  import React, { Component } from 'react'
  import ReactDOM from 'react-dom'
  import { BrowserRouter, Route, Switch } from 'react-router-dom'
  import Header from './layouts/Header'
  import Section1 from './Section1'
  import Section2 from './Section2'
  import SectionPartenaire from './SectionPartenaire'
  import SectionServices from './SectionServices'
  import SectionFooter from './SectionFooter'
  import SectionFunFat from './SectionFunFat'
  import SectionChooseCar from './SectionChooseCar'

  import LoginModal from './LoginModal'


  class Main extends Component {
    render () {
      return (
        <BrowserRouter>
          <div>
            
          <Header />
          <Section1 />
          {/*<Section2 />
          <SectionPartenaire />
           */}
          <LoginModal />
          <SectionServices />
          <SectionFunFat />
          <SectionChooseCar />

          <SectionFooter />
                

          </div>
        </BrowserRouter>
      )
    }
  }

  ReactDOM.render(<Main />, document.getElementById('app'))