import { Col } from 'react-bootstrap'

const style = {
  title: {
    fontSize: 'large',
    color: '#dbcfe1',
    padding: '0.1rem 0 0 0.7rem'
  }
}

const FactoryFacilityInfo = (props) => {

  const currentFacility = props.currentFacility
  
  return (
    <>
      <div style={style.title}>기본정보</div>
      <Col sm={1}></Col>
      <Col sm={10}>
        <div style={{ fontSize: 'medium', display: 'flex', justifyContent: 'space-between', color: 'white' }}>
          <label>Device</label>
          <label>{currentFacility.device}</label>
        </div>
        <div style={{ fontSize: 'medium', display: 'flex', justifyContent: 'space-between', color: 'white' }}>
          <label>Model</label>
          <label>{currentFacility.model}</label>
        </div>
      </Col>
      <Col sm={1}></Col>
    </>
  )
}

export default FactoryFacilityInfo
