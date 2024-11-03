import '../styles/Service.css';

const Service = () => {

  return (
    <div className='service'>
        <div className='work_in'>
        <h1>Our service started
        work in New York</h1>
        <p>We make delivery exactly at the time you need - we can start to fulfill the order a few minutes after it arrives, or we can deliver on a specific day and hour.</p>
        <a href='#'>Read more &gt;</a>
        </div>
        <div className='how_it'>
            <h2>How it works</h2>
            <iframe
       
          src="https://www.youtube.com/watch?v=XuFaQSW79rM&ab_channel=VladMishustin" // замените YOUR_VIDEO_ID на ID видео
          title="YouTube video player"
         
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        </div>
</div>    
  );
};

export default Service ;