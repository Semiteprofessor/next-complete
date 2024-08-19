import "./styles.css";

const Layout = ({
  modal,
  children,
}: {
  modal: React.ReactNode;
  children: React.ReactNode;
}) => {
  return (
    <>
      {modal}
      {children}
    </>
  );
};

export default Layout;
