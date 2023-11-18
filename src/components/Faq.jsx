const Faq = () => {
  return (
    <div className="max-w-7xl mx-5 py-10 lg:mx-auto">
      <h1 className="text-center my-10  text-5xl font-bold">
        Frequently Asked Question (FAQ)
      </h1>
      <div className="collapse collapse-arrow my-3 bg-sky-200">
        <input type="radio" name="my-accordion-2" checked="checked" />
        <div className="collapse-title text-xl font-medium">
        1. How does NexTalent ensure the quality of job opportunities listed on the platform?
        </div>
        <div className="collapse-content">
          <p>At NexTalent, we prioritize the quality of job opportunities to provide a positive experience for both job seekers and employers. Our team employs a rigorous vetting process to review and verify job listings, ensuring they align with industry standards and ethical practices. We actively monitor user feedback and engage with our community to continuously enhance the quality assurance measures, fostering a trustworthy and reliable job marketplace.</p>
        </div>
      </div>
      <div className="collapse collapse-arrow  my-3 bg-sky-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
        2. What sets NexTalent apart from other online job platforms?
        </div>
        <div className="collapse-content">
          <p>NexTalent stands out through its commitment to fostering meaningful connections between talent and employers. Our platform goes beyond traditional job-matching by incorporating innovative features, such as personalized skill assessments, detailed candidate profiles, and interactive employer branding. We prioritize user experience, offering a seamless interface and leveraging cutting-edge technology to create a dynamic and user-centric job marketplace that adapts to the evolving needs of both job seekers and employers.</p>
        </div>
      </div>
      <div className="collapse collapse-arrow  my-3 bg-sky-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
        3. How does NexTalent prioritize diversity and inclusion in its job marketplace?
        </div>
        <div className="collapse-content">
          <p>Diversity and inclusion are core values at NexTalent. We actively promote a diverse and inclusive job marketplace by implementing features that eliminate bias and discrimination. Our platform is designed to provide equal opportunities for all individuals, regardless of their background, ensuring fair and transparent recruitment processes. We collaborate with organizations that share our commitment to diversity, and our ongoing initiatives aim to create an environment where everyone feels valued, respected, and empowered to succeed.</p>
        </div>
      </div>
    </div>
  );
};

export default Faq;
