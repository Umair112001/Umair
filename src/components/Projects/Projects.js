import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import logo from "../../Assets/Projects/logo.png";
import emotion from "../../Assets/Projects/emotion.png";
import ency from "../../Assets/Projects/ency.jpg";
import virtual from "../../Assets/Projects/virtual.jpg";
import velosi_pakistan_logo from "../../Assets/Projects/velosi_pakistan_logo.jpeg";
import pg from "../../Assets/Projects/pg.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={virtual}
              isBlog={false}
              title="Virtual Quiz Game"
              description="The game will consist of a series of multiple-choice questions, each with four possible answers. You will have a limited amount of time to choose the correct answer, so be sure to think quickly and carefully."
              ghLink="#"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pg}
              isBlog={false}
              title="Drage & Drop Puzzel Game"
              description="The game is a sliding tile puzzle, where the player must slide tiles around to form a complete image. The game board consists of a square grid, with one tile missing, and a scrambled image displayed on the remaining tiles. The player can slide the tiles up, down, left, or right, to complete image by using hands gestures."
              ghLink="#"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ency}
              isBlog={false}
              title="Image Encryption"
              description="Image encryption using the Rubik's cube method is a technique for securing digital images by scrambling them using the principles of the Rubik's cube puzzle. The method involves dividing the image into smaller blocks, and then applying the Rubik's cube algorithm to each block individually."
              ghLink="#"
              demoLink="#"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={logo}
              isBlog={false}
              title="GARAX Web APP"
              description="I used Blazor Server to create an integrated platform connecting insurance agents, mechanics, and spare parts providers. Blazor Server enables dynamic,
                            real-time web applications using C#, providing a rich user experience without JavaScript. The front end was designed with HTML and CSS, and C# with SQL
                            Server was used for the back end."
              ghLink="#"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={velosi_pakistan_logo}
              isBlog={false}
              title="VELOSI Certification Portal"
              description="As a freelancer, I developed the VELOSI Certification Portal a fully
              responsive web application designed to manage certification processes. The
              project involved implementing data tables to efficiently handle and display
              data.This project demonstrates my ability
              to create adaptable, user-friendly applications with robust data-handling
              capabilities"
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
