import React from 'react'

function ChartRow({data}) {
    const estilo = {
        width: "70%",
        border: "1px solid black",
        display: "flex",
        flexWrap: "wrap",
        margin: "auto auto"
    }
    const estilo2 = {
        borderLeft: "1px solid black",
        width: "33%",
        padding: "10px 10px",
        fontSize: "15px"
    }
  return (
      <div style={estilo}>
        <div style={estilo2}>
            {data.id} 
        </div>
        <div style={estilo2}>
            {data.titulo}
        </div>
        <div style={estilo2}>
            {data.año}
        </div>
      </div>
  )
}

ChartRow.defaultProps = {
    data: {id: "Id", titulo: "Titulo", año: "Año"}
}

export default ChartRow