import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useRouter } from "next/router";


const WatchId = () => {
const router = useRouter()

    return (
        <div className="w-[100%] h-[100vh] bg-black flex flex-col items-center justify-center">
            
  {/* <video className="w-[90%] h-[90vh] rounded-[4px] border-none outline-none" controls autoPlay muted>
  onClick={e => { router.push("/watch") }}
            <source src={router.query.src}></source>
          </video> */}
          <iframe className="w-[90%] h-[90vh] rounded-[4px] border-none outline-none" src={router.query.src} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
             <img src="/images/Netflix_2015_N_logo.svg.png" className="absolute top-12 left-64 w-[30px]"></img>
        </div>
        
    )
}



export default WatchId;