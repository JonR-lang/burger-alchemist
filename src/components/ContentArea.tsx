import ContentLayout from "../layouts/ContentLayout";
import Featured from "./Featured";
import Popular from "./Popular";

const ContentArea = () => {
  return (
    <ContentLayout>
      <Featured />
      <Popular />
    </ContentLayout>
  );
};

export default ContentArea;
