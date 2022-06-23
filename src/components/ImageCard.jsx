import { Box } from '@chakra-ui/react';
import Picture from './Picture';

function ImageCard({
  _active,
  _hover,
  cursor,
  overflow,
  src,
  sources,
  transform,
  transition,
  onOpen,
  ...props
}) {
  const baseStyle = {
    borderRadius: 'md',
    border: '2px',
    borderColor: 'transparent',
    boxShadow: 'lg',
    cursor: cursor || 'pointer',
    overflow: overflow || 'hidden',
    p: '1',
    backgroundColor: 'gray.50',
    transition: transition || 'all 250ms cubic-bezier(0.4, 0, 0.2, 1) 50ms',
  };
  const hoverStyle = {
    borderColor: 'primary',
    ..._hover,
  };
  const activeStyle = {
    transform: `${transform} scale(1.05)`,
    ..._active,
  };

  return (
    <>
      <Box
        sx={baseStyle}
        _hover={hoverStyle}
        _active={activeStyle}
        transform={transform}
        onClick={onOpen}
        {...props}
      >
        <Picture
          sources={sources}
          src={src}
          borderRadius={baseStyle.borderRadius}
        />
      </Box>
    </>
  );
}

export default ImageCard;
