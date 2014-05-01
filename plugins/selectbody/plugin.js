/**
 * TinyMCE Select Body
 * @name plugin.js
 * @author Mattia - http://www.matriz.it
 * @version 2.0.0
 * @date May 1, 2014
 * @category TinyMCE plugin
 * @copyright (c) 2014 Mattia at Matriz.it (info@matriz.it)
 * @license GNU LGPL 2.1
 * @example Visit http://www.matriz.it/projects/tinymce-select-body/ for more informations about this TinyMCE plugin
 */

tinymce.PluginManager.requireLangPack('selectbody');
tinymce.PluginManager.add('selectbody', function(editor, url) {
	// Register the command so that it can be invoked by using tinyMCE.activeEditor.execCommand('mceSelectBody');
	editor.addCommand('mceSelectBody', function() {
		this.selection.select(this.dom.select('body')[0]);
	});
	
	// Adds a menu item to the edit menu
	editor.addMenuItem('selectbody', {
		text: editor.translate('selectbody_desc'),
		context: 'edit',
		cmd: 'mceSelectBody'
	});
});