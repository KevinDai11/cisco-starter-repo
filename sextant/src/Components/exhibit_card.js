import React from 'react'
import { Card, CardDescription, Feed, Grid, GridColumn } from 'semantic-ui-react'

import IPRequest from './IPRequest';
const ExhibitCard = ({title, url}) => (
  <Grid columns={2} divided>
    <Grid.Row>
      <Card>
        <Card.Content>
          <Card.Header>{title}</Card.Header>
        </Card.Content>
        <Card.Content>
            <CardDescription>
                <IPRequest url = {url}></IPRequest>
            </CardDescription>
        </Card.Content>
      </Card>
    </Grid.Row>
  </Grid>
)

export default ExhibitCard;
