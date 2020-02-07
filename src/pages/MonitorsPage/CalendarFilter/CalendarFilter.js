import React from 'react'
import { useDispatch } from 'react-redux'
import NgoDropDown from '../NgoDropDown'
import './CalFilter.scss'
import RadioStatusFilter from '../RadioButton/RadioStatusFilter'

function CalendarFilter(props) {
  const dispatch = useDispatch()

  const onQuickFilterByCal = () => {
    dispatch({ type: 'FILTER_CAL', payload: 'FILTER_CAL' })
  }

  return (
    <>
      <div className='calendarContainer'>
        <div className='subCalendarContainer'>
          <div className='calContainer'>
            <input type='date' onChange={onQuickFilterByCal} id='dateCal' />
          </div>
          <div className='calContainerComp'>
            <input type='date' onChange={onQuickFilterByCal} id='compCal' />
          </div>
        </div>

        <div className='dropDownContainer'>
          <div className='dropInner'>
            <NgoDropDown />
          </div>
          <div className='radioContainer'>
            <RadioStatusFilter />
          </div>
        </div>
      </div>
    </>
  )
}

export default CalendarFilter
