const AppHeader = () => {
  return (
    <header className="bg-background w-full flex items-center justify-between p-5 drop-shadow-sm border-b-1 border-gray-300">
      <div>
        <form action="">
          <input type="search" placeholder="جستجو در فاکتورها، مشتریان، محصولات"/>
        </form>
      </div>
      <div>profile</div>
    </header>
  );
};

export default AppHeader;
