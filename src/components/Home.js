import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <section className="Home">
        <div>
          As a woman in tech I know how difficult could be this world some if you are not one of the majority but I'm lucky because I know
          that a lot of important people for tech were also part of a minority, sadly this is not something that everybody know so I created this 
          small project to see if having a place to show the rest of the world that tech and stem are diverse we could make them more inclusive
          and interesting for people outside the majority.
        </div>
        <div>
        This is just an MVP because I want to check if this kind of this is usefull, I don't work with React in my daily basis (in backend dev by the way)
        so for sure my code could be improved, if you want to help me with the code or adding more diverse referents for stem here is  
        <a href="https://github.com/isamadrid90/stem-is-diverse">the github repo</a> create a PR and I would review it and merge ASAP
        </div>
      </section>
    );
  }
}

export default Home;
