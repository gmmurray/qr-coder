import { Box } from '@mantine/core';
import QRCode from 'react-qr-code';

export const QR_ELEMENT_ID = 'qr-code';

type Props = {
  value: string;
};

export default function QrDisplay({ value }: Props) {
  return (
    <Box
      sx={theme => ({
        backgroundColor: 'black',
        padding: '2rem',
        height: '50vmin',
        width: '50vmin',
        borderRadius: theme.radius.md,
      })}
    >
      <QRCode
        id={QR_ELEMENT_ID}
        value={value}
        style={{ height: '100%', width: '100%' }}
      />
    </Box>
  );
}
