module.exports = {
    // Other configurations...
    module: {
      rules: [
        {
          test: /\.mjs$/,
          include: /node_modules/,
          type: 'javascript/auto',
        },
        // Other rules...
      ],
    },
  };
  