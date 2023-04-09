export const components: {
  [key: string]: any;
} = {
  p: (props: any) => (
    <p
      style={{ color: "red", lineHeight: "1.75rem", fontSize: "15px" }}
      {...props}
    />
  ),
};
