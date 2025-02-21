import Banner from '../../../../assets/images/fundo.png'
import Logo from '../../../../assets/images/logo.png'
import Dolce from '../../../../assets/images/imagem de fundo.png'
import {
  Header,
  Image,
  FundoPerf,
  ImagePerf,
  H1,
  Div,
  TitleContainer,
  MainTitle,
  SubTitle
} from './styles'

const PerfilHead = () => (
  <Header>
    <H1>Restaurantes</H1>
    <Div>0 produto(s) no carrinho</Div>
    <FundoPerf src={Banner} alt="fundo" />
    <Image src={Logo} alt="Efood logo" />
    <ImagePerf src={Dolce} />
    <TitleContainer>
      <MainTitle>Italiana</MainTitle>
      <SubTitle>La Dolce Vita Trattoria</SubTitle>
    </TitleContainer>
  </Header>
)

export default PerfilHead
