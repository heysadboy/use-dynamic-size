import { useEffect, useState } from 'react';

const useDynamicSize = () => {
  if (typeof window === 'undefined') {
    global.window = {}
  }
  
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight)

  useEffect(() => {
    const onDeviceChange = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };
    window.addEventListener('resize', onDeviceChange);
    return () => {
      window.removeEventListener('resize', onDeviceChange);
    }
  }, []);

  return [width, height];
};

export default useDynamicSize;