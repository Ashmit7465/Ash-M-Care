import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import uploadImage from "../../utils/uploadCloudinary";
import { BASE_URL, token } from "../../../config";
import { toast } from "react-hot-toast";
import HashLoader from "react-spinners/HashLoader";

const Profile = ({ user }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    bloodGroup: "",
    photo: null,
    gender: "",
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setFormData({
      name: user?.name,
      email: user?.email,
      photo: user?.photo,
      gender: user?.gender,
      bloodGroup: user?.bloodGroup,
    });
  }, [user]);

  const handleInputChange = (ev) => {
    setFormData({ ...formData, [ev.target.name]: ev.target.value });
  };

  const handleFileInput = async (ev) => {
    const file = ev.target.files[0];
    const data = await uploadImage(file);
    // console.log(data);
    setSelectedFile(data.url);
    setFormData({ ...formData, photo: data.url });
  };

  const navigate = useNavigate();

  const submitHandler = async (ev) => {
    // console.log(formData);
    ev.preventDefault();
    setLoading(true);

    const filteredFormData = Object.entries(formData).reduce(
      (acc, [key, value]) => {
        console.log(`Key: ${key}, Value: ${value}`);
        console.log(value.length);
        if (value !== null && value !== "" && value.length !== 0) {
          acc[key] = value;
        }
        return acc;
      },
      {}
    );

    try {
      const res = await fetch(`${BASE_URL}/users/${user._id}`, {
        method: "put",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(filteredFormData),
      });

      const { message } = await res.json();

      if (!res.ok) {
        throw new Error(message);
      }
      setLoading(false);
      toast.success(message);
      // alert("Registration Successful");
      navigate("/users/profile/me");
    } catch (error) {
      toast.error(error.message);
      // alert("Error in registration")
      setLoading(false);
    }
  };

  return (
    <div className="mt-10">
      <form action="" onSubmit={submitHandler}>
        <div className="mb-5">
          <label htmlFor="name" className="block mb-2 text-[18px]">
            Full Name:
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Update your full Name"
            value={formData.name}
            onChange={handleInputChange}
            className="border border-solid border-black/100 hover:border-primaryClr w-full py-3 pr-4 rounded-md focus:outline-none  px-4
            text-[16px] leading-7 placeholder:text-headingClr cursor-pointer"
          />
        </div>

        <div className="mb-5">
          <label htmlFor="email" className="block mb-2 text-[18px]">
            Email:
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Update your Email"
            value={formData.email}
            onChange={handleInputChange}
            className="border border-solid border-black/100 hover:border-primaryClr w-full py-3 pr-4 rounded-md focus:outline-none  px-4
            text-[16px] leading-7 placeholder:text-headingClr cursor-pointer"
          />
        </div>

        <div className="mb-5">
          <label htmlFor="bloodGroup" className="block mb-2 text-[18px]">
            Email:
          </label>
          <input
            type="text"
            name="bloodGroup"
            id="bloodGroup"
            placeholder="Update your Blood Group from default blood group value"
            value={formData.bloodGroup}
            onChange={handleInputChange}
            className="border border-solid border-black/100 hover:border-primaryClr w-full py-3 pr-4 rounded-md focus:outline-none  px-4
            text-[16px] leading-7 placeholder:text-headingClr cursor-pointer"
          />
        </div>

        {/* <div className="mb-5">
          <label htmlFor="bloodgroup" className="block mb-2 text-[18px]">
            Blood Group:
          </label>
          <input
            type="text"
            name="bloodgroup"
            id="bloodgroup"
            placeholder="Update your blood group"
            value={formData.bloodGroup}
            onChange={handleInputChange}
            className="border border-solid border-black/100 hover:border-primaryClr w-full py-3 pr-4 rounded-md focus:outline-none  px-4
            text-[16px] leading-7 placeholder:text-headingClr cursor-pointer"
          />
        </div> */}

        <div className="mb-5 flex items-center justify-between">
          <label
            htmlFor="gender"
            className="text-headingClr font-bold text-[16px] leading-7"
          >
            Gender:
            <select
              name="gender"
              id="gender"
              value={formData.gender}
              onChange={handleInputChange}
              className="text-textClr font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none"
            >
              <option value="select">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </label>
        </div>

        <div className="mb-5 flex items-center gap-3">
          {formData.photo && (
            <figure className="w-[60px] h-[60px] rounded-full border-2 border-solid border-primaryClr flex items-center justify-center">
              <img
                src={formData.photo}
                alt="avatar"
                className="rounded-full w-full"
              />
            </figure>
          )}

          <div className="relative w-[130px] h-[50px]">
            <input
              type="file"
              name="photo"
              id="customFile"
              accept=".jpg,.png,.jpeg"
              onChange={handleFileInput}
              className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
            />

            <label
              htmlFor="customFile"
              className="absolute top-0 left-0 w-full h-full flex items-center px-[0.75rem] py-[0.375rem] text-[15px] leading-6 overflow-hidden bg-[#0066ff46] text-headingClr font-semibold rounded-full truncate cursor-pointer"
            >
              {selectedFile ? selectedFile.name : "Update Photo"}
            </label>
          </div>
        </div>

        <div className="mb-5">
          <button
            disabled={loading & true}
            type="submit"
            className="bg-primaryClr btn w-full px-4 py-3 leading-[30px] rounded-xl hover:bg-black/100"
          >
            {loading ? (
              <HashLoader size={35} color="#ffffff" />
            ) : (
              "Update Profile"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Profile;
