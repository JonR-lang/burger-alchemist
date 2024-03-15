import BlogFlex from "../components/BlogFlex";

const ContentLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className='flex flex-col md:flex-row relative gap-6 mt-4'>
      <div className='flex-[2] flex flex-col gap-3'>{children}</div>
      <BlogFlex />
    </section>
  );
};

export default ContentLayout;
