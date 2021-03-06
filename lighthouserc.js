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
            'installable-manifest': ['warn', { minScore: 1 }],
            'uses-responsive-images': ['error', { maxLength: 0 }],
            'categories:performance': ['error', { minScore: 0.9 }],
            'categories:accessibility': ['error', { minScore: 1 }],
            'categories:bestPractices': ['error', { minScore: 1 }],
            'categories:seo': ['error', { minScore: 1 }],
          },
        },
      ],
    },
  },
};
