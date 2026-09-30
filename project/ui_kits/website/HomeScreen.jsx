const {HeroSlide,Carousel,Eyebrow,SectionHeading,Button,StatCard,MediaShowcase,ProgramRow,FeatureCard,EventCard,IconButton}=window.DS||{};
const HEROES=[
 {image:"../../assets/imagery/hero-christchurch.png",headline:"Fully Funded Graduate Studentship For 2025-2026.",body:"Check our selection of studentship accepting applications now"},
 {image:"../../assets/imagery/radcliffe-dome.png",headline:"Undergraduate Open Day, All Colleges.",body:"Meet tutors, tour the colleges and sit in on a sample tutorial"},
 {image:"../../assets/imagery/news-radcliffe-sky.png",headline:"Oxford Named Best University in the World.",body:"A record ninth consecutive year at the top of the global rankings"}];
const STATS=[
 {label:"Students",value:"25,000+",description:"Across undergraduate and postgraduate levels"},
 {label:"Research Centers",value:"100+",description:"World-leading innovations hub"},
 {label:"Colleges",value:"39",description:"Each with its own tutors and community"},
 {label:"Nobel Laureates",value:"70+",description:"Across the sciences, medicine and literature"}];
const FACILITIES=[
 {watermark:"Library",counter:"02",captionTitle:"Bodleian Libraries",captionBody:"One of the largest and oldest research libraries in Europe, offering access to millions of resources.",image:"../../assets/imagery/facility-bodleian.png"},
 {watermark:"Theatre",counter:"03",captionTitle:"Sheldonian Theatre",captionBody:"The ceremonial heart of the University, host to matriculation, degree days and public lectures.",image:"../../assets/imagery/event-sheldonian.png"}];
const PROGRAMS=[
 {index:"01",title:"Undergraduate",description:"World-class bachelor's degrees with personalised tutorials and a rich academic environment across arts, sciences, and humanities."},
 {index:"02",title:"Graduate",description:"Advanced master's and doctoral studies guided by leading researchers, designed to shape future leaders and experts."},
 {index:"03",title:"Continuing Education",description:"Flexible learning for professionals and adults, offering online and in-person programs to support lifelong development."},
 {index:"04",title:"Short Courses",description:"Quick, focused learning across diverse topics — ideal for upskilling, exploring new interests, or experiencing Oxford in brief."}];
const REASONS=[
 {index:"01",icon:"graduation-cap",title:"Top-Ranked Education",description:"Oxford consistently ranks among the world's top universities, recognised for its academic excellence across humanities, sciences, and social sciences."},
 {index:"02",icon:"landmark",title:"World-Class Faculty",description:"Students learn from world-renowned scholars and researchers at the forefront of their fields, including Nobel Laureates, policy advisors, and innovators."},
 {index:"03",icon:"book-open-text",title:"Unique Collegiate System",description:"At Oxford, you're not just part of a university, you belong to one of 39 colleges that provide personal academic support and close-knit communities.",raised:true},
 {index:"04",icon:"globe",title:"Global Network & Impact",description:"Oxford is home to students from over 160 countries and a vast international alumni network. Oxford's influence reaches across continents and industries."}];
const EVENTS=[
 {image:"../../assets/imagery/event-sheldonian.png",title:"AI and the Future of Ethics",year:"2025",venue:"Sheldonian Theatre",ratio:"4/3"},
 {image:"../../assets/imagery/event-museum.png",title:"Oxford Science Festival",year:"2025",venue:"University Museum",ratio:"3/2"},
 {image:"../../assets/imagery/news-bodleian-gate.png",title:"Shakespeare in the Garden",year:"2025",venue:"Trinity Garden",ratio:"3/2"},
 {image:"../../assets/imagery/radcliffe-dome.png",title:"Undergraduate Open Day",year:"2025",venue:"On Campus (All Colleges)",ratio:"4/3"}];

