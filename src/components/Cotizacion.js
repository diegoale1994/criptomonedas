import React from "react";
import styled from "@emotion/styled";

const ResultadoDiv = styled.div`
  color: #fff;
  font-family: Arial, Helvetica, sans-serif;
`;

const Info = styled.p`
  font-size: 18px;
  span {
    font-weight: bold;
  }
`;

const Precio = styled.p`
  font-size: 30px;
`;

const Cotizacion = ({ resultado }) => {
  if (Object.keys(resultado).length === 0) return null;

  console.log(resultado);

  return (
    <ResultadoDiv>
        <Precio>El precio es <span>{resultado.PRICE}</span></Precio>
        <Info>El precio mas alto del dia es <span>{resultado.HIGHDAY}</span></Info>
        <Info>El precio mas bajo es <span>{resultado.LOWDAY}</span></Info>
        <Info>Variacion ultimas 24 horas <span>{resultado.PRICE}</span></Info>
        <Info>Ultima actualizacion <span>{resultado.LASTUPDATE}</span></Info>
    </ResultadoDiv>
  );
};

export default Cotizacion;
