import React from 'react'
import ChartRow from './ChartRow'

function Chart() {
    
  const data = [
    {id:1 , titulo:"Pelicula1" , año:2021 },
    {id:2 , titulo:"Pelicula2" , año:2022 },
    {id:3 , titulo:"Pelicula3" , año:2023 }
  ];

  return (
    <div>
      <ChartRow/>
      <ChartRow data={data[0]}/>
      <ChartRow data={data[1]}/>
      <ChartRow data={data[2]}/>
      <ChartRow/>
    </div>
  )
}

export default Chart