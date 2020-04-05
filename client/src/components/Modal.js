import React from 'react';
import {Modal , Button} from 'react-bootstrap';
import { useState } from 'react';
import history from '../history';

import './css/modal.css';

const MyModal = ( props ) => {
    const [show, setShow] = useState(props.showValue);

    const handleClose = () => {
      setShow(false);

      if(props.svgType === "success"){
        window.location.replace('/')
      }else{
        history.push('/');
      }
    }

    const handleButton = () => {
      if(props.handleState){
        props.handleState();
      }

      setShow(false);

      if(props.svgType === "success"){
        window.location.replace('/')
      }else{
        history.push(props.closeDirect);
      }
      
    }

    let svg;

    switch (props.svgType) {
      case 'empty':
        svg = (
          <svg className="bi bi-bucket" width="2.5em" height="2.5em" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M10 3.5A4.5 4.5 0 005.5 8h-1a5.5 5.5 0 1111 0h-1A4.5 4.5 0 0010 3.5z" clipRule="evenodd"></path>
            <path fillRule="evenodd" d="M3.61 7.687A.5.5 0 014 7.5h12a.5.5 0 01.488.608l-1.826 8.217a1.5 1.5 0 01-1.464 1.175H6.802a1.5 1.5 0 01-1.464-1.175L3.512 8.108a.5.5 0 01.098-.42zm1.013.813l1.691 7.608a.5.5 0 00.488.392h6.396a.5.5 0 00.488-.392l1.69-7.608H4.624z" clipRule="evenodd"></path>
          </svg>
        )
        break;
      case 'warning':
        svg = (
          <svg className="bi bi-alert-triangle" style={{color:"orange"}} width="2.5em" height="2.5em" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M9.938 4.016a.146.146 0 00-.054.057L3.027 15.74a.176.176 0 00-.002.183c.016.03.037.05.054.06.015.01.034.017.066.017h13.713a.12.12 0 00.066-.017.163.163 0 00.055-.06.176.176 0 00-.003-.183L10.12 4.073a.146.146 0 00-.054-.057.13.13 0 00-.063-.016.13.13 0 00-.064.016zm1.043-.45a1.13 1.13 0 00-1.96 0L2.166 15.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L10.982 3.566z" clipRule="evenodd">
            </path>
            <rect width="2" height="2" x="9.002" y="13" rx="1"></rect>
            <path d="M9.1 7.995a.905.905 0 111.8 0l-.35 3.507a.553.553 0 01-1.1 0L9.1 7.995z"></path>
          </svg>
        )
        break;
      case 'error':
        svg = (
                <svg className="bi bi-alert-octagon" style ={{color:"red"}} width="2.5em" height="2.5em" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M6.54 2.146A.5.5 0 016.893 2h6.214a.5.5 0 01.353.146l4.394 4.394a.5.5 0 01.146.353v6.214a.5.5 0 01-.146.353l-4.394 4.394a.5.5 0 01-.353.146H6.893a.5.5 0 01-.353-.146L2.146 13.46A.5.5 0 012 13.107V6.893a.5.5 0 01.146-.353L6.54 2.146zM7.1 3L3 7.1v5.8L7.1 17h5.8l4.1-4.1V7.1L12.9 3H7.1z" clipRule="evenodd"></path>
                  <rect width="2" height="2" x="9.002" y="12" rx="1"></rect>
                  <path d="M9.1 6.995a.905.905 0 111.8 0l-.35 3.507a.553.553 0 01-1.1 0L9.1 6.995z"></path>
                </svg>
            )
        break;
      default:
        svg = (
          <svg className="bi bi-check-circle" style={{color:"green"}} width="2.5em" height="2.5em" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M17.354 4.646a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-3-3a.5.5 0 11.708-.708L10 11.293l6.646-6.647a.5.5 0 01.708 0z" clipRule="evenodd"></path>
            <path fillRule="evenodd" d="M10 4.5a5.5 5.5 0 105.5 5.5.5.5 0 011 0 6.5 6.5 0 11-3.25-5.63.5.5 0 11-.5.865A5.472 5.472 0 0010 4.5z" clipRule="evenodd"></path>
          </svg>
        )
    }

    return (
      <>
        <Modal show={show}
          onHide={handleClose}
          aria-labelledby="contained-modal-title-vcenter"
          centered
          dialogClassName={"contactModal text-center"}
          >
          <Modal.Header closeButton>
            <Modal.Title>
            {svg}
            <br/>
            <h4>{props.title}</h4>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>{props.description}</Modal.Body>
          <Modal.Footer>
            <Button className="btn btn-primary btn-block" onClick={handleButton}>
              {props.buttonName}
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
}

export default MyModal;
