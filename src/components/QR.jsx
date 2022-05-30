import { Box } from '@chakra-ui/react';
import { QRCodeSVG } from 'qrcode.react';

const QR = ({ value, size = undefined }) => (
  <Box
    style={{
      border: '1px solid #2D3748',
      padding: '5px',
      borderRadius: '.5rem',
    }}
  >
    <QRCodeSVG fgColor="#2D3748" level="M" value={value} size={size} />
  </Box>
);

export default QR;
