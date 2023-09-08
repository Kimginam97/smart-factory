import ReactApexChart from 'react-apexcharts';

const style = {
  title: {
    display: 'flex',
    alignItems: 'center',
    fontSize: 'medium',
    color: '#dbcfe1',
    width: '40%',
  },
  value: {
    display: 'flex',
    alignItems: 'center',
    fontSize: 'large',
    color: '#dbcfe1',
    width: '30%',
  },
};


const options = {
  chart: {
    height: 350,
    type: 'area',
    background: '#fffff',
    dropShadow: {
      enabled: true,
      color: '#000',
      top: 18,
      left: 7,
      blur: 10,
      opacity: 0.2,
    },
    toolbar: {
      show: false,
    },
    foreColor: '#F7F4F4',
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'smooth',
  },
  markers: {
    size: 2,
  },
  xaxis: {
    categories: ['09:56:15', '09:56:30', '09:56:45', '09:57:00'],
  },
  yaxis: {
    tickAmount: 3,
  },
  theme: {
    mode: 'dark',
    palette: 'palette4',
    monochrome: {
      enabled: false,
      color: '#255aee',
      shadeTo: 'light',
      shadeIntensity: 0.65,
    },
  },
};

const PowerConsumptionLineChart = (props) => {

  const series = [
    {
      data: props.powerConsumption
    },
  ];
  
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <label style={style.title}>소모전력</label>
        <label style={style.value}>
          <strong style={{ color: '#6161cf', marginRight: '0.5rem' }}>
            {props.powerConsumption[props.powerConsumption.length - 1]}
          </strong>
          HWX
        </label>
      </div>

      <ReactApexChart
        series={series}
        options={options}
        type="area"
        height={'100%'}
        width={'100%'}
      />
    </>
  );
};

export default PowerConsumptionLineChart;
