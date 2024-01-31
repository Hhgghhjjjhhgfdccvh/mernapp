import React, { useEffect } from 'react';
import swal from 'sweetalert';

function YourComponent() {
  useEffect(() => {
    const showAlert = async () => {
      try {
        await swal({
          title: "OOPS!!",
          text: "Your Cart seems to be empty",
          icon: "warning",
          confirmButtonText: "OK",
        });

        // Additional code to run after the user clicks "OK"
      } catch (error) {
        // Handle any potential errors
        console.error("Error displaying SweetAlert:", error);
      }
    };

    showAlert();
  }, []); // Empty dependency array to run the effect only once

  return (
    <div>
      {/* Your component JSX */}
    </div>
  );
}

export default YourComponent;
