import * as React from 'react';
import * as classNames from 'classnames';
import { Link } from 'react-router-dom'

export namespace LeftAside {
  export interface Props {
    //toto
  }

  export interface State {
    /* empty */
  }
}

export class LeftAside extends React.Component<LeftAside.Props, LeftAside.State> {

  render() {
    return (
      <div id="aside" className="app-aside modal fade nav-dropdown">
        <div className="left navside grey dk" data-layout="column">
          <div className="navbar no-radius">
            <a href="/" className="navbar-brand md">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="32" height="32">
                <circle cx="24" cy="24" r="24" fill="rgba(255,255,255,0.2)"/>
                <circle cx="24" cy="24" r="22" fill="#1c202b" className="brand-color"/>
                <circle cx="24" cy="24" r="10" fill="#ffffff"/>
                <circle cx="13" cy="13" r="2"  fill="#ffffff" className="brand-animate"/>
                <path d="M 14 24 L 24 24 L 14 44 Z" fill="#FFFFFF" />
                <circle cx="24" cy="24" r="3" fill="#000000"/>
              </svg>
      
              {/* <img src="images/logo.png" alt="." className="hide"> */}
              <span className="hidden-folded inline">pulse</span>
            </a>
          </div>
          <div data-flex className="hide-scroll">
              <nav className="scroll nav-stacked nav-active-primary">
      
                <ul className="nav" data-ui-nav>
                  <li className="nav-header hidden-folded">
                    <span className="text-xs text-muted">Main</span>
                  </li>
                  <li>
                    <Link to="/albums">
                      <span className="nav-icon">
                        <i className="fa fa-play-circle-o" aria-hidden="true"></i>
                      </span>
                      <span className="nav-text">Albums</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/ebooks">
                      <span className="nav-icon">
                      <i className="fa fa-book" aria-hidden="true"></i>
                      </span>
                      <span className="nav-text">eBooks</span>
                    </Link>
                  </li>
                  <li className="nav-header hidden-folded m-t">
                    <span className="text-xs text-muted">Your collection</span>
                  </li>
                  <li>
                    <a data-toggle="modal" data-target="#search-modal">
                      <span className="nav-icon">
                        <i className="material-icons">
                          search
                        </i>
                      </span>
                      <span className="nav-text">Search</span>
                    </a>
                  </li>
                </ul>
              </nav>
          </div>
          {/* <div data-flex-no-shrink>
            <div className="nav-fold dropup">
              <a data-toggle="dropdown">
                  <span className="pull-left">
                    <img src="images/a3.jpg" alt="..." className="w-32 img-circle">
                  </span>
                  <span className="clear hidden-folded p-x p-y-xs">
                    <span className="block _500 text-ellipsis">Rachel Platten</span>
                  </span>
              </a>
              <div className="dropdown-menu w dropdown-menu-scale ">
                <a className="dropdown-item" href="profile.html#profile">
                  <span>Profile</span>
                </a>
                <a className="dropdown-item" href="profile.html#tracks">
                  <span>Tracks</span>
                </a>
                <a className="dropdown-item" href="profile.html#playlists">
                  <span>Playlists</span>
                </a>
                <a className="dropdown-item" href="profile.html#likes">
                  <span>Likes</span>
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="docs.html">
                  Need help?
                </a>
                <a className="dropdown-item" href="signin.html">Sign out</a>
              </div>
            </div>
      
          </div> */}
        </div>
      </div>
    );
  }
}
