import { toast , Slide } from 'react-toastify';

const showToast = ({ success = '', error = '' }) => {
  if (success) {
    toast.success(success, {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Slide,
        });
        
  }
  if (error) {
    toast.error(error, {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Slide,
        });
        
  }
};

export default showToast;
