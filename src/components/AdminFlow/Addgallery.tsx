import { useState, useEffect } from 'react';
import { Box, Button, Card, CardMedia, FormControl, FormControlLabel, Grid, Radio, RadioGroup, TextField, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import CloseIcon from '@mui/icons-material/Close';
import { Submit, VisuallyHiddenInput } from '../../adminstyles/MembershiptableStyles';
import { showToast } from '../../Utils/ShowToast';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../Redux/Store';
import { deleteSingleGallery, SingleGallery, UpdateGallery, uploadGalleryImage } from '../../Redux/gallarySlice';
import Loading from '../../Utils/CircularLoader';
import { useLocation, useNavigate } from 'react-router-dom';

interface FormData {
  year: string;
  title: string;
  mediaType: string;
  youtubeLink: string;
  files: File[];
}

interface Errors {
  title: string;
  files: string;
  youtubeLink:string;
}

interface Preview {
  id: string;
  url: string;
}

const Addgallery: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const location = useLocation()
  const navigate = useNavigate()
  const { loading, single_gallery }: any = useSelector((state: RootState) => state.gallery);
  const [formData, setFormData] = useState<FormData>({
    year: '',
    title: '',
    mediaType: '',
    youtubeLink: '',
    files: [],
  });
  const [errors, setErrors] = useState<Errors>({
    title: '',
    files: '',
    youtubeLink:''
  });
  const [selectedYear, setSelectedYear] = useState<Date | null>(new Date());
  const [previews, setPreviews] = useState<Preview[]>([]);
  const [isFormValid, setIsFormValid] = useState<boolean>(false);
  const [touched, setTouched] = useState<{ title: boolean; files: boolean }>({
    title: false,
    files: false,
  });
  const MAX_IMAGE_SIZE = 1 * 1024 * 1024; // 1MB in bytes
  const MAX_VIDEO_SIZE = 3 * 1024 * 1024; // 3MB in bytes
  const IMAGE_TYPES = ['image/jpeg', 'image/png', 'image/gif'];
  const VIDEO_TYPES = ['video/mp4', 'video/mpeg', 'video/webm'];
  useEffect(() => {
    const type = localStorage.getItem('type') || ''
    if (!type) {
      setFormData((prev)=>({...prev, mediaType:'photos'}))
      localStorage.setItem('type', 'photos');
    }
    else{
      setFormData((prev)=>({...prev, mediaType:type}))
    }
    if (location?.state?.value) {
      dispatch(SingleGallery());
    }
  }, [dispatch, location?.state?.value]);


  useEffect(() => {
    if (location?.state?.value) {
      setSelectedYear(new Date(single_gallery?.data?.year));
      setFormData((prev) => ({
        ...prev,
        title: single_gallery?.data?.title || '',
        mediaType: single_gallery?.data?.mediaType || 'photos',
        youtubeLink: single_gallery?.data?.youtubelink || '',
        year: new Date(single_gallery?.data?.createdAt).getFullYear().toString(),
        files: [],
      }));
      if (single_gallery?.data?.CloudFile?.length > 0) {
        const mappedPreviews = single_gallery?.data?.CloudFile?.map((file: { _id: string, image: string }) => ({
          id: file._id,
          url: file.image,
        }));
        setPreviews(mappedPreviews);
      }
    }
  }, [single_gallery]);

  const validateForm = (): boolean => {
    let isValid = true;
    const newErrors: Errors = { title: '', files: '',youtubeLink:'' };
    if (!formData.title.trim()) {
      newErrors.title = 'Title is required';
      isValid = false;
    }
    const hasNewFiles = formData.files.length > 0;
    const hasPreviewImages = previews.length > 0;
    if (formData.mediaType !== 'videos' && !hasNewFiles && !hasPreviewImages) {
      newErrors.files = 'At least one image is required'
      isValid = false;
    }
    if (touched.title || touched.files) {
      setErrors(newErrors);
    }
    if (formData.mediaType === 'videos') {
      if (!formData.youtubeLink.trim()) {
        newErrors.youtubeLink = 'YouTube link is required';
        isValid = false;
      } else {
        const youtubeRegex = /^(https?\:\/\/)?(www\.youtube\.com|youtu\.?be)\/.+$/;
        if (!youtubeRegex.test(formData.youtubeLink)) {
          newErrors.youtubeLink = 'Invalid YouTube link';
          isValid = false;
        }
      }
    }
    return isValid;
  };

  useEffect(() => {
    setIsFormValid(validateForm());
  }, [formData, touched]);

  useEffect(() => {
    if (formData.mediaType === 'videos') {
      setFormData((prev) => ({ ...prev, files: [] }));
      setPreviews([]);
      setErrors((prev) => ({ ...prev, files: '' }));
      setTouched((prev) => ({ ...prev, files: false }));
    }

  }, [formData.mediaType]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | { name?: string; value: unknown }> | any
  ) => {
    const { name, value } = e.target;
    if (name) {
      setFormData((prev) => ({ ...prev, [name]: value }));
      setTouched((prev) => ({ ...prev, [name]: true }));
    }
   
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(e.target.files || []);
    const existingFiles = formData.files;

    const newFiles: File[] = [];
    const duplicateNames: string[] = [];

    selectedFiles.forEach((file) => {
      const isDuplicate =
        existingFiles.some(f => f.name === file.name && f.size === file.size) ||
        newFiles.some(f => f.name === file.name && f.size === file.size); // also check against newFiles

      if (isDuplicate) {
        duplicateNames.push(file.name);
        return;
      }

      const isImage = formData.mediaType === 'photos';
      const isVideo = formData.mediaType === 'videos';

      if (isImage && !IMAGE_TYPES.includes(file.type)) {
        showToast(false, 'Only image files (JPEG, PNG, GIF) are allowed');
        return;
      }
      if (isVideo && !VIDEO_TYPES.includes(file.type)) {
        showToast(false, 'Only video files (MP4, MPEG, WebM) are allowed');
        return;
      }
      if (isImage && file.size > MAX_IMAGE_SIZE) {
        showToast(false, 'Image files must be under 1MB');
        return;
      }
      if (isVideo && file.size > MAX_VIDEO_SIZE) {
        showToast(false, 'Video files must be under 3MB');
        return;
      }

      newFiles.push(file);
    });

    if (duplicateNames.length > 0) {
      showToast(false, `Duplicate files are not allowed: ${duplicateNames.join(', ')}`);
    }

    if (newFiles.length === 0) return;

    const newPreviews: Preview[] = newFiles.map((file) => ({
      id: Math.random().toString(36).substr(2, 9),
      url: URL.createObjectURL(file),
    }));

    setFormData((prev) => ({ ...prev, files: [...prev.files, ...newFiles] }));
    setPreviews((prev) => [...prev, ...newPreviews]);
    setErrors((prev) => ({ ...prev, files: '' }));
    setTouched((prev) => ({ ...prev, files: true }));
  };


  const handleRemovePreview = async (id: string) => {
    const isCloudImage = single_gallery?.data?.CloudFile?.some((file: { _id: string }) => file._id === id);

    if (isCloudImage) {
      try {
        const data = { cloudid: id };
        const response = await dispatch(deleteSingleGallery({ data }));
        const fulfilled = response.payload;

        if (fulfilled.status) {
          showToast(true, fulfilled.message);
        } else {
          showToast(false, fulfilled.message);
        }
      } catch (error) {
        showToast(false, 'Something went wrong while deleting image');
      }
    }
    const updatedPreviews = previews.filter((preview) => preview.id !== id);
    const updatedFiles = formData.files.filter((_, index) => previews[index]?.id !== id);

    setPreviews(updatedPreviews);
    setFormData((prev) => ({ ...prev, files: updatedFiles }));
    setTouched((prev) => ({ ...prev, files: true }));
  };
  const handleSubmit = async () => {
    setTouched({ title: true, files: true });
    const isValid = validateForm();

    if (!isValid) {
      const errorMessages = [];
      if (errors.title) errorMessages.push(errors.title);
      if (errors.files) errorMessages.push(errors.files);
      showToast(false, errorMessages.join(' and '));
      return;
    }

    const form = new FormData();
    form.append("title", formData.title);
    if (selectedYear) {
      form.append("year", selectedYear.getFullYear().toString());
    }
    form.append("mediaType", formData.mediaType);
    form.append("youtubelink", formData.youtubeLink);

    if (formData.files.length > 0) {
      formData.files.forEach((file) => {
        form.append("file", file);
      });
    }



    try {
      if (location?.state?.value) {
        const response = await dispatch(UpdateGallery({ formData: form }));
        const fullfilled = response.payload
        if (fullfilled.status) {
          if (formData.mediaType === 'photos') {
            localStorage.setItem('type','photos')
          }
          else {
            localStorage.setItem('type','videos')
          }
          setTimeout(()=>{ navigate('/admin/admingallery/photogallery')},100)
        }
      }
      else {
        const response = await dispatch(uploadGalleryImage({ formData: form }));
        const fullfilled = response.payload
        if (fullfilled.status) {
          if (formData.mediaType === 'photos') {
            localStorage.setItem('type','photos')
          }
          else {
            localStorage.setItem('type','videos')
          }
        }
        setTimeout(()=>{ navigate('/admin/admingallery/photogallery')},100)
      }
    } catch (err) {
      showToast(false, "Something went wrong");

    }
  };


  return (
    <Box sx={{ overflowX: { sm: 'hidden' } }}>
      <Box mt={2} mb={2}>
        {loading && <Loading />}
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            views={['year']}
            value={selectedYear}
            onChange={(newValue) => setSelectedYear(newValue)}
            slotProps={{
              textField: {
                placeholder: '',
                size: 'small',
                sx: {
                  width: '140px',
                  backgroundColor: '#FFFFFF',
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      border: '2px solid #3DB80C',
                    },
                    '&:hover fieldset': {
                      border: '2px solid #3DB80C',
                    },
                    '&.Mui-focused fieldset': {
                      border: '2px solid #3DB80C',
                    },
                  },
                  '& .MuiSvgIcon-root': {
                    color: '#3DB80C', // Green icon
                  },
                },
              },
            }}
          />
        </LocalizationProvider>

      </Box>
      <Grid container spacing={2} mt={1}>
        <Grid size={{ xs: 12, sm: 12, md: 2, lg: 2 }}>
          <Typography>Title</Typography>
        </Grid>
        <Grid size={{ xs: 12, sm: 12, md: 10, lg: 10 }}>
          <TextField
            fullWidth
            size="small"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            error={!!errors.title}
            helperText={errors.title}
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#3DB80C',
                },
                '&:hover fieldset': {
                  borderColor: '#3DB80C',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#3DB80C',
                },
                borderRadius: '8px',
                width: { md: '600px', lg: '600px', xs: '100%', sm: '600px' },
              },
            }}
          />
        </Grid>

        <Grid size={{ xs: 12, sm: 12, md: 2, lg: 2 }}>
          <Typography>Media Type</Typography>
        </Grid>
        <Grid size={{ xs: 12, sm: 12, md: 10, lg: 10 }}>
          <FormControl>
            <RadioGroup
              row
              name="mediaType"
              value={formData.mediaType}
              onChange={handleInputChange}
            >
              <FormControlLabel
                value="photos"
                control={
                  <Radio
                    sx={{
                      color: '#3DB80C',
                      '&.Mui-checked': {
                        color: '#3DB80C',
                      },
                    }}
                  />
                }
                label="Photos"
              />
              <FormControlLabel
                value="videos"
                control={
                  <Radio
                    sx={{
                      color: '#3DB80C',
                      '&.Mui-checked': {
                        color: '#3DB80C',
                      },
                    }}
                  />
                }
                label="Videos"
              />
            </RadioGroup>
          </FormControl>
        </Grid>

        {formData.mediaType !== 'videos' && <Grid size={{ xs: 12, sm: 12, md: 2, lg: 2 }}>
          <Typography>{formData.mediaType === 'photos' ? 'Images' : 'Videos'}</Typography>
        </Grid>}
        {formData.mediaType !== 'videos' && <Grid size={{ xs: 12, sm: 12, md: 10, lg: 10 }}>
          <Button
            component="label"
            variant="outlined"
            tabIndex={-1}
            endIcon={<UploadFileIcon />}
            sx={{ borderColor: '#3DB80C', color: '#3DB80C', paddingTop: '7px', paddingBottom: '7px' }}
          >
            Upload
            <VisuallyHiddenInput
              type="file"
              multiple
              accept={formData.mediaType === 'photos' ? 'image/*' : 'video/*'}
              onChange={handleFileChange}
            />
          </Button>
          {errors.files && (
            <Typography color="error" variant="caption">
              {errors.files}
            </Typography>
          )}
        </Grid>}

        {formData.mediaType === 'videos' && <Grid size={{ xs: 12, sm: 12, md: 2, lg: 2 }}>
          <Typography>YouTube Link</Typography>
        </Grid>}
        {formData.mediaType === 'videos' && <Grid size={{ xs: 12, sm: 12, md: 10, lg: 10 }}>
          <TextField
            fullWidth
            size="small"
            error={!!errors.youtubeLink}
            helperText={errors.youtubeLink}
            name="youtubeLink"
            value={formData.youtubeLink}
            onChange={handleInputChange}

            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#3DB80C',
                },
                '&:hover fieldset': {
                  borderColor: '#3DB80C',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#3DB80C',
                },
                borderRadius: '8px',
                width: { md: '600px', lg: '600px', xs: '100%', sm: '600px' },
              },
            }}
          />
        </Grid>}

        {formData.mediaType !== 'videos' && <Grid size={{ xs: 12, sm: 12, md: 2, lg: 2 }}>
          <Typography>Preview</Typography>
        </Grid>}
        {formData.mediaType !== 'videos' && <Grid
          size={{ xs: 12, sm: 12, md: 6, lg: 6 }}
          sx={{
            display: 'flex',
            flexDirection: { md: 'row', sm: 'column', xs: 'column' },
            gap: 3,
          }}
        >
          {previews.length > 0 ? (
            previews.map((preview) => (
              <Card key={preview.id} sx={{ maxWidth: 345, position: 'relative' }}>
                <CardMedia
                  component={formData.mediaType === 'photos' ? 'img' : 'video'}
                  height="194"
                  image={preview.url}
                  alt="Preview"
                  controls={formData.mediaType === 'videos'}
                />
                <CloseIcon
                  sx={{
                    position: 'absolute',
                    top: 8,
                    right: 8,
                    backgroundColor: '#3DB80C',
                    color: 'white',
                    '&:hover': {
                      backgroundColor: '#3DB80C',
                      cursor: 'pointer',
                    },
                  }}
                  onClick={() => handleRemovePreview(preview.id)}
                />
              </Card>
            ))
          ) : (
            <Typography>No previews available</Typography>
          )}
        </Grid>}

        <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>


            <Submit
              variant="contained"
              size="large"
              onClick={handleSubmit}
              disabled={location?.state?.value ? false : !isFormValid || loading}
            >
              {loading ? 'Uploading...' : location?.state?.value ? 'Update' : 'Submit'}
            </Submit>

          </Box>
        </Grid>
      </Grid>


    </Box>
  );
};

export default Addgallery;