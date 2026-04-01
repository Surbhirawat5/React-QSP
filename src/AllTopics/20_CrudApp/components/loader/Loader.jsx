import style from './Loader.module.css'

const Loader = () => {
  return (
    <section className='h-screen w-full grid place-items-center'>
        <div className={style.Loader}></div>
    </section>
  );
};

export default Loader;