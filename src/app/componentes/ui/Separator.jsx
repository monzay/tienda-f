const Separator = ({ className, ...props }) => (
    <div
      className={`shrink-0 bg-border h-[1px] w-full ${className}`}
      {...props}
    />
  );

  export default Separator