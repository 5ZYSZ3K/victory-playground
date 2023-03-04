import './App.css';
import {VictoryChart} from 'victory-chart'
import {VictoryScatter, VictoryAxis, VictoryLabel, VictoryBar, VictoryErrorBar, VictoryTheme, VictoryLine} from 'victory'

const data = [
  {x: 4.5, y: 0.0004, y1: 0.0019, errorx: 1, errory: 0.00017, errory1: 0.0077885},
  {x: 9.5, y: 0.0017, y1: 0.0062, errorx: 1, errory: 0.00036, errory1: 0.0077889},
  {x: 14, y: 0.0037, y1: 0.0052, errorx: 1, errory: 0.00054, errory1: 0.0077888},
  {x: 18.5, y: 0.0066, y1: 0.0061, errorx: 1.5, errory: 0.00107, errory1: 0.0077889},
  {x: 23.5, y: 0.0106, y1: 0.0110, errorx: 1.5, errory: 0.00137, errory1: 0.0077893},
  {x: 28.5, y: 0.0157, y1: 0.0184, errorx: 1.5, errory: 0.00167, errory1: 0.0077900},
  {x: 33, y: 0.0211, y1: 0.0209, errorx: 2, errory: 0.00261, errory1: 0.0077902},
  {x: 38, y: 0.0282, y1: 0.0284, errorx: 2, errory: 0.00304, errory1: 0.0077908},
  {x: 42.5, y: 0.0355, y1: 0.0373, errorx: 2.5, errory: 0.00430, errory1: 0.0077916},
  {x: 47, y: 0.0437, y1: 0.0427, errorx: 3, errory: 0.00578, errory1: 0.0077921},
  {x: 51.5, y: 0.0528, y1: 0.0539, errorx: 3.5, errory: 0.00750, errory1: 0.0077931},
  {x: 56, y: 0.0630, y1: 0.0621, errorx: 4, errory: 0.00946, errory1: 0.0077939},
]

const data2 = [
  {x: 2.42, y:2},
  {x: 2.50, y:18},
  {x: 2.58, y:59},
  {x: 2.66, y:18},
  {x: 2.74, y:4},
]

const brass = [
  {x: 9.81, y: 0.2975},
  {x: 14.715, y: 0.4325},
  {x: 19.62, y: 0.535},
  {x: 24.525, y: 0.615},
  {x: 29.43, y: 0.705},
  {x: 34.335, y: 0.79},
  {x: 39.24, y: 0.84},
  {x: 44.145, y: 0.9175},
  {x: 49.05, y: 1},
  {x: 53.955, y: 1.0525},
  {x: 58.86, y: 1.115}
]

const steel = [
  {x: 19.62, y: 0.5875},
  {x: 29.43, y: 0.7625},
  {x: 39.24, y: 0.91},
  {x: 49.05, y: 1.0475},
  {x: 58.86, y: 1.1725},
  {x: 68.67, y: 1.2975},
  {x: 78.48, y: 1.4175},
  {x: 88.29, y: 1.525}
]

const americanData = [
  {year: 1989.7, n: 473, knewAbout: 0.96, origin: 'phone', name: "Duckworth", knewItCause: 0.118},
  {year: 1990.3, n: 40949, knewAbout: 0.691, origin: 'unknown', name: "Halpern and Warner", knewItCause: 0.21},
  {year: 1991, n: 0, knewAbout: 0.76, origin: 'unknown', name: "Ford", knewItCause: 0},
  {year: 1992, n: 0, knewAbout: 0.8, origin: 'phone', name: "Golding", knewItCause: 0.75},
  {year: 1993, n: 685, knewAbout: 0.79, origin: 'phone', name: "Mainous and Hagen", knewItCause: 0},
  {year: 1994, n: 0, knewAbout: 0.73, origin: 'phone', name: "Gregory and Jalbert", knewItCause: 0},
  {year: 1996, n: 1209, knewAbout: 0.82, origin: 'phone', name: "Wang", knewItCause: 0.21},
  {year: 1998, n: 50, knewAbout: 0.72, origin: 'unknown', name: "Hampson", knewItCause: 0},
  {year: 1999, n: 0, knewAbout: 0.63, origin: 'phone', name: "Gregory and Jalbert", knewItCause: 0},
  {year: 2009, n: 0, knewAbout: 0.72, origin: 'unknown', name: "Kelley and Brown", knewItCause: 0},
  {year: 2012, n: 0, knewAbout: 0.73, origin: 'unknown', name: "Kelley and Brown", knewItCause: 0},
]

