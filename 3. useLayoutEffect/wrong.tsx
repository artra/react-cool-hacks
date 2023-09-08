import {useEffect, useRef} from 'react';


const Component = () => {
  const buttonRef = useRef();

  // first button will be rendered not focused and will be focused next tick
  useEffect(() => {
    buttonRef.current.focus();
  }, []);

  return <>
    <button ref={buttonRef} />
  </>
}