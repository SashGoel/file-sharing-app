// import {useRef, useState, useEffect} from 'react';
// import './App.css';
// import { uploadFile } from './service/api';

// function App() {

//   const [file, setFile] =useState('');
//   const [result, setResult] = useState('');

//   const fileInputRef =  useRef();

//   const url = "https://media.istockphoto.com/id/1132723452/vector/notebooks-file-transfer-data-transmission-ftp-files-receiver-and-notebook-computer-backup.jpg?s=612x612&w=0&k=20&c=KXlnaye_AjzdDRAJ8A1kV1cZ1PwxsWPD8ZnW3HLS06o=";

//   useEffect(()=> {
//     const getImage = async () => {
//       if (file) {
//         const data = new FormData();
//         data.append("name", file.name);
//         data.append("file", file);

//         const response = await uploadFile(data);
//         setResult(response.path);
//       }
//     }
//     getImage();
//   },[file])

//   const onUploadClick = () =>{
//     fileInputRef.current.click()
//   }
//   return (
//     <div className="container">
//       <img src={url} alt="banner" />
//       <div className="wrapper">
//         <h1>Simple File Sharing</h1>
//         <p>Upload and share the download link.</p>

//         <button onClick={() => onUploadClick()}>Upload</button>
//         <input
//           type="file"
//           ref={fileInputRef}
//           style={{ display:'none' }}
//           onChange={(e)=> setFile(e.target.files[0])}
//         />

//         <a href={result} target="_blank">{result}</a>
//       </div>
//     </div>
//   );
// }

// export default App;

import { useState, useEffect, useRef } from 'react';
import './App.css';
import { uploadFile } from './service/api';

function App() {
  const [file, setFile] = useState('');
  const [result, setResult] = useState('');

  const fileInputRef = useRef();

  const url = 'https://media.istockphoto.com/id/1132723452/vector/notebooks-file-transfer-data-transmission-ftp-files-receiver-and-notebook-computer-backup.jpg?s=612x612&w=0&k=20&c=KXlnaye_AjzdDRAJ8A1kV1cZ1PwxsWPD8ZnW3HLS06o=';

  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);

        const response = await uploadFile(data);
        setResult(response.path);
      }
    }
    getImage();
  }, [file])

  const onUploadClick = () => {
    fileInputRef.current.click();
  }

  return (
    <div className='container'>
      <img src={url} className='img' />
      <div className='wrapper'>
        <h1>Simple file sharing!</h1>
        <p>Upload and share the download link.</p>
        
        <button onClick={() => onUploadClick()}>Upload</button>
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={(e) => setFile(e.target.files[0])}
        />

        <a href={result} target='_blank'>{result}</a> 
      </div>
    </div>
  );
}

export default App;
