import React from 'react';
import 'react-calendar-heatmap/dist/styles.css';
import CalendarHeatmap from 'react-calendar-heatmap';
import ReactTooltip from 'react-tooltip';

import './heatChartStyles.scss';

//Redux 

const HeatChart = props => {
 
const today = new Date();

function shiftDate(date, numDays) {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() + numDays);
  return newDate;
}

const statusHistory = props.history.filter(day => {
  return day.sensor_id === props.selectedPump.physical_id
})
const { status, sensor_pid } = props.selectedPump


return( 
<div className='calendarBox'>
<CalendarHeatmap
  startDate={shiftDate(today, -360)}
  endDate={today}
  value={statusHistory}

  classForValue={value => {
    if (!value) {
      return 'color-empty';
    }
    return `color-github-${value.count}`;
  }}
  tooltipDataAttrs={value => {
    return {
      'data-tip': `${value.date.toISOString().slice(0, 10)} has count: ${
        value.count
      }`,
    };
  }}
  showWeekdayLabels={true}
  onClick={value => alert(`Clicked on value with count: ${value.count}`)}
/>
<ReactTooltip />
</div>
)   
}

export default HeatChart