interface ProductProps {
	params: {
		id: string;
	};
}

export async function generateMetadata({ params }) {
	return {
    title: `Produto ${params.id}` ,
  };
}

export default function Product({ params }: ProductProps) {
	return <h1>Product: {params.id}</h1>;
}
