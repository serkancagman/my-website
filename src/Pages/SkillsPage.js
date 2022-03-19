import React from "react";
import { Header, SocialBar, Loader, Skills } from "../Components";

const SkillsPage = () => {
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
      <Skills />
    </>
  );
};

export default SkillsPage;
