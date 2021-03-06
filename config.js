// Next.js has env issues, it is only read once, then fails to load after
// environment will have to be manually changed before commit
// or gitignore this after initial commit/push
export const ENVIRONMENT = 'development';
export const DEV_API_ENDPOINT = 'http://localhost:3000/api/graphql';
export const PROD_API_ENDPOINT =
  'https://ethang-backend.herokuapp.com/api/graphql';
