import React from "react";
import { Button, Card, Image } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";

interface Props {
  activity: Activity;
  cancleSelectActivity: () => void;
  openForm : (id: string) => void;
}

export default function ActivityDetails({ activity, cancleSelectActivity, openForm }: Props) {
  return (
    <Card fluid>
      <Image src={`/assets/categoryImages/${activity.category}.jpg`} />
      <Card.Content>
        <Card.Header>{activity.title}</Card.Header>
        <Card.Meta>
          <span>{activity.date}</span>
        </Card.Meta>
        <Card.Description>{activity.description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button.Group widths = '2'>
            <Button basic color = 'blue' content='Edit' onClick = {()=> openForm(activity.id)}/>
            <Button onClick={cancleSelectActivity} basic color = 'grey' content='Cancle'/>
        </Button.Group>
      </Card.Content>
    </Card>
  );
}