const monoCharacteristics = [
  {x: 0.052, ve: 0.00026, a: 0.0371, ae: 0.001},
  {x: 0.187, ve: 0.000935, a: 0.0357, ae: 0.001},
  {x: 0.282, ve: 0.00141, a: 0.031, ae: 0.001},
  {x: 0.32, ve: 0.0016, a: 0.0258, ae: 0.001},
  {x: 0.333, ve: 0.001665, a: 0.0232, ae: 0.001},
  {x: 0.352, ve: 0.00176, a: 0.0183, ae: 0.001},
  {x: 0.365, ve: 0.001825, a: 0.0142, ae: 0.001},
  {x: 0.234, ve: 0.00117, a: 0.0343, ae: 0.001},
  {x: 0.262, ve: 0.00131, a: 0.0325, ae: 0.001},
  {x: 0.294, ve: 0.00147, a: 0.0294, ae: 0.001},
  {x: 0.277, ve: 0.001385, a: 0.0313, ae: 0.001},
  {x: 0.28, ve: 0.0014, a: 0.0311, ae: 0.001},
]

const poliCharacteristics = [
  {x: 0.058, ve: 0.00029, a: 0.0025, ae: 0.001},
  {x: 0.43, ve: 0.00215, a: 0.0024, ae: 0.001},
  {x: 1.143, ve: 0.005715, a: 0.0021, ae: 0.001},
  {x: 1.38, ve: 0.0069, a: 0.0019, ae: 0.001},
  {x: 1.572, ve: 0.00786, a: 0.0017, ae: 0.001},
  {x: 1.688, ve: 0.00844, a: 0.0015, ae: 0.001},
  {x: 1.803, ve: 0.009015, a: 0.0013, ae: 0.001},
  {x: 1.454, ve: 0.00727, a: 0.00187, ae: 0.001},
  {x: 1.489, ve: 0.007445, a: 0.001831, ae: 0.001},
  {x: 1.523, ve: 0.007615, a: 0.001791, ae: 0.001},
  {x: 1.551, ve: 0.007755, a: 0.001755, ae: 0.001},
]

