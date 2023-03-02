import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} />
          <p className="my-5">
          Some may call it a tagline, but for us, it’s a way of life. It’s our Monday-thru-every-day mantra. An unfiltered philosophy that drives us to create a community and a gym for all.
          </p>
          <p>© Evogym All Rights Reserved.</p>
        </div>
        {/* <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Massa orci senectus</p>
          <p className="my-5">Et gravida id et etiam</p>
          <p>Ullamcorper vivamus</p>
        </div> */}
        <div className="mt-16 basis-2/4 md:mt-0 ">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">Catholic Plaza,West High Court Road, Bangalore-560012</p>
          <p>(9496782599)</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;