import { Table, TableContainer, Tbody, Td, Tr } from '@chakra-ui/react';
import { camelToMultiWords } from '../utils/convert';

//this component displays data for ***non-nested object***
//e.g.: {name:'Inzamul',age:'24'} ==>ok
//e.g.: {name:'Inzamul',address:{village:'pilgiri'}} ==>error

function DisplayData({ data = {}, ...rest }) {
  //data prop should be a non-nested object
  return (
    <TableContainer
      {...rest}
      bg="white"
      border="1px"
      borderColor="gray.200"
      rounded="md"
      p={5}
    >
      <Table
        variant="striped"
        colorScheme="brand"
        textTransform="capitalize"
        color="textHighlight"
        fontSize="lg"
        fontWeight="500"
      >
        <Tbody whiteSpace="nowrap">
          {Object.keys(data).map(key =>
            data[key] ? (
              <Tr
                key={key}
                sx={{
                  '&:last-child > td': {
                    borderColor: 'gray.200',
                  },
                }}
              >
                {[camelToMultiWords(key), data[key]].map(item => (
                  <Td key={item} whiteSpace="normal">
                    {item}
                  </Td>
                ))}
              </Tr>
            ) : null
          )}
        </Tbody>
      </Table>
    </TableContainer>
  );
}

export default DisplayData;
