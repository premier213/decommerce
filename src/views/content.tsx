import MailIcon from '@com/icons/mailIcon';

const Content = (): JSX.Element => (
  <section className='md:items-start items-center justify-center flex flex-col mt-28 gap-14 md:w-96 md:ml-24'>
    <MailIcon />
    <h1 className='text-4xl md:text-5xl text-center md:text-left'>
      Request Received
    </h1>
    <p className='md:text-left text-center font-heading w-auto mx-14 md:mx-0'>
      Thanks for reaching out, we will get back to you soon!
    </p>
  </section>
);

export default Content;
