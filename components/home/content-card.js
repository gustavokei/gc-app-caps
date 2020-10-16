import React from "react";
import { Button, Card } from "react-bootstrap";

const CardLayout = () => {
  return (
    <div className='cards' display='flex'>
      <h1 style={{textAlign:"center", padding:"25px"}}>------ LATEST NEWS ------</h1>
      <Card style={{ width: '18rem', background:'#373A3C'}}>
        <Card.Img variant="top" src="news1.png" />
        <Card.Body bg="#373A3C" >
          <Card.Title>News Title</Card.Title>
          <Card.Subtitle style={{ opacity: "50%", paddingTop:'5px', paddingBottom:'5px'}}>News type, Date, Time</Card.Subtitle>
          <Card.Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna....
          </Card.Text>
          <Button variant="primary">Read more...</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem', background:'#373A3C'}}>
        <Card.Img variant="top" src="news2.png" />
        <Card.Body >
          <Card.Title>News Title</Card.Title>
          <Card.Subtitle style={{ opacity: "50%", paddingTop:'5px', paddingBottom:'5px'}}>News type, Date, Time</Card.Subtitle>
          <Card.Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna....
          </Card.Text>
          <Button variant="primary">Read more...</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem', background:'#373A3C'}}>
        <Card.Img variant="top" src="news3.png" />
        <Card.Body bg="#373A3C" >
          <Card.Title>News Title</Card.Title>
          <Card.Subtitle style={{ opacity: "50%", paddingTop:'5px', paddingBottom:'5px'}}>News type, Date, Time</Card.Subtitle>
          <Card.Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna....
          </Card.Text>
          <Button variant="primary">Read more...</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardLayout;
