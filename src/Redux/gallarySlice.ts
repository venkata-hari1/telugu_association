import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { baseURL, endpoints } from "../Utils/Config";
import { Key } from "react";

// Type definitions
export interface GalleryItem {
  id: Key | null | undefined;
  _id: string;
  title: string;
  year: string;
  mediaType: string;
  images: string;
  youtubelink?: string;
}

interface GalleryState {
  gallery: GalleryItem[];
  single_gallery: {},
  loading: boolean;
  error: any;
  message: string | null;
  currentPage: number;
  totalPages: number;
}





// Initial state
const initialState: GalleryState = {
  gallery: [],
  single_gallery: {},
  loading: false,
  error: null,
  message: null,
  currentPage: 1,
  totalPages: 1,
};

export const uploadGalleryImage = createAsyncThunk(
  'gallery/create_gallery',
  async ({ formData }: { formData: FormData }, { rejectWithValue, fulfillWithValue }) => {
    try {
      const res = await fetch(`${baseURL}/${endpoints.CREATEGALLARY}`, {
        method: 'POST',
        headers: {
          token: localStorage.getItem('token') || '',
        },
        body: formData,
      });

      const data = await res.json();

      if (res.ok) {
        return fulfillWithValue(data);
      } else {
        return rejectWithValue(data.message || 'Upload failed');
      }
    } catch (err) {
      return rejectWithValue('Network error. Please try again.');
    }
  }
);



export const fetchGallery = createAsyncThunk(
  "gallery/all_galleries",
  async ({ year, page }: { year?: number | string; page: number }, { fulfillWithValue, rejectWithValue }) => {

    try {
      const response = await fetch(`${baseURL}/${endpoints.GETGALLARY}?page=${page}&year=${year}`);
      const result = await response.json();

      if (response.ok) {

        return fulfillWithValue(result)

      } else {
        return rejectWithValue(result)
      }
    } catch (error) {
      return rejectWithValue(error || "Network error");
    }
  }
);
//UPDATE GALLARY
export const UpdateGallery = createAsyncThunk(
  'UpdateGallery',
  async ({ formData }: { formData: FormData }, { fulfillWithValue, rejectWithValue, dispatch }) => {
    try {
      const id = localStorage.getItem('galleryid')
      const res = await fetch(`${baseURL}/${endpoints.UPDATEGALLARY}/${id}`, {
        method: 'PATCH',
        headers: {
          token: localStorage.getItem('token') || ''
        },
        body: formData
      });

      const data = await res.json();
      const year = localStorage.getItem('year') || ''
      const page = parseInt(localStorage.getItem('page') || '');
      if (res.ok) {
        dispatch(fetchGallery({
          year, page,
        }))
        return fulfillWithValue(data)
      } else {
        return rejectWithValue(data.message || 'Delete failed');
      }
    } catch (error) {
      return rejectWithValue('Network error');
    }
  }
);
// Delete Single Gallery Item
export const deleteGalleryById = createAsyncThunk(
  'deleteGalleryById',
  async (__, { fulfillWithValue, rejectWithValue, dispatch }) => {
    try {
      const id = localStorage.getItem('galleryid')
      const res = await fetch(`${baseURL}/${endpoints.DELETEGALLARY}/${id}`, {
        method: 'DELETE',
        headers: {
          token: localStorage.getItem('token') || ''
        }
      });

      const data = await res.json();
      const year = localStorage.getItem('year') || ''
      const page = parseInt(localStorage.getItem('page') || '');
      dispatch(fetchGallery({
        year, page,
      }))
      return fulfillWithValue(data)
    } catch (error) {
      return rejectWithValue('Network error');
    }
  }
);

