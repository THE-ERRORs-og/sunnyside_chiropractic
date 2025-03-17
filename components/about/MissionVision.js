const MissionVision = () => {
  return (
    <div className="header-container grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Mission Card */}
      <Card
        title="Our Mission"
        description="Lorem ipsum odor amet, consectetuer adipiscing elit. Commodo gravida quam hac risus pharetra elementum malesuada finibus? Varius augue egestas tempor consectetur montes morbi senectus."
      />

      {/* Vision Card */}
      <Card
        title="Our Vision"
        description="Lorem ipsum odor amet, consectetuer adipiscing elit. Commodo gravida quam hac risus pharetra elementum malesuada finibus? Varius augue egestas tempor consectetur montes morbi senectus."
      />
    </div>
  );
};

export default MissionVision;

const Card = ({ title, description }) => {
  return (
    <div className="p-6 border rounded-xl shadow-[4px_2px_0px_2px] shadow-primary border-primary bg-white flex flex-col h-full">
      <h2 className="sub-heading text-primary mb-4">{title}</h2>
      <h6 className="text-justify">{description}</h6>
    </div>
  );
};
