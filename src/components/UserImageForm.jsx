import React, { useState } from "react";
import * as RiIcons from "react-icons/ri";
import ProfilePictModal from "./ProfilePictModal";
import { useDispatch } from "react-redux";
import { updateProfileImage } from "../utils/Store/UpdateUserSlice";

function UserImageForm({ user }) {
  const [isActive, setIsActive] = useState(false);
  const [profile, setProfile] = useState(null);
  const [profilePreview, setProfilePreview] = useState(null);
  const [message, setMessage] = useState(null)
  const dispatch = useDispatch()


  const handleProfileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfile(file);
        setProfilePreview(reader.result);
        setIsActive(true);
      };
      reader.readAsDataURL(file);
    }
  };


 

  const handleProfileUpdate=()=>{
    
    dispatch(updateProfileImage(profile)).then((result) => {
      if (result.meta.requestStatus === "fulfilled") {
        setIsActive(false)
        setMessage(result.payload?.message);
        
      } else {
        setMessage(result.payload?.message);
      }
    });
  }

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
            onChange={(e) => handleProfileChange(e)}
            // onClick={()=>setIsActive(!isActive)}
          />
        </div>
      </div>
      {profilePreview && (
        <ProfilePictModal image={profilePreview} isActive={isActive} onClick={handleProfileUpdate} onClose={()=>setIsActive(false)}/>
      )}
    </div>
  );
}

export default UserImageForm;
