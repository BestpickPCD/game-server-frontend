import React, { useCallback, useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import {
  Container,
  ImageList,
  ImageListItem,
  Typography,
  styled
} from '@mui/material';

interface UploadFileProps {
  uploadFile: File[];
  onSetUploadFile: (file: [File]) => void;
}
const UploadFile = ({
  uploadFile = [],
  onSetUploadFile
}: UploadFileProps): JSX.Element => {
  const [imageUrl, setImageUrl] = useState(null);

  const onDrop = useCallback(
    (acceptedFiles) => {
      acceptedFiles.forEach((file: File) => {
        const reader = new FileReader();
        reader.onabort = () => console.log('file reading was aborted');
        reader.onerror = () => console.log('file reading has failed');
        reader.onload = () => {
          onSetUploadFile([file]);
        };
        // reader.readAsArrayBuffer(file);
        reader.onloadend = () => {
          setImageUrl(reader.result);
        };
        reader.readAsDataURL(file);
      });
    },
    [uploadFile]
  );

  useEffect(() => {
    if (uploadFile.length && typeof uploadFile[0] === 'string') {
      setImageUrl(uploadFile);
    }
  }, [uploadFile]);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop
  });

  return (
    <div>
      <Typography variant="h4" sx={{ mb: '8px' }}>
        Files
      </Typography>
      <UploadContainer {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} multiple={false} />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </UploadContainer>
      <aside />
      {imageUrl && (
        <ImageList cols={3} rowHeight={200} sx={{ margin: '8px 0' }}>
          <ImageListItem>
            <img src={imageUrl} alt="Uploaded Image" height="300" />
          </ImageListItem>
        </ImageList>
      )}
    </div>
  );
};

export default UploadFile;

const UploadContainer = styled(Container)`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-width: 2px;
  border-radius: 2px;
  border-color: #eeeeee;
  border-style: dashed;
  background-color: #fafafa;
  color: #bdbdbd;
  outline: none;
  transition: border 0.24s ease-in-out;
  cursor: pointer;
  &:focus {
    border-color: #2196f3;
  }
`;
