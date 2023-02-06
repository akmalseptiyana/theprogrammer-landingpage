export default function Footer() {
  return (
    <footer className="bg-[#12181d] border-b-4 border-primary mt-[6.5rem] pt-20 pb-12">
      <section className="container">
        <div className="grid grid-cols-2 gap-x-[5.3281rem] gap-y-20 md:grid-cols-3 lg:grid-cols-5">
          {footerLinks.map(({ heading, links }) => {
            return (
              <div key={heading}>
                <h4 className="font-sans font-medium text-[1.375rem] text-white">
                  {heading}
                </h4>
                <ul className="mt-6 space-y-[0.875rem]">
                  {links.map((link) => (
                    <li key={`${heading}${link}`}>
                      <a href="#" className="text-white/[0.73]">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      <p className="text-white/80 text-[0.9375rem] text-center mt-16">
        2022 All Rights Reserved © Circle
      </p>
    </footer>
  );
}

type FooterLinkItems = {
  heading: string;
  links: string[];
};

const footerLinks: FooterLinkItems[] = [
  {
    heading: "Company",
    links: ["How it Works", "Features", "Docs", "Blog", "About"],
  },
  {
    heading: "Resource",
    links: ["Docs", "Forum", "Careers", "Templates", "Feedback"],
  },
  {
    heading: "Legal",
    links: [
      "Terms of Service",
      "Privacy Policy",
      "Guidelines",
      "Fair Use Policy",
      "Feedback",
    ],
  },
  {
    heading: "Support",
    links: ["FAQs", "Call Center", "Maintance", "Status"],
  },
  {
    heading: "Platform",
    links: ["Team", "Security", "Roadmap", "Features", "Enterprise"],
  },
];
