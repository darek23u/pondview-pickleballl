import { useEffect } from 'react';
import { ShowerHead, Toilet, CircleDot, ArrowUpRight } from 'lucide-react';
import { Header, Footer, Photo, Palms, Awning, ScheduleButton } from './UI';
import { InformationPage, titles } from './Pages';
function Home(){return <>
 <section className="hero"><div className="hero-photo"><Photo src="/images/equipment.jpg" alt="Pickleball training equipment beside the pond at Pondview" fetchPriority="high"/></div><div className="hero-shade"/><div className="hero-copy wrap"><p className="eyebrow"><span/>IBA, ZAMBALES · PHILIPPINES</p><h1>Rally.<br/>Recharge.<br/><em>Repeat.</em></h1><p className="hero-description">Find your rhythm at Pondview.<br/>Pickleball, good company, and a little room to unwind.</p><div className="actions"><ScheduleButton/></div></div></section>
 <div className="amenity-strip"><span><ShowerHead/>On-site showers</span><span><Toilet/>Bathroom facilities</span><span><Awning/>Covered Courts</span><span><CircleDot/>Training equipment</span></div>
 <section className="home-discover wrap"><p className="eyebrow">MAKE YOURSELF AT HOME</p><div className="discover-grid">{[{href:'/play/',title:'Find your game',copy:'Court rentals, open play, and lessons.'},{href:'/coach/',title:'Meet the Coach',copy:'Get to know Coach Byron.'},{href:'/facility/',title:'Explore the facility',copy:'Court comforts and answers before your visit.'}].map(x=><a className="discover-card" key={x.href} href={x.href}><h2>{x.title}</h2><p>{x.copy}</p><ArrowUpRight aria-hidden="true"/></a>)}</div></section>
 <section className="home-story wrap" id="our-story" aria-labelledby="story-title">
  <figure className="story-photo"><Photo src="/images/team.jpg" width={1074} height={1018} alt="The Pondview team together at RPO training" loading="lazy"/><figcaption>The Pondview team at RPO training.</figcaption></figure>
  <div><p className="eyebrow">OUR STORY</p><h2 id="story-title">By Pickleballers.<br/><em>For Pickleballers.</em></h2><p>Pondview began with a simple idea: share the game we love and make pickleball more accessible in the Philippines.</p><p>Here in Iba, Zambales, we’re building a welcoming place to learn, find a game, and make new friends. Whether it’s your first rally or your hundredth, there’s room for you on our court.</p><a className="text-link" href="/about/">Read our story</a></div>
 </section>
 <figure className="home-banner wrap"><Photo src="/images/wallpaper.jpg" width={1730} height={909} alt="Pondview Pickleball club artwork with a covered court beside a pond, palms, and the words Rally, Recharge, Repeat" loading="lazy"/><figcaption>Pondview Pickleball · Club artwork</figcaption></figure>
 </>;}
export default function App(){
 const page=window.location.pathname.replace(/\/$/,'');
 useEffect(()=>{document.title=page?`${titles[page]??'Page not found'} | Pondview Pickleball`:'Pondview Pickleball | Iba, Zambales';if(!page&&window.location.hash){const paths:Record<string,string>={'#play':'/play/','#rates':'/play/','#schedule':'/play/','#coaching':'/coach/','#facility':'/facility/','#visit':'/contact/'};const to=paths[window.location.hash];if(to)window.location.replace(to);}},[page]);
 return <><a className="skip" href="#main">Skip to content</a><Header page={page}/><main id="main" className={page?'page-main':'home-main'}><Palms/>{page?<InformationPage page={page}/>:<Home/>}</main><Footer/></>;
}
