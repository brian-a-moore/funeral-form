import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Button, Grid, styled } from '@mui/material';
import { ChangeEvent, useRef, useState } from 'react';

export default function ImageUpload() {
  const [, setSelectedImage] = useState<File | null>(null);
  const [previewURL, setPreviewURL] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const _handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];

    if (file) {
      setSelectedImage(file);

      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewURL(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const _removeImage = () => {
    setSelectedImage(null);
    setPreviewURL(null);

    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <Grid item xs={12} md={4}>
      <Container>
        {previewURL ? (
          <>
            <img
              src={previewURL}
              alt="Preview"
              style={{
                maxWidth: '100%',
                maxHeight: '156px',
                objectFit: 'contain',
              }}
            />
            <Button variant="outlined" onClick={_removeImage}>
              Remove
            </Button>
          </>
        ) : (
          <Button
            component="label"
            variant="contained"
            startIcon={<CloudUploadIcon />}>
            Upload Image
            <VisuallyHiddenInput type="file" onChange={_handleImageChange} />
          </Button>
        )}
      </Container>
    </Grid>
  );
}

const Container = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  rowGap: '1rem',
  alignItems: 'center',
});

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});
