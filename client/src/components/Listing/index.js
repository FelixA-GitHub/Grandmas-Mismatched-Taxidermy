import React, { useState } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
// import Container from 'react-bootstrap/Container';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SaleItem from '../SaleItem';
import './index.js';
import 'animate.css';
import 'bootstrap/dist/css/bootstrap.css';



//Listing function holds all the items to be presented to the viewer
function Listing() {
    const [pages] = useState([
        {
            name: "listing",
            description: 'Choose from our wares!'
        }
    ]);
    const [currentPage] = useState(pages[0]);

    const [items] = useState([
        {
            name: 'kermit',
            description: 'We have a celebrity in the house!',
            price: '$59.99',
            purchase: 'https://github.com/FelixA-GitHub/run-buddy.git'
        },
        {
            name: 'bunny-in-dress',
            description: "Isn't she lovely? - Stevie Wonder",
            price: '75.00',
            purchase: 'https://github.com/FelixA-GitHub/Data-Mammoth.git'
        }
        // {
        //     name: 'regal-care',
        //     description: 'JavaScript/Handlebars/MySQL',
        //     link: 'https://regal-care-inc.herokuapp.com/',
        //     purchase: 'https://github.com/FelixA-GitHub/grasshopper-travel.git'
        // },
        // {
        //     name: 'tech-blog',
        //     description: 'JavaScript/Handlebars/CSS',
        //     link: 'https://quiet-refuge-09071.herokuapp.com/homepage',
        //     purchase: 'https://github.com/FelixA-GitHub/Fizzy-Tech-Blog.git'
        // },
        // {
        //     name: 'e-commerce',
        //     description: 'MySQL/Sequelize/Express',
        //     link: 'https://watch.screencastify.com/v/IHmJwKGaOrKkWfO4aNBF',
        //     purchase: 'https://github.com/FelixA-GitHub/Fizz-E-Commerce-Back-End.git'
        // },
        // {
        //     name: 'note-taker',
        //     description: 'Express/Node/FS/Heroku',
        //     link: 'https://fizzy-note-taker.herokuapp.com/',
        //     purchase: 'https://github.com/FelixA-GitHub/note-taker-express.git'
        // }
    ])

    return (

        <section className="p-4 bg-Listing">
            <div>
                <Container fluid className="p-0">
                    <h1 className="text-center margin-top">{capitalizeFirstLetter(currentPage.name)}</h1>
                    <h3 className="text-center margin-top">{capitalizeFirstLetter(currentPage.description)}</h3>
                    <Row className=''>

                        {items.map((item, idx) => (
                            <Col md={6}>
                                <div className="item-animation">
                                    <SaleItem
                                        item={item}
                                        key={"item" + idx}
                                    />
                                </div>

                            </Col>
                        ))}
                    </Row>

                </Container>
            </div>

        </section>
    );
};

export default Listing;