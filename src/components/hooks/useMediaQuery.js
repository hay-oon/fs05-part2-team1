import { useLayoutEffect, useState } from "react";

const useMediaQuery = () => {
  const [media, setMedia] = useState(() => {
    const width = window.innerWidth;
    if (width > 1000) return "pc";
    if (width > 644) return "tablet";
    return "mobile";
  });

  useLayoutEffect(() => {
    const updateMedia = () => {
      const width = window.innerWidth;
      if (width > 1000) {
        setMedia("pc");
      } else if (width > 644) {
        setMedia("tablet");
      } else {
        setMedia("mobile");
      }
    };

    updateMedia();

    window.addEventListener("resize", updateMedia);

    return () => {
      window.removeEventListener("resize", updateMedia);
    };
  }, []);

  return media;
};

export default useMediaQuery;
