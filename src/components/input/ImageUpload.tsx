import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Button, Grid, styled } from '@mui/material';
import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { Path } from 'react-hook-form';

type Props<F> = {
  name: Path<F>;
  defaultValue: File | null;
  updateImage: (name: Path<F>, file: File | null) => void;
};

export default function ImageUpload<F>({
  name,
  defaultValue,
  updateImage,
}: Props<F>) {
  const [selectedImage, setSelectedImage] = useState<File | null>(
    defaultValue ?? null,
  );
  const [previewURL, setPreviewURL] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (defaultValue) setSelectedImage(defaultValue);
  }, [defaultValue]);

  useEffect(() => {
    if (selectedImage) {
      updateImage(name, selectedImage);
    }
  }, [name, selectedImage, updateImage]);

  const _handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];

    if (file) {
      if (file.size > 1024 * 1024) {
        alert('Image can only be 1MB or smaller');
        return;
      } else if (
        !['image/jpeg', 'image/png', 'image/gif'].includes(file.type)
      ) {
        alert('Image can only be a jpeg, png or gif');
        return;
      } else {
        setSelectedImage(file);

        const reader = new FileReader();
        reader.onloadend = () => {
          setPreviewURL(reader.result as string);
        };
        reader.readAsDataURL(file);
      }
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
