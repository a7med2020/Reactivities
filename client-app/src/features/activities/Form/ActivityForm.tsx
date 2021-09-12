import React, { useState, ChangeEvent } from 'react';
import { Segment, Form, Button } from 'semantic-ui-react';
import { Activity } from '../../../app/models/activity';
 
interface Props{
  activity:Activity | undefined;
  closeForm: () => void;
  createOrEdit: (activity:Activity) => void;
}

export default function ActivityForm({activity: selectedActivity,closeForm,createOrEdit} : Props) {

  const initialState = selectedActivity ?? {
    id : '',
    title : '',
    category : '',
    description : '',
    date : '',
    city : '',
    venue : '',
  }

  const [activity, setActivity] = useState(initialState);

  function handeleSubmit(){
    createOrEdit(activity);
  }

  function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
           const {name,value} = event.target
           setActivity({...activity, [name]: value})
  }
  return (
    <Segment clearing>
      <Form onSubmit={handeleSubmit} autoComplete='off'>
        <Form.Input
          name='title'
          placeholder='Title'
          value={activity.title}
          onChange={handleInputChange}
        />
        <Form.TextArea
          name='description'
          rows={2}
          placeholder='Description'
          value={activity.description}
          onChange={handleInputChange}
        />
        <Form.Input
          name='category'
          placeholder='Category'
          value={activity.category}
          onChange={handleInputChange}
        />
        <Form.Input
          name='date'
         
          placeholder='Date'
          value={activity.date}
          onChange={handleInputChange}
        />
        <Form.Input
          name='city'
          placeholder='City'
          value={activity.city}
          onChange={handleInputChange}
        />
        <Form.Input
          name='venue'
          placeholder='Venue'
          value={activity.venue}
          onChange={handleInputChange}
        />
        <Button floated='right' positive type='submit' content='Submit' />
        <Button
          floated='right'
          type='button'
          content='Cancel'
          onClick={closeForm}
        />
      </Form>
    </Segment>
  );
};

