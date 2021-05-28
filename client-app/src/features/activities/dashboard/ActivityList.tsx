import React from 'react';
import { Button, Item, Label, Segment } from 'semantic-ui-react';
import { Activity } from '../../../app/models/activity';

interface Props{
    activities : Activity[];
    selectActivity: (id:string) => void;
    deleteActivity: (id:string) => void;
}

export default function ActivityList({activities, selectActivity, deleteActivity}:Props){
    return (
        <Segment>
            <Item.Group divided>
                {activities.map(activitiy =>(
                    <Item key={activitiy.id}>
                        <Item.Content>
                            <Item.Header as='a'>{activitiy.title}</Item.Header>
                            <Item.Meta>{activitiy.date}</Item.Meta>
                            <Item.Description>
                                <div>{activitiy.description}</div>
                                <div>{activitiy.city}, {activitiy.venue}</div>
                            </Item.Description>
                            <Item.Extra>
                                <Button onClick={() => selectActivity(activitiy.id)} floated='right' content='View' color='blue'/>
                                <Button onClick={() => deleteActivity(activitiy.id)} floated='right' content='Delete' color='red'/>
                                <Label basic content={activitiy.category} />
                            </Item.Extra>
                        </Item.Content>
                    </Item>
                ))}
            </Item.Group>
        </Segment>
    )
}