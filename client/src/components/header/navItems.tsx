const NavItems = () => {
  return (
    <>
      <a href="/Hiscores">
        <div className="border rounded-md py-1 px-3 cursor-pointer hover:bg-gray-100 lg:mr-8">
          Get HiScores
        </div>
      </a>
      <a href="/Leagues">
        <div className="border rounded-md py-1 px-3 cursor-pointer hover:bg-gray-100">
          Leagues HiScores
        </div>
      </a>
    </>
  );
};

export default NavItems;
