import Footer from "@/components/Footer";
import Header from "@/components/Header";


const WatchPage = () => {


    return (
        <div className="w-[100%] h-[100vh] bg-black flex flex-col items-center justify-center">
  <video className="w-[90%] h-[90vh] rounded-[4px] border-none outline-none" controls autoPlay muted>
  onClick={e => { router.push("/watch") }}
<source src="/images/video.mp4"></source>
          </video>
             <img src="/images/Netflix_2015_N_logo.svg.png" className="absolute top-12 left-64 w-[30px]"></img>
             
        </div>
    )
}



export default WatchPage;