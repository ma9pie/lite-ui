import {
  Button,
  Modal,
  ModalFooter,
  ModalHeader,
  useModal,
} from '@ma9pie/lite-ui';
import React from 'react';

const App = () => {
  const { isOpen, setIsOpen, openModal } = useModal();

  return (
    <div>
      <Button color="primary" onClick={openModal}>
        openModal
      </Button>

      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <ModalHeader>Info</ModalHeader>

        <p>Hello Lite UI</p>

        <ModalFooter></ModalFooter>
      </Modal>
    </div>
  );
};

export default App;

App.code = `import {
  Button,
  Modal,
  ModalFooter,
  ModalHeader,
  useModal,
} from '@ma9pie/lite-ui';
import React from 'react';

const App = () => {
  const { isOpen, setIsOpen, openModal } = useModal();

  return (
    <div>
      <Button color="primary" onClick={openModal}>
        openModal
      </Button>

      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <ModalHeader>Info</ModalHeader>

        <p>Hello Lite UI</p>

        <ModalFooter></ModalFooter>
      </Modal>
    </div>
  );
};

export default App;`;
