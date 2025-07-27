const { ClassicEditor, AutoLink, Autosave, Bold, Essentials, GeneralHtmlSupport, Heading, Italic, Link, Paragraph, TextPartLanguage } =
	window.CKEDITOR;

const LICENSE_KEY =
	'eyJhbGciOiJFUzI1NiJ9.eyJleHAiOjE3Mzk4MzY3OTksImp0aSI6IjY5MjEyYWE4LTg0YjQtNDI1ZC05NGM3LTg1MTZjODU3MzYyNSIsInVzYWdlRW5kcG9pbnQiOiJodHRwczovL3Byb3h5LWV2ZW50LmNrZWRpdG9yLmNvbSIsImRpc3RyaWJ1dGlvbkNoYW5uZWwiOlsiY2xvdWQiLCJkcnVwYWwiLCJzaCJdLCJ3aGl0ZUxhYmVsIjp0cnVlLCJsaWNlbnNlVHlwZSI6InRyaWFsIiwiZmVhdHVyZXMiOlsiKiJdLCJ2YyI6Ijg1ZWQzY2RkIn0.zYUwkXfoJF8ghEscZkO6UcJY26oDHxvOWbgUNpqH0Wx9yDjfPRHi-nGitBbTA4QROlh0SjGnnwDam7k-vCn8Ig';

const editorConfig = {
	toolbar: {
		items: ['textPartLanguage', '|', 'heading', '|', 'bold', 'italic', '|', 'link'],
		shouldNotGroupWhenFull: false
	},
	plugins: [AutoLink, Autosave, Bold, Essentials, GeneralHtmlSupport, Heading, Italic, Link, Paragraph, TextPartLanguage],
	heading: {
		options: [
			{
				model: 'paragraph',
				title: 'Paragraph',
				class: 'ck-heading_paragraph'
			},
			{
				model: 'heading1',
				view: 'h1',
				title: 'Heading 1',
				class: 'ck-heading_heading1'
			},
			{
				model: 'heading2',
				view: 'h2',
				title: 'Heading 2',
				class: 'ck-heading_heading2'
			},
			{
				model: 'heading3',
				view: 'h3',
				title: 'Heading 3',
				class: 'ck-heading_heading3'
			},
			{
				model: 'heading4',
				view: 'h4',
				title: 'Heading 4',
				class: 'ck-heading_heading4'
			},
			{
				model: 'heading5',
				view: 'h5',
				title: 'Heading 5',
				class: 'ck-heading_heading5'
			},
			{
				model: 'heading6',
				view: 'h6',
				title: 'Heading 6',
				class: 'ck-heading_heading6'
			}
		]
	},
	htmlSupport: {
		allow: [
			{
				name: /^.*$/,
				styles: true,
				attributes: true,
				classes: true
			}
		]
	},
	initialData:
		"",
	licenseKey: LICENSE_KEY,
	link: {
		addTargetToExternalLinks: true,
		defaultProtocol: 'https://',
		decorators: {
			toggleDownloadable: {
				mode: 'manual',
				label: 'Downloadable',
				attributes: {
					download: 'file'
				}
			}
		}
	},
	menuBar: {
		isVisible: true
	},
	placeholder: 'پیام خود را وارد کنید',
};

ClassicEditor.create(document.querySelector('#editor'), editorConfig);
