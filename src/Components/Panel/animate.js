import React, { Component } from 'react';
import { FadeTransform} from 'react-animation-components';


class Animate extends Component {

  render() {
    return (
      <>
      {this.props.initial ?
      <FadeTransform
        in
        transformProps={{
        enterTransform: 'translateY(0px)',
        exitTransform: 'translateY(-100px)'
      }}
         fadeProps={{
          enterOpacity: 1,
          exitTransform: 0,
      }}
        duration={800}
      >
      {this.props.children}

      </FadeTransform>
        :this.props.children}
      </>
    );
  }

}

export default Animate;
