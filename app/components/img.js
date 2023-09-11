
import { BiMoviePlay,BiVideoRecording,BiWinkSmile,BiTv,BiRun } from 'react-icons/bi';
import Image from 'next/image'
import Idata from '../api/mo.json'
import Lcard from './L_card'

const getData = async () => {
  const res = await fetch('http://localhost:3000/api/wed',
  {
    //ISR 每30秒更新一次
    next:{
        revalidate:30
    }
  }
  );
  return res.json();
};


const IG = async()=>{
  const data = await getData();
  let toggled = null

  console.log("  const data = await getData~~~  ",data);

  const bg_co="cursor-pointer bg-slate-950 z-50 bg-opacity-20  absolute w-full h-full top-0 left-0 overflow-hidden rounded-xl hover:bg-opacity-0  hover:border-4 border-orange-400";
  //xl:text-6xl lg:text-5xl md:text-3xl sm:text-[26px] xs:text-xl
  const font_famous="font-bold text-[1.5rem]";
  const tag_item="my-2 flex-wrap md:flex text-white bg-white bg-opacity-30 hover:bg-blue-400 px-3 py-2 rounded-md  font-medium";
  const cent="justify-center items-center"
  const items=['功夫','复仇者联盟','星球大战','孤狼']
  return (  
    <>
    {/* --------------------------------------------------- */}
     <div className=" w-[100vw] h-full flex space-x-2 justify-center items-center " >
      {items.map((item, index) => (
        // eslint-disable-next-line react/jsx-key
          <div key={index} className=" w-1/2 h-full relative rounded-xl overflow-hidden">
            <div className={bg_co}><h1 className="text-white text-center text-lg font-bold">{item}</h1></div>
          </div>
        ))}
      </div>

      {/* ------------------------------------- */}
      {/* cat compoment */}
      <div className=" w-full h-auto flex  space-x-2 justify-between items-center my-2" >
        <div className=" w-2/6 h-full relative rounded-xl overflow-hidden flex justify-center items-center">
          {/* <Image src="/cat.webm" 
          width={300} height={400} 
          alt='Cat_animo' 
          className='w-20vw h-full' 
          playbackRate={1} // 控制播放速率
          autoPlay // 自动播放
          loop // 循环播放
          muted
          /> */}
         <video 
            src="/cat.webm"
            autoPlay
            loop
            muted
            width={300}
            height={400} 
          />

        </div>
        <div className='w-4/6 leading-6 space-y-2 xs:space-y-1  sm:space-y-2 md:space-y-4 lg:space-y-8  '> 
          <p className={font_famous}>Life is like riding a bicycle</p>
          <p className={font_famous}>To keep your balance </p>
          <p className={font_famous}> You must keep moving!</p>
        </div>
      </div>
    {/* ----------------- select-list -------------------- */}
    <div className=" space-x-2 flex flex-wrap justify-center space-2">
     {/*  {tag_N.map((item)=>{
        return(
          <>
          <a href="#" className={`${tag_item} ${cent}`}><BiMoviePlay color='orange' size={28} className=' m-auto md:mr-1'/>{item}</a>
          </>
        )
      })} */}
      <a href="#" className={`${tag_item} ${cent}`}><BiMoviePlay color='orange' size={28} className='m-auto md:mr-1'/>电影</a>
      <a href="#" className={`${tag_item} ${cent}`}><BiWinkSmile color='orange' size={28} className='m-auto md:mr-1'/>综艺</a>
      <a href="#" className={`${tag_item} ${cent}`}><BiTv color='orange' size={28} className='m-auto md:mr-1'/>电视剧</a>
      <a href="#" className={`${tag_item} ${cent}`}><BiVideoRecording color='orange' size={28} className='m-auto md:mr-1'/>纪录片</a>
      <a href="#" className={`${tag_item} ${cent}`}><BiRun color='orange' size={28} className='m-auto md:mr-1'/>体育</a>

    </div>
    {/* --------------------------------------------------- */}
    {/* Card List */}
      <div className='w-full  space-4 '>
        <span className=' font-bold text-xl m-2 flex items-center justify-start'><BiMoviePlay color='orange' size={30} className='mx-2'/>Top</span>
          <Lcard  Idata={Idata}/>
           {/*  <SEL Mdata={toggled}></SEL>
              <p>__________________________________</p>
              <CLient></CLient> */}
                
      </div>
     </>
  )
}


export default IG;















  //const [udata,setUdata]=useState('');
 /*  useEffect(() => {
    console.log('props',Idata); 
  });

  useEffect(() => { 
    /* 为了数据更新视图
    setRenderedData(renderData(Idata));
  }, [Idata]);
  const [renderedData, setRenderedData] = useState(null);

  const dispatch = useDispatch(); 
  */
  
/* --------------------------------------------- */
  //List car item 渲染
/*   const renderData = (Idata) => {
    if (!Idata) {
      return <p>Loading...</p>;
    }

    return Idata.map((item, index) => ( 
      // eslint-disable-next-line react/jsx-key
    <Link href="/info" 
    onClick={()=>{
N    console.log("点击了卡片" ,item)}
    } key={index}  >
      <div className="w-80 h-[50vh] rounded-t-2xl m-2 bg-black overflow-hidden  hover:text-orange-500 text-base ">
          <div className='relative rounded-t-2xl w-full h-4/6 '>
          <Image  
          src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`} 
          className='w-full h-full '
          alt='BG'
          width={500}
          height={500}
          loading="lazy"
          placeholder="blur" // 模糊化处理原始图片
          blurDataURL="./favicon.png" // 自定义模糊 placeholder 图片 
          onLoadingComplete={()=>{console.log('加载OK~')}} 
          />
          <div className=' absolute bottom-0 left-0  w-full h-10  bg-opacity-30 bg-black flex justify-center items-center'>
            <h5 className='text-center font-bold truncate transform hover:scale-200'>{item.title}</h5>
          </div>
        </div>
        <div className='w-full h-36  bg-opacity-30 bg-white p-1 mb-1 overflow-hidden' >
          <p className='text-left p-1 w-full line-clamp-3 leading-1.5'>{item.overview ? item.overview : "暂时无数据"}</p>
        </div>
      </div> 
      </Link>
    ));
  };
 *//* --------------------------------------------- */
