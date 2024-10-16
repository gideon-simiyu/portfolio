function Experience() {
    return (
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical timeline-centered">
        <li>
          <div className="timeline-middle h-16">
            <span className="bg-success/20 flex size-8 items-center justify-center rounded-full">
              <span className="icon-[tabler--school] text-success size-5"></span>
            </span>
          </div>
          <div className="timeline-start me-4 mt-8 max-md:pt-2">
            <div className="text-base-content text-sm font-normal">
              <p>Nov 2020</p>
              <p>Apr 2024</p>
            </div>
          </div>
          <div className="timeline-end ms-4 mb-8">
            <div className="card">
              <div className="card-body gap-4">
                <h5 className="card-title text-lg text-primary text-pretty">
                  Maseno University
                </h5>
              </div>
            </div>
          </div>
          <hr />
        </li>
  
        <li className="timeline-shift">
          <div className="timeline-middle h-16">
            <span className="bg-success/20 flex size-8 items-center justify-center rounded-full">
              <span className="icon-[tabler--school] text-success size-5"></span>
            </span>
          </div>
          <div className="timeline-end mt-6 px-1 md:mt-8">
            <div className="text-base-content text-sm font-normal">
              <p>Feb 2016</p>
              <p>Nov 2019</p>
            </div>
          </div>
          <div className="timeline-start me-4 mb-8">
            <div className="card">
              <div className="card-body gap-4">
                <h5 className="card-title text-lg text-primary">
                  Bikeke Boys Secondary
                </h5>
              </div>
            </div>
          </div>
          <hr />
        </li>
        
        <li>
          <div className="timeline-middle h-16">
            <span className="bg-success/20 flex size-8 items-center justify-center rounded-full">
              <span className="icon-[tabler--school] text-success size-5"></span>
            </span>
          </div>
          <div className="timeline-start me-4 mt-8 max-md:pt-2">
            <div className="text-base-content text-sm font-normal">
              <p>Jan 2008</p>
              <p>Nov 2015</p>
            </div>
          </div>
          <div className="timeline-end ms-4 mb-8">
            <div className="card bg-opacity-60 backdrop-blur-sm">
              <div className="card-body gap-4">
                <h5 className="card-title text-lg text-primary text-pretty">
                  Bikeke Primary
                </h5>
              </div>
            </div>
          </div>
          <hr />
        </li>
      </ul>
    );
  }
  
  export default Experience;
  