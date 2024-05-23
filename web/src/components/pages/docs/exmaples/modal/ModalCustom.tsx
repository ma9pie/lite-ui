import {
  Button,
  Flex,
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

      <Modal
        overlay={{
          style: {
            background:
              'linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.1))',
          },
        }}
        content={{
          style: {
            width: 400,
            height: 200,
          },
        }}
        duration={200}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        onChangeOpen={(value) => {
          if (value) {
            console.log('[modal] opened');
          } else {
            console.log('[modal] closed');
          }
        }}
      >
        <ModalHeader hideCloseIcon={false} closeIcon={<p>X</p>}>
          Info
        </ModalHeader>

        <Flex flex={1}>Hello Lite UI</Flex>

        <ModalFooter
          cancelBtnText="Close"
          confirmBtnText="OK"
          onCancel={() => {
            console.log('[footer] cancel clicked');
          }}
          onConfirm={() => {
            console.log('[footer] confirm clicked');
          }}
        ></ModalFooter>
      </Modal>
    </div>
  );
};

export default App;

App.code = `import {
  Button,
  Flex,
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

      <Modal
        overlay={{
          style: {
            background:
              'linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.1))',
          },
        }}
        content={{
          style: {
            width: 400,
            height: 200,
          },
        }}
        duration={200}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        onChangeOpen={(value) => {
          if (value) {
            console.log('[modal] opened');
          } else {
            console.log('[modal] closed');
          }
        }}
      >
        <ModalHeader hideCloseIcon={false} closeIcon={<p>X</p>}>
          Info
        </ModalHeader>

        <Flex flex={1}>Hello Lite UI</Flex>

        <ModalFooter
          cancelBtnText="Close"
          confirmBtnText="OK"
          onCancel={() => {
            console.log('[footer] cancel clicked');
          }}
          onConfirm={() => {
            console.log('[footer] confirm clicked');
          }}
        ></ModalFooter>
      </Modal>
    </div>
  );
};

export default App;`;
