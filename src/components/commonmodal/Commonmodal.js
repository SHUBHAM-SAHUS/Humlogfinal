import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

export const CommonModal = (props) => {

  // const [show, setShow] = useState(false);
  return (
    <>
      <Modal
        show={props.showModal}
        onHide={() => props.setshowModal(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Custom Modal Styling
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {props.children}
        </Modal.Body>
      </Modal>
    </>
  );
};
