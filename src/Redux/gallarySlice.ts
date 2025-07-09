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
  loading: boolean;
  error: any;
  message: string | null;
  currentPage: number;
  totalPages: number;
}





// Initial state
const initialState: GalleryState = {
  gallery: [],
  loading: false,
  error: null,
  message: null,
   currentPage: 1,
  totalPages: 1,
};

export const uploadGalleryImage = createAsyncThunk(
  'gallery/create_gallery',
  async ({ formData, token }: { formData: FormData; token: string }, { rejectWithValue, fulfillWithValue }) => {
    try {
      
      console.log("Token:", token);

      for (let pair of formData.entries()) {
        console.log(" FormData:", pair[0], pair[1]);
      }

      const res = await fetch(`${baseURL}/${endpoints.CREATEGALLARY}`, {
        method: 'POST',
        headers: {
       token: token,
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
  async ( { page, limit, year }: { page: number; limit: number; year?: string }, { fulfillWithValue, rejectWithValue }) => {
    
    try {
      const response = await fetch(`${baseURL}/${endpoints.GETGALLARY}?page=${page}&limit=${limit}`);
      const result = await response.json();

      if (response.ok) {
        
        return fulfillWithValue({
  gallery: result.gallery,
  currentPage: result.currentPage,
  totalPages: result.totalPages,
});

      } else {
        return rejectWithValue(result.message || "Failed to fetch gallery");
      }
    } catch (error) {
      return rejectWithValue(error || "Network error");
    }
  }
);

// Delete Single Gallery Item
export const deleteGalleryById = createAsyncThunk(
  'gallery/delete_gallery',
  async ({ id }: { id: string; }, { rejectWithValue }) => {
    try {
      const res = await fetch(`${baseURL}/${endpoints.DELETEGALLERY}/${id}`, {
        method: 'DELETE',
       
      });

      const data = await res.json();

      if (res.ok) {
        return { id, message: data.message };
      } else {
        return rejectWithValue(data.message || 'Delete failed');
      }
    } catch (error) {
      return rejectWithValue('Network error');
    }
  }
);

// Delete All Galleries
export const deleteAllGalleryItems = createAsyncThunk(
  'gallery/delete_galleries',
  async ({ token }: { token: string }, { rejectWithValue }) => {
    try {
      const res = await fetch(`${baseURL}/${endpoints.DELETEALLGALLARY}`,
         {
        method: 'DELETE',
        headers: {
          token: token,
        },
      });

      const data = await res.json();

      if (res.ok) {
        return data.message;
      } else {
        return rejectWithValue(data.message || 'Delete all failed');
      }
    } catch (error) {
      return rejectWithValue('Network error');
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
  state.gallery = action.payload.gallery || [];
  state.currentPage = action.payload.currentPage || 1;
  state.totalPages = action.payload.totalPages || 1;
})
      .addCase(fetchGallery.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Fetch failed";
      })
      

.addCase(deleteGalleryById.fulfilled, (state, action: PayloadAction<any>) => {
  state.gallery = state.gallery.filter((item) => item._id !== action.payload.id);
  state.message = action.payload.message;
})
.addCase(deleteGalleryById.rejected, (state, action) => {
  state.error = action.payload;
})

.addCase(deleteAllGalleryItems.fulfilled, (state, action: PayloadAction<string>) => {
  state.gallery = [];
  state.message = action.payload;
})
.addCase(deleteAllGalleryItems.rejected, (state, action) => {
  state.error = action.payload;
});
  },
});

export const { resetGalleryState } = gallerySlice.actions;
export default gallerySlice.reducer;
