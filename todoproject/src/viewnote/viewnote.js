import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


class ViewNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
          modal: false,
        };
    
        this.toggle = this.toggle.bind(this);
      }
    
      toggle() {
        this.setState({
          modal: !this.state.modal
        });
      }

    render() {

        return (

            <div className="container2">    
            <h6>Note Name</h6>

            <Link to="/EditNote">
            <button className="button4">edit</button>
            </Link>

   
        <div>  
       
         <Button className="button5" color="Link" onClick={this.toggle}>delete</Button>
         <Modal isOpen={this.state.modal} toggle={this.toggle} className="my-modal">
          <ModalHeader className="modalheader" toggle={this.toggle}>Are you sure you want to delete this?</ModalHeader>
          <ModalFooter className="modalfooter">
            <Button className="button6" color="danger" onClick={this.toggle}>Delete</Button>{' '}
            <Button className="button7" color="Link" onClick={this.toggle}>No</Button>
          </ModalFooter>
         </Modal>
        </div>
        
            </div>
        )
    }
};

export default ViewNote;