/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://solarfluidity.shop',
  generateRobotsTxt: false, // Ya tenemos un archivo robots.txt personalizado
  outDir: 'public', // Lo generamos en public para asegurar que se incluya en la build
  generateIndexSitemap: true,
  exclude: ['/api/*', '/_next/*', '/404', '/500'],
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: '*', disallow: ['/api', '/.netlify', '/_next'] }
    ]
  }
}
