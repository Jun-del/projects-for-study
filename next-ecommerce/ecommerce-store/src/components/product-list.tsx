import { Product } from "@/types";
import NoResult from "@/components/ui/no-result";
import ProductCard from "@/components/ui/product-card";

interface ProductListProps {
  title: string;
  items: Product[] | undefined;
}

const ProductList: React.FC<ProductListProps> = ({ title, items }) => {
  if (!items) {
    return;
  }

  return (
    <div className="space-y-4">
      <h3 className="text-3xl font-bold">{title}</h3>
      {items.length === 0 && <NoResult />}

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {items.map((item) => (
          <ProductCard key={`ProductList${item.id}`} data={item} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
