import React from 'react'
import ReactApexChart from 'react-apexcharts'

const options = {
  chart: {
    // height: '100%',
    type: 'radialBar',
    // redrawOnParentResize: true,
    // redrawOnWindowResize: true,
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
  chartDescription: {
    // position: 'absolute',
    color: 'white'
  },
  inQty: {
    // position: 'absolute',
    color: 'white',
    fontSize: '16px'
  },
  outQty: {
    // position: 'absolute',
    color: 'white',
    fontSize: '16px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
  }
}

export default function BakeChart() {
  return (
    <>
      <div style={style.chartDescription}>Bake</div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '0.5fr 2fr 0.5fr',
          gap: '1px',
          height: '100%'
        }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            ...style.inQty
          }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <label>In Qty</label>
            <label>64,238</label>
          </div>
        </div>

        <div style={{ alignItems: 'center' }}>
          <ReactApexChart options={options} series={[65.3]} type="radialBar" height={'100%'} />
        </div>
        <div style={style.outQty}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <label>Qty</label>
            <label>64,238</label>
          </div>
        </div>
      </div>
    </>
  )
}
