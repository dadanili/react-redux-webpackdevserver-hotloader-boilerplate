import React, { PropTypes } from 'react'
import { Router, Route, hashHistory, IndexRoute, Link } from 'react-router'
import { connect } from 'react-redux'
import HomePresentation from './presentation.js'

export class HomeContainer extends React.Component {

  constructor (props) {
    super(props);
  }

  render() {
    return (
      <div>
        <HomePresentation />
      </div>
      )
  }
}

function mapStateToProps(state){
  return {
  }
}

export default connect(mapStateToProps)(HomeContainer)
