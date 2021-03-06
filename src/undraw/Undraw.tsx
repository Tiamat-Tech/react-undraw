import PropTypes from 'prop-types';
import React, { Component } from 'react';

import illustrations from '../components';
import { Props } from './Undraw.interfaces';

/**
 * Undraw illustration.
 */
export default class Undraw extends Component<Props> {
  /**
   * Prop types.
   */
  static propTypes = {
    name: PropTypes.string.isRequired,
    height: PropTypes.string,
    primaryColor: PropTypes.string
  };

  /**
   * Default props.
   */
  static defaultProps = {
    height: '250px',
    primaryColor: '#6c63ff'
  };

  /**
   * Render.
   */
  render() {
    const { name, ...rest } = this.props;
    const Illustration = (illustrations as any)[name];

    if (!Illustration) {
      // tslint:disable-next-line: no-console
      console.log(`Could not find illustration "${name}"!`);
      return null;
    }

    return <Illustration {...rest} />;
  }
}
