import React from 'react';
import useRouter from '../hooks/useRouter';
const About = () => {
  const { push } = useRouter();
  return (
    <div>
      <div>About</div>
      <button onClick={() => push('/')}>go main</button>
    </div>
  );
};

export default About;
