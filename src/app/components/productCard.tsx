import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  product: {
    id: number;
    title: string;
    price: string;
    description: string;
    image: string;
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="w-1/4 p-2">
      <Link href={`/products/${product.id}`} passHref>
        <div className="rounded-lg border border-gray-400 hover:border-secondary_color cursor-pointer p-2">
          <div className="flex justify-center">
            <Image
              src={product.image}
              alt={product.title}
              width={500}
              height={500}
              className="h-44 w-auto"
            />
          </div>
          <p className="truncate font-semibold mt-2">{product.title}</p>
          <p className="truncate font-sm text-gray-500">
            {product.description}
          </p>
          <p className="text-right font-bold text-lg mt-1">${product.price}</p>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
