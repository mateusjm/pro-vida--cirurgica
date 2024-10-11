import React from 'react'
import {Helmet} from 'react-helmet-async'

// CSS
import styles from './Home.module.css'

// bootstrap 
import {Carousel} from 'react-bootstrap'
import {Container, Row, Col, Stack, Button} from 'react-bootstrap'

const Home = ({banner1, banner3, banner4, people, car, medalha, dinheiro, concorrencia, medico, maps, favicon}) => {
  return (
    <>
    <Helmet>
      <title>Pró-Vida Cirúrgica</title>
      <meta 
        name="description" 
        content="Página inicial com informações sobre nossos produtos e serviços hospitalares." />
      <link rel="shortcut icon" href={favicon} type="image/x-icon" />
    </Helmet>
    <div>
      <Carousel>
        <Carousel.Item interval={3000}>
            <img
            className='d-block w-100 image-carousel'
            src={banner1}
            alt="Banner-1 da Pró-Vida"
            />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
            <img
            className='d-block w-100 image-carousel'
            src={banner3}
            alt="Banner-2 da Pró-Vida"
            />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img 
          className='d-block w-100 image-carousel-servicos'
          src={banner4}
          alt="Banner-3 da Pró-Vida" 
          />
        </Carousel.Item>
      </Carousel>
    </div>
    <div className='pt-5'>
      <Container>
          <Row className={`mt-4`}>
            <Col xs={12}>
              <h1 className='mt-3 mb-4'>Mais de 140 mil clientes satisfeitos!</h1>
            </Col>
          </Row>
          <Row className={`d-flex align-items-end justify-content-between`}>
            <Col xxl={6} xl={6} className='d-none d-xl-block' >
              <img className={`${styles.img_people}`} src={people} alt="Pessoas" />
            </Col>
            <Col xxl={6} xl={6} xs={12} className={`p-4`}>
              <h3 className='mb-4 text-start fst-italic'>Somos especialistas em produtos hospitalares, ortopédicos e cuidados pessoais. </h3>
              <p>Oferecemos uma ampla gama de produtos e serviços para atender suas necessidades de saúde e bem-estar.</p>
              <ul>
                <Stack gap={2}>
                  <li>
                    <span className={styles.span_list}>Materiais Descartáveis: </span>
                    Qualidade e confiança em cada produto.</li>
                  <li>
                    <span className={styles.span_list}>Locações: </span>
                    Cadeiras de rodas e de banho, andadores, muletas, camas hospitalares, CPAP e BiPAP.</li>
                  <li>
                    <span className={styles.span_list}>Produtos Ortopédicos: </span>
                    Variedade para garantir conforto e suporte.</li>
                  <li>
                    <span className={styles.span_list}>CPAP e BiPAP: </span>
                    Soluções eficazes para problemas respiratórios.</li>
                </Stack>
              </ul>
              <p>
                Fornecemos os melhores produtos e serviços com excelência e dedicação.
                Entre em contato conosco para mais informações.</p>
              <div className={`m-2 p-3 ${styles.text_end}`}>
                <Button className={` ${styles.button_link}`} variant='success'>
                  <a 
                    className={styles.a} 
                    href="https://wa.me/message/K7V37SCXJ72KG1"
                    target='blank'>Entrar em contato</a>
                </Button>
              </div>
            </Col>
          </Row>
      </Container>
    </div>
    <div className='bg-dark pt-5 pb-5'>
      <Container>
        <Row>
          <Col xs={12}>
            <h1 className='text-light mt-5'>Por que Escolher a Pró-Vida Cirúrgica?</h1>
            <h3 className={`text-success mb-5 ${styles.subtitle_home}`}>Benefícios que fazem a diferença na sua escolha:</h3>
          </Col>
        </Row>
        <Row className={`d-flex justify-content-center align-items-center`}>
          <Col xxl={6} xl={7} xs={12}>
            <ul className={`text-light ${styles.checkmark_list}`}>
              <li className='mb-3'>Somos a Maior e Melhor Loja de Produtos Ortopédicos e Hospitalares de Ponte Nova-Mg e região!</li>
              <li className='mb-3'>Entregamos e montamos Camas Hospitalares</li>
              <li className='mb-3'>Realizamos locações de produtos</li>
              <li className='mb-3'>Estamos presentes nas principais Redes-Sociais</li>
              <li className='mb-3'>Temos Atendimento On-line</li>
              <li className='mb-3'>Funcionamento de Segunda à Sábado</li>
              <li className='mb-3'>Temos Estacionamento Próprio para Clientes</li>
            </ul>
            <div className={`m-2 p-3`}>
                <Button className={` ${styles.button_link}`} variant='success'>
                  <a 
                    className={styles.a} 
                    href="https://wa.me/message/K7V37SCXJ72KG1"
                    target='blank'>Entrar em contato</a>
                </Button>
              </div>
          </Col>
          <Col className={`p-4 mb-4 text-center`} xxl={6} xl={5} xs={12}>
            <img className={`img-fluid ${styles.custom_img_medico}`} src={medico} alt="Profissional de Saúde" />
          </Col>
        </Row>
      </Container>
    </div>
    <div className={`${styles.color_green} pt-5 pb-5`}>
      <Container fluid>
        <Row className='p-3 justify-content-center'>
          <Col xxl={12}>
            <h1 className={`text-light text-center p-3 mb-3`}>Compromisso com nossos clientes!</h1>
          </Col>
          <Col xxl={8} className='text-center'>
            <h3>Nossa missão é proporcionar um serviço excepcional em todos os aspectos</h3>
            <h4 className='mb-5 d-none d-sm-block'>Conheça os pilares que definem nossa excelência:</h4>
          </Col>
        </Row>
        <Row className={`text-center justify-content-around`}>
          <Col className={`${styles.cards} mb-4 p-4`} xxl={2} xl={2} lg={5} md={5} xs={10}>
            <img width={110} className='img-fluid' src={car} alt=""/>
            <h4 className='text-success'>Entrega em toda Região</h4>
            <p>Garantimos uma experiência sem preocupações!</p>
          </Col>
          <Col className={`${styles.cards} mb-4 p-4`} xxl={2} xl={2} lg={5} md={5} xs={10}>
            <img width={110} className='img-fluid p-3' src={medalha} alt="" />
            <h4 className='text-success'>Ótimo <br/>Atendimento</h4>
            <p>Refletimos nossa dedicação em cada detalhe!</p>
          </Col>
          <Col className={`${styles.cards} mb-4 p-4`} xxl={2} xl={2} lg={5} md={5} xs={10}>
            <img width={110} className='img-fluid p-3' src={dinheiro} alt="" />
            <h4 className='text-success'>Melhores <br/> Preços</h4>
            <p>Sua satisfação é nossa prioridade!</p>
          </Col>
          <Col className={`${styles.cards} mb-4 p-4`} xxl={2} xl={2} lg={5} md={5} xs={10}>
            <img width={110} className='img-fluid p-3' src={concorrencia} alt="" />
            <h4 className='text-success'>Líder no <br/> Mercado</h4>
            <p>Reconhecidos pela nossa excelência e confiança!</p>
          </Col>
        </Row>
      </Container>
    </div>
    <div className={`pt-5 pb-5 ${styles.map}`}>
      <Container>
        <Row className='align-items-center justify-content-center mt-5 mb-5'>
          <Col xxl={6} xl={5} lg={6} md={6} sm={10} className='text-black'>
            <h1 className={`text-success p-2 mb-5 ${styles.title_map}`}>Saiba onde nos encontrar!</h1>
              <ul className={styles.local}>
            <Stack className='pb-5' gap={3}>
                <p><img src={maps} width={25} alt="Localização" />Localização</p>
                <li><span className='text-success fw-bold'>Logradouro:</span> Av. Dr. José Grossi, 126</li>
                <li><span className='text-success fw-bold'>Bairro:</span> Guarapiranga</li>
                <li><span className='text-success fw-bold'>CEP:</span> 35430-213</li>
                <li><span className='text-success fw-bold'>Cidade:</span> Ponte Nova-MG</li>
            </Stack>
              </ul>
          </Col>
          <Col xxl={6} xl={7} lg={6} md={6} sm={10} className='text-center'>
            <iframe
              className={styles.iframe}
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14957.926438915096!2d-42.890966!3d-20.404253!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa4975264c9dac5%3A0x5ad8f5ccf7a0c76f!2zUHLDsy1WaWRhIENpcsO6cmdpY2E!5e0!3m2!1spt-BR!2sbr!4v1725046013049!5m2!1spt-BR!2sbr"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            />
          </Col>
        </Row>
      </Container>
    </div>
    </>
  )
}

export default Home