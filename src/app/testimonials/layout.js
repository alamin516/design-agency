import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";

export const metadata = {
  title: "Design Agency - Testimonials",
  description: "What are our customers thinking about our agency? Here are their testimonials.",
};

const Layout = ({ children }) => {
  return (
    <div>
      <Breadcrumb title={"Testimonials"} />
      {children}
    </div>
  );
};

export default Layout;
