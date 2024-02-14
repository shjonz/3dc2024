import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

interface ProfileCardProps {
  title: string;
  date: string;
  description: string;
  buttonText: string;
}

const ProfileCardMid: React.FC<ProfileCardProps> = ({ title, date, description, buttonText }) => (
  <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="/home/events.jpg" />
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>Date: {date}</Card.Text>
      <Card.Text>Description: {description}</Card.Text>
      <Button
        variant="primary"
        style={{
          backgroundColor: '#34e0a1',
          borderColor: 'white',
          color: 'black',
          fontWeight: 'normal',
        }}
      >
        {buttonText}
      </Button>
      <Button variant="danger" size="sm">
        cancel
      </Button>
    </Card.Body>
  </Card>
);

interface EventCardProps {
  title: string;
  date: string;
  description: string;
}

const EventCard: React.FC<EventCardProps> = ({ title, date, description }) => {
  return (
    <div>
      <ProfileCardMid
        title={title}
        date={date}
        description={description}
        buttonText="details"
      />
    </div>
  );
};

export default EventCard;
