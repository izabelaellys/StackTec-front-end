import React, { useEffect } from 'react';

const TinyMCEEditor = ({setEditorContent }) => {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://cdn.tiny.cloud/1/no-api-key/tinymce/6/tinymce.min.js'
    script.referrerPolicy = 'origin'
    script.async = true

    script.onload = () => {
      window.tinymce.init({
        selector: 'textarea#editor',
        skin: 'bootstrap',
        plugins: 'lists, link, image, media',
        toolbar: 'h1 h2 bold italic strikethrough blockquote bullist numlist backcolor | link image media | removeformat help',
        menubar: true,
        setup: (editor) => {
          editor.on('change', () => {
            const content = editor.getContent()
            setEditorContent(content)
          });
        },
      });
    }
    document.head.appendChild(script)
    return () => {
      document.head.removeChild(script)
    };
  }, [])

  return (
    <textarea id="editor" />
  );
};

export default TinyMCEEditor
