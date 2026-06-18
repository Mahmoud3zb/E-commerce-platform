import { Component } from 'react'
import { Col, Row } from 'react-bootstrap'
import { sampleProducts } from '../data'
import { Link } from 'react-router'

export class Home extends Component {
  render() {
    return (
      
         <Row>
            {sampleProducts.map((product) => (
              <Col key={product.slug} sm={12} md={6} lg={3} className="mb-3">
                <Link to={'/product/' + product.slug}>
                  <img src={product.image} alt={product.name} />
                  <h2>{product.name}</h2>
                  <p>{product.price}</p>
                </Link>
              </Col>
            ))}
          </Row>
     
    )
  }
}

export default Home