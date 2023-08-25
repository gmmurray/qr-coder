import { Button } from '@mantine/core';
import { QR_ELEMENT_ID } from './QrDisplay';
import { useCallback } from 'react';

type Props = {
  url: string;
};

export default function SaveImgButton({ url }: Props) {
  const handleClick = useCallback(() => {
    const svg = document.getElementById(QR_ELEMENT_ID);

    if (!svg) {
      return;
    }

    const svgData = new XMLSerializer().serializeToString(svg);
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx?.drawImage(img, 0, 0);
      const pngFile = canvas.toDataURL('image/png');
      const downloadLink = document.createElement('a');
      downloadLink.download = `${url.replace('.', '')}_QR`;
      downloadLink.href = `${pngFile}`;
      downloadLink.click();
    };
    img.src = `data:image/svg+xml;base64,${btoa(svgData)}`;
  }, []);
  return (
    <Button
      fullWidth
      variant="gradient"
      gradient={{ from: 'indigo', to: 'violet' }}
      onClick={handleClick}
    >
      Save as .png
    </Button>
  );
}
