import ServiceItem from "./ServiceItem";
import { MdDesignServices } from "react-icons/md";
import { IoLogoWebComponent } from "react-icons/io5";
import { TbMessageLanguage } from "react-icons/tb";

import "../index.css";

const Services = (props) => {
  const services = [
    {
      logo: MdDesignServices,
      title: "UI/UX Design",
      description:
        "I craft seamless digital experiences through UI/UX design, transforming concepts into visually appealing and user-friendly interfaces that leave a lasting impression on your audience.",
    },
    {
      logo: IoLogoWebComponent,
      title: "Web Development",
      description:
        "I specialize in web development, bringing your digital vision to life with clean, efficient code with user-friendly interfaces. From front-end design to minor back-end functionality, I create websites that not only look great but also deliver a smooth user experience.",
    },
    {
      logo: TbMessageLanguage,
      title: "Natural Language Processing",
      description:
        "I excel in Natural Language Processing (NLP), making computers understand and interact with human language effortlessly and engage with projects in similar fields. Let me bring a linguistic touch to your projects!",
    },
  ];
  return (
    <div className="services">
      <h2 className="services-title">Services I am providing</h2>
      <hr className="services-hr" />
      <div className="services-container">
        {services.map((service) => (
          <ServiceItem
            key={Math.random()}
            logo={service.logo}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
