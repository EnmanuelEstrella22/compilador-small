import React, { useState } from 'react';
import ConsolaSintactica from '../components/ConsolaSintactica';
import Form from '../components/Form';

const AnalizadorSintactico = () => {
  const [data, setData] = useState('');

  return (
    <>
    {console.log(data)}
      <Form setData={setData} />
      <ConsolaSintactica codigo={data} />
    </>
  );
};

export default AnalizadorSintactico;
