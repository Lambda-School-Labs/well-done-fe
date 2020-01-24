import React, { useState } from 'react'
import 'antd/dist/antd.css'
import { Slider } from 'antd'
import { sensorSelected, FILTERED_SENSORS } from '../../actions/sensorActions'

import { useSelector, dispatch, useDispatch } from 'react-redux'

import './sensorSelector.scss'

const SensorSelector = () => {
  const sensorIds = useSelector(state => state.sensorReducer.sensors)
  const grid = useSelector(state => state.sensorReducer.gridInfo)
  console.log(`grid`, grid)

  const physical_id = sensorIds.map(e => {
    return e.physical_id
  })

  let lowest = Math.min(...physical_id)

  let highest = Math.max(...physical_id)

  const dispatch = useDispatch()

  let highestList = []
  let finalList = []

  function onAfterChange(value) {
    console.log('onAfterChange: ', value)
    grid.map(e => {
      if (e.physical_id <= value[1]) {
        return highestList.push(e)
      }
    })
    highestList.map(e => {
      if (e.physical_id >= value[0]) {
        return finalList.push(e)
      }
    })
    dispatch({ type: FILTERED_SENSORS, payload: finalList })
  }
  const [open, setOpen] = useState(false)

  const toggleSensor = () => {
    let x = document.getElementById('slider')
    if (x.style.display === 'none') {
      x.style.display = 'block'
    } else {
      x.style.display = 'none'
    }
  }

  return (
    <>
      <button onClick={toggleSensor}>Sensor Ids</button>
      <div id='slider'>
          <h2>Select range of Sensor Ids</h2>
        <Slider
          range
          min={lowest}
          max={highest}
          step={10}
          defaultValue={[lowest, highest]}
          onAfterChange={onAfterChange}
        />
      </div>
    </>
  )
}
export default SensorSelector
