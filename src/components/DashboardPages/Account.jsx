import profile from "../../assets/grace.png";
const Account = () => {
  return (
    <section className="">
      <div className="container grid lg:grid-cols-2 items-center gap-[43px]">
        <div>
          <h2 className="text-primary font-bold text-xl">My Account Details</h2>
          <div className="flex flex-col sm:flex-row gap-[40px] items-center my-[60px]">
            <img src={profile} alt="user" className="w-[118px] h-[118px]" />
            <button className="bg-primary text-base font-medium text-white px-[24px] py-[16px] rounded-lg">
              Edit Display Picture
            </button>
          </div>
          <form>
            <div className="flex flex-col mb-[40px]">
              <label
                htmlFor="username"
                className="text-xl text-dark font-medium"
              >
                Username
              </label>
              <input
                type="text"
                name="username"
                id="username"
                value={localStorage.getItem("username")}
                className="border border-gray w-full p-2 rounded-lg outline-none"
              />
            </div>
            <div className="flex flex-col mb-[40px]">
              <label htmlFor="email" className="text-xl text-dark font-medium">
                Email
              </label>
              <input
                type="text"
                name="email"
                id="email"
                value="jayjay@yop.com"
                className="border border-gray w-full p-2 rounded-lg outline-none"
              />
            </div>
            <div className="flex flex-col mb-[40px]">
              <label
                htmlFor="location"
                className="text-xl text-dark font-medium"
              >
                Location
              </label>
              <input
                type="text"
                name="location"
                id="location"
                value="Lagos"
                className="border border-gray w-full p-2 rounded-lg outline-none"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="password"
                className="text-xl text-dark font-medium"
              >
                Password
              </label>
              <input
                type="text"
                name="password"
                id="password"
                value="Jayjay123"
                className="border border-gray w-full p-2 rounded-lg outline-none"
              />
            </div>
          </form>
        </div>
        <div>
          <p className="text-primary font-bold text-xl mb-[40px]">
            My Payment Details
          </p>
          <form>
            <div className="flex flex-col mb-[40px]">
              <label
                htmlFor="account"
                className="text-xl text-dark font-medium"
              >
                Account Name
              </label>
              <input
                type="text"
                name="account"
                id="account"
                value="Grace Sandra Phillips "
                className="border border-gray w-full p-2 rounded-lg outline-none"
              />
            </div>
            <div className="flex flex-col mb-[40px]">
              <label htmlFor="bank" className="text-xl text-dark font-medium">
                Bank Name
              </label>
              <input
                type="text"
                name="bank"
                id="bank"
                value="First Global Bank"
                className="border border-gray w-full p-2 rounded-lg outline-none"
              />
            </div>
            <div className="flex flex-col mb-[40px]">
              <label
                htmlFor="account_num"
                className="text-xl text-dark font-medium"
              >
                Account Number
              </label>
              <input
                type="text"
                name="account_num"
                id="account_num"
                value="3093763542"
                className="border border-gray w-full p-2 rounded-lg outline-none"
              />
            </div>
            <p className="mb-[40px] text-primary font-bold text-xl">
              {" "}
              My Delievery Details
            </p>
            <div className="flex flex-col mb-[40px]">
              <label
                htmlFor="address"
                className="text-xl text-dark font-medium"
              >
                Full Address
              </label>
              <input
                type="text"
                name="address"
                id="address"
                value="12A, New Bag Street, Lekki Lagos "
                className="border border-gray w-full p-2 rounded-lg outline-none"
              />
            </div>
            <div className="flex flex-col mb-[40px]">
              <label htmlFor="phone" className="text-xl text-dark font-medium">
                Phone Number
              </label>
              <input
                type="text"
                name="phone"
                id="phone"
                value="+234 8803  456  4656"
                className="border border-gray w-full p-2 rounded-lg outline-none"
              />
            </div>
          </form>
        </div>
      </div>
      <button className="bg-primary w-[200px] h-[50px] text-base font-medium mb-[60px] mt-[80px] text-white rounded-lg block mx-auto">Edit Details</button>
    </section>
  );
};

export default Account;
