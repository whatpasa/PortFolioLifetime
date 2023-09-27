import Layout from './../components/Layout';
import Image from "next/image";

const Index = () => (
  <Layout>
    <div className="d-flex justify-content-center">
      <Image
        src="/img/profile.png"
        width={300} // Ancho de la imagen
        height={400} // Alto de la imagen
      />
    </div>
  </Layout>
);

export default Index;
