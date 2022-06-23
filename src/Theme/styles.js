/* eslint-disable no-dupe-keys */

const styles = {
  styles: {
    global: {
      '*': {
        _focus: {
          boxShadow: 'none!important',
        },
      },
      '*:disabled': {
        cursor: 'auto!important',
      },
      body: {
        color: 'text',
        //fixed nav height
        mt: '67.5px',
      },
      'body::-webkit-scrollbar': {
        //width of the entire scrollbar
        width: '12px',
      },
      'body::-webkit-scrollbar-track': {
        //color of the tracking area
        boxShadow: 'inset 0 0 6px rgba(0,0,0,0.1)',
        bg: '#F5F5F5',
        borderRadius: '10px',
      },
      'body::-webkit-scrollbar-thumb': {
        borderRadius: '10px',
        border: '2px solid #f5f5f5',
        bg: '#22543D',
        backgroundImage:
          '-webkit-gradient(linear, left top, left bottom, from(#276749), color-stop(#68D391), to(#276749))',
        backgroundImage: '-o-linear-gradient(top, #276749, #68D391, #276749)',
        backgroundImage:
          'linear-gradient(to bottom, #276749, #68D391, #276749)',
      },
      picture: {
        flexShrink: 0,
      },
    },
  },
};

export default styles;
