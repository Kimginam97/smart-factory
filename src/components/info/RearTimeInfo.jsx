import { useState, useEffect } from 'react'

const RearTime = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDateTime(new Date())
    }, 1000) // 1초마다 업데이트

    return () => {
      clearInterval(interval)
    }
  }, [])

  const formatNumber = (num) => (num < 10 ? `0${num}` : num)

  const hours = formatNumber(currentDateTime.getHours())
  const minutes = formatNumber(currentDateTime.getMinutes())
  const seconds = formatNumber(currentDateTime.getSeconds())

  // return (
  //   <div>
  //     <h1 style={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}>
  //       {hours}:{minutes}:{seconds}
  //     </h1>
  //     <hr style={{ background: 'white', height: '5px' }} />
  //     <p
  //       style={{
  //         fontWeight: 'bold',
  //         color: 'white',
  //         textAlign: 'center'
  //       }}>
  //       {currentDateTime.toLocaleDateString()}
  //     </p>
  //   </div>
  // )
  return (
    <>
      <div
        style={{
          // display: 'flex',
          // gridTemplateColumns: '0.5fr 2fr 0.5fr',
          // gap: '1px',
          height: '100%'
        }}>
        <div style={{ alignItems: 'center' }}>
          <div>
            <h1 style={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}>
              {hours}:{minutes}:{seconds}
            </h1>
            <hr style={{ background: 'white', height: '5px' }} />
            <p
              style={{
                fontWeight: 'bold',
                color: 'white',
                textAlign: 'center'
              }}>
              {currentDateTime.toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default RearTime