function HomeScreen({onNavigate}){
  const [hero,setHero]=React.useState(0);
  const [stat,setStat]=React.useState(0);
  const [fac,setFac]=React.useState(0);
  const h=HEROES[hero],fa=FACILITIES[fac];
  const visible=[STATS[stat%4],STATS[(stat+1)%4]];
  return <>
    <div style={{padding:"14px 14px 0"}}>
      <HeroSlide {...h} year="2025" height={430}>
        <Carousel orientation="vertical" count={HEROES.length} index={hero} onChange={setHero} />
      </HeroSlide>
    </div>

    <section style={{padding:"58px 40px 10px",display:"grid",gridTemplateColumns:"170px 1fr",gap:24}}>
      <div style={{fontSize:"var(--fs-body)",paddingTop:76}}><b style={{color:"var(--text-strong)"}}>2025</b><span style={{color:"var(--text-faint)"}}>'S RECAP</span></div>
      <div style={{maxWidth:640}}>
        <Eyebrow style={{marginBottom:12}}>About us</Eyebrow>
        <SectionHeading trail="impact in education, research, and innovation">Our numbers reflect a tradition of excellence and forward-thinking</SectionHeading>
      </div>
    </section>

    <section style={{padding:"46px 40px 62px",display:"grid",gridTemplateColumns:"1fr 1.1fr 1.1fr",gap:22,alignItems:"end"}}>
      <div>
        <SectionHeading size="h1" style={{fontSize:34}}>Oxford at a Glance</SectionHeading>
        <Button style={{marginTop:22}} onClick={()=>onNavigate("About")}>Learn more</Button>
      </div>
      {visible.map(s=><StatCard key={s.label} {...s} />)}
      <div style={{gridColumn:"3",justifySelf:"end",marginTop:14}}><Carousel count={4} index={stat} onChange={setStat} /></div>
    </section>

    <div style={{padding:"0 14px"}}>
      <MediaShowcase {...fa} total="08" eyebrow="Our Facilities" cornerLabel={<>AVAILABLE<br/>FACILITY</>}
        headline="Exceptional Facilities Designed to Support Learning, Research, and Discovery" height={460} />
      <div style={{display:"flex",justifyContent:"flex-end",padding:"14px 26px 0"}}>
        <Carousel count={FACILITIES.length} index={fac} onChange={setFac} />
      </div>
    </div>

    <section style={{padding:"58px 40px 62px"}}>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",gap:40}}>
        <div style={{maxWidth:560}}>
          <Eyebrow style={{marginBottom:12}}>Our Programs</Eyebrow>
          <SectionHeading size="h1">A World-Class Range of <span style={{color:"var(--text-accent)"}}>Academic Programs</span> for Every Ambition and Passion</SectionHeading>
        </div>
        <div style={{width:190,height:112,borderRadius:"var(--radius-media)",overflow:"hidden",flex:"none"}}>
          <img src="../../assets/imagery/program-interior.png" alt="" style={{width:"100%",height:"100%",objectFit:"cover",display:"block"}} />
        </div>
      </div>
      <div style={{marginTop:52}}>
        {PROGRAMS.map((p,i)=><ProgramRow key={p.index} {...p} last={i===PROGRAMS.length-1} onOpen={()=>onNavigate("Admissions")} />)}
      </div>
    </section>

    <div style={{padding:"0 14px"}}>
      <section style={{background:"var(--surface-inverse)",borderRadius:"var(--radius-media)",padding:"46px 34px 40px"}}>
        <Eyebrow tone="inverse" style={{marginBottom:12}}>Why Choose us</Eyebrow>
        <SectionHeading size="h1" tone="inverse" style={{maxWidth:540}}>A Legacy of Excellence, a Future of Possibility</SectionHeading>
        <p style={{maxWidth:330,marginTop:56,fontSize:"var(--fs-body)",lineHeight:"var(--lh-body)",color:"var(--text-on-dark-muted)"}}>
          From world-renowned academics to a one-of-a-kind collegiate experience, discover what sets Oxford apart—and why it's the first choice for scholars, researchers, and leaders from around the globe.</p>
        <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:18,marginTop:52,alignItems:"start"}}>
          {REASONS.map(r=><FeatureCard key={r.index} {...r} style={r.raised?{transform:"translateY(-56px)"}:undefined} />)}
        </div>
      </section>
    </div>

    <section style={{padding:"64px 40px 70px"}}>
      <Eyebrow style={{textAlign:"center",marginBottom:12}}>Events</Eyebrow>
      <SectionHeading size="h1" align="center" style={{maxWidth:640,margin:"0 auto"}}>Lectures, Conferences, Cultural Moments &amp; More</SectionHeading>
      <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:22,marginTop:56,alignItems:"start"}}>
        {EVENTS.map((e,i)=><EventCard key={e.title} {...e} style={{marginTop:i%2?46:0}} />)}
      </div>
    </section>
  </>;
}
Object.assign(window,{HomeScreen});
