import React from 'react'
import { Card, CardDescription, Feed } from 'semantic-ui-react'

const ExhibitCard = () => (
  <Card>
    <Card.Content>
      <Card.Header>Title</Card.Header>
    </Card.Content>
    <Card.Content>
        <CardDescription>Data Points</CardDescription>
    </Card.Content>
  </Card>
)

export default ExhibitCard;
