import { ApexOptions } from 'apexcharts';

const ApexChartOptions: ApexOptions = {
  chart: {
    id: 'basic-bar',
    toolbar: {
      show: false
    },
    dropShadow: {
      enabled: true,
      top: 0,
      left: 0,
      blur: 3,
      opacity: 0.2
    },
    animations: {
      enabled: true,
      easing: 'easeinout',
      speed: 800,
      animateGradually: {
        enabled: true,
        delay: 150
      },
      dynamicAnimation: {
        enabled: true,
        speed: 350
      }
    }
  },
  plotOptions: {
    bar: {
      borderRadius: 4,
      dataLabels: {
        position: 'top'
      }
    }
  },
  dataLabels: {
    // enabled: false,
    enabled: true
  },
  xaxis: {
    categories: ['Depo.', 'Withd.', 'AAB.', 'UAB.', 'Bet', 'Win', 'Canc.']
  },
  yaxis: {
    show: false
  },
  theme: {
    monochrome: {
      enabled: true,
      color: '#255aee',
      shadeTo: 'light',
      shadeIntensity: 0.65
    }
  },
  markers: {
    colors: ['#F44336', '#E91E63', '#9C27B0']
  }
};

export default ApexChartOptions;
