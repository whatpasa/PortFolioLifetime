import Layout from './../components/Layout';
import { skills } from "./../profile";
import { experience } from "./../experience";
const blog = () =>


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

        <div className="row">

            <div className='col-md-4 py-4'>
                <div className='card card-body bg-secondary'>
                    <h3>Skills: </h3>

                    {skills.map(({ skill, percentage, level }, i) => (
                        <>
                            <div className="py-3" key={i}>
                                <h5>{skill}</h5>
                                <div className="progress bg-info-subtle">
                                    <div
                                        className={`progress-bar ${level}`}
                                        role='progressbar'
                                        style={{ width: `${percentage}%` }}
                                    >
                                    </div>
                                </div>
                            </div>
                        </>
                    ))}
                    <div>
                        <span class="badge bg-success p-2 m-1">Intermediate</span>
                        <span class="badge bg-danger p-2 m-1">Advanced</span>
                    </div>
                </div>
            </div>
            <div className="col-md-8 py-4">
                <div className="card card-body bg-secondary">
                    <h3>Experience: </h3>
                    {experience.map(({ locate, period, work, job }, i) => (
                        <>
                            <div className="py-3" key={i}>
                                <h4 className=''>Workplace: {locate}</h4>
                                <h5>Work Period: {period} </h5>
                                <h5>Job Position: {job}</h5>
                                <h5>{work}</h5>
                            </div>
                        </>
                    ))}
                </div>
            </div>

        </div>
    </Layout>

export default blog;