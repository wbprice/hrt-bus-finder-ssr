/**
 * Server Configuration
 * (app.config.web)
 *
 * Configure the Web Server
 *
 * @see {@link http://trailsjs.io/doc/config/web}
 */
module.exports = {

  /**
   * The port to bind the web server to
   */
  port: process.env.PORT || 3000,

  /**
   * The host to bind the web server to
   */
  host: process.env.HOST || '0.0.0.0',

  plugins: [
    {
        register: require('vision'),
        options: {}
    },
    {
        register: require('inert'),
        options: {}
    }
  ],
    
  onPluginsLoaded(err) {
    if (err) {
        this.log.info(err);
    }

    /**
     * Views
     */
    this.packs.hapi.server.views({
      engines: {
          html: require('handlebars')
      },
      path: 'templates',
      partialsPath: 'templates/partials/'
    })
  },

}
