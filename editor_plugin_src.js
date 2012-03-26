/**
* TinyMCE Select Body
* @name editor_plugin_src.js
* @author Mattia - http://www.matriz.it
* @version 1.0.0
* @date March 26, 2012
* @category TinyMCE plugin
* @copyright (c) 2012 Mattia at Matriz.it (info@matriz.it)
* @license MIT - http://opensource.org/licenses/mit-license.php
* @example Visit http://www.matriz.it/projects/tinymce-select-body/ for more informations about this TinyMCE plugin
*/

(function() {
	// Load plugin specific language pack
    tinymce.PluginManager.requireLangPack('selectbody');

	tinymce.create('tinymce.plugins.SelectBodyPlugin', {
		/**
		 * Initializes the plugin, this will be executed after the plugin has been created.
		 * This call is done before the editor instance has finished it's initialization so use the onInit event
		 * of the editor instance to intercept that event.
		 *
		 * @param {tinymce.Editor} ed Editor instance that the plugin is initialized in.
		 * @param {string} url Absolute URL to where the plugin is located.
		 */
		init : function(ed, url) {
			// Register the command so that it can be invoked by using tinyMCE.activeEditor.execCommand('mceSelectBody');
			ed.addCommand('mceSelectBody', function() {
				tinyMCE.activeEditor.selection.select(tinyMCE.activeEditor.dom.select('body')[0]);
			});

			// Register example button
			ed.addButton('selectbody', {
				title : 'selectbody.desc',
				cmd : 'mceSelectBody',
				image : url + '/img/selectbody.gif'
			});
		},

		/**
		 * Returns information about the plugin as a name/value array.
		 * The current keys are longname, author, authorurl, infourl and version.
		 *
		 * @return {Object} Name/value array containing information about the plugin.
		 */
		getInfo : function() {
			return {
				longname : 'Select Body',
				author : 'Mattia',
				authorurl : 'http://www.matriz.it/',
				infourl : 'http://www.matriz.it/projects/tinymce-select-body/',
				version : '1.0'
			};
		}
	});

	// Register plugin
	tinymce.PluginManager.add('selectbody', tinymce.plugins.SelectBodyPlugin);
})();