import Layout from '../components/Layout';
import Productitem from '../components/Productitem';
import data from '../utils/product.json';

export default function Home() {
  return (
    <Layout title="XM42 | Homepage">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {data.products.map((product) => (
          <Productitem product={product} key={product.id}></Productitem>
        ))}
      </div>
    </Layout>
  );
}
