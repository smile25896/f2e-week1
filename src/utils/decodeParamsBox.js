import { decodeMailbox } from '../tool/getSomething';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

function decodeParamsBox(WrapComponent) {
  return class extends Component {
    static propTypes = {
      match: PropTypes.object.isRequired,
    };
    render() {
      if (this.props?.match?.params?.mailbox) {
        return (
          <WrapComponent
            mailbox={decodeMailbox(this.props.match.params.mailbox)}
            {...this.props}
          />
        );
      }
      return <WrapComponent {...this.props} />;
    }
  };
}

export default decodeParamsBox;
