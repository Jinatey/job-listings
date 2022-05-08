import { useState } from 'react';
import './App.css';

import { jobData } from './data';

function App() {
  const [tags, setTags] = useState([]);

  console.log(tags);

  return (
    <div>
      <div className='header'>
        <img src='./bg-header-desktop.svg' alt='' />
      </div>
      <div>
        {jobData.map((job) => (
          <div key={job.companyName} className='job'>
            <img src={job.img} alt='' />

            <div className='main'>
              <h1>{job.companyName}</h1>
              <h2>{job.title}</h2>

              <div className='footer'>
                <p>{job.Day}</p>
                <p className='dot'>{job.type}</p>
                <p>{job.location}</p>
              </div>
            </div>

            <div className='tags'>
              {[job.role, job.level, ...job.tags].map((tag) => (
                <p
                  key={tag}
                  className='tag'
                  onClick={() => {
                    setTags([...tags, tag]);
                  }}
                >
                  {tag}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
