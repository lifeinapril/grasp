import React from 'react';
import Jumbo from '../components/Sections/Jumbo';
import Brief from '../components/Sections/Brief';
import MoreButton from '../components/Buttons/MoreButton';
import famagroup from "../App.json";
import Title from '../components/Sections/Title';
import Commenter from '../components/Sections/Commenter';


class Home extends React.Component {
  render() {
        return (
            <>
            <Jumbo title="Welcome to luxury stay" body="A service that takes care of you when you land." image={famagroup.jumbos[0]} button={<MoreButton path="/about" />} />
                    {
            famagroup.services.slice(0,4).map(function(service,index){
            return (<Brief align={(index % 2) ? "text-left":"text-right"} full={false} dark={false} data={service} set={(index % 2) ? "first":"last"} image={service.image}/>)
            })
            }
            <Brief align="text-left" full={true} dark={false} data={famagroup.about[2]} set="last" image={famagroup.jumbos[1]}/>
            <Title name="Don’t just take our word for it"/>
            <Commenter items={famagroup.clients} />
            </>
        );
    }

}

export default Home;
