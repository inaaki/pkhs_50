import { createStandaloneToast } from '@chakra-ui/react';

function createToast(config = {}) {
  //TODO: tweak toast config
  const toast = createStandaloneToast({
    defaultOptions: {
      position: 'bottom',
      isClosable: true,
      duration: 6500,
      variant: 'solid',
      status: 'info',
    },
    ...config,
  });
  function successToast(title, description) {
    toast({
      description: description || 'Your action was successful',
      status: 'success',
      title: title || 'Success',
      variant: 'solid',
    });
  }
  function errorToast(title, description) {
    toast({
      description: description || "Sorry, we couldn't handle your request",
      status: 'error',
      title: title || 'Error',
      variant: 'solid',
    });
  }
  function networkError(title, description) {
    toast({
      description:
        description || 'Please, check your connection and try again!',
      status: 'error',
      title: title || 'Network Error',
      variant: 'solid',
    });
  }
  function timeoutError(
    title = 'Request timeout',
    description = 'Please, try again later on a stable connection'
  ) {
    toast({
      description,
      status: 'error',
      title,
      variant: 'solid',
    });
  }

  return {
    error: errorToast,
    networkError,
    success: successToast,
    timeoutError,
  };
}

export default createToast;
