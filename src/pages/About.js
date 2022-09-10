import React from 'react';
import Brief from '../components/Sections/Brief';
import Feature from '../components/Sections/Feature';
import ilightct from "../App.json";
import Title from '../components/Sections/Title';
import Commenter from "../components/Sections/Commenter";


class About extends React.Component {
  render() {
        return (
            <>
            <br/>
            <br/>
          <Title name="About us" bg="bg-tint" variant="light" image={ilightct.jumbos[1]} />
          <Brief align="text-left" full={false} dark={true} data={ilightct.about[2]} set="last" image={ilightct.about[3].image}/>
            <Feature
                align="text-center"
                title={ilightct.about[3].title} 
                body={ilightct.about[3].body} 
                bg="bg-grey"
                variant="dark"/>
            <Commenter items={ilightct.clients} />
            </>
        );
    }

}




export default About;
