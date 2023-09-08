import { Button } from 'react-bootstrap'
import { FaCircleArrowLeft, FaCircleArrowRight } from 'react-icons/fa6'

const FactoryFacilityMovementButton = () => {
  return (
    <>
      <div className="text-center">
        <Button variant="link" style={{ fontSize: 'xx-large', color: '#dbcfe1', marginBottom: '1rem' }}>
          <FaCircleArrowLeft />
        </Button>
        <label style={{ fontSize: 'x-large', color: '#dbcfe1', margin: '1rem' }}>SX5000(A)</label>
        <Button variant="link" style={{ fontSize: 'xx-large', color: '#dbcfe1', marginBottom: '1rem' }}>
          <FaCircleArrowRight />
        </Button>
      </div>
    </>
  )
}

export default FactoryFacilityMovementButton
