module.exports = {
    theme: {
      extend: {
        // You can extend other settings like colors, spacing, etc.
      },
    },
    plugins: [
      function ({ addUtilities }) {
        addUtilities({
          '.center-page': {
            display: 'flex',
            'justify-content': 'center',
            'align-items': 'center',
            height: '100vh', // Ensures it fills the full viewport height
          },
        }, ['responsive', 'hover']);
      },
    ],
  }