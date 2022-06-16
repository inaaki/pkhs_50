import { Box, Image } from '@chakra-ui/react';

function ImageCard({
  _active,
  _hover,
  cursor,
  overflow,
  src,
  srcSet,
  transform,
  transition,
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
        {...props}
      >
        <Image
          borderRadius={baseStyle.borderRadius}
          src={src}
          srcSet={srcSet}
        />
      </Box>
    </>
  );
}

export default ImageCard;
