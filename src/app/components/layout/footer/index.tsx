import * as React from 'react';
import * as classNames from 'classnames';

export namespace Footer {
  export interface Props {
    //toto
  }

  export interface State {
    /* empty */
  }
}

export class Footer extends React.Component<Footer.Props, Footer.State> {

  render() {
    return (
      <footer className="footer">
        <span>Copy right @Front End Team</span>
      </footer>
    );
  }
}
