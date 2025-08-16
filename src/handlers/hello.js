
exports.handler = async (event, context) => {
  try {
    const response = {
      statusCode: 200,
      body: JSON.stringify({
        message: '¡Hola Mundo!',
      })
    };

    return response;
  } catch (error) {
    console.error('Error in hello handler:', error);
    
    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({
        error: 'Internal Server Error',
        message: 'Something went wrong'
      })
    };
  }
};
