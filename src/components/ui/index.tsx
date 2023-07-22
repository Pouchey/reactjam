interface Props {
  children: React.ReactNode;
}

const UIWrapper = ({ children }: Props) => {
  return (
    <div>
      <div>Help ?</div>
      {children}
    </div>
  );
};

export default UIWrapper;
