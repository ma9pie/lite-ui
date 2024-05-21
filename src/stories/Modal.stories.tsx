import styled from '@emotion/styled';
import type { Meta } from '@storybook/react';
import React from 'react';
import { CgClose } from 'react-icons/cg';

import { Modal, ModalFooter, ModalHeader, useModal } from '@/components';

const meta = {
  title: 'Modal',
  args: {},
  component: Modal,
} satisfies Meta;

export default meta;

const Component = () => {
  const { isOpen, setIsOpen, openModal } = useModal();

  return (
    <div>
      <button onClick={openModal}>openModal</button>
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
          console.log(`[modal] ${value ? 'opened' : 'closed'}`);
        }}
      >
        <ModalHeader
          hideCloseIcon={false}
          closeIcon={<CgClose size={20}></CgClose>}
        >
          Title
        </ModalHeader>
        <Content>message</Content>
        <ModalFooter
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

export const Modal_ = {
  render: Component,
};

const Content = styled.div`
  flex: 1;
`;
