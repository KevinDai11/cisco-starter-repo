import React from 'react'
import { Card, CardDescription, Grid, } from 'semantic-ui-react'

import IPRequest from './IPRequest';
import WebSocket from './websocket';

const ExhibitCard = ({title, children}) => {

  const ret = children.web ?
  <Grid centered>
      <Grid.Row>
        <Card>
          <Card.Content>
            <Card.Header>{title}</Card.Header>
          </Card.Content>
          <Card.Content>
            <CardDescription>
                    <WebSocket/>
              </CardDescription>
          </Card.Content>
        </Card>
      </Grid.Row>
    </Grid>
    :
    <Grid centered>
      <Grid.Row>
        <Card>
          <Card.Content>
            <Card.Header>{title}</Card.Header>
          </Card.Content>
          <Card.Content>
            <CardDescription>
                    <IPRequest url = {children.url}></IPRequest>
              </CardDescription>
          </Card.Content>
        </Card>
      </Grid.Row>
    </Grid>
  return(
    ret
  )
}

export default ExhibitCard;
