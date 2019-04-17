import React from 'react';
import {Switch,Route} from 'react-router-dom';
import All from '../All/All';
import SinglePage from '../SinglePage/SinglePage'
import {connect} from 'react-redux';

const Main = ({news}) => {
    return (

      <Switch>
          <Route exact path ="/" component={All}/>
          <Route  path ="/id" component={SinglePage}/>
         
      </Switch>

    );
};

function MSTP(state) {
    return{
        news: state.news,
    }
}

export default connect (MSTP) (Main);

