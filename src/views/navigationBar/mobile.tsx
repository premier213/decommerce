import MenuIcon from '@com/icons/menuIcon';
import Image from 'next/image';
import { useState } from 'react';
import { menu } from 'src/config/constants/menu';
import styles from '@style/menu.module.scss';
import Button from '@com/button';
import PaperIcon from '@com/icons/paperIcon';
import MessageIcon from '@com/icons/messageIcon';

const MobileNavigationBar = (): JSX.Element => {
  const [toggle, setToggle] = useState(false);

  const Menu = () => (
    <div className='absolute w-full transition-all'>
      <div className='mx-4 bg-main px-5'>
        <hr className='border-t-[0.5px] border-gray-500' />
        <div className='flex flex-col items-center gap-4'>
          <ul className='relative'>
            {menu?.map(item => (
              <div className='relative' key={item.id}>
                <li
                  className={`${
                    item.id === 1 ? styles.selected : ''
                  } text-center my-8`}
                >
                  {item.title}
                </li>
              </div>
            ))}
          </ul>
          <div className='flex flex-col justify-center'>
            <div className='my-4'>
              <Button
                className='w-64'
                label='Read Whitepaper'
                icon={<PaperIcon />}
                color='sky'
                variant='outlined'
              />
            </div>
            <div className='my-4'>
              <Button
                className='w-64'
                label='Request Invite'
                icon={<MessageIcon />}
                color='pink'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section className='md:hidden'>
      <div className='bg-main w-auto mt-14 mx-4 h-[60px] rounded-lg flex justify-between px-5 items-center'>
        <div className='relative w-32 h-8'>
          <Image src='/images/Logo.png' layout='fill' alt='deCommerce' />
        </div>
        <div>
          <button onClick={() => setToggle(!toggle)}>
            <MenuIcon />
          </button>
        </div>
      </div>
      {toggle && (
        <div className='relative'>
          <Menu />
        </div>
      )}
    </section>
  );
};

export default MobileNavigationBar;
