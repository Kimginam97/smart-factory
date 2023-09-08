import React from 'react'
import { FaTemperatureHigh, FaTint, FaWind, FaCompress } from 'react-icons/fa'

const FactoryIoTSensorInfo = () => {
  const sensorStyle = {
    display: 'flex',
    alignItems: 'center',
    color: 'white',
    marginBottom: '20px',
    flexDirection: 'column',
    flexWarp: 'wrap'
  }

  const iconStyle = {
    // marginRight: '10px',
    width: '50px',
    height: '50px',
    marginBottom: '10px'
  }

  const containerStyle = {
    display: 'grid',
    justifyContent: 'left',
    alignItems: 'center',
    fontSize: '50px'
  }
  const horizontalIconContainer = {
    display: 'flex',
    alignItems: 'center'
  }
  return (
    <div>
      <div style={{ ...containerStyle, color: 'white' }}>Final Test</div>

      <div style={{ ...sensorStyle }}>
        <div style={horizontalIconContainer}>
          <FaTemperatureHigh style={{ ...iconStyle }} />
          <span>온도: {23}°C</span>
          <FaTint size={24} style={{ ...iconStyle }} />
          <span>습도: {60}%</span>
        </div>
        <div style={horizontalIconContainer}></div>
      </div>

      <hr style={{ background: 'rgb(255,255,255, 0.4)', height: '5px' }} />

      <div style={{ ...sensorStyle }}>
        <div style={horizontalIconContainer}>
          <FaWind style={{ ...iconStyle }} />
          <span>풍속: {3} km/h</span>
          <FaCompress style={{ ...iconStyle }} />
          <span>압력: {1} atm</span>
        </div>
      </div>
    </div>
  )
}

export default FactoryIoTSensorInfo
