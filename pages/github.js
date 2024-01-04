import Layout from './../components/Layout';
import { contact } from "./../profile";
const github = () => (

    <Layout>

        <header className='row'>
            <div className="col-md-12">
                <div className="card card-body bg-secondary">
                    <div className="row">
                        <div className="col-md-4 py-4">
                            <img src="" alt="" />
                            <h1>Contact</h1>
                        </div>
                        {contact.map(({ icon, title, information }, i) => (
                            <>
                                <div className="py-3" key={i}>
                                    <i className={`${icon}`}></i>
                                    <h4>{title}</h4>
                                    <h>{information}</h>

                                </div>

                            </>
                        ))}
                    </div>
                </div>
            </div>

        </header>

    </Layout>

)

export default github;