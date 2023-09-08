import React from 'react'

// 사이드바
import LeftSidebar from '../components/sidebar/LeftSidebar'

// 차트
import BakeChart from '../components/chart/BakeChart'
import VisionChart from '../components/chart/VisionChart'
import IqcChart from '../components/chart/IqcChart'
import TotalYieldChart from '../components/chart/TotalYieldChart'
import AnomalyDetectionTable from '../components/table/AnomalyDetection'
import MtbfRemainingTime from '../components/table/MtbfRemainingTime'

// 공장내부 환경센서
import FactoryIoTSensorInfo from '../components/info/FactoryIoTSensorInfo'

// 시계
import RearTimeInfo from '../components/info/RearTimeInfo'

// 3D 모델
import MiniMapFactoryScene from '../components/three/MiniMapFactoryScene'

const style = {
  home: {
    display: 'grid',
    gap: '5px',
    paddingLeft: '5px',
    paddingTop: '5px',
    pdddingBottom: '5px',
    // gridAutoRows: 'minmax(120px, auto)',
    width: '100%',
    // height: '100vh',
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    marginBottom: '10px'
  },
  box: {
    padding: '10px',
    borderRadius: '10px',
    border: '1px solid rgb(245, 242, 242, 0.3)',
    backgroundColor: 'rgb(0, 255, 255, 0)',
    // height: 'auto',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  bigBox: {
    padding: '10px',
    borderRadius: '10px',
    border: '1px solid rgb(245, 242, 242, 0.3)',
    backgroundColor: 'rgb(0, 255, 255, 0)',
    gridColumn: 'span 2',
    gridRow: 'span 1',
    marginTop: '5px',
    height: '50vh',
    marginBottom: '0px'
  },
  smallBox: {
    // padding: '10px',
    borderRadius: '10px',
    border: '1px solid rgb(245, 242, 242, 0.3)',
    backgroundColor: 'rgb(0, 255, 255, 0)',

    // marginTop: '5px',
    height: '23vh',
    width: '100%',
    marginBottom: '0px'
  }
}

const Home = () => {
  return (
    <div className="home" style={{ display: 'flex', height: '100vh' }}>
      <LeftSidebar />
      {/* <Container className="home" style={style.home}> */}
      <div className="home" style={style.home}>
        {/* ------------------------- */}

        {/* 공장 내부 환경 센서 */}
        <div className="box bigBox" style={{ ...style.bigBox, ...style.box }}>
          <FactoryIoTSensorInfo />
        </div>

        {/* 미니맵 */}
        <div className="box bigBox" style={{ ...style.bigBox, ...style.box }}>
          <MiniMapFactoryScene />
        </div>

        {/* 정보 */}
        <div className="box box3" style={{ ...style.box, ...style.smallBox }}></div>

        {/* IQC 차트 */}
        <div
          className="box box4"
          style={{ ...style.box, ...style.smallBox, display: 'grid', gridTemplateColumns: '1fr' }}>
          <IqcChart />
        </div>

        {/* Bake */}
        <div
          className="box box5"
          style={{ ...style.box, ...style.smallBox, display: 'grid', gridTemplateColumns: '1fr' }}>
          <BakeChart />
        </div>

        {/* Vision Inspect */}
        <div
          className="box box6"
          style={{ ...style.box, ...style.smallBox, display: 'grid', gridTemplateColumns: '1fr' }}>
          <VisionChart />
        </div>

        {/* Total Yield */}

        <div
          className="box box7"
          style={{ ...style.box, ...style.smallBox, display: 'grid', gridTemplateColumns: '1fr' }}>
          <TotalYieldChart />
        </div>

        {/* 이상감지 */}
        <div
          className="box box8"
          style={{ ...style.box, ...style.smallBox, display: 'grid', gridTemplateColumns: '1fr' }}>
          <AnomalyDetectionTable />
        </div>

        {/* 차트 6 */}
        <div className="box box9" style={{ ...style.box, ...style.smallBox }}>
          <MtbfRemainingTime />
        </div>

        {/* 시계 */}
        <div className="box box10" style={{ ...style.box, ...style.smallBox, display: 'flex' }}>
          <RearTimeInfo />
        </div>
      </div>
    </div>
  )
}

export default Home
