import ContentHeader from "@/components/contentHeader";

const ContentLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ContentHeader />
      <div className="content-container">{children}</div>
    </>
  );
};

export default ContentLayout;
