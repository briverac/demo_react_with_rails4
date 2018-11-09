import React from "react"
import PropTypes from "prop-types"
import Secondary from './Secondary'
class Main extends React.Component {
  render () {
    return (
      <Secondary greeting={this.props.greeting} >
      </Secondary>
    );
  }
}

Main.propTypes = {
  greeting: PropTypes.string
};
export default Main
