import React from 'react';
import BigCalendar from 'react-big-calendar';
import events from '../events';
import moment from 'moment';

let allViews = Object.keys(BigCalendar.views).map(k => BigCalendar.views[k])
BigCalendar.momentLocalizer(moment); // or globalizeLocalizer

let Basic = React.createClass({
  render(){
    return (
      <BigCalendar
        {...this.props}
        events={events}
        views={allViews}
        defaultDate={new Date(2015, 3, 1)}
      />
    )
  }
})

export default Basic;
