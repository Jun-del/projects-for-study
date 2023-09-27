export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // TODO: semantic
    <div className="flex justify-center items-center h-full">{children}</div>
  );
}
