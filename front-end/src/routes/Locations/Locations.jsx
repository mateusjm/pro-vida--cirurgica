import React, {useState, useEffect} from 'react'
import {Helmet} from 'react-helmet-async'

// bootstrap
import {Container, Col, Row, Card} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import locacoes from '../../data/locacoes.json'

// CSS
import styles from './Locations.module.css'

const Locations = ({banner3}) => {

  return (
    <>
    <Helmet>
      <title>Locações - Pró-Vida Cirúrgica</title>
      <meta 
        name="description" 
        content="Locação de CPAP, Cama Hospitalar, Cadeira de Rodas e Cadeira de Banho em Ponte Nova."/>
    </Helmet>
    <style type='text/css'>
      {`
        .container-fluid {
          --bs-gutter-x: 0;
        }
      `}
    </style>
    <div>
      <Container fluid>
        <img className={`img-fluid image-carousel`} src={banner3} alt="Pró-Vida Banner Locações" />
      </Container>
    </div>
    <div>
    <Container className='p-5 mt-4'>
      <Row>
        {locacoes && locacoes.map(({id,name, image}) => (
          <Col key={id} xl={3} md={4} xs={6} className="mb-4">
              <Card >
                  <Link to={`/locacoes/${id}`}>
                    <Card.Img variant="top" src={image} alt={name} />
                  </Link>
              </Card>
                  <Card.Title className='text-center mt-3'>{name}</Card.Title>
          </Col>
        ))}
      </Row>
    </Container>
    </div>
    </>
  )
}

export default Locations