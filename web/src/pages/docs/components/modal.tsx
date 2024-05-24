import React from 'react';

import DocsLayout from '@/components/layouts/DocsLayout';
import DocsForm from '@/components/pages/docs/DocsForm';
import {
  ModalCustom,
  ModalGeneral,
} from '@/components/pages/docs/exmaples/modal';

const STYLE_PROPS_TYPE = `export interface StyleProps {
  className?: string;
  style?: CSSProperties;
}`;
const IS_OPEN_TYPE = `export type IsOpen = boolean | undefined;`;

const DocsComponentPage = () => {
  return (
    <DocsLayout>
      <DocsForm
        name="Modal"
        description="Modal is used to display a dialog box that provides custom content."
        imports={['Modal', 'ModalHeader', 'ModalFooter', 'useModal']}
        src="modal"
        examples={[
          { title: undefined, component: ModalGeneral },
          { title: 'Custom', component: ModalCustom },
        ]}
        apis={[
          {
            componentName: 'Modal',
            propsData: [
              {
                property: 'overlay',
                type: ['StyleProps'],
                description: 'Modal overlay style.',
              },
              {
                property: 'content',
                type: ['StyleProps'],
                description: 'Modal content style.',
              },
              {
                property: 'duration',
                type: ['number'],
                description: 'Modal animation-duration property.',
                defaultValue: 200,
              },
              {
                property: 'zIndex',
                type: ['number'],
                description: 'Modal z-index property.',
                defaultValue: 1000,
              },
              {
                property: 'children',
                type: ['ReactNode'],
                description: 'Modal content.',
              },
              {
                property: 'isOpen',
                type: ['IsOpen'],
                description: 'Modal isOpen state.',
              },
              {
                property: 'setIsOpen',
                type: ['SetStateAction<IsOpen>'],
                description: 'Modal isOpen setState.',
              },
              {
                property: 'onChangeOpen',
                type: ['(value: boolean) => void'],
                description: 'Modal open change event.',
              },
            ],
          },
          {
            componentName: 'ModalHeader',
            propsData: [
              {
                property: 'hideCloseIcon',
                type: ['boolean'],
                description: 'Hide close icon.',
                defaultValue: false,
              },
              {
                property: 'closeIcon',
                type: ['ReactNode'],
                description: 'Custom close icon.',
              },
              {
                property: 'children',
                type: ['ReactNode'],
                description: 'Title content.',
              },
            ],
          },
          {
            componentName: 'ModalFooter',
            propsData: [
              {
                property: 'cancelBtnText',
                type: ['string'],
                description: 'Cancel button text.',
                defaultValue: 'Cancel',
              },
              {
                property: 'confirmBtnText',
                type: ['string'],
                description: 'Confirm button text.',
                defaultValue: 'Confirm',
              },
              {
                property: 'onCancel',
                type: ['() => void'],
                description: 'Cancel button click event.',
              },
              {
                property: 'onConfirm',
                type: ['() => void'],
                description: 'Confirm button click event.',
              },
            ],
          },
        ]}
        typesData={[
          { type: 'StyleProps', code: STYLE_PROPS_TYPE },
          { type: 'IsOpen', code: IS_OPEN_TYPE },
        ]}
      ></DocsForm>
    </DocsLayout>
  );
};

export default DocsComponentPage;
