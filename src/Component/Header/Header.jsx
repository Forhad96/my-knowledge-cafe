import Profile from '../../assets/images/profile.png'
const Header = () => {
  return (
    <header className='container mx-auto flex justify-between items-center py-3 border-b-2'>
      <h1 className="text-4xl">Knowledge Cafe</h1>
      <img src={Profile} alt="" />
    </header>
  );
};

export default Header;
