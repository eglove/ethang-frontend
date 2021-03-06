module.exports = {
  ci: {
    upload: {
      target: 'temporary-public-storage',
    },
    assert: {
      assertMatrix: [
        {
          matchingUrlPattern: '.*',
          assertions: {
            'categories:performance': ['error', { minScore: 0.8 }],
            'categories:accessibility': ['error', { minScore: 1 }],
            'categories:bestPractices': ['error', { minScore: 1 }],
            'categories:seo': ['error', { minScore: 1 }],
          },
        },
      ],
    },
  },
};
