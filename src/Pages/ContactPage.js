import React from "react";
import { Contact, Header, SocialBar, Loader } from "../Components";

const ContactPage = () => {
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
      <Contact />
    </>
  );
};

export default ContactPage;
