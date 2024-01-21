import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Navigate } from 'react-router-dom';
import Editor from '../Editor';

const CreatePost = () => {

  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [files, setFiles] = useState("");
  const [redirect, setRedirect] = useState(false);

  const modules = {
    toolbar: [
      [{ 'header': [1, 2, false] }],
      ['bold', 'italic', 'underline','strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image'],
      ['clean']
    ],
  };

  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
  ];

   
  async function createNewPost (e) {
    const data = new FormData();
    data.set('title', title);
    data.set('summary', summary);
    data.set('content', content);
    data.set('file', files[0]);
  
    e.preventDefault();
    console.log(files);
    try{
      const response = await fetch('http://localhost:4000/post', {
          method: 'POST',
          body: data,
          credentials: 'include'
      });
      // console.log(await response.json());
      setRedirect(true);
      
    } catch(err) {
      console.log('Error occured' , err);
    }
  }

  if (redirect) {
    return <Navigate to={'/'} />
  }

  return (
    <form onSubmit={createNewPost}>
      <input 
          type="title" 
          placeholder={'Title'}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
      /> 

      <input 
          type="summary" 
          placeholder={'Summary'}
          value={summary}
          onChange={(e)=>setSummary(e.target.value)}
      />

      <input 
          type="file" 
          // value={files}
          onChange={e => setFiles(e.target.files)}
      />

      <Editor onChange={setContent} value={content} />
      <button style={{marginTop: '5px'}}>Create Post</button>
    </form>
  )
}

export default CreatePost
