import React from "react";
import { Header, SocialBar, Projects, Loader } from "../Components";

const ProjectsPage = () => {
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
      <Projects />
    </>
  );
};

export default ProjectsPage;
