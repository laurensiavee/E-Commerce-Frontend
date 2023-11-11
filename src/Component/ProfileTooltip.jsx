import "./tooltip.css";

const ProfileTooltip = () => {
  return (
    <>
      <div className="p-5 text-vnv-green-dark bg-vnv-light border-vnv-light-grey border-2"
      style={{ borderRadius: "5px"}}>
        {/* {text} */}
        <div className="text-vnv-black"><b>FirstName LastName</b></div>
        <div className="text-vnv-dark-grey">View Profile</div>

        <div>
            <button
            className="border-2 my-2 mx-5 p-3 w-40% rounded border-vnv-green-primary text-vnv-green-primary hover:text-vnv-green-dark hover:bg-vnv-green-dark py-2 px-5"
            >
            setting
            </button>

            <button
            className="border-2 my-2 mx-5 p-3 w-40% rounded border-vnv-green-primary text-vnv-green-primary hover:text-vnv-green-dark hover:bg-vnv-green-dark py-2 px-5"
            >
            logout
            </button>
        </div>

        <div>
            <button
            className="border-2 my-2 mx-5 p-3 rounded bg-vnv-green-primary text-vnv-green-dark hover:text-vnv-light hover:bg-vnv-green-dark py-2 px-5"
            >
            View Transaction
            </button>
        </div>
      </div>
    </>
  );
};

export default ProfileTooltip;