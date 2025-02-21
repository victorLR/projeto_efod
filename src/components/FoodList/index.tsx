import Foods from '../Foods'
import { List, Container } from './styles'
import Produto from '../../models/Produtos'

type Props = {
  title?: string
  produtos: Produto[]
}

const FoodList = ({ title, produtos }: Props) => (
  <Container>
    <div className="container">
      <h2>{title}</h2>
      <List>
        {produtos.map((produto) => (
          <Foods
            key={produto.id}
            title={produto.title}
            infos={produto.infos}
            description={produto.description}
            image={produto.image}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default FoodList
