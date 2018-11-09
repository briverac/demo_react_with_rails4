import React from "react"
import PropTypes from "prop-types"
class Secondary extends React.Component {
  render () {
    return (
      <React.Fragment>
        Greeting: {this.props.greeting}
      </React.Fragment>
    );
  }
}

Secondary.propTypes = {
  greeting: PropTypes.string
};
export default Secondary
