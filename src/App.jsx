import { useState } from 'react';
import './App.css';

import { jobData } from './data';

function App() {
  const [tags, setTags] = useState([]);

  const filteredData = jobData.filter((d) => {
    const tagsArray = [d.role, d.level, ...d.tags];
    return tags.every((t) => tagsArray.includes(t));
  });

  return (
    <div>
      <div className='header'>
        {/* <img src='/bg-header-desktop.svg' alt='' /> */}
      </div>

      {tags.length > 0 && (
        <div className='tagfilter'>
          <div className='filtered-tags'>
            {tags.map((tag) => (
              <p key={tag}>
                {tag}{' '}
                <span
                  onClick={() => {
                    setTags(tags.filter((t) => t !== tag));
                  }}
                  className='remove-tag'
                >
                  X
                </span>{' '}
              </p>
            ))}
          </div>

          <button
            onClick={() => {
              setTags([]);
            }}
          >
            clear
          </button>
        </div>
      )}
      <div className='joblist'>
        {filteredData.map((job) => (
          <>
            <div key={job.companyName} className='job'>
              <img src={job.img} alt='' />

              <div className='main'>
                <div className='top-text'>
                  <h1>{job.companyName} </h1>
                  {job.new && <p>NEW!</p>}
                  {job.featured && <p> Featured</p>}
                </div>

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
                      setTags([...new Set([...tags, tag])]);
                    }}
                  >
                    {tag}
                  </p>
                ))}
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}

export default App;
