// ErrorPage.js
import React, { useState }from 'react';

const ErrorLoginPage = () => {
  const [isLoading, setIsLoading] = useState(false); // State variable for loading state
  
    const handleRefresh = () => {
      window.location.reload();
      setIsLoading(true);
    };

  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-lg"></div>
      <div className='bg-white w-96 p-8 rounded-lg z-10 flex flex-col justify-center items-center'>
        <div className="w-[5rem] flex justify-center items-center h-[5rem] border-[0.2rem] border-customColor2 rounded-full">
          <span className="icon-[quill--warning] text-customColor2 w-[2.5rem] h-[2.5rem] "></span>
        </div>
        <p className='text-center'>
            Your email or password entered, <br />is incorrect please try again
        </p>
        
        <button id="signupButton" onClick={handleRefresh}  className='w-[9rem] h-[36px] active:bg-rose-700 mt-4 text-white rounded-[0.5rem] bg-customColor2 text-center' type="submit">
                  {isLoading ? (
                    <p>  Processing... <span className="icon-[svg-spinners--tadpole] ml-[0.5rem] text-white "></span>{/* Add your SVG animation here */}
                    </p>
                    ):( 'Try again'
                    )}
                </button>
         </div>
    </div>
  );
};

export default ErrorLoginPage;