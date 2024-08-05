export default function PagesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="border border-green-900 py-32 max-w-2xl mx-auto shadow-2xl flex flex-col items-center">
        {children}
    </div>
  )
}
