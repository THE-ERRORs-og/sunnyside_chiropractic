const fs = require("fs");
const path = require("path");

const components = {
  common: ["Navbar", "Footer", "Button", "Card", "CTABanner", "LocationMap"],
  home: ["Hero", "AboutSection", "ServiceList", "TeamSection", "DoctorCard", "TestimonialList", "TestimonialCard"],
  about: ["MissionVision", "CareProcess", "DoctorProfile", "StaffList", "StaffCard"],
  service: ["ServiceCategories", "ServiceCard", "ServiceDetails", "RelatedServices"],
  testimonials: ["TestimonialList", "TestimonialCard"],
  payment: ["PaymentOptions"],
  blog: ["BlogList", "BlogCard", "BlogPost", "MoreArticles"],
  contact: ["ContactForm"],
};

const routes = [
  { routePath: "page.js", name: "Home", components: ["Hero", "AboutSection", "ServiceList", "TeamSection"] },
  { routePath: "about-us/page.js", name: "AboutUs", components: ["MissionVision", "CareProcess", "DoctorProfile"] },
  { routePath: "testimonials/page.js", name: "Testimonials", components: ["TestimonialList", "TestimonialCard"] },
  { routePath: "service/page.js", name: "Services", components: ["ServiceCategories", "ServiceCard"] },
  { routePath: "service/[id]/page.js", name: "ServiceDetail", components: ["ServiceDetails", "RelatedServices"] },
  { routePath: "payment-methods/page.js", name: "PaymentMethods", components: ["PaymentOptions"] },
  { routePath: "blog/page.js", name: "Blog", components: ["BlogList", "BlogCard"] },
  { routePath: "blog/[id]/page.js", name: "BlogPost", components: ["BlogPost", "MoreArticles"] },
  { routePath: "contact-us/page.js", name: "ContactUs", components: ["ContactForm"] },
];

const appDir = path.join(__dirname, "app", "(root)");
const componentsDir = path.join(__dirname, "components");

const createFiles = (baseDir, structure) => {
  Object.keys(structure).forEach((folder) => {
    const folderPath = path.join(baseDir, folder);
    if (!fs.existsSync(folderPath)) fs.mkdirSync(folderPath, { recursive: true });

    structure[folder].forEach((file) => {
      const filePath = path.join(folderPath, `${file}.js`);
      const boilerplate = `import React from "react";

const ${file} = () => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">${file} Component</h2>
    </div>
  );
};

export default ${file};`;

      if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, boilerplate);
        console.log(`Created: ${filePath}`);
      }
    });
  });
};

const createLayout = (baseDir) => {
  const layoutPath = path.join(baseDir, "layout.js");
  const layoutContent = `import React from "react";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow p-6">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;`;

  if (!fs.existsSync(baseDir)) fs.mkdirSync(baseDir, { recursive: true });
  fs.writeFileSync(layoutPath, layoutContent);
  console.log(`Created: ${layoutPath}`);
};

const createPages = (baseDir, pages) => {
  pages.forEach(({ routePath, name, components }) => {
    const filePath = path.join(baseDir, routePath);
    const dirPath = path.dirname(filePath);
    if (!fs.existsSync(dirPath)) fs.mkdirSync(dirPath, { recursive: true });

    const imports = components.map((comp) => `import ${comp} from "@/components/${name.toLowerCase()}/${comp}";`).join("\n");

    const pageContent = `import React from "react";
${imports}

const ${name} = () => {
  return (
    <>
      <h1 className="text-2xl font-bold">${name} Page</h1>
      ${components.map((comp) => `<${comp} />`).join("\n      ")}
    </>
  );
};

export default ${name};`;

    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, pageContent);
      console.log(`Created: ${filePath}`);
    }
  });
};

createFiles(componentsDir, components);
createLayout(appDir);
createPages(appDir, routes);

console.log("Project structure created successfully!");
