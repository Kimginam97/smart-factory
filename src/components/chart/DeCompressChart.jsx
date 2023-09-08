import ReactApexChart from 'react-apexcharts'

const style = {
  title: {
    display: 'flex',
    alignItems: 'center',
    fontSize: 'large',
    color: '#dbcfe1',
  }
}

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

const DeCompressChart = (props) => {
  return (
    <>
      <div style={{ display: 'flex', justifyContent:'center' }}>
        <label style={style.title}>컴프레스 압력</label>
      </div>
      <ReactApexChart options={options} series={[props.deCompress]} type="radialBar" height="100%" />
    </>
  )
}

export default DeCompressChart
