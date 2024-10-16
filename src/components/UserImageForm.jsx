import React, { useState } from "react";
import * as RiIcons from "react-icons/ri";
import ProfilePictModal from "./ProfilePictModal";
import { useDispatch } from "react-redux";
import { updateProfileImage } from "../utils/Store/UpdateUserSlice";
import Alert from "./Alert";

function UserImageForm({ user }) {
  const [isActive, setIsActive] = useState(false);
  const [profile, setProfile] = useState(null);
  const [profilePreview, setProfilePreview] = useState(null);
  const [message, setMessage] = useState(null);
  const dispatch = useDispatch();

  const handleProfileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      if (file.type !== "image/jpeg" && file.type !== "image/png") {
        alert("Only PNG and JPEG formats are allowed.");
        return;
      }
      
      if (file.size > 100 * 1024) { 
        alert("File size must be less than 100 KB.");
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        setProfile(file);
        setProfilePreview(reader.result);
        setIsActive(true);
      };
      reader.readAsDataURL(file);
    } else {
      setProfile(null);
      setProfilePreview(null);
      setIsActive(false);
    }
  };

  const handleProfileUpdate = () => {
    dispatch(updateProfileImage(profile)).then((result) => {
      if (result.meta.requestStatus === "fulfilled") {
        setIsActive(false);
        setMessage(result.payload?.message);
      } else {
        setMessage(result.payload?.message);
      }
    });
  };

  const handleClose =()=>{
    setIsActive(false)
    setProfilePreview(null)
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
            className="w-16 h-16 rounded-full object-cover border"
          />
          <span className="absolute right-1 bottom-0 bg-white rounded-full border p-1 border-gray-400">
            <RiIcons.RiEdit2Line />
          </span>

          <input
            type="file"
            accept=".png, .jpeg"
            id="profileInput"
            className="hidden"
            onChange={(e) => handleProfileChange(e)}
          />
        </div>
      </div>
      {profilePreview && (
        <ProfilePictModal
          image={profilePreview}
          isActive={isActive}
          onClick={handleProfileUpdate}
          onClose={handleClose}
        />
      )}
      {
        message && (
          <Alert message={message} onClose={()=>setMessage(null)}/>  
        )
      }
    </div>
  );
}

export default UserImageForm;
