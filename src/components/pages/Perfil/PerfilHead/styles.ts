import styled from 'styled-components'
import { cores } from '../../../../styles'

export const Header = styled.header`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: auto;
`

export const FundoPerf = styled.img`
  width: 100%;
  height: auto;
`

export const Image = styled.img`
  position: absolute;
  top: 64px;
  left: 50%;
  transform: translate(-50%, -50%);
`

export const Div = styled.div`
  position: absolute;
  top: 82px;
  right: 171px;
  transform: translateY(-50%);
  background: ${cores.begeEscuro};
  color: ${cores.begeCLaro};
  padding: 10px 15px;
  border-radius: 5px;
  font-weight: bold;
`

export const H1 = styled.h1`
  position: absolute;
  top: 82px;
  left: 171px;
  transform: translateY(-50%);
  font-size: 24px;
  color: ${cores.begeEscuro};
`

export const ImagePerf = styled.img`
  width: 100%;
  display: block;
  position: absolute;
  top: 150px;
`
export const TitleContainer = styled.div`
  position: absolute;
  top: 170px;
  left: 170px;
  width: 100%;
  text-align: left;
`

export const MainTitle = styled.h2`
  font-size: 32px;
  color: #fff;
  margin: 0;
  font-weight: lighter;
`

export const SubTitle = styled.p`
  font-size: 32px;
  color: #fff;
  margin-top: 250px;
  margin-left: 0;
  font-weight: bold;
`
