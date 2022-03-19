import React from "react";
import { About, Header, SocialBar, Loader } from "../Components";
const AboutPage = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
  }, []);
  return (
    <>
      {isLoading && <Loader />}
      <Header />
      <SocialBar />
      <About />
    </>
  );
};

export default AboutPage;
