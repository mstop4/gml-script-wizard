import React, { Component } from 'react'
import { Navbar, NavbarBrand, Container, Row, Col } from 'reactstrap'

class DummyApp extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <Container fluid>
          <Row>
            <Col lg="6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id ultricies nulla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed nec volutpat leo, sed sollicitudin lectus. Vestibulum suscipit eros nec arcu feugiat, id posuere dui lacinia. Quisque convallis sem dui, eu fringilla diam venenatis vitae. Etiam varius ante vel tortor molestie, quis gravida ipsum dignissim. Integer et dapibus neque. In quis leo a velit dictum pulvinar consequat vitae odio. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed egestas ullamcorper est vitae pellentesque. Nulla et facilisis felis. Maecenas vitae velit mauris. Cras vel nisi vel urna commodo efficitur. Phasellus at leo elementum ipsum porttitor iaculis. Donec ipsum dui, convallis eu leo quis, tincidunt imperdiet tellus.
            </Col>
            <Col lg="6">
            Nulla luctus imperdiet urna ac fringilla. Praesent mattis ipsum nisi, sed commodo metus scelerisque id. Quisque nibh augue, sagittis vel vehicula in, laoreet vitae risus. Aliquam luctus velit porttitor hendrerit lobortis. Nulla auctor tempus mollis. Morbi pellentesque metus ut vehicula laoreet. Donec vestibulum, eros id consequat fringilla, magna risus convallis dui, in laoreet nisl enim ut felis. Donec maximus mattis egestas. Nunc turpis nibh, mattis sit amet dictum quis, placerat a tortor. Aliquam sit amet tortor fringilla, commodo nibh a, aliquet nisl. Pellentesque dictum sem sed consequat gravida. Aliquam nec ornare nisi, id mattis dolor. Suspendisse potenti. Donec tincidunt, ex vel aliquam volutpat, neque magna blandit ex, fermentum malesuada eros magna id purus.
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default DummyApp