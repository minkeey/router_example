import useRouter from '../hooks/useRouter';
const Root = () => {
  const { push } = useRouter();
  return (
    <div>
      <button>root</button>
      <button onClick={() => push('/about')}>about</button>
    </div>
  );
};

export default Root;
