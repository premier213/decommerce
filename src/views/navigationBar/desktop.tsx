import Button from '@com/button';
import Image from 'next/image';
import { menu } from 'src/config/constants/menu';

const DesktopNavigationBar = (): JSX.Element => (
  <section className='hidden md:flex mt-8'>
    <div className='flex justify-between  w-full'>
      <div className='relative w-40 h-8'>
        <Image src='/images/Logo.png' layout='fill' alt='deCommerce' />
      </div>

      <div>
        <ul className='relative flex'>
          {menu?.map(item => (
            <div className='relative' key={item.id}>
              <li className='text-center px-4'>{item.title}</li>
            </div>
          ))}
          <div className='flex justify-center'>
            <div>
              <Button
                className='w-44 text-sm mx-4 -mt-2'
                label='Read Whitepaper'
                color='sky'
                variant='outlined'
              />
            </div>
            <div>
              <Button
                className='w-44 text-sm mx-4 -mt-2'
                label='Request Invite'
                color='pink'
              />
            </div>
          </div>
        </ul>
      </div>
    </div>
  </section>
);

export default DesktopNavigationBar;
