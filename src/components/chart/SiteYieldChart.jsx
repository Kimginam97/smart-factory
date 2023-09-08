import React from 'react'
import ReactApexChart from 'react-apexcharts'

const options = {
  chart: {
    height: 350,
    type: 'radialBar',
    toolbar: {
      show: false
    },
    background: 'rgba(255, 255, 255, 0)' // 전체 색상
  },
  plotOptions: {
    radialBar: {
      startAngle: -135,
      endAngle: 225,
      hollow: {
        margin: 0,
        size: '65%',
        background: 'rgba(255, 255, 255, 0.1)', // 차트 안 원형 색상
        image: undefined,
        imageOffsetX: 0,
        imageOffsetY: 0,
        position: 'front',
        dropShadow: {
          enabled: true,
          top: 3,
          left: 0,
          blur: 4,
          opacity: 0.9
        }
      },
      track: {
        background: '#fff',
        strokeWidth: '70%',
        margin: 0, // margin is in pixels
        dropShadow: {
          enabled: true,
          top: -3,
          left: 0,
          blur: 4,
          opacity: 0.35
        }
      },

      dataLabels: {
        show: true,
        name: {
          offsetY: -10,
          show: true,
          color: 'rgba(255, 255, 255, 0)', // labels 감추기 위해 투명 색 지정
          fontSize: '15px'
        },
        value: {
          formatter: function (val) {
            return val + '%'
          },
          color: '#fff',
          offsetY: -5,
          fontSize: '20px',
          show: true
        }
      }
    }
  },
  fill: {
    type: 'gradient',
    gradient: {
      shade: 'dark',
      type: 'horizontal',
      shadeIntensity: 0.5,
      gradientToColors: ['#ABE5A1'],
      inverseColors: true,
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 100]
    }
  },
  stroke: {
    lineCap: 'round'
  },
  labels: ['value']
}

const style = {
  chartLabel: {
    fontSize: 'medium',
    color: 'white'
  },
  title: {
    fontSize: 'large',
    color: '#dbcfe1',
    padding: '0.1rem 0 0 0.7rem'
  }
}

const SiteYieldChart = (props) => {

  const currentFacility = props.currentFacility

  const option = {
    maximumFractionDigits: 2
  };

  const pass = currentFacility.pass.toLocaleString('ko-KR')
  const fail = currentFacility.fail.toLocaleString('ko-KR')
  const inQty = currentFacility.inQty.toLocaleString('ko-KR')
  const outQty = currentFacility.outQty.toLocaleString('ko-KR')
  const rate = (Number(currentFacility.outQty)/(Number(currentFacility.inQty))*100).toLocaleString('ko-KR', option)
  
  return (
    <>
      <div style={style.title}>Site Yield</div>
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
        <label style={style.chartLabel}>PASS</label>
        <label style={style.chartLabel}>{pass}건</label>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
        <label style={style.chartLabel}>FAIL</label>
        <label style={style.chartLabel}>{fail}건</label>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ padding: '2rem 0 0 0' }}>
          <label style={style.chartLabel}>In Qty</label>
          <br></br>
          <label style={style.chartLabel}>{inQty}</label>
        </div>
        <ReactApexChart options={options} series={[rate]} type="radialBar" height="100%" />
        <div style={{ padding: '2rem 0 0 0' }}>
          <label style={style.chartLabel}>Out Qty</label>
          <br></br>
          <label style={style.chartLabel}>{outQty}</label>
        </div>
      </div>
    </>
  )
}

export default SiteYieldChart
