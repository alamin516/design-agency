import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";

export const metadata = {
  title: "Design Agency - Service",
  description: "Our Services Are available here.",
};

const Layout = ({ children }) => {
  return (
    <div>
      <Breadcrumb title={"Our Service"} />
      {children}
    </div>
  );
};

export default Layout;
