import Layout from './../components/Layout';
import { skills } from "./../profile";
const Index = () =>


    <Layout>
        <header className='row'>
            <div className='col-md-12'>
                <div className='card card-body bg-secondary'>
                    <div className='row'>
                        <div className='col-md-4'>
                            <img src='' alt=''></img>
                        </div>
                        <div className='col-md-8'>
                            <h1>Fernando Perez</h1>
                            <h4>Front - End Developer</h4>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod repudiandae suscipit exercitationem minima saepe. Vel possimus ex commodi! Iure illum fugit dolore totam delectus quod. Deserunt harum, alias dolorem magni minus minima blanditiis nesciunt architecto natus ipsam officia eaque sit.</p>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        <div className="col-md-12">
                <div className='col-md-4 py-4'>
                    <div className='card card-body bg-secondary'>
                        <h3>Skills</h3>
                    </div>
                    
                </div>
        </div>
    </Layout>

export default Index;