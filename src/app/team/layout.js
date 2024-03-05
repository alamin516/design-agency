import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";

export const metadata = {
  title: "Design Agency - Team",
  description: "Our Team Members",
};

const Layout = ({ children }) => {
  return (
    <div>
      <Breadcrumb title={"Team"} />
      {children}
    </div>
  );
};

export default Layout;
