export function NavBar() {
  return (
    <nav className='fixed w-full bg-main-red p-3 [box-shadow:0_4px_4px_-2px_rgba(0,0,0,0.2)]'>
      <ul
        className='text-md flex justify-center gap-3 children:mr-0 children:w-full children:max-w-[80px] 
                   children:cursor-pointer children:rounded children:p-2 children:transition 
                   children:duration-300 children:ease-in-out xs:text-xl xs:children:max-w-[100px] 
                   sm:justify-end sm:gap-0 sm:children:mr-3'
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
