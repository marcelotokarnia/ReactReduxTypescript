import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts'
import { connect, ConnectedProps } from 'react-redux'
import React, { FC, useEffect } from 'react'
import { RootState } from './interfaces/store/reducers'
import { thunkAction } from './store/actions/thunks'

const mapStateToProps = (state: RootState) => ({
  defaultCenter: state?.ports?.defaultCenter,
})

const mapDispatchToProps = {
  thunkAction,
}

const connector = connect(mapStateToProps, mapDispatchToProps)

type AppProps = ConnectedProps<typeof connector>

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
  },
]

const App: FC<AppProps> = ({ thunkAction, defaultCenter }) => {
  useEffect(() => {
    thunkAction()
  })
  return (
    <>
      <div>{defaultCenter}</div>
      <LineChart
        width={730}
        height={250}
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="pv" stroke="#8884d8" />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChart>
    </>
  )
}

export default connector(App)
