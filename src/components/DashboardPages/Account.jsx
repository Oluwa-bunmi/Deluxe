import { useRef, useState } from "react";
import profile from "../../assets/grace.png";
import {
  accountFields,
  deliveryFields,
  paymentFields,
} from "../../constants/data";

const Account = () => {
  const [isEditing, setIsEditing] = useState(false);
   const [profileImage, setProfileImage] = useState(profile);
   const fileInputRef = useRef(null);
  const [formData, setFormData] = useState({
    username: localStorage.getItem("username") || "",
    email: localStorage.getItem("email") || "",
    location: "Lagos",
    password: localStorage.getItem("password") || "",
    account: "Grace Sandra Idowu",
    bank: "First Global Bank",
    accountNum: "3093763542",
    address: "12A, New Bag Street, Lekki Lagos",
    phone: "+234 8803  456  4656",
  });

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
   const handleImageChange = (e) => {
     const file = e.target.files[0];
     if (file) {
       const reader = new FileReader();
       reader.onload = (event) => {
         setProfileImage(event.target.result);
       };
       reader.readAsDataURL(file);
     }
   };

   const handleEditPictureClick = () => {
     fileInputRef.current.click();
   };
  return (
    <section>
      <div className="container grid lg:grid-cols-2 items-center gap-[43px]">
        <div>
          <h2 className="text-primary font-bold text-xl">My Account Details</h2>
          <div className="flex flex-col sm:flex-row gap-[40px] items-center mt-[40px] mb-[61px]">
            <img
              src={profileImage}
              alt="user"
              className="w-[118px] h-[118px] rounded-full"
            />
            <button
              type="button"
              onClick={handleEditPictureClick}
              disabled={!isEditing}
              className="bg-primary text-base font-medium text-white px-[24px] py-[16px] rounded-lg"
            >
              Edit Display Picture
            </button>
            <input
              type="file"
              ref={fileInputRef}
              style={{ display: "none" }}
              accept="image/*"
              onChange={handleImageChange}
            />
          </div>
          <form>
            {accountFields.map((field) => (
              <div className="flex flex-col mb-[40px]" key={field.name}>
                <label
                  htmlFor={field.name}
                  className="text-xl text-dark font-medium"
                >
                  {field.label}
                </label>
                <input
                  className="border border-gray w-full p-2 rounded-lg outline-none"
                  type={field.type}
                  name={field.name}
                  id={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  readOnly={!isEditing}
                />
              </div>
            ))}
          </form>
        </div>
        <div>
          <p className="text-primary font-bold text-xl mb-[40px]">
            My Payment Details
          </p>
          <form>
            {paymentFields.map((field) => (
              <div className="flex flex-col mb-[40px]" key={field.name}>
                <label
                  htmlFor={field.name}
                  className="text-xl text-dark font-medium"
                >
                  {field.label}
                </label>
                <input
                  className="border border-gray w-full p-2 rounded-lg outline-none"
                  type={field.type}
                  name={field.name}
                  id={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  readOnly={!isEditing}
                />
              </div>
            ))}
            <p className="mb-[40px] text-primary font-bold text-xl">
              My Delievery Details
            </p>
            {deliveryFields.map((field) => (
              <div className="flex flex-col mb-[40px]" key={field.name}>
                <label
                  htmlFor={field.name}
                  className="text-xl text-dark font-medium"
                >
                  {field.label}
                </label>
                <input
                  className="border border-gray w-full p-2 rounded-lg outline-none"
                  type={field.type}
                  name={field.name}
                  id={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  readOnly={!isEditing}
                />
              </div>
            ))}
          </form>
        </div>
      </div>
      <button
        onClick={handleEditClick}
        className="bg-primary w-[200px] h-[50px] text-base font-medium mb-[60px] mt-[80px] text-white rounded-lg block mx-auto"
      >
        {isEditing ? "Save Details" : "Edit Details"}
      </button>
    </section>
  );
};

export default Account;
