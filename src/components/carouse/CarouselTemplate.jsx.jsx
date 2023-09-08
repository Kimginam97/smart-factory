import { useRef } from 'react'
import { Carousel, Button } from 'react-bootstrap'

import { BsFillCaretLeftFill, BsFillCaretRightFill } from 'react-icons/bs'
import PowerConsumptionLineChart from '../chart/PowerConsumptionLineChart'
import DeCompressChart from '../chart/DeCompressChart'

const style = {
  title: {
    display: 'flex',
    alignItems: 'center',
    fontSize: 'large',
    color: '#dbcfe1'
  },
  button: {
    color: '#dbcfe1',
    fontSize: 'large'
  }
}

const CarouselTemplate = (props) => {
  const caroueslRef = useRef(null)

  const onPrevClick = () => {
    caroueslRef.current.prev()
  }
  const onNextClick = () => {
    caroueslRef.current.next()
  }

  return (
    <>
      <div style={{ display: 'flex', alignItems: 'censter', justifyContent: 'space-between' }}>
        <label style={style.title}>실시간정보</label>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'end' }}>
          <Button variant="link" onClick={onPrevClick} style={style.button}>
            <BsFillCaretLeftFill />
          </Button>
          <Button variant="link" onClick={onNextClick} style={style.button}>
            <BsFillCaretRightFill />
          </Button>
        </div>
      </div>

      <Carousel ref={caroueslRef} controls={false} indicators={false}>
        <Carousel.Item>
          <PowerConsumptionLineChart powerConsumption={props.currentFacility.powerConsumption} />
        </Carousel.Item>
        <Carousel.Item>
          <DeCompressChart deCompress={props.currentFacility.deCompress} />
        </Carousel.Item>
      </Carousel>
    </>
  )
}

export default CarouselTemplate
