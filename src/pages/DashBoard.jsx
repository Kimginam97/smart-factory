import { useEffect, useState } from 'react';
import { FaCircleArrowLeft, FaCircleArrowRight } from 'react-icons/fa6';
import { Container, Row, Col, Button } from 'react-bootstrap';

import FactoryPartModelScene from '../components/three/FactoryPartModelScene';
import MiniMapFactoryScene from '../components/three/MiniMapFactoryScene';
import LeftSidebar from '../components/sidebar/LeftSidebar';

// 차트
import FacilityAvailabilityRateChart from '../components/chart/FacilityAvailabilityRateChart';
import SiteYieldChart from '../components/chart/SiteYieldChart';
import CarouselTemplate from '../components/carouse/CarouselTemplate.jsx.jsx';

// 테이블
import StateHistoryTable from '../components/table/StateHistoryTable';
import FactoryProcessInfoTable from '../components/table/FactoryProcessInfoTable';

// 버튼
import OperationalStatusButton from '../components/button/OperationalStatusButton';

// 정보
import FactoryFacilityInfo from '../components/info/FactoryFacilityInfo';

import factoryFacility from '../db/factoryFacility.json';

import { clickModelPostion } from '../store';

const DashBoard = () => {
  const {
    modelPartName,
    setPosition,
    setLerping,
    setModelPartName,
    setCameraMove,
  } = clickModelPostion((state) => state);

  const [currentIndex, setCurrentIndex] = useState(0);
  const currentFacilityId = factoryFacility.map((value) => value.id);
  const currentFacility = factoryFacility.filter(
    (value) => value.id === modelPartName
  )[0];

  const handlePrevClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(factoryFacility.length - 1);
    }
  };

  const handleNextClick = () => {
    if (currentIndex < factoryFacility.length -1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  useEffect(() => {
    setModelPartName(currentFacilityId[currentIndex]);
  }, [currentIndex])
  
  useEffect(() => {
    setPosition(currentFacility.modelPosition);
    setLerping(true);
    setCameraMove(true);
  },[currentFacility])

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      {/* 사이드바 */}
      <LeftSidebar />

      {/* 메인 */}
      <Container fluid>
        {/* 헤더 */}
        <Row className="" style={{ height: '10%' }}>
          <Col sm={3}></Col>
          <Col sm={6}>
            <Row style={{ height: '20%' }}></Row>
            <Row className="h-25 m-1">
              <div className="text-center">
                <Button
                  variant="link"
                  style={{
                    fontSize: 'xx-large',
                    color: '#dbcfe1',
                    marginBottom: '1rem',
                  }}
                  onClick={handlePrevClick}
                >
                  <FaCircleArrowLeft />
                </Button>
                <label
                  style={{
                    fontSize: 'x-large',
                    color: '#dbcfe1',
                    margin: '1rem',
                  }}
                >
                  {currentFacility.model}
                </label>
                <Button
                  variant="link"
                  style={{
                    fontSize: 'xx-large',
                    color: '#dbcfe1',
                    marginBottom: '1rem',
                  }}
                  onClick={handleNextClick}
                >
                  <FaCircleArrowRight />
                </Button>
              </div>
            </Row>
          </Col>
          <Col sm={3}></Col>
        </Row>

        {/* 모델  */}
        <Row className="" style={{ height: '60%' }}>
          {/* 기본정보, 가동상태, 소모전력 */}
          <Col sm={3} className="h-100">
            <Row className="h-25 m-1 border border-secondary rounded">
              <FactoryFacilityInfo currentFacility={currentFacility} />
            </Row>
            <Row className="h-25 m-1 border border-secondary rounded">
              <OperationalStatusButton currentFacility={currentFacility} />
            </Row>
            <Row className="h-50 m-1 border border-secondary rounded">
              <CarouselTemplate currentFacility={currentFacility} />
            </Row>
          </Col>

          <Col sm={6} className="h-100" style={{ height: '100%' }}>
            <Row className="h-100 border border-secondary rounded">
              <FactoryPartModelScene />
            </Row>
          </Col>

          <Col sm={3} className="h-100">
            {/* 공장 모델 */}
            <Row
              className="h-50 m-1"
              style={{ height: '100%', borderRadius: '1rem' }}
            >
              <MiniMapFactoryScene />
            </Row>
            {/* 설비 가용률 */}
            <Row className="h-50 m-1 border border-secondary rounded">
              <FacilityAvailabilityRateChart
                currentFacility={currentFacility}
              />
            </Row>
          </Col>
        </Row>

        {/* 차트 */}
        <Row className="" style={{ height: '35%', marginTop: '1rem' }}>
          <Col sm={3} className="h-100">
            <Row className="h-75 m-1 border border-secondary rounded">
              <StateHistoryTable currentFacility={currentFacility} />
            </Row>
          </Col>
          <Col sm={6} className="h-100">
            <Row className="h-75 border border-secondary rounded">
              <FactoryProcessInfoTable currentFacility={currentFacility} />
            </Row>
          </Col>
          <Col sm={3} className="h-100">
            <Row className="h-75 m-1 border border-secondary rounded">
              <SiteYieldChart currentFacility={currentFacility} />
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DashBoard;
