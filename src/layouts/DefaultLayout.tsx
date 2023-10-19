import FileController from "components/FileController";

interface DefaultLayoutProps {
  children: React.ReactNode;
}

export default function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <div className="mx-auto max-w-[1080px]">
      {children}
      <FileController />
    </div>
  );
}
