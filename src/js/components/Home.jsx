import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
import DevTools from 'mobx-react-devtools';

@inject('appStore') @observer
export default class Home extends Component {
  render() {
    let {name} = this.props.appStore;
    return (
      <div>
        <div id='home'>{name}</div>
        <DevTools />
      </div>
    )
  }
}