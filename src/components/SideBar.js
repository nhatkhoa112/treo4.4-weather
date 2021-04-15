import React from 'react';
import {Button} from 'react-bootstrap';
import './SideBar.css';

const SideBar = () => {
    return (
        <div className="sideBar">
            <Button variation="primary" className="cityButton">Sai gon</Button>
            <Button variation="primary" className="cityButton">Paris</Button>
            <Button variation="primary" className="cityButton">New York</Button>
            <Button variation="primary" className="cityButton">Minami</Button>
            <Button variation="primary" className="cityButton">San Francisco</Button>
            <Button variation="primary" className="cityButton">Moscow</Button>
            <Button variation="primary" className="cityButton">Tokyo</Button>
            <Button variation="primary" className="cityButton">Vancouver</Button>

        </div>
    )
}

export default SideBar
