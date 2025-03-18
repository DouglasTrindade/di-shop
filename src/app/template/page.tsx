export interface PageProps {
  children: React.ReactNode;
}

export const Page = ({ children }: PageProps) => {
  return <>{children}</>;
};
