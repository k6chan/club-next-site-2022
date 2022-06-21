const useSubDirectory = process.env.USE_SUB_DIRECTORY === 'true'

module.exports = {
  reactStrictMode: true,
  assetPrefix: useSubDirectory ? '/club-next-site/' : '',
  basePath: useSubDirectory ? '/club-next-site' : ''
}
