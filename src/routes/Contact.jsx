import { Box, Center, theme } from '@chakra-ui/react';
import Person from '../components/Person';
import withNav from '../hoc/withNav';

function Contact(props) {
  const borderColor = theme.colors.green['500'];
  return (
    <Center px={{ base: 5, md: 10 }} py={{ base: 10, md: 20 }} {...props}>
      <Box
        borderLeft={{ base: 0, md: `2px solid ${borderColor}` }}
        sx={{
          '&>*': {
            ps: { base: 0, md: '22.5vw!important' },
            mb: 40,
            position: 'relative',
            '&::after': {
              content: "''",
              width: '15vw',
              height: '2px',
              bg: borderColor,
              position: 'absolute',
              top: '52%',
              left: 0,
              display: { base: 'none', md: 'initial' },
            },
            '&::before': {
              content: "''",
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              bg: borderColor,
              position: 'absolute',
              top: '47%',
              left: '15vw',
              display: { base: 'none', md: 'initial' },
            },
          },
          '&>*:last-child': {
            mb: 0,
          },
        }}
      >
        <Person />
        <Person />
        <Person />
        <Person />
        <Person />
        <Person />
        <Person />
      </Box>
    </Center>
  );
}

export default withNav(Contact);
