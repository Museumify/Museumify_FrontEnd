import React from 'react';
import { Card} from 'react-bootstrap';
import './AboutUs.css';

const developers = [
    {image: 'Reneh.jpg',
    name: 'Reneh Al Madanat',
    bio: 'A fresh graduate who is looking forward to starting her career path in programming.',
    email: 'Renehm2001@gmail.com',
    github: 'Reneh7',
    role:'',
  },
  {image: 'Balqese.jpeg',
    name: 'Balqees Al-Qudah',
    email: 'balqeesalqudah97@gmail.com',
    github: 'balqeesqud',
    role:'',
    bio:'',
  },
  { image: 'Mosab.JPG',
    name: "Mosu'ab Al-borini",
    email: 'mosubborini2000@gmail.com',
    github: 'mosubborini2000',
    role:'',
    bio:'',
  },
  { image: 'mohmmad.jpg',
    name: 'Mohammad Darwish',
    email: 'developer1@example.com',
    github: 'MDarwish993',
    role:'',
    bio:'',
  },
  {
    image: 'Naser.jpg',
    name: 'Naser Gharbieh',
    role:'',
    bio: 'Aspiring future Java softwre engineer',
    email: 'naserm.gharbieh@gmail.com',
    github: 'NaserGharbieh',
  },
  
  
  
];



const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="about-us-header">
        <h1>About Museumify</h1> 
        <p>An online haven for art enthusiasts and creators alike. Immerse yourself in a captivating gallery of diverse art pieces,<br/> 
        curated from both renowned artists and talented individuals around the globe.<br/>
         From awe-inspiring paintings to mesmerizing sculptures, there's something to spark inspiration in every visitor.</p><br/>
        <h1>The Artists Behind Museumify</h1>
      </div>
      <div className="developers-container">
        {developers.map((developer, index) => (
          <Card key={index} className="developer-card">
            <div >
              <Card.Img className="developer-img"
                src={`${process.env.PUBLIC_URL}/dev-images/${developer.image}`}
                alt={developer.imglink}
              />
            </div>
            <div className="developer-info">
            <Card.Body >
              <Card.Title>{developer.name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{developer.role}</Card.Subtitle>
              <Card.Text>{developer.bio}</Card.Text>
              <Card.Text>
                <i className="fas fa-envelope "></i>{' '}
                <a href={`mailto:${developer.email}`}>{developer.email}</a>
              </Card.Text>
              <Card.Text>
                <i className="fab fa-github fa-2x"></i>{' '}
                <a
                  href={`https://github.com/${developer.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {developer.github}
                </a>
              </Card.Text>
            </Card.Body> 
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
