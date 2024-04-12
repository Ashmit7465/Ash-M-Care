import React, { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";

const Profile = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    bio: "",
    gender: "",
    specialization: "",
    consultationFee: 0,
    qualification: [
      { startingDate: "", endingDate: "", degree: "", university: "" }, //index 0
    ],
    experiences: [
      { startingDate: "", endingDate: "", position: "", hospital: "" },
    ],
    timeSlots: [{ day: "", startingTime: "", endingTime: "" }],
    about: "",
    photo: null,
  });
  console.log(formData);
  const handleInputChange = (ev) => {
    setFormData({ ...formData, [ev.target.name]: ev.target.value });
  };

  // const handleInputChange = (ev) => {
  //   if(ev.target.name.includes("."))
  //   {
  //     // If the name contains a dot, it indicates a nested field
  //     const [outerKey, innerKey] = ev.target.name.split(".");
  //     setFormData((prevFormData) => ({
  //       ...prevFormData,
  //       [outerKey]: prevFormData[outerKey].map((item, index) =>
  //         index === 0 ? { ...item, [innerKey]: ev.target.value } : item
  //       ),
  //     }));
  //   } else {
  //     // For non-nested fields
  //     setFormData({ ...formData, [ev.target.name]: ev.target.value });
  //   }
  // }

  const handleFileInput = (ev) => {};

  const updateProfileHandler = async (ev) => {
    ev.preventDefault();
  };

  const addItem = (key, item) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [key]: [...prevFormData[key], item],
    }));
  };

  const handleReusableInputChange = (key, index, event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => {
      const updateItems = [...prevFormData[key]];

      updateItems[index][name] = value;

      return {
        ...prevFormData,
        [key]: updateItems,
      };
    });
  };

  const addQualification = (ev) => {
    ev.preventDefault();

    addItem("qualification", {
      startingDate: "",
      endingDate: "",
      degree: "",
      university: "",
    });
  };

  const deleteQualification = (ev) => {};

  const handleQualificationChange = (event, index) => {
    handleReusableInputChange("qualification", index, event);
  };

  return (
    <div>
      <h2 className="text-headingClr font-bold text-[24px] leading-9 mb-10">
        Profile Information
      </h2>

      <form action="">
        <div className="mb-5">
          <p className="form_label">Name*</p>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Full Name"
            className="form_input"
          />
        </div>
        <div className="mb-5">
          <p className="form_label">Email*</p>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email Id"
            className="form_input"
            aria-readonly
            readOnly
            disabled="true"
          />
        </div>
        <div className="mb-5">
          <p className="form_label">Phone*</p>
          <input
            type="number"
            name="phone"
            id="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="Phone Number"
            className="form_input"
          />
        </div>
        <div className="mb-5">
          <p className="form_label">Bio*</p>
          <input
            type="text"
            name="bio"
            id="bio"
            value={formData.bio}
            onChange={handleInputChange}
            placeholder="Bio"
            className="form_input"
          />
        </div>

        <div className="mb-5">
          <div className="grid grid-cols-3 gap-5 mb-[30px] ">
            <div className="">
              <p className="form_label">Gender*</p>
              <select
                name="gender"
                id="gender"
                value={formData.gender}
                onChange={handleInputChange}
                className="form_input py-3.5"
              >
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="">
              <p className="form_label">Specialization*</p>
              <select
                name="specialization"
                id="specialization"
                value={formData.specialization}
                onChange={handleInputChange}
                className="form_input py-3.5"
              >
                <option value="">Select</option>
                <option value="cancer">Cancer Specialist</option>
                <option value="surgeon"> General Surgeon</option>
                <option value="physician">General Physician</option>
                <option value="neurologist">Neurologist</option>
                <option value="dermatologist">Dermatologist</option>
                <option value="cardiologist">Cardiologist</option>
                <option value="burns">Burns Specialist</option>
                <option value="gynecologist">Gynecologist</option>
                <option value="psychiatrist">Psychiatrist</option>
              </select>
            </div>

            <div className="">
              <p className="form_label">Consultation Fee*</p>
              <input
                type="number"
                name="consultationFee"
                placeholder="0"
                value={formData.consultationFee}
                onChange={handleInputChange}
                className="form_input"
              />
            </div>
          </div>
        </div>
        <div className="mb-5">
          <p className="form_label">Qualifications*</p>
          {formData.qualification?.map((item, index) => (
            <div key={index}>
              <div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <p className="form_label">Starting Date*</p>
                    <input
                      type="date"
                      name="startingDate"
                      value={item.startingDate}
                      onChange={(e) => handleQualificationChange(e, index)}
                      className="form_input"
                    />
                  </div>
                  <div>
                    <p className="form_label">Ending Date*</p>
                    <input
                      type="date"
                      name="endingDate"
                      value={item.endingDate}
                      className="form_input"
                      onChange={(e) => handleQualificationChange(e, index)}
                    />
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div>
                    <p className="form_label">Degree*</p>
                    <input
                      type="text"
                      name="degree"
                      value={item.degree}
                      className="form_input"
                      onChange={(e) => handleQualificationChange(e, index)}
                    />
                  </div>
                  <div>
                    <p className="form_label">University*</p>
                    <input
                      type="text"
                      name="university"
                      value={item.university}
                      className="form_input"
                      onChange={(e) => handleQualificationChange(e, index)}
                    />
                  </div>
                </div>

                <button className="bg-red-600 p-2 rounded-full text-white text-[18px] mt-2 mb-[30px]">
                  <AiOutlineDelete />
                </button>
              </div>
            </div>
          ))}

          <button
            onClick={addQualification}
            className="bg-[#000] py-3 px-6 rounded text-white h-fit cursor-pointer"
          >
            Add Qualification
          </button>
        </div>

        <div className="mb-5">
          <p className="form_label">Experiences*</p>
          {formData.experiences?.map((item, index) => (
            <div key={index}>
              <div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <p className="form_label">Starting Date*</p>
                    <input
                      type="date"
                      name="startingDate"
                      value={item.startingDate}
                      className="form_input"
                    />
                  </div>
                  <div>
                    <p className="form_label">Ending Date*</p>
                    <input
                      type="date"
                      name="endingDate"
                      value={item.endingDate}
                      className="form_input"
                    />
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div>
                    <p className="form_label">Position*</p>
                    <input
                      type="text"
                      name="position"
                      value={item.position}
                      className="form_input"
                    />
                  </div>
                  <div>
                    <p className="form_label">Hospital*</p>
                    <input
                      type="text"
                      name="hospital"
                      value={item.hospital}
                      className="form_input"
                    />
                  </div>
                </div>

                <button className="bg-red-600 p-2 rounded-full text-white text-[18px] mt-2 mb-[30px]">
                  <AiOutlineDelete />
                </button>
              </div>
            </div>
          ))}

          <button className="bg-[#000] py-3 px-6 rounded text-white h-fit cursor-pointer">
            Add Experience
          </button>
        </div>

        <div className="mb-5">
          <p className="form_label">Time Slots*</p>
          {formData.timeSlots?.map((item, index) => (
            <div key={index}>
              <div>
                <div className="grid grid-cols-2 md:grid-cols-4 mb-[30px] gap-5">
                  <div>
                    <p className="form_label">Day*</p>
                    <select
                      name="day"
                      id="day"
                      value={item.day}
                      className="form_input py-3.5"
                    >
                      <option value="">Select</option>
                      <option value="monday">Monday</option>
                      <option value="tuesday">Tuesday</option>
                      <option value="wednesday">Wednesday</option>
                      <option value="thursday">Thursday</option>
                      <option value="friday">Friday</option>
                      <option value="saturday">Saturday</option>
                      <option value="sunday">Sunday</option>
                    </select>
                  </div>
                  <div>
                    <p className="form_label">Starting Time*</p>
                    <input
                      type="time"
                      name="startingTime"
                      value={item.startingTime}
                      className="form_input"
                    />
                  </div>
                  <div>
                    <p className="form_label">Ending Time*</p>
                    <input
                      type="time"
                      name="endingTime"
                      value={item.endingTime}
                      className="form_input"
                    />
                  </div>
                  <div className="flex items-center">
                    <button className="bg-red-600 p-2 rounded-full text-white text-[18px] mt-6">
                      <AiOutlineDelete />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <button className="bg-[#000] py-3 px-6 rounded text-white h-fit cursor-pointer">
            Add Time Slot
          </button>
        </div>

        <div className="mb-5">
          <p className="form_label">About*</p>
          <textarea
            name="about"
            id="about"
            rows={5}
            value={formData.about}
            onChange={handleInputChange}
            placeholder="Write about yourself..."
            className="form_input"
          ></textarea>
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
              className="absolute top-0 left-0 w-full h-full flex items-center px-[0.75rem] py-[0.375rem] text-[15px] leading-6 overflow-hidden bg-[#0066ff46] text-headingClr font-semibold rounded-lg truncate cursor-pointer"
            >
              Upload Photo
            </label>
          </div>
        </div>

        <div className="mt-7">
          <button
            type="submit"
            onClick={updateProfileHandler}
            className="bg-primaryClr text-white text-[18px] leading-[30px] w-full py-3 px-4 rounded-lg"
          >
            Update Profile
          </button>
        </div>
      </form>
    </div>
  );
};

export default Profile;
