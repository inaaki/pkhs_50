import { Table, TableContainer, Tbody, Td, Tr } from '@chakra-ui/react';
import React from 'react';
import { camelToMultiWords } from '../utils/convert';

//this component displays data for ***non-nested object***
//e.g.: {name:'Inzamul',age:'24'} ==>ok
//e.g.: {name:'Inzamul',address:{village:'pilgiri'}} ==>error

function DisplayData({ data = {}, ...rest }) {
  //data prop should be a non-nested object
  return (
    <TableContainer {...rest}>
      <Table variant="striped" colorScheme="brand">
        <Tbody>
          {Object.keys(data).map(key =>
            data[key] ? (
              <Tr key={key}>
                {[camelToMultiWords(key), data[key]].map(item => (
                  <Td
                    key={item}
                    textTransform={'capitalize'}
                    color="textHighlight"
                    fontSize="lg"
                    fontWeight="500"
                  >
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
