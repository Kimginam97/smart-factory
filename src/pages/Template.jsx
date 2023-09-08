import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import FactoryPartModelScene from '../components/three/FactoryPartModelScene'
import FactoryScene from '../components/three/FactoryScene'
import LeftSidebar from '../components/sidebar/LeftSidebar'
import Header from '../components/header/Header'

import GoogleChart from '../components/chart/GoogleChart'

const Template = () => {
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      {/* 사이드바 */}
      <LeftSidebar />
      <Container fluid>
        {/* 헤더 */}
        <Row className="border border-danger" style={{ height: '10%' }}>
          <Header />
        </Row>
        {/* 모델  */}
        <Row className="border border-danger" style={{ height: '60%' }}>
          {/* 기본정보, 가동상태, 소모전력 */}
          <Col sm={3}>
            <Row className="h-25 p-2 border border-danger">기본정보</Row>
            <Row className="h-25 p-2 border border-danger">가동상태</Row>
            <Row className="h-50 p-2 border border-danger">소모전력</Row>
          </Col>
          {/* 공장 부품 모델 */}
          <Col sm={6} className="p-2 border border-danger" style={{ height: '100%' }}>
            <FactoryPartModelScene />
          </Col>
          <Col sm={3} className="border border-danger">
            {/* 공장 모델 */}
            <Row className="h-50 border border-danger" style={{ height: '100%' }}>
              <FactoryScene />
            </Row>
            {/* 설비 가용률 */}
            <Row className="h-50 p-2 border border-danger">설비 가용률</Row>
          </Col>
        </Row>
        {/* 차트 */}
        <Row className="p-1 border border-danger" style={{ height: '30%' }}>
          <Col sm={3} className="border border-danger">
            <GoogleChart />
          </Col>
          <Col sm={3} className="border border-danger">
          <GoogleChart />
          </Col>
          <Col sm={3} className="border border-danger">
            <GoogleChart />
          </Col>
          <Col sm={3} className="border border-danger">
            <GoogleChart />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Template
