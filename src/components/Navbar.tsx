export function NavBar() {
  return (
    <nav className='fixed w-full bg-main-red p-3'>
      <ul
        className='flex justify-end text-xl
                   children:mr-3 children:w-[100px] children:cursor-pointer children:rounded children:p-2
                   children:text-center children:text-main-white children:transition children:duration-300 
                   children:ease-in-out'
      >
        <li className='hover:bg-main-blue'>
          <a href='#about'>About</a>
        </li>
        <li className='hover:bg-main-blue'>
          <a href='#project'>Project</a>
        </li>
        <li className='hover:bg-main-blue'>
          <a href='#contact'>Contact</a>
        </li>
      </ul>
    </nav>
  );
}
