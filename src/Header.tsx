import { Text, Title } from '@mantine/core';

import { Fragment } from 'react';

export default function Header() {
  return (
    <Fragment>
      <Title order={1}>QR Coder</Title>
      <Text fz="xl">
        Simply enter your URL to generate your own custom QR code
      </Text>
    </Fragment>
  );
}