const amphoCharacteristics = [
  {x: 4.92, ve: 0.04, a: 0.000293, ae: 0.0001},
  {x: 3.88, ve: 0.04, a: 0.000304, ae: 0.0001},
  {x: 3.1, ve: 0.04, a: 0.000309, ae: 0.0001},
  {x: 3.949, ve: 0.04, a: 0.000304, ae: 0.0001},
  {x: 3.963, ve: 0.04, a: 0.000305, ae: 0.0001},
  {x: 5.3, ve: 0.04, a: 0.000291, ae: 0.0001},
  {x: 5.53, ve: 0.04, a: 0.000286, ae: 0.0001},
  {x: 5.66, ve: 0.04, a: 0.000285, ae: 0.0001},
  {x: 5.45, ve: 0.04, a: 0.000289, ae: 0.0001},
  {x: 5.16, ve: 0.04, a: 0.000293, ae: 0.0001},
  {x: 5.62, ve: 0.04, a: 0.000285, ae: 0.0001},
]

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="test">
        {/* <span className="rotated">Współczynnik załamania światła</span> */}
        <div className="victory">
          <VictoryChart 
            width={600} 
            height={470} 
            domain={{x: [0, 60], y: [0, 0.07]}}
            padding={{left: 100, bottom: 100, top: 50, right: 50}}
          >
            <VictoryErrorBar
              data={data}
              y="y"
              errorX="errorx"
              errorY="errory"
              style={{data: {stroke: 'blue'}}}
              borderWidth={2}
            />
            <VictoryErrorBar
              data={data}
              y="y1"
              errorX="errorx"
              errorY="errory1"
              style={{data: {stroke: 'yellow'}}}
              borderWidth={2}
            />
            <VictoryAxis 
              dependentAxis 
              axisLabelComponent={<VictoryLabel dy={-30} />}
              style={{tickLabels: {backgroundColor: 'red'}, axisLabel: {right: 50}}}
              label="Wartości (bez wymiaru)"
            />
            <VictoryAxis
              style={{tickLabels: {backgroundColor: 'red'}}}
              axisLabelComponent={<VictoryLabel dy={10} />}
              label="Kąt wychylenia [°]"
            />
          </VictoryChart>
        </div>
      </div>
      <div className="test">
        <div className="victory">
            <VictoryChart 
              width={600} 
              height={470} 
              padding={{left: 100, bottom: 100, top: 50, right: 50}}
            >
              <VictoryErrorBar
                data={monoCharacteristics}
                y="a"
                errorX="ae"
                errorY="ve"
                style={{data: {stroke: 'blue'}}}
                borderWidth={2}
              />
              <VictoryAxis 
                dependentAxis 
                axisLabelComponent={<VictoryLabel dy={-30} />}
                style={{tickLabels: {backgroundColor: 'red'}, axisLabel: {right: 50}}}
                label="Natężenie [A]"
              />
              <VictoryAxis
                style={{tickLabels: {backgroundColor: 'red'}}}
                axisLabelComponent={<VictoryLabel dy={10} />}
                label="Napięcie [V]"
              />
            </VictoryChart>
          </div>
        </div>
        <div className="test">
        <div className="victory">
            <VictoryChart 
              width={600} 
              height={470} 
              padding={{left: 100, bottom: 100, top: 50, right: 50}}
            >
              <VictoryErrorBar
                data={poliCharacteristics}
                y="a"
                errorX="ae"
                errorY="ve"
                style={{data: {stroke: 'blue'}}}
                borderWidth={2}
              />
              <VictoryAxis 
                dependentAxis 
                axisLabelComponent={<VictoryLabel dy={-30} />}
                style={{tickLabels: {backgroundColor: 'red'}, axisLabel: {right: 50}}}
                label="Natężenie [A]"
              />
              <VictoryAxis
                style={{tickLabels: {backgroundColor: 'red'}}}
                axisLabelComponent={<VictoryLabel dy={10} />}
                label="Napięcie [V]"
              />
            </VictoryChart>
          </div>
        </div>
        <div className="test">
        <div className="victory">
            <VictoryChart 
              width={600} 
              height={470} 
              padding={{left: 100, bottom: 100, top: 50, right: 50}}
            >
              <VictoryErrorBar
                data={amphoCharacteristics}
                y="a"
                errorX="ae"
                errorY="ve"
                style={{data: {stroke: 'blue'}}}
                borderWidth={2}
              />
              <VictoryAxis 
                dependentAxis 
                axisLabelComponent={<VictoryLabel dy={-30} />}
                style={{tickLabels: {backgroundColor: 'red'}, axisLabel: {right: 50}}}
                label="Natężenie [A]"
              />
              <VictoryAxis
                style={{tickLabels: {backgroundColor: 'red'}}}
                axisLabelComponent={<VictoryLabel dy={10} />}
                label="Napięcie [V]"
              />
            </VictoryChart>
          </div>
        </div>
    </div>
  );
}

export default App;
