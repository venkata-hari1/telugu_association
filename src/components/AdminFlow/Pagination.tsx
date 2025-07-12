import Stack from '@mui/material/Stack'; 
import { CustomPagination } from '../../adminstyles/MembershiptableStyles';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../Redux/Store';
import { useEffect, useState } from 'react';
import { pagination } from '../../Redux/gallarySlice';

const Paginationcomponent = () => {
  const [totalPages, setTotalPages] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1); // ✅ new

  const { gallery }: any = useSelector((state: RootState) => state.gallery);
  const dispatch = useDispatch<AppDispatch>();
  const location = useLocation();
  const pathname = location.pathname;
  useEffect(() => {
    const storedPage = Number(localStorage.getItem('page')) || 1;
    setCurrentPage(storedPage);

    switch (pathname) {
      case '/admin/admingallery/photogallery': {
        setTotalPages(gallery?.totalPages ?? 1);
        break;
      }
      default: {
        setTotalPages(10);
        setCurrentPage(1)
        localStorage.removeItem('page')
        break;
      }
    }
  }, [pathname, gallery?.totalPages]);

  const handleChange = (event: React.ChangeEvent<unknown>, page: number) => {
    localStorage.setItem('page', page.toString());
    setCurrentPage(page);
    dispatch(pagination(page));
  };

  return (
    <Stack spacing={2} alignItems="center" sx={{ padding: '20px' }}>
      <CustomPagination
        count={totalPages ?? 10}
        page={currentPage} 
        shape="rounded"
        onChange={handleChange}
      />
    </Stack>
  );
};

export default Paginationcomponent;
