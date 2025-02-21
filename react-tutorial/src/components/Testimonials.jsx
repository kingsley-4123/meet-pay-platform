import React from 'react'
import {useState, useEffect} from 'react'
import { getAllJobs } from '../Base_url';
import Testimonial from './Testimonial';

const Testimonials = () => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getAllJobs().then((res) => {
            setJobs(res.data);
            console.log(res.data);
        }).catch(
            error => console.error(error)
        ).finally(() => setLoading(false))
    }, [])

  return (
    <section id="testimonial" className='bg-primary-blue'>
      <div class="container flex flex-col px-4 mx-auto mt-10 mb-5 space-y-12 md:space-y-0">
        <h2 className='flex justify-center mb-3 text-4xl'>Testimonials</h2>
        <div className='flex flex-col space-x-2 space-y-3 p-3 md:flex-row md:space-y-0'>
        {loading ? (<h2> Loading...</h2>) : (
            <>
                {
                    jobs.map((job) => (
                        <Testimonial key={job.id} jobs={job} />
                    ))
                }
            </>
        )
        }
        
        
        </div>
      </div>
    </section>
        
    
  )
}

export default Testimonials