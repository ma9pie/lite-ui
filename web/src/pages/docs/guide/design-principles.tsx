import { Flex } from '@ma9pie/lite-ui';
import React from 'react';

import { Text } from '@/components/common/text';
import DocsLayout from '@/components/layouts/DocsLayout';
import Head from '@/components/layouts/Head';

const DocsGuidePage = () => {
  return (
    <DocsLayout>
      <Head page="Design Principles"></Head>

      <Flex col gap={32}>
        <Text.Title>Design Principles</Text.Title>
        <Text>
          {/* Lite UI는 아래와 같은 설계 원칙을 바탕으로 개발되었습니다. */}
          Lite UI was developed based on the following design principles.
        </Text>

        <Flex col gap={8}>
          <Text.SubTitle>Simplicity</Text.SubTitle>
          <Text>
            {/* 높은 코드 복잡도는 유지보수를 어렵게 하고 성능 저하 발생 가능성을 커지게 합니다. Lite UI는 하나의 컴포넌트는 단일 책임을 가지고 너무 많은 props를 받지 않도록 설계하려고 노력합니다. Lite UI는 "Simple is best"라는 원칙을 통해 웹사이트의 복잡도를 낮추는데 기여하고자 합니다. */}
            High code complexity makes maintenance difficult and increases the
            likelihood of performance degradation. Lite UI tries to design a
            component to have a single responsibility and not receive too many
            props. Lite UI seeks to contribute to reducing the complexity of
            websites through the principle of &quot;Simple is best.&quot;
          </Text>
        </Flex>

        <Flex col gap={8}>
          <Text.SubTitle>Scalability</Text.SubTitle>
          <Text>
            {/* Lite UI는 특정 조건에서만 동작하는 컴포넌트가 아닌, 다양한 상황에서 커스텀이 가능하고 동작하는 컴포넌트를 설계하는 것을 목표로 합니다. 이러한 목표를 통해서 라이브러리의 수명을 향상시키고 프로젝트에 효율적으로 적용할 수 있도록 합니다. */}
            Lite UI aims to design components that are customizable and work in
            a variety of situations, rather than components that only work under
            certain conditions. These goals improve the lifespan of the library
            and enable efficient application to projects.
          </Text>
        </Flex>

        <Flex col gap={8}>
          <Text.SubTitle>Consistency</Text.SubTitle>
          <Text>
            {/* Lite UI는 TailwindCSS의 디자인 토큰을 고수하여 개발 효율성을 높이고 일관된 디자인을 제공하는 것을 목표로 합니다. 이러한 일관성은 라이브러리와 관련된 학습 곡선을 최소화하여 개발자가 논리 설계에 집중할 수 있도록 노력합니다. */}
            Lite UI adheres to TailwindCSS&apos;s design tokens, aiming to
            increase development efficiency and provide consistent design. This
            consistency strives to minimize the learning curve associated with
            the library, allowing developers to focus on logic design.
          </Text>
        </Flex>
      </Flex>
    </DocsLayout>
  );
};

export default DocsGuidePage;
