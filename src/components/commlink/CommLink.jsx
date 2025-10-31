import { useState, useEffect } from "react";
import '../../styles/CommLink.css'
import { Line, LineChart } from 'recharts';

export const SystemStatus = () => {
    const [nominal, setNominal] = useState(32);
    const [lag, setLag] = useState(178);
    const [offline, setOffline] = useState(386);

const Nominaldata = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 12000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 6090,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const Lagdata = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 4000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 6890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];


const Offlinedata = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

    return (
        <div className="Comm-Link-Container">
            <div className="Title">COMM LINK</div>
            <div className="Comm-Link-Status">
                <div className="Nominal-Status">
                    <div className="status"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="green" class="bi bi-circle-fill mx-4" viewBox="0 0 16 16">
                        <circle cx="8" cy="8" r="8" />
                    </svg>Nominal</div>
                    <div className="data">{`${nominal} ms`}</div>
                    <div className="chart"> <LineChart style={{ width: '100%', aspectRatio: 1.618, maxWidth: 600 }} responsive data={Nominaldata}>
                        <Line dataKey="uv" />
                    </LineChart></div>
                </div>
                <div className="Lag-Status">
                    <div className="status"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="yellow" class="bi bi-circle-fill mx-4" viewBox="0 0 16 16">
                        <circle cx="8" cy="8" r="8" />
                    </svg>Lag Detected</div>
                    <div className="data">{`${lag} ms`}</div>
                    <div className="chart"> <LineChart style={{ width: '100%', aspectRatio: 1.618, maxWidth: 600 }} responsive data={Lagdata}>
                        <Line dataKey="uv" />
                    </LineChart></div>
                </div>
                <div className="Offline-Status">
                    <div className="status"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="red" class="bi bi-circle-fill mx-4" viewBox="0 0 16 16">
                        <circle cx="8" cy="8" r="8" />
                    </svg>Offline</div>
                    <div className="data">{`${offline} ms`}</div>
                    <div className="chart"> <LineChart style={{ width: '100%', aspectRatio: 1.618, maxWidth: 600 }} responsive data={Offlinedata}>
                        <Line dataKey="uv" />
                    </LineChart></div>
                </div>
            </div>

        </div>
    )
}


export default SystemStatus;