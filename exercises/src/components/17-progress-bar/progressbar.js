import { useState } from 'react';
import { Button, ButtonGroup, ProgressBar } from 'react-bootstrap';

function ProgressBarExample() {


const [derece, setDerece] = useState(0)



const handleClick = (val) => {
    if (val < 0) val = 0;
    if (val > 100) val = 100;
    setDerece(val);
  };

  return (
    <>
    <ButtonGroup className='m-5'>
        <Button variant='info' onClick={()=>handleClick(derece+10)}>
            +
        </Button>
        <Button variant='danger' onClick={()=>handleClick(derece-10)}>
            -
        </Button>
        </ButtonGroup>
      <ProgressBar now={derece} label={`${derece}%`} />;
    </>)
}

export default ProgressBarExample;