//deletesingleGallery Item
export const deleteSingleGallery = createAsyncThunk(
  'deleteSingleGallery',
  async (payload:{data:{cloudid:string}}, { fulfillWithValue, rejectWithValue, dispatch }) => {
    try {
      const {cloudid}=payload.data
      const id = localStorage.getItem('galleryid')
      const res = await fetch(`${baseURL}/${endpoints.DELECTSINGLEGALLARY}/${id}/${cloudid}`, {
        method: 'DELETE',
        headers: {
          token: localStorage.getItem('token') || ''
        }
      });

      const data = await res.json();
     
     
      return fulfillWithValue(data)
    } catch (error) {
      return rejectWithValue('Network error');
    }
  }
);

// Delete All Galleries
export const deleteAllGalleryItems = createAsyncThunk(
  'gallery/delete_galleries',
  async (__, { fulfillWithValue, rejectWithValue, dispatch }) => {
    try {
      const res = await fetch(`${baseURL}/${endpoints.DELETEALLGALLARY}`,
        {
          method: 'DELETE',
          headers: {
            token: localStorage.getItem('token') || '',
          },
        });

      const data = await res.json();
      const year = localStorage.getItem('year') || ''
      const page = parseInt(localStorage.getItem('page') || '');
      if (res.ok) {
        dispatch(fetchGallery({
          year, page,
        }))
        return fulfillWithValue(data)
      } else {
        return rejectWithValue(data || 'Delete all failed');
      }
    } catch (error) {
      return rejectWithValue('Network error');
    }
  }
);

// Single Gallery
export const SingleGallery = createAsyncThunk(
  'SingleGallery',
  async (__, { fulfillWithValue, rejectWithValue }) => {
    try {
      const id = localStorage.getItem('galleryid')
      const res = await fetch(`${baseURL}/${endpoints.SINGLEGALLARY}/${id}`,
        {
          method: 'GET',
          headers: {
            token: localStorage.getItem('token') || '',
          },
        });

      const data = await res.json();

      if (res.ok) {
        return fulfillWithValue(data);
      } else {
        return rejectWithValue(data);
      }
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const gallerySlice = createSlice({
  name: "gallery",
  initialState,
  reducers: {
    resetGalleryState: (state) => {
      state.message = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Upload
      .addCase(uploadGalleryImage.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(uploadGalleryImage.fulfilled, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.message = action.payload.message || "Uploaded successfully";
      })
      .addCase(uploadGalleryImage.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      // Fetch All
      .addCase(fetchGallery.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchGallery.fulfilled, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.gallery = action.payload
      })
      .addCase(fetchGallery.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Fetch failed";
      })

      .addCase(deleteGalleryById.pending, (state) => {
        state.loading = true

      })
      .addCase(deleteGalleryById.fulfilled, (state) => {
        state.loading = false

      })
      .addCase(deleteGalleryById.rejected, (state) => {
        state.loading = false
      })
      .addCase(deleteAllGalleryItems.pending, (state) => {
        state.loading = true
      })
      .addCase(deleteAllGalleryItems.fulfilled, (state) => {
        state.loading = false
      })
      .addCase(deleteAllGalleryItems.rejected, (state) => {
        state.loading = false
      })
      //singlegallery
      .addCase(SingleGallery.pending, (state) => {
        state.loading = true
      })

      .addCase(SingleGallery.fulfilled, (state, action) => {
        state.single_gallery = action.payload;
        state.loading = false
      })
      .addCase(SingleGallery.rejected, (state) => {
        state.loading = false
      })

      //updategallery
      //singlegallery
      .addCase(UpdateGallery.pending, (state) => {
        state.loading = true
      })

      .addCase(UpdateGallery.fulfilled, (state) => {
        state.loading = false
      })
      .addCase(UpdateGallery.rejected, (state) => {
        state.loading = false
      })
      .addCase(deleteSingleGallery.pending, (state) => {
        state.loading = true
      })

      .addCase(deleteSingleGallery.fulfilled, (state) => {
        state.loading = false
      })
      .addCase(deleteSingleGallery.rejected, (state) => {
        state.loading = false
      })
  },
});

export const { resetGalleryState } = gallerySlice.actions;
export default gallerySlice.reducer;
