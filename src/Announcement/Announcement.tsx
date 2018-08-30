import * as React from 'react';
import marked from 'marked';

import * as announcement from './message.json';

const style = require('./announcement.sass');

const LOCALSTORAGE_KEY = 'announcementId';

interface Announcement {
  date: string;
  heading: string;
  message: string;
}

interface State {
  announcement: Announcement;
  isDismissed: boolean;
}

export default class Announcements extends React.Component<{}, State> {
  content: any;
  
  static lastSeen: string | null = localStorage.getItem(LOCALSTORAGE_KEY);

  constructor(props) {
    super(props);
    this.content = React.createRef();
    this.state = {
      announcement: announcement,
      isDismissed: Announcements.lastSeen === announcement.date,
    };
  }

  // componentWillReceiveProps(props: Props) {
  //   if (props.data === undefined || props.data.networkStatus !== 7) {
  //     return;
  //   }
  //   const announcement = props.data.announcements[0];
  //   this.setState(prevState => ({
  //     ...prevState,
  //     announcement,
  //     isDismissed: Announcements.lastSeen === announcement.date,
  //   }));
  // }

  dismiss = () => {
    if (this.state.announcement) {
      localStorage.setItem(LOCALSTORAGE_KEY, this.state.announcement.date);
    }
    this.setState(prevState => ({ ...prevState, isDismissed: true }));
  };

  render() {

    const html = marked(this.state.announcement.message);

    if (!this.state.announcement || this.state.isDismissed) {
      return null;
    }
    return (
      <div className="announcement">
        <div className="announcement_content">
          <span>
            <span className="announcement_heading" children={this.state.announcement.heading} />
            <span 
              ref={this.content}
              dangerouslySetInnerHTML={{
                __html: html
              }}
            />
          </span>
          <button className="announcement_dismiss" children="dismiss" onClick={this.dismiss} />
        </div>
      </div>
    );
  }
}
