const MissionVision = () => {
  return (
    <div className="header-container grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Mission Card */}
      <Card
        title="Our Mission"
        description="To provide compassionate, patient-centered chiropractic care that promotes natural healing, restores mobility, and enhances overall wellness."
      />

      {/* Vision Card */}
      <Card
        title="Our Vision"
        description="To be the leading chiropractic wellness center, empowering individuals and families to achieve healthier, more active, and fulfilling lives."
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
