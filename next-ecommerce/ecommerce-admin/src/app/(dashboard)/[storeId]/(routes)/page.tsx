import prismadb from "@/lib/prismadb";

type DashboardPageProps = {
  params: { storeId: string };
};

const DashboardPage: React.FC<DashboardPageProps> = async ({ params }) => {
  const store = await prismadb.store.findFirst({
    where: {
      id: params.storeId,
    },
  });

  return (
    <div>
      <h1>This is a dashboard</h1>
      <h1>Store id: {store?.name}</h1>
    </div>
  );
};

export default DashboardPage;
