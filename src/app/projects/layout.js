import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";

export const metadata = {
    title: "Design Agency - Projects",
    description: "Projects Are available here.",
  };

const Layout = ({ children }) => {
  return (
    <div>
      <Breadcrumb title={"All Project"} />
      {children}
    </div>
  );
};

export default Layout;
