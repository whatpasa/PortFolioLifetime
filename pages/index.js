import Layout from './../components/Layout';
import Image from "next/image";

const Index = () => (
  <Layout>
    <div className="my-4 d-flex justify-content-center align-items-center">
      <Image
        // src="/img/profile.png"
        width={300} // Ancho de la imagen
        height={350} // Alto de la imagen
      />    
    </div>
    <div className="d-flex justify-content-center">
      <h1>Fernando Perez</h1>
    </div>
  </Layout>
);

export default Index;
