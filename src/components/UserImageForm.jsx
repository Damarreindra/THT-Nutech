import React from "react";
import * as RiIcons from "react-icons/ri";

function UserImageForm({ user }) {
  // const [selectedImage, setSelectedImage] = useState(null);

  // const handleImageChange = (e) => {
  //   const file = e.target.files[0];
  //   if (file) {
  //     setSelectedImage(URL.createObjectURL(file)); // Create a preview URL for the selected image
  //   }
  // };

  return (
    <div>
      <div className="flex">
        <div
          className="mx-auto relative flex justify-center items-center cursor-pointer"
          onClick={() => document.getElementById("profileInput").click()}
        >
          <img
            src={
              user.profile_image ===
              "https://minio.nutech-integrasi.com/take-home-test/null"
                ? "../images/Profile Photo.png"
                : user.profile_image
            }
            alt="Profile"
            className="border-2 border-solid rounded-full w-20"
          />
          <span className="absolute right-1 bottom-0 bg-white rounded-full border p-1 border-gray-400">
            <RiIcons.RiEdit2Line />
          </span>

          <input
            type="file"
            accept="image/*"
            id="profileInput"
            className="hidden"
            //   onChange={handleProfileChange}
          />
        </div>
      </div>
    </div>
  );
}

export default UserImageForm;
