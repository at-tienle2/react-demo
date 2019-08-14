import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Router, Route, RouteComponentProps } from 'react-router'
import { RootState } from '../../reducers';
import { Header, Footer, LeftAside } from '../../components/layout';

export namespace App {
  export interface Props extends RouteComponentProps<void> {
    /* empty */
  }

  export interface State {
    /* empty */
  }
}

export class App extends React.Component<App.Props, App.State> {

  render() {
    return (
      <div className="app dk" id="app">
        <LeftAside />
        <div id="content" className="app-content white bg box-shadow-z2" role="main">
          <div className="app-header hidden-lg-up white lt box-shadow-z1">
              <div className="navbar">
              <a href="index.html" className="navbar-brand md">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="32" height="32">
                  <circle cx="24" cy="24" r="24" fill="rgba(255,255,255,0.2)"/>
                  <circle cx="24" cy="24" r="22" fill="#1c202b" className="brand-color"/>
                  <circle cx="24" cy="24" r="10" fill="#ffffff"/>
                  <circle cx="13" cy="13" r="2"  fill="#ffffff" className="brand-animate"/>
                  <path d="M 14 24 L 24 24 L 14 44 Z" fill="#FFFFFF" />
                  <circle cx="24" cy="24" r="3" fill="#000000"/>
                </svg>
      
                {/* <img src="/img/logo.png" alt="." className="hide"> */}
                <span className="hidden-folded inline">pulse</span>
              </a>
              <ul className="nav navbar-nav pull-right">
                <li className="nav-item">
                  <a data-toggle="modal" data-target="#aside" className="nav-link">
                    <i className="material-icons">menu</i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="app-footer app-player grey bg">
            <div className="playlist"></div>
          </div>
          <div className="app-body" id="view">
            <div className="page-content">
            <Route path='/contact' component={Contact} />
            <Route path='/news' component={News} />
            </div>
          </div>
        </div>
      </div>  
    );
  }
}

const Contact = () => <h1>We are located at 555 Jackson St.</h1>
const News = () => <h1>Hello from News</h1>

function mapStateToProps(state: RootState) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}
