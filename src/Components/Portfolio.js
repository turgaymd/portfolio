import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import { Nav,Tab,TabContainer} from 'react-bootstrap';
const Portfolio=()=>{
const [open, setOpen] = useState(false);
    return(
<section className="portfolio mt-5 mb-5" id="portfolio">
<div className="portfolio-title text-center">
<h2>My Portfolio</h2>
<h4>This is what demonstrates my knowledge</h4> 
<span className="bottom-line"></span>
</div>
<Tab.Container id="left-tabs-example" defaultActiveKey="first" className="mt-4">
<Nav variant="pills" className="flex-row justify-content-center mb-5 mt-5">
<Nav.Item>
              <Nav.Link eventKey="second">Web Design</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="first">Admin Dashboard</Nav.Link>
            </Nav.Item>
          
            <Nav.Item>
              <Nav.Link eventKey="third">E-commerce</Nav.Link>
            </Nav.Item>
          </Nav> 
         <Tab.Content className='df'>
            <Tab.Pane eventKey="third">
            <div><img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"/>
            </div>
            </Tab.Pane>
            <Tab.Pane eventKey="second">
            <div><img src="web_service.png"/> </div>
            </Tab.Pane>
            <Tab.Pane eventKey="first">
            <div>  <img src="dashboard.png"/>  </div>
            </Tab.Pane>
          </Tab.Content>
          </Tab.Container>
         
</section>
    )
}
export default Portfolio